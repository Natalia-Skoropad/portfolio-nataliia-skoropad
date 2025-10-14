import { Header, Hero } from '../../index';
import css from './App.module.css';

// ================================================================

function App() {
  return (
    <div className={css.app}>
      <Header />

      <main>
        <Hero />

        <section
          id="timeline"
          className="container"
          style={{ paddingBlock: '24px' }}
        >
          {/* My IT Career Path */}
        </section>
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
