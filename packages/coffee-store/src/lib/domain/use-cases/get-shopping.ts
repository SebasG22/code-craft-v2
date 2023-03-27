import { slowProcessing } from '../../utils';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';

export class GetShoppingUseCase {
  constructor(private shoppingCartRepository: ShoppingCartRepository) {}

  execute() {
    const cart = this.shoppingCartRepository.get();
    slowProcessing(cart.totalItems);

    return cart;
  }
}
