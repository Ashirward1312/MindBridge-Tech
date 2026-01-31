// src/components/Features.jsx
import React from "react";
import img1 from "./Images/1.png";
import img2 from "./Images/2.png";
import img3 from "./Images/3.png";
import img4 from "./Images/4.png";
import img5 from "./Images/5.png";

const services = [
  {
    id: "01",
    pill: "BACKEND · DATABASE",
    label: "SERVICE 01 · BACKEND & DATABASE DEVELOPMENT",
    titleMain: "SECURE, SCALABLE",
    titleAccent: "BACKEND FOUNDATIONS",
    titleSub: "BUILT TO HANDLE REAL‑WORLD LOAD.",
    image: img1,
    description:
      "We design and build backend systems that are clean, predictable and production‑ready — so your product stays stable even as usage grows.",
    points: [
      "Database design & development aligned with your business logic.",
      "User authentication with secure role management and permissions.",
      "Reliable data storage, backups and structured access.",
      "Backend APIs using Django or Node.js best practices.",
      "Secure, scalable architecture ready for production load.",
    ],
    gradient: "from-cyan-500/30 via-sky-500/10 to-purple-500/25",
  },
  {
    id: "02",
    pill: "INTEGRATIONS · LAUNCH",
    label: "SERVICE 02 · INTEGRATIONS & LAUNCH SETUP",
    titleMain: "SMOOTH",
    titleAccent: "INFRASTRUCTURE & INTEGRATIONS",
    titleSub: "SO YOUR PRODUCT IS READY TO GO LIVE.",
    image: img2,
    description:
      "We handle the technical plumbing behind your launch — from domains and SSL to payments and third‑party APIs — so everything works together from day one.",
    points: [
      "Domain, hosting and SSL setup for live environments.",
      "Payment gateway integration and transaction flows.",
      "Third‑party API integrations (maps, SMS, email, etc.).",
      "WhatsApp, email and CRM integrations for communication.",
      "SEO‑friendly technical setup to support better search ranking.",
    ],
    gradient: "from-purple-500/25 via-sky-500/10 to-cyan-500/25",
  },
  {
    id: "03",
    pill: "ERP · CRM",
    label: "SERVICE 03 · ERP & CRM SOLUTIONS",
    titleMain: "CUSTOM",
    titleAccent: "ERP & CRM PLATFORMS",
    titleSub: "BUILT AROUND YOUR REAL WORKFLOWS.",
    image: img3,
    description:
      "We build ERP and CRM systems that match your operations — helping you manage leads, customers, projects and teams from a single, easy‑to‑use interface.",
    points: [
      "Custom ERP modules designed around your business processes.",
      "CRM for leads, customers and full sales pipeline tracking.",
      "Role‑based access and permissions across teams and branches.",
      "Workflow automation and reporting dashboards for insights.",
      "ERP/CRM customisation and enhancements as you scale.",
    ],
    gradient: "from-purple-500/30 via-sky-500/10 to-cyan-500/25",
  },
  {
    id: "04",
    pill: "SUPPORT · GROWTH",
    label: "SERVICE 04 · ONGOING SUPPORT & OPTIMISATION",
    titleMain: "CONTINUOUS",
    titleAccent: "CARE, UPDATES & IMPROVEMENTS",
    titleSub: "LONG AFTER LAUNCH DAY IS OVER.",
    image: img4,
    description:
      "We don’t disappear after deployment. We stay with you, maintaining and improving your product as your business and users evolve.",
    points: [
      "Regular website and backend updates.",
      "New feature development and enhancements.",
      "Bug fixes, performance tuning and refactoring.",
      "Security checks and best‑practice improvements.",
      "Dedicated post‑launch technical support.",
    ],
    gradient: "from-cyan-500/25 via-emerald-500/10 to-sky-500/25",
  },
  {
    id: "05",
    pill: "PERFORMANCE · SECURITY",
    label: "SERVICE 05 · PERFORMANCE, SECURITY & ANALYTICS",
    titleMain: "HIGH‑PERFORMANCE",
    titleAccent: "SECURITY & MONITORING",
    titleSub: "SO YOUR PRODUCT STAYS FAST AND PROTECTED.",
    image: img5,
    description:
      "We keep your product fast, secure and measurable — from performance tuning and security hardening to analytics that show you what’s really happening.",
    points: [
      "Performance audits and response‑time optimisation.",
      "Caching, CDN and database tuning for speed.",
      "Security hardening, vulnerability checks and patches.",
      "Uptime and error monitoring with smart alerts.",
      "Tracking, dashboards and analytics for better decisions.",
    ],
    gradient: "from-emerald-500/25 via-cyan-500/10 to-sky-500/25",
  },
];

const Features = () => {
  return (
    <section
      id="services"
      className="w-full py-10 md:py-12 lg:py-14 bg-gradient-to-b from-black via-slate-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
        {/* Section heading */}
        <header className="text-center space-y-3">
          <p className="text-[0.6rem] sm:text-[0.65rem] font-semibold text-cyan-400/80 uppercase tracking-[0.28em]">
            MINDBRIDGE TECH · SERVICES
          </p>
          <h2 className="text-base md:text-lg lg:text-xl font-extrabold tracking-tight">
            A{" "}
            <span className="text-cyan-300">FULL‑STACK DIGITAL BACKBONE</span>
            <span className="block text-cyan-100">
              ENGINEERED FOR SERIOUS PRODUCTS.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[0.78rem] md:text-sm text-cyan-100/75 leading-relaxed">
            From backend and integrations to ERP, CRM and ongoing support – each
            layer is designed to feel smooth on the surface while staying rock solid
            underneath.
          </p>
        </header>

        {/* Timeline + cards */}
        <div className="relative">
          {/* central vertical line on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500/25 to-transparent" />
          </div>

          <div className="space-y-10 lg:space-y-12">
            {services.map((service, index) => {
              const isEven = index % 2 === 0; // 0,2,4 => content left / image right

              return (
                <div
                  key={service.id}
                  className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center"
                >
                  {/* CONTENT SIDE */}
                  <div
                    className={`space-y-3 md:space-y-4 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <p className="text-[0.6rem] sm:text-[0.65rem] font-semibold text-cyan-400 uppercase tracking-[0.24em]">
                      {service.label}
                    </p>

                    <div className="space-y-1.5">
                      <h3 className="text-sm md:text-base lg:text-lg font-extrabold tracking-[0.16em] uppercase leading-snug">
                        {service.titleMain}{" "}
                        <span className="text-cyan-300">
                          {service.titleAccent}
                        </span>
                        <span className="block text-cyan-100">
                          {service.titleSub}
                        </span>
                      </h3>
                    </div>

                    <p className="text-[0.78rem] md:text-sm text-cyan-100/85 leading-relaxed">
                      {service.description}
                    </p>

                    {/* SMALL, TIGHT POINTS */}
                    <ul className="space-y-1.5 text-[0.74rem] md:text-[0.78rem] text-cyan-100/80 leading-relaxed">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80 flex-shrink-0" />
                          <span className="tracking-[0.05em] uppercase">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IMAGE SIDE */}
                  <div
                    className={`flex ${
                      isEven
                        ? "md:order-2 justify-center md:justify-end"
                        : "md:order-1 justify-center md:justify-start"
                    }`}
                  >
                    <div className="relative w-full max-w-xs sm:max-w-sm group">
                      {/* outer glow */}
                      <div
                        className={`absolute -inset-3 rounded-[1.8rem] bg-gradient-to-tr ${service.gradient}
                          opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`}
                      />

                      {/* main image card */}
                      <div
                        className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900/90
                          border border-cyan-500/15 shadow-lg shadow-cyan-500/25
                          transform-gpu transition duration-500
                          group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_rgba(8,47,73,1)]
                          group-hover:-rotate-1"
                      >
                        {/* subtle gradient overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/20 opacity-70 mix-blend-screen" />

                        <img
                          src={service.image}
                          alt={service.label}
                          className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                          loading="lazy"
                        />

                        {/* pill */}
                        <div
                          className="absolute bottom-3 left-3 px-2.5 py-0.5 text-[0.6rem] font-semibold rounded-full 
                            bg-black/70 text-cyan-100 uppercase tracking-[0.22em]
                            border border-cyan-400/40 backdrop-blur-md
                            translate-y-1 group-hover:translate-y-0 transition-all duration-500"
                        >
                          {service.pill}
                        </div>

                        {/* number badge */}
                        <div className="absolute top-3 right-3 text-[0.6rem] font-semibold text-cyan-100/80 bg-black/60 border border-cyan-500/40 rounded-full px-2 py-0.5 backdrop-blur">
                          {service.id}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;