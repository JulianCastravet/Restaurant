import { FoodUnion } from '../interfaces/food.interface';
import { Drink } from '../interfaces/drink.interface';

export function isDrink(food: FoodUnion): food is Drink {
  return (
    food.type === 'soft_drink' ||
    food.type === 'cocktail' ||
    food.type === 'coffee' ||
    food.type === 'wine'
  );
}
