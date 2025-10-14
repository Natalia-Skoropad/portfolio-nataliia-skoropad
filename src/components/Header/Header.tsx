import { useState } from 'react';
import { Offcanvas, SocialIcons, NavList, Logo } from '../../index';

import { scrollToId } from '../../hooks/scrollToId';
import spriteHref from '../../assets/sprite.svg';

import clsx from 'clsx';
import css from './Header.module.css';

// ================================================================

const NAV = [
  { id: 'about', label: 'About Me' },
  { id: 'works', label: 'Works' },
  { id: 'tools', label: 'Tools' },
  { id: 'contacts', label: 'Contacts' },
];

// ================================================================

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={clsx('container', css.inner)}>
        <Logo
          className={css.brand}
          href="#about"
          ariaLabel="Natalia — Home"
          onClick={e => {
            e.preventDefault();
            scrollToId('about');
          }}
        />

        <div className={css.navInline}>
          <NavList
            items={NAV}
            ariaLabel="Primary"
            variant="inline"
            onItemClick={id => scrollToId(id)}
          />
        </div>

        <button type="button" className={css.hireBtn}>
          Hire Me
        </button>

        <button
          type="button"
          className={css.menuBtn}
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg
            className={css.iconSquare}
            width={40}
            height={40}
            aria-hidden="true"
          >
            <use href={`${spriteHref}#icon-burger-menu`} />
          </svg>
        </button>
      </div>

      <Offcanvas open={open} onClose={() => setOpen(false)}>
        <div className={css.offTop}>
          <Logo as="span" className={css.brand} />

          <button
            type="button"
            className={css.menuBtn}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg className={css.iconSquare} aria-hidden="true">
              <use href={`${spriteHref}#icon-close-button`} />
            </svg>
          </button>
        </div>

        <div className={css.offNav}>
          <NavList
            idAttr="mobile-menu"
            ariaLabel="Mobile"
            items={NAV}
            activeId="about"
            onItemClick={id => {
              setOpen(false);
              setTimeout(() => scrollToId(id), 0);
            }}
          />
        </div>

        <div className={css.divider} />

        <div className={css.bottom}>
          <SocialIcons />
        </div>
      </Offcanvas>
    </header>
  );
}

export default Header;
