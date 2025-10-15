import clsx from 'clsx';
import css from './Timeline.module.css';

// ================================================================

type Props = {
  mode: 'mobile' | 'tablet' | 'desktop';
  height?: number;
  positions?: number[];
  startTop?: number;
  gap?: number;
  count?: number;
  className?: string;
};

// ================================================================

function Rail({
  mode,
  height,
  positions,
  startTop = 0,
  gap = 0,
  count = 0,
  className,
}: Props) {
  const tops =
    positions && positions.length
      ? positions
      : Array.from({ length: count }, (_, i) => startTop + i * gap);

  const railHeight = height ?? (tops.length ? tops[tops.length - 1] + 160 : 0);

  return (
    <div
      className={clsx(css.rail, className)}
      data-mode={mode}
      style={{ height: `${railHeight}px` }}
      aria-hidden="true"
    >
      <i className={css.v} />
      {tops.map((top, i) => (
        <div key={i} className={css.branch} style={{ top }}>
          <span className={clsx(css.dot)} />
          <span className={css.h} />
        </div>
      ))}
    </div>
  );
}

export default Rail;
