// Stryker disable all
import { CoffeeEntity } from '../domain/entities/coffee.entity';
import { GetAllCoffeesUseCase } from '../domain/use-cases/get-all-coffees';
import { GetShoppingUseCase } from '../domain/use-cases/get-shopping';
import { RemoveItemFromShoppingCartUseCase } from '../domain/use-cases/remove-item-shopping';
import { RemoveOneItemFromShoppingCartUseCase } from '../domain/use-cases/remove-one-item-shopping';
import { SaveItemShoppingCartUseCase } from '../domain/use-cases/save-item-shopping';

export class CoffeeController {
  constructor(
    public getAllCoffeeUseCase: GetAllCoffeesUseCase,
    public getShoopingCartUseCase: GetShoppingUseCase,
    public saveItemShoppingCartUseCase: SaveItemShoppingCartUseCase,
    public removeOneItemShoppingCartUseCase: RemoveOneItemFromShoppingCartUseCase,
    public removeItemShoppingCartUseCase: RemoveItemFromShoppingCartUseCase
  ) {}

  private getCoffeeEntity(coffees: CoffeeEntity[], id: string) {
    return coffees.find((coffee) => coffee.value.id.value === id);
  }

  getAllCoffees() {
    return this.getAllCoffeeUseCase
      .execute()
      .map((item) => item.serializeValue);
  }

  addItemToCart(id: string) {
    const coffees = this.getAllCoffeeUseCase.execute();
    const coffee = this.getCoffeeEntity(coffees, id);
    if (coffee) {
      this.saveItemShoppingCartUseCase.execute(coffee);
    }
  }

  removeOneItemFromCart(id: string) {
    this.removeOneItemShoppingCartUseCase.execute(id);
  }

  remoteItemFromCart(id: string) {
    this.removeItemShoppingCartUseCase.execute(id);
  }

  getShoppingCart() {
    return this.getShoopingCartUseCase.execute().serializeValue;
  }
}
