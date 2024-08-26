export interface Nutrition {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

export interface Fruit {
  id: number;
  name: string;
  family: string;
  genus: string;
  order: string;
  nutritions: Nutrition;
}