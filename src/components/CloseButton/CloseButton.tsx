import spriteHref from '../../assets/sprite.svg';
import css from './CloseButton.module.css';

// ================================================================

interface CloseButtonProps {
  onClick: () => void;
  ariaLabel?: string;
}

// ================================================================

function CloseButton({ onClick, ariaLabel = 'Close' }: CloseButtonProps) {
  return (
    <button
      type="button"
      className={css.menuBtn}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <svg className={`${css.iconSquare} anim-icon-square`} aria-hidden="true">
        <use href={`${spriteHref}#icon-close-button`} />
      </svg>
    </button>
  );
}

export default CloseButton;
