import { Component, computed, OnInit } from '@angular/core';
import { drinks } from '../../drinkData';
import { food } from '../../foodData';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatIconButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-food-list',
  imports: [MatTabGroup, MatTab, CurrencyPipe, MatIconButton, MatIcon],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss',
})
export class FoodListComponent implements OnInit {
  // on item click add 1
  // on item plus icon add 1 more
  // on item minus icon remove 1; icon visible if item selected or more items in cart
  // the total should update

  public readonly FOOD = food;
  public readonly DRINKS = drinks;

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

  increaseQuantity() {}
  decreaseQuantity() {}
}
