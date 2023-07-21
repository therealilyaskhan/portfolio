import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import '../styles/scss/main.scss';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'load', // name of the event dispatched on the document, that AOS should initialize on

      //this startEvent according to the docs of the aos library is an option which is used to specify the: Name of the document event, on which AOS should be initialized;

      //Which basically means when the init function should be run, the value for the startEvent option was previously set to "DOMContentLoaded" event due to which on initial load the screen appeared blank that was because the DOMContentLoaded event fires when the initial HTML bare document has been completely loaded without waiting for any styles or scripts. so the DOMContentLoaded event fires before any scripts or styles are run by the browser, since the AOS.init() function is useless before the import AOS from 'aos' is loaded and run by the browser because then what the AOS.init() would make a call to  ? the init function lies inside the aos.js library and the AOS.init() is invoked upon DOMContentLoaded event and at that point no scripts or libraries are run so it's useless. 

      //this startEvent after being changed to 'load' the AOS library works perfectly fine as the DOCS says:

      //The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.

      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 140, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    AOS.refresh();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
