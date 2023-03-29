import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { RemoveOneItemFromShoppingCartUseCase } from './remove-one-item-shopping';
import { GetShoppingUseCase } from './get-shopping';
import { ShoppingCartInMemory } from '../../data/shopping-cart-in-memory';

describe('Remove Item Shopping Use Case', () => {
  let cart: ShoppingCartEntity;
  let repo: ShoppingCartInMemory;
  let getShoppingUseCase: GetShoppingUseCase;
  let removeOneItemUseCase: RemoveOneItemFromShoppingCartUseCase;
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
          quantity: 1,
        },
        {
          type: CoffeeEntity.create({
            ingredients: [],
            name: 'mocha',
            price: 2,
            id: 'demo-mocha',
          }),
          quantity: 2,
        },
      ],
    });
    repo = new ShoppingCartInMemory(cart);
    getShoppingUseCase = new GetShoppingUseCase(repo);
    removeOneItemUseCase = new RemoveOneItemFromShoppingCartUseCase(repo);
  });

  it('should remove the item if quantity is 0', () => {
    removeOneItemUseCase.execute('demo-capuccino');

    const result = getShoppingUseCase.execute();
    expect(result.totalItems).toEqual(2);
    expect(result.value.items.length).toEqual(1);
  });

  it('should reduce the quantity', () => {
    removeOneItemUseCase.execute('demo-mocha');
    const result = getShoppingUseCase.execute();
    expect(result.totalItems).toEqual(2);
    expect(result.value.items.length).toEqual(2);
  });

  it('should throw an error if the id is invalid', () => {
    expect(() => removeOneItemUseCase.execute('demo-mocha-1')).toThrow(
      'Item cannot be removed because does not exist'
    );
  });
});
