import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Table } from '../interfaces/table.interface';
import { TablesData } from '../tablesData';
import { MenuDialogComponent } from '../components/menu-dialog/menu-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private _tables = signal<Table[]>([]);
  unsubscribe$: Subject<void> = new Subject<void>();
  dialogService = inject(MatDialog);

  tables = this._tables.asReadonly();

  constructor() {
    const saved = localStorage.getItem('tables');

    if (saved) {
      this._tables.set(JSON.parse(saved));
    } else {
      this._tables.set(TablesData);
    }

    effect(() => {
      localStorage.setItem('tables', JSON.stringify(this._tables()));
    });
  }

  // -------------------
  // Filtering (computed)
  // -------------------

  terraceTables = computed(() =>
    this._tables().filter((t) => t.position === 'terrace'),
  );

  firstFloorTables = computed(() =>
    this._tables().filter((t) => t.position === 'first'),
  );

  secondFloorTables = computed(() =>
    this._tables().filter((t) => t.position === 'second'),
  );

  // -------------------
  // Update table
  // -------------------

  placeOrder(table: Table) {
    const dialogRef = this.dialogService.open(MenuDialogComponent, {
      data: { table },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((table: Table) => {
        if (table) {
          this.updateTable(table);
        }
      });
  }

  updateTable(updated: Table) {
    this._tables.update((tables) =>
      tables.map((t) => (t.id === updated.id ? updated : t)),
    );
  }

  resetRestaurant() {
    localStorage.removeItem('tables');
    this._tables.set(TablesData);
  }
}
