import { Header, Hero, Timeline } from '../../index';
import css from './App.module.css';

import { TIMELINE } from '../../data/timeline';

// ================================================================

function App() {
  return (
    <div className={css.app}>
      <Header />

      <main>
        <Hero />
        <Timeline items={TIMELINE} />

        <section
          id="works"
          className="container"
          style={{ paddingBlock: '24px' }}
        >
          {/* Filters + Cards */}
        </section>
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
