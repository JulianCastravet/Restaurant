export interface Food {
  id: number,
  name: string,
  price: number,
  type: FoodType,
  note?: string
}

export type FoodType = 'appetizer'|'pasta'| 'main'|'side'|'dessert';