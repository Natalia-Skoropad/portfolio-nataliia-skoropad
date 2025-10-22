import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Logo, CloseButton } from '../../index';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

import css from './Modal.module.css';

// ================================================================

type ModalType = 'modal' | 'widget' | 'offcanvas';

type ModalProps = {
  type: ModalType;
  open: boolean;
  onClose: () => void;
  children: ReactNode;

  showSuccess?: boolean;
  successText?: string;
  closeAriaLabel?: string;
};

const DEFAULT_SUCCESS = 'Your message has been sent successfully :)';

// ================================================================

function Modal({
  type,
  open,
  onClose,
  children,
  showSuccess = false,
  successText = DEFAULT_SUCCESS,
  closeAriaLabel = 'Close modal',
}: ModalProps) {
  const panelRef = useRef<HTMLElement | null>(null);

  const shouldLockBody = open && type !== 'widget';
  useLockBodyScroll(shouldLockBody);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useFocusTrap(panelRef, open && type !== 'widget', onClose);

  useEffect(() => {
    let opener: HTMLElement | null = null;
    if (open) opener = document.activeElement as HTMLElement | null;
    return () => opener?.focus?.();
  }, [open]);

  if (!open) return null;

  const isWidget = type === 'widget';
  const isOffcanvas = type === 'offcanvas';
  const ariaModal = !isWidget;

  const overlayClass =
    type === 'modal'
      ? css.modalOverlay
      : isWidget
      ? css.widgetOverlay
      : css.offOverlay;

  const panelClass =
    type === 'modal'
      ? css.modalPanel
      : isWidget
      ? css.widgetPanel
      : css.offPanel;

  const overlayOpenClass = isOffcanvas ? css.open : undefined;

  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = e => {
    if (isWidget) return;
    if (e.target === e.currentTarget) onClose();
  };

  const Header = (
    <div className={css.modalTop}>
      {showSuccess ? (
        <p className={css.modalSuccessHead}>{successText}</p>
      ) : (
        <Logo as="span" className={css.modalBrand} />
      )}
      <CloseButton ariaLabel={closeAriaLabel} onClick={onClose} />
    </div>
  );

  return createPortal(
    <div
      className={[overlayClass, overlayOpenClass].filter(Boolean).join(' ')}
      onClick={handleOverlayClick}
      role={ariaModal ? 'dialog' : 'region'}
      aria-modal={ariaModal || undefined}
      aria-hidden={!open}
    >
      {type !== 'offcanvas' && (
        <div
          ref={panelRef as React.RefObject<HTMLDivElement>}
          className={panelClass}
          onClick={e => e.stopPropagation()}
          role="document"
        >
          {Header}
          <div className={css.modalBody}>{children}</div>
        </div>
      )}

      {type === 'offcanvas' && (
        <div
          ref={panelRef as React.RefObject<HTMLDivElement>}
          className={[panelClass, css.open].join(' ')}
          role="document"
          onClick={e => e.stopPropagation()}
        >
          <div className={css.offDrawer}>
            <div className="container">
              {Header}
              {children}
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default Modal;
