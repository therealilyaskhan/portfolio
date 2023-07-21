/* eslint-disable @next/next/no-img-element */
import ninja from '../../public/svg/ninja.svg';
import liquid from '../../public/svg/liquid.svg';
import mui from '../../public/svg/mui.svg';
import redux from '../../public/svg/redux.svg';
import sass from '../../public/svg/sass.svg';
import bootstrap from '../../public/svg/bootstrap.svg';
import npm from '../../public/svg/npm.svg';
import github from '../../public/svg/github.svg';
import next from '../../public/svg/next.svg';
import react from '../../public/svg/react.svg';
import html from '../../public/svg/html.svg';
import css from '../../public/svg/css.svg';
import javascript from '../../public/svg/javascript.svg';


export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__content">
          <div data-aos="fade-up" className="skills__title">
            <img
              className="skills__title--icon"
              src={ninja.src}
              alt="skills"
            />
            <div className="skills__title--heading heading--primary">
              I&#39;m Ninja at
            </div>
          </div>
          <div className="skills__cards">
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={html.src}
                alt="html"
              />
              <div className="skills__card--title">html</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={css.src}
                alt="css"
              />
              <div className="skills__card--title">css</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={javascript.src}
                alt="javascript"
              />
              <div className="skills__card--title">javascript</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={react.src}
                alt="reactjs"
              />
              <div className="skills__card--title">reactjs</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={next.src}
                alt="nextjs"
              />
              <div className="skills__card--title">nextjs</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={mui.src}
                alt="Material-ui"
              />
              <div className="skills__card--title">materialui</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={redux.src}
                alt="redux"
              />
              <div className="skills__card--title">redux</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={liquid.src}
                alt="liquid"
              />
              <div className="skills__card--title">liquid</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={sass.src}
                alt="sass"
              />
              <div className="skills__card--title">sass</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={github.src}
                alt="github"
              />
              <div className="skills__card--title">github</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={bootstrap.src}
                alt="bootstrap"
              />
              <div className="skills__card--title">bootstrap</div>
            </div>
            <div data-aos="fade-up" className="skills__card">
              <img
                className="skills__card--icon"
                src={npm.src}
                alt="npm"
              />
              <div className="skills__card--title">npm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
