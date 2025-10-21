import { createPortal } from 'react-dom';
import { useState } from 'react';

import { Logo, CloseButton, Button } from '../../index';
import { openFormModal } from '../../utils/formModal';
import { CONTACTS } from '../../utils/contactsLinks';

import spriteHref from '../../assets/sprite.svg';
import css from './ContactsModal.module.css';

// ================================================================

type Props = {
  open: boolean;
  onClose: () => void;
};

// ================================================================

function ContactsModal({ open, onClose }: Props) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;

  const writeToMe = () => {
    onClose();
    openFormModal();
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

  const node = (
    <div className={css.overlay} aria-modal="true" role="dialog">
      <div className={css.panel}>
        <div className={css.top}>
          <Logo as="span" />
          <CloseButton ariaLabel="Close contacts" onClick={onClose} />
        </div>

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
              <svg className={css.icon} aria-hidden="true">
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
              <svg className={css.icon} aria-hidden="true">
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
              <svg className={css.icon} aria-hidden="true">
                <use href={`${spriteHref}#icon-whatsapp`} />
              </svg>
              <span className={css.text}>WhatsApp</span>
            </a>
          </li>

          <li className={css.emailItem}>
            <button type="button" className={css.item} onClick={copyMail}>
              <svg className={css.icon} aria-hidden="true">
                <use href={`${spriteHref}#icon-mail`} />
              </svg>
              <span className={css.mail}>{CONTACTS.mail}</span>
            </button>
            {copied && <div className={css.copiedNote}>Mail Copied</div>}
          </li>
        </ul>

        <hr className={css.rule} />

        <Button
          text="Write to Me"
          onClick={writeToMe}
          className={css.writeBtn}
        />
      </div>
    </div>
  );

  return createPortal(node, document.body);
}

export default ContactsModal;
