import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { TablePlacesComponent } from '../table-places/table-places.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodUnion } from '../../interfaces/food.interface';
import { isDrink } from '../../utils/is-drink.guard';
import { Table, TableOrder } from '../../interfaces/table.interface';

type DialogData = {
  table: Table;
};

@Component({
  selector: 'app-menu-dialog',
  imports: [
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TablePlacesComponent,
    FoodListComponent,
  ],
  templateUrl: './menu-dialog.component.html',
  styleUrl: './menu-dialog.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDialogComponent {
  readonly dialogRef = inject(MatDialogRef<MenuDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  private _formBuilder = inject(FormBuilder);

  @ViewChild('stepper') stepper!: MatStepper;

  order: TableOrder = {
    people: 0,
    food: [] as FoodUnion[],
    drinks: [] as FoodUnion[],
    total: 0,
  };

  firstFormGroup = this._formBuilder.group({
    places: [0, Validators.required],
  });

  public handleCountStepper(value: number) {
    this.firstFormGroup.controls['places'].setValue(value);
    this.stepper.next();
  }

  handleItemUpdate(item: FoodUnion) {
    const list = isDrink(item) ? this.order.drinks : this.order.food;

    const existing = list.find((i) => i.id === item.id);

    if (item.quantity === 0) {
      this.order.food = this.order.food.filter((i) => i.id !== item.id);
      this.order.drinks = this.order.drinks.filter((i) => i.id !== item.id);
    } else if (!existing) {
      list.push({ ...item });
    } else {
      existing.quantity = item.quantity;
    }

    this.calculateTotal();
  }

  calculateTotal() {
    const allItems = [...this.order.food, ...this.order.drinks];

    const PLACE_PRICE = 2.5;
    this.order.people = this.firstFormGroup.value.places!;
    this.order.total = allItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      PLACE_PRICE * this.order.people,
    );
  }

  submitOrder() {
    const table: Table = {
      ...this.data.table,
      ...this.order,
      moneyAmmount: this.order.total,
    };

    this.dialogRef.close(table);
  }
}
