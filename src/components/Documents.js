"use client";

import { useReveal } from "./useReveal";

// ─── PTR data ────────────────────────────────────────────────────────────────

const trackRecords = [
  { sn: 1, description: "Blasting & Painting for LINDE", location: "RIL Jamnagar", client: "LINDE Engineering India Pvt. Ltd.", scope: "Grit Blasting & Industrial Painting" },
  { sn: 2, description: "Grit Blasting & Painting, DTA Steam Super Heater", location: "RIL Jamnagar", client: "Bilfinger Neo Structo Ltd / Heaurty Petrochem", scope: "Grit Blasting & Painting" },
  { sn: 3, description: "HP Washing & Painting, HRSG Project", location: "DGEN-Doozan, Dahej", client: "DGEN-Doozan", scope: "HP Washing & Multi-coat Painting" },
  { sn: 4, description: "Blasting & Painting for Air Products", location: "NSCPL Shop, Wada", client: "Air Products Ltd", scope: "Blasting & Painting" },
  { sn: 5, description: "Blasting & Painting, PEMEX Regenerator Module", location: "NSCPL Shop", client: "JNK India Ltd", scope: "Blasting & Painting" },
  { sn: 6, description: "Blasting & Painting for Technicas Reunitas (TR)", location: "NSCPL Shop", client: "Technicas Reunitas", scope: "Surface Preparation & Painting" },
  { sn: 7, description: "Blasting & Painting, Regenerator Vessel", location: "NSCPL Shop, Mumbai", client: "ZEECO", scope: "Blasting & Painting" },
  { sn: 8, description: "Blasting & Painting, Tubular Conveyor System", location: "Adani Petronet Ltd, Dahej", client: "NSCPL / Adani Petronet", scope: "Blasting & Painting" },
  { sn: 9, description: "Blasting & Painting, DCU Project at MRPL", location: "Mangalore", client: "BNSCL / TOYYO Engineering", scope: "Blasting & Painting" },
  { sn: 10, description: "Blasting & Erection Painting for BNSCPL", location: "RIL Silvassa", client: "BNSCPL / RIL", scope: "Blasting & Erection Painting" },
  { sn: 11, description: "Blasting & Erection Painting", location: "ONGC, Mangalore", client: "ONGC", scope: "Blasting & Erection Painting" },
  { sn: 12, description: "Painting Equipment Services", location: "NSCPL Shop", client: "Technip India Ltd", scope: "Painting Services" },
  { sn: 13, description: "Slag Blasting & 4-coat Paint Application on Steel Piles", location: "Adani Petronet Ltd, Dahej", client: "Bilfinger Neo Structo Constructions Ltd", scope: "Slag Blasting & Multi-coat Painting" },
  { sn: 14, description: "Blasting & Painting for Conveyor Job", location: "Adani Murmugao Port Terminal, Goa", client: "Bilfinger Neo Structo Constructions Ltd", scope: "Blasting & Painting" },
  { sn: 15, description: "Blasting & Painting for Material Handling System", location: "Adani Power Dahej Ltd, Dahej", client: "Adani Power Dahej Ltd", scope: "Blasting & Paint Application" },
  { sn: 16, description: "Blasting & Painting, STAG Project", location: "NSCPL Shop, Surat", client: "L&T / Barmer", scope: "Blasting & Painting" },
];

const majorClients = [
  "LINDE Engineering India Pvt. Ltd.",
  "Reliance Industries Ltd (RIL)",
  "Bilfinger Neo Structo Constructions Ltd",
  "Adani Petronet Ltd",
  "ONGC",
  "Technicas Reunitas (TR)",
  "ZEECO",
  "TOYYO Engineering",
  "Air Products Ltd",
  "JNK India Ltd",
  "Technip India Ltd",
  "L&T (Barmer)",
  "DGEN-Doozan",
  "Adani Power Dahej Ltd",
  "Adani Murmugao Port Terminal Pvt Ltd",
];

// ─── PTR Section ─────────────────────────────────────────────────────────────

function PTRSection() {
  const [ref, visible] = useReveal();
  const [ref2, visible2] = useReveal();

  const colStyle = (extra = {}) => ({
    fontFamily: "var(--font-sans)",
    fontSize: "0.75rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: "var(--gold)",
    ...extra,
  });

  return (
    <section
      id="ptr"
      className="relative overflow-hidden"
      style={{ padding: "120px 0 140px", background: "var(--bg)" }}
    >
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

        {/* ── Track Records table ── */}
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="section-label" style={{ marginBottom: "12px" }}>
            <span className="eyebrow">Track Record</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)" }}>
              Contracts <em style={{ color: "var(--gold)", fontStyle: "italic" }}>executed</em> by REC
            </h2>
          </div>

          {/* Table */}
          <div style={{ border: "1px solid var(--border)", overflow: "hidden", borderRadius: "4px" }}>
            {/* Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "48px 2fr 2fr 1.5fr 1.5fr",
              background: "rgba(184,134,11,0.06)",
              padding: "14px 24px",
              borderBottom: "1px solid var(--border)",
              gap: "16px",
            }}>
              <span style={colStyle()}>S.No</span>
              <span style={colStyle()}>Description of Work</span>
              <span style={colStyle()}>Client</span>
              <span style={colStyle()}>Location</span>
              <span style={colStyle()}>Scope</span>
            </div>

            {/* Rows */}
            {trackRecords.map((record, i) => (
              <div
                key={record.sn}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 2fr 2fr 1.5fr 1.5fr",
                  padding: "18px 24px",
                  gap: "16px",
                  borderBottom: i < trackRecords.length - 1 ? "1px solid var(--border)" : "none",
                  background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg)",
                  transition: "background 0.3s",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(184,134,11,0.04)"}
                onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? "var(--bg-card)" : "var(--bg)"}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--gold)" }}>
                  {String(record.sn).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.4 }}>
                  {record.description}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--text-body)", lineHeight: 1.4 }}>
                  {record.client}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  {record.location}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-muted)", opacity: 0.75 }}>
                  {record.scope}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Major Clients ── */}
        <div ref={ref2} className={`reveal ${visible2 ? "visible" : ""}`} style={{ marginTop: "96px" }}>
          <div className="section-label" style={{ marginBottom: "12px" }}>
            <span className="eyebrow">Major Clients</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)", marginBottom: "48px" }}>
            Trusted by <em style={{ color: "var(--gold)", fontStyle: "italic" }}>industry leaders</em>
          </h2>

          <div style={{ border: "1px solid var(--border)", overflow: "hidden", borderRadius: "4px" }}>
            {/* Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr",
              background: "rgba(184,134,11,0.06)",
              padding: "14px 24px",
              borderBottom: "1px solid var(--border)",
              gap: "16px",
            }}>
              <span style={colStyle()}>#</span>
              <span style={colStyle()}>Organisation</span>
            </div>

            {/* Client rows - 2 columns of equal halves */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {majorClients.map((client, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    padding: "16px 24px",
                    gap: "16px",
                    borderBottom: i < majorClients.length - (majorClients.length % 2 === 0 ? 2 : 1) ? "1px solid var(--border)" : "none",
                    borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                    background: Math.floor(i / 2) % 2 === 0 ? "var(--bg-card)" : "var(--bg)",
                    transition: "background 0.3s",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(184,134,11,0.04)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = Math.floor(i / 2) % 2 === 0 ? "var(--bg-card)" : "var(--bg)"}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--gold)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--text-primary)" }}>
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}

// ─── Safety PDF Section ───────────────────────────────────────────────────────

function SafetySection() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="safety"
      className="relative overflow-hidden"
      style={{ padding: "120px 0 140px", background: "var(--bg)" }}
    >
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>

          {/* Header */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "56px" }}>
            <div>
              <div className="section-label"><span className="eyebrow">HSE Compliance</span></div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, color: "var(--text-primary)" }}>
                Safety <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Policy</em>
              </h2>
            </div>
          </div>

          {/* Safety Policy Content Container */}
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "64px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.1)",
          }}>
            <h3 style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--gold)",
              textAlign: "center",
              letterSpacing: "0.05em",
              marginBottom: "48px",
              textTransform: "uppercase"
            }}>
              "BE PREEMPTIVE TO BE PREVENTIVE"
            </h3>

            <div style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: "var(--text-primary)",
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              <p><strong>Safety shall have the prime importance with priority over all other activities.</strong></p>
              
              <p>Our vision shall be to maintain zero accident with maximum productivity.</p>
              
              <p>It is the policy of Royal Engineering Contractors to create a work environment free of all hazards in order to protect the health and welfare of all the employees and also Client’s staff and property to achieve our vision.</p>
              
              <p>Royal Engineering Contractors is committed to the belief that all accidents are preventable and should be prevented.</p>

              <h4 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                textAlign: "center",
                marginTop: "32px",
                marginBottom: "16px"
              }}>
                To achieve the above, we ensure the following
              </h4>

              <ul style={{
                listStyleType: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px"
              }}>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>All our employees entering the work spot shall be pre-trained to work safely.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>Every job shall be assessed for the risk involvement, preventives and safety planned and the work be carried out as per procedure / checklist / work permit / tagging system for working, using all the protective procedures and gears.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>Maintain proper ventilation, illumination while executing the jobs in confined environments.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>We believe that a proper housekeeping is the foremost need for all safety measures and ensure to have a clean ambience throughout our work.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>REC holds the rehabilitation of sick employees and takes care in their health.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>REC preplans the safety of work & workmen by verifying the last job of the employees working in our site, show the worker around work area, point out the hazards if any, monitor their personal safety and health, make them participate in all safety programs conducted in the work site.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>Tool-box meeting shall be conducted on a weekly basis.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>In the continuous effort to promote safety, REC recognizes, rewards its employees who regularly demonstrate positive safety behaviors and also the safety of those around him.</span>
                </li>
                <li style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "var(--gold)", fontWeight: "bold" }}>-</span>
                  <span>This entire safety process shall be ensured and shall not be diluted by anyone at any stage.</span>
                </li>
              </ul>
            </div>

            {/* Safety Image Gallery */}
            <div style={{ marginTop: "80px" }}>
              {/* Top Row - 3 Images */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "24px"
              }}>
                <img src="/images/safety-2.jpg" alt="Safety Appreciation" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
                <img src="/images/safety-3.jpg" alt="Safety Appreciation" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
                <img src="/images/safety-4.jpg" alt="Safety Appreciation" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "4px" }} />
              </div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textAlign: "center",
                marginBottom: "64px"
              }}>
                OUR STAFFS RECEIVING SAFETY APPRECIATION ON THE OCCASION OF SAFETY DAY @ ADANI, GOA
              </p>

              {/* Bottom Row - 1 Image */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
                <img src="/images/safety-5.jpg" alt="Safety Quiz Winner" style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "4px" }} />
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  maxWidth: "400px"
                }}>
                  Our staff receiving safety appreciation for quiz competition on national safety day @ DGEN-DOOZAN POWER, DAHEJ
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function Documents() {
  return (
    <>
      <PTRSection />
      <SafetySection />
    </>
  );
}
