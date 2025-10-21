import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

import clsx from 'clsx';
import css from './Offcanvas.module.css';

// ================================================================

interface OffcanvasProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// ================================================================

function Offcanvas({ open, onClose, children }: OffcanvasProps) {
  const panelRef = useRef<HTMLElement | null>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useFocusTrap(panelRef, open, onClose);

  const node = (
    <>
      <div
        className={clsx(css.backdrop, open && css.open, 'anim-fade')}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        ref={panelRef}
        className={clsx(
          css.panel,
          css.panelDrawer,
          open && css.open,
          'anim-offcanvas-drawer'
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="container">{children}</div>
      </aside>
    </>
  );

  return createPortal(node, document.body);
}

export default Offcanvas;
