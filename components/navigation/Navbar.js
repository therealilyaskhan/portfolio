import { useEffect } from 'react';
import Link from 'next/link';

import styles from '../../styles/Navbar.module.scss';


export default function Navbar() {

  useEffect(() => {
    document.addEventListener('scroll', function () {
      let scrollTop =
        document.documentElement['scrollTop'] || document.body['scrollTop'];
      let scrollBottom =
        (document.documentElement['scrollHeight'] ||
          document.body['scrollHeight']) - document.documentElement.clientHeight;
      let scrollPercent = (scrollTop / scrollBottom) * 100 + '%';
      document
        .getElementById('_progress')
        .style.setProperty('--scroll', scrollPercent);
    });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link
              href="/"
            >
              <a className={styles['navbar__item--link']}
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navbar__item}               >
            <Link
              href="/#features"
            >
              <a className={styles['navbar__item--link']}>
                Features
              </a>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              href="/#about"
            >
              <a className={styles['navbar__item--link']}>
                About
              </a>
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              href="/#skills"
            >
              <a className={styles['navbar__item--link']}>
                Skills
              </a>
            </Link>
          </li >
          <li className={styles.navbar__item}>
            <Link
              href="/#testimonials"
            >
              <a className={styles['navbar__item--link']}>
                Testimonials
              </a>
            </Link>
          </li >
          <li className={styles.navbar__item}>
            <Link
              href="/#contact"
            >
              <a className={styles['navbar__item--link']}>
                Contact
              </a>
            </Link>
          </li >
        </ul >
      </div >
      <div id="_progress" className={styles.progress}></div>
    </nav >
  );
}