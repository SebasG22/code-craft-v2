import {
  GetAllCoffeesUseCase,
  SaveCoffeeItemIntoShoppingCartUseCase,
  CoffeeInMemory,
  GetShoppingUseCase,
  ShoppingCartInMemory,
  CoffeeQwikController,
  RemoveItemItemFromShoppingCartUseCase,
  CoffeeView,
  CoffeePresenter,
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



let instance: CoffeeQwikController; 
export const getCoffeeControllerQwik = () => {
  const coffeeInMemory = new CoffeeInMemory();
  const shoppingInMemory = new ShoppingCartInMemory();

  const getAllCoffeeUseCase = new GetAllCoffeesUseCase(coffeeInMemory);
  const getShoppingUseCase = new GetShoppingUseCase(shoppingInMemory);
  const saveCoffeeItemIntoShoppingCartUseCase =
    new SaveCoffeeItemIntoShoppingCartUseCase(shoppingInMemory);
  
  const removeItemShopping = new RemoveItemItemFromShoppingCartUseCase(shoppingInMemory);
  if (!instance){
    instance = new CoffeeQwikController(
      getAllCoffeeUseCase,
      getShoppingUseCase,
      saveCoffeeItemIntoShoppingCartUseCase,
      removeItemShopping
    );
  }

  return instance;

}