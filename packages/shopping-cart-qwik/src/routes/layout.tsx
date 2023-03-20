import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Copyright 2023 Mario Life</p>
      </footer>
    </div>
  );
});
