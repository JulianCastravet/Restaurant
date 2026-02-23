import { Component, input, output } from '@angular/core';
import { FoodUnion } from '../interfaces/food.interface';
import { MatIconButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-food-item',
  imports: [MatIconButton, CurrencyPipe, MatIcon],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.scss',
})
export class FoodItemComponent {
  foodItem = input.required<FoodUnion>();
  itemChanged = output<FoodUnion>();

  increaseQuantity(foodItem: FoodUnion) {
    foodItem.quantity++;
    this.itemChanged.emit(foodItem);
  }

  decreaseQuantity(foodItem: FoodUnion) {
    foodItem.quantity--;
    this.itemChanged.emit(foodItem);
  }
}
