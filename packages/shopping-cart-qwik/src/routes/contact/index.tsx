import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import contactStyles from './contact.css?inline';
import { CoffeeEntity } from '@code-craft/coffee-store';

export default component$(() => {
  const coffee = CoffeeEntity.create({
    name: 'demoa',
    ingredients: [],
    price: 2,
  });
  console.log(coffee);
  useStylesScoped$(contactStyles);

  const name = useSignal('mario');

  const person = useStore({
    name: 'peach',
    age: 30,
  });

  const blogs = useStore([
    { id: 1, title: 'my first blog' },
    { id: 2, title: 'my second blog' },
    { id: 3, title: 'my third blog' },
  ]);

  return (
    <article>
      <h2> Contact {name.value}</h2>
      <p>
        {' '}
        Hello, {person.name} - {person.age}
      </p>

      <button onClick$={() => (name.value = 'luigi')}> click me</button>
      <button onClick$={() => (person.name = 'bowser')}>click me again</button>

      {blogs.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}

      <button onClick$={() => blogs.pop()}>remove a blog</button>
    </article>
  );
});
