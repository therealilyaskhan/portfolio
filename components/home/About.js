import aboutPhoto from "../../public/img/about-photo.jpg";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div data-aos="fade" className="about__card">
          <div className="about__img">
            <img
              src={aboutPhoto.src}
              alt="Muhammad Ilyas"
              className="about__img--img"
            />
          </div>
          <div className="about__content">
            <div
              data-aos="fade-left"
              className="about--title heading--secondary"
            >
              about me
            </div>
            <div
              data-aos="fade-left"
              className="about--paragraph paragraph--small"
            >
              I am a Level 2 seller on Fiverr with an outstanding track record.
              With over 90+ satisfied clients worldwide and a consistent
              five-star rating, I take great pride in delivering exceptional
              service. I'm Passionate, hardworking, and open to opportunities. I
              have been exploring web technologies since 2018.
            </div>
            <div className="about__list">
              <div data-aos="fade-left" className="about__list--item">
                <svg
                  className="about__list--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path
                    d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"
                    fill="#626262"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="about__list--text paragraph--small">
                  Muhammad Ilyas
                </div>
              </div>
              <div data-aos="fade-left" className="about__list--item">
                <svg
                  className="about__list--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414L9.586 7L8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414L19.586 17l-2.006 2.005z"
                    fill="#626262"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="about__list--text paragraph--small">
                  +923435296396
                </div>
              </div>
              <div data-aos="fade-left" className="about__list--item">
                <svg
                  className="about__list--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#626262"
                    d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75L5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="about__list--text paragraph--small">
                  therealilyaskhan@gmail.com
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="about__interests">
              Interests
            </div>
            <div className="about__chips chips">
              <div data-aos="fade-left" className="chips__item">
                <svg
                  className="chips__item--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4a8 8 0 0 0-8 8h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 0 0-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z"
                    fill="#626262"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="chips__item--text">Music</div>
              </div>
              <div data-aos="fade-left" className="chips__item">
                <svg
                  className="chips__item--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.3 16.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2l1.4-1.4l-3.2-3.2zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zM12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8z"
                    fill="#626262"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="chips__item--text">Travel</div>
              </div>
              <div data-aos="fade-left" className="chips__item">
                <svg
                  className="chips__item--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 10a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2zm-1.15 8.47a1 1 0 0 0-1.7 0l-1 1.63l-3.29-5.6a1 1 0 0 0-1.72 0l-7 12A1 1 0 0 0 3 22h18a1 1 0 0 0 .85-1.53zM10.45 20H4.74L10 11l2.94 5l-1.25 2zm2.35 0l1.49-2.37l.71-1.06l1-1.68L19.2 20z"
                    fill="#626262"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="chips__item--text">Mountains</div>
              </div>
              <div data-aos="fade-left" className="chips__item">
                <svg
                  className="chips__item--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="0.82em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 416 512"
                >
                  <path
                    d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48s21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52l-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37l-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17l-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09c3.19 1 6.41 1.48 9.58 1.48c13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14l31.31-78.28l20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"
                    fill="#626262"
                  />
                  <rect
                    x="0"
                    y="0"
                    width="416"
                    height="512"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
                <div className="chips__item--text">Running</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
