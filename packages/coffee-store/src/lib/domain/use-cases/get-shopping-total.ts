import { ShoppingCartRepository } from "../repositories/shopping-cart.repository";

export class GetShoppingTotalUseCase {
    constructor(private shoppingCartRepository: ShoppingCartRepository){}

    execute(){
       return this.shoppingCartRepository.getTotal();
    }
}