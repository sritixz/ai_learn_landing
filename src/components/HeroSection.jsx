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
      justifyContent: "space-between",
      background: "radial-gradient(ellipse at 50% 25%, #0B1D40 0%, #040D21 65%)",
      borderBottom: "1px solid #30363D",
      position: "relative",
      paddingTop: 110,
      paddingBottom: 0,
      boxSizing: "border-box",
      overflow: "hidden"
    }} className="dev-grid-bg">

      {/* Upward Ambient Glow */}
      <div className="ambient-glow-up" />

      {/* Main Hero Content (Vertically Centered) */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 2, textAlign: "center" }}>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 900,
          color: "#F0F6FC", lineHeight: 1.06,
          letterSpacing: "-.035em", maxWidth: 940, margin: "0 auto 22px"
        }}>
          Build an AI-Ready Workforce.
        </h1>

        {/* Subhead Line */}
        <p style={{
          fontSize: "clamp(20px, 2.3vw, 25px)", fontWeight: 700,
          textAlign: "center", maxWidth: 780, margin: "0 auto 18px",
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

        {/* Integrated GitHub-Style CTA Bar in One Clean Row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          marginBottom: 44,
          flexWrap: "wrap"
        }}>
          <form onSubmit={handleSubmit} style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(22, 27, 34, 0.95)",
            border: "1px solid #30363D",
            borderRadius: 12,
            padding: "5px 6px 5px 16px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 139, 253, 0.15)",
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
                color: "#F0F6FC",
                fontSize: 14.5,
                fontWeight: 500
              }}
            />
            <button
              type="submit"
              style={{
                background: "#238636",
                color: "#FFFFFF",
                border: "1px solid rgba(240, 246, 252, 0.1)",
                padding: "11px 22px",
                borderRadius: 8,
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
          </form>

          <button
            type="button"
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(22, 27, 34, 0.85)",
              color: "#F0F6FC",
              border: "1px solid #30363D",
              padding: "13px 22px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#8B949E"; e.currentTarget.style.background = "#30363D"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; e.currentTarget.style.background = "rgba(22, 27, 34, 0.85)"; }}
          >
            Explore Curriculum ↓
          </button>
        </div>

      </div>

      {/* Radiant AI Neural Horizon with Star/Torch White Light Flare */}
      <div style={{
        width: "100%",
        position: "relative",
        zIndex: 2,
        paddingBottom: 28,
        marginTop: "auto"
      }}>
        {/* Luminous Torchlight / Star Halo Radiant Flare */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: 960,
          height: 180,
          background: "radial-gradient(ellipse at 50% 90%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 25%, rgba(56, 189, 248, 0.25) 50%, transparent 75%)",
          filter: "blur(24px)",
          pointerEvents: "none",
          zIndex: 0
        }} />

        {/* Luminous Core Horizon Line */}
        <div style={{
          width: "85%",
          maxWidth: 960,
          height: 1.5,
          margin: "0 auto 24px auto",
          background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)",
          boxShadow: "0 0 25px 4px rgba(255, 255, 255, 0.8), 0 0 50px 8px rgba(56, 189, 248, 0.5)",
          position: "relative",
          zIndex: 1
        }} />

        {/* Static Radiant AI Nodes */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 20px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2
        }}>
          
          {/* Static Node 1: Neural Processor (Radiant Star Glow) */}
          <div style={{
            background: "rgba(10, 16, 28, 0.92)",
            border: "1px solid rgba(255, 255, 255, 0.55)",
            borderRadius: 14,
            padding: "14px 20px",
            boxShadow: "0 0 35px 3px rgba(255, 255, 255, 0.3), 0 0 70px 10px rgba(56, 189, 248, 0.35), 0 12px 32px rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "relative"
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 0 16px rgba(255, 255, 255, 0.6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFFFFF", fontSize: 14, fontWeight: 900
            }}>
              🧠
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: "#FFFFFF", fontFamily: "ui-monospace, monospace", letterSpacing: "-.01em" }}>
                Neural Engine v4.2
              </div>
              <div style={{ fontSize: 11, color: "#38BDF8", fontWeight: 600 }}>
                Multi-Model LLM Orchestration
              </div>
            </div>
          </div>

          {/* Static Node 2: Live AI Prompt Capsule (Central Torch Light) */}
          <div style={{
            background: "rgba(10, 16, 28, 0.96)",
            border: "1.5px solid rgba(255, 255, 255, 0.7)",
            borderRadius: 14,
            padding: "14px 24px",
            boxShadow: "0 0 45px 5px rgba(255, 255, 255, 0.4), 0 0 90px 15px rgba(56, 189, 248, 0.4), 0 16px 40px rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative"
          }}>
            <div style={{
              width: 9, height: 9, borderRadius: "50%",
              background: "#FFFFFF",
              boxShadow: "0 0 14px 3px #FFFFFF, 0 0 25px 6px #2EA043"
            }} />
            <div style={{ textAlign: "left", fontFamily: "ui-monospace, monospace" }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#FFFFFF" }}>
                <span style={{ color: "#79C0FF" }}>agent</span>.<span style={{ color: "#56D364" }}>run</span>({`{ stack: ['Cursor', 'Claude', 'n8n'] }`})
              </div>
              <div style={{ fontSize: 11, color: "#7EE787", marginTop: 3, fontWeight: 600 }}>
                ✓ 26% faster feature delivery & test suites
              </div>
            </div>
          </div>

          {/* Static Node 3: Real-Time ROI Engine (Radiant Star Glow) */}
          <div style={{
            background: "rgba(10, 16, 28, 0.92)",
            border: "1px solid rgba(255, 255, 255, 0.55)",
            borderRadius: 14,
            padding: "14px 20px",
            boxShadow: "0 0 35px 3px rgba(255, 255, 255, 0.3), 0 0 70px 10px rgba(137, 87, 229, 0.35), 0 12px 32px rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            position: "relative"
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.8)",
              boxShadow: "0 0 16px rgba(255, 255, 255, 0.6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FFFFFF", fontSize: 14, fontWeight: 900
            }}>
              ⚡
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 12.5, fontWeight: 800, color: "#FFFFFF", fontFamily: "ui-monospace, monospace", letterSpacing: "-.01em" }}>
                Enterprise ROI Engine
              </div>
              <div style={{ fontSize: 11, color: "#D2A8FF", fontWeight: 600 }}>
                Manager-Verified Adoption
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
