import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, Smartphone, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "ERP & CRM Solutions",
    "Backend & APIs",
    "Custom Billing Software",
  ];

  return (
    <footer className="relative w-full bg-[#050508] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-32 left-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 items-start">
          
          {/* Brand & Mission */}
          <div className="space-y-8">
            <NavLink to="/" className="flex items-center gap-4 group">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="relative text-xl font-black text-white italic tracking-tighter">MB</span>
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                  Mindbridge<br/>
                  <span className="text-cyan-400">Tech</span>
                </h3>
              </div>
            </NavLink>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              We engineer high-performance digital foundations for ambitious businesses. Focused on clarity, precision, and digital excellence.
            </p>

            <div className="flex gap-4">
               <div className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
               <div className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
               <div className="h-1.5 w-1.5 bg-purple-500 rounded-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-10 pb-2 border-b border-white/10 w-fit">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="group flex items-center gap-3 text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-cyan-400 transition-all"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-10 pb-2 border-b border-white/10 w-fit">
              Expertise
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="group flex items-center gap-3 text-slate-400 text-[11px] font-bold uppercase tracking-widest cursor-default">
                  <div className="h-1 w-1 bg-white/20 group-hover:bg-purple-500 transition-colors" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Global Contact */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-10 pb-2 border-b border-white/10 w-fit">
              Connect
            </h4>
            <div className="space-y-6">
              <a href="mailto:mindbridgetech22122025@gmail.com" className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center border border-white/5 bg-white/5 group-hover:border-cyan-400/40 transition-colors text-slate-400 group-hover:text-cyan-400">
                  <Mail size={16} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors break-all tracking-wider">
                  MINDBRIDGETECH22122025@GMAIL.COM
                </div>
              </a>

              <a href="https://wa.me/917470958844" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center border border-white/5 bg-white/5 group-hover:border-emerald-400/40 transition-colors text-slate-400 group-hover:text-emerald-400">
                  <MessageCircle size={16} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors tracking-widest">
                  WHATSAPP: +91 74709 58844
                </div>
              </a>

              <a href="tel:+918349738605" className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center border border-white/5 bg-white/5 group-hover:border-blue-400/40 transition-colors text-slate-400 group-hover:text-blue-400">
                  <Smartphone size={16} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors tracking-widest">
                  CALL: +91 83497 38605
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* System Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            © 2026 MINDBRIDGE TECH // DESIGNED_FOR_SCALABILITY
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
             <span className="hover:text-cyan-400 cursor-pointer transition-colors">PRIVACY_POLICY</span>
             <span className="hover:text-purple-400 cursor-pointer transition-colors">TERMS_OF_SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
