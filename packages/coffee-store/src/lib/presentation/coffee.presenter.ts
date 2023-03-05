import { CoffeeEntity } from '../domain/entities/coffee.entity';
import { GetAllCoffeesUseCase } from '../domain/use-cases/get-all-coffees';

export interface CoffeeView {
  showMessage(message: string): void;
  listCoffees(coffees: CoffeeEntity[]): void;
}

export class CoffeePresenter {
  constructor(
    public view: CoffeeView,
    public getAllCoffeeUseCase: GetAllCoffeesUseCase
  ) {}

  start() {
    this.view.showMessage("Welcome to coffees");
    this.showAllCoffees();
  }

  showAllCoffees() {
    const coffees = this.getAllCoffeeUseCase.execute();
    this.view.listCoffees(coffees);
  }
}
