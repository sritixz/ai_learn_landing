import { useState } from 'react';

export default function HeroSection({ onOpenDemo, scrollToSection }) {
  const [activeRole, setActiveRole] = useState("Engineering");

  const roleMap = {
    Engineering: { tool: "GitHub Copilot & Cursor", output: "26% faster code delivery & test coverage", icon: "💻" },
    Marketing: { tool: "Jasper & Midjourney", output: "Multi-channel campaign pack in minutes", icon: "📈" },
    Sales: { tool: "ChatGPT & Outreach Copilots", output: "Deep account research & meeting prep", icon: "🤝" },
    Finance: { tool: "Excel Copilot & Julius AI", output: "Automated variance narratives & models", icon: "📊" },
    Operations: { tool: "n8n & Make Automation", output: "End-to-end SOP & ticket routing agents", icon: "⚡" }
  };

  const pillars = [
    {
      title: "Role-Based Learning",
      desc: "Separate pathways for leadership, marketing, sales, HR, finance, operations, product, design, data and engineering."
    },
    {
      title: "Hands-On, Not Theory",
      desc: "Live labs, tool practice, guided exercises, real company use cases and capstone workflows."
    },
    {
      title: "50+ AI Tools",
      desc: "Employees learn the right tool for the job instead of becoming dependent on one model or vendor."
    },
    {
      title: "Business Impact",
      desc: "Focus on faster execution, reduced repetitive work, stronger output quality and reusable AI workflows."
    }
  ];

  return (
    <section style={{ paddingTop: 104, paddingBottom: 64, background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Kicker Label */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{
            background: "#EFF6FF", border: "1px solid #BFDBFE",
            color: "#1E40AF", fontSize: 13, fontWeight: 700,
            padding: "6px 16px", borderRadius: 999, letterSpacing: ".04em",
            textTransform: "uppercase"
          }}>
            AI GLOBAL ACADEMY &nbsp;|&nbsp; Enterprise GenAI Upskilling
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(42px, 5.5vw, 68px)", fontWeight: 900,
          color: "#0F1F3D", textAlign: "center", lineHeight: 1.08,
          letterSpacing: "-.03em", maxWidth: 900, margin: "0 auto 16px"
        }}>
          Build an AI-Ready Workforce.
        </h1>

        {/* Subhead Gradient Line */}
        <p style={{
          fontSize: "clamp(20px, 2.8vw, 28px)", fontWeight: 800,
          textAlign: "center", maxWidth: 840, margin: "0 auto 24px",
          background: "linear-gradient(90deg, #1E3A8A 0%, #2563EB 50%, #0D9488 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          Turn Generative AI into measurable productivity across every business function.
        </p>

        {/* Main Body Paragraph */}
        <p style={{
          fontSize: 18, color: "#475569", textAlign: "center",
          maxWidth: 820, margin: "0 auto 36px", lineHeight: 1.65, fontWeight: 400
        }}>
          Enterprise GenAI upskilling for modern teams - from AI fundamentals and prompt engineering to marketing, coding, data, content, research, AI agents and end-to-end workflow automation. Learn by building real use cases with 50+ of today's most useful AI tools.
        </p>

        {/* Dual Primary CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 56, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo()}
            style={{
              background: "#0F1F3D", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 6px 20px rgba(15,31,61,0.25)",
              transition: "transform 0.15s ease, background 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E3A8A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0F1F3D"; e.currentTarget.style.transform = "none"; }}
          >
            Request an Enterprise Demo
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "#0F1F3D", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 4px 14px rgba(15,31,61,0.2)",
              transition: "transform 0.15s ease, background 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E3A8A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0F1F3D"; e.currentTarget.style.transform = "none"; }}
          >
            Download Curriculum
          </button>
        </div>

        {/* Dynamic Interactive AI Skills Dashboard Visual */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #E2E8F0",
          borderRadius: 20, padding: "28px", boxShadow: "0 12px 40px rgba(15,31,61,0.08)",
          marginBottom: 56, maxWidth: 960, margin: "0 auto 56px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, borderBottom: "1px solid #F1F5F9", paddingBottom: 16 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em" }}>
                INTERACTIVE PREVIEW
              </span>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D" }}>Enterprise AI Skills & Workflow Capability Map</h4>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }}/>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
            {Object.keys(roleMap).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                style={{
                  padding: "8px 16px", borderRadius: 999, border: "1.5px solid",
                  borderColor: activeRole === role ? "#0F1F3D" : "#E2E8F0",
                  background: activeRole === role ? "#0F1F3D" : "#F8FAFC",
                  color: activeRole === role ? "#FFFFFF" : "#475569",
                  fontSize: 13, fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {roleMap[role].icon} {role} Track
              </button>
            ))}
          </div>

          <div style={{
            background: "#F8FAFC", border: "1px solid #CBD5E1",
            borderRadius: 14, padding: "20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Selected Pathway</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#0F1F3D", marginTop: 4 }}>{activeRole} GenAI Academy</div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Primary Tool Stack</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#2563EB", marginTop: 4 }}>{roleMap[activeRole].tool}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Measurable Output</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#059669", marginTop: 4 }}>✓ {roleMap[activeRole].output}</div>
            </div>
          </div>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 16, padding: "24px",
                boxShadow: "0 2px 8px rgba(15,31,61,0.04)"
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 8, letterSpacing: "-.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
