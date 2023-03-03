import { CoffeeEntity } from "../entities/coffee.entity";
import { ShoppingCartEntity } from "../entities/shopping-cart.entity";

export interface ShoppingCartRepository {
    addItem(coffee: CoffeeEntity): void;
    getOrder(): ShoppingCartEntity
    getTotalOrder(): number;
}