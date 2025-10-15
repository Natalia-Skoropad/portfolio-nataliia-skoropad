import css from './Timeline.module.css';
import spriteUrl from '../../assets/sprite.svg?url';

// ================================================================

function Pill({ id, label }: { id: string; label: string }) {
  const href = spriteUrl ? `${spriteUrl}#${id}` : `#${id}`;

  return (
    <span className={css.pill} aria-label={label} title={label}>
      <svg
        className={css.pillIcon}
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 32 32"
      >
        <use href={href} xlinkHref={href} />
      </svg>
      <span className={css.pillText}>{label}</span>
    </span>
  );
}

export default Pill;
