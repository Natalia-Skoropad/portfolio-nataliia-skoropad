import clsx from 'clsx';
import css from './Logo.module.css';

// ================================================================

interface LogoProps {
  as?: 'a' | 'span';
  href?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  text?: string;
}

// ================================================================

function Logo({
  as = 'a',
  href = '#hero',
  ariaLabel = 'Natalia — Home',
  onClick,
  className,
  text = 'Natalia',
}: LogoProps) {
  if (as === 'span') {
    return (
      <span className={clsx(css.logo, className)} onClick={onClick}>
        {text}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={clsx(css.logo, className)}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Logo;
