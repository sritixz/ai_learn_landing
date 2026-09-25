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

      {/* Floating AI Neural Horizon (Partially visible in main viewport, leads into scroll) */}
      <div style={{
        width: "100%",
        position: "relative",
        zIndex: 2,
        paddingBottom: 24,
        marginTop: "auto"
      }}>
        {/* Luminous Core Light Bar */}
        <div style={{
          width: "80%",
          maxWidth: 900,
          height: 1,
          margin: "0 auto 20px auto",
          background: "linear-gradient(90deg, transparent 0%, rgba(56, 139, 253, 0.8) 50%, transparent 100%)",
          boxShadow: "0 0 20px rgba(56, 139, 253, 0.6)"
        }} />

        {/* Floating AI Nodes Container */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 20px",
          flexWrap: "wrap"
        }}>
          
          {/* Floating Node 1: Neural Processor */}
          <div className="float-slow" style={{
            background: "rgba(13, 17, 23, 0.85)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            borderRadius: 12,
            padding: "12px 18px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 16px rgba(56, 189, 248, 0.15)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "rgba(56, 189, 248, 0.15)", border: "1px solid #38BDF8",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#38BDF8", fontSize: 13, fontWeight: 900
            }}>
              🧠
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#F0F6FC", fontFamily: "ui-monospace, monospace" }}>
                Neural Engine v4.2
              </div>
              <div style={{ fontSize: 11, color: "#38BDF8" }}>
                Multi-Model LLM Orchestration
              </div>
            </div>
          </div>

          {/* Floating Node 2: Live AI Code/Prompt Capsule */}
          <div className="float-medium" style={{
            background: "rgba(13, 17, 23, 0.95)",
            border: "1px solid rgba(46, 160, 67, 0.5)",
            borderRadius: 12,
            padding: "12px 20px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.6), 0 0 20px rgba(46, 160, 67, 0.15)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            gap: 12
          }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#2EA043", boxShadow: "0 0 8px #2EA043"
            }} />
            <div style={{ textAlign: "left", fontFamily: "ui-monospace, monospace" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#F0F6FC" }}>
                <span style={{ color: "#388BFD" }}>agent</span>.<span style={{ color: "#39C5CF" }}>run</span>({`{ stack: ['Cursor', 'Claude', 'n8n'] }`})
              </div>
              <div style={{ fontSize: 11, color: "#2EA043", marginTop: 2 }}>
                ✓ 26% faster feature delivery & test suites
              </div>
            </div>
          </div>

          {/* Floating Node 3: Real-Time ROI Engine */}
          <div className="float-fast" style={{
            background: "rgba(13, 17, 23, 0.85)",
            border: "1px solid rgba(137, 87, 229, 0.4)",
            borderRadius: 12,
            padding: "12px 18px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.5), 0 0 16px rgba(137, 87, 229, 0.15)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: "rgba(137, 87, 229, 0.15)", border: "1px solid #8957E5",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#8957E5", fontSize: 13, fontWeight: 900
            }}>
              ⚡
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#F0F6FC", fontFamily: "ui-monospace, monospace" }}>
                Enterprise ROI Engine
              </div>
              <div style={{ fontSize: 11, color: "#8957E5" }}>
                Manager-Verified Adoption
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
