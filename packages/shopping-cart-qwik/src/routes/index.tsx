import {
  component$,
  useContext,
  useSignal,
  useStylesScoped$,
  $,
} from '@builder.io/qwik';
import Cup from '../components/cup/cup';
import Pay from '../components/pay/pay';
import indexStyles from './index.css?inline';
import { getCoffeeControllerQwik } from '../presentation/dependenciesLocator';
import { currency } from '../utils';
import { CartContext, ItemListContext } from './layout';

const controller = getCoffeeControllerQwik();

export default component$(() => {
  useStylesScoped$(indexStyles);
  const cartContext = useContext(CartContext);
  const listContext = useContext(ItemListContext);

  const addItemToCart = $((id: string, state: any) => {
    console.warn('Clicked', id);
    controller.addItemToCart(id);
    const cartInfo = controller.getShoppingCart();
    state.value = cartInfo;
  });

  const selectedCoffee = useSignal<{
    id: string;
    name: string;
    price: number;
    ingredients: {
      name: string;
      quantity: number;
    }[];
  }>();
  const modalRef = useSignal<HTMLDialogElement>();

  return (
    <>
      <div>
        <ul>
          {listContext.value.list.map((item, index) => (
            <li>
              <h4
                onDblClick$={() => {
                  console.warn('DB clicked');
                }}
              >
                {/* {item.showTranslate ? 'true' : 'false'} */}
                {/* {item.showTranslate ? item.translate : item.name} */}
                {item.name}
                <br />
                <small>{ currency(item.price)}</small>
              </h4>
              <div
                preventdefault:contextmenu
                onClick$={() => {
                  addItemToCart(item.id, cartContext);
                }}
                onContextMenu$={(e, el) => {
                  console.warn('Context Menu');
                  selectedCoffee.value = item;
                  modalRef.value?.showModal();
                }}
              >
                <Cup item={item} />
              </div>
            </li>
          ))}
        </ul>
        <Pay isDisablePreview={false} />
      </div>

      <dialog ref={modalRef} data-cy="add-to-cart-modal">
        <p>
          Add <strong>{selectedCoffee.value?.name}</strong> to the cart?
        </p>
        <form method="dialog">
          <button
            onClick$={() => {
              console.warn('Clicked Dialog');
              if(selectedCoffee.value?.id){
                addItemToCart(selectedCoffee.value.id, cartContext);
              }
            }}
          >
            Yes
          </button>
          <button>No</button>
        </form>
      </dialog>
    </>
  );
});
