import { CoffeeEntity } from '../domain/entities/coffee.entity';
import { ShoppingCartEntity } from '../domain/entities/shopping-cart.entity';
import { GetAllCoffeesUseCase } from '../domain/use-cases/get-all-coffees';
import { GetShoppingUseCase } from '../domain/use-cases/get-shopping';
import { SaveCoffeeItemIntoShoppingCartUseCase } from '../domain/use-cases/save-item-shopping';

export interface CoffeeQwikView {
  showCoffees(coffes: CoffeeEntity[]): void;
  showShoppingCart(cart: ShoppingCartEntity): void;
  // addItemShoppingCart(id: string): void;
  // listCoffees(coffees: CoffeeEntity[]): void;
  // listShoppingCartItems(cart: ShoppingCartEntity, total: number): Promise<void>;
  // addCoffeeToOrder(
  //   id: string
  // ): Promise<void>;
}

export class CoffeeQwikPresenter {
  constructor(
    public view: CoffeeQwikView,
    public getAllCoffeeUseCase: GetAllCoffeesUseCase,
    public getShoopingCartUseCase: GetShoppingUseCase,
    public saveCoffeeItemIntoShoppingCartUseCase: SaveCoffeeItemIntoShoppingCartUseCase
  ) {}

  getCoffeeEntity(coffees: CoffeeEntity[], id: string) {
    return coffees.find((coffee) => coffee.value.id.value === id);
  }

  showCoffees() {
    const coffees = this.getAllCoffeeUseCase.execute();
    this.view.showCoffees(coffees);
  }

  addItemShoppingCart(id: string) {
    const coffees = this.getAllCoffeeUseCase.execute() as CoffeeEntity[];
    const coffee = this.getCoffeeEntity(coffees, id);
    if (coffee) {
      this.saveCoffeeItemIntoShoppingCartUseCase.execute(coffee);
      const cart = this.getShoopingCartUseCase.execute();
      this.view.showShoppingCart(cart);
    }
  }
}