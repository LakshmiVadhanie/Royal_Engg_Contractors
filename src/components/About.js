"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/data/content";
import Counter from "./Counter";
import { useReveal } from "./useReveal";

export default function About() {
  const [ref, visible] = useReveal();
  const [teamRef, teamVisible] = useReveal();
  const [equipRef, equipVisible] = useReveal();

  return (
    <section id="about" className="relative overflow-hidden" style={{ padding: "120px 0 140px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label">
            <span className="eyebrow">About Us</span>
          </div>

          {/* Word-by-word Animated Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "64px",
            }}
          >
            {["Building", "trust", "through"].map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-[0.28em]"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.em
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{ color: "var(--gold)", fontStyle: "italic" }}
            >
              quality work
            </motion.em>
          </motion.h2>

          {/* 2-col Layout */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "80px", alignItems: "start" }}>
            {/* Left: text */}
            <div>
              <p style={{ color: "var(--text-body)", fontSize: "1.2rem", lineHeight: 1.85, marginBottom: "28px" }}>
                {companyInfo.description}
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.85, marginBottom: "40px" }}>
                We execute jobs of blasting using{" "}
                <span style={{ color: "var(--gold)", fontWeight: 600 }}>Steel Grit, Quartz, and Slag</span>{" "}
                as abrasives, alongside conventional spray painting and positional painting
                for silos, conveyor systems, and more.
              </p>

              {/* Quality points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {companyInfo.qualityPolicy.slice(0, 3).map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", paddingBottom: "18px", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--gold)", marginTop: "2px", letterSpacing: "0.1em", flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ color: "var(--text-body)", fontSize: "1.08rem", lineHeight: 1.7 }}>{p}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "40px" }}>
                <a href="#contact" className="btn-primary">Work With Us</a>
              </div>
            </div>

            {/* Right: stats with Premium Unobstructed Video Showcase */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[rgba(184,134,11,0.2)] bg-black flex flex-col justify-between min-h-[460px]">
              {/* Looping background video running crystal clear across the entire card */}
              <video
                src="/videos/about-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Extremely subtle protective shading layer to ensure optimal text shadow contrast while leaving the video 100% visible and vivid */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Unobstructed top spacer area allowing the live video animation to shine prominently */}
              <div className="relative z-10 p-5 md:p-6 flex justify-end">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[0.65rem] font-bold tracking-widest text-[#D4A853] uppercase border border-[#D4A853]/30">
                  Live Action
                </span>
              </div>

              {/* Stats Grid layered completely transparently over the video */}
              <motion.div
                initial={{ opacity: 0.01, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 grid grid-cols-2 gap-2 p-2 md:p-4 mt-auto"
              >
                {companyInfo.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 md:p-6 text-center bg-transparent"
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)",
                        fontWeight: 500,
                        color: "#D4A853",
                        lineHeight: 1,
                        textShadow: "0 2px 16px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        marginTop: "8px",
                        fontWeight: 800,
                        textShadow: "0 2px 10px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.8)",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Bottom ISO standards banner */}
              <div className="relative z-10 mt-[1px] p-5 md:p-6 bg-[#1a1714]/95 border-t border-[rgba(184,134,11,0.2)] backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-float" />
                  <span className="eyebrow" style={{ color: "#d4a853", fontSize: "0.68rem" }}>ISO Quality Standards</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  Committed to excellence in every project — on time, on budget, every time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ——— TEAM & EQUIPMENT ——— */}
        <div style={{ marginTop: "120px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "48px" }}>
          {/* Team */}
          <div ref={teamRef} className={`reveal ${teamVisible ? "visible" : ""}`}>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              <span className="eyebrow">Our Team</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)", marginBottom: "36px" }}>
              The people behind{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>every project</em>
            </h3>

            <div style={{ border: "1px solid var(--border)", overflow: "hidden", borderRadius: "4px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.7fr", background: "rgba(184,134,11,0.06)", padding: "14px 24px", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--gold)" }}>Name</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--gold)" }}>Designation</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--gold)", textAlign: "right" }}>Experience</span>
              </div>
              {companyInfo.team.map((m, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 0.7fr", padding: "18px 24px",
                  borderBottom: i < companyInfo.team.length - 1 ? "1px solid var(--border)" : "none",
                  background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg)",
                  transition: "background 0.3s",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(184,134,11,0.04)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? "var(--bg-card)" : "var(--bg)"}
                >
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--text-primary)" }}>{m.name}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--text-muted)" }}>{m.designation}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "var(--gold)", textAlign: "right" }}>{m.experience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div ref={equipRef} className={`reveal ${equipVisible ? "visible" : ""}`}>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              <span className="eyebrow">Equipment</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)", marginBottom: "36px" }}>
              Our <em style={{ color: "var(--gold)", fontStyle: "italic" }}>machinery</em> fleet
            </h3>

            <div style={{ border: "1px solid var(--border)", overflow: "hidden", borderRadius: "4px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", background: "rgba(184,134,11,0.06)", padding: "14px 24px", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--gold)" }}>Description</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700, color: "var(--gold)", textAlign: "right" }}>Qty</span>
              </div>
              {companyInfo.equipment.map((item, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "2fr 1fr", padding: "18px 24px",
                  borderBottom: i < companyInfo.equipment.length - 1 ? "1px solid var(--border)" : "none",
                  background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg)",
                  transition: "background 0.3s",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(184,134,11,0.04)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? "var(--bg-card)" : "var(--bg)"}
                >
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--text-primary)" }}>{item.description}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--gold)", textAlign: "right" }}>{item.qty}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "24px", padding: "20px 24px", background: "rgba(184,134,11,0.04)", border: "1px solid var(--border-gold)", borderRadius: "4px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", animation: "float 2s ease-in-out infinite" }} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--text-muted)" }}>
                <span style={{ color: "var(--gold)", fontWeight: 600 }}>33+ units</span> of blasting & painting equipment ready for deployment across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
