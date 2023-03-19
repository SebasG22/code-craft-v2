import { ShoppingCartRepository } from "../repositories/shopping-cart.repository";

export class GetShoppingUseCase {
    constructor(private shoppingCartRepository: ShoppingCartRepository){}

    execute(){
       return this.shoppingCartRepository.get();
    }
}