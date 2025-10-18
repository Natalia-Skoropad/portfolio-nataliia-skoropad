import type { TimelineItem as Item } from '../../types/timeline';

import TimelineItem from './TimelineItem';
import Rail from './Rail';
import { Section } from '../../index';

import css from './Timeline.module.css';

// ================================================================

interface Props {
  items: Item[];
  idAttr?: string;
}

// ================================================================

function Timeline({ items, idAttr = 'about' }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <Section
      id={idAttr}
      kicker="About Me"
      title="MY IT CAREER PATH"
      className={css.railHost}
      headerAlign="left"
      pad="lg"
    >
      <Rail
        mode="mobile"
        height={1600}
        positions={[315, 577, 839, 1101, 1363, 1625]}
      />

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
    </Section>
  );
}

export default Timeline;
