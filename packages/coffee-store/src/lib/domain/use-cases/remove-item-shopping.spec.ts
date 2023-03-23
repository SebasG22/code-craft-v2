import { CoffeeEntity } from '../entities/coffee.entity';
import { ShoppingCartEntity } from '../entities/shopping-cart.entity';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';
import { RemoveItemItemFromShoppingCartUseCase } from './remove-item-shopping';
import { GetShoppingUseCase } from './get-shopping';

class ShoppingCartLocal implements ShoppingCartRepository {

  constructor(public cart: ShoppingCartEntity){
    this.cart = cart;
  }
  
  
    save(cart: ShoppingCartEntity) {
      this.cart = cart;
    }
  
    get(): ShoppingCartEntity {
      return this.cart;
    }
  }
  
describe.only('Remove Item Shopping Use Case', ()=> {

    it('should remove the item if quantity is 0',()=>{
      const cart = ShoppingCartEntity.create({ items: [
        {
            type: CoffeeEntity.create({
                ingredients: [],
                name: 'Cappuccino',
                price: 2,
                id: 'demo-capuccino',
              }),
            quantity: 1
        }
    ] });
        const repo = new ShoppingCartLocal(cart);
        const getShoppingUseCase = new GetShoppingUseCase(repo);
        const removeItemUseCase = new RemoveItemItemFromShoppingCartUseCase(repo);

        removeItemUseCase.execute('demo-capuccino');

        const result = getShoppingUseCase.execute();
        expect(result.totalItems).toEqual(0);
        expect(result.value.items.length).toEqual(0);


    })

    it('should reduce the quantity',()=>{
      const cart = ShoppingCartEntity.create({ items: [
        {
            type: CoffeeEntity.create({
                ingredients: [],
                name: 'Cappuccino',
                price: 2,
                id: 'demo-capuccino',
              }),
            quantity: 2
        }
    ] });
      const repo = new ShoppingCartLocal(cart);
      const getShoppingUseCase = new GetShoppingUseCase(repo);
      const removeItemUseCase = new RemoveItemItemFromShoppingCartUseCase(repo);

      removeItemUseCase.execute('demo-capuccino');

      const result = getShoppingUseCase.execute();
      expect(result.totalItems).toEqual(1);
      expect(result.value.items.length).toEqual(1);
  })

});