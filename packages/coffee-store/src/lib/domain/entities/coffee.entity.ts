import {
  CoffeeIngredient,
  CoffeeIngredientProps,
} from '../value-objects/coffee-ingredient.vo';
import { Id } from '../value-objects/id.vo';
import { Price } from '../value-objects/price.vo';

export interface CoffeeEntityValue {
  id: Id;
  name: string;
  price: Price;
  ingredients: CoffeeIngredient[];
}

export interface CoffeeEntityProps {
  id?: string;
  name: string;
  price: number;
  ingredients: CoffeeIngredientProps[];
}

export interface CoffeeEntitySerialize {
  id?: string;
  name: string;
  price: string;
  ingredients: CoffeeIngredientProps[];
}

export class CoffeeEntity {
  constructor(private data: CoffeeEntityValue) {}

  static create(data: CoffeeEntityProps) {
    const ingredients = data.ingredients.map((ingredient) =>
      CoffeeIngredient.create(ingredient)
    );

    return new CoffeeEntity({
      id: data.id ? Id.create(data.id) : Id.generateId(),
      name: data.name,
      price: Price.create({ value: data.price }),
      ingredients: ingredients,
    });
  }

  get value() {
    return this.data;
  }

  get serializeValue() {
    return {
      id: this.data.id.value,
      name: this.data.name,
      price: Price.formatValue(this.data.price.value),
      ingredients: this.data.ingredients.map(
        (ingredient) => ingredient.serializeValue
      ),
    };
  }
}
