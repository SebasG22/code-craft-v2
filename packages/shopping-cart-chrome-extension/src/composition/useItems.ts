import { reactive } from 'vue';
import { getCoffeeControllerVue } from '../presentation/dependenciesLocator';
import { animate, stagger } from 'motion';

const controller = getCoffeeControllerVue();

const itemList = reactive({
  list: controller.getAllCoffees(),
});

const cartList = reactive({ cart: controller.getShoppingCart() });

const addItemToShopping = (id: string) => {
  controller.addItemToCart(id);
  const cartInfo = controller.getShoppingCart();
  cartList.cart = cartInfo;
  animate(
    `#coffee-${id}`,
    { rotate: [0, 10, -10, 0] },
    {
      duration: 0.5,
      delay: stagger(0.1),
    }
  );
};

const removeOneItemFromCart = (id: string) => {
  controller.removeOneItemFromCart(id);
  const cartInfo = controller.getShoppingCart();
  cartList.cart = cartInfo;
};

const removeItemFromCart = (id: string) => {
  controller.remoteItemFromCart(id);
  const cartInfo = controller.getShoppingCart();
  cartList.cart = cartInfo;
};

export const useItems = () => {
  return {
    itemList,
    cartList,
    addItemToShopping,
    removeOneItemFromCart,
    removeItemFromCart,
  };
};
