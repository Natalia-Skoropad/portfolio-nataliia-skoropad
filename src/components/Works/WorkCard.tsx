import type { Project } from '../../types/project';
import spriteUrl from '../../assets/sprite.svg';

import clsx from 'clsx';
import css from './Works.module.css';

// ================================================================

interface WorkCardProps {
  item: Project;
}

// ================================================================

function WorkCard({ item }: WorkCardProps) {
  const mSet = item.image2x
    ? `${item.image} 1x, ${item.image2x} 2x`
    : item.image;
  const tSet = item.imageTab2x
    ? `${item.imageTab} 1x, ${item.imageTab2x} 2x`
    : item.imageTab;
  const dSet = item.imageDesk2x
    ? `${item.imageDesk} 1x, ${item.imageDesk2x} 2x`
    : item.imageDesk;
  const leftLabel = item.group ? 'Group Project Name:' : 'Project Name:';

  return (
    <article className={clsx(css.card, 'anim-card')}>
      {item.href && (
        <a
          className={css.cover}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open ${item.title}`}
        />
      )}

      <div className={css.figureWrap}>
        <picture>
          {item.imageDesk && (
            <source media="(min-width: 1320px)" srcSet={dSet} />
          )}
          {item.imageTab && <source media="(min-width: 720px)" srcSet={tSet} />}
          <img
            className={css.image}
            src={item.image}
            srcSet={mSet}
            alt={item.alt}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div className={css.meta}>
        <div className={css.metaCol}>
          <p className={css.metaLabel}>{leftLabel}</p>
          <p className={css.title}>{item.title}</p>
        </div>

        <div className={clsx(css.metaCol, css.right)}>
          <p className={css.metaLabel}>Toolbox:</p>
          <div className={css.stack}>
            {item.stack?.map(s =>
              s.iconId ? (
                <svg
                  key={s.iconId}
                  className={css.icon}
                  width="20"
                  height="20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use
                    href={`${spriteUrl}#${s.iconId}`}
                    xlinkHref={`${spriteUrl}#${s.iconId}`}
                  />
                </svg>
              ) : (
                <span key={s.label} className={css.badge}>
                  {s.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default WorkCard;
