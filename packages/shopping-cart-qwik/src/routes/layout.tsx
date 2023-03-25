import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContext,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik';
import Header from '../components/header/header';
import { getCoffeeControllerQwik } from '../presentation/dependenciesLocator';
const controller = getCoffeeControllerQwik();

interface CartStore {
  id: string;
  items: any[];
  totalPrice: number;
  totalItems: number;
}

interface ItemsList {
  list: any[]
}

export const CartContext = createContextId<Signal<CartStore>>('Cart');
export const ItemListContext =
  createContextId<Signal<ItemsList>>('ItemList');

export default component$(() => {
  const cart = useSignal<CartStore>({
    id: '',
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });
  useContextProvider(CartContext, cart);

  const itemList = useSignal<ItemsList>({
    list: controller.getAllCoffees()
  });

  useContextProvider(ItemListContext, itemList);

  return (
    <div class="page">
      <Inner />
      {/* <Header totalItems={cart.value.totalItems}/> */}
      <main>
        <section class="container">
          <Slot />
        </section>
      </main>
    </div>
  );
});

export const Inner = component$(() => {
  const cart = useContext(CartContext);

  return <Header totalItems={cart.value.totalItems} />;
});
