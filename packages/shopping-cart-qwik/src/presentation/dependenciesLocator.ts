import {
  CoffeePresenter,
  CoffeeView,
  CoffeeQwikView,
  GetAllCoffeesUseCase,
  SaveCoffeeItemIntoShoppingCartUseCase,
  CoffeeInMemory,
  GetShoppingUseCase,
  ShoppingCartInMemory,
  CoffeeQwikPresenter,
  CoffeeQwikController,
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

export const getCoffeePresenterQwik = (view: CoffeeQwikView) => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase =
    new SaveCoffeeItemIntoShoppingCartUseCase(shoppingInMemory);
  return new CoffeeQwikPresenter(
    view,
    getAllCoffeeUseCase,
    getShoppingUseCase,
    saveCoffeeItemIntoShoppingCartUseCase
  );
};

export const getCoffeeControllerQwik = () => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase =
    new SaveCoffeeItemIntoShoppingCartUseCase(shoppingInMemory);
  
  return new CoffeeQwikController(
    getAllCoffeeUseCase,
    getShoppingUseCase,
    saveCoffeeItemIntoShoppingCartUseCase
  );
}