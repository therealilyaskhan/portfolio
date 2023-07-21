/* eslint-disable @next/next/no-img-element */
import whatsapp from '../../public/svg/whatsapp.svg';
import email from '../../public/svg/email.svg';
import ContactForm from '../ContactForm';

export default function Contact() {

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__discr">
            <h1 data-aos="fade-up" className="contact__discr--title heading--primary">
              Get in touch
            </h1>
            <div
              data-aos="fade-up"
              className="contact__discr--description paragraph--normal"
            >
              Do you have a project on your mind? Do you want to make your
              business grow or look awesome? Contact me and I&#39;ll help you to bring
              your ideas to life
            </div>
            <ul className="contact__discr--list">
              <li data-aos="fade-up" className="contact__discr--list-item">
                <img
                  className="contact__discr--list-icon"
                  src={whatsapp.src}
                  alt='whatsapp'
                />
                <div className="contact__discr--list-text paragraph--normal">
                  +923435296396
                </div>
              </li>
              <li data-aos="fade-up" className="contact__discr--list-item">
                <img
                  className="contact__discr--list-icon"
                  src={email.src}
                  alt='gmail'
                />
                <div className="contact__discr--list-text paragraph--normal">
                  therealilyaskhan@gmail.com
                </div>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section >
  );
}