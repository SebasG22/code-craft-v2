import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';

export class SaveCoffeeItemIntoShoppingCartUseCase {
  constructor(private shoppingCartRepository: ShoppingCartRepository) {}

  execute(data: CoffeeEntity) {
    const items = this.shoppingCartRepository.get().value.items;

    const cart = ShoppingCartEntity.create({
      items: [...items, data],
    });

    this.shoppingCartRepository.save(cart);
  }
}
