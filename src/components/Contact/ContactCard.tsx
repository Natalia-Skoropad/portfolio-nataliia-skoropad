import { SocialIcons } from '../../index';
import css from './ContactCard.module.css';

// ================================================================

interface ImgSet {
  image: string;
  image2x?: string;
  imageTab?: string;
  imageTab2x?: string;
  imageDesk?: string;
  imageDesk2x?: string;
  alt: string;
}

interface ContactCardProps extends ImgSet {
  name: string;
  city: string;
  email: string;
}

// ================================================================

function ContactCard({
  name,
  city,
  email,
  image,
  image2x,
  imageTab,
  imageTab2x,
  imageDesk,
  imageDesk2x,
  alt,
}: ContactCardProps) {
  const mSet = image2x ? `${image} 1x, ${image2x} 2x` : image;
  const tSet = imageTab2x ? `${imageTab} 1x, ${imageTab2x} 2x` : imageTab;
  const dSet = imageDesk2x ? `${imageDesk} 1x, ${imageDesk2x} 2x` : imageDesk;

  return (
    <article className={css.root} aria-label={`${name} contacts`}>
      <div className={css.figureWrap}>
        <picture>
          {imageDesk && <source media="(min-width: 1320px)" srcSet={dSet} />}
          {imageTab && <source media="(min-width: 720px)" srcSet={tSet} />}
          <img
            className={css.image}
            src={image}
            srcSet={mSet}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={284}
            height={271}
          />
        </picture>
      </div>

      <div className={css.contacts}>
        <div className={css.info}>
          <p className={css.city}>{city}</p>
          <p className={css.email}>{email}</p>
        </div>

        <div className={css.socialBlock}>
          <p className={css.socialLabel}>Social Media:</p>
          <SocialIcons />
        </div>
      </div>
    </article>
  );
}

export default ContactCard;
