import { CoffeeEntity } from "../domain/entities/coffee.entity";
import { GetAllCoffeesUseCase } from "../domain/use-cases/get-all-coffees";
import { GetShoppingUseCase } from "../domain/use-cases/get-shopping";
import { SaveCoffeeItemIntoShoppingCartUseCase } from "../domain/use-cases/save-item-shopping";

export class CoffeeQwikController {
    constructor(
        public getAllCoffeeUseCase: GetAllCoffeesUseCase,
        public getShoopingCartUseCase: GetShoppingUseCase,
        public saveCoffeeItemIntoShoppingCartUseCase: SaveCoffeeItemIntoShoppingCartUseCase
      ) {

      }

      private getCoffeeEntity(coffees: CoffeeEntity[], id: string) {
        return coffees.find((coffee) => coffee.value.id.value === id);
      }

      getAllCoffees(){
        return this.getAllCoffeeUseCase.execute().map((item)=> item.serializeValue);
      }

      addItemToCart(id: string){
        const coffees = this.getAllCoffeeUseCase.execute();
        const coffee = this.getCoffeeEntity(coffees, id);
        if (coffee) {
          this.saveCoffeeItemIntoShoppingCartUseCase.execute(coffee);
          this.getShoopingCartUseCase.execute();
        }
      }

      getShoppingCart(){
        return this.getShoopingCartUseCase.execute().serializeValue;
      }
}