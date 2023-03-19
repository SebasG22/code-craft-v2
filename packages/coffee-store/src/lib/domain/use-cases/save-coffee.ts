import { CoffeeEntity } from "../entities/coffee.entity";
import { CoffeeRepository } from "../repositories/coffee.repository";

export class saveCoffee {
    constructor(private coffeeRepository: CoffeeRepository){}

    execute(data: CoffeeEntity){
        const coffee = this.coffeeRepository.getCoffeeByName(data.value.name);
        if(!coffee){
            this.coffeeRepository.save(data);
        }
        throw Error("Coffee already created !");
    }
}
