import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import css from './Slideshow.module.css';

export type Slide = {
  src: string;
  src2x?: string;
  alt: string;
  title?: string;
  href?: string;
};

type Props = {
  items: Slide[];
  label: string;
  autoMs?: number;
  className?: string;
  variant?: 'projects' | 'tools'; // <— додано
};

export default function Slideshow({
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
      {/* Надпис над контейнером */}
      <div
        className={clsx(
          css.labelWrap,
          variant === 'tools' && css.labelWrapRight
        )}
      >
        <div className={css.label}>{label}</div>
      </div>

      {/* Основний контейнер */}
      <section
        className={css.card}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        aria-live="polite"
      >
        {/* Картинка */}
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

        {/* Нижня панель */}
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

/*
export type Slide = {
  src: string;
  src2x?: string; // <— додано
  alt: string;
  title?: string;
  href?: string;
};

type Props = {
  items: Slide[];
  label: string; // “Projects” | “Tools”
  autoMs?: number; // автоплей, за замовчуванням 3000
  className?: string;
};

export default function Slideshow({
  items,
  label,
  autoMs = 3000,
  className,
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
 
      <div className={css.labelWrap}>
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

    
        <div className={css.bottom}>
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
                aria-label={`Go to slide ${i + 1} of ${count}`}
                className={clsx(css.dot, i === index && css.active)}
                onClick={() => go(i)}
              />
            ))}
          </div>

          {slide.title && <div className={css.caption}>{slide.title}</div>}
        </div>
      </section>
    </div>
  );
}

*/
