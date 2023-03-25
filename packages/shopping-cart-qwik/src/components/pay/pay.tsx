import {
  component$,
  useSignal,
  useStylesScoped$,
  $,
  useContext,
  Signal,
} from '@builder.io/qwik';
import payStyles from './pay.css?inline';
import { getCoffeeControllerQwik } from '../../presentation/dependenciesLocator';
import { CartContext, CartStore } from '../../routes/layout';
import { currency } from '../../utils';

const controller = getCoffeeControllerQwik();

const addItemToCart = $((id: string, state: Signal<CartStore>) => {
  console.warn('Clicked', id);
  controller.addItemToCart(id);
  const cartInfo = controller.getShoppingCart();
  state.value = cartInfo;
});

const removeItemFromCart = $((id: string, state: Signal<CartStore>) => {
  console.warn('Clicked', id);
  controller.removeItemFromCart(id);
  const cartInfo = controller.getShoppingCart();
  console.warn({cartInfo});
  state.value = cartInfo;
});
export interface PayProps {
  isDisablePreview: boolean;
}

export default component$((props: PayProps) => {
  useStylesScoped$(payStyles);

  const cartContext = useContext(CartContext);

  const dialogRef = useSignal<HTMLDivElement>();

  const togglePreview = $(() => {
    if (props.isDisablePreview) return;
    dialogRef.value?.classList.toggle('show');
  });

  return (
    <div
      class="pay-container"
      onMouseLeave$={() => {
        togglePreview();
      }}
    >
      {cartContext.value.totalItems > 0 && (
        <ul class="cart-preview" ref={dialogRef}>
          {cartContext.value.items.map((item) => (
            <li key={item.type.name} class="list-item">
              <div>
                <span>{item.type.name}</span>
                <span class="unit-desc"> x {item.quantity}</span>
              </div>
              <div class="unit-controller">
                <button
                  aria-label={`Add one ${item.type.name}`}
                  type="button"
                  onClick$={() => {
                    addItemToCart(item.type.id, cartContext)
                  }}
                >
                  +
                </button>
                <button
                  aria-label={`Remove one ${item.type.name}`}
                  type="button"
                  onClick$={() => {
                    removeItemFromCart(item.type.id, cartContext);
                  }}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        data-test="checkout"
        class="pay"
        type="button"
        aria-label="Proceed to checkout"
        onMouseOver$={() => {
          togglePreview();
        }}
        onClick$={() => {
          console.warn('Pay');
        }}
      >
        Total: { currency(cartContext.value.totalPrice)}
      </button>
    </div>
  );
});
