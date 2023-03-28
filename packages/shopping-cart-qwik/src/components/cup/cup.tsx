import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { CoffeeEntitySerialize } from '@code-craft/coffee-store';
import cupStyles from './cup.css?inline';

interface CupProps {
  item: CoffeeEntitySerialize;
}

export default component$((props: CupProps) => {
  useStylesScoped$(cupStyles);

  return (
    <div class="cup">
      <div
        class="cup-body"
        aria-label={props.item.name}
        data-test={props.item.name.replace(' ', '_')}
      >
        {props.item.ingredients.map((ingredient) => (
          <div
            class={'ingredient ' + ingredient.name}
            style={`height: ${ingredient.quantity}%`}
          >
            {ingredient.name}
          </div>
        ))}
      </div>
      <div class="cup-handler"></div>
    </div>
  );
});
