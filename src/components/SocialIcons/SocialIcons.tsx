import spriteHref from '../../assets/sprite.svg';
import css from './SocialIcons.module.css';

// ================================================================

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/nataliia-skoropad/',
  github: 'https://github.com/Natalia-Skoropad',
  behance: 'https://www.behance.net/nataliiaskoropad',
} as const;

type Network = keyof typeof LINKS;

const ICON_IDS: Record<Network, string> = {
  linkedin: 'icon-linkedin-logo',
  github: 'icon-github-logo',
  behance: 'icon-behance-logo',
};

// ================================================================

function SocialIcons() {
  const order: Network[] = ['linkedin', 'github', 'behance'];

  return (
    <ul className={css.list} aria-label="Social links">
      {order.map(name => (
        <li key={name}>
          <a
            className={`${css.link} anim-button-gold`}
            href={LINKS[name]}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={name}
          >
            <svg width="40" height="40" aria-hidden="true">
              <use href={`${spriteHref}#${ICON_IDS[name]}`} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
