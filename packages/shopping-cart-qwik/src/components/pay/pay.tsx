import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { coffee, coffee2, coffee3, coffee4 } from '../../seed';
import payStyles from './pay.css?inline';

export default component$(() => {
  useStylesScoped$(payStyles);


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

  const dialogRef = useSignal<HTMLDivElement>();
  const cartCount = useSignal(1);

  return (
    <div
      class="pay-container"
      onMouseLeave$={() => {
        console.warn('onMouseLeave container');
        dialogRef.value?.classList.toggle('show');
      }}
    >
      {cartCount.value > 0 && (
        <ul class="cart-preview" ref={dialogRef}>
          {coffees.list.map((item) => (
            <li key={item.name} class="list-item">
              <div>
                <span>{item.name}</span>
                <span class="unit-desc"> x {'1'}</span>
              </div>
              <div class="unit-controller">
                <button
                  aria-label={`Add one ${item.name}`}
                  type="button"
                  onClick$={() => {
                    console.warn('Add Item');
                  }}
                >
                  +
                </button>
                <button
                  aria-label={`Remove one ${item.name}`}
                  type="button"
                  onClick$={() => {
                    console.warn('Remove Item');
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
          console.warn('on Mouse over');
          dialogRef.value?.classList.toggle('show');
        }}
        onClick$={() => {
          console.warn('Pay');
        }}
      >
        Total: 0
      </button>
    </div>
  );
});
