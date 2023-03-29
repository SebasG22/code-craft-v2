/* eslint-disable @typescript-eslint/no-empty-function */
import { ShoppingCartInMemory } from '../../data/shopping-cart-in-memory';
import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { SaveItemShoppingCartUseCase } from './save-item-shopping';

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

const cartEmpty = ShoppingCartEntity.create({
  items: [],
});

const cartWithItems = ShoppingCartEntity.create({
  items: [
    {
      type: coffess[0],
      quantity: 2,
    },
    {
      type: coffess[1],
      quantity: 4,
    },
  ],
});

describe('Save Item Shopping Use Case', () => {
  it('should add the item', () => {
    const repo = new ShoppingCartInMemory(cartEmpty);
    const useCase = new SaveItemShoppingCartUseCase(repo);

    const result = useCase.execute(coffess[0]);

    expect(result.value.items[0].type).toEqual(coffess[0]);
    expect(result.value.items[0].quantity).toEqual(1);
  });

  it('should increase the item quantity', () => {
    const repo = new ShoppingCartInMemory(cartWithItems);
    const useCase = new SaveItemShoppingCartUseCase(repo);

    const result = useCase.execute(coffess[1]);

    expect(result.value.items[1].type).toEqual(coffess[1]);
    expect(result.value.items[1].quantity).toEqual(5);
  });
});
