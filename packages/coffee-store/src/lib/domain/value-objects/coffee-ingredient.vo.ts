import { Quantity } from './quantity.vo';

export interface CoffeeIngredientValue {
  name: string;
  quantity: Quantity;
}

export interface CoffeeIngredientProps {
  name: string;
  quantity: number;
}

export class CoffeeIngredient {
  constructor(private data: CoffeeIngredientValue) {}

  public static create(data: CoffeeIngredientProps) {
    this.validateName(data.name);
    const quantity = Quantity.create({ quantity: data.quantity });
    return new CoffeeIngredient({ name: data.name, quantity: quantity });
  }

  private static validateName(name: string) {
    if (name.length < 4) {
      throw new Error(
        'Coffee Name does not met the requirements: (4) Characters at least'
      );
    }
  }

  get value() {
    return this.data;
  }

  get serializeValue() {
    return {
      name: this.data.name,
      quantity: this.data.quantity.value,
    };
  }
}
