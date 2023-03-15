import { Id } from "../value-objects/id.vo";
import { CoffeeEntity } from "./coffee.entity";

export interface ShoppingCartEntityValue {
   id: Id;
   items: { type: CoffeeEntity, quantity: number}[];
 }
 
 export interface ShoppingCartEntityProps {
   id?: string;
   items: { type: CoffeeEntity, quantity: number }[];
 }

export class ShoppingCartEntity {

   constructor(private data: ShoppingCartEntityValue){}

   static create(data: ShoppingCartEntityProps){
      return new ShoppingCartEntity({
            id: Id.generateId(),
            items: data.items
      });
   }

   public get value(){
      return this.data;
   }


}