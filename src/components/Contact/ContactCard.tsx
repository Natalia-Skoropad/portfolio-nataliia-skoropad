import React from 'react';
import { SocialIcons } from '../../index';
import css from './Contact-card.module.css';

type ImgSet = {
  image: string;
  image2x?: string;
  imageTab?: string;
  imageTab2x?: string;
  imageDesk?: string;
  imageDesk2x?: string;
  alt: string;
};

interface Props extends ImgSet {
  name: string;
  city: string;
  email: string;
}

const ContactCard: React.FC<Props> = ({
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
}) => {
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
          <a className={css.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <SocialIcons />
      </div>
    </article>
  );
};

export default ContactCard;

/*
import React from 'react';
import styles from './contact-card.module.css';
import SocialIcons from '../SocialIcons/SocialIcons'; // за потреби підкоригуй шлях

type Props = {
  name: string;
  city: string;
  email: string;
  imageSrc: string;
  imageAlt?: string;
};

const ContactCard: React.FC<Props> = ({ city, email, imageSrc, imageAlt }) => {
  return (
    <article className={styles.card}>
      <div className={styles.photoWrap}>
        <img
          className={styles.photo}
          src={imageSrc}
          alt={imageAlt ?? 'Contact photo'}
        />
        <div className={styles.orbs} aria-hidden />
      </div>

      <div className={styles.info}>
        <p className={styles.city}>{city}</p>
        <p className={styles.email}>{email}</p>
      </div>

      <div className={styles.social}>
        <SocialIcons />
      </div>
    </article>
  );
};

export default ContactCard;
*/
