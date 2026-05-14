"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, categories } from "@/data/content";
import { useReveal } from "./useReveal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, visible] = useReveal();

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden" style={{ padding: "120px 0 140px", background: "var(--bg)" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>

          <div className="section-label"><span className="eyebrow">Our Work</span></div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "52px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)" }}>
              Featured <em style={{ color: "var(--gold)", fontStyle: "italic" }}>work</em>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "40ch" }}>
              A curated selection across refineries, power plants, ports, and industrial facilities.
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "48px" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600,
                padding: "10px 22px", border: "1.5px solid", borderRadius: "3px", cursor: "pointer", transition: "all 0.3s",
                borderColor: activeCategory === cat ? "var(--gold)" : "var(--border)",
                background: activeCategory === cat ? "var(--gold)" : "transparent",
                color: activeCategory === cat ? "#fff" : "var(--text-muted)",
              }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2px", background: "var(--border)" }}>
            {filtered.map((project, i) => (
              <div key={project.id} className="project-card" style={{ cursor: "pointer" }} onClick={() => setSelectedProject(project)}>
                <div style={{ position: "relative", background: "#111", overflow: "hidden", height: "280px" }}>
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,23,20,0) 50%, rgba(26,23,20,0.65) 100%)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "var(--gold)", color: "#fff", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "2px" }}>
                    {project.category}
                  </div>
                  <div style={{ position: "absolute", top: "14px", right: "14px", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.45rem", fontWeight: 400, color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.25 }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg style={{ width: "13px", height: "13px", color: "var(--gold)", flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)" }}>{project.location}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "4px", opacity: 0.7 }}>{project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(26,23,20,0.85)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "6px", maxWidth: "680px", width: "100%", maxHeight: "90vh", overflow: "auto" }}>
            <div style={{ position: "relative", background: "#111", overflow: "hidden", height: "420px" }}>
              <Image src={selectedProject.image} alt={selectedProject.title} fill style={{ objectFit: "cover" }} />
              <button onClick={() => setSelectedProject(null)} style={{ position: "absolute", top: "14px", right: "14px", width: "36px", height: "36px", background: "rgba(26,23,20,0.6)", border: "none", borderRadius: "50%", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem" }}>✕</button>
            </div>
            <div style={{ padding: "36px 40px" }}>
              <div style={{ display: "inline-block", background: "var(--gold)", color: "#fff", fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "2px", marginBottom: "20px" }}>
                {selectedProject.category}
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 300, color: "var(--text-primary)", marginBottom: "8px" }}>{selectedProject.title}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--gold)", marginBottom: "20px" }}>{selectedProject.location}</p>
              <p style={{ color: "var(--text-body)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "24px" }}>{selectedProject.description}</p>
              <div style={{ paddingTop: "20px", borderTop: "1px solid var(--border)", display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>Client</span>
                <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "1rem" }}>{selectedProject.client}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
