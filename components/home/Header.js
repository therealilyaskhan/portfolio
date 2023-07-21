/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import profilePic from '../../public/img/ilyas-khan.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className="header--content">
        <div className="container">
          <div className="header__img">
            <img
              className="header__img--img"
              src={profilePic.src}
              alt="Muhammad Ilyas"
            />
          </div>
          <div className="header--sub-heading heading--secondary">
            Hello! My name is Muhammad Ilyas
          </div>
          <div className="header--primary-heading heading--primary">
            I&#39;m a front-end developer
          </div>
          <div className="header--primary-heading heading--primary">
            I bring your <span className="header--highlight">ideas to life</span>
          </div>
          <Link href='/#testimonials'>
            <a className="header__btn btn btn--lg btn--outline btn--light">
              <span className="btn--text">Testimonials</span>
              <svg
                className="btn--icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </header >
  );
}
