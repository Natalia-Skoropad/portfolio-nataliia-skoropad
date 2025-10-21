import {
  Header,
  Hero,
  About,
  Works,
  Tools,
  ContactSection,
  Footer,
  FormModal,
  StickyWidget,
  ContactsWidget,
} from '../../index';

import { TIMELINE } from '../../data/about';
import { PROJECTS } from '../../data/projects';

import css from './App.module.css';

// ================================================================

function App() {
  return (
    <div className={css.app}>
      <Header />
      <FormModal />

      <main>
        <Hero />
        <About items={TIMELINE} />
        <div id="timeline-end" aria-hidden="true" />

        <Works items={PROJECTS} />
        <Tools />
        <ContactSection />
        <Footer />
      </main>

      <StickyWidget footerSelector="#footer" />
      <ContactsWidget />
    </div>
  );
}

export default App;
