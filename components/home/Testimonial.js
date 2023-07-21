export default function Testimonial({ client }) {
  const { image, name, country, review, countryFlag } = client;
  return (
    <div data-aos="zoom-in" className="testimonials__card">
      <div className="testimonials__user">
        <div className="testimonials__img-wrapper">
          {image.src ? (
            <img src={image.src} alt={name} className="testimonials__img" />
          ) : (
            <span
              className="testimonials__no-img"
              style={{
                backgroundColor:
                  "#" +
                  Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            >
              {name.substring(0, 1)}
            </span>
          )}
        </div>
        <div className="testimonials__info">
          <div className="testimonials__username paragraph--large">{name}</div>
          <div className="testimonials__country">
            <img
              className="testimonials__country-flag"
              src={countryFlag.src}
              alt={country}
            ></img>
            <div className="testimonials__country-name paragraph--small">
              {country}
            </div>
          </div>
        </div>
      </div>
      <blockquote className="testimonials__review paragraph--small">
        &quot;
        {review.length > 133
          ? review.lastIndexOf(" ", 133) !== -1
            ? review.substring(0, review.lastIndexOf(" ", 132)) + "..."
            : review.substring(0, 133) + "..."
          : review}
        &quot;
      </blockquote>
      <div className="testimonials__rating">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFB33E"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5.813c0 .17-.125.33-.25.454l-3.49 3.345.826 4.726c.01.067.01.123.01.19 0 .245-.115.472-.394.472a.792.792 0 0 1-.385-.113L8 12.656l-4.317 2.23a.823.823 0 0 1-.385.114c-.279 0-.404-.227-.404-.473 0-.066.01-.122.02-.189l.826-4.726-3.5-3.345C.125 6.144 0 5.983 0 5.813c0-.284.298-.397.538-.435l4.827-.69L7.53.388C7.615.208 7.779 0 8 0c.221 0 .385.208.471.388l2.164 4.3 4.826.69c.231.038.539.151.539.435Z"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFB33E"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5.813c0 .17-.125.33-.25.454l-3.49 3.345.826 4.726c.01.067.01.123.01.19 0 .245-.115.472-.394.472a.792.792 0 0 1-.385-.113L8 12.656l-4.317 2.23a.823.823 0 0 1-.385.114c-.279 0-.404-.227-.404-.473 0-.066.01-.122.02-.189l.826-4.726-3.5-3.345C.125 6.144 0 5.983 0 5.813c0-.284.298-.397.538-.435l4.827-.69L7.53.388C7.615.208 7.779 0 8 0c.221 0 .385.208.471.388l2.164 4.3 4.826.69c.231.038.539.151.539.435Z"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFB33E"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5.813c0 .17-.125.33-.25.454l-3.49 3.345.826 4.726c.01.067.01.123.01.19 0 .245-.115.472-.394.472a.792.792 0 0 1-.385-.113L8 12.656l-4.317 2.23a.823.823 0 0 1-.385.114c-.279 0-.404-.227-.404-.473 0-.066.01-.122.02-.189l.826-4.726-3.5-3.345C.125 6.144 0 5.983 0 5.813c0-.284.298-.397.538-.435l4.827-.69L7.53.388C7.615.208 7.779 0 8 0c.221 0 .385.208.471.388l2.164 4.3 4.826.69c.231.038.539.151.539.435Z"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFB33E"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5.813c0 .17-.125.33-.25.454l-3.49 3.345.826 4.726c.01.067.01.123.01.19 0 .245-.115.472-.394.472a.792.792 0 0 1-.385-.113L8 12.656l-4.317 2.23a.823.823 0 0 1-.385.114c-.279 0-.404-.227-.404-.473 0-.066.01-.122.02-.189l.826-4.726-3.5-3.345C.125 6.144 0 5.983 0 5.813c0-.284.298-.397.538-.435l4.827-.69L7.53.388C7.615.208 7.779 0 8 0c.221 0 .385.208.471.388l2.164 4.3 4.826.69c.231.038.539.151.539.435Z"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 15"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFB33E"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5.813c0 .17-.125.33-.25.454l-3.49 3.345.826 4.726c.01.067.01.123.01.19 0 .245-.115.472-.394.472a.792.792 0 0 1-.385-.113L8 12.656l-4.317 2.23a.823.823 0 0 1-.385.114c-.279 0-.404-.227-.404-.473 0-.066.01-.122.02-.189l.826-4.726-3.5-3.345C.125 6.144 0 5.983 0 5.813c0-.284.298-.397.538-.435l4.827-.69L7.53.388C7.615.208 7.779 0 8 0c.221 0 .385.208.471.388l2.164 4.3 4.826.69c.231.038.539.151.539.435Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
