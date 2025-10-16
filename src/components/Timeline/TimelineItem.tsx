import type { TimelineItem as Item } from '../../types/timeline';
import Pill from './Pill';

import clsx from 'clsx';
import css from './Timeline.module.css';

// ================================================================

interface Props {
  item: Item;
  index: number;
}

// ================================================================

function TimelineItem({ item, index }: Props) {
  const side = item.side ?? (index % 2 === 0 ? 'left' : 'right');

  return (
    <li className={clsx(css.item, side === 'left' ? css.left : css.right)}>
      <div className={css.row}>
        <div className={css.labelCol}>
          <div className={css.tOnly}>
            {item.eyebrow && (
              <div className={css.labelTitle}>{item.eyebrow}</div>
            )}
            {!!item.icons?.length && (
              <div className={css.icons}>
                {item.icons.map(p => (
                  <Pill key={p.id} id={p.id} label={p.label} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={css.cardCol}>
          <div className={css.card}>
            <div className={css.mOnly}>
              {item.eyebrow && (
                <div className={css.eyebrow}>{item.eyebrow}</div>
              )}
              {!!item.icons?.length && (
                <div className={css.icons}>
                  {item.icons.map(p => (
                    <Pill key={p.id} id={p.id} label={p.label} />
                  ))}
                </div>
              )}
            </div>

            <h3 className={css.title}>{item.title}</h3>
            {item.text && <p className={css.text}>{item.text}</p>}
          </div>
        </div>
      </div>
    </li>
  );
}

export default TimelineItem;
