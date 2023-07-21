/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import facebook from '../../public/svg/facebook.svg';
import linkedin from '../../public/svg/linkedin.svg';
import codepen from '../../public/svg/codepen.svg';
import stackoverflow from '../../public/svg/stackoverflow.svg';
import fiverr from '../../public/svg/fiverr.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <ul className="footer__nav paragraph--small">
            <li className="footer__nav--link">
              <Link href="/#features"
              >Features</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#about"
              >What i do?</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#testimonials"
              >Happy clients</Link>
            </li>
            <li className="footer__nav--link">
              <Link href="/#contact">Ping me</Link>
            </li>
          </ul>
          <ul className="footer__social-media">
            <a
              href="https://www.fiverr.com/therealilyask/"
              target="blank"
              className="footer__social-media--icon"
            >
              <img src={fiverr.src} alt="fiverr" />
            </a>
            <a
              href="https://web.facebook.com/ilyaskhanhdh/"
              target="blank"
              className="footer__social-media--icon"
            >
              <img src={facebook.src} alt="facebook" />
            </a>
            <a
              href="https://codepen.io/m_ik"
              target="blank"
              className="footer__social-media--icon"
            >
              <img src={codepen.src} alt="codepen" />
            </a>
            <a
              href="https://stackoverflow.com/users/14023580/therealilyaskhan"
              target="blank"
              className="footer__social-media--icon"
            >
              <img src={stackoverflow.src} alt="stackoverflow.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/therealilyaskhan/"
              target="blank"
              className="footer__social-media--icon"
            >
              <img src={linkedin.src} alt="linkedin" />
            </a>
          </ul>
        </div>
        <div className="footer__copyright paragraph--small">
          {new Date().getFullYear()} &copy; all copyrights are reserved by Muhammad Ilyas
        </div>
      </div>
    </footer>
  );
}
