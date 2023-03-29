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
  ShoppingCartEntity,
  data_coffees,
  CoffeeEntity,
} from '@code-craft/coffee-store';

export const getCoffeePresenter = (view: CoffeeView) => {
  const cart = ShoppingCartEntity.create({ items: [] });
  const coffeeInMemory = new CoffeeInMemory([]);
  const shoppingInMemory = new ShoppingCartInMemory(cart);

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
  const coffees = data_coffees
    .filter((item) => item.availability)
    .map((item) =>
      CoffeeEntity.create({
        id: item.id,
        name: item.name,
        price: item.price,
        ingredients: item.recipe,
      })
    );
  const cart = ShoppingCartEntity.create({ items: [] });
  const coffeeInMemory = new CoffeeInMemory(coffees);
  const shoppingInMemory = new ShoppingCartInMemory(cart);

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
