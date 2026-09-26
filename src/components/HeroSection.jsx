import { useState } from 'react';
import NeuralGlobe3D from './NeuralGlobe3D';

export default function HeroSection({ onOpenDemo, scrollToSection }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenDemo(email);
  };

  return (
    <section style={{
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      background: "radial-gradient(ellipse at 50% 15%, #F1F5F9 0%, #FFFFFF 70%)",
      borderBottom: "1px solid #E2E8F0",
      position: "relative",
      paddingTop: 110,
      paddingBottom: 64,
      boxSizing: "border-box",
      overflow: "hidden"
    }} className="dev-grid-bg">

      {/* Upward Ambient Glow */}
      <div className="ambient-glow-up" />

      {/* Main Hero Content */}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 20px", width: "100%", position: "relative", zIndex: 2, textAlign: "center" }}>

        {/* Top Reference Category Tag (Reference: genaicourse.org) */}
        <div style={{ marginBottom: 20 }}>
          <span className="tech-tag" style={{ fontSize: 11.5, padding: "5px 14px" }}>
            <span style={{ color: "#FF8A00" }}>▶</span> LEARN GEN AI FROM THE BEST INSTITUTES IN THE WORLD
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(34px, 5.5vw, 62px)",
          fontWeight: 850,
          color: "#0F172A",
          lineHeight: 1.1,
          letterSpacing: "-.035em",
          maxWidth: 920,
          margin: "0 auto 18px"
        }}>
          Find the Best Generative AI Courses & Institutes — All in One Place
        </h1>

        {/* Subhead Line */}
        <p style={{
          fontSize: "clamp(17px, 2vw, 22px)",
          fontWeight: 700,
          textAlign: "center",
          maxWidth: 780,
          margin: "0 auto 16px",
          color: "#1D4ED8",
          lineHeight: 1.35
        }}>
          Empowering learners, professionals, and AI leaders through top certifications & hands-on tool labs.
        </p>

        {/* Main Body Paragraph */}
        <p style={{
          fontSize: 15.5,
          color: "#475569",
          textAlign: "center",
          maxWidth: 680,
          margin: "0 auto 32px",
          lineHeight: 1.6,
          fontWeight: 450
        }}>
          Role-based upskilling in prompt engineering, AI agents, and workflow automation.
          Empower your teams to build production use cases with 50+ approved tools.
        </p>

        {/* Integrated Responsive CTA Bar */}
        <div className="hero-cta-group">
          <form onSubmit={handleSubmit} className="hero-cta-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              style={{
                width: 230,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#0F172A",
                fontSize: 14,
                fontWeight: 500
              }}
            />
            <button
              type="submit"
              className="btn-orange-pill"
            >
              Request Enterprise Demo
            </button>
          </form>

          <button
            type="button"
            onClick={() => scrollToSection("curriculum")}
            className="btn-outline-pill"
            style={{ padding: "11px 22px" }}
          >
            Explore Curriculum ↓
          </button>
        </div>

      </div>

      {/* Supporting 3D Visualization & Enterprise Pillars */}
      <div style={{
        width: "100%",
        position: "relative",
        zIndex: 2,
        marginTop: 0
      }}>
        {/* Restrained 3D Neural Globe */}
        <NeuralGlobe3D />

        {/* Subtle Horizon Line */}
        <div style={{
          width: "85%",
          maxWidth: 900,
          height: 1,
          margin: "20px auto 28px auto",
          background: "linear-gradient(90deg, transparent 0%, #E2E8F0 20%, #FF8A00 50%, #E2E8F0 80%, transparent 100%)",
          position: "relative",
          zIndex: 1
        }} />

        {/* Credible Enterprise Capability Horizon */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
          boxSizing: "border-box",
          width: "100%"
        }}>

          {/* Pillar 1 */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 10,
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)"
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 6,
              background: "rgba(255, 138, 0, 0.1)",
              border: "1px solid rgba(255, 138, 0, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FF8A00", fontSize: 13, fontWeight: 700,
              fontFamily: "ui-monospace, monospace",
              flexShrink: 0
            }}>
              01
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13.5, fontWeight: 750, color: "#0F172A" }}>
                10 Department Pathways
              </div>
              <div style={{ fontSize: 12, color: "#64748B" }}>
                Engineering • Sales • Ops • Marketing
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 10,
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)"
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 6,
              background: "rgba(29, 78, 216, 0.1)",
              border: "1px solid rgba(29, 78, 216, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#1D4ED8", fontSize: 13, fontWeight: 700,
              fontFamily: "ui-monospace, monospace",
              flexShrink: 0
            }}>
              02
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13.5, fontWeight: 750, color: "#0F172A" }}>
                Hands-On Tool Labs
              </div>
              <div style={{ fontSize: 12, color: "#64748B" }}>
                Production workflows with 50+ tools
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: 10,
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)"
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 6,
              background: "rgba(109, 40, 217, 0.1)",
              border: "1px solid rgba(109, 40, 217, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#6D28D9", fontSize: 13, fontWeight: 700,
              fontFamily: "ui-monospace, monospace",
              flexShrink: 0
            }}>
              03
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13.5, fontWeight: 750, color: "#0F172A" }}>
                Manager-Tracked ROI
              </div>
              <div style={{ fontSize: 12, color: "#64748B" }}>
                Pre/post benchmarks & capstones
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
