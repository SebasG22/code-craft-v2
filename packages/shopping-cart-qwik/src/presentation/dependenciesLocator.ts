import {
  CoffeePresenter,
  CoffeeView,
  CoffeeQwikView,
  GetAllCoffeesUseCase,
  SaveCoffeeItemIntoShoppingCartUseCase,
  CoffeeInMemory,
  GetShoppingUseCase,
  ShoppingCartInMemory,
  GetShoppingTotalUseCase,
  CoffeeQwikPresenter,
} from '@code-craft/coffee-store';

export const getCoffeePresenter = (view: CoffeeView) => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase =
    new SaveCoffeeItemIntoShoppingCartUseCase(shoppingInMemory);
  const getShoppingTotalUseCase = new GetShoppingTotalUseCase(shoppingInMemory);
  return new CoffeePresenter(
    view,
    getAllCoffeeUseCase,
    getShoppingUseCase,
    getShoppingTotalUseCase,
    saveCoffeeItemIntoShoppingCartUseCase
  );
};

export const getCoffeePresenterQwik = (view: CoffeeQwikView) => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase =
    new SaveCoffeeItemIntoShoppingCartUseCase(shoppingInMemory);
  const getShoppingTotalUseCase = new GetShoppingTotalUseCase(shoppingInMemory);
  return new CoffeeQwikPresenter(
    view,
    getAllCoffeeUseCase,
    getShoppingUseCase,
    getShoppingTotalUseCase,
    saveCoffeeItemIntoShoppingCartUseCase
  );
};
