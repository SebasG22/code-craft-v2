import {
  CoffeePresenter,
  CoffeeView,
  GetAllCoffeesUseCase,
  SaveCoffeeItemIntoShoppingCartUseCase,
  CoffeeInMemory,
  GetShoppingUseCase,
  ShoppingCartInMemory,
} from '@code-craft/coffee-store';

export const getCoffeePresenter = (view: CoffeeView) => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase =
    new SaveCoffeeItemIntoShoppingCartUseCase(shoppingInMemory);
  return new CoffeePresenter(
    view,
    getAllCoffeeUseCase,
    getShoppingUseCase,
    saveCoffeeItemIntoShoppingCartUseCase
  );
};
