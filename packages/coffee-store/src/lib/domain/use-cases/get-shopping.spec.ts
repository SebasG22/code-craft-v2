/* eslint-disable @typescript-eslint/no-empty-function */
import { ShoppingCartInMemory } from '../../data/shopping-cart-in-memory';
import * as utils from '../../utils';
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

const slowProcessingSpy = vi.spyOn(utils, 'slowProcessing');

describe('Get Shopping Use Case', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Should return the shopping cart', () => {
    const repo = new ShoppingCartInMemory(cart);
    const useCase = new GetShoppingUseCase(repo);

    const result = useCase.execute();

    expect(result).toEqual(cart);
    expect(slowProcessingSpy).toHaveBeenCalledTimes(1);
  });
});
