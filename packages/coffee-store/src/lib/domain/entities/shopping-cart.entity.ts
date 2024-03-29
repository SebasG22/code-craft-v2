import { Id } from '../value-objects/id.vo';
import { Price } from '../value-objects/price.vo';
import { CoffeeEntity } from './coffee.entity';

export interface ShoppingCartEntityValue {
  id: Id;
  items: { type: CoffeeEntity; quantity: number }[];
}

export interface ShoppingCartEntityProps {
  id?: string;
  items: { type: CoffeeEntity; quantity: number }[];
}

export class ShoppingCartEntity {
  constructor(private data: ShoppingCartEntityValue) {}

  static create(data: ShoppingCartEntityProps) {
    return new ShoppingCartEntity({
      id: data.id ? Id.create(data.id) : Id.generateId(),
      items: data.items,
    });
  }

  public get value() {
    return this.data;
  }

  get totalPrice() {
    return Price.formatValue(
      this.data.items.reduce(
        (accumulator, currentValue) =>
          accumulator +
          currentValue.type.value.price.value * currentValue.quantity,
        0
      )
    );
  }

  getTotalPricePerItem(id: Id) {
    const itemIndex = this.data.items.findIndex(
      (item) => item.type.value.id.value === id.value
    );

    if (itemIndex > -1) {
      const item = this.data.items[itemIndex];

      return Price.formatValue(item.quantity * item.type.value.price.value);
    }
    throw new Error('Item does not exist');
  }

  get totalItems() {
    return this.data.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0
    );
  }

  get serializeValue() {
    return {
      id: this.data.id.value,
      items: this.data.items.map((item) => ({
        type: item.type.serializeValue,
        quantity: item.quantity,
        totalPerItem: this.getTotalPricePerItem(item.type.value.id),
      })),
      totalPrice: this.totalPrice,
      totalItems: this.totalItems,
    };
  }
}
