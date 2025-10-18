import { useState } from 'react';
import spriteHref from '../../assets/sprite.svg';
import { ContactsModal } from '../../index';
import css from './ContactsWidget.module.css';

export default function ContactsWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={css.wrap}>
        <button
          type="button"
          className={css.btn}
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
