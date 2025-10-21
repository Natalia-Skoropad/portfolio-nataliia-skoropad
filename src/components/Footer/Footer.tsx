import { NavList, Logo } from '../../index';
import { NAV_MENU } from '../../data/nav';
import { scrollToId } from '../../utils/scrollToId';

import clsx from 'clsx';
import css from './Footer.module.css';

// ================================================================

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.rule} aria-hidden="true" />

      <div className={clsx('container', css.inner)}>
        <Logo
          className={css.brand}
          href="#about"
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

        <div className={css.navMobile}>
          <NavList
            idAttr="mobile-menu"
            ariaLabel="Mobile"
            items={NAV_MENU}
            onItemClick={id => {
              setTimeout(() => scrollToId(id), 0);
            }}
          />
        </div>

        <span className={css.note}>Available For Work</span>
      </div>
    </footer>
  );
}

export default Footer;
