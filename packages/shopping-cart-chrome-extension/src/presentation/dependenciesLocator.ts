import {
  CoffeeInMemory,
  CoffeeController,
  GetAllCoffeesUseCase,
  GetShoppingUseCase,
  RemoveItemFromShoppingCartUseCase,
  RemoveOneItemFromShoppingCartUseCase,
  SaveItemShoppingCartUseCase,
  ShoppingCartInMemory,
} from '@code-craft/coffee-store';

export const getCoffeeControllerVue = () => {
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
  return new CoffeeController(
    getAllCoffeeUseCase,
    getShoppingUseCase,
    saveCoffeeItemIntoShoppingCartUseCase,
    removeOneItemShopping,
    removeItemShopping
  );
};
