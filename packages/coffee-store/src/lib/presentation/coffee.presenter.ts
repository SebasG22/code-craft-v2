import { CoffeeEntity } from '../domain/entities/coffee.entity';
import { ShoppingCartEntity } from '../domain/entities/shopping-cart.entity';
import { GetAllCoffeesUseCase } from '../domain/use-cases/get-all-coffees';
import { GetShoppingUseCase } from '../domain/use-cases/get-shopping';
import { GetShoppingTotalUseCase } from '../domain/use-cases/get-shopping-total';
import { SaveCoffeeItemIntoShoppingCartUseCase } from '../domain/use-cases/save-item-shopping';

export interface CoffeeView {
  showMainMenu(): Promise<string>;
  listCoffees(coffees: CoffeeEntity[]): void;
  listShoppingCartItems(cart: ShoppingCartEntity, total: number): Promise<void>;
  addCoffeeToOrder(
    coffees: CoffeeEntity[]
  ): Promise<{ data: { value: string } }[]>;
  confirmOperation(message: string): Promise<boolean>;
  cancelOperation(message: string): void;
  showEndMessage(message: string): void;
  showTotalMessage(message: string): void;
}

export class CoffeePresenter {
  constructor(
    public view: CoffeeView,
    public getAllCoffeeUseCase: GetAllCoffeesUseCase,
    public getShoopingCartUseCase: GetShoppingUseCase,
    public getShoppingTotalUseCase: GetShoppingTotalUseCase,
    public saveCoffeeItemIntoShoppingCartUseCase: SaveCoffeeItemIntoShoppingCartUseCase
  ) {}

  async start() {
    const selection = await this.view.showMainMenu();
    switch(selection){
      case "shopping-cart": 
          this.showCart();
          return ;
      case "coffee-list":
          this.showSelect();
          return ;    
    }
    // this.showSelect();
  }
  showCart(){
    const cart = this.getShoopingCartUseCase.execute();
    const total = this.getShoppingTotalUseCase.execute();
    this.view.listShoppingCartItems(cart, total);
  }

  showAllCoffees() {
    const coffees = this.getAllCoffeeUseCase.execute();
    this.view.listCoffees(coffees);
  }

  calculateTotal(){
    const total = this.getShoppingTotalUseCase.execute(); 
    this.view.showEndMessage(`Your total is ${total}`)
  }

  async showSelect() {
    const coffees = this.getAllCoffeeUseCase.execute();
    const selection = await this.view.addCoffeeToOrder(coffees);

    if (selection.length === 0) {
      return this.view.cancelOperation(
        'No coffees selected. Thanks for being with us'
      );
    }

    selection.forEach((data)=>{
       const coffee = this.getCoffeeEntity(coffees, data.data.value) as CoffeeEntity
       this.saveCoffeeItemIntoShoppingCartUseCase.execute(coffee);
      });

      this.start();
  }

  getCoffeeEntity(coffees: CoffeeEntity[], id: string) {
    return coffees.find((coffee) => coffee.value.id.value === id);
  }
}
