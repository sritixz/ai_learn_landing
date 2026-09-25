import { useState } from 'react';

const HeroSectionExtended = () => {
  const [activeRole, setActiveRole] = useState("Engineering");

  const roleMap = {
    Engineering: {
      title: "Software & Engineering",
      tool: "GitHub Copilot • Cursor • Claude Code",
      output: "26% faster feature delivery, automated test suites & PR reviews",
      badge: "Technical Track",
      codeSnippet: "git commit -m 'feat: ai-assisted automated test suite generation'"
    },
    Marketing: {
      title: "Marketing & Growth",
      tool: "Claude • Midjourney • Jasper",
      output: "Multi-channel campaign packs, SEO research & automated content repurposing",
      badge: "Growth Track",
      codeSnippet: "campaign.generate({ audience: 'Enterprise CTOs', format: 'Omni-channel' })"
    },
    Sales: {
      title: "Sales & RevOps",
      tool: "ChatGPT • Gong AI • CRM Copilots",
      output: "Automated account research briefs, personalized outreach & CRM hygiene",
      badge: "Revenue Track",
      codeSnippet: "crm.enrichAccountBriefs({ intentScore: '>85', tier: 'Enterprise' })"
    },
    Finance: {
      title: "Finance & Operations",
      tool: "Excel Copilot • Julius AI • n8n",
      output: "Automated variance narratives, scenario modeling & invoice workflows",
      badge: "Operations Track",
      codeSnippet: "finance.reconcileLedgers({ month: 'Q3-Close', threshold: '0.001' })"
    }
  };

  const pillars = [
    {
      title: "Role-Based Pathways",
      desc: "Distinct learning tracks tailored specifically for leadership, engineering, marketing, sales, finance, HR, product, and operations."
    },
    {
      title: "Hands-On Execution",
      desc: "No passive lectures. Learners build real workflows, custom prompts, and automated assistants directly in live tool labs."
    },
    {
      title: "Multi-Tool Stack",
      desc: "Master 50+ industry-standard AI tools. Employees learn tool judgment rather than becoming reliant on a single vendor."
    },
    {
      title: "Measurable ROI",
      desc: "Focus on reusable team assets, automated manual processes, and manager-tracked adoption metrics tied directly to business KPIs."
    }
  ];

  return (
    <section style={{ padding: "64px 0 96px", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* 50+ Tools, 10 Academies & Executive ROI Badges (Revealed on Scroll) */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 48
        }}>
          <div style={{
            background: "rgba(22, 27, 34, 0.8)", border: "1px solid #30363D",
            borderRadius: 10, padding: "10px 18px", display: "flex", alignItems: "center", gap: 10,
            fontSize: 13, color: "#8B949E", boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
          }}>
            <span style={{ color: "#388BFD", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>50+ Approved Tools</span>
            <span style={{ color: "#30363D" }}>|</span>
            <span>Copilot • Cursor • Claude • n8n</span>
          </div>

          <div style={{
            background: "rgba(22, 27, 34, 0.8)", border: "1px solid #30363D",
            borderRadius: 10, padding: "10px 18px", display: "flex", alignItems: "center", gap: 10,
            fontSize: 13, color: "#8B949E", boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
          }}>
            <span style={{ color: "#39C5CF", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>10 Role Academies</span>
            <span style={{ color: "#30363D" }}>|</span>
            <span>Engineering • Sales • Marketing • Finance</span>
          </div>

          <div style={{
            background: "rgba(22, 27, 34, 0.8)", border: "1px solid #30363D",
            borderRadius: 10, padding: "10px 18px", display: "flex", alignItems: "center", gap: 10,
            fontSize: 13, color: "#8B949E", boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
          }}>
            <span style={{ color: "#2EA043", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>Executive ROI</span>
            <span style={{ color: "#30363D" }}>|</span>
            <span>Manager-verified adoption metrics</span>
          </div>
        </div>

        {/* Interactive Capability Map Widget */}
        <div style={{
          background: "#0D1117", border: "1px solid #30363D",
          borderRadius: 16, padding: "36px", boxShadow: "0 12px 36px rgba(0,0,0,0.4)",
          marginBottom: 48
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, borderBottom: "1px solid #21262D", paddingBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", fontFamily: "ui-monospace, monospace" }}>
                INTERACTIVE CAPABILITY MATRIX
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0F6FC", marginTop: 4, letterSpacing: "-.02em" }}>
                Role-Based Pathways & Deliverables
              </h3>
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#8B949E", background: "#161B22", border: "1px solid #30363D", padding: "6px 14px", borderRadius: 999, fontFamily: "ui-monospace, monospace" }}>
              Select a team track below
            </span>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
            {Object.keys(roleMap).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                style={{
                  padding: "10px 22px", borderRadius: 8, border: "1px solid",
                  borderColor: activeRole === role ? "#388BFD" : "#30363D",
                  background: activeRole === role ? "rgba(56, 139, 253, 0.15)" : "#161B22",
                  color: activeRole === role ? "#F0F6FC" : "#8B949E",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: activeRole === role ? "0 0 12px rgba(56, 139, 253, 0.25)" : "none"
                }}
              >
                {role}
              </button>
            ))}
          </div>

          <div style={{
            background: "#161B22", border: "1px solid #30363D",
            borderRadius: 12, padding: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8B949E", textTransform: "uppercase", letterSpacing: ".05em", fontFamily: "ui-monospace, monospace" }}>
                Department Track
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#F0F6FC", marginTop: 6 }}>
                {roleMap[activeRole].title}
              </div>
              <div style={{ fontSize: 12, color: "#388BFD", marginTop: 4, fontFamily: "ui-monospace, monospace" }}>
                {roleMap[activeRole].badge}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8B949E", textTransform: "uppercase", letterSpacing: ".05em", fontFamily: "ui-monospace, monospace" }}>
                Approved Tool Stack
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F0F6FC", marginTop: 6, fontFamily: "ui-monospace, monospace" }}>
                {roleMap[activeRole].tool}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#8B949E", textTransform: "uppercase", letterSpacing: ".05em", fontFamily: "ui-monospace, monospace" }}>
                Target Business Outcome
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#2EA043", marginTop: 6, lineHeight: 1.5 }}>
                ✓ {roleMap[activeRole].output}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              className="dark-glass-card"
              style={{
                background: "#0D1117", border: "1px solid #30363D",
                borderRadius: 14, padding: "32px 28px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#388BFD"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: "#161B22", border: "1px solid #30363D",
                color: "#388BFD", fontWeight: 800, fontSize: 13,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
                fontFamily: "ui-monospace, monospace"
              }}>
                0{i + 1}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#F0F6FC", marginBottom: 10, letterSpacing: "-.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSectionExtended;