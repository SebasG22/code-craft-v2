import { Signal, component$, useContext, useStore, useStylesScoped$, $ } from '@builder.io/qwik';
import Pay from '../../components/pay/pay';
import cartStyles from './cart.css?inline';
import { getCoffeeControllerQwik } from '../../presentation/dependenciesLocator';
import { CartContext, CartStore } from '../layout';
import { currency } from '../../utils';
import Header from '../../components/header/header';

const controller = getCoffeeControllerQwik();

const addItemToCart = $((id: string, state: Signal<CartStore>) => {
  console.warn('Clicked', id);
  controller.addItemToCart(id);
  const cartInfo = controller.getShoppingCart();
  state.value = cartInfo;
});

const removeOneItemFromCart = $((id: string, state: Signal<CartStore>) => {
  console.warn('Clicked', id);
  controller.removeOneItemFromCart(id);
  const cartInfo = controller.getShoppingCart();
  console.warn({ cartInfo });
  state.value = cartInfo;
});

const removeItemFromCart = $((id: string, state: Signal<CartStore>) => {
  console.warn('Clicked', id);
  controller.remoteItemFromCart(id);
  const cartInfo = controller.getShoppingCart();
  console.warn({ cartInfo });
  state.value = cartInfo;
});

export default component$(() => {
  useStylesScoped$(cartStyles);
  const cartContext = useContext(CartContext);

  
  return (
    <>
    <Header totalItems={cartContext.value.totalItems} />
    <main>
      <section class="container">

    <div class="list">
      {!cartContext.value.items.length && <p>No coffee, go add some.</p>}
      {cartContext.value.items.length > 0 && (
        <div>
          <Pay isDisablePreview={true} />
          <ul class="cart-container">
            <li class="list-header">
              <div>Item</div>
              <div>Unit</div>
              <div>Total</div>
              <div></div>
            </li>
          </ul>
          {cartContext.value.items.map((item) => (
            <li key={item.type.id} class="list-item">
              <div> {item.type.name} </div>
              <div>
                <span class="unit-desc">
                  {currency(item.type.price)} x {item.quantity}
                </span>
                <div class="unit-controller">
                  <button
                    aria-label={`Add one ${item.type.name}`}
                    type="button"
                    onClick$={() => {
                      addItemToCart(item.type.id, cartContext);
                    }}
                  >
                    +
                  </button>
                  <button
                    aria-label={`Remove one ${item.type.name}`}
                    type="button"
                    
                    onClick$={() => {
                      removeOneItemFromCart(item.type.id, cartContext)
                      console.warn('Remove one');
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div> { currency(item.totalPerItem)} </div>
              <div>
                <button
                  aria-label={`Remove all` + item.type.name}
                  class="delete"
                  type="button"
                  onClick$={() => {
                    removeItemFromCart(item.type.id, cartContext)
                  }}
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>

    </section>
    </main>
    </>
  );
});
