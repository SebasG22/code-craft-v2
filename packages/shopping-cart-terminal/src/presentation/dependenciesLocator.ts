import {
  CoffeePresenter,
  CoffeeView,
  GetAllCoffeesUseCase,
  SaveItemShoppingCartUseCase,
  CoffeeInMemory,
  GetShoppingUseCase,
  ShoppingCartInMemory,
  ShoppingCartEntity,
  data_coffees,
  CoffeeEntity,
} from '@code-craft/coffee-store';

export const getCoffeePresenter = (view: CoffeeView) => {
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
  const cart = ShoppingCartEntity.create({
    items: [],
  });
  const coffeeInMemory = new CoffeeInMemory(coffees);
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
