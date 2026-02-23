import { Drink } from './drink.interface';

export interface Food {
  id: number;
  name: string;
  price: number;
  type: FoodType;
  note?: string;
  quantity: number;
}

export type FoodType = 'starter' | 'pasta' | 'main' | 'side' | 'dessert';

export type FoodUnion = Food | Drink;
