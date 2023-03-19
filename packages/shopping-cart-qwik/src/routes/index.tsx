import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>

      <div class="section bright">
        <div class="container center">
        </div>
      </div>

      <div class="section">
        <div class="container center">
          <h3>
            You can <b>count</b> on me
          </h3>
        </div>
      </div>

      <div class="section">
        <div class="container topics">
         

          <div>
           
          </div>
        </div>
      </div>
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