import clsx from 'clsx';
import css from './Section.module.css';

// ================================================================

type Pad = 'sm' | 'md' | 'lg';
type HeaderAlign = 'left' | 'center';

type Props = {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;

  pad?: Pad;
  headerAlign?: HeaderAlign;
  divider?: boolean;
  srOnlyTitle?: boolean;
};

// ================================================================

function Section({
  id,
  title,
  kicker,
  children,
  className,
  pad = 'md',
  headerAlign = 'left',

  srOnlyTitle = false,
}: Props) {
  const headingId = `${id}-heading`;
  const padClass = { sm: css.padSm, md: css.padMd, lg: css.padLg }[pad];

  return (
    <section
      id={id}
      className={clsx('container', css.section, padClass, className)}
      aria-labelledby={headingId}
    >
      <header
        className={clsx(
          css.header,
          headerAlign === 'center' && css.headerCenter
        )}
      >
        {kicker && <p className={css.kicker}>{kicker}</p>}

        <h2
          id={headingId}
          className={clsx(css.h2, srOnlyTitle && 'visually-hidden')}
        >
          {title}
        </h2>
      </header>

      {children}
    </section>
  );
}

export default Section;
