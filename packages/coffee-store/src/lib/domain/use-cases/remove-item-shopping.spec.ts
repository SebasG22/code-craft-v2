import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartInMemory } from '../../data/shopping-cart-in-memory';
import { RemoveItemFromShoppingCartUseCase } from './remove-item-shopping';
import { GetShoppingUseCase } from './get-shopping';
import { RemoveOneItemFromShoppingCartUseCase } from './remove-one-item-shopping';

describe('Remove Item Shopping Use Case', () => {
  let cart: ShoppingCartEntity;
  let repo: ShoppingCartInMemory;
  let getShoppingUseCase: GetShoppingUseCase;
  let removeOneItemUseCase: RemoveItemFromShoppingCartUseCase;

  beforeEach(() => {
    cart = ShoppingCartEntity.create({
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
    repo = new ShoppingCartInMemory(cart);
    getShoppingUseCase = new GetShoppingUseCase(repo);
    removeOneItemUseCase = new RemoveItemFromShoppingCartUseCase(repo);
  });

  it('should remove the item', () => {
    removeOneItemUseCase.execute('demo-capuccino');

    const result = getShoppingUseCase.execute();
    expect(result.totalItems).toEqual(0);
    expect(result.value.items.length).toEqual(0);
  });

  it('should throw an error when the item does not exist', () => {
    expect(() => removeOneItemUseCase.execute('demo-capuccino-1')).toThrowError(
      'Item cannot be removed because does not exist'
    );
  });
});
