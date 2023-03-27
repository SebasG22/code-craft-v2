import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik';
import { getCoffeeControllerQwik } from '../presentation/dependenciesLocator';
const controller = getCoffeeControllerQwik();

export interface CartStore {
  id: string;
  items: {
    type: Item;
    quantity: number;
    totalPerItem: string;
  }[];
  totalPrice: string;
  totalItems: number;
}
export interface Item {
  id: string;
  name: string;
  price: string;
  ingredients: {
    name: string;
    quantity: number;
  }[];
}
export interface ItemsList {
  list: Item[];
}

export const CartContext = createContextId<Signal<CartStore>>('Cart');
export const ItemListContext = createContextId<Signal<ItemsList>>('ItemList');

export default component$(() => {
  const cart = useSignal<CartStore>({
    ...controller.getShoppingCart(),
  });
  useContextProvider(CartContext, cart);

  const itemList = useSignal<ItemsList>({
    list: controller.getAllCoffees(),
  });

  useContextProvider(ItemListContext, itemList);

  return (
    <div class="page">
      <Slot />
    </div>
  );
});
