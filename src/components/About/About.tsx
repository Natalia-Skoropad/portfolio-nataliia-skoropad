import { Section } from '../../index';
import type { AboutItem as Item } from '../../types/about';

import AboutItem from './AboutItem';
import Rail from './Rail';

import css from './About.module.css';
import clsx from 'clsx';
import sectionCss from '../Section/Section.module.css';

// ================================================================

interface Props {
  items: Item[];
  idAttr?: string;
}

// ================================================================

function About({ items, idAttr = 'about' }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <Section
      id={idAttr}
      kicker="About Me"
      title="MY IT CAREER PATH"
      className={clsx(sectionCss.noTop, css.railHost)}
    >
      <Rail
        mode="mobile"
        height={1570}
        positions={[365, 627, 889, 1151, 1413, 1675]}
      />

      <ol className={css.list} aria-label="Career timeline">
        {items.map((item, i) => (
          <AboutItem key={item.id} item={item} index={i} />
        ))}
      </ol>

      <Rail
        mode="tablet"
        height={1210}
        positions={[80, 275, 470, 665, 860, 1055]}
      />

      <Rail
        mode="desktop"
        height={1010}
        positions={[175, 330, 480, 635, 785, 940]}
      />

      <i className={css.bg} aria-hidden="true" />
    </Section>
  );
}

export default About;
