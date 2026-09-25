import { useState } from 'react';

const HeroSectionExtended = () => {
  const [activeRole, setActiveRole] = useState("Engineering");

  const roleMap = {
    Engineering: {
      title: "Software & Engineering",
      tool: "GitHub Copilot • Cursor • Claude Code • Ollama",
      output: "Automated unit tests, PR reviews, refactoring, and AI-assisted code generation.",
      badge: "Technical Track",
      impact: "High Velocity"
    },
    Marketing: {
      title: "Marketing & Growth",
      tool: "Claude • Midjourney • Jasper • Perplexity",
      output: "Multi-channel campaign packs, audience research, and automated content repurposing.",
      badge: "Growth Track",
      impact: "Brand Consistency"
    },
    Sales: {
      title: "Sales & RevOps",
      tool: "ChatGPT • Gong AI • CRM Copilots • Clay",
      output: "Automated account intelligence briefs, personalized outreach, and CRM updates.",
      badge: "Revenue Track",
      impact: "Higher Win Rates"
    },
    Finance: {
      title: "Finance & Operations",
      tool: "Excel Copilot • Julius AI • n8n • Power Automate",
      output: "Variance analysis narratives, financial modeling, and automated ledger workflows.",
      badge: "Operations Track",
      impact: "Process Accuracy"
    }
  };

  const pillars = [
    {
      num: "01",
      title: "Role-Based Pathways",
      desc: "Distinct learning tracks tailored specifically for software engineers, product managers, marketing teams, sales executives, finance professionals, and operations leaders."
    },
    {
      num: "02",
      title: "Hands-On Tool Practice",
      desc: "Zero passive lectures. Learners build real prompts, automations, and custom AI assistants directly in live sandbox environments."
    },
    {
      num: "03",
      title: "Multi-Tool Stack Judgment",
      desc: "Master 50+ industry-standard AI tools. Employees learn tool evaluation and selection judgment rather than single-vendor dependence."
    },
    {
      num: "04",
      title: "Measurable Business Impact",
      desc: "Focus on reusable enterprise assets, automated manual processes, and manager-tracked adoption metrics tied directly to business KPIs."
    }
  ];

  return (
    <section style={{ padding: "80px 0 96px", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Concise Proof & Value Metrics Strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 64,
          padding: "20px 24px",
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 10
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2F81F7" }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>50+ Approved Tools</div>
              <div style={{ fontSize: 12, color: "#94A3B8" }}>Copilot, Cursor, Claude, n8n, OpenAI</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8B7CF6" }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>10 Specialized Academies</div>
              <div style={{ fontSize: 12, color: "#94A3B8" }}>Role-tailored for Engineering, Sales, Ops, Finance</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2EA043" }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>Manager-Tracked ROI</div>
              <div style={{ fontSize: 12, color: "#94A3B8" }}>Pre/post skill assessments & verified capstones</div>
            </div>
          </div>
        </div>

        {/* Interactive Capability Workstation Matrix */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 12,
          padding: "36px",
          marginBottom: 80
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, borderBottom: "1px solid #162032", paddingBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", fontFamily: "ui-monospace, monospace" }}>
                INTERACTIVE CAPABILITY MATRIX
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F8FAFC", marginTop: 4, letterSpacing: "-.02em" }}>
                Role-Based Pathways & Deliverables
              </h3>
            </div>
            <span style={{ fontSize: 12, color: "#94A3B8", background: "#0F172A", border: "1px solid #1E293B", padding: "5px 12px", borderRadius: 6, fontFamily: "ui-monospace, monospace" }}>
              Select department track
            </span>
          </div>

          {/* Department Selection Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {Object.keys(roleMap).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                style={{
                  padding: "8px 18px", borderRadius: 6, border: "1px solid",
                  borderColor: activeRole === role ? "#2F81F7" : "#1E293B",
                  background: activeRole === role ? "rgba(47, 129, 247, 0.12)" : "#0F172A",
                  color: activeRole === role ? "#F8FAFC" : "#94A3B8",
                  fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                  transition: "all 0.15s ease"
                }}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Selected Track Details Row */}
          <div style={{
            background: "#0F172A",
            border: "1px solid #1E293B",
            borderRadius: 8,
            padding: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em", fontFamily: "ui-monospace, monospace" }}>
                Department Focus
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#F8FAFC", marginTop: 6 }}>
                {roleMap[activeRole].title}
              </div>
              <div style={{ fontSize: 12, color: "#2F81F7", marginTop: 4, fontFamily: "ui-monospace, monospace" }}>
                {roleMap[activeRole].badge}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em", fontFamily: "ui-monospace, monospace" }}>
                Approved Toolchain
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#F8FAFC", marginTop: 6, fontFamily: "ui-monospace, monospace" }}>
                {roleMap[activeRole].tool}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em", fontFamily: "ui-monospace, monospace" }}>
                Target Business Deliverable
              </div>
              <div style={{ fontSize: 13.5, color: "#94A3B8", marginTop: 6, lineHeight: 1.5 }}>
                {roleMap[activeRole].output}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars: Structured Editorial Layout with Dividers */}
        <div>
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
              INSTITUTIONAL METHODOLOGY
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: "#F8FAFC", letterSpacing: "-.02em" }}>
              How AI Global Academy builds lasting workforce capability
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            borderTop: "1px solid #1E293B",
            paddingTop: 36
          }}>
            {pillars.map((p) => (
              <div key={p.num} style={{ position: "relative" }}>
                <div style={{
                  fontSize: 12, fontWeight: 800, color: "#2F81F7",
                  marginBottom: 12, fontFamily: "ui-monospace, monospace"
                }}>
                  [{p.num}]
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 750, color: "#F8FAFC", marginBottom: 10, letterSpacing: "-.01em" }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionExtended;