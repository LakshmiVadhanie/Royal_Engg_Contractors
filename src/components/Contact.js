"use client";

import { useState } from "react";
import { companyInfo } from "@/data/content";
import { useReveal } from "./useReveal";

export default function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;
    const subject = `Inquiry from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
    window.location.href = `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ padding: "120px 0 140px", background: "var(--bg-warm)" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>

          <div className="section-label"><span className="eyebrow">Contact Us</span></div>

          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)", marginBottom: "72px", maxWidth: "16ch" }}>
            Let's start your <em style={{ color: "var(--gold)", fontStyle: "italic" }}>next project</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "80px", alignItems: "start" }}>

            {/* Left */}
            <div>
              <p style={{ color: "var(--text-body)", fontSize: "1.15rem", lineHeight: 1.85, marginBottom: "56px", maxWidth: "42ch" }}>
                Ready to discuss your industrial blasting and painting needs? Reach out for a detailed consultation and competitive quote.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                {[
                  { label: "Phone", value: companyInfo.phone, sub: "Mon–Sat, 9am–6pm IST", href: "tel:+919913046850",
                    icon: <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
                  { label: "Email", value: companyInfo.email, sub: "Response within 24 hours", href: `mailto:${companyInfo.email}`,
                    icon: <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                  { label: "Office", value: companyInfo.address, sub: "Surat, Gujarat, India", href: null,
                    icon: <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                ].map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div className="contact-icon">{d.icon}</div>
                    <div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>{d.label}</p>
                      {d.href ? (
                        <a href={d.href} style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--text-primary)", textDecoration: "none", transition: "color 0.3s" }}
                          onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                          onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                        >{d.value}</a>
                      ) : (
                        <p style={{ fontSize: "1.05rem", color: "var(--text-body)", lineHeight: 1.6 }}>{d.value}</p>
                      )}
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px", opacity: 0.6 }}>{d.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: "48px 44px", borderRadius: "6px", boxShadow: "0 8px 32px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 300, color: "var(--text-primary)", marginBottom: "6px" }}>Send a message</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "36px" }}>We'll respond within 24 hours.</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>Your Name *</label>
                  <input name="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-input" placeholder="John Doe" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="form-input" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="form-input" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>Project Details *</label>
                  <textarea name="message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="form-input" style={{ resize: "none" }} placeholder="Tell us about your project - scope, location, timeline..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", textAlign: "center" }}>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
