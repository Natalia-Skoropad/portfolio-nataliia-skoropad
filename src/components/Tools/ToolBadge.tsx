import type { ToolItem } from '../../types/tool';
import spriteUrl from '../../assets/sprite.svg';

import css from './Tools.module.css';

// ================================================================

function ToolBadge({ item }: { item: ToolItem }) {
  return (
    <svg
      className={css.badge}
      role="img"
      aria-label={item.label}
      focusable="false"
    >
      <use href={`${spriteUrl}#${item.iconId}`} />
    </svg>
  );
}

export default ToolBadge;
