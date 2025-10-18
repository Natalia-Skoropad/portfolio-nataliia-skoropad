import { useEffect, useState } from 'react';
import { Section, Form, Button } from '../../index';

import { openContactModal } from '../../utils/contactModal';
import ContactCard from './ContactCard';

import css from './ContactSection.module.css';

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

// ================================================================

function ContactSection() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Section
      id="contact"
      kicker="Contact Me"
      title="NATALIIA SKOROPAD"
      className={css.section}
    >
      <div className={css.grid}>
        <div className={css.left}>
          <ContactCard
            name="Natalia Skoropad"
            city="Odesa"
            email="skoropad_natalia@ukr.net"
            image="/images/contacts/mobile-nataliia-skoropad.jpg"
            image2x="/images/contacts/mobile-nataliia-skoropad@2x.jpg"
            imageTab="/images/contacts/tab-nataliia-skoropad.jpg"
            imageTab2x="/images/contacts/tab-nataliia-skoropad@2x.jpg"
            imageDesk="/images/contacts/desk-nataliia-skoropad.jpg"
            imageDesk2x="/images/contacts/desk-nataliia-skoropad@2x.jpg"
            alt="Natalia Skoropad portrait"
          />

          {isMobile && (
            <div className={css.ctaMobile}>
              <Button text="Hire Me" onClick={openContactModal} />
            </div>
          )}
        </div>

        {!isMobile && (
          <div className={css.right}>
            <Form />
          </div>
        )}
      </div>
    </Section>
  );
}
export default ContactSection;
