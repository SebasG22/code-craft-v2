import { CoffeePresenter, CoffeeView, GetAllCoffeesUseCase, CoffeeInMemory } from "@code-craft/coffee-store";

export const getCoffeePresenter = (view: CoffeeView) => {

    const coffeeInMemory = new CoffeeInMemory();

    const getAllCoffeeUseCase= new GetAllCoffeesUseCase(coffeeInMemory);
    return new CoffeePresenter(view, getAllCoffeeUseCase);
}