import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';

export class RemoveItemFromShoppingCartUseCase {
  constructor(private shoppingCartRepository: ShoppingCartRepository) {}

  execute(id: string) {
    const items = this.shoppingCartRepository.get().value.items;

    const itemOnCartIndex = items.findIndex(
      (item) => item.type.value.id.value === id
    );

    if (itemOnCartIndex > -1) {
      items.splice(itemOnCartIndex, 1);

      const cart = ShoppingCartEntity.create({
        items: items,
      });

      this.shoppingCartRepository.save(cart);
    } else {
      throw new Error('Item cannot be removed because does not exist');
    }
  }
}
