"use client";
import Image from "next/image";
import { companyInfo } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-dark)", position: "relative", overflow: "hidden" }}>
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, var(--gold-light), transparent)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 40px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "64px" }}>

          {/* Brand */}
          <div>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "24px" }}>
              <div style={{ width: "36px", height: "40px", position: "relative", flexShrink: 0 }}>
                <Image src="/logo.svg" alt="REC Logo" fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "#faf8f4", letterSpacing: "0.06em", lineHeight: 1.1 }}>Royal Engineering</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(250,248,244,0.4)" }}>Contractors</div>
              </div>
            </a>
            <p style={{ fontSize: "0.95rem", color: "rgba(250,248,244,0.55)", lineHeight: 1.75, marginBottom: "24px" }}>
              A partnership firm incorporated in 2010, delivering world-class industrial blasting and painting services across India.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-light)", animation: "float 3s ease-in-out infinite" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(250,248,244,0.35)" }}>Est. 2010 · Surat, Gujarat</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, color: "#faf8f4", marginBottom: "24px" }}>Navigation</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "About", "Services", "Projects", "Gallery", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">{l}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, color: "#faf8f4", marginBottom: "24px" }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Grit Blasting", "Industrial Painting", "Surface Preparation", "Marine & Offshore", "HP Washing", "Erection Painting"].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,168,83,0.4)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.92rem", color: "rgba(250,248,244,0.55)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, color: "#faf8f4", marginBottom: "24px" }}>Get In Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Phone", value: companyInfo.phone, href: "tel:+919913046850" },
                { label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
              ].map((d) => (
                <div key={d.label}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,248,244,0.3)", marginBottom: "4px" }}>{d.label}</p>
                  <a href={d.href} style={{ fontSize: "0.95rem", color: "#faf8f4", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#d4a853"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#faf8f4"}
                  >{d.value}</a>
                </div>
              ))}
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,248,244,0.3)", marginBottom: "4px" }}>Address</p>
                <p style={{ fontSize: "0.92rem", color: "rgba(250,248,244,0.55)", lineHeight: 1.65 }}>{companyInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(250,248,244,0.08)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(250,248,244,0.3)" }}>© {year} Royal Engineering Contractors. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "rgba(250,248,244,0.2)" }}>Industrial Blasting & Painting Excellence Since 2010</p>
        </div>
      </div>
    </footer>
  );
}
