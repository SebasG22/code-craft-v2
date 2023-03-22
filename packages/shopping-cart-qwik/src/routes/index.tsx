import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Cup from '../components/cup/cup';
import Pay from '../components/pay/pay';
import { coffee, coffee2, coffee3, coffee4 } from '../seed';

export default component$(() => {

  const coffees = useStore({
    list: [
    { ...coffee, showTranslate: false, translate: 'translate version' },
    { ...coffee2, showTranslate: false,translate: 'translate version' },
    { ...coffee3, showTranslate: false,translate: 'translate version' },
    { ...coffee4, showTranslate: false, translate: 'translate version' },
  ]},
  {
    deep: true
  }
  );

  const selectedCoffee = useSignal<string>();
  const modalRef = useSignal<HTMLDialogElement>();

  return (
    <>
      <div>
        <ul>
          {coffees.list.map((item, index) => (
            <li>
              <h4 onDblClick$={() => {
                console.warn("DB clicked");
                // item.showTranslate = true;
                // coffees.list[index]={ ...item, showTranslate: true};
                // console.warn({coffees});
                }}>
                {item.showTranslate ? 'true': 'false'}
                { item.showTranslate ? item.translate : item.name} 
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
        <Pay />

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
