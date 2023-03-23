import { CoffeeEntity, CoffeeQwikView } from '@code-craft/coffee-store';
import { ShoppingCartEntity } from 'packages/coffee-store/src/lib/domain/entities/shopping-cart.entity';
import { getCoffeePresenterQwik } from './dependenciesLocator';

export type CoffeeQwikstate = {
  name: string;
  list?: any[];
  cart: any;
};

export class CoffeeQwikViewImpl implements CoffeeQwikView {
  public presenter = getCoffeePresenterQwik(this);
  public state?: CoffeeQwikstate;
  start(qwikState: CoffeeQwikstate) {
    this.state = qwikState;
  }
  showCoffees(coffees: CoffeeEntity[], qwikState: CoffeeQwikstate) {
    const serialize = coffees.map((coffee) => coffee.serializeValue);
    qwikState.list = serialize;
  }

  showShoppingCart(cart: ShoppingCartEntity): void {
    const serialize = cart.serializeValue;
    if (this.state) {
      this.state.cart = serialize;
    }
  }
}
