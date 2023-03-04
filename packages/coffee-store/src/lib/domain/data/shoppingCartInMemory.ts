import { CoffeeEntity } from "../entities/coffee.entity";
import { ShoppingCartEntity } from "../entities/shopping-cart.entity";
import { ShoppingCartRepository } from "../repositories/shopping-cart.repository";

export class ShoppingCartInMemory implements ShoppingCartRepository {
    public cart = ShoppingCartEntity.create({items: []});

    save(cart: ShoppingCartEntity){
        this.cart = cart;
    }

    get(): ShoppingCartEntity {
        return this.cart;
    }

    getTotal(): number {
        return 1;
    }
}