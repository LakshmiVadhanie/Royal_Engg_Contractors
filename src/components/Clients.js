"use client";

import { useReveal } from "./useReveal";

const clients = [
  { name: "LINDE", tag: "Industrial Gas" },
  { name: "RIL Jamnagar", tag: "Refinery" },
  { name: "Bilfinger Neo Structo", tag: "Engineering" },
  { name: "Adani Petronet", tag: "Infrastructure" },
  { name: "ONGC", tag: "Oil & Gas" },
  { name: "Technicas Reunitas", tag: "International" },
  { name: "ZEECO", tag: "Industrial" },
  { name: "TOYYO Engineering", tag: "Energy" },
  { name: "Air Products", tag: "Industrial Gas" },
  { name: "JNK India", tag: "Process" },
  { name: "Technip India", tag: "Engineering" },
  { name: "L&T Barmer", tag: "Infrastructure" },
];

export default function Clients() {
  const [ref, visible] = useReveal();

  return (
    <section className="relative overflow-hidden" style={{ padding: "60px 0 40px", background: "var(--bg)" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px 52px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "12px" }}>
              <div style={{ width: "36px", height: "1px", background: "var(--gold)" }} />
              <span className="eyebrow">Trusted By Industry Leaders</span>
              <div style={{ width: "36px", height: "1px", background: "var(--gold)" }} />
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "50ch", margin: "0 auto" }}>
              Proudly serving India's top refineries, energy giants, and infrastructure companies since 2010.
            </p>
          </div>
        </div>
      </div>

      {/* Row 1 */}
      <div className="marquee-fade" style={{ marginBottom: "12px" }}>
        <div className="auto-slide" style={{ display: "flex", gap: "12px", width: "fit-content" }}>
          {[...clients, ...clients].map((c, i) => (
            <div key={`c1-${i}`} style={{
              flexShrink: 0, display: "flex", alignItems: "center", gap: "12px", padding: "16px 24px",
              background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "4px",
              transition: "all 0.4s", cursor: "default",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-gold)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ width: "36px", height: "36px", flexShrink: 0, background: "rgba(184,134,11,0.06)", border: "1px solid var(--border-gold)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--gold)" }}>{c.name[0]}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", whiteSpace: "nowrap" }}>{c.name}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{c.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="marquee-fade">
        <div className="auto-slide-reverse" style={{ display: "flex", gap: "12px", width: "fit-content" }}>
          {[...clients.slice(5), ...clients.slice(0, 5), ...clients.slice(5), ...clients.slice(0, 5)].map((c, i) => (
            <div key={`c2-${i}`} style={{
              flexShrink: 0, display: "flex", alignItems: "center", gap: "12px", padding: "16px 24px",
              background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "4px",
              transition: "all 0.4s", cursor: "default",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div style={{ width: "36px", height: "36px", flexShrink: 0, background: "rgba(184,134,11,0.06)", border: "1px solid var(--border-gold)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--gold)" }}>{c.name[0]}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", whiteSpace: "nowrap" }}>{c.name}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{c.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
