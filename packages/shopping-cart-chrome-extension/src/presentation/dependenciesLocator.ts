import {
  CoffeeInMemory,
  CoffeeController,
  GetAllCoffeesUseCase,
  GetShoppingUseCase,
  RemoveItemFromShoppingCartUseCase,
  RemoveOneItemFromShoppingCartUseCase,
  SaveItemShoppingCartUseCase,
  ShoppingCartInMemory,
  ShoppingCartEntity,
  data_coffees,
  CoffeeEntity,
} from '@code-craft/coffee-store';

export const getCoffeeControllerVue = () => {
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
  return new CoffeeController(
    getAllCoffeeUseCase,
    getShoppingUseCase,
    saveCoffeeItemIntoShoppingCartUseCase,
    removeOneItemShopping,
    removeItemShopping
  );
};
