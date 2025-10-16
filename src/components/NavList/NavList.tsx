import NavListItem from './NavListItem';

import clsx from 'clsx';
import css from './Nav.module.css';

// ================================================================

interface NavItem {
  id: string;
  label: string;
  href?: string;
}

interface NavListProps {
  items: NavItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  idAttr?: string;
  ariaLabel?: string;
  variant?: 'vertical' | 'inline';
}

// ================================================================

function NavList({
  items,
  activeId,
  onItemClick,
  idAttr,
  ariaLabel,
  variant = 'vertical',
}: NavListProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav id={idAttr} aria-label={ariaLabel}>
      <ul className={clsx(css.list, variant === 'inline' && css.inline)}>
        {items.map(({ id, label, href }) => (
          <NavListItem
            key={id}
            id={id}
            label={label}
            href={href}
            active={activeId === id}
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
