// src/App.jsx
import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero.jsx";
import Nav from "./Components/Nav.jsx";
import Features from "./Components/Features.jsx";
import ufo from "./Components/Images/m.png";
import Lenis from "@studio-freight/lenis";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import PortfolioSection from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Lenis smooth scroll init
    const lenis = new Lenis({
      duration: 1.1,      // scroll ka smoothness (1–1.5 behtareen)
      easing: (t) => 1 - Math.pow(1 - t, 3), // smooth cubic easing
      smoothWheel: true,
      smoothTouch: false, // mobile pe normal rehne do
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mouse move for UFO cursor
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <PortfolioSection />
      <About />
      <Contact />
      <Footer />


      {/* Global UFO cursor */}
<div className="pointer-events-none fixed inset-0 z-[9999]">
  <img
    src={ufo}
    alt="UFO cursor"
    style={{
      left: `${cursorPos.x}px`,
      top: `${cursorPos.y}px`,
      transform: "translate(-50%, -50%)",
    }}
    className="
      absolute
      w-10 h-10
      md:w-12 md:h-12
      lg:w-14 lg:h-14
      drop-shadow-xl
      transition-transform
      duration-75
      ease-out
    "
  />
</div>

    </>
  );
}

export default App;