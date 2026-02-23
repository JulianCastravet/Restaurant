import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableService } from '../../services/table.service';
import { TableComponent } from '../table/table.component';
import { Table } from '../../interfaces/table.interface';

@Component({
  selector: 'app-terrace-layout',
  templateUrl: './terrace-layout.component.html',
  styleUrls: ['./terrace-layout.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class TerraceLayoutComponent implements OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();

  tableService$ = inject(TableService);
  terraceTables = this.tableService$.terraceTables;

  handleTable(table: Table) {
    this.tableService$.placeOrder(table);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }
}
