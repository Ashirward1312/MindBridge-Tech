export default function Footer() {
  const quickLinks = [
    "Portfolio",
    "Services",
    "Case Studies",
    "Blog",
    "3D Experiences",
    "Web Development",
  ];

  const services = [
    "Interactive 3D",
    "WebGL Development",
    "Brand Identity",
    "E-Commerce",
    "Enterprise Solutions",
  ];

  return (
    <footer className="relative w-full bg-gradient-to-t from-black via-gray-900/50 to-transparent border-t border-cyan-400/20 pt-20 pb-12 overflow-hidden">
      {/* Neon background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 left-20 h-72 w-72 rounded-full bg-purple-500/8 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-blue-500/6 blur-xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center">
                <span className="text-xl font-bold text-black">MB</span>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Mind Bridge Tech
                </h3>
                <p className="text-sm text-slate-400 mt-1 tracking-wide">
                  Digital Innovation Studio
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              We design and build high-performance websites, immersive digital
              experiences, and scalable technology solutions for modern
              businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-cyan-400 mb-6 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-cyan-400/50 rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-6 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-slate-400 text-sm hover:text-purple-400 transition hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-purple-400/50 rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-blue-400 mb-6 uppercase tracking-wide">
              Contact
            </h4>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <a
                href="mailto:mindbridgetech22122025@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  ✉
                </span>
                mindbridgetech22122025@gmail.com
              </a>

              {/* Phone 1 */}
              <a
                href="tel:+917470958844"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  📞
                </span>
                +91 74709 58844
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+918349738605"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  📱
                </span>
                +91 83497 38605
              </a>

              {/* Phone 3 */}
              <a
                href="tel:+917987109120"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  📱
                </span>
                +91 79871 09120
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan-400/10 pt-10 mt-16 text-center text-sm text-slate-400">
          © 2026 Mind Bridge Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
