import { useEffect, useState } from 'react';
import spriteHref from '../../assets/sprite.svg';
import { scrollToId } from '../../hooks/scrollToId';
import type { SectionId } from '../../data/nav';
import css from './StickyWidget.module.css';

type Props = {
  sentinelId?: string;
  targetId?: SectionId;
  footerSelector?: string;
};

export default function StickyWidget({
  sentinelId = 'timeline-end',
  targetId = 'hero',
  footerSelector = 'footer',
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const startEl = document.getElementById(sentinelId);
    const footerEl =
      (document.querySelector(footerSelector) as HTMLElement | null) ?? null;

    if (!startEl) return;

    const docTop = (el: HTMLElement) =>
      el.getBoundingClientRect().top + window.scrollY;

    let startY = docTop(startEl);
    let footerY = footerEl ? docTop(footerEl) : Number.POSITIVE_INFINITY;

    const recalc = () => {
      startY = docTop(startEl);
      footerY = footerEl ? docTop(footerEl) : Number.POSITIVE_INFINITY;
      onScroll();
    };

    const onScroll = () => {
      const viewportBottom = window.scrollY + window.innerHeight;
      const passedStart = viewportBottom >= startY;
      const beforeFooter = viewportBottom < footerY;
      setVisible(passedStart && beforeFooter);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recalc);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recalc);
    };
  }, [sentinelId, footerSelector]);

  return (
    <div className={`${css.wrap} ${visible ? css.visible : css.hidden}`}>
      <button
        type="button"
        className={css.btn}
        aria-label="Back to Hero"
        onClick={() => scrollToId(targetId)}
      >
        <svg className={css.icon} width={18} height={10} aria-hidden="true">
          <use href={`${spriteHref}#icon-arrow`} />
        </svg>
      </button>
    </div>
  );
}
