import { useState } from 'react';

export default function HeroSection({ onOpenDemo, scrollToSection }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenDemo(email);
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(ellipse at 50% 30%, #0A1936 0%, #040D21 70%)",
      borderBottom: "1px solid #30363D",
      position: "relative",
      paddingTop: 88,
      paddingBottom: 48,
      boxSizing: "border-box",
      overflow: "hidden"
    }} className="dev-grid-bg">

      {/* Upward Ambient Glow */}
      <div className="ambient-glow-up" />

      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>

        {/* Subtle Eyebrow Badge */}
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "rgba(22, 27, 34, 0.8)", border: "1px solid #30363D",
            color: "#F0F6FC", fontSize: 13, fontWeight: 600,
            padding: "6px 16px", borderRadius: 999,
            display: "inline-flex", alignItems: "center", gap: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}>
            <span className="pulse-dot" />
            <span>Enterprise Generative AI Upskilling</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(42px, 5.8vw, 68px)", fontWeight: 900,
          color: "#F0F6FC", lineHeight: 1.08,
          letterSpacing: "-.03em", maxWidth: 900, margin: "0 auto 20px"
        }}>
          Build an AI-Ready Workforce.
        </h1>

        {/* Subhead Line */}
        <p style={{
          fontSize: "clamp(20px, 2.2vw, 24px)", fontWeight: 700,
          textAlign: "center", maxWidth: 760, margin: "0 auto 18px",
          color: "#388BFD", lineHeight: 1.35
        }}>
          Turn Generative AI into measurable productivity across all teams.
        </p>

        {/* Main Body Paragraph */}
        <p style={{
          fontSize: 17, color: "#8B949E", textAlign: "center",
          maxWidth: 680, margin: "0 auto 36px", lineHeight: 1.6, fontWeight: 400
        }}>
          Role-based upskilling in prompt engineering, AI agents, and automation.
          <br />
          Empower your workforce by building real use cases with 50+ leading AI tools.
        </p>

        {/* Integrated GitHub-Style CTA Bar */}
        <form onSubmit={handleSubmit} style={{
          display: "inline-flex",
          alignItems: "center",
          background: "rgba(22, 27, 34, 0.9)",
          border: "1px solid #30363D",
          borderRadius: 14,
          padding: "6px 8px 6px 18px",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 139, 253, 0.15)",
          maxWidth: 640,
          width: "100%",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 44
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            style={{
              flex: "1 1 200px",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#F0F6FC",
              fontSize: 15,
              fontWeight: 500
            }}
          />
          <button
            type="submit"
            style={{
              background: "#238636",
              color: "#FFFFFF",
              border: "1px solid rgba(240, 246, 252, 0.1)",
              padding: "12px 24px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow: "0 2px 8px rgba(35, 134, 54, 0.3)",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Request Enterprise Demo
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(33, 38, 45, 0.8)",
              color: "#F0F6FC",
              border: "1px solid #30363D",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#8B949E"; e.currentTarget.style.background = "#30363D"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; e.currentTarget.style.background = "rgba(33, 38, 45, 0.8)"; }}
          >
            Explore Curriculum ↓
          </button>
        </form>

        {/* Real Technical Indicator Badges (Replacing abstract space debris) */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          opacity: 0.9
        }}>
          <div style={{
            background: "rgba(22, 27, 34, 0.7)", border: "1px solid #21262D",
            borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "#8B949E"
          }}>
            <span style={{ color: "#388BFD", fontWeight: 700 }}>50+ Approved Tools</span>
            <span style={{ color: "#30363D" }}>|</span>
            <span>Copilot • Cursor • Claude • n8n</span>
          </div>

          <div style={{
            background: "rgba(22, 27, 34, 0.7)", border: "1px solid #21262D",
            borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "#8B949E"
          }}>
            <span style={{ color: "#39C5CF", fontWeight: 700 }}>10 Role Academies</span>
            <span style={{ color: "#30363D" }}>|</span>
            <span>Engineering • Sales • Marketing • Finance</span>
          </div>

          <div style={{
            background: "rgba(22, 27, 34, 0.7)", border: "1px solid #21262D",
            borderRadius: 8, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "#8B949E"
          }}>
            <span style={{ color: "#2EA043", fontWeight: 700 }}>Executive ROI</span>
            <span style={{ color: "#30363D" }}>|</span>
            <span>Manager-verified adoption metrics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
