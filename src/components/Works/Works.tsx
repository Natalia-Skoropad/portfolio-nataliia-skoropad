import { useEffect, useMemo, useState } from 'react';

import { Button, Section } from '../../index';
import type { Project, WorkCategory } from '../../types/project';

import WorkCard from './WorkCard';
import css from './Works.module.css';

// ================================================================

const ORDER: WorkCategory[] = ['frontend', 'graphic', 'uxui'];

const LABEL: Record<WorkCategory, string> = {
  frontend: 'Frontend',
  graphic: 'Graphic Design',
  uxui: 'UX/UI Design',
};

interface WorksProps {
  items: Project[];
  idAttr?: string;
}

// ================================================================

function Works({ items, idAttr = 'works' }: WorksProps) {
  const categories = useMemo(
    () => ORDER.filter(c => items.some(p => p.categories.includes(c))),
    [items]
  );

  const [filter, setFilter] = useState<WorkCategory>(
    () => (categories[0] ?? 'frontend') as WorkCategory
  );

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
    <Section id={idAttr} kicker="My Works" title="DEVELOPMENT & DESIGN">
      <div className={css.tabs} role="tablist" aria-label="Works categories">
        {categories.map(c => {
          const active = filter === c;
          const tabId = `${idAttr}-tab-${c}`;
          return (
            <Button
              key={c}
              id={tabId}
              role="tab"
              aria-controls={panelId}
              aria-selected={active}
              variant={active ? 'normal' : 'tab'}
              text={LABEL[c]}
              onClick={() => setFilter(c)}
            />
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className={css.empty}>No projects yet.</p>
      ) : (
        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${idAttr}-tab-${filter}`}
          aria-label={`${LABEL[filter]} projects`}
        >
          <ul className={css.grid} role="list">
            {visible.map(p => (
              <li key={p.id}>
                <WorkCard item={p} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}

export default Works;
