import clsx from 'clsx';
import css from './Section.module.css';

// ================================================================

interface SectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
}

// ================================================================

function Section({ id, title, kicker, children, className }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={clsx('container', css.section, className)}
      aria-labelledby={headingId}
    >
      <header className={css.header}>
        {kicker && <p className={css.kicker}>{kicker}</p>}
        <h2 id={headingId} className={css.h2}>
          {title}
        </h2>
      </header>

      {children}
    </section>
  );
}

export default Section;
