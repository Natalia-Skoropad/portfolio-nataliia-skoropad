const EVENT = 'open-modal';

export const openModal = () => window.dispatchEvent(new CustomEvent(EVENT));

export const subscribeModal = (cb: () => void) => {
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
};
