export const DRAFT_KEY = 'contactFormDraft';

export function loadDraft<T>(fallback: T): T {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

export function saveDraft<T>(values: T) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
  } catch {
    /* ignore quota errors */
  }
}

export function clearDraft() {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}
