export interface Food {
  id: number;
  name: string;
  price: number;
  type: FoodType;
  note?: string;
}

export type FoodType = 'starter' | 'pasta' | 'main' | 'side' | 'dessert';
