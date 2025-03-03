import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.utils.toArray("section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="app-container">
      <Cursor />
      <Navbar />
      <section id="Homepage" className="full-screen">
        <Hero />
      </section>
      <section id="Services" className="full-screen">
        <Parallax type="services" />
      </section>
      <section className="full-screen">
        <Services />
      </section>
      <section id="Portfolio" className="full-screen">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact" className="full-screen">
        <Contact />
      </section>
    </div>
  );
};

export default App;
