import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Topbar from "./_components/Topbar";
import { Spacing } from "./_components/Spacing";
import About from "./_components/About";
import WhyUs from "./_components/WhyUs";
import Menu from "./_components/Menu";
import Specials from "./_components/Specials";
import Events from "./_components/Events";
import Testimonial from "./_components/Testimonials";
import Gallery from "./_components/Gallery";
import Chefs from "./_components/Chefs";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url("../img/hero-bg.jpg")' }}
      >
        <Topbar />

        <Header />
        <Spacing size="lg" />
        <Hero />
      </section>
      <About />
      <WhyUs />
      <Menu />
      <Specials />
      <Events />
      <Spacing size="sm" />
      <Testimonial />
      <Gallery />
      <Chefs />
      <Contact />
      <Footer />
    </main>
  );
}
