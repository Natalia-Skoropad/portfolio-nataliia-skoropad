import clsx from 'clsx';
import css from './About.module.css';

// ================================================================

interface Props {
  mode: 'mobile' | 'tablet' | 'desktop';
  height?: number;
  positions?: number[];
  className?: string;
}

// ================================================================

function Rail({ mode, height, positions = [], className }: Props) {
  const railHeight =
    height ?? (positions.length ? positions[positions.length - 1] + 160 : 0);

  return (
    <div
      className={clsx(css.rail, className)}
      data-mode={mode}
      style={{ height: `${railHeight}px` }}
      aria-hidden="true"
    >
      <i className={css.v} />
      {positions.map((top, i) => (
        <div key={i} className={css.branch} style={{ top }}>
          <span className={css.dot} />
          <span className={css.h} />
        </div>
      ))}
    </div>
  );
}

export default Rail;
