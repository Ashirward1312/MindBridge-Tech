import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* subtle stars */}
        <div
          className="
            absolute inset-0 opacity-30
            bg-[radial-gradient(circle_at_1px_1px,#020617_1px,transparent_0)]
            [background-size:26px_26px]
          "
        />

        {/* top glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_60%)]" />

        {/* soft ambient glows */}
        <div className="absolute -left-32 -top-40 h-64 w-64 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-sky-700/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact Information
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            LET'S DISCUSS YOUR NEXT PROJECT
          </h2>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Reach out via call, WhatsApp, or email. You can also share your
            requirements using the form below.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* LEFT: CONTACT DETAILS */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-[1px]">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-slate-900/80 p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-50">
                DIRECT CONTACT
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                For business inquiries, project discussions, or consultations,
                feel free to connect directly.
              </p>

              <div className="mt-6 space-y-5 text-sm text-slate-200">
                {/* EMAIL */}
                <a
                  href="mailto:mindbridgetech22122025@gmail.com"
                  className="group flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 transition hover:border-cyan-400/70 hover:bg-slate-900/80"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                    ✉️
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                      Email
                    </p>
                    <p className="font-medium text-slate-100 group-hover:text-cyan-100">
                      mindbridgetech22122025@gmail.com
                    </p>
                  </div>
                </a>

                {/* PHONE 1 */}
                <a
                  href="tel:+917470958844"
                  className="group flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 transition hover:border-emerald-400/70 hover:bg-slate-900/80"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    📞
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                      Call / WhatsApp
                    </p>
                    <p className="font-medium text-slate-100 group-hover:text-emerald-100">
                      +91 74709 58844
                    </p>
                  </div>
                </a>

                {/* PHONE 2 */}
                <a
                  href="tel:+918349738605"
                  className="group flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 transition hover:border-sky-400/70 hover:bg-slate-900/80"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                    📱
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                      Alternate Contact
                    </p>
                    <p className="font-medium text-slate-100 group-hover:text-sky-100">
                      +91 83497 38605 / +91 79871 09120
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-[1px]">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-slate-900/80 p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-50">
                SEND US A MESSAGE
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Share a brief overview of your project. We will get back to you
                with the next steps.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:bg-slate-900/80 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:bg-slate-900/80 outline-none"
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder="Briefly describe your requirements, timeline, or budget."
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:bg-slate-900/80 outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg transition hover:text-white"
                >
                  Submit Inquiry
                </button>

                <p className="text-[0.65rem] text-slate-500">
                  This form is currently UI-only. Backend or email integration
                  can be added on request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
