import React from "react";
import { ArrowUpRight, Terminal, Layout, Share2, Rocket } from "lucide-react";

/**
 * Vaporwave / Outrun Portfolio Component
 * Aesthetic: 80s Retro-futurism, Neon Grids, Terminal Windows
 * Palette: Cyan, Blue, Purple (Mindbridge Theme)
 */

const PROJECTS = [
  {
    id: 1,
    name: "Prajapati Enterprises",
    host: "prajapatienterprises.in",
    desc: "A business presence website focused on credibility, clear service messaging, and enquiry-first user journeys.",
    url: "https://prajapatienterprises.in/",
    icon: Rocket,
    tone: "cyan",
  },
  {
    id: 2,
    name: "Risevo",
    host: "risevo.in",
    desc: "A brand-first site with bold visuals and a clean layout to communicate services and capture leads.",
    url: "https://www.risevo.in/",
    icon: Layout,
    tone: "purple",
  },
  {
    id: 3,
    name: "Creator The Advertising",
    host: "creatortheadvertising.in",
    desc: "A brand-forward website designed to highlight offerings, showcase trust signals, and drive enquiries efficiently.",
    url: "https://www.creatortheadvertising.in/",
    icon: Share2,
    tone: "blue",
  },
  {
    id: 4,
    name: "Ryaan Signage",
    host: "ryaansignages.vercel.app",
    desc: "Premium signage solutions featuring high-end visual identities, neon displays, and architectural branding.",
    url: "https://ryaansignages.vercel.app/",
    icon: Terminal,
    tone: "cyan",
  },
];

const COLORS = {
  cyan: "#22d3ee",
  blue: "#60a5fa",
  purple: "#a855f7",
};

function TerminalWindow({ children, title, tone = "cyan" }) {
  const accent = COLORS[tone];
  
  return (
    <div className="group relative">
      {/* Perspective Glow Shadow */}
      <div 
        className="absolute -inset-1 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40" 
        style={{ backgroundColor: accent }}
      />
      
      {/* Terminal Container */}
      <div className="relative border-2 border-white/10 bg-black/80 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2"
        style={{ borderTopColor: accent }}
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 bg-white/5">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/80" />
            <div className="h-2 w-2 rounded-full bg-amber-500/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
            {title}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

function VaporBtn({ to, tone = "cyan", children }) {
  const accent = COLORS[tone];
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="relative -skew-x-12 transform border-2 px-5 py-2 transition-all hover:skew-x-0 group"
      style={{ borderColor: accent, color: accent }}
    >
      <div className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-cyan-400 group-hover:text-black" 
        style={{ backgroundColor: `${accent}00` }}
      />
      <span className="relative inline-block skew-x-12 transform font-mono text-[10px] font-black uppercase tracking-widest group-hover:skew-x-0 group-hover:text-black">
        {children}
      </span>
    </a>
  );
}

export default function PortfolioSection() {
  return (
    <section className="relative bg-[#050508] py-24 px-4 sm:px-8 font-mono">
      {/* Global Style Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        
        .grid-perspective {
          perspective: 1000px;
        }
        
        .grid-floor {
          background-image: 
            linear-gradient(transparent 95%, rgba(168, 85, 247, 0.2) 95%), 
            linear-gradient(90deg, transparent 95%, rgba(34, 211, 238, 0.2) 95%);
          background-size: 50px 50px;
          transform: rotateX(60deg);
          transform-origin: top center;
        }

        .heading-glow {
          text-shadow: 0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(168, 85, 247, 0.3);
        }
      `}</style>

      {/* Retro Grid Background */}
      <div className="pointer-events-none absolute inset-0 grid-perspective">
        <div className="absolute inset-0 grid-floor h-[200%] top-[-50%]" />
        
        {/* Massive Neon Sun Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#f472b6]/10 to-[#a855f7]/0 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Vaporwave Header */}
        <div className="mb-20 text-center">
          <div className="inline-block border-2 border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-300">
            {">"} CLIENT SUCCESS // ARCHIVE
          </div>
          
          <h2 className="heading-glow font-['Orbitron'] text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tighter text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              View Our
            </span>
            <span className="block">Work</span>
          </h2>
          
          <p className="mt-8 mx-auto max-w-2xl text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 leading-loose">
            Selected projects delivered with precision. // High-performance builds for ambitious teams.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            const accent = COLORS[project.tone];
            
            return (
              <TerminalWindow key={project.id} title={project.host} tone={project.tone}>
                <div className="p-6">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-white/5 bg-white/5"
                    style={{ color: accent }}
                  >
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="mb-3 font-['Orbitron'] text-xl font-bold uppercase tracking-wide text-white"
                    style={{ textShadow: `0 0 10px ${accent}44` }}
                  >
                    {project.name}
                  </h3>
                  
                  <p className="mb-8 text-[11px] leading-relaxed text-white/50 uppercase tracking-wider">
                    {project.desc}
                  </p>
                  
                  <VaporBtn to={project.url} tone={project.tone}>
                    Access Link
                  </VaporBtn>
                </div>
              </TerminalWindow>
            );
          })}
        </div>

        {/* Footer HUD line */}
        <div className="mt-24 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <div className="flex gap-8">
            <span>LOC: RAIPUR_HQ</span>
            <span>OS: MINDBRIDGE_v2.0</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL_SYSTEMS_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </section>
  );
}