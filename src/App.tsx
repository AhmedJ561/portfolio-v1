import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsVisualization from "./components/SkillVisualization";

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const checkSlide = () => {
      sections.forEach((section) => {
        const triggerPoint = window.scrollY + window.innerHeight * 0.85;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        const isVisible =
          triggerPoint > sectionTop && window.scrollY < sectionBottom;

        // Add "active" and "slide-in-from-right" when visible, but don't remove them after
        if (isVisible) {
          section.classList.add("active", "slide-in-from-right");
        } else if (!section.classList.contains("active")) {
          section.classList.remove("slide-in-from-right");
        }
      });
    };

    window.addEventListener("scroll", checkSlide);
    checkSlide(); // Initial check on page load

    return () => {
      window.removeEventListener("scroll", checkSlide);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="top-0 w-full pt-16 scroll-smooth">
        {/* Home Section */}
        <section id="home" className="w-full p-8 section-scroll-animation">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="p-8 section-scroll-animation">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="p-8 section-scroll-animation">
          <SkillsVisualization />
        </section>

        {/* Services Section */}
        <section id="services" className="p-8 ">
          <Services />
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-8 section-scroll-animation">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-8 section-scroll-animation">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
