export default function FinalCTA({ onOpenDemo, scrollToSection }) {
  return (
    <section style={{
      background: "#FFFFFF",
      color: "#0F172A",
      padding: "110px 0 120px",
      borderBottom: "1px solid #E2E8F0",
      position: "relative"
    }}>
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        
        <div style={{
          display: "inline-block",
          background: "rgba(255, 138, 0, 0.12)",
          border: "1px solid rgba(255, 138, 0, 0.3)",
          color: "#FF8A00",
          padding: "5px 14px",
          borderRadius: 9999,
          fontSize: 11.5,
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
          fontWeight: 850,
          lineHeight: 1.2,
          letterSpacing: "-.025em",
          marginBottom: 20,
          color: "#0F172A"
        }}>
          Stop searching, start learning. Upgrade your career & workforce today.
        </h2>

        <p style={{
          fontSize: 16.5,
          color: "#475569",
          maxWidth: 680,
          margin: "0 auto 40px",
          lineHeight: 1.65,
          fontWeight: 450
        }}>
          Build verified organizational capability with 10 role-tailored academies, 67+ evaluated tools, private sandbox labs, autonomous agent architecture, and manager-tracked adoption.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo("Final CTA Booking")}
            className="btn-orange-pill"
            style={{ padding: "13px 32px", fontSize: 15 }}
          >
            GET STARTED NOW →
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "#F1F5F9",
              color: "#0F172A",
              border: "1px solid #CBD5E1",
              padding: "13px 26px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14.5,
              cursor: "pointer",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E2E8F0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#F1F5F9";
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
