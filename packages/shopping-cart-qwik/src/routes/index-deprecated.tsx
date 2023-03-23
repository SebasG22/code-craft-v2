// import {
//   component$,
//   NoSerialize,
//   noSerialize,
//   useSignal,
//   useStore,
//   useStylesScoped$,
//   useTask$,
//   useVisibleTask$,
// } from '@builder.io/qwik';
// import type { DocumentHead } from '@builder.io/qwik-city';
// import Cup from '../components/cup/cup';
// import Pay from '../components/pay/pay';
// import { CoffeeQwikViewImpl } from '../presentation/coffee-qwik.view';
// import { coffee, coffee2, coffee3, coffee4 } from '../seed';
// import indexStyles from './index.css?inline';

// const view = new CoffeeQwikViewImpl();
// const a = view.presenter.showCoffees();

// export default component$(() => {
//   useStylesScoped$(indexStyles);
//     // console.warn(a);
//   const coffees = useStore<{list: any[], cart: any}>(
//     {
//       list: [],
//       cart: {}
//     }
//   );
//   // view.start(coffees);

//   useTask$(({ track }) => {
//     // rerun this function  when `value` property changes.
//     // track(() => coffees.list.values);
//     // const a = view.presenter.showCoffees().map((item)=> item.serializeValue);
//     // console.warn(a);
//     //  coffees.list = [{"name": "sebas"}]
//     // coffees.list= ['1','2']
//     // coffees.list = view.presenter.showCoffees().map((item)=> item.serializeValue);
//     // Set up timeout for debounced value.
//     // const id = setTimeout(() => (store.debouncedValue = store.value), 500);
//     // return cleanup function in case `value` property changes before time is up.
//   });

//   useTask$(({ track }) => {
//     // rerun this function  when `value` property changes.
//     track(() => coffees.cart);
//     console.warn('cart changed', coffees.cart)
//     // Set up timeout for debounced value.
//     // const id = setTimeout(() => (store.debouncedValue = store.value), 500);
//     // return cleanup function in case `value` property changes before time is up.
//   });

//   const selectedCoffee = useSignal<string>();
//   const modalRef = useSignal<HTMLDialogElement>();

//   return (
//     <>
//       <div>
//         {/* total {JSON.stringify(coffees.cart.items)} */}
//         <ul>
//           {coffees.list.map((item, index) => (
//             <li>
//               <h4
//                 onDblClick$={() => {
//                   console.warn('DB clicked');
//                   // item.showTranslate = true;
//                   // coffees.list[index]={ ...item, showTranslate: true};
//                   // console.warn({coffees});
//                 }}
//               >
//                 {/* {item.showTranslate ? 'true' : 'false'} */}
//                 {/* {item.showTranslate ? item.translate : item.name} */}
//                 {item.name} {item.id}
//                 <br />
//                 <small>{item.price}</small>
//               </h4>
//               <div
//                 preventdefault:contextmenu
//                 onClick$={() => {
//                   console.warn('Clicked', item.id);
//                   view.presenter.addItemShoppingCart(item.id, coffees);
//                 }}
//                 onContextMenu$={(e, el) => {
//                   console.warn('Context Menu');
//                   modalRef.value?.showModal();
//                 }}
//               >
//                 {/* <Cup item={item} /> */}
//               </div>
//             </li>
//           ))}
//         </ul>
//         <Pay isDisablePreview={false} />
//       </div>

//       <dialog ref={modalRef} data-cy="add-to-cart-modal">
//         <p>
//           Add <strong>{selectedCoffee.value}</strong> to the cart?
//         </p>
//         <form method="dialog">
//           <button
//             onClick$={() => {
//               console.warn('Clicked Dialog');
//             }}
//           >
//             Yes
//           </button>
//           <button>No</button>
//         </form>
//       </dialog>
//     </>
//   );
// });

// export const head: DocumentHead = {
//   title: 'Welcome to Qwik',
//   meta: [
//     {
//       name: 'description',
//       content: 'Qwik site description',
//     },
//   ],
// };
