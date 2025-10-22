import { useState } from 'react';
import { Modal, Button } from '../../index';
import { openModal } from '../../utils/modal';
import { CONTACTS } from '../../utils/contactsLinks';

import spriteHref from '../../assets/sprite.svg';
import css from './ContactsWidget.module.css';

// ================================================================

function ContactsWidget() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const writeToMe = () => {
    setOpen(false);
    openModal();
  };

  const openWithFallback = (primary: string, fallback?: string) => {
    const w = window.open(primary, '_blank', 'noopener,noreferrer');
    if (fallback) setTimeout(() => window.open(fallback, '_blank'), 200);
    return w;
  };

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACTS.mail);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch {
      /* ignore */
    }
  };

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

      <Modal type="widget" open={open} onClose={() => setOpen(false)}>
        <ul className={css.list}>
          <li>
            <a
              className={css.item}
              href={CONTACTS.viber.app}
              onClick={e => {
                e.preventDefault();
                openWithFallback(CONTACTS.viber.app, CONTACTS.viber.web);
              }}
            >
              <svg className={css.iconLg} aria-hidden="true">
                <use href={`${spriteHref}#icon-viber`} />
              </svg>
              <span className={css.text}>Viber</span>
            </a>
          </li>

          <li>
            <a
              className={css.item}
              href={CONTACTS.telegram.app}
              onClick={e => {
                e.preventDefault();
                openWithFallback(CONTACTS.telegram.app, CONTACTS.telegram.web);
              }}
            >
              <svg className={css.iconLg} aria-hidden="true">
                <use href={`${spriteHref}#icon-telegram`} />
              </svg>
              <span className={css.text}>Telegram</span>
            </a>
          </li>

          <li>
            <a
              className={css.item}
              href={CONTACTS.whatsapp.app}
              onClick={e => {
                e.preventDefault();
                openWithFallback(CONTACTS.whatsapp.app);
              }}
            >
              <svg className={css.iconLg} aria-hidden="true">
                <use href={`${spriteHref}#icon-whatsapp`} />
              </svg>
              <span className={css.text}>WhatsApp</span>
            </a>
          </li>

          <li className={css.emailItem}>
            <button type="button" className={css.item} onClick={copyMail}>
              <svg className={css.iconLg} aria-hidden="true">
                <use href={`${spriteHref}#icon-mail`} />
              </svg>
              <span className={css.mail}>{CONTACTS.mail}</span>
            </button>
            {copied && <div className={css.copiedNote}>Mail Copied</div>}
          </li>
        </ul>

        <hr className={css.rule} />

        <Button
          text="Write To Me"
          onClick={writeToMe}
          className={css.writeBtn}
        />
      </Modal>
    </>
  );
}

export default ContactsWidget;
