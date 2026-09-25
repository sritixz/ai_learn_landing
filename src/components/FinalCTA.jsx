export default function FinalCTA({ onOpenDemo, scrollToSection }) {
  return (
    <section style={{
      background: "#050B1A",
      color: "#F8FAFC",
      padding: "110px 0 120px",
      borderBottom: "1px solid #1E293B",
      position: "relative"
    }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        
        <div style={{
          display: "inline-block",
          background: "rgba(47, 129, 247, 0.1)",
          border: "1px solid rgba(47, 129, 247, 0.25)",
          color: "#2F81F7",
          padding: "4px 12px",
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: ".08em",
          marginBottom: 20,
          fontFamily: "ui-monospace, SFMono-Regular, monospace"
        }}>
          WORKFORCE TRANSFORMATION
        </div>

        <h2 style={{
          fontSize: "clamp(32px, 4vw, 46px)",
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: "-.025em",
          marginBottom: 20,
          color: "#F8FAFC"
        }}>
          Your teams are already using AI. Make it systematic, secure, and impactful.
        </h2>

        <p style={{
          fontSize: 16.5,
          color: "#94A3B8",
          maxWidth: 680,
          margin: "0 auto 40px",
          lineHeight: 1.65,
          fontWeight: 400
        }}>
          Build verified organizational capability with 10 role-tailored academies, 67+ evaluated tools, private sandbox labs, autonomous agent architecture, and manager-tracked adoption.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo("Final CTA Booking")}
            style={{
              background: "#238636",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "13px 28px",
              borderRadius: 7,
              fontWeight: 600,
              fontSize: 14.5,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(35, 134, 54, 0.25)",
              transition: "background 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Book Enterprise Consultation
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "#0B1220",
              color: "#CBD5E1",
              border: "1px solid #1E293B",
              padding: "13px 26px",
              borderRadius: 7,
              fontWeight: 600,
              fontSize: 14.5,
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2F81F7";
              e.currentTarget.style.color = "#F8FAFC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1E293B";
              e.currentTarget.style.color = "#CBD5E1";
            }}
          >
            Explore 10-Module Syllabus ↓
          </button>
        </div>

        <p style={{ fontSize: 13, color: "#64748B", margin: "0 auto", maxWidth: 600 }}>
          Share your cohort size and key departments. Our solution architects will prepare a customized curriculum blueprint within 24 hours.
        </p>

      </div>
    </section>
  );
}
