import { Button, Slideshow } from '../../index';

import { HERO_PROJECT_SLIDES, HERO_TOOL_SLIDES } from '../../data/slides';
import { openFormModal } from '../../utils/formModal';

import css from './Hero.module.css';

// ================================================================

function Hero() {
  return (
    <section id="hero" className={css.hero}>
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
              <Button text="Hire Me" onClick={openFormModal} variant="normal" />
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
