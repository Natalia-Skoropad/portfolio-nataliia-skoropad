import { useEffect } from 'react';

// ================================================================

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
  ref: React.RefObject<HTMLElement | null>,
  active: boolean,
  onEscape?: () => void
) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const prev = (document.activeElement as HTMLElement | null) ?? null;

    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscape?.();
      if (e.key !== 'Tab' || nodes.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      prev?.focus();
    };
  }, [active, onEscape, ref]);
}

/*
import { useEffect } from 'react';

// ================================================================

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
  ref: React.RefObject<HTMLElement>,
  active: boolean,
  onEscape?: () => void
) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const prev = (document.activeElement as HTMLElement | null) ?? null;

    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscape?.();
      if (e.key !== 'Tab' || nodes.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      prev?.focus();
    };
  }, [active, onEscape, ref]);
}
*/
