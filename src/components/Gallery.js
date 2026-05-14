"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/content";
import { useReveal } from "./useReveal";

const galleryImages = projects.map((p) => ({ src: p.image, title: p.title, location: p.location, category: p.category }));
const row1 = galleryImages.slice(0, 8);
const row2 = galleryImages.slice(8).concat(galleryImages.slice(0, 5));

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [ref, visible] = useReveal();

  return (
    <section id="gallery" className="relative overflow-hidden" style={{ padding: "120px 0 140px", background: "var(--bg-warm)" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px 56px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <div className="section-label"><span className="eyebrow">Gallery</span></div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)" }}>
                Project <em style={{ color: "var(--gold)", fontStyle: "italic" }}>showcase</em>
              </h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "38ch", lineHeight: 1.75 }}>
              Browse completed projects across India. Hover to pause, click to enlarge.
            </p>
          </div>
        </div>
      </div>

      {/* Row 1 */}
      <div className="marquee-fade" style={{ marginBottom: "12px" }}>
        <div className="auto-slide" style={{ display: "flex", gap: "12px", width: "fit-content" }}>
          {[...row1, ...row1].map((img, i) => (
            <div key={`r1-${i}`} onClick={() => setLightbox(img)} style={{ position: "relative", width: "360px", height: "250px", flexShrink: 0, overflow: "hidden", cursor: "pointer", borderRadius: "4px" }}>
              <Image src={img.src} alt={img.title} fill className="object-cover" style={{ transition: "transform 0.7s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,23,20,0.05) 0%, rgba(26,23,20,0.75) 100%)" }} />
              <div style={{ position: "absolute", top: "12px", left: "12px", background: "var(--gold)", color: "#fff", fontFamily: "var(--font-sans)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "5px 10px", borderRadius: "2px" }}>{img.category}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#fff", lineHeight: 1.2, marginBottom: "4px" }}>{img.title}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#d4a853" }}>{img.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee-fade">
        <div className="auto-slide-reverse" style={{ display: "flex", gap: "12px", width: "fit-content" }}>
          {[...row2, ...row2].map((img, i) => (
            <div key={`r2-${i}`} onClick={() => setLightbox(img)} style={{ position: "relative", width: "320px", height: "210px", flexShrink: 0, overflow: "hidden", cursor: "pointer", borderRadius: "4px" }}>
              <Image src={img.src} alt={img.title} fill className="object-cover" style={{ transition: "transform 0.7s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(26,23,20,0.05) 0%, rgba(26,23,20,0.7) 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "#fff" }}>{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(26,23,20,0.95)", backdropFilter: "blur(24px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "1000px", width: "100%" }}>
            <button onClick={() => setLightbox(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>← Close</button>
            <div style={{ position: "relative", width: "100%", height: "68vh", borderRadius: "4px", overflow: "hidden" }}>
              <Image src={lightbox.src} alt={lightbox.title} fill className="object-contain" />
            </div>
            <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 300, color: "#fff" }}>{lightbox.title}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#d4a853", marginTop: "4px" }}>{lightbox.location}</p>
              </div>
              <div style={{ background: "var(--gold)", color: "#fff", fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", padding: "7px 16px", borderRadius: "2px" }}>{lightbox.category}</div>
            </div>
          </div>
        </div>
      )}

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
