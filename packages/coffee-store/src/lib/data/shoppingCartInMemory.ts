import { ShoppingCartEntity } from "../domain/entities/shopping-cart.entity";
import { ShoppingCartRepository } from "../domain/repositories/shopping-cart.repository";

export class ShoppingCartInMemory implements ShoppingCartRepository {
    public cart = ShoppingCartEntity.create({items: []});

    save(cart: ShoppingCartEntity){
        this.cart = cart;
        console.warn("save", JSON.stringify(cart))
    }

    get(): ShoppingCartEntity {
        return this.cart;
    }

    getTotal(): number {
        console.warn("aca" , JSON.stringify(this.cart));
       return this.cart.value.items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.type.value.price.value * currentValue.quantity,
            0
          );
    }
}