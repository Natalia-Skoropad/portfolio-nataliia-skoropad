import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Logo, Form, CloseButton } from '../../index';
import { subscribeFormModal } from '../../utils/formModal';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

import css from './FormModal.module.css';

// ================================================================

const SUCCESS_LIFETIME = 10_000;

// ================================================================

function FormModal() {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => subscribeFormModal(() => setOpen(true)), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useLockBodyScroll(open);
  useFocusTrap(panelRef, open, () => setOpen(false));

  const onClose = () => {
    setOpen(false);
    setShowSuccess(false);
  };

  const handleSent = () => {
    setShowSuccess(true);
    const t = setTimeout(() => setShowSuccess(false), SUCCESS_LIFETIME);
    return () => clearTimeout(t);
  };

  if (!open) return null;

  return createPortal(
    <div
      className={css.overlay}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={css.panel}
        ref={panelRef}
        onClick={e => e.stopPropagation()}
      >
        <div className={css.top}>
          {showSuccess ? (
            <p className={css.successHead}>
              Your message has been sent successfully :)
            </p>
          ) : (
            <Logo as="span" className={css.brand} />
          )}
          <CloseButton ariaLabel="Close modal" onClick={onClose} />
        </div>

        <div className={css.body}>
          <Form onSent={handleSent} inlineSuccess={false} />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default FormModal;
