// Stryker disable all
import { CoffeeEntity } from '../domain/entities/coffee.entity';
import { CoffeeRepository } from '../domain/repositories/coffee.repository';

export class CoffeeInMemory implements CoffeeRepository {
  constructor(public coffees: CoffeeEntity[]) {
    this.coffees = coffees;
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
