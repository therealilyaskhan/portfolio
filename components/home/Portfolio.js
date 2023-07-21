/* eslint-disable @next/next/no-img-element */
import handbagApp from '../../public/img/handbag-app.png';
import socialApp from '../../public/img/social-app.png';

export default function Portfolio() {
  return (
    <section className="portfolio" id="testimonials">
      <div className="container">
        <div className="portfolio__content">
          <div data-aos="fade-up" className="portfolio__title heading--primary">
            Portfolio
          </div>
          <div className="portfolio__cards">
            <div data-aos="zoom-in" className="portfolio__card">
              <div className="portfolio__card__img">
                <img
                  src={socialApp.src}
                  alt="social application"
                  className="portfolio__card--img"
                />
              </div>
              <div className="portfolio__card--info">
                <div className="portfolio__card--title heading--secondary">
                  Killtime
                </div>
                <div className="portfolio__card--paragraph paragraph--small">
                  Social application to make friends and spend time well
                </div>
                <a
                  href="https://social-app-c3f27.web.app/"
                  target="_blank"
                  rel='noreferrer'
                  className="portfolio__card--btn btn btn--sm btn--outline btn--dark"
                >
                  <span className="btn--text">More</span>
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
              </div>
            </div>
            <div data-aos="zoom-in" className="portfolio__card">
              <div className="portfolio__card__img">
                <img
                  src={handbagApp.src}
                  alt="handbag application"
                  className="portfolio__card--img"
                />
              </div>
              <div className="portfolio__card--info">
                <div className="portfolio__card--title heading--secondary">
                  Stockbag
                </div>
                <div className="portfolio__card--paragraph paragraph--small">
                  Store to buy and sell handbags
                </div>
                <a
                  href="https://handbag-store.web.app/"
                  target="_blank"
                  rel='noreferrer'
                  className="portfolio__card--btn btn btn--sm btn--outline btn--dark"
                >
                  <span className="btn--text">More</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}