/* eslint-disable @typescript-eslint/no-empty-function */
import { CoffeeEntity } from '../entities/coffee.entity';
import { GetAllCoffeesUseCase } from './get-all-coffees';

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

describe('Get All Coffees Use Case', () => {
  it('Should return all coffess', () => {
    const useCase = new GetAllCoffeesUseCase({
      getAll: () => coffess,
      getCoffeeByName: () => {},
      save: () => {},
    });

    const result = useCase.execute();

    expect(result).toEqual(coffess);
  });
});
