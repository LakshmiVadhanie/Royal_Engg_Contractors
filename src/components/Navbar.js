"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "PTR", href: "#ptr", external: false },
  { label: "Safety Policy", href: "#safety", external: false },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 60);
      setProgress((y / docH) * 100);
      for (const link of [...navLinks].reverse()) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.offsetTop - 140 <= y) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.5s ease",
        background: scrolled ? "rgba(22,23,24,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}>
        {/* Progress */}
        <div style={{ position: "absolute", top: 0, left: 0, height: "2px", width: `${progress}%`, background: "var(--gold)", transition: "width 0.1s linear" }} />

        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>

          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ width: "42px", height: "42px", position: "relative", flexShrink: 0 }}>
              <Image src="/logo.svg" alt="REC Logo" fill style={{ objectFit: "contain" }} priority />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "1.3rem", fontWeight: 800, color: scrolled ? "var(--text-primary)" : "#ffffff", letterSpacing: "0.08em", lineHeight: 1.1, transition: "color 0.4s" }}>
                ROYAL
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.75)", transition: "color 0.4s" }}>
                Engineering Contractors
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: "36px" }}>
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  style={{
                    color: isActive ? "var(--gold)" : scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.85)",
                    fontWeight: scrolled ? 500 : 600,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <a href="tel:+919913046850" className="btn-primary" style={{ padding: "12px 28px", fontSize: "0.72rem" }}>
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: i === 1 ? "20px" : "26px", height: "1.5px",
                background: scrolled ? "var(--text-primary)" : "#ffffff",
                transition: "all 0.3s ease",
                transform: mobileOpen ? (i === 0 ? "rotate(45deg) translate(4px,4px)" : i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "scaleX(0)") : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 40,
        background: "rgba(22,23,24,0.98)", backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "12px",
        transition: "all 0.5s ease",
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? "auto" : "none",
      }}>
        {navLinks.map((link, i) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "var(--font-serif)", fontSize: "3rem", fontWeight: 400,
              color: active === link.href.replace("#", "") ? "var(--gold)" : "var(--text-primary)",
              textDecoration: "none", padding: "8px 0",
              transition: "all 0.3s ease",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 0.06}s`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
