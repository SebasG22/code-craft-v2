import { CoffeeRepository } from "../repositories/coffee.repository";

export class GetAllCoffeesUseCase {

    constructor(private coffeeRepository: CoffeeRepository){}

    execute(){
        return this.coffeeRepository.getAll();
    }

}