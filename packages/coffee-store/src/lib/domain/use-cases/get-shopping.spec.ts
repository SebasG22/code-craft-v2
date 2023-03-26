/* eslint-disable @typescript-eslint/no-empty-function */
import { ShoppingCartInMemory } from '../../data/shopping-cart-in-memory';
import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { GetShoppingUseCase } from './get-shopping';

const coffess = [
  CoffeeEntity.create({
    ingredients: [],
    name: 'Cappuccino',
    price: 2,
    id: 'demo-capuccino',
  }),
];

const cart = ShoppingCartEntity.create({
  items: [
    {
      type: coffess[0],
      quantity: 5,
    },
  ],
});

describe('Get Shopping Use Case', () => {
  it('Should return the shopping cart', () => {
    const repo = new ShoppingCartInMemory(cart);
    const useCase = new GetShoppingUseCase(repo);

    const result = useCase.execute();

    expect(result).toEqual(cart);
  });
});
