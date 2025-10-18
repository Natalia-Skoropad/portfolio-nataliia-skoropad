import {
  Header,
  Hero,
  Timeline,
  Works,
  Tools,
  ContactSection,
  Footer,
  ContactModal,
  StickyWidget,
  ContactsWidget,
} from '../../index';

import css from './App.module.css';

import { TIMELINE } from '../../data/timeline';
import { PROJECTS } from '../../data/projects';

// ================================================================

function App() {
  return (
    <div className={css.app}>
      <Header />
      <ContactModal />
      <main>
        <Hero />
        <Timeline items={TIMELINE} />

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
