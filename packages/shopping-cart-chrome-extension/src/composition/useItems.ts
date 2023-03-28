import { reactive } from 'vue';
import { getCoffeeControllerVue } from '../presentation/dependenciesLocator';
const controller = getCoffeeControllerVue();
controller.getShoppingCart();

const itemList = reactive({
  list: controller.getAllCoffees(),
});

const cartList = reactive({cart: controller.getShoppingCart()},
);



const addItemToShopping = (id: string) => {
  controller.addItemToCart(id);
  const cartInfo = controller.getShoppingCart();
  cartList.cart = cartInfo;
  console.warn(cartList);
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
    removeItemFromCart
  };
};
