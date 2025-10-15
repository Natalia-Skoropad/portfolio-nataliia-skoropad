import type { TimelineItem as Item } from '../../types/timeline';

import TimelineItem from './TimelineItem';
import Rail from './Rail';

import clsx from 'clsx';
import css from './Timeline.module.css';

// ================================================================

type Props = {
  items: Item[];
  idAttr?: string;
};

// ================================================================

function Timeline({ items, idAttr = 'timeline' }: Props) {
  if (!items || items.length === 0) return null;
  const headingId = `${idAttr}-heading`;

  return (
    <section
      id={idAttr}
      className={clsx('container', css.section, css.railHost)}
      aria-labelledby={headingId}
    >
      <Rail
        mode="mobile"
        height={1600}
        positions={[315, 577, 839, 1101, 1363, 1625]}
      />

      <header className={css.header}>
        <p className={css.kicker}>About Me</p>
        <h2 id={headingId} className={css.h2}>
          MY IT CAREER PATH
        </h2>
      </header>

      <ol className={css.list} aria-label="Career timeline">
        {items.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </ol>

      <Rail
        mode="tablet"
        height={1210}
        positions={[465, 270, 855, 660, 1245, 1050]}
      />

      <Rail
        mode="desktop"
        height={1100}
        positions={[192, 345, 498, 649, 801, 954]}
      />
    </section>
  );
}

export default Timeline;
