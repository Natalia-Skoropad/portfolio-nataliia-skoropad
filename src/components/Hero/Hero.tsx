import { Button } from '../../index';
import Slideshow, { type Slide } from '../Slideshow/Slideshow';
import { scrollToId } from '../../hooks/scrollToId';
import css from './Hero.module.css';

const projects: Slide[] = [
  {
    src: '/images/img-herro/artistshub.jpg',
    src2x: '/images/img-herro/artistshub@2x.jpg',
    alt: 'Artistshub landing screenshot',
    title: 'ARTISTSHUB',
  },
  {
    src: '/images/img-herro/webstudio.jpg',
    src2x: '/images/img-herro/webstudio@2x.jpg',
    alt: 'WebStudio website screenshot',
    title: 'WEBSTUDIO',
  },
  {
    src: '/images/img-herro/yogabloom.jpg',
    src2x: '/images/img-herro/yogabloom@2x.jpg',
    alt: 'YogaBloom app screenshot',
    title: 'YOGABLOOM',
  },
];

const tools: Slide[] = [
  {
    src: '/images/img-herro/react.jpg',
    src2x: '/images/img-herro/react@2x.jpg',
    alt: 'React tool card',
    title: 'REACT',
  },
  {
    src: '/images/img-herro/figma.jpg',
    src2x: '/images/img-herro/figma@2x.jpg',
    alt: 'Figma tool card',
    title: 'FIGMA',
  },
  {
    src: '/images/img-herro/vite.jpg',
    src2x: '/images/img-herro/vite@2x.jpg',
    alt: 'Vite tool card',
    title: 'VITE',
  },
];

export default function Hero() {
  return (
    <section id="about" className={css.hero}>
      <div className="container">
        <div className={css.grid}>
          <div className={css.side}>
            <div className={css.desktopOnly}>
              <Slideshow items={projects} label="Projects" variant="projects" />
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

            {/* CTA тільки для мобільного */}
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
              <Slideshow items={tools} label="Tools" variant="tools" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
