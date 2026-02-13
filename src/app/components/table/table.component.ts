import { Component, input, output } from '@angular/core';
import { Table } from '../../interfaces/table.interface';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  table = input<Table>({
    id: 0,
    name: '',
    people: 0,
    drinks: [],
    food: [],
    moneyAmmount: 0,
    position: 'first',
    course: 0,
  });
  onTableClick = output<Table>({});

  emitTableEvent() {
    this.onTableClick.emit(this.table());
  }
}
