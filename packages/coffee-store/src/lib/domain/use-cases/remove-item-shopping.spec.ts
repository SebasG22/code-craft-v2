import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartInMemory } from '../../data/shopping-cart-in-memory';
import { RemoveItemFromShoppingCartUseCase } from './remove-item-shopping';
import { GetShoppingUseCase } from './get-shopping';

describe('Remove Item Shopping Use Case', () => {
  it('should remove the item', () => {
    const cart = ShoppingCartEntity.create({
      items: [
        {
          type: CoffeeEntity.create({
            ingredients: [],
            name: 'Cappuccino',
            price: 2,
            id: 'demo-capuccino',
          }),
          quantity: 4,
        },
      ],
    });
    const repo = new ShoppingCartInMemory(cart);
    const getShoppingUseCase = new GetShoppingUseCase(repo);
    const removeOneItemUseCase = new RemoveItemFromShoppingCartUseCase(repo);

    removeOneItemUseCase.execute('demo-capuccino');

    const result = getShoppingUseCase.execute();
    expect(result.totalItems).toEqual(0);
    expect(result.value.items.length).toEqual(0);
  });
});
