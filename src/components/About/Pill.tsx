import css from './About.module.css';
import spriteUrl from '../../assets/sprite.svg';

// ================================================================

function Pill({ id, label }: { id: string; label: string }) {
  const href = spriteUrl ? `${spriteUrl}#${id}` : `#${id}`;

  return (
    <span className={css.pill} role="img" aria-label={label} title={label}>
      <svg
        className={css.pillIcon}
        aria-hidden="true"
        focusable="false"
        width={20}
        height={20}
        viewBox="0 0 32 32"
      >
        <use href={href} xlinkHref={href} />
      </svg>
    </span>
  );
}

export default Pill;
