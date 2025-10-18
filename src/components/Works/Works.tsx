import { useEffect, useMemo, useState } from 'react';
import type { Project, WorkCategory } from '../../types/project';
import WorkCard from './WorkCard';
import Section from '../Section/Section';

import clsx from 'clsx';
import css from './Works.module.css';

// ================================================================

const ORDER: WorkCategory[] = ['frontend', 'graphic', 'uxui'];

const LABEL: Record<WorkCategory, string> = {
  frontend: 'Frontend',
  graphic: 'Graphic Design',
  uxui: 'UX/UI Design',
};

interface Props {
  items: Project[];
  idAttr?: string;
}

// ================================================================

function Works({ items, idAttr = 'works' }: Props) {
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

  const panelId = `${idAttr}-panel`;

  return (
    <Section
      id={idAttr}
      kicker="My Works"
      title="DEVELOPMENT & DESIGN"
      headerAlign="left"
      pad="lg"
    >
      <div className={css.tabs} role="tablist" aria-label="Works categories">
        {categories.map(c => {
          const tabId = `${idAttr}-tab-${c}`;
          return (
            <button
              key={c}
              id={tabId}
              type="button"
              role="tab"
              aria-controls={panelId}
              aria-selected={filter === c}
              className={clsx(css.tab, filter === c && css.active)}
              onClick={() => setFilter(c)}
            >
              {LABEL[c]}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className={css.empty}>No projects yet.</p>
      ) : (
        <ul
          id={panelId}
          className={css.grid}
          role="tabpanel"
          aria-labelledby={`${idAttr}-tab-${filter}`}
          aria-label={`${LABEL[filter]} projects`}
        >
          {visible.map(p => (
            <li key={p.id}>
              <WorkCard item={p} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

export default Works;
