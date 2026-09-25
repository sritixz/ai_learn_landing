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
      minHeight: "92vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      background: "radial-gradient(ellipse at 50% 20%, #0B162E 0%, #050B1A 70%)",
      borderBottom: "1px solid #1E293B",
      position: "relative",
      paddingTop: 116,
      paddingBottom: 72,
      boxSizing: "border-box",
      overflow: "hidden"
    }} className="dev-grid-bg">

      {/* Upward Ambient Glow */}
      <div className="ambient-glow-up" />

      {/* Main Hero Content */}
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 2, textAlign: "center" }}>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(42px, 5.5vw, 68px)",
          fontWeight: 850,
          color: "#F8FAFC",
          lineHeight: 1.08,
          letterSpacing: "-.035em",
          maxWidth: 900,
          margin: "0 auto 20px"
        }}>
          Build an AI-Ready Workforce.
        </h1>

        {/* Subhead Line */}
        <p style={{
          fontSize: "clamp(19px, 2.2vw, 23px)",
          fontWeight: 600,
          textAlign: "center",
          maxWidth: 740,
          margin: "0 auto 18px",
          color: "#2F81F7",
          lineHeight: 1.35
        }}>
          Turn Generative AI into measurable productivity across all departments.
        </p>

        {/* Main Body Paragraph */}
        <p style={{
          fontSize: 16.5,
          color: "#94A3B8",
          textAlign: "center",
          maxWidth: 660,
          margin: "0 auto 36px",
          lineHeight: 1.6,
          fontWeight: 400
        }}>
          Role-based upskilling in prompt engineering, AI agents, and workflow automation.
          Empower your teams to build production use cases with 50+ approved tools.
        </p>

        {/* Integrated CTA Bar in One Clean Row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          marginBottom: 48,
          flexWrap: "wrap"
        }}>
          <form onSubmit={handleSubmit} style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#0F172A",
            border: "1px solid #1E293B",
            borderRadius: 8,
            padding: "5px 6px 5px 16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            gap: 10,
            maxWidth: "100%"
          }}>
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
                color: "#F8FAFC",
                fontSize: 14,
                fontWeight: 500
              }}
            />
            <button
              type="submit"
              style={{
                background: "#238636",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "10px 20px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 13.5,
                cursor: "pointer",
                transition: "all 0.15s ease",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
            >
              Request Enterprise Demo
            </button>
          </form>

          <button
            type="button"
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(15, 23, 42, 0.6)",
              color: "#F8FAFC",
              border: "1px solid #1E293B",
              padding: "11px 20px",
              borderRadius: 8,
              fontWeight: 500,
              fontSize: 13.5,
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.background = "#1E293B"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E293B"; e.currentTarget.style.background = "rgba(15, 23, 42, 0.6)"; }}
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
          width: "80%",
          maxWidth: 900,
          height: 1,
          margin: "24px auto 32px auto",
          background: "linear-gradient(90deg, transparent 0%, #1E293B 20%, #2F81F7 50%, #1E293B 80%, transparent 100%)",
          position: "relative",
          zIndex: 1
        }} />

        {/* Credible Enterprise Capability Horizon */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 20px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2
        }}>

          {/* Pillar 1 */}
          <div style={{
            background: "#0B1220",
            border: "1px solid #1E293B",
            borderRadius: 8,
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "rgba(47, 129, 247, 0.1)",
              border: "1px solid rgba(47, 129, 247, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#2F81F7", fontSize: 13, fontWeight: 700,
              fontFamily: "ui-monospace, monospace"
            }}>
              01
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>
                10 Department Pathways
              </div>
              <div style={{ fontSize: 11.5, color: "#94A3B8" }}>
                Engineering • Sales • Ops • Marketing • Finance
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div style={{
            background: "#0B1220",
            border: "1px solid #1E293B",
            borderRadius: 8,
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "rgba(35, 134, 54, 0.1)",
              border: "1px solid rgba(35, 134, 54, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#2EA043", fontSize: 13, fontWeight: 700,
              fontFamily: "ui-monospace, monospace"
            }}>
              02
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>
                Hands-On Tool Labs
              </div>
              <div style={{ fontSize: 11.5, color: "#94A3B8" }}>
                Production workflows with 50+ approved tools
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div style={{
            background: "#0B1220",
            border: "1px solid #1E293B",
            borderRadius: 8,
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "rgba(139, 124, 246, 0.1)",
              border: "1px solid rgba(139, 124, 246, 0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#8B7CF6", fontSize: 13, fontWeight: 700,
              fontFamily: "ui-monospace, monospace"
            }}>
              03
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>
                Manager-Tracked ROI
              </div>
              <div style={{ fontSize: 11.5, color: "#94A3B8" }}>
                Pre/post benchmarks & verified capstones
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
