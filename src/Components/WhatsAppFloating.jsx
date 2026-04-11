import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const phoneNumber = "917470958844";
  const message = "Hello! I would like to discuss a project with Mindbridge Tech.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Contact on WhatsApp"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse" />
      
      {/* Icon Container */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <MessageCircle size={32} fill="currentColor" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, -10px 50%)",
            backgroundColor: "#10b981",
            color: "white"
          }}
        >
          Chat with us
        </div>
      </div>
    </a>
  );
}
