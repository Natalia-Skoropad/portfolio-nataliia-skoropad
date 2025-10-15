import { Header, Hero, Timeline, Works } from '../../index';
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

        <section
          id="tools"
          className="container"
          style={{ paddingBlock: '24px' }}
        >
          {/* My Toolbox */}
        </section>
        <section
          id="contacts"
          className="container"
          style={{ paddingBlock: '24px' }}
        >
          {/* Contact + Modal */}
        </section>
      </main>
    </div>
  );
}
export default App;
