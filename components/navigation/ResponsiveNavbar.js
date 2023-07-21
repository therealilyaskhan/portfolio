import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/ResponsiveNavbar.module.scss';

export default function ResponsiveNavbar() {

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className={`${styles.navigation} ${showNav ? styles['navigation-display'] : ''}`}>
        <label
          className={styles.navigation__button}
          onClick={showNavHandler}
        >
          <span className={styles.navigation__icon}>&nbsp;</span>
        </label>
        <div className={styles.navigation__background}>&nbsp;</div>
        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link
                href="/"
              >
                <a onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  showNavHandler();
                }}
                  className={styles.navigation__link}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link
                href="/#features"
              >
                <a onClick={showNavHandler} className={styles.navigation__link}>
                  Features
                </a>
              </Link>
            </li>
            <li className={styles.navigation__item}>
              <Link
                href="/#about"
              >
                <a onClick={showNavHandler} className={styles.navigation__link}>
                  About
                </a>
              </Link>
            </li >
            <li className={styles.navigation__item}>
              <Link
                href="/#skills"
              >
                <a onClick={showNavHandler} className={styles.navigation__link}>
                  Skills
                </a>
              </Link>
            </li >
            <li className={styles.navigation__item}>
              <Link
                href="/#testimonials"
              >
                <a onClick={showNavHandler} className={styles.navigation__link}>
                  Testimonials
                </a>
              </Link>
            </li >
            <li className={styles.navigation__item}>
              <Link
                href="/#contact"
              >
                <a onClick={showNavHandler} className={styles.navigation__link}>
                  Contact
                </a>
              </Link>
            </li >
          </ul >
        </nav >
      </div >
    </div >
  );
}