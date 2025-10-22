import { Section, Form, Button } from '../../index';
import { openModal } from '../../utils/modal';
import ContactCard from './ContactCard';
import useMediaQuery from './useMediaQuery';

import css from './Contacts.module.css';

// ================================================================

function Contacts() {
  const isMobile = useMediaQuery('(max-width: 719px)');

  return (
    <Section
      id="contacts"
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
              <Button text="Hire Me" onClick={openModal} />
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

export default Contacts;
