import {
  GetAllCoffeesUseCase,
  SaveItemShoppingCartUseCase,
  CoffeeInMemory,
  GetShoppingUseCase,
  ShoppingCartInMemory,
  CoffeeController,
  RemoveOneItemFromShoppingCartUseCase,
  CoffeeView,
  CoffeePresenter,
  RemoveItemFromShoppingCartUseCase,
} from '@code-craft/coffee-store';

export const getCoffeePresenter = (view: CoffeeView) => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveItemShoppingCartUseCase = new SaveItemShoppingCartUseCase(
    shoppingInMemory
  );
  return new CoffeePresenter(
    view,
    getAllCoffeeUseCase,
    getShoppingUseCase,
    saveItemShoppingCartUseCase
  );
};

let instance: CoffeeController;
export const getCoffeeControllerQwik = () => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase = new SaveItemShoppingCartUseCase(
    shoppingInMemory
  );

  const removeOneItemShopping = new RemoveOneItemFromShoppingCartUseCase(
    shoppingInMemory
  );

  const removeItemShopping = new RemoveItemFromShoppingCartUseCase(
    shoppingInMemory
  );
  if (!instance) {
    instance = new CoffeeController(
      getAllCoffeeUseCase,
      getShoppingUseCase,
      saveCoffeeItemIntoShoppingCartUseCase,
      removeOneItemShopping,
      removeItemShopping
    );
  }

  return instance;
};
