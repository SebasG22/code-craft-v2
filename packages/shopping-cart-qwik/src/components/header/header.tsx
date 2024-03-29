import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import headerStyles from './header.css?inline';

export interface HeaderProps {
  totalItems: number;
}
export default component$((props: HeaderProps) => {
  const { scopeId } = useStylesScoped$(headerStyles);
  const pathname = useLocation().url.pathname;

  return (
    <ul>
      <li>
        <Link
          aria-label="Menu page"
          class={`${scopeId} link ${pathname === '/' ? 'active' : ''}`}
          href="/"
        >
          menu{' '}
        </Link>
      </li>
      <li>
        <Link
          aria-label="Cart page"
          class={`${scopeId} link ${
            pathname.startsWith('/cart') ? 'active' : ''
          }`}
          href="/cart"
        >
          cart ({props.totalItems})
        </Link>
      </li>
      <li>
        <Link
          aria-label="GitHub page"
          class={`${scopeId} link ${
            pathname.startsWith('/github') ? 'active' : ''
          }`}
          href="/github"
        >
          github
        </Link>
      </li>
    </ul>
  );
});
