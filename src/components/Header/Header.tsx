import { useState } from 'react';

import {
  Offcanvas,
  SocialIcons,
  NavList,
  Logo,
  Button,
  CloseButton,
} from '../../index';

import { NAV_MENU } from '../../data/nav';
import { scrollToId } from '../../utils/scrollToId';
import { openFormModal } from '../../utils/formModal';

import spriteHref from '../../assets/sprite.svg';
import clsx from 'clsx';
import css from './Header.module.css';

// ================================================================

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={clsx('container', css.inner)}>
        <Logo
          className={css.brand}
          href="#hero"
          ariaLabel="Natalia — Home"
          onClick={e => {
            e.preventDefault();
            scrollToId('hero');
          }}
        />

        <div className={css.navInline}>
          <NavList
            items={NAV_MENU}
            ariaLabel="Primary"
            variant="inline"
            onItemClick={id => scrollToId(id)}
          />
        </div>

        <div className={css.hireBtnWrap}>
          <Button
            text="Hire Me"
            className={css.hireBtn}
            onClick={openFormModal}
          />
        </div>

        <button
          type="button"
          className={css.menuBtn}
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg
            className={`${css.iconSquare} anim-icon-square`}
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
          <CloseButton ariaLabel="Close menu" onClick={() => setOpen(false)} />
        </div>

        <div className={css.offNav}>
          <NavList
            idAttr="mobile-menu"
            ariaLabel="Mobile"
            items={NAV_MENU}
            onItemClick={id => {
              setOpen(false);
              setTimeout(() => scrollToId(id), 0);
            }}
          />
        </div>

        <div className={css.bottom}>
          <SocialIcons />
        </div>
      </Offcanvas>
    </header>
  );
}

export default Header;
