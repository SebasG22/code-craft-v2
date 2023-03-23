import {
  component$,
  useSignal,
  useStore,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';
import Cup from '../../components/cup/cup';
import Pay from '../../components/pay/pay';
import { CoffeeQwikViewImpl } from '../../presentation/coffee-qwik.view';

const a = 'hey';
const view = new CoffeeQwikViewImpl();

export default component$(() => {
  const state = useStore<{ name: string; list: any[]; cart: [] }>({
    name: a,
    list: [],
    cart: [],
  });

  useTask$(() => {
    view.presenter.showCoffees(state);
  });

  useVisibleTask$(() => {
    view.start(state);
  });

  const selectedCoffee = useSignal<string>();
  const modalRef = useSignal<HTMLDialogElement>();

  return (
    <>
      <div>
        {/* total {JSON.stringify(coffees.cart.items)} */}
        <ul>
          {state.list.map((item, index) => (
            <li>
              <h4
                onDblClick$={() => {
                  console.warn('DB clicked');
                  // item.showTranslate = true;
                  // coffees.list[index]={ ...item, showTranslate: true};
                  // console.warn({coffees});
                }}
              >
                {/* {item.showTranslate ? 'true' : 'false'} */}
                {/* {item.showTranslate ? item.translate : item.name} */}
                {item.name} {item.id}
                <br />
                <small>{item.price}</small>
              </h4>
              <div
                preventdefault:contextmenu
                onClick$={() => {
                  console.warn('Clicked', item.id);
                  // view.presenter.addItemShoppingCart(item.id);
                }}
                onContextMenu$={(e, el) => {
                  console.warn('Context Menu');
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
          Add <strong>{selectedCoffee.value}</strong> to the cart?
        </p>
        <form method="dialog">
          <button
            onClick$={() => {
              console.warn('Clicked Dialog');
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
