import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { CoffeeEntityProps } from '@code-craft/coffee-store';
import cupStyles from './cup.css?inline';

interface CupProps {
  item: CoffeeEntityProps;
}

export default component$((props: CupProps) => {
  useStylesScoped$(cupStyles);

  return (
    <div class="cup">
      <div class="cup-body" aria-label={props.item.name}>
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
