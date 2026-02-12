export interface Drink {
  id: number;
  name: string;
  price: number;
  type: DrinkType;
  note?: string;
}

export type DrinkType = 'soft_drink' | 'cocktail' | 'coffee' | 'wine';
