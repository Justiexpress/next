import React from 'react';
import styles from './SocialBar.module.scss';

export const SocialBar = () => {
  return (
    <div id="SocialBar">
      <div className={styles['icon-bar']}>
        <a
          href="https://www.facebook.com/justiexpress"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.facebook}
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://twitter.com/justiexpress"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.x}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/justiexpress"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/justiexpress.legal"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagram}
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCSQYCc0FrL8CrdIAySmNX0w"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtube}
        >
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialBar;