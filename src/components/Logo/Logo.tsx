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
  const classes = clsx(css.logo, as === 'a' && css.link, className);

  if (as === 'span') {
    return (
      <span className={classes} onClick={onClick}>
        {text}
      </span>
    );
  }

  return (
    <a href={href} aria-label={ariaLabel} className={classes} onClick={onClick}>
      {text}
    </a>
  );
}

export default Logo;
