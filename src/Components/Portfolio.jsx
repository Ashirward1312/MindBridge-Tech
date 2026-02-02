// src/components/PortfolioSection.jsx

const PROJECTS = [
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

function ProjectCard({ project }) {
  const shortDesc =
    project.desc.length > 110
      ? project.desc.slice(0, 100) + "..."
      : project.desc;

  return (
    <article className="relative flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] aspect-square">
      <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/85 p-[1px] shadow-[0_14px_45px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.33),transparent_55%)] opacity-40 mix-blend-screen"
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col rounded-3xl bg-slate-950/95 p-4 backdrop-blur-xl">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-slate-300">
                {project.label}
              </span>

              {project.status === "in-progress" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-amber-300 motion-safe:animate-pulse">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  In Progress
                </span>
              )}
            </div>

            <h3 className="mt-2 text-sm sm:text-[0.9rem] font-semibold text-slate-50">
              {project.name}
            </h3>

            <p className="mt-1.5 text-[0.7rem] leading-relaxed text-slate-400">
              {shortDesc}
            </p>

            <dl className="mt-2 space-y-0.5 text-[0.65rem] text-slate-400">
              <div className="flex gap-1.5">
                <dt className="font-medium text-slate-200 whitespace-nowrap">
                  Industry:
                </dt>
                <dd className="truncate">{project.industry}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-medium text-slate-200 whitespace-nowrap">
                  Scope:
                </dt>
                <dd className="truncate">{project.scope}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-3 flex items-end justify-between gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-900/90 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-100 transition hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-white"
            >
              View Site
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

            <div className="relative h-5 w-5">
              <div className="absolute inset-0 rounded-full border border-cyan-400/40 opacity-60" />
              <div className="absolute inset-1 rounded-full bg-cyan-400/70 blur-[2px] group-hover:animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ projects }) {
  return (
    <div className="marquee">
      <div className="marquee__inner">
        {projects.concat(projects).map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute inset-0 
            bg-[radial-gradient(circle_at_1px_1px,#1f2937_1px,transparent_0)]
            [background-size:30px_30px]
            opacity-40
          "
          aria-hidden="true"
        />
        <div className="absolute -left-32 -top-40 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-sky-700/30 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-slate-700/60 opacity-40" />
        <div className="absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2 rounded-full border border-cyan-500/40 opacity-40 motion-safe:animate-pulse" />
        <div className="absolute -right-6 top-16 h-16 w-16 rounded-full border border-cyan-500/50 bg-cyan-500/20 blur-[1px] motion-safe:animate-ping" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-slate-600/60 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Portfolio · Recent Missions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            SITES LAUNCHED FROM OUR SPACE STATION
          </h2>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Hand-crafted, production-ready websites and web apps – each project
            is a different star in this galaxy.
          </p>
        </div>

        <MarqueeRow projects={PROJECTS} />
      </div>
    </section>
  );
}