import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const desktopLinkClass =
    "text-[0.7rem] sm:text-xs font-semibold tracking-[0.25em] uppercase text-cyan-200 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-sm";

  const mobileLinkClass =
    "block rounded-xl px-4 py-3 text-[0.75rem] font-semibold tracking-[0.3em] uppercase text-cyan-200 hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-400/50 shadow-[0_0_25px_rgba(34,211,238,0.4)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className="flex items-center group"
          >
            <span className="text-cyan-300 hover:text-cyan-100 text-lg sm:text-xl font-bold tracking-[0.35em] uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)] transition-all duration-300">
              Mindbridge Tech
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${desktopLinkClass} ${isActive ? "text-cyan-400" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="ml-4 rounded-full border-2 border-cyan-400/80 px-6 py-2 text-[0.7rem] sm:text-xs font-bold tracking-[0.35em] uppercase text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:bg-cyan-500/20 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] transition-all duration-300"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/20 focus:outline-none transition-all duration-200"
            type="button"
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 origin-center ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 origin-center ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-cyan-400/50 bg-black/95 backdrop-blur-md">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-2xl border-2 border-cyan-400/80 px-6 py-3 text-[0.8rem] font-bold tracking-[0.35em] uppercase text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:bg-cyan-500/30 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,1)] transition-all duration-300"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;