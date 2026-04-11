import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Terminal,
  ShieldCheck,
  Layers,
  Target,
  Workflow,
  Cpu,
  Milestone,
  Zap,
} from "lucide-react";

/**
 * Vision — Terminal CLI layout with Mindbridge theme colors (cyan/blue/purple)
 * Stack: React + Tailwind + react-router-dom + lucide-react
 * Notes:
 * - Strict terminal panes (no rounded corners)
 * - Scanlines overlay (subtle)
 * - Monospace only (page scoped)
 * - ASCII separators + prompts + progress bars
 * - CTA routes: /contact /services /portfolio
 */

const TOKENS = {
  bg: "#0a0a0f",          // deep void black (close to your cyber vibe)
  fg: "#E5E7EB",          // soft white/gray
  muted: "#9CA3AF",       // muted text
  border: "#2a2a3a",      // tech border

  a1: "#22d3ee",          // cyan (primary)
  a2: "#60a5fa",          // blue  (secondary)
  a3: "#a855f7",          // purple (tertiary)
};

const PILLARS = [
  {
    title: "PREMIUM BY DESIGN",
    copy: "We create consistent product systems—not isolated screens—so your experience stays premium as the product scales.",
    icon: Layers,
    tone: "a1",
  },
  {
    title: "OUTCOME-LED DELIVERY",
    copy: "Roadmap, UI, and engineering align to measurable outcomes: velocity, reliability, retention, and business impact.",
    icon: Target,
    tone: "a2",
  },
  {
    title: "RELIABLE ENGINEERING",
    copy: "Performance, security, and scalability are engineered from day one so your platform remains stable under growth.",
    icon: ShieldCheck,
    tone: "a3",
  },
];

const HORIZONS = [
  {
    label: "HORIZON_01",
    title: "FOUNDATION",
    copy: "Clarify goals, define the design system, and ship a stable baseline quickly—without sacrificing quality.",
    icon: Workflow,
    pct: 78,
    tone: "a1",
  },
  {
    label: "HORIZON_02",
    title: "ACCELERATION",
    copy: "Automation-first delivery: quality checks, performance budgets, and operational visibility across releases.",
    icon: Cpu,
    pct: 62,
    tone: "a2",
  },
  {
    label: "HORIZON_03",
    title: "SCALE",
    copy: "Platform-ready architecture and advanced workflows for long-term product expansion and defensibility.",
    icon: Milestone,
    pct: 49,
    tone: "a3",
  },
];

const VISION_SIGNALS = [
  "Blueprint-first planning: strategy → UX → architecture",
  "Design system + component library for consistency",
  "Performance and reliability treated as product features",
  "Security-minded engineering across the lifecycle",
  "Modular builds for long-term velocity and scaling",
];

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function toneColor(tone) {
  if (tone === "a2") return "var(--a2)";
  if (tone === "a3") return "var(--a3)";
  return "var(--a1)";
}

function Pane({ title, rightTag, children, className = "" }) {
  return (
    <section
      className={[
        "border border-[var(--border)] bg-[var(--bg)]",
        "text-[var(--fg)]",
        className,
      ].join(" ")}
      style={{ borderRadius: 0 }}
      aria-label={title}
    >
      {/* Title bar */}
      <div className="border-b border-[var(--border)] px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--fg)]/80">
            {`+--- ${title} ---+`}
          </div>
          {rightTag ? (
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--a1)]">
              {rightTag}
            </div>
          ) : null}
        </div>
      </div>

      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
}

function Divider({ label }) {
  return (
    <div className="my-4 font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--muted)]">
      {label ? (
        <div className="flex items-center gap-3">
          <span className="text-[var(--a2)]">{label}</span>
          <span className="h-px flex-1 bg-[var(--border)]" />
        </div>
      ) : (
        <div className="h-px w-full bg-[var(--border)]" />
      )}
    </div>
  );
}

function Btn({ to, tone = "a1", children }) {
  return (
    <NavLink
      to={to}
      className="inline-flex items-center gap-2 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.32em] transition"
      style={{
        borderColor: toneColor(tone),
        color: toneColor(tone),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = toneColor(tone);
        e.currentTarget.style.color = "#05060a";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = toneColor(tone);
      }}
    >
      {children}
      <ArrowUpRight size={14} />
    </NavLink>
  );
}

function ProgressBar({ pct = 50, width = 26, tone = "a1" }) {
  const bars = Math.round((pct / 100) * width);
  const filled = "|".repeat(bars);
  const empty = ".".repeat(Math.max(0, width - bars));

  return (
    <span className="font-mono text-[11px]">
      <span style={{ color: toneColor(tone) }}>[{filled}</span>
      <span className="text-[var(--muted)]">{empty}]</span>{" "}
      <span className="text-[var(--fg)]/80">{String(pct).padStart(3, " ")}%</span>
    </span>
  );
}

function Prompt({ left = "mindbridge@vision:~$", cmd }) {
  return (
    <div className="font-mono text-xs leading-relaxed">
      <span className="text-[var(--muted)]">{left}</span>{" "}
      <span className="text-[var(--a1)]">{cmd}</span>
      <span className="cursor" aria-hidden="true" />
    </div>
  );
}

export default function Vision() {
  // typewriter hero command
  const HERO_CMD = "vision --mode=hud-terminal --theme=cyan-blue-purple --scale=on";
  const [typed, setTyped] = useState("");

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTyped(HERO_CMD);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(HERO_CMD.slice(0, i));
      if (i >= HERO_CMD.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <main
      className="relative min-h-screen font-mono"
      style={{
        backgroundColor: TOKENS.bg,
        color: TOKENS.fg,
        ["--bg"]: TOKENS.bg,
        ["--fg"]: TOKENS.fg,
        ["--muted"]: TOKENS.muted,
        ["--border"]: TOKENS.border,
        ["--a1"]: TOKENS.a1,
        ["--a2"]: TOKENS.a2,
        ["--a3"]: TOKENS.a3,
      }}
    >
      {/* Local CSS: scanlines + cursor + subtle glow */}
      <style>{`
        .scanlines::after{
          content:"";
          position:absolute; inset:0;
          pointer-events:none;
          background: repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.00),
            rgba(255,255,255,0.00) 2px,
            rgba(0,0,0,0.30) 2px,
            rgba(0,0,0,0.30) 4px
          );
          opacity:.16;
          mix-blend-mode: overlay;
        }

        .cursor{
          display:inline-block;
          width: 0.9ch;
          height: 1em;
          transform: translateY(2px);
          background: rgba(34,211,238,0.95);
          box-shadow: 0 0 14px rgba(34,211,238,0.45);
          animation: blink 1s step-end infinite;
          margin-left: .35ch;
        }
        @keyframes blink { 50% { opacity: 0; } }

        @media (prefers-reduced-motion: reduce){
          .cursor{ animation: none; opacity: 1; }
        }

        .glow-a1 { text-shadow: 0 0 10px rgba(34,211,238,0.22); }
        .glow-a2 { text-shadow: 0 0 10px rgba(96,165,250,0.20); }
        .glow-a3 { text-shadow: 0 0 10px rgba(168,85,247,0.20); }
      `}</style>

      {/* Background: grid + subtle gradients (theme consistent) */}
      <div className="pointer-events-none absolute inset-0 scanlines">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-44 -right-44 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <Container className="relative pt-10 pb-16">
        {/* HEADER */}
        <header className="mb-8">
          <div className="border border-[var(--border)] p-4 sm:p-6">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="w-full">
                <div className="text-[11px] tracking-[0.32em] uppercase text-[var(--muted)]">
                  mindbridge tech :: vision
                </div>

                <div className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-[0.12em]">
                  <span className="glow-a1 text-[var(--a1)]">Vision</span>{" "}
                  <span className="text-[var(--fg)]/90">Interface</span>
                </div>

                <Divider label="command" />

                <Prompt cmd={typed} />

                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
                  Our vision is to build premium digital systems that remain fast, stable, and scalable as products and teams grow.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Btn to="/services" tone="a1">
                  [ services ]
                </Btn>
                <Btn to="/portfolio" tone="a2">
                  [ portfolio ]
                </Btn>
                <Btn to="/contact" tone="a3">
                  [ contact ]
                </Btn>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN GRID (tmux-like panes) */}
        <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
          {/* Vision Summary */}
          <Pane title="VISION_SUMMARY" rightTag="[OK]" className="lg:col-span-7">
            <div className="space-y-2 text-xs text-[var(--fg)]/90">
              <div>
                <span className="text-[var(--muted)]">{">"}</span>{" "}
                premium experience, consistent UX, predictable delivery
              </div>
              <div>
                <span className="text-[var(--muted)]">{">"}</span>{" "}
                disciplined engineering for reliability + scaling
              </div>
              <div>
                <span className="text-[var(--muted)]">{">"}</span>{" "}
                systems-first thinking: design system + modular architecture
              </div>
            </div>

            <Divider label="signals" />

            <ul className="space-y-2 text-xs text-[var(--fg)]/90">
              {VISION_SIGNALS.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-[var(--a2)]">-</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Pane>

          {/* System Status */}
          <Pane title="SYSTEM_STATUS" rightTag="[LIVE]" className="lg:col-span-5">
            <div className="space-y-3">
              <div className="border border-[var(--border)] p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--fg)]/85">
                    <Terminal size={16} className="text-[var(--a1)]" />
                    runtime
                  </div>
                  <span className="text-xs text-[var(--a1)]">stable</span>
                </div>
              </div>

              <div className="border border-[var(--border)] p-3">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                  delivery_metrics
                </div>
                <div className="mt-2 space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[var(--muted)]">quality_checks</span>
                    <ProgressBar pct={86} tone="a1" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[var(--muted)]">iteration_speed</span>
                    <ProgressBar pct={74} tone="a2" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[var(--muted)]">system_reliability</span>
                    <ProgressBar pct={92} tone="a3" />
                  </div>
                </div>
              </div>

              <div className="border border-[var(--border)] p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                    status_flags
                  </div>
                  <Zap size={16} className="text-[var(--a2)]" />
                </div>
                <div className="mt-2 text-xs text-[var(--fg)]/85 leading-relaxed">
                  <span className="text-[var(--a1)]">[OK]</span> performance_budget<br />
                  <span className="text-[var(--a2)]">[OK]</span> secure_defaults<br />
                  <span className="text-[var(--a3)]">[OK]</span> scalable_architecture<br />
                </div>
              </div>
            </div>
          </Pane>

          {/* Core Pillars */}
          <Pane title="CORE_PILLARS" rightTag="[OK]" className="lg:col-span-12">
            <div className="grid gap-4 md:grid-cols-3">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="border border-[var(--border)] p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
                      <Icon size={16} style={{ color: toneColor(p.tone) }} />
                      <span style={{ color: toneColor(p.tone) }}>{p.title}</span>
                    </div>
                    <div className="mt-3 text-xs leading-relaxed text-[var(--fg)]/80">
                      {p.copy}
                    </div>
                  </div>
                );
              })}
            </div>
          </Pane>

          {/* Horizons */}
          <Pane title="HORIZONS" rightTag="[PLAN]" className="lg:col-span-8">
            <div className="space-y-4">
              {HORIZONS.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="border border-[var(--border)] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                          {h.label}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em]" style={{ color: toneColor(h.tone) }}>
                          {h.title}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                        <Icon size={16} style={{ color: toneColor(h.tone) }} />
                        <ProgressBar pct={h.pct} tone={h.tone} />
                      </div>
                    </div>

                    <div className="mt-3 text-xs leading-relaxed text-[var(--fg)]/80">
                      {h.copy}
                    </div>
                  </div>
                );
              })}
            </div>
          </Pane>

          {/* Notes / CTA Pane */}
          <Pane title="NOTES" rightTag="[INIT]" className="lg:col-span-4">
            <div className="border border-[var(--border)] p-4">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                mindbridge@vision:~$
              </div>

              <div className="mt-3 space-y-2 text-xs leading-relaxed text-[var(--fg)]/85">
                <div>
                  <span className="text-[var(--muted)]">{">"}</span>{" "}
                  If you want premium UX, start with a design system.
                </div>
                <div>
                  <span className="text-[var(--muted)]">{">"}</span>{" "}
                  If you want speed, build automation and a clean component library.
                </div>
                <div>
                  <span className="text-[var(--muted)]">{">"}</span>{" "}
                  If you want scale, remove fragility early.
                </div>
              </div>

              <Divider label="actions" />

              <div className="flex flex-col gap-3">
                <Btn to="/contact" tone="a1">
                  [ start_conversation ]
                </Btn>
                <Btn to="/services" tone="a2">
                  [ explore_services ]
                </Btn>
                <Btn to="/portfolio" tone="a3">
                  [ view_proof ]
                </Btn>
              </div>
            </div>
          </Pane>
        </div>

        {/* Footer line */}
        <footer className="mt-10 border border-[var(--border)] p-4 text-[11px] text-[var(--muted)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>{"//"} Mindbridge Tech — Vision Terminal {"//"}</span>
            <span className="text-[var(--a1)]">[OK] ready</span>
          </div>
        </footer>
      </Container>
    </main>
  );
}