import { component$, createContextId, Signal, Slot, useContext, useContextProvider, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import Header from '../components/header/header';

interface CartStore {
  id: string;
  items: any[];
  totalPrice: number; 
  totalItems: number;
}

export const CartContext = createContextId<Signal<CartStore>>('Cart');


export default component$(() => {

  const cart = useSignal<CartStore>({
    id: '',
    items: [],
    totalItems: 0,
    totalPrice: 0
  })
  useContextProvider(
    CartContext,
    cart
  );

  
  return (
    <div class="page">
      <Inner/>
      {/* <Header totalItems={cart.value.totalItems}/> */}
      <main>
        <section class="container">
          <Slot />
        </section>
      </main>
    </div>
  );
});


export const Inner = component$(()=>{
  const cart = useContext(CartContext);

return <Header totalItems={cart.value.totalItems}/>
});