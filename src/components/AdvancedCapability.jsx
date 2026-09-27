export default function AdvancedCapability({ onOpenDemo }) {
  const agentPoints = [
    "Agent Architecture: Goal definitions, system context, state memory, tool invocation schemas.",
    "Tool Integrations: Connecting search, SQL databases, internal REST APIs, CRM, and documents.",
    "Enterprise RAG Grounding: Restricting agent responses strictly to verified corporate knowledge bases.",
    "Multi-Step Reasoning Loops: Planning cycles, error recovery logic, and deterministic fallback paths.",
    "Human-in-the-Loop Gates: Establishing strict approval checkpoints for sensitive external actions.",
    "Framework Practice: Hands-on implementation with OpenAI Agents SDK, LangGraph, and Copilot Studio."
  ];

  const automationPoints = [
    "Workflow Deconstruction: Auditing manual recurring tasks to isolate deterministic logic steps.",
    "Integration Orchestration: Production pipeline authoring across n8n, Make, and Power Automate.",
    "System Webhooks & APIs: Synchronizing forms, spreadsheets, CRMs, and LLM inference endpoints.",
    "Resilient Execution: Structured JSON validation, branching rules, retry backoffs, and audit logging.",
    "Production Delivery: Deploying automated pipelines for inbound triage, financial narratives, and reporting."
  ];

  const capstones = [
    {
      title: "Marketing Campaign Engine",
      desc: "Performs audience research, generates verified copy variants, routes for legal review, and packages assets.",
      category: "Marketing & Growth"
    },
    {
      title: "Sales Account Intelligence Agent",
      desc: "Monitors target enterprise accounts, parses public SEC filings, and drafts personalized executive briefs.",
      category: "Sales & RevOps"
    },
    {
      title: "Enterprise Policy Search Assistant",
      desc: "Answers complex employee questions against internal handbooks with exact citation traceability and escalation logic.",
      category: "HR & Operations"
    },
    {
      title: "Automated Financial Variance Reporter",
      desc: "Queries financial databases, calculates variances against budget, and synthesizes executive commentary.",
      category: "Finance & Strategy"
    },
    {
      title: "Customer Support Escalation Triage",
      desc: "Classifies ticket sentiment, drafts context-aware resolution steps, and routes edge cases to senior engineers.",
      category: "Customer Experience"
    },
    {
      title: "Developer Test & Refactor Copilot",
      desc: "Converts acceptance specs into regression test suites, documentation drafts, and pull request audits.",
      category: "Engineering & IT"
    }
  ];

  return (
    <section id="agents-automation" style={{ padding: "110px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FF8A00",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            SYSTEMS & AUTOMATION
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Beyond single prompts: Autonomous agents & integrated workflows.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#475569",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            Equip technical and operational teams to construct production-ready AI systems: connecting frontier models to company APIs, databases, and structured validation pipelines.
          </p>
        </div>

        {/* 2 Track Architecture Workstation */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 64
        }}>
          {/* Agent Architecture Track */}
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 10,
            padding: "32px 28px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#2563EB", fontFamily: "ui-monospace, monospace" }}>
                ADVANCED TRACK 01
              </span>
              <span style={{
                fontSize: 10.5,
                color: "#1D4ED8",
                background: "rgba(37, 99, 235, 0.08)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                padding: "3px 8px",
                borderRadius: 4,
                fontFamily: "ui-monospace, monospace",
                fontWeight: 700
              }}>
                AGENT ENGINEERING
              </span>
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 16 }}>
              Autonomous AI Agent Architecture
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {agentPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#2563EB", fontSize: 13, lineHeight: "20px", fontWeight: 700 }}>›</span>
                  <span style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.55 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Track */}
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 10,
            padding: "32px 28px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#7C3AED", fontFamily: "ui-monospace, monospace" }}>
                ADVANCED TRACK 02
              </span>
              <span style={{
                fontSize: 10.5,
                color: "#6D28D9",
                background: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                padding: "3px 8px",
                borderRadius: 4,
                fontFamily: "ui-monospace, monospace",
                fontWeight: 700
              }}>
                PIPELINE ORCHESTRATION
              </span>
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 16 }}>
              Business Process & API Automation
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {automationPoints.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#7C3AED", fontSize: 13, lineHeight: "20px", fontWeight: 700 }}>›</span>
                  <span style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.55 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capstone Deliverables Matrix */}
        <div style={{
          background: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: 10,
          padding: "32px 32px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FF8A00", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                PRODUCTION CAPSTONES
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", margin: 0, letterSpacing: "-.01em" }}>
                Verified Deliverables Deployed During Cohort Training
              </h3>
            </div>
            <span style={{ fontSize: 12, color: "#64748B", fontFamily: "ui-monospace, monospace", fontWeight: 600 }}>
              SHIPPED TO PRODUCTION REPOSITORIES
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16
          }}>
            {capstones.map((c, i) => (
              <div
                key={i}
                onClick={() => onOpenDemo(`${c.title} Capstone Architecture`)}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 8,
                  padding: "20px 22px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FF8A00";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    color: "#2563EB",
                    fontFamily: "ui-monospace, monospace"
                  }}>
                    {c.category}
                  </span>
                  <span style={{ fontSize: 12, color: "#94A3B8" }}>↗</span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.5, margin: 0 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
