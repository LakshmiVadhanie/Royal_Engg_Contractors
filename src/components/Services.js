"use client";

import { useState } from "react";
import { companyInfo } from "@/data/content";
import { useReveal } from "./useReveal";

const icons = {
  blast: (
    <svg viewBox="0 0 48 48" fill="none" style={{ width: "36px", height: "36px" }}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path d="M24 10V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 31V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 24H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 24H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.5 14.5L19.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28.5 28.5L33.5 33.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M33.5 14.5L28.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19.5 28.5L14.5 33.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  paint: (
    <svg viewBox="0 0 48 48" fill="none" style={{ width: "36px", height: "36px" }}>
      <rect x="14" y="14" width="20" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 24V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 24V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 36H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  surface: (
    <svg viewBox="0 0 48 48" fill="none" style={{ width: "36px", height: "36px" }}>
      <path d="M10 20 Q16 14 22 20 Q28 26 34 20 Q40 14 46 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 27 Q16 21 22 27 Q28 33 34 27 Q40 21 46 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  marine: (
    <svg viewBox="0 0 48 48" fill="none" style={{ width: "36px", height: "36px" }}>
      <circle cx="24" cy="17" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 21V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 27H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 43 Q14 39 20 43 Q26 47 32 43 Q38 39 44 43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
};

const serviceImages = [
  "/Royal_Engg_Contractors/images/gallery-blaster-ppe.jpg",
  "/Royal_Engg_Contractors/images/gallery-dgen-painting.jpg",
  "/Royal_Engg_Contractors/images/gallery-hrsg-1.jpg",
  "/Royal_Engg_Contractors/images/real-steel-piles-dahej.jpg",
];

export default function Services() {
  const [ref, visible] = useReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="relative overflow-hidden" style={{ padding: "120px 0 140px", background: "var(--bg-warm)" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>

          <div className="section-label">
            <span className="eyebrow">Our Services</span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em",
            color: "var(--text-primary)", marginBottom: "72px", maxWidth: "14ch",
          }}>
            What we <em style={{ color: "var(--gold)", fontStyle: "italic" }}>excel</em> at
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.services.map((service, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-xl border border-[rgba(212,168,83,0.15)] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-[rgba(212,168,83,0.4)]"
                style={{ background: "#100e0c", minHeight: "480px" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Full template background image layer filling the top and blending smoothly */}
                <div className="absolute inset-0 w-full h-[240px] overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${serviceImages[i]}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Smooth vertical gradient overlay to transition flawlessly into the dark lower background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#100e0c]/60 to-[#100e0c]" />
                </div>

                {/* Top content layer overlaying the blended image */}
                <div className="relative z-10 pt-[160px] p-8 flex flex-col flex-1 justify-between pointer-events-none">
                  <div className="pointer-events-auto">
                    {/* Golden icon wrapper */}
                    <div
                      className="inline-flex items-center justify-center p-3 rounded-lg mb-6 backdrop-blur-md bg-black/40 border border-[#D4A853]/30 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: "#D4A853" }}
                    >
                      {icons[service.icon]}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.75rem",
                        fontWeight: 400,
                        color: hovered === i ? "#D4A853" : "#ffffff",
                        marginBottom: "16px",
                        lineHeight: 1.2,
                        transition: "color 0.3s",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom subtle indicator line */}
                  <div className="w-full h-[1.5px] bg-gradient-to-r from-[#D4A853]/40 to-transparent mt-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
