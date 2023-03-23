import { ShoppingCartEntity } from "../entities/shopping-cart.entity";

export interface ShoppingCartRepository {
    save(cart: ShoppingCartEntity): void;
    get(): ShoppingCartEntity
}