import { CoffeeEntity } from "../entities/coffee.entity";
import { CoffeeRepository } from "../repositories/coffee.repository";

export class CofeeeInMemory implements CoffeeRepository {

    coffees: CoffeeEntity[] = [];

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