import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableService } from '../../services/table.service';
import { AsyncPipe } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { Table } from '../../interfaces/table.interface';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-floor-layout',
  templateUrl: './floor-layout.component.html',
  styleUrls: ['./floor-layout.component.scss'],
  standalone: true,
  imports: [AsyncPipe, TableComponent],
})
export class FloorLayoutComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();

  tableService$ = inject(TableService);
  private dialogService = inject(MatDialog);

  ngOnInit(): void {}

  handleTable(table: Table) {
    console.log(table);
    this.dialogService.open(MenuDialogComponent, {
      data: {
        data: 'some data',
      },
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }
}
