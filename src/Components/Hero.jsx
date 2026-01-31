// src/components/Hero.jsx
import React from "react";
import video from "../Components/Images/3.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="home">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      {/* Content area */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* yaha Hero ka text / button / etc */}
      </div>
    </section>
  );
};

export default Hero;