import React, { useEffect, useState } from 'react';
import { Section } from '../../index';
import styles from './contact-section.module.css';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

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

    // @ts-expect-error: старий API підтримується в Safari
    mql.addListener(onChange);
    // @ts-expect-error: старий API підтримується в Safari
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}

const ContactSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Section
      id="contact"
      kicker="Contact Me"
      title="NATALIIA SKOROPAD"
      className={styles.section}
    >
      <div className={styles.grid}>
        <div className={styles.left}>
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
            <button
              type="button"
              className={styles.ctaBtn}
              onClick={() => {}}
              aria-haspopup="dialog"
              aria-controls="contact-form-modal"
            >
              Hire Me
            </button>
          )}
        </div>

        {!isMobile && (
          <div className={styles.right}>
            <ContactForm />
          </div>
        )}
      </div>
    </Section>
  );
};

export default ContactSection;
