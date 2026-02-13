import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-table-places',
  imports: [],
  templateUrl: './table-places.component.html',
  styleUrl: './table-places.component.scss',
})
export class TablePlacesComponent {
  totalConsumers = signal<string>('');
  submitPeople = output<number>();

  numbers = [
    {
      title: 1,
      value: 1,
    },
    {
      title: 2,
      value: 2,
    },
    {
      title: 3,
      value: 3,
    },
    {
      title: 4,
      value: 4,
    },
    {
      title: 5,
      value: 5,
    },
    {
      title: 6,
      value: 6,
    },
    {
      title: 7,
      value: 7,
    },
    {
      title: 8,
      value: 8,
    },
    {
      title: 9,
      value: 9,
    },
    {
      title: 0,
      value: 0,
    },
  ];

  public onNumberPress(number: number) {
    this.totalConsumers.update((v) => v + String(number));
  }

  public removeLastChar() {
    this.totalConsumers.update((v) => v.slice(0, -1));
  }

  public submitConsumers() {
    this.submitPeople.emit(parseInt(this.totalConsumers(), 10));
  }
}
