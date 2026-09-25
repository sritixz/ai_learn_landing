import { useState } from 'react';

const HeroSectionExtended = () => {
  const [activeRole, setActiveRole] = useState("Engineering");

  const roleMap = {
    Engineering: {
      title: "Software & Engineering",
      tool: "GitHub Copilot, Cursor & Claude Code",
      output: "26% faster feature delivery, automated test suites & code reviews",
      badge: "Technical Track"
    },
    Marketing: {
      title: "Marketing & Content",
      tool: "Jasper, Claude & Midjourney",
      output: "Multi-channel campaign packs, SEO research & automated content repurposing",
      badge: "Growth Track"
    },
    Sales: {
      title: "Sales & RevOps",
      tool: "ChatGPT, Gong AI & CRM Copilots",
      output: "Automated account research briefs, hyper-personalized outreach & CRM updates",
      badge: "Revenue Track"
    },
    Finance: {
      title: "Finance & Operations",
      tool: "Excel Copilot, Julius AI & n8n",
      output: "Automated variance narratives, scenario modeling & invoice processing",
      badge: "Operations Track"
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
    <section style={{ padding: "80px 0 96px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Interactive Capability Map Widget */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #E2E8F0",
          borderRadius: 20, padding: "36px", boxShadow: "0 10px 30px -10px rgba(15,23,42,0.06)",
          marginBottom: 48
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, borderBottom: "1px solid #F1F5F9", paddingBottom: 20 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".06em" }}>
                INTERACTIVE CAPABILITY MAP
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", marginTop: 4 }}>
                Role-Based Pathways & Outcome Drivers
              </h3>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#64748B", background: "#F1F5F9", padding: "6px 14px", borderRadius: 999 }}>
              Select a team track below
            </span>
          </div>

          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            {Object.keys(roleMap).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                style={{
                  padding: "10px 20px", borderRadius: 10, border: "1.5px solid",
                  borderColor: activeRole === role ? "#0F172A" : "#E2E8F0",
                  background: activeRole === role ? "#0F172A" : "#F8FAFC",
                  color: activeRole === role ? "#FFFFFF" : "#475569",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                  transition: "all 0.18s ease"
                }}
              >
                {role}
              </button>
            ))}
          </div>

          <div style={{
            background: "#F8FAFC", border: "1px solid #E2E8F0",
            borderRadius: 14, padding: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Department Track</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginTop: 6 }}>{roleMap[activeRole].title}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Approved Tool Stack</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#2563EB", marginTop: 6 }}>{roleMap[activeRole].tool}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Target Business Outcome</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#16A34A", marginTop: 6 }}>✓ {roleMap[activeRole].output}</div>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 16, padding: "32px 28px",
                boxShadow: "0 4px 16px rgba(15,23,42,0.03)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: "#EFF6FF",
                color: "#2563EB", fontWeight: 800, fontSize: 14,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
              }}>
                0{i + 1}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 10, letterSpacing: "-.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>
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