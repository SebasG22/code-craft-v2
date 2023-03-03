import { CoffeeEntity } from "./coffee.entity";

export interface ShoppingCartEntity {
   items: CoffeeEntity[];
   total: number;
}