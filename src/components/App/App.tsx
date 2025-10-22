import { useEffect, useState } from 'react';

import {
  Header,
  Hero,
  About,
  Work,
  Tools,
  Contacts,
  Footer,
  ArrowWidget,
  ContactsWidget,
  Form,
  Modal,
} from '../../index';

import { TIMELINE } from '../../data/about';
import { PROJECTS } from '../../data/projects';
import { subscribeModal } from '../../utils/modal';

import css from './App.module.css';

// ================================================================

const SUCCESS_LIFETIME = 10_000;

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => subscribeModal(() => setIsFormOpen(true)), []);

  function closeForm() {
    setIsFormOpen(false);
    setShowSuccess(false);
  }
  function handleSent() {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), SUCCESS_LIFETIME);
  }

  return (
    <div className={css.app}>
      <Header />

      <Modal
        type="modal"
        open={isFormOpen}
        onClose={closeForm}
        showSuccess={showSuccess}
      >
        <Form onSent={handleSent} inlineSuccess={false} />
      </Modal>

      <main>
        <Hero />
        <About items={TIMELINE} />
        <div id="timeline-end" aria-hidden="true" />
        <Work items={PROJECTS} />
        <Tools />
        <Contacts />
        <Footer />
      </main>

      <ArrowWidget footerSelector="#footer" />
      <ContactsWidget />
    </div>
  );
}

export default App;
