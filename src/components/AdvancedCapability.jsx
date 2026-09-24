export default function AdvancedCapability({ onOpenDemo }) {
  const agentPoints = [
    "Agent anatomy: goal, instructions, context, memory, tools, data, guardrails and output schema.",
    "Tool use: search, databases, APIs, calendars, email, CRM, documents and internal knowledge.",
    "RAG and enterprise knowledge: grounding answers in approved sources.",
    "Multi-step planning, state management and recovery from errors.",
    "Human-in-the-loop checkpoints for sensitive or high-impact actions.",
    "Evaluation: accuracy, task success, latency, cost, safety and business KPIs.",
    "Prototype frameworks: OpenAI Agents SDK, LangGraph, CrewAI, Copilot Studio and enterprise agent builders."
  ];

  const automationPoints = [
    "Map repetitive business processes and identify automatable steps.",
    "Build workflows with n8n, Make, Zapier and Power Automate.",
    "Connect forms, email, spreadsheets, CRM, databases, webhooks and LLMs.",
    "Use structured outputs, branching, approvals, retries, logs and exception handling.",
    "Create reusable automations for lead routing, reporting, content operations, onboarding, support and knowledge workflows."
  ];

  const capstones = [
    {
      title: "Marketing Campaign Engine",
      desc: "Research a market, create campaign variants, generate creatives, route approvals and prepare a launch pack.",
      icon: "📢"
    },
    {
      title: "Sales Research Agent",
      desc: "Research accounts, summarize signals, draft outreach and prepare meeting briefs with human approval.",
      icon: "🎯"
    },
    {
      title: "HR Knowledge Assistant",
      desc: "Answer employee policy questions using approved documents with citations and escalation rules.",
      icon: "📋"
    },
    {
      title: "Finance Reporting Workflow",
      desc: "Collect recurring data, generate commentary, flag anomalies and prepare an executive-ready summary.",
      icon: "📑"
    },
    {
      title: "Support Triage Agent",
      desc: "Categorize incoming requests, draft responses, search knowledge and route exceptions to a human.",
      icon: "🎧"
    },
    {
      title: "Developer Delivery Copilot",
      desc: "Turn requirements into a prototype, test cases, documentation and a structured code-review workflow.",
      icon: "🚀"
    }
  ];

  return (
    <section id="agents-automation" style={{ padding: "80px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 06 - ADVANCED CAPABILITY
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          Don't stop at prompting. Build AI agents and automations.
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          Move high-potential employees from using AI manually to designing systems that can execute repeatable work with governance and human oversight.
        </p>

        {/* 2 Tracks Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 24, marginBottom: 64 }}>
          {/* Agent Building Track */}
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #0F1F3D",
            borderRadius: 20, padding: "32px", boxShadow: "0 4px 20px rgba(15,31,61,0.06)"
          }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".06em" }}>
              TRACK 01
            </span>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", marginTop: 4, marginBottom: 16 }}>
              AI Agent Building Track
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {agentPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "#475569", lineHeight: 1.55 }}>
                  <span style={{ color: "#2563EB", fontWeight: 800 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automation Track */}
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #0F1F3D",
            borderRadius: 20, padding: "32px", boxShadow: "0 4px 20px rgba(15,31,61,0.06)"
          }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#0D9488", textTransform: "uppercase", letterSpacing: ".06em" }}>
              TRACK 02
            </span>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", marginTop: 4, marginBottom: 16 }}>
              AI Automation Track
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {automationPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "#475569", lineHeight: 1.55 }}>
                  <span style={{ color: "#0D9488", fontWeight: 800 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example Capstone Builds */}
        <div>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F1F3D", marginBottom: 24, letterSpacing: "-.01em" }}>
            Example Capstone Builds
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {capstones.map((c, i) => (
              <div
                key={i}
                onClick={() => onOpenDemo(`${c.title} Capstone Build`)}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, padding: "24px", display: "flex", gap: 16,
                  cursor: "pointer", transition: "transform 0.15s ease, box-shadow 0.15s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,31,61,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  fontSize: 26, width: 48, height: 48, borderRadius: 10,
                  background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0
                }}>
                  {c.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D", marginBottom: 6 }}>
                    {c.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.55 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
