import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import Pay from '../../components/pay/pay';
import cartStyles from './cart.css?inline'; 

export default component$(() => {

  useStylesScoped$(cartStyles);

  const cartList = useStore<any[]>([{
    name: 'dummy',
    unitPrice: 1,
    quantity: 5,
    price: 5
  }]);
  return (
    <div class="list">
      {!cartList.length && <p>No coffee, go add some.</p>}
      {cartList.length && (
        <div>
          <Pay />
          <ul>
            <li class="list-header">
              <div>Item</div>
              <div>Unit</div>
              <div>Total</div>
              <div></div>
            </li>
          </ul>
          {
            cartList.map((item) => (
              <li key={item.name} class="list-item">
                <div> {item.name} </div>
                <div>
                  <span class="unit-desc">
                    {item.unitPrice} x {item.quantity}
                  </span>
                  <div class="unit-controller">
                    <button
                      aria-label={`Add one ${item.name}`}
                      type="button"
                      onClick$={() => {
                        console.warn('Add one');
                      }}
                    >+</button>
                    <button
                      aria-label={`Remove one ${item.name}`}
                      type="button"
                      onClick$={() => {
                        console.warn('Remove one');
                      }}
                    >-</button>
                  </div>
                </div>
                <div> {item.price} </div>
                <div>
                  <button aria-label={`Remove all` + item.name} class="delete" type="button" onClick$={()=>{
                    console.warn("Remove cart Item");
                  }}>x</button>
                </div>
              </li>
            ))
          }
        </div>
      )}
    </div>
  );
});
