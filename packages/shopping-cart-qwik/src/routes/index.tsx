import { component$, useSignal, useStore, useStylesScoped$, useTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Cup from '../components/cup/cup';
import Pay from '../components/pay/pay';
import { CoffeeQwikView } from '../presentation/coffee.view';
import { coffee, coffee2, coffee3, coffee4 } from '../seed';
import indexStyles from './index.css?inline';

export const view = new CoffeeQwikView();


export default component$(() => {
  useStylesScoped$(indexStyles);
  const coffees = useStore(
    {
      list: [
        { ...coffee, showTranslate: false, translate: 'translate version' },
        { ...coffee2, showTranslate: false, translate: 'translate version' },
        { ...coffee3, showTranslate: false, translate: 'translate version' },
        { ...coffee4, showTranslate: false, translate: 'translate version' },
      ],
    },
    {
      deep: true,
    }
    );
    view.start(coffees);
    
    useTask$(({ track }) => {
      // rerun this function  when `value` property changes.
      // track(() => coffees.list.values);
      view.listSomething();
      // Set up timeout for debounced value.
      // const id = setTimeout(() => (store.debouncedValue = store.value), 500);
      // return cleanup function in case `value` property changes before time is up.
    });
  


  const selectedCoffee = useSignal<string>();
  const modalRef = useSignal<HTMLDialogElement>();

  return (
    <>
      <div>
        <ul>
          {coffees.list.map((item, index) => (
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
                {item.name}
                <br />
                <small>{item.price}</small>
              </h4>
              <div
                preventdefault:contextmenu
                onClick$={() => {
                  console.warn('Clicked');
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
        <Pay isDisablePreview={false}/>
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

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
