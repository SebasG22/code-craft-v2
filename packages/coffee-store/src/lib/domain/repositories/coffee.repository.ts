import { CoffeeEntity } from '../entities/coffee.entity';

export interface CoffeeRepository {
  getAll(): CoffeeEntity[];
  getCoffeeByName(name: string): CoffeeEntity | void;
}
