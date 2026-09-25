export default function AdvancedCapability({ onOpenDemo }) {
  const agentPoints = [
    "Agent Architecture: Defining goals, instructions, system context, state memory, tools, and output schemas.",
    "Tool Integrations: Connecting web search, SQL databases, APIs, calendars, email, CRM, and enterprise documents.",
    "Enterprise RAG: Grounding agent knowledge and responses strictly in verified, approved internal sources.",
    "Multi-Step Reasoning: Implementing state management, planning loops, error handling, and recovery strategies.",
    "Human-in-the-Loop: Establishing mandatory approval checkpoints for high-risk or sensitive automated actions.",
    "Evaluation & KPIs: Benchmarking accuracy, task completion rate, latency, cost per execution, and business KPIs.",
    "Framework Practice: Hands-on development with OpenAI Agents SDK, LangGraph, CrewAI, and Copilot Studio."
  ];

  const automationPoints = [
    "Process Mapping: Analyzing repetitive workflows to isolate logic steps suitable for automation.",
    "Platform Building: Constructing production workflows in n8n, Make, Zapier, and Microsoft Power Automate.",
    "System Integration: Linking webhooks, forms, email, spreadsheets, CRMs, databases, and LLM endpoints.",
    "Robust Execution: Configuring structured JSON outputs, branch logic, approvals, retries, logs, and exception handling.",
    "Reusable Automations: Shipping automation pipelines for lead triage, reporting, content ops, onboarding, and support."
  ];

  const capstones = [
    {
      title: "Marketing Campaign Engine",
      desc: "Conducts market research, generates multi-variant copy & creatives, routes approval notifications, and packages launch assets.",
      category: "Marketing & Growth"
    },
    {
      title: "Sales Research & Briefing Agent",
      desc: "Monitors target accounts, synthesizes buying signals, drafts personalized outreach, and prepares executive meeting briefs.",
      category: "Sales & RevOps"
    },
    {
      title: "HR & Policy Knowledge Assistant",
      desc: "Answers employee HR questions instantly using internal policy handbooks with traceable citations and escalation logic.",
      category: "HR & People"
    },
    {
      title: "Finance & Reporting Automation",
      desc: "Aggregates recurring financial data, generates variance commentary, flags statistical anomalies, and drafts summaries.",
      category: "Finance & Ops"
    },
    {
      title: "Support Triage & Response Agent",
      desc: "Categorizes incoming customer tickets, drafts accurate responses from knowledge bases, and escalates complex edge cases.",
      category: "Customer Support"
    },
    {
      title: "Developer Delivery Copilot",
      desc: "Converts feature specs into code prototypes, automated unit test suites, documentation drafts, and code-review checks.",
      category: "Engineering & IT"
    }
  ];

  return (
    <section id="agents-automation" style={{ padding: "100px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12, fontFamily: "ui-monospace, monospace" }}>
          ADVANCED ENGINEERING CAPABILITY
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 16 }}>
          Go beyond prompting. Build AI agents and workflow automations.
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 56, fontWeight: 400 }}>
          Transition high-potential employees from manual AI usage into system designers who build repeatable, automated workflows with human oversight and enterprise governance.
        </p>

        {/* 2 Tracks Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 24, marginBottom: 64 }}>
          {/* Agent Building Track */}
          <div style={{
            background: "#0D1117", border: "1px solid #30363D",
            borderRadius: 16, padding: "36px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", fontFamily: "ui-monospace, monospace" }}>
              TRACK 01
            </span>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F0F6FC", marginTop: 6, marginBottom: 18 }}>
              AI Agent Architecture Track
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0 }}>
              {agentPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#8B949E", lineHeight: 1.6 }}>
                  <span style={{ color: "#388BFD", fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automation Track */}
          <div style={{
            background: "#0D1117", border: "1px solid #30363D",
            borderRadius: 16, padding: "36px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#39C5CF", textTransform: "uppercase", letterSpacing: ".08em", fontFamily: "ui-monospace, monospace" }}>
              TRACK 02
            </span>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F0F6FC", marginTop: 6, marginBottom: 18 }}>
              AI Process Automation Track
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: 0 }}>
              {automationPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#8B949E", lineHeight: 1.6 }}>
                  <span style={{ color: "#39C5CF", fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example Capstone Builds */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
            CAPSTONE DELIVERABLES
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F0F6FC", marginBottom: 28, letterSpacing: "-.01em" }}>
            Production Capstone Builds Shipped During Training
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {capstones.map((c, i) => (
              <div
                key={i}
                onClick={() => onOpenDemo(`${c.title} Capstone Build`)}
                style={{
                  background: "#0D1117", border: "1px solid #30363D",
                  borderRadius: 14, padding: "28px 24px",
                  cursor: "pointer", transition: "all 0.15s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#388BFD"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{
                  fontSize: 11, fontWeight: 700, color: "#388BFD",
                  background: "rgba(56, 139, 253, 0.15)", border: "1px solid rgba(56, 139, 253, 0.3)",
                  padding: "3px 10px", borderRadius: 6,
                  display: "inline-block", marginBottom: 12,
                  fontFamily: "ui-monospace, monospace"
                }}>
                  {c.category}
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#F0F6FC", marginBottom: 6 }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: 13.5, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
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
