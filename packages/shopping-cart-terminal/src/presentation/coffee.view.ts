import { intro, note } from "@clack/prompts";
import { CoffeeEntity, CoffeeView } from "@code-craft/coffee-store";

export class CoffeeTerminalView implements CoffeeView{
    showMessage(message: string): void {
        intro(message);
    }
    listCoffees(coffees: CoffeeEntity[]): void {
        note("Coffee List");
        if(coffees.length > 0) {
            coffees.forEach((coffee)=>{
                note(`Id: ${coffee.value.id.value} -  Name: ${coffee.value.name} - Price: ${coffee.value.price.value}`)
            })
        } else {
            note("No coffees registered")
        }
    }

}