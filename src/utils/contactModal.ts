const EVENT = 'open-contact-modal';

export const openContactModal = () =>
  window.dispatchEvent(new CustomEvent(EVENT));

export const subscribeContactModal = (cb: () => void) => {
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};
