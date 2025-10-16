import { Button, Slideshow } from '../../index';
import { HERO_PROJECT_SLIDES, HERO_TOOL_SLIDES } from '../../data/slides';
import { scrollToId } from '../../hooks/scrollToId';

// ================================================================

import css from './Hero.module.css';

function Hero() {
  return (
    <section id="about" className={css.hero}>
      <div className="container">
        <div className={css.grid}>
          <div className={css.side}>
            <div className={css.desktopOnly}>
              <Slideshow
                items={HERO_PROJECT_SLIDES}
                label="Projects"
                variant="projects"
              />
            </div>
          </div>

          <div className={css.center}>
            <div className={css.orb}>
              <div className={css.content}>
                <h1 className={css.title}>Frontend developer</h1>
                <p className={css.sub}>
                  Specialized in Building Responsive Web Applications with
                  Modern Technologies
                </p>
              </div>
            </div>

            <div className={css.ctaMobile}>
              <Button
                text="Hire Me"
                onClick={() => scrollToId('contacts')}
                variant="normal"
              />
            </div>
          </div>

          <div className={css.side}>
            <div className={css.desktopOnly}>
              <Slideshow
                items={HERO_TOOL_SLIDES}
                label="Tools"
                variant="tools"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

/*
import { Button, Slideshow } from '../../index';

import { HERO_PROJECT_SLIDES, HERO_TOOL_SLIDES } from '../../data/slides';
import { scrollToId } from '../../hooks/scrollToId';

import css from './Hero.module.css';

// ================================================================

function Hero() {
  return (
    <section id="about" className={css.hero}>
      <div className="container">
        <div className={css.grid}>
          <div className={css.side}>
            <div className={css.desktopOnly}>
              <Slideshow
                items={HERO_PROJECT_SLIDES}
                label="Projects"
                variant="projects"
              />
            </div>
          </div>

          <div className={css.center}>
            <div className={css.orb}>
              <div className={css.content}>
                <h1 className={css.title}>Frontend developer</h1>
                <p className={css.sub}>
                  Specialized in Building Responsive Web Applications with
                  Modern Technologies
                </p>
              </div>
            </div>

            <div className={css.ctaMobile}>
              <Button
                text="Hire Me"
                onClick={() => scrollToId('contacts')}
                variant="normal"
              />
            </div>
          </div>

          <div className={css.side}>
            <div className={css.desktopOnly}>
              <Slideshow
                items={HERO_TOOL_SLIDES}
                label="Tools"
                variant="tools"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
*/
