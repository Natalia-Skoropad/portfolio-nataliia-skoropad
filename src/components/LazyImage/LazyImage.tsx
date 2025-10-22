import { useEffect, useState } from 'react';

import clsx from 'clsx';
import css from './LazyImage.module.css';

// ================================================================

type SourceItem = {
  media?: string;
  srcSet: string;
  type?: string;
};

interface LazyImageProps {
  className?: string;
  src: string;
  srcSet?: string;
  alt: string;
  sources?: SourceItem[];
  placeholderSrc?: string;
  showSkeleton?: boolean;
  loading?: HTMLImageElement['loading'];
  decoding?: HTMLImageElement['decoding'];
}

// ================================================================

function LazyImage({
  className,
  src,
  srcSet,
  alt,
  sources,
  placeholderSrc,
  showSkeleton = true,
  loading = 'lazy',
  decoding = 'async',
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src, srcSet]);

  const showSkeletonNow = !placeholderSrc && !loaded && showSkeleton;

  return (
    <div
      className={clsx(css.wrap, className, showSkeletonNow && css.skeleton)}
      aria-busy={!loaded}
    >
      {placeholderSrc && (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          decoding="async"
          className={clsx(css.placeholder, loaded && css.placeholderHidden)}
        />
      )}

      <picture className={css.picture}>
        {sources?.map((s, i) => (
          <source key={i} media={s.media} srcSet={s.srcSet} type={s.type} />
        ))}
        <img
          className={clsx(css.img, loaded && css.loaded)}
          src={src}
          srcSet={srcSet}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
}

export default LazyImage;
