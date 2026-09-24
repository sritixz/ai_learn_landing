export default function FinalCTA({ onOpenDemo, scrollToSection }) {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      color: "#FFFFFF", padding: "120px 0", textAlign: "center"
    }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{
          display: "inline-block", background: "rgba(255, 255, 255, 0.12)",
          color: "#93C5FD", padding: "6px 18px", borderRadius: 999,
          fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em",
          marginBottom: 24
        }}>
          Transform Your Workforce
        </div>

        <h2 style={{
          fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900,
          lineHeight: 1.15, letterSpacing: "-.03em", marginBottom: 24
        }}>
          Your teams are already using AI. The question is whether they are using it systematically, safely, and at scale.
        </h2>

        <p style={{
          fontSize: 20, color: "#E2E8F0", maxWidth: 740,
          margin: "0 auto 48px", lineHeight: 1.65, fontWeight: 400
        }}>
          Build an AI-ready workforce with role-based learning, 50+ practical tools, real business projects, AI agents, and workflow automation.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo("Final CTA Booking")}
            style={{
              background: "#2563EB", color: "#FFFFFF", border: "none",
              padding: "18px 40px", borderRadius: 12, fontWeight: 800,
              fontSize: 16, cursor: "pointer", boxShadow: "0 8px 24px -4px rgba(37,99,235,0.4)",
              transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1D4ED8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "none"; }}
          >
            Book a 30-Minute Enterprise Consultation
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF", border: "1.5px solid rgba(255, 255, 255, 0.25)",
              padding: "18px 40px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"; }}
          >
            Explore Curriculum ↓
          </button>
        </div>

        <p style={{ fontSize: 14, color: "#94A3B8", fontStyle: "italic", maxWidth: 640, margin: "0 auto" }}>
          Share your employee count, key departments, and AI goals. We will recommend a program structure and sample learning path for your organization.
        </p>

      </div>
    </section>
  );
}
