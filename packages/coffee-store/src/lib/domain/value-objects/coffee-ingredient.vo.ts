export interface CoffeeIngredientValue {
  name: string;
  quantity: number;
}

export interface CoffeeIngredientProps {
    name: string;
    quantity: number;
}

export class CoffeeIngredient {
  constructor(private data: CoffeeIngredientValue) {}

  public static create(data: CoffeeIngredientProps) {
    return new CoffeeIngredient(data);
  }

  get value() {
    return this.data;
  }
}
