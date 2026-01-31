// src/Components/Gallery.jsx
import { RevealOnScroll } from "./Reveal.jsx";

function GallerySection() {
  return (
    <section
      id="gallery"
      className="snap-start h-screen flex items-center border-t border-slate-800"
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <RevealOnScroll className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Visual Scroll Journey
          </h2>
          <p className="text-slate-300">
            Is section me tum apne real screenshots / illustrations daal sakte
            ho jo dikhaye ki scroll ke saath kya effect milta hai.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative w-full max-w-lg mx-auto aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-fuchsia-500/25" />
            <div className="absolute inset-6 rounded-2xl border border-slate-700/80 bg-slate-950/80" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default GallerySection;