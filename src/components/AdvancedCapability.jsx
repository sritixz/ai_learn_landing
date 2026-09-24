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
    <section id="agents-automation" style={{ padding: "120px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Advanced Technical Capabilities
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          Go beyond prompting. Build AI agents and workflow automations.
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          Transition high-potential employees from manual AI usage into system designers who build repeatable, automated workflows with human oversight and enterprise governance.
        </p>

        {/* 2 Tracks Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 32, marginBottom: 80 }}>
          {/* Agent Building Track */}
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #0F172A",
            borderRadius: 20, padding: "40px", boxShadow: "0 4px 20px -2px rgba(15,23,42,0.04)"
          }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".06em" }}>
              TRACK 01
            </span>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", marginTop: 6, marginBottom: 20 }}>
              AI Agent Architecture Track
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, padding: 0, margin: 0 }}>
              {agentPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, color: "#475569", lineHeight: 1.6 }}>
                  <span style={{ color: "#2563EB", fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automation Track */}
          <div style={{
            background: "#FFFFFF", border: "1.5px solid #0F172A",
            borderRadius: 20, padding: "40px", boxShadow: "0 4px 20px -2px rgba(15,23,42,0.04)"
          }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#0D9488", textTransform: "uppercase", letterSpacing: ".06em" }}>
              TRACK 02
            </span>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", marginTop: 6, marginBottom: 20 }}>
              AI Process Automation Track
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, padding: 0, margin: 0 }}>
              {automationPoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, color: "#475569", lineHeight: 1.6 }}>
                  <span style={{ color: "#0D9488", fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example Capstone Builds */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
            Practical Deliverables
          </div>
          <h3 style={{ fontSize: 30, fontWeight: 800, color: "#0F172A", marginBottom: 36, letterSpacing: "-.01em" }}>
            Production Capstone Builds Shipped During Training
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {capstones.map((c, i) => (
              <div
                key={i}
                onClick={() => onOpenDemo(`${c.title} Capstone Build`)}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 18, padding: "32px 28px",
                  cursor: "pointer", transition: "all 0.18s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(15,23,42,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  fontSize: 11, fontWeight: 700, color: "#2563EB",
                  background: "#EFF6FF", padding: "4px 12px", borderRadius: 999,
                  display: "inline-block", marginBottom: 14
                }}>
                  {c.category}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
                  {c.title}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
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
