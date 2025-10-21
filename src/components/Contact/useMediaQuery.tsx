import { useEffect, useState } from 'react';

// ================================================================

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    if ('addEventListener' in mql) {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }
    // @ts-expect-error Safari old API
    mql.addListener(onChange);
    // @ts-expect-error Safari old API
    return () => mql.removeListener(onChange);
  }, [query]);
  return matches;
}

export default useMediaQuery;
