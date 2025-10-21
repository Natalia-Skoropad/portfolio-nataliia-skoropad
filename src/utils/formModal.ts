const EVENT = 'open-form-modal';

export const openFormModal = () => window.dispatchEvent(new CustomEvent(EVENT));

export const subscribeFormModal = (cb: () => void) => {
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};
