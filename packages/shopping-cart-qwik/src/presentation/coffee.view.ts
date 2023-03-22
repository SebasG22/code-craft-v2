import { CoffeeEntity, CoffeeView } from '@code-craft/coffee-store';
import { ShoppingCartEntity } from 'packages/coffee-store/src/lib/domain/entities/shopping-cart.entity';
import { getCoffeePresenter } from './dependenciesLocator';

// export type CoffeeQwikstate = React.Dispatch<
//   React.SetStateAction<{
//     users?: any[];
//   }>
// >;

export class CoffeeQwikView implements CoffeeView {
  public presenter = getCoffeePresenter(this);
  private coffeeQwikState: any;


  start(qwikState: any) {
    this.coffeeQwikState = qwikState;
}

  async showMainMenu(): Promise<string> {
    return Promise.resolve('');
  }

  async confirmOperation(message: string): Promise<boolean> {
   return Promise.resolve(true);
  }

  listSomething(){
    this.presenter.showAllCoffees();
  }

  cancelOperation(): void {
    process.exit(0);
  }

  showEndMessage(message: string) {
    this.cancelOperation();
  }

  showTotalMessage(message: string): void {
    // console.warn(message);
  }

  async addCoffeeToOrder(coffees: CoffeeEntity[]) {
    //
  }

  listCoffees(coffees: CoffeeEntity[]) {
    const serialize = coffees.map((coffee)=>coffee.serializeValue)
    this.coffeeQwikState.list = serialize;
    
  }

  async listShoppingCartItems(
    cart: ShoppingCartEntity,
    total: number
  ){
   return Promise.resolve();
  }

  operationWasCanceled(value: symbol) {
    //
  }
}
