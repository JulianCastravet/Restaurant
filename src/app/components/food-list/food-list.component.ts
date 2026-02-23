import { Component, computed, OnInit, output } from '@angular/core';
import { drinks } from '../../drinkData';
import { food } from '../../foodData';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

import { FoodItemComponent } from '../../food-item/food-item.component';
import { FoodUnion } from '../../interfaces/food.interface';
@Component({
  selector: 'app-food-list',
  imports: [MatTabGroup, MatTab, FoodItemComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit {
  public readonly FOOD = food;
  public readonly DRINKS = drinks;
  itemUpdated = output<FoodUnion>();

  cartList = [];

  barList = computed(() =>
    this.DRINKS.filter((drink) => drink.type !== 'wine'),
  );

  wineList = computed(() =>
    this.DRINKS.filter((drink) => drink.type === 'wine'),
  );

  starterList = computed(() =>
    this.FOOD.filter((food) => food.type === 'starter'),
  );

  pastaList = computed(() => this.FOOD.filter((food) => food.type === 'pasta'));

  mainList = computed(() => this.FOOD.filter((food) => food.type === 'main'));

  dessertList = computed(() =>
    this.FOOD.filter((food) => food.type === 'dessert'),
  );

  ngOnInit(): void {}

  onItemChanged(food: FoodUnion) {
    this.itemUpdated.emit(food);
  }
}
