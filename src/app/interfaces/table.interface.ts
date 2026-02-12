import { Drink } from './drink.interface';
import { Food } from './food.interface';

export interface Table {
  id: number;
  name: string;
  people: number; //how many people at the table
  drinks: Drink[]; //what drinks they have
  food: Food[]; //what food they have
  moneyAmmount: number; // the total ammount in euro
  position: PositionType; //where the table is situated
  course: number; //what they eat=> 1=appetizer, 2=pasta, 3=main, 4=dessert
}

export type PositionType = 'first' | 'second' | 'terrace';
