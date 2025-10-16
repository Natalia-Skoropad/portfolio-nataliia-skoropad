import {
  Header,
  Hero,
  Timeline,
  Works,
  Tools,
  ContactSection,
} from '../../index';
import css from './App.module.css';

import { TIMELINE } from '../../data/timeline';
import { PROJECTS } from '../../data/projects';

// ================================================================

function App() {
  return (
    <div className={css.app}>
      <Header />

      <main>
        <Hero />
        <Timeline items={TIMELINE} />
        <Works items={PROJECTS} />
        <Tools />;
        <ContactSection />
      </main>
    </div>
  );
}
export default App;

/*
import { Header, Hero } from '../../index';
import css from './App.module.css';

import { TIMELINE } from '../../data/timeline';
import { PROJECTS } from '../../data/projects';

import { lazy, Suspense } from 'react';

const Timeline = lazy(() => import('../Timeline/Timeline'));
const Works = lazy(() => import('../Works/Works'));

function App() {
  return (
    <div className={css.app}>
      <Header />

      <main>
        <Hero />
        <Suspense fallback={null}>
          <Timeline items={TIMELINE} />
        </Suspense>
        <Suspense fallback={null}>
          <Works items={PROJECTS} />
        </Suspense>

        <section id="tools" className="container" style={{ paddingBlock: '24px' }}>

        </section>
        <section id="contacts" className="container" style={{ paddingBlock: '24px' }}>

        </section>
      </main>
    </div>
  );
}
export default App;
*/
