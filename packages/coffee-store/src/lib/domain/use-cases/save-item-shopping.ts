import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';

export class SaveCoffeeItemIntoShoppingCartUseCase {
  constructor(private shoppingCartRepository: ShoppingCartRepository) {}

  execute(data: CoffeeEntity) {
    const items = this.shoppingCartRepository.get().value.items;

    const itemOnCartIndex = items.findIndex(
      (item) => item.type.value.id === data.value.id
    );
    
    if (itemOnCartIndex > -1) {
      items[itemOnCartIndex].quantity += 1;
    } else {
      items.push({ type: data, quantity: 1 });
    }

    const cart = ShoppingCartEntity.create({
      items: items,
    });

    this.shoppingCartRepository.save(cart);
  }
}
