export default function HeroSection({ onOpenDemo, scrollToSection }) {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#FAFAFA",
      borderBottom: "1px solid #E2E8F0",
      paddingTop: 80,
      paddingBottom: 40,
      boxSizing: "border-box"
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", width: "100%" }}>

        {/* Subtle Eyebrow Badge */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{
            background: "#EFF6FF", border: "1px solid #DBEAFE",
            color: "#1D4ED8", fontSize: 13, fontWeight: 700,
            padding: "6px 18px", borderRadius: 999, letterSpacing: ".02em",
            display: "inline-flex", alignItems: "center", gap: 8
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
            Enterprise Generative AI Upskilling
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(44px, 5.5vw, 64px)", fontWeight: 900,
          color: "#0F172A", textAlign: "center", lineHeight: 1.1,
          letterSpacing: "-.03em", maxWidth: 920, margin: "0 auto 20px"
        }}>
          Build an AI-Ready Workforce.
        </h1>

        {/* Subhead Line */}
        <p style={{
          fontSize: "clamp(20px, 2.2vw, 24px)", fontWeight: 700,
          textAlign: "center", maxWidth: 760, margin: "0 auto 18px",
          color: "#2563EB", lineHeight: 1.35
        }}>
          Turn Generative AI into measurable productivity across all teams.
        </p>

        {/* Main Body Paragraph */}
        <p style={{
          fontSize: 17, color: "#475569", textAlign: "center",
          maxWidth: 700, margin: "0 auto 36px", lineHeight: 1.6, fontWeight: 400
        }}>
          Role-based upskilling in prompt engineering, AI agents, and automation.
          <br />
          Empower your workforce by building real use cases with 50+ leading AI tools.
        </p>

        {/* Primary CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo()}
            style={{
              background: "#0F172A", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 10px 25px -5px rgba(15,23,42,0.25)",
              transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E293B"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0F172A"; e.currentTarget.style.transform = "none"; }}
          >
            Request Enterprise Demo
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "#FFFFFF", color: "#0F172A", border: "1.5px solid #CBD5E1",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
              transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0F172A"; e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#CBD5E1"; e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.transform = "none"; }}
          >
            Explore Curriculum ↓
          </button>
        </div>

      </div>
    </section>
  );
}
