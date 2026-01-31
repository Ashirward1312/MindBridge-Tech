// src/components/PortfolioSection.jsx

const PROJECTS = [
  // Real Estate / Investment Projects
  {
    id: 1,
    label: "Mission 01 · Investment Venture",
    name: "Mahesh Ventures",
    desc: "A real estate investment venture focused on premium plots and residential projects, offering curated opportunities for long–term growth.",
    industry: "Real Estate & Investments",
    scope: "Branding · Website · Lead Funnel",
    url: "https://maheshventures.in/",
  },
  {
    id: 2,
    label: "Mission 02 · Land Marketplace",
    name: "LandBazar",
    desc: "A digital marketplace for buying and selling plots and land parcels, built to make discovery, verification and closure faster and more transparent.",
    industry: "Property Marketplace",
    scope: "UX/UI · Website · Listing System",
    url: "http://landbazar.in/",
  },
  {
    id: 3,
    label: "Mission 03 · Advisory",
    name: "DDC Consultancy",
    desc: "A consulting firm providing end–to–end advisory for real estate and business, with a clean, high–trust digital presence for domestic and NRI clients.",
    industry: "Consultancy & Advisory",
    scope: "Corporate Site · Content · Contact Flows",
    url: "https://ddcconsultancy.in/",
  },

  // Tech / Service Websites
  {
    id: 4,
    label: "Mission 04 · Corporate Site",
    name: "SR · YashviTech",
    desc: "A clean, modern corporate website for YashviTech SR, focused on clear service communication and fast performance.",
    industry: "Technology & Services",
    scope: "Branding · Website · Contact Flows",
    url: "https://sr.yashvitech.com/",
  },
  {
    id: 5,
    label: "Mission 05 · Service Website",
    name: "P2 Hardware Solution",
    desc: "A service-focused website for an industrial hardware provider, designed for quick enquiry and trust-building.",
    industry: "Industrial Hardware & Services",
    scope: "Website · Product Highlights · Lead Capture",
    url: "https://p2hardwaresolution.com/",
  },
  {
    id: 6,
    label: "Mission 06 · ERP Portal",
    name: "KP Grandsons ERP",
    desc: "A role-based ERP web portal with a dashboard-style UI for operations, inventory and reporting.",
    industry: "Business Operations",
    scope: "Web App UI · Auth Flows · Dashboards",
    url: "https://erp.kpgrandsons.in/",
  },
  {
    id: 7,
    label: "Mission 07 · Business Website",
    name: "Priyanshi Coal Feed",
    desc: "Business presence website for a coal & feed supplier, built for credibility and smooth enquiry journeys.",
    industry: "Industrial & Trading",
    scope: "Corporate Site · Content · Forms",
    url: "https://priyanshi.coalfeed.in/",
  },
  {
    id: 8,
    label: "Mission 08 · Brand Site",
    name: "Risevo",
    desc: "A brand-first site with bold visuals and a clean layout to communicate services and capture leads.",
    industry: "Corporate / Startup",
    scope: "Landing Page · Website · Contact Flows",
    url: "https://www.risevo.in/",
  },
  {
    id: 9,
    label: "Mission 09 · Experimental",
    name: "SS Website (In Progress)",
    desc: "An experimental, space-themed build exploring new layouts, microinteractions and animations.",
    industry: "Personal Project",
    scope: "Design Exploration · Frontend Build",
    url: "https://ss-website-z1ai.vercel.app/",
    status: "in-progress",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Starfield + nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle star grid */}
        <div
          className="
            absolute inset-0 
            bg-[radial-gradient(circle_at_1px_1px,#1f2937_1px,transparent_0)]
            [background-size:30px_30px]
            opacity-40
          "
          aria-hidden="true"
        />

        {/* Glowing nebulas */}
        <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-sky-700/30 blur-3xl" />

        {/* Orbit rings */}
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-slate-700/60 opacity-40" />
        <div className="absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full border border-cyan-500/40 opacity-40 motion-safe:animate-pulse" />

        {/* Small pulsing planet */}
        <div className="absolute -right-6 top-16 h-16 w-16 rounded-full border border-cyan-500/50 bg-cyan-500/20 blur-[1px] motion-safe:animate-ping" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-slate-600/60 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio · Recent Missions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            SITES LAUNCHED FROM MY SPACE STATION
          </h2>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Hand-crafted, production-ready websites and web apps – each project
            is a different star in this galaxy.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 p-[1px] shadow-[0_18px_60px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]"
            >
              {/* Card glow */}
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.4),transparent_60%)] opacity-40 mix-blend-screen"
                aria-hidden="true"
              />

              {/* Inner card */}
              <div className="relative flex h-full flex-col rounded-2xl bg-slate-950/95 p-5 backdrop-blur-xl">
                {/* Top row: mission + status */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full border border-slate-600/70 bg-slate-950/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {project.label}
                  </span>

                  {project.status === "in-progress" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-amber-300 motion-safe:animate-pulse">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-slate-50">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.desc}
                </p>

                <dl className="mt-4 space-y-1 text-xs text-slate-400">
                  <div className="flex gap-2">
                    <dt className="font-medium text-slate-200">Industry:</dt>
                    <dd>{project.industry}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-slate-200">Scope:</dt>
                    <dd>{project.scope}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-end justify-between gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-500/70 bg-slate-900/90 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-100 transition hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-white"
                  >
                    View Live Site
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 15L15 5M8 5H15V12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>

                  {/* Tiny orbiting dot accent */}
                  <div className="relative h-6 w-6">
                    <div className="absolute inset-0 rounded-full border border-cyan-400/40 opacity-60" />
                    <div className="absolute inset-1 rounded-full bg-cyan-400/70 blur-[2px] group-hover:animate-ping" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}