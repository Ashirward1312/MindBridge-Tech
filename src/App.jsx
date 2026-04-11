import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero.jsx";
import Nav from "./Components/Nav.jsx";
import Features from "./Components/Features.jsx";
import ufo from "./Components/Images/m.png";
import Lenis from "@studio-freight/lenis";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import PortfolioSection from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import Mission from "./Components/Mission.jsx";
import Vision from "./Components/Vission.jsx";
import FAQ from "./Components/FAQ.jsx";
import WhatsAppFloating from "./Components/WhatsAppFloating.jsx";
import { useLocation } from "react-router-dom";

function ScrollToTop({ lenis }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }
  }, [pathname, lenis]);

  return null;
}

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    // Lenis smooth scroll init
    const lenis = new Lenis({
      duration: 1.1,      
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smoothWheel: true,
      smoothTouch: false, 
    });

    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    // Mouse move for UFO cursor
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop lenis={lenisInstance} />
      <Nav />
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Mission />
                <Vision />
                <FAQ />
              </>
            }
          />
          <Route path="/services" element={<Features />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloating />


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