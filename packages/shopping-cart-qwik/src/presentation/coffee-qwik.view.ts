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
  public state?: CoffeeQwikstate = {
    cart: {},
    list: [],
    name: ''
  };
  start(qwikState: CoffeeQwikstate) {
    if(qwikState){
      this.state = qwikState;
    }
  }
  showCoffees(coffees: CoffeeEntity[]) {
    const serialize = coffees.map((coffee) => coffee.serializeValue);
    console.warn('este es coffesss', {state: this.state});
    if (this.state) {
    this.state.list = serialize;
    }
  }

  showShoppingCart(cart: ShoppingCartEntity): void {
    console.warn('este es', {state: this.state});
    const serialize = cart.serializeValue;
    if (this.state) {
      this.state.cart = serialize;
    }
  }
}
