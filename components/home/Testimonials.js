/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

import Testimonial from "./Testimonial";
import previous from "../../public/svg/previous.svg";
import next from "../../public/svg/nextIcon.svg";
import infoIcon from "../../public/svg/infoIcon.svg";

// user profile images
import bachir952 from "../../public/img/bachir952.jpg";
import alexandrusan184 from "../../public/img/alexandrusan184.jpg";
import bajcoropo from "../../public/img/bajcoropo.jpg";
import bobbyflayv5 from "../../public/img/bobbyflayv5.jpg";
import bridami from "../../public/img/bridami.jpg";
import davskills from "../../public/img/davskills.jpg";
import dawodnasr from "../../public/img/dawodnasr.jpg";
import dominiknxt from "../../public/img/dominiknxt.jpg";
import drkim226 from "../../public/img/drkim226.jpg";
import enzoradice from "../../public/img/enzoradice.jpg";
import estebansaave831 from "../../public/img/estebansaave831.jpg";
import jurczyk from "../../public/img/jurczyk.jpg";
import leoiciano from "../../public/img/leoiciano.jpg";
import matteovocale from "../../public/img/matteovocale.jpg";
import nyrahsaleem from "../../public/img/nyrahsaleem.jpg";
import omarnmk from "../../public/img/omarnmk.jpg";
import sarmadnadeemlhr from "../../public/img/sarmadnadeemlhr.jpg";
import sheigenjonsi772 from "../../public/img/sheigenjonsi772.jpg";
import surjansardjoe from "../../public/img/surjansardjoe.jpg";
import tylerjoseph938 from "../../public/img/tylerjoseph938.webp";
import zulqarnain512 from "../../public/img/zulqarnain512.jpg";

// Flags
import usaFlag from "../../public/svg/usa.svg";
import moroccoFlag from "../../public/svg/moroccoFlag.svg";
import romaniaFlag from "../../public/svg/romaniaFlag.svg";
import pkFlag from "../../public/svg/pkFlag.svg";
import ukFlag from "../../public/svg/ukFlag.svg";
import uaeFlag from "../../public/svg/uaeFlag.svg";
import netherlandsFlag from "../../public/svg/netherlandsFlag.svg";
import switzerlandFlag from "../../public/svg/switzerlandFlag.svg";
import chileFlag from "../../public/svg/chileFlag.svg";
import germanyFlag from "../../public/svg/germanyFlag.svg";
import italyFlag from "../../public/svg/italyFlag.svg";
import mexicoFlag from "../../public/svg/mexicoFlag.svg";
import spainFlag from "../../public/svg/spainFlag.svg";
import nigeriaFlag from "../../public/svg/nigeriaFlag.svg";
import saFlag from "../../public/svg/saFlag.svg";
import irelandFlag from "../../public/svg/irelandFlag.svg";
import indiaFlag from "../../public/svg/indiaFlag.svg";
import malaysiaFlag from "../../public/svg/malaysiaFlag.svg";

// Import Swiper React components
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

const clients = [
  {
    image: bridami,
    name: "Bridami",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Perfect !!!! I asked for a customization that I didn’t think was possible and they did it perfectly. Highly recommended :-)",
  },
  {
    image: bachir952,
    name: "Bachir952",
    country: "Morocco",
    countryFlag: moroccoFlag,
    review:
      "if you work with ilyas you'll most certainly come back again, good communication and fast and effecient delivery.",
  },
  {
    image: alexandrusan184,
    name: "Alexandrusan184",
    country: "Romania",
    countryFlag: romaniaFlag,
    review:
      "One of the best programmers from Fiverr. He gets the job done no matter the difficulty. I will definitely work with him again.",
  },
  {
    image: tylerjoseph938,
    name: "Tylerjoseph938",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Did what I wanted even though I am very meticulous, he is very fast when he works. I recommend for anyone wanting the job done right.",
  },
  {
    image: bajcoropo,
    name: "bajcoropo",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "I never seen a coder like him the best tou can have on the market 👍",
  },
  {
    image: bobbyflayv5,
    name: "Bobbyflayv5",
    country: "United States",
    countryFlag: usaFlag,
    review: "very professional,a rising star. Always god working with ilyas",
  },
  {
    image: davskills,
    name: "Davskills",
    country: "United Kingdom",
    countryFlag: ukFlag,
    review: "Fast and great service, will definitely use in the future",
  },
  {
    image: dawodnasr,
    name: "Dawodnasr",
    country: "Saudi Arabia",
    countryFlag: uaeFlag,
    review: "perfect and on time",
  },
  {
    image: dominiknxt,
    name: "Dominiknxt",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "Working with Ilyas was a dream! He understood everything immediately and delivered in a timely manner. I highly recommend him and will consider him for more projects in the future.",
  },
  {
    image: drkim226,
    name: "Drkim226",
    country: "United States",
    countryFlag: usaFlag,
    review: "This guy is really good, Recommend. A+++++",
  },
  {
    image: enzoradice,
    name: "Enzoradice",
    country: "Italy",
    countryFlag: italyFlag,
    review:
      "Third consecutive order with him and as always everything's top notch. Thank you so much!",
  },
  {
    image: estebansaave831,
    name: "Estebansaave831",
    country: "Chile",
    countryFlag: chileFlag,
    review:
      "I want to thank you for your work you delivered exactly what I wanted and even more than I expected. You're a trustworthy person with great communications skills and a super friendly person, I'm glad to meet you here you explained step by step how everything works. if you have a project in mind don't hesitate to reach him. I'll reach you again for the upcoming project thanks again! =) Greetings from Chile!",
  },
  {
    image: jurczyk,
    name: "Jurczyk",
    country: "United States",
    countryFlag: usaFlag,
    review: "Great service and fast delivery!!!",
  },
  {
    image: leoiciano,
    name: "Leoiciano",
    country: "United States",
    countryFlag: usaFlag,
    review: "Amazing job and very detailed!",
  },
  {
    image: matteovocale,
    name: "Matteovocale",
    country: "Switzerland",
    countryFlag: switzerlandFlag,
    review:
      "What can I say?? He is very professional, he has patience to listen to customers to find the solution, prices are honest and delivery very fast. Thank you very much!",
  },
  {
    image: nyrahsaleem,
    name: "Nyrahsaleem",
    country: "United Kingdom",
    countryFlag: ukFlag,
    review: "Excellent work",
  },
  {
    image: omarnmk,
    name: "Omarnmk",
    country: "Saudi Arabia",
    countryFlag: uaeFlag,
    review:
      "To be honest, At first I was very worried to request for service from Ilyas due to not having much reviews in Fiverr. But the moment I contacted him, I felt how knowledgeable he is. He solved my problem in no time and also went all the way to explain the issue to me and to teach me how he solved it with all the tools he has in hand. Believe me, you will never regret to choose working with him. I highly recommend him and I will never look anywhere else if I need another help with Shopify 👍",
  },
  {
    image: sarmadnadeemlhr,
    name: "Sarmadnadeemlhr",
    country: "Pakistan",
    countryFlag: pkFlag,
    review:
      "Ilyas is really the best problem solver over here on fiverr. He took on a challenging project and did not rest until each and every bug in the task was resolved. His work quality and availability for communication was beyond amazing! If you are not hiring this guy, it's your loss!",
  },
  {
    image: sheigenjonsi772,
    name: "Sheigenjonsi772",
    country: "United Kingdom",
    countryFlag: ukFlag,
    review: "awesome guy, keeps you updated.",
  },
  {
    image: surjansardjoe,
    name: "Surjansardjoe",
    country: "Netherlands",
    countryFlag: netherlandsFlag,
    review:
      "Fast reliable good and extremely helpful! Can't ask for anything more from this seller! Will definitely order more services for coding for my shopify store!",
  },
  {
    image: zulqarnain512,
    name: "Zulqarnain512",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "good communication. before time delivery. delivered what I was looking for. Highly recommended. I would like to work with him again.",
  },
  {
    image: "",
    name: "Jayoonyi",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Excellent delivery, very responsive, timely and amazing communication. Will definitely use his service again.",
  },
  {
    image: "",
    name: "Allinoneplace24",
    country: "Germany",
    countryFlag: germanyFlag,
    review: "Very fast and good work! Can recommend this seller",
  },
  {
    image: "",
    name: "Dustin_911",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "Always a pleasure to work with Ilyas! He understands his work very well!",
  },
  {
    image: "",
    name: "fenixios",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Definitely recommended! Very professional and on time with his deadlines.",
  },
  {
    image: "",
    name: "Bubsbarks",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Amazing customer service, very fast delivery. Highly recommended for any service you need!",
  },
  {
    image: "",
    name: "Berisdoglod",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "I had a lot of special wishes and he could everything even better than expected! I am so happy to have found him. Other people on fiverr couldnt help me. Furthermore the communication is as great as his work. Couldnt imagine a better service!",
  },
  {
    image: "",
    name: "Charlesmex13",
    country: "Mexico",
    countryFlag: mexicoFlag,
    review:
      "Best freelancer I have ever worked with. You can tell that customer satisfaction is very important to him. He understands everything super fast and is super responsive. Great experience!",
  },
  {
    image: "",
    name: "Llyona1",
    country: "Germany",
    countryFlag: germanyFlag,
    review: "My wishes were implemented very well.",
  },
  {
    image: "",
    name: "Cristian9000",
    country: "Spain",
    countryFlag: spainFlag,
    review: "Todo perfecto un gran trabajo",
  },
  {
    image: "",
    name: "Kingsteven7",
    country: "Nigeria",
    countryFlag: nigeriaFlag,
    review: "Believe me when I say he will exceed your expectations",
  },
  {
    image: "",
    name: "Bepano",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "Our experience with Ilyas: We had numerous projects realized on Fiverr in the past. However, working with Ilais is something completely different. We have never had such a highly competent, professional and reliable partner. In addition to his technical expertise, Ilyas offers absolutely great customer communication. He implements projects almost faster than we can write the briefing. The quality of his work is exceptional. In summary, he can be described as Highly Professional. We have good comparisons and are absolutely thrilled with Ilyas. We look forward to many more projects with him. Thank you for everything Ilyas and keep up the good work! :) Many greetings from Germany",
  },
  {
    image: "",
    name: "Codesmictech",
    country: "United Kingdom",
    countryFlag: ukFlag,
    review:
      "Amazing developer with a really good quality work and patience. Ran me through the whole process to upload the changes. Looking forward to order again.",
  },
  {
    image: "",
    name: "Riem630",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Excellent, excellent work. Went above and beyond what he needed to do. Highly recommend and will definitely be using him again",
  },
  {
    image: "",
    name: "Lariontos",
    country: "Italy",
    countryFlag: italyFlag,
    review:
      "Competent guy. Ask him if you have something to fix or customize on Shopify. Fast, reliable, and good communication. He has also done a call to explain to me how to code. Awesome.",
  },
  {
    image: "",
    name: "Eddie49284",
    country: "Romania",
    countryFlag: romaniaFlag,
    review:
      "This man will go above & beyond to make sure that you're satisfied in the end. I've been hiring developers from Fiverr for a few years but Ilyas stands out for sure.",
  },
  {
    image: "",
    name: "Krisstoffcampbe",
    country: "United States",
    countryFlag: usaFlag,
    review: "Amazing seller. Highly recommended",
  },
  {
    image: "",
    name: "Lamzogamer",
    country: "United States",
    countryFlag: usaFlag,
    review: "thank you so much for the great work. fast delivery",
  },
  {
    image: "",
    name: "Marketinglg1",
    country: "South Africa",
    countryFlag: saFlag,
    review: "Very Good at what he does. Will definitely recommend him",
  },
  {
    image: "",
    name: "Ibo2323",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "Ilya understood everything immediately, I really asked a lot as I think, but his implementation was PERFECT! He has even done small extra things that do not belong to his work. I AM STUNNED WITH THE RESULT !",
  },
  {
    image: "",
    name: "Vidjourno",
    country: "Ireland",
    countryFlag: irelandFlag,
    review:
      "My experience with this seller began with impressively prompt, clear communication and only got better. I needed some additional, bespoke coding for a Shopify theme in order to make the images work better on mobile devices. The seller integrated a seamless new function within my theme customizer that allows me to upload separate images for desktop and mobile, with all the controls I need to adjust how the images display. 'Under the hood' in my theme customizer, his work sits perfectly alongside the other controls designed by Shopify. Excellent to deal with, work delivered above my expectations and on schedule.",
  },
  {
    image: "",
    name: "Mattlomax",
    country: "United Kingdom",
    countryFlag: ukFlag,
    review:
      "Only man I trust to do difficult coding on my website. Easily the best and quickest on here at what he does!",
  },
  {
    image: "",
    name: "Babyjackbyrd",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "Han did a great job of getting this job finished quickly. We had one revision needed and he did so quickly. Thank you!",
  },
  {
    image: "",
    name: "Ilyaasdocrat",
    country: "South Africa",
    countryFlag: saFlag,
    review:
      "Ilyas is very good at communication. Will definitely use him again.",
  },
  {
    image: "",
    name: "Kj2032",
    country: "India",
    countryFlag: indiaFlag,
    review: "Very responsive. Coded exactly what i asked for.",
  },
  {
    image: "",
    name: "Logoschub",
    country: "Germany",
    countryFlag: germanyFlag,
    review:
      "Excellent service, great communication. All details were even overdelivered with additional features. 100% recommended.",
  },
  {
    image: "",
    name: "Luqman107",
    country: "Malaysia",
    countryFlag: malaysiaFlag,
    review: "Prompt delivery and quality work.",
  },
  {
    image: "",
    name: "Hooli1",
    country: "United States",
    countryFlag: usaFlag,
    review:
      "VERYY diligent and talented guy, he’s very knowledgeable at what he does and did exactly what I asked for time and time again. I can truly say he is amongst one of the best I have come across on Fiverr and will DEFINITELY be back again. Thank you so much!",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: {
        el: ".testimonials__pagination",
        clickable: true,
        type: "fraction",
      },
      navigation: {
        nextEl: ".testimonials__next",
        prevEl: ".testimonials__prev",
      },
      centerInsufficientSlides: true,
      grabCursor: true,
      spaceBetween: 30,
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__content">
          <div
            data-aos="fade-up"
            className="testimonials__title heading--primary"
          >
            Over 90+ Happy clients&#39;
          </div>
          <swiper-container init="false" ref={swiperRef}>
            {clients.map((client, index) => (
              <swiper-slide key={index} class="testimonials__slide">
                <Testimonial client={client} />
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="testimonials__controls">
            <img
              src={previous.src}
              className="swiper-button-prev testimonials__prev"
              alt="previous"
            />
            <div className="testimonials__pagination paragraph--small" />
            <img
              src={next.src}
              className="swiper-button-next testimonials__next"
              alt="next"
            />
          </div>
        </div>

        <div className="testimonials__evidence">
          <div className="testimonials__note">
            <img alt="Information about testimonials" src={infoIcon.src} className="testimonials__note-icon" />
            <span className="testimonials__note-text paragraph--normal">
              All the testimonials are quoted straight from my Fiverr profile.
              Feel free to check out my Fiverr profile here:
            </span>
          </div>
          <a
            href="https://www.fiverr.com/therealilyask/"
            target="_blank"
            rel="noreferrer"
            className="testimonials__btn btn btn--sm btn--outline btn--dark"
          >
            <span className="btn--text">Reviews Source</span>
            <svg
              className="btn--icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
