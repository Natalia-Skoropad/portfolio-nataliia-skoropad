import clsx from 'clsx';
import css from './Nav.module.css';

// ================================================================

interface NavListItemProps {
  id: string;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: (id: string) => void;
}

// ================================================================

function NavListItem({ id, label, href, active, onClick }: NavListItemProps) {
  const to = href ?? `#${id}`;

  return (
    <li>
      <a
        href={to}
        className={clsx(css.link, active && css.active)}
        aria-current={active ? 'page' : undefined}
        onClick={e => {
          if (to.startsWith('#')) e.preventDefault();
          onClick?.(id);
        }}
      >
        {label}
      </a>
    </li>
  );
}

export default NavListItem;
