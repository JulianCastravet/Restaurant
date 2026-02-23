import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableService } from '../../services/table.service';
import { TableComponent } from '../table/table.component';
import { Table } from '../../interfaces/table.interface';

@Component({
  selector: 'app-floor-layout',
  templateUrl: './floor-layout.component.html',
  styleUrls: ['./floor-layout.component.scss'],
  standalone: true,
  imports: [TableComponent],
})
export class FloorLayoutComponent implements OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();

  tableService$ = inject(TableService);
  firstFloorTables = this.tableService$.firstFloorTables;

  handleTable(table: Table) {
    this.tableService$.placeOrder(table);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }
}
