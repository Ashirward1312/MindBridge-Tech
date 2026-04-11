import React, { useState } from "react";
import { ChevronDown, MessageSquare, Clock, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I initiate a project with Mindbridge Tech?",
    answer: "Starting a project is simple. You can reach out via our Contact page or click 'Launch Project'. We begin with an initial discovery session to align on your vision, target outcomes, and technical requirements before moving into the planning phase.",
    icon: MessageSquare,
  },
  {
    question: "How do you guarantee on-time project delivery?",
    answer: "We operate on a 'Sprint-First' mindset. By breaking complex builds into focused iterations and using automated quality checks, we eliminate bottlenecks early. You receive weekly progress updates and access to a real-time dashboard to track milestones.",
    icon: Clock,
  },
  {
    question: "What is your approach to post-launch support?",
    answer: "We don't just ship and leave. We provide comprehensive post-launch maintenance including security patches, performance monitoring, and scalability updates to ensure your platform grows as your user base does.",
    icon: ShieldCheck,
  },
  {
    question: "Do you specialize in specific industries?",
    answer: "While our engineering foundation is versatile, we have deep expertise in building premium systems for Healthcare (including Super-Speciality Hospitals), FinTech, and high-scale E-commerce platforms where reliability is non-negotiable.",
    icon: Sparkles,
  },
  {
    question: "How do you handle project security and data privacy?",
    answer: "Security is baked into our architecture, not added as an afterthought. We implement multi-layer authentication, end-to-end encryption, and follow OWASP best practices to ensure your digital assets are fully protected.",
    icon: ShieldCheck,
  },
];

function ChamferCard({ className = "", children }) {
  return (
    <div
      className={[
        "relative border border-cyan-400/20 bg-gradient-to-b from-slate-950/70 to-black/70",
        "shadow-[0_0_28px_rgba(34,211,238,0.12)]",
        "transition-all duration-300 overflow-hidden",
        className,
      ].join(" ")}
      style={{
        clipPath:
          "polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px))",
      }}
    >
      {/* corner ticks */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-cyan-400/30" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-purple-400/30" />
        <div className="absolute left-0 bottom-0 h-8 w-8 border-l border-b border-blue-400/30" />
        <div className="absolute right-0 bottom-0 h-8 w-8 border-r border-b border-cyan-400/30" />
      </div>

      {children}
    </div>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  const Icon = faq.icon;
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="group w-full flex flex-col transition-all duration-300"
      >
        <ChamferCard className={`w-full ${isOpen ? "border-cyan-400/40 shadow-[0_0_34px_rgba(34,211,238,0.20)]" : "hover:border-cyan-300/30"}`}>
          <div className="p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`p-2 border ${isOpen ? "border-cyan-400/40 bg-cyan-400/10" : "border-white/10 bg-white/5"} transition-colors`}>
                <Icon size={18} className={isOpen ? "text-cyan-300" : "text-slate-400"} />
              </div>
              <span className={`text-left text-sm font-bold uppercase tracking-wider ${isOpen ? "text-cyan-100" : "text-slate-300 group-hover:text-white"}`}>
                {faq.question}
              </span>
            </div>
            <ChevronDown 
              size={20} 
              className={`text-cyan-400/60 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} 
            />
          </div>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="px-5 pb-6 pt-0 ml-14">
              <div className="h-px w-full bg-gradient-to-r from-cyan-400/20 to-transparent mb-4" />
              <p className="text-sm leading-relaxed text-slate-400 font-medium">
                {faq.answer}
              </p>
            </div>
          </div>
        </ChamferCard>
      </button>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-20 bg-black">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.4em] text-cyan-300 mb-6 focus-glow">
            <HelpCircle size={14} />
            Support Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our process, delivery, and how we build high-performance digital systems.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-6">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-8 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-200 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
            style={{
              clipPath: "polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))"
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
