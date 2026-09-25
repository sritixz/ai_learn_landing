export default function FinalCTA({ onOpenDemo, scrollToSection }) {
  return (
    <section style={{
      background: "radial-gradient(ellipse at 50% 50%, #0A1936 0%, #040D21 75%)",
      color: "#F0F6FC", padding: "120px 0 130px", textAlign: "center",
      borderBottom: "1px solid #30363D",
      position: "relative"
    }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{
          display: "inline-block", background: "rgba(56, 139, 253, 0.12)",
          border: "1px solid rgba(56, 139, 253, 0.3)",
          color: "#388BFD", padding: "6px 18px", borderRadius: 999,
          fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em",
          marginBottom: 24, fontFamily: "ui-monospace, monospace"
        }}>
          TRANSFORM YOUR WORKFORCE
        </div>

        <h2 style={{
          fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 900,
          lineHeight: 1.15, letterSpacing: "-.03em", marginBottom: 24, color: "#F0F6FC"
        }}>
          Your teams are already using AI. The question is whether they are using it systematically, safely, and at scale.
        </h2>

        <p style={{
          fontSize: 18.5, color: "#8B949E", maxWidth: 740,
          margin: "0 auto 48px", lineHeight: 1.65, fontWeight: 400
        }}>
          Build an AI-ready workforce with role-based learning, 50+ practical tools, real business projects, AI agents, and workflow automation.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 36, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo("Final CTA Booking")}
            style={{
              background: "#238636", color: "#FFFFFF", border: "1px solid rgba(240, 246, 252, 0.1)",
              padding: "18px 40px", borderRadius: 10, fontWeight: 700,
              fontSize: 15.5, cursor: "pointer", boxShadow: "0 4px 16px rgba(35, 134, 54, 0.35)",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Book a 30-Minute Enterprise Consultation
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(22, 27, 34, 0.8)", color: "#F0F6FC", border: "1px solid #30363D",
              padding: "18px 36px", borderRadius: 10, fontWeight: 600,
              fontSize: 15.5, cursor: "pointer", transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#8B949E"; e.currentTarget.style.background = "#21262D"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; e.currentTarget.style.background = "rgba(22, 27, 34, 0.8)"; }}
          >
            Explore Curriculum ↓
          </button>
        </div>

        <p style={{ fontSize: 13.5, color: "#6E7681", fontStyle: "italic", maxWidth: 640, margin: "0 auto" }}>
          Share your employee count, key departments, and AI goals. We will recommend a program structure and sample learning path for your organization.
        </p>

      </div>
    </section>
  );
}

