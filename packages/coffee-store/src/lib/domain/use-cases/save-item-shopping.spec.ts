/* eslint-disable @typescript-eslint/no-empty-function */
import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { SaveCoffeeItemIntoShoppingCartUseCase } from './save-item-shopping';

const coffess = [
  CoffeeEntity.create({
    ingredients: [],
    name: 'Cappuccino',
    price: 2,
    id: 'demo-capuccino',
  }),
  CoffeeEntity.create({
    ingredients: [],
    name: 'Mocha',
    price: 5,
    id: 'demo-mocha',
  }),
];

function withoutItems(): SaveCoffeeItemIntoShoppingCartUseCase {
  const cart = ShoppingCartEntity.create({ items: [] });

  return new SaveCoffeeItemIntoShoppingCartUseCase({
    save: () => {},
    get: () => cart,
    getTotal: () => 2,
  });
}

function withItems(): SaveCoffeeItemIntoShoppingCartUseCase {
  const cart = ShoppingCartEntity.create({
    items: [{ type: coffess[0], quantity: 2 }],
  });

  return new SaveCoffeeItemIntoShoppingCartUseCase({
    save: () => {},
    get: () => cart,
    getTotal: () => 2,
  });
}

describe('Save Item Shopping Use Case', () => {
  it.skip('Should add the item', () => {
    const useCase = withoutItems();

    const result = useCase.execute(coffess[0]);

    expect(result.value.items.length).toEqual(1);
    expect(result.value.items[0].type).toEqual(coffess[0]);
    expect(result.value.items[0].quantity).toEqual(1);
  });

  it('Should increment the quantity when adding the same item', () => {
    const useCase = withItems();

    const result = useCase.execute(coffess[0]);

    expect(result.value.items.length).toEqual(1);
    expect(result.value.items[0].type).toEqual(coffess[0]);
    expect(result.value.items[0].quantity).toEqual(3);
  });

  it('Should persist previous items', () => {
    const useCase = withItems();

    const result = useCase.execute(coffess[1]);

    expect(result.value.items.length).toEqual(2);
    expect(result.value.items[0].type).toEqual(coffess[0]);
    expect(result.value.items[0].quantity).toEqual(2);

    expect(result.value.items[1].type).toEqual(coffess[1]);
    expect(result.value.items[1].quantity).toEqual(1);
  });
});
