"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "./useReveal";

const galleryItems = [
  {
    src: "/images/gallery-machineries.jpg",
    title: "Our Machineries",
    caption: "Fleet Overview",
  },
  {
    src: "/images/gallery-blaster-ppe.jpg",
    title: "Blaster with PPE for Grit Blasting",
    caption: "Safety & Equipment",
  },
  {
    src: "/images/gallery-ongc-mangalore.jpg",
    title: "Blasting & Erection Painting",
    caption: "ONGC, Mangalore",
  },
  {
    src: "/images/gallery-bnscpl-silvassa.jpg",
    title: "Blasting & Erection Painting for BNSCPL",
    caption: "RIL Silvassa",
  },
  {
    src: "/images/gallery-zeeco-mumbai.jpg",
    title: "Blasting & Painting - Regenerator Vessel",
    caption: "NSCPL Shop-ZEECO, Mumbai",
  },
  {
    src: "/images/gallery-toyyo-mrpl.jpg",
    title: "Blasting & Painting - DCU Project",
    caption: "BNSCL-TOYYO Engg., MRPL Mangalore",
  },
  {
    src: "/images/gallery-jnk-pemex.jpg",
    title: "Blasting & Painting for JNK India Ltd-PEMEX",
    caption: "NSCPL Shop",
  },
  {
    src: "/images/gallery-tubular-conveyor.jpg",
    title: "Blasting & Painting - Tubular Conveyor System",
    caption: "NSCPL-Adani Petronet, Dahej",
  },
  {
    src: "/images/gallery-air-products.jpg",
    title: "Blasting & Painting for Air Products Ltd",
    caption: "NSCPL Shop, Wada",
  },
  {
    src: "/images/gallery-tr-hpcl-barmer.jpg",
    title: "Blasting & Painting for TECHNICAS REUNITAS (TR)",
    caption: "HPCL Barmer, Rajasthan",
  },
  {
    src: "/images/gallery-tr-nscpl.jpg",
    title: "Blasting & Painting for TECHNICAS REUNITAS (TR)",
    caption: "NSCPL Shop",
  },
  {
    src: "/images/gallery-hrsg-1.jpg",
    title: "H.P Washing & Painting - HRSG Project",
    caption: "DGEN-Doozan, Dahej",
  },
  {
    src: "/images/gallery-hrsg-2.jpg",
    title: "H.P Washing & Painting - HRSG Project",
    caption: "DGEN-Doozan, Dahej",
  },
  {
    src: "/images/gallery-hrsg-3.jpg",
    title: "HP Washing & Painting - HRSG Project",
    caption: "DGEN-Doozan, Dahej",
  },
  {
    src: "/images/gallery-dgen-painting.jpg",
    title: "Painting Operations",
    caption: "DGEN-Doozan, Dahej",
  },
  {
    src: "/images/gallery-technip-equipment.jpg",
    title: "Painting Equipments",
    caption: "NSCPL Shop - Technip India Ltd",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [ref, visible] = useReveal();

  return (
    <section
      id="gallery"
      className="relative overflow-hidden"
      style={{ padding: "120px 0 140px", background: "var(--bg-warm)" }}
    >
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Header */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px 56px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <div className="section-label"><span className="eyebrow">Facilities & Field Work</span></div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)" }}>
                Operational <em style={{ color: "var(--gold)", fontStyle: "italic" }}>gallery</em>
              </h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "38ch", lineHeight: 1.75 }}>
              A visual record of our field operations, equipment deployments, and project executions across India.
            </p>
          </div>
        </div>
      </div>

      {/* Static masonry grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            columns: "3 340px",
            columnGap: "10px",
          }}
        >
          {galleryItems.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img)}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "3px",
                marginBottom: "10px",
                breakInside: "avoid",
                background: "#111",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("img").style.transform = "scale(1.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("img").style.transform = "scale(1)";
              }}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.7s ease",
                }}
              />

              {/* Text overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(26,23,20,0) 30%, rgba(26,23,20,0.88) 100%)",
                  opacity: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                }}
              >
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "#fff", lineHeight: 1.3, marginBottom: "4px" }}>
                  {img.title}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#d4a853" }}>
                  {img.caption}
                </p>
              </div>

              {/* Persistent index badge */}
              <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.5)",
                background: "rgba(26,23,20,0.5)",
                padding: "3px 8px",
                borderRadius: "2px",
                backdropFilter: "blur(4px)",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(26,23,20,0.96)",
            backdropFilter: "blur(24px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "32px",
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "1000px", width: "100%" }}>
            <button
              onClick={() => setLightbox(null)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)",
                fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase",
                marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px",
              }}
            >
              ← Close
            </button>

            <div style={{ position: "relative", width: "100%", maxHeight: "72vh", display: "flex", justifyContent: "center", borderRadius: "4px", overflow: "hidden" }}>
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                width={1200}
                height={900}
                style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "72vh", objectFit: "contain", display: "block", borderRadius: "4px" }}
              />
            </div>

            <div style={{ marginTop: "24px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 300, color: "#fff", lineHeight: 1.2 }}>
                  {lightbox.title}
                </p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#d4a853", marginTop: "6px" }}>
                  {lightbox.caption}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  flexShrink: 0, width: "40px", height: "40px",
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%", color: "#fff", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
