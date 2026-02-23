import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableService } from '../../services/table.service';
import { TableComponent } from '../table/table.component';
import { Table } from '../../interfaces/table.interface';

@Component({
  selector: 'app-second-layout',
  templateUrl: './second-layout.component.html',
  styleUrls: ['./second-layout.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class SecondLayoutComponent implements OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();

  tableService$ = inject(TableService);
  secondFloorTables = this.tableService$.secondFloorTables;

  handleTable(table: Table) {
    this.tableService$.placeOrder(table);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }
}
