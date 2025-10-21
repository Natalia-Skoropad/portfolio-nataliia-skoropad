import { useState } from 'react';
import { ContactsModal } from '../../index';

import spriteHref from '../../assets/sprite.svg';
import css from './ContactsWidget.module.css';

// ================================================================

function ContactsWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={css.wrap}>
        <button
          type="button"
          className={`${css.btn} anim-button-gold`}
          aria-label="Open contacts"
          onClick={() => setOpen(true)}
        >
          <svg className={css.icon} aria-hidden="true">
            <use href={`${spriteHref}#icon-message`} />
          </svg>
        </button>
      </div>

      <ContactsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default ContactsWidget;
