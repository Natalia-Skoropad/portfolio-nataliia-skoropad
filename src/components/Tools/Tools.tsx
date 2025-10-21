import Section from '../Section/Section';

import { TOOLS } from '../../data/tools';

import css from './Tools.module.css';
import ToolBadge from './ToolBadge';

// ================================================================

function Tools() {
  return (
    <Section id="tools" kicker="My Toolbox" title="DEV & DESIGN STACK">
      <ul className={css.grid} aria-label="Toolbox">
        {TOOLS.map(tool => (
          <li key={tool.id} className={css.cell}>
            <ToolBadge item={tool} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Tools;
