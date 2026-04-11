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
    pill: "WEB · DEVELOPMENT",
    label: "SERVICE 01 · WEB DEVELOPMENT SERVICES",
    titleMain: "MODERN, RESPONSIVE",
    titleAccent: "WEBSITE SOLUTIONS",
    titleSub: "DESIGNED TO CONVERT AND SCALE.",
    image: img1,
    description:
      "We create fast, responsive and SEO-friendly websites tailored to your business goals — from custom builds to full-scale e-commerce solutions.",
    points: [
      "Custom website development based on your brand and requirements.",
      "Responsive design for mobile, tablet and desktop devices.",
      "E-commerce website development with secure payment integration.",
      "SEO optimization for better visibility and search rankings.",
      "Ongoing website maintenance, updates and performance improvements.",
    ],
    gradient: "from-orange-500/30 via-amber-500/15 to-gray-500/20",
    accentColor: "orange",
  },
  {
    id: "02",
    pill: "UI/UX · E-COMMERCE",
    label: "SERVICE 02 · DIGITAL PRESENCE & UI/UX DESIGN",
    titleMain: "BUILD YOUR",
    titleAccent: "DIGITAL PRESENCE",
    titleSub: "DESIGNED TO ENGAGE, BUILT TO PERFORM.",
    image: img2,
    description:
      "We craft complete digital experiences — from UI/UX design to Shopify and e-commerce development — ensuring your brand looks professional, performs fast and converts users into customers.",
    points: [
      "UI/UX design focused on usability, clarity and user engagement.",
      "Shopify store design and development tailored to your brand.",
      "Custom e-commerce store development with smooth user journeys.",
      "Performance and speed optimization for faster load times.",
      "End-to-end development ensuring consistency across all platforms.",
    ],
    gradient: "from-orange-500/30 via-amber-500/15 to-gray-500/20",
    accentColor: "amber",
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
    accentColor: "purple",
  },
  {
    id: "04",
    pill: "BACKEND · SUPPORT",
    label: "SERVICE 04 · BACKEND, INTEGRATIONS & ONGOING SUPPORT",
    titleMain: "RELIABLE",
    titleAccent: "SYSTEMS & CONTINUOUS SUPPORT",
    titleSub: "POWERING YOUR PRODUCT BEHIND THE SCENES.",
    image: img4,
    description:
      "We build, integrate and maintain robust backend systems and databases — ensuring seamless integrations, long-term stability and continuous technical support as your product grows.",
    points: [
      "Backend development with scalable and secure architecture.",
      "Database design, optimization and structured data management.",
      "Third-party integrations and system setup (APIs, payments, tools).",
      "Ongoing support, updates and performance optimization.",
      "Monitoring, security enhancements and long-term maintenance.",
    ],
    gradient: "from-slate-500/30 via-cyan-500/10 to-emerald-500/25",
    accentColor: "emerald",
  },
  {
    id: "05",
    pill: "BILLING · AUTOMATION",
    label: "SERVICE 05 · CUSTOM BILLING & INVOICING SOFTWARE",
    titleMain: "SMART",
    titleAccent: "BILLING & FINANCIAL WORKFLOWS",
    titleSub: "BUILT FOR ACCURACY, COMPLIANCE AND SCALE.",
    image: img5,
    description:
      "We design and develop custom billing and invoicing systems tailored to your business — GST-ready, automated and easy to manage, with full visibility into payments, reports and workflows.",
    points: [
      "Custom billing & invoicing software built for your operations.",
      "GST-ready invoices with CGST, SGST and IGST compliance.",
      "Customer and vendor billing dashboards with full control.",
      "Invoice history, payment tracking and outstanding management.",
      "Tax reports, sales reports and downloadable financial records.",
      "Role-based access control and permission management.",
      "Export invoices and reports in PDF and Excel formats.",
      "Workflow automation for billing approvals and finance processes.",
    ],
    gradient: "from-emerald-500/30 via-cyan-500/10 to-sky-500/25",
    accentColor: "sky",
  },
];

const Features = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen
                 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28
                 bg-gradient-to-b from-black via-slate-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto 
                      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 
                      space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        
        {/* ───────── Section Heading ───────── */}
        <header className="text-center space-y-4 sm:space-y-5 md:space-y-6">
          {/* Top label */}
          <div className="inline-flex items-center gap-2 
                          px-3 py-1.5 sm:px-4 sm:py-2 
                          rounded-full border border-cyan-500/20 
                          bg-cyan-500/5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-[0.6rem] sm:text-[0.65rem] md:text-xs 
                          font-semibold text-cyan-400/90 uppercase tracking-[0.28em]">
              MINDBRIDGE TECH · SERVICES
            </p>
          </div>

          {/* Main heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                         font-extrabold tracking-tight leading-tight">
            A{" "}
            <span className="text-transparent bg-clip-text 
                             bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400">
              FULL‑STACK DIGITAL BACKBONE
            </span>
            <span className="block text-cyan-100 
                             mt-1 sm:mt-2">
              ENGINEERED FOR SERIOUS PRODUCTS.
            </span>
          </h2>

          {/* Separator line */}
          <div className="flex justify-center">
            <div className="h-px w-16 sm:w-20 md:w-24 
                            bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </div>

          {/* Description */}
          <p className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl 
                        mx-auto 
                        text-xs sm:text-sm md:text-base 
                        text-cyan-100/70 leading-relaxed">
            From backend and integrations to ERP, CRM and ongoing support – each
            layer is designed to feel smooth on the surface while staying rock
            solid underneath.
          </p>
        </header>

        {/* ───────── Timeline + Cards ───────── */}
        <div className="relative">
          {/* Central vertical line — only on md+ */}
          <div className="pointer-events-none absolute left-1/2 top-0 
                          hidden h-full -translate-x-1/2 md:block">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500/25 to-transparent" />
          </div>

          {/* Mobile vertical line — only on mobile */}
          <div className="pointer-events-none absolute left-4 sm:left-6 top-0 
                          h-full md:hidden">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
          </div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} className="relative">
                  {/* Timeline dot — mobile */}
                  <div className="absolute left-4 sm:left-6 top-0 
                                  -translate-x-1/2 md:hidden z-10">
                    <div className="h-3 w-3 rounded-full bg-cyan-500/60 
                                    border-2 border-cyan-400/40 
                                    shadow-lg shadow-cyan-500/30" />
                  </div>

                  {/* Timeline dot — desktop center */}
                  <div className="absolute left-1/2 top-1/2 
                                  -translate-x-1/2 -translate-y-1/2 
                                  hidden md:flex z-10
                                  items-center justify-center">
                    <div className="h-4 w-4 lg:h-5 lg:w-5 rounded-full 
                                    bg-cyan-500/50 border-2 border-cyan-400/30 
                                    shadow-lg shadow-cyan-500/40" />
                    <div className="absolute h-8 w-8 lg:h-10 lg:w-10 rounded-full 
                                    bg-cyan-500/10 animate-ping" />
                  </div>

                  {/* Card grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 
                                  gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-16 
                                  items-center
                                  pl-8 sm:pl-12 md:pl-0">
                    
                    {/* ── CONTENT SIDE ── */}
                    <div
                      className={`space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 
                                  ${isEven ? "md:order-1 md:pr-8 lg:pr-12" : "md:order-2 md:pl-8 lg:pl-12"}`}
                    >
                      {/* Service label */}
                      <p className="text-[0.58rem] sm:text-[0.62rem] md:text-[0.68rem] lg:text-xs 
                                    font-semibold text-cyan-400 uppercase 
                                    tracking-[0.2em] sm:tracking-[0.24em]">
                        {service.label}
                      </p>

                      {/* Title block */}
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                                       font-extrabold 
                                       tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.16em] 
                                       uppercase leading-snug">
                          {service.titleMain}{" "}
                          <span className="text-transparent bg-clip-text 
                                           bg-gradient-to-r from-cyan-300 to-blue-400">
                            {service.titleAccent}
                          </span>
                          <span className="block text-cyan-100 
                                           text-xs sm:text-sm md:text-base lg:text-lg 
                                           mt-0.5 sm:mt-1">
                            {service.titleSub}
                          </span>
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[0.72rem] sm:text-[0.78rem] md:text-sm lg:text-base 
                                    text-cyan-100/80 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Points list */}
                      <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5 
                                     text-[0.68rem] sm:text-[0.74rem] md:text-[0.8rem] lg:text-sm 
                                     text-cyan-100/75 leading-relaxed">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex gap-2 sm:gap-2.5 md:gap-3 items-start 
                                                  group/item">
                            <span className="mt-[5px] sm:mt-[6px] 
                                             inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 
                                             rounded-full bg-cyan-400/70 flex-shrink-0
                                             group-hover/item:bg-cyan-300 
                                             group-hover/item:shadow-sm group-hover/item:shadow-cyan-400/50
                                             transition-all duration-300" />
                            <span className="tracking-[0.03em] sm:tracking-[0.05em] uppercase
                                             group-hover/item:text-cyan-100/95 
                                             transition-colors duration-300">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ── IMAGE SIDE ── */}
                    <div
                      className={`flex 
                                  ${isEven
                                    ? "md:order-2 justify-center md:justify-end"
                                    : "md:order-1 justify-center md:justify-start"
                                  }`}
                    >
                      <div className="relative 
                                      w-full 
                                      max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] 
                                      group">
                        {/* Outer glow */}
                        <div
                          className={`absolute 
                                      -inset-3 sm:-inset-4 md:-inset-5 
                                      rounded-[1.5rem] sm:rounded-[1.8rem] md:rounded-[2rem] 
                                      bg-gradient-to-tr ${service.gradient}
                                      opacity-0 blur-2xl sm:blur-3xl 
                                      transition duration-700 
                                      group-hover:opacity-100`}
                        />

                        {/* Decorative corner accents */}
                        <div className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 
                                        w-6 h-6 sm:w-8 sm:h-8 
                                        border-t-2 border-l-2 border-cyan-500/20 
                                        rounded-tl-xl 
                                        opacity-0 group-hover:opacity-100 
                                        transition-all duration-500 
                                        group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                        <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 
                                        w-6 h-6 sm:w-8 sm:h-8 
                                        border-b-2 border-r-2 border-cyan-500/20 
                                        rounded-br-xl 
                                        opacity-0 group-hover:opacity-100 
                                        transition-all duration-500 
                                        group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

                        {/* Main image card */}
                        <div
                          className="relative 
                                     aspect-[4/5] 
                                     rounded-xl sm:rounded-2xl md:rounded-[1.2rem] 
                                     overflow-hidden 
                                     bg-neutral-900/90
                                     border border-cyan-500/15 
                                     shadow-lg shadow-cyan-500/20
                                     transform-gpu transition-all duration-700 ease-out
                                     group-hover:-translate-y-2 sm:group-hover:-translate-y-2.5 
                                     group-hover:shadow-[0_20px_50px_rgba(8,47,73,0.8)] 
                                     sm:group-hover:shadow-[0_24px_60px_rgba(8,47,73,1)]
                                     group-hover:-rotate-1"
                        >
                          {/* Gradient overlay */}
                          <div className="pointer-events-none absolute inset-0 
                                          bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/15 
                                          opacity-60 mix-blend-screen" />

                          {/* Shimmer effect on hover */}
                          <div className="pointer-events-none absolute inset-0 
                                          bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                          -translate-x-full group-hover:translate-x-full 
                                          transition-transform duration-1000 ease-in-out" />

                          {/* Image */}
                          <img
                            src={service.image}
                            alt={service.label}
                            className="w-full h-full object-cover 
                                       scale-[1.02] 
                                       group-hover:scale-[1.06] sm:group-hover:scale-[1.08] 
                                       transition-transform duration-700 ease-out"
                            loading="lazy"
                          />

                          {/* Pill badge */}
                          <div
                            className="absolute 
                                       bottom-2 left-2 
                                       sm:bottom-3 sm:left-3 
                                       md:bottom-4 md:left-4 
                                       px-2 py-0.5 
                                       sm:px-2.5 sm:py-1 
                                       md:px-3 md:py-1 
                                       text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.65rem] 
                                       font-semibold rounded-full
                                       bg-black/70 text-cyan-100 uppercase 
                                       tracking-[0.18em] sm:tracking-[0.22em]
                                       border border-cyan-400/30 backdrop-blur-md
                                       translate-y-1 group-hover:translate-y-0 
                                       opacity-80 group-hover:opacity-100
                                       transition-all duration-500"
                          >
                            {service.pill}
                          </div>

                          {/* Number badge */}
                          <div className="absolute 
                                          top-2 right-2 
                                          sm:top-3 sm:right-3 
                                          md:top-4 md:right-4 
                                          text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.65rem] 
                                          font-bold text-cyan-100/90 
                                          bg-black/60 border border-cyan-500/30 
                                          rounded-full 
                                          px-2 py-0.5 sm:px-2.5 sm:py-1 
                                          backdrop-blur-sm
                                          group-hover:border-cyan-400/50
                                          transition-all duration-300">
                            {service.id}
                          </div>
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