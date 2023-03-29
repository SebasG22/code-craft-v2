// Stryker disable all
import { ShoppingCartEntity } from '../domain/entities/shopping-cart.entity';
import { ShoppingCartRepository } from '../domain/repositories/shopping-cart.repository';

export class ShoppingCartInMemory implements ShoppingCartRepository {
  constructor(public cart: ShoppingCartEntity) {
    this.cart = cart;
  }

  save(cart: ShoppingCartEntity) {
    this.cart = cart;
  }

  get(): ShoppingCartEntity {
    return this.cart;
  }
}
