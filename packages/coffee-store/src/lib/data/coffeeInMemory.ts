import { CoffeeEntity } from '../domain/entities/coffee.entity';
import { CoffeeRepository } from '../domain/repositories/coffee.repository';
import { data } from './data';

export class CoffeeInMemory implements CoffeeRepository {
  coffees: CoffeeEntity[] = [];

  constructor() {
    this.coffees = data.map((item) =>
      CoffeeEntity.create({
        name: item.name,
        price: item.price,
        ingredients: item.recipe,
      })
    );
  }

  getAll(): CoffeeEntity[] {
    return this.coffees;
  }

  getCoffeeByName(name: string): void | CoffeeEntity {
    this.coffees.find((coffee) => coffee.value.name === name);
  }

  save(coffee: CoffeeEntity): void {
    this.coffees.push(coffee);
  }
}
