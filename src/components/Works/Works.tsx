import { useEffect, useMemo, useState } from 'react';
import type { Project, WorkCategory } from '../../types/project';
import WorkCard from './WorkCard';
import clsx from 'clsx';
import css from './Works.module.css';

const ORDER: WorkCategory[] = ['frontend', 'graphic', 'uxui'];

const LABEL: Record<WorkCategory, string> = {
  frontend: 'Frontend',
  graphic: 'Graphic Design',
  uxui: 'UX/UI Design',
};

type Props = { items: Project[]; idAttr?: string };

export default function Works({ items, idAttr = 'works' }: Props) {
  const categories = useMemo(
    () => ORDER.filter(c => items.some(p => p.categories.includes(c))),
    [items]
  );

  const [filter, setFilter] = useState<WorkCategory>(() => {
    return (categories[0] ?? 'frontend') as WorkCategory;
  });

  useEffect(() => {
    if (!categories.includes(filter) && categories.length) {
      setFilter(categories[0] as WorkCategory);
    }
  }, [categories, filter]);

  const visible = useMemo(
    () => items.filter(p => p.categories.includes(filter)),
    [items, filter]
  );

  const headingId = `${idAttr}-heading`;

  return (
    <section
      id={idAttr}
      className={clsx('container', css.section)}
      aria-labelledby={headingId}
    >
      <header className={css.header}>
        <p className={css.kicker}>My Works</p>
        <h2 id={headingId} className={css.h2}>
          DEVELOPMENT &amp; DESIGN
        </h2>
      </header>

      <div className={css.tabs} role="tablist" aria-label="Works categories">
        {categories.map(c => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={clsx(css.tab, filter === c && css.active)}
            onClick={() => setFilter(c)}
          >
            {LABEL[c]}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className={css.empty}>No projects yet.</p>
      ) : (
        <ul className={css.grid} aria-label={`${LABEL[filter]} projects`}>
          {visible.map(p => (
            <li key={p.id}>
              <WorkCard item={p} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
