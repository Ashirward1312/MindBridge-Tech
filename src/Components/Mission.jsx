import React from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Compass,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
  Terminal,
} from "lucide-react";

const missionPillars = [
  {
    title: "Strategic Clarity",
    copy: "Every product decision starts with outcomes, not guesswork. We align roadmap, UI, and architecture to business goals.",
    icon: Compass,
  },
  {
    title: "Fast Execution",
    copy: "We ship in focused iterations with clean code, measurable progress, and transparent communication across the timeline.",
    icon: Rocket,
  },
  {
    title: "Reliable Engineering",
    copy: "Performance, security, and scalability are built in from day one so your product stays stable as it grows.",
    icon: ShieldCheck,
  },
];

const missionSignals = [
  "99.9% uptime mindset across delivery",
  "Design systems that feel premium and consistent",
  "Automation-first approach for speed and quality",
  "Growth-ready stacks for long-term scaling",
];

function ChamferCard({ className = "", children }) {
  return (
    <div
      className={[
        "relative border border-cyan-400/20 bg-gradient-to-b from-slate-950/70 to-black/70",
        "shadow-[0_0_28px_rgba(34,211,238,0.12)]",
        "transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_34px_rgba(34,211,238,0.22)]",
        "overflow-hidden",
        className,
      ].join(" ")}
      style={{
        clipPath:
          "polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px))",
      }}
    >
      {/* corner ticks */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-0 top-0 h-10 w-10 border-l border-t border-cyan-400/30" />
        <div className="absolute right-0 top-0 h-10 w-10 border-r border-t border-purple-400/30" />
        <div className="absolute left-0 bottom-0 h-10 w-10 border-l border-b border-blue-400/30" />
        <div className="absolute right-0 bottom-0 h-10 w-10 border-r border-b border-cyan-400/30" />
      </div>

      {children}
    </div>
  );
}

function NeonButton({ to, variant = "primary", children }) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.28em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const clip = {
    clipPath:
      "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
  };

  const primary =
    "border border-cyan-300/60 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-400/15 hover:border-cyan-200 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]";
  const secondary =
    "border border-white/15 bg-white/5 text-slate-200 hover:border-cyan-200/40 hover:text-cyan-100 hover:bg-white/7";

  return (
    <NavLink
      to={to}
      style={clip}
      className={[base, variant === "primary" ? primary : secondary].join(" ")}
    >
      {children}
    </NavLink>
  );
}

export default function Mission() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Embedded cyber CSS (glitch + scanlines + noise). Keeps bundle simple. */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .glitch, .scanline, .noise { animation: none !important; }
          .cursor { animation: none !important; opacity: 1 !important; }
        }

        .scanlines::after{
          content:"";
          position:absolute; inset:0;
          pointer-events:none;
          background: repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.00),
            rgba(255,255,255,0.00) 2px,
            rgba(0,0,0,0.25) 2px,
            rgba(0,0,0,0.25) 4px
          );
          opacity:.22;
          mix-blend-mode: overlay;
        }

        .noise::before{
          content:"";
          position:absolute; inset:-20%;
          pointer-events:none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
          opacity:.10;
          transform: rotate(2deg);
          mix-blend-mode: overlay;
        }

        .glitch{
          position:relative;
          text-shadow: -2px 0 rgba(255,0,255,.55), 2px 0 rgba(0,212,255,.55);
          filter: drop-shadow(0 0 18px rgba(34,211,238,.18));
        }
        .glitch::before,
        .glitch::after{
          content: attr(data-text);
          position:absolute;
          left:0; top:0;
          width:100%;
          overflow:hidden;
          clip-path: inset(0 0 0 0);
          opacity:.55;
        }
        .glitch::before{
          transform: translate(1px, 0);
          text-shadow: -2px 0 rgba(255,0,255,.75);
          animation: glitch 3.8s infinite steps(10);
        }
        .glitch::after{
          transform: translate(-1px, 0);
          text-shadow: 2px 0 rgba(0,212,255,.75);
          animation: glitch 4.6s infinite steps(12);
        }

        @keyframes glitch {
          0%, 100% { clip-path: inset(0 0 0 0); }
          10% { clip-path: inset(12% 0 68% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(78% 0 8% 0); transform: translate(2px, -1px); }
          30% { clip-path: inset(42% 0 42% 0); transform: translate(-1px, 0); }
          40% { clip-path: inset(6% 0 78% 0); transform: translate(2px, 1px); }
          50% { clip-path: inset(58% 0 22% 0); transform: translate(-2px, -1px); }
          60% { clip-path: inset(20% 0 60% 0); transform: translate(1px, 0); }
          70% { clip-path: inset(72% 0 12% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(34% 0 46% 0); transform: translate(2px, 0); }
          90% { clip-path: inset(10% 0 76% 0); transform: translate(-2px, 0); }
        }

        .cursor{
          display:inline-block;
          width:.7ch;
          margin-left:.25ch;
          background: rgba(34,211,238,.9);
          box-shadow: 0 0 14px rgba(34,211,238,.65);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink{ 50%{ opacity:0 } }
      `}</style>

      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 scanlines noise">
        {/* neon blobs (same palette as your code) */}
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />

        {/* grid/circuit */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        {/* HERO */}
        <header className="mb-10">
          <ChamferCard className="p-6 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-flex items-center gap-2 border border-cyan-400/35 bg-cyan-500/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-cyan-300">
                <Sparkles size={14} />
                Mission Control
              </div>

              <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                <span
                  className="glitch bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  data-text="We Build Digital Systems"
                >
                  We Build Digital Systems
                </span>
                <span className="mt-2 block text-cyan-100">
                  That Feel Premium and Scale Without Friction.
                </span>
              </h1>

              <p className="max-w-3xl text-sm leading-relaxed text-cyan-100/75 sm:text-base">
                Mindbridge Tech ka mission simple hai: ambitious ideas ko production-grade products me convert
                karna with speed, design quality, and engineering discipline. Hum sirf features nahi banate,
                hum growth-ready digital foundation banate hain.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <NeonButton to="/contact" variant="primary">
                  Launch Project <ArrowUpRight size={16} />
                </NeonButton>
                <NeonButton to="/portfolio" variant="secondary">
                  View Work
                </NeonButton>
              </div>

              {/* micro HUD row */}
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { k: "MODE", v: "SHIP / ITERATE" },
                  { k: "FOCUS", v: "QUALITY + SPEED" },
                  { k: "SYSTEM", v: "GROWTH-READY" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="border border-white/10 bg-white/5 px-4 py-3 text-xs"
                    style={{
                      clipPath:
                        "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))",
                    }}
                  >
                    <div className="text-[0.65rem] font-semibold tracking-[0.28em] text-white/50">
                      {s.k}
                    </div>
                    <div className="mt-1 font-bold tracking-wide text-white/90">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ChamferCard>
        </header>

        {/* PILLARS */}
        <div className="grid gap-5 md:grid-cols-3">
          {missionPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ChamferCard key={pillar.title} className="p-6">
                <div className="mb-4 inline-flex items-center justify-center border border-cyan-400/25 bg-cyan-500/10 p-3 text-cyan-200">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-bold text-cyan-100 uppercase tracking-wide">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {pillar.copy}
                </p>
              </ChamferCard>
            );
          })}
        </div>

        {/* TERMINAL + PRINCIPLE */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Terminal block */}
          <ChamferCard className="p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <p className="inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-purple-300">
                <Terminal size={14} />
                Mission Signals
              </p>

              <div className="hidden sm:flex items-center gap-2 text-[0.65rem] text-white/40">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
              </div>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold leading-tight text-slate-100 sm:text-3xl">
              Space-grade process for serious product teams.
            </h3>

            <div className="mt-6 border border-white/10 bg-black/50 p-5 text-sm text-slate-200/90"
              style={{
                clipPath:
                  "polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              {missionSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-3 py-2">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.75)]" />
                  <span className="text-slate-200/85">{signal}</span>
                </div>
              ))}
              <div className="mt-3 text-cyan-200/80">
                <span className="opacity-70">{">"}</span> ready_to_launch<span className="cursor">&nbsp;</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <NeonButton to="/services" variant="primary">
                Explore Services <ArrowUpRight size={15} />
              </NeonButton>
              <NeonButton to="/contact" variant="secondary">
                Talk to Us
              </NeonButton>
            </div>
          </ChamferCard>

          {/* Principle */}
          <ChamferCard className="p-7 sm:p-9">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Operating Principle
            </p>

            <p className="mt-5 text-lg font-semibold leading-relaxed text-cyan-100">
              "Clarity in planning. Precision in execution. Excellence in every release."
            </p>

            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Is mission page ka core idea hai ki aapke users ko premium experience mile while your internal
              teams get reliable systems, faster operations, and cleaner workflows.
            </p>

            <NavLink
              to="/portfolio"
              className="mt-8 inline-flex items-center gap-2 border-b border-cyan-300/60 pb-1 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200 transition-colors duration-300 hover:text-cyan-100"
            >
              View Portfolio <ArrowUpRight size={15} />
            </NavLink>

            <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/55">
              <span className="inline-flex items-center gap-2">
                <Zap size={14} className="text-purple-300" />
                System status: <span className="text-cyan-200">ONLINE</span>
              </span>
            </div>
          </ChamferCard>
        </div>
      </div>
    </section>
  );
}