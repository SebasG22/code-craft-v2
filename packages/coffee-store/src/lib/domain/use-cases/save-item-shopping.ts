import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';

export class SaveItemShoppingCartUseCase {
  constructor(private shoppingCartRepository: ShoppingCartRepository) {}

  execute(data: CoffeeEntity){
    const items = this.shoppingCartRepository.get().value.items;

    const itemOnCartIndex = items.findIndex(
      (item) => item.type.value.id.value === data.value.id.value
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

    return cart;
  }
}
