import { useState } from 'react';
import type { Slide } from '../../types/slide';
import { useInterval } from '../../hooks/useInterval';

import clsx from 'clsx';
import css from './Slideshow.module.css';

// ================================================================

interface Props {
  items: Slide[];
  label: string;
  autoMs?: number;
  className?: string;
  variant?: 'projects' | 'tools';
}

// ================================================================

function Slideshow({
  items,
  label,
  autoMs = 3000,
  className,
  variant = 'projects',
}: Props) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  useInterval(() => setIndex(i => (i + 1) % count), count > 1 ? autoMs : null);

  const go = (i: number) => setIndex(i);
  const slide = items[index];

  return (
    <div className={clsx(css.wrap, className)}>
      <div
        className={clsx(
          css.labelWrap,
          variant === 'tools' && css.labelWrapRight
        )}
      >
        <div className={css.label}>{label}</div>
      </div>

      <section
        className={css.card}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        aria-live="polite"
      >
        <div className={css.imageFrame}>
          {slide.href ? (
            <a href={slide.href} target="_blank" rel="noreferrer noopener">
              <img
                src={slide.src}
                srcSet={
                  slide.src2x ? `${slide.src} 1x, ${slide.src2x} 2x` : undefined
                }
                alt={slide.alt}
                className={css.image}
                loading="lazy"
                decoding="async"
                width={286}
                height={186}
              />
            </a>
          ) : (
            <img
              src={slide.src}
              srcSet={
                slide.src2x ? `${slide.src} 1x, ${slide.src2x} 2x` : undefined
              }
              alt={slide.alt}
              className={css.image}
              loading="lazy"
              decoding="async"
              width={286}
              height={186}
            />
          )}
        </div>

        <div
          className={clsx(
            css.bottom,
            variant === 'projects' ? css.project : css.tools
          )}
        >
          {variant === 'projects' ? (
            <>
              <div
                className={css.dots}
                role="tablist"
                aria-label={`${label} slides`}
              >
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1} of ${items.length}`}
                    className={clsx(css.dot, i === index && css.active)}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
              {slide.title && <div className={css.caption}>{slide.title}</div>}
            </>
          ) : (
            <>
              {slide.title && <div className={css.caption}>{slide.title}</div>}
              <div
                className={css.dots}
                role="tablist"
                aria-label={`${label} slides`}
              >
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1} of ${items.length}`}
                    className={clsx(css.dot, i === index && css.active)}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Slideshow;

/*
import { useEffect, useRef, useState } from 'react';
import type { Slide } from '../../types/slide';

import clsx from 'clsx';
import css from './Slideshow.module.css';

// ================================================================

interface Props {
  items: Slide[];
  label: string;
  autoMs?: number;
  className?: string;
  variant?: 'projects' | 'tools';
}

// ================================================================

function Slideshow({
  items,
  label,
  autoMs = 3000,
  className,
  variant = 'projects',
}: Props) {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const count = items.length;

  useEffect(() => {
    if (count <= 1) return;
    timer.current = window.setInterval(
      () => setIndex(i => (i + 1) % count),
      autoMs
    );
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [count, autoMs]);

  const go = (i: number) => {
    setIndex(i);
    if (timer.current) {
      window.clearInterval(timer.current);
      timer.current = window.setInterval(
        () => setIndex(v => (v + 1) % count),
        autoMs
      );
    }
  };

  const slide = items[index];

  return (
    <div className={clsx(css.wrap, className)}>
      <div
        className={clsx(
          css.labelWrap,
          variant === 'tools' && css.labelWrapRight
        )}
      >
        <div className={css.label}>{label}</div>
      </div>

      <section
        className={css.card}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        aria-live="polite"
      >
        <div className={css.imageFrame}>
          {slide.href ? (
            <a href={slide.href} target="_blank" rel="noreferrer noopener">
              <img
                src={slide.src}
                srcSet={
                  slide.src2x ? `${slide.src} 1x, ${slide.src2x} 2x` : undefined
                }
                alt={slide.alt}
                className={css.image}
                loading="lazy"
                decoding="async"
                width={286}
                height={186}
              />
            </a>
          ) : (
            <img
              src={slide.src}
              srcSet={
                slide.src2x ? `${slide.src} 1x, ${slide.src2x} 2x` : undefined
              }
              alt={slide.alt}
              className={css.image}
              loading="lazy"
              decoding="async"
              width={286}
              height={186}
            />
          )}
        </div>

        <div
          className={clsx(
            css.bottom,
            variant === 'projects' ? css.project : css.tools
          )}
        >
          {variant === 'projects' ? (
            <>
              <div
                className={css.dots}
                role="tablist"
                aria-label={`${label} slides`}
              >
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1} of ${items.length}`}
                    className={clsx(css.dot, i === index && css.active)}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
              {slide.title && <div className={css.caption}>{slide.title}</div>}
            </>
          ) : (
            <>
              {slide.title && <div className={css.caption}>{slide.title}</div>}
              <div
                className={css.dots}
                role="tablist"
                aria-label={`${label} slides`}
              >
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to slide ${i + 1} of ${items.length}`}
                    className={clsx(css.dot, i === index && css.active)}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Slideshow;
*/
