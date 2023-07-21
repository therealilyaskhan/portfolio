import Head from 'next/head';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Features from '../components/home/Features';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
// import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import Skills from '../components/home/Skills';
import Navbar from '../components/navigation/Navbar';
import ResponsiveNavbar from '../components/navigation/ResponsiveNavbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muhammad Ilyas</title>
        <meta name="keywords" content="React.js ReactJS React JS front-end frontend developer redux material ui material-ui materialUI Next next.js next js JavaScript HTML CSS" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Header />
      <ResponsiveNavbar />
      <Navbar />
      <Features />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
}
