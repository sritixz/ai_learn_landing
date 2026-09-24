
export default function BusinessCase() {
  const shifts = [
    {
      title: "From experimentation to execution",
      desc: "Move employees beyond ad-hoc prompting into reliable workflows, reusable prompt systems, automation and agents."
    },
    {
      title: "From one tool to an AI stack",
      desc: "Teach when to use assistants, research tools, coding copilots, creative AI, automation platforms and agents."
    },
    {
      title: "From generic training to job relevance",
      desc: "Every track connects GenAI to actual work: campaigns, reports, code, analysis, SOPs, customer communication and internal operations."
    },
    {
      title: "From learning hours to business outcomes",
      desc: "Use baseline assessments, practical projects and manager-visible adoption metrics to track progress."
    }
  ];

  const outcomes = [
    {
      title: "Create faster",
      desc: "Draft, summarize, repurpose and personalize high-quality business content.",
      icon: "✍️"
    },
    {
      title: "Research smarter",
      desc: "Synthesize documents, markets and internal knowledge with traceable sources.",
      icon: "🔍"
    },
    {
      title: "Analyze better",
      desc: "Use natural language to explore spreadsheets, reports, dashboards and business data.",
      icon: "📊"
    },
    {
      title: "Build quicker",
      desc: "Prototype software, automate repetitive tasks and accelerate technical delivery.",
      icon: "⚡"
    },
    {
      title: "Automate workflows",
      desc: "Connect AI with email, CRM, forms, spreadsheets, databases and internal tools.",
      icon: "🔄"
    },
    {
      title: "Deploy agents",
      desc: "Design agents that can reason, use tools, follow rules and execute multi-step work.",
      icon: "🤖"
    }
  ];

  return (
    <section id="programs" style={{ padding: "80px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Label */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 02 - THE BUSINESS CASE
        </div>

        {/* Title & Subhead */}
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          AI adoption is easy. AI capability is the advantage.
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          Buying AI licenses does not create an AI-ready organization. Employees need repeatable skills, safe usage standards and role-specific workflows that translate tools into business outcomes.
        </p>

        {/* 4 Organizational Shifts Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 64 }}>
          {shifts.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 16, padding: "24px",
                boxShadow: "0 2px 8px rgba(15,31,61,0.04)"
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D", marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Research Evidence & Benchmarks Callout */}
        <div style={{
          background: "linear-gradient(135deg, #0F1F3D 0%, #1E3A8A 100%)",
          borderRadius: 20, padding: "36px", color: "#FFFFFF",
          marginBottom: 64, boxShadow: "0 12px 32px rgba(15,31,61,0.2)"
        }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#93C5FD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>
            RESEARCH BENCHMARKS & EMPIRICAL EVIDENCE
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, letterSpacing: "-.01em" }}>
            Evidence that practical GenAI skills can change work
          </h3>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            <li style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.6, color: "#E2E8F0" }}>
              <span style={{ color: "#60A5FA", fontWeight: 800 }}>•</span>
              <span><strong>Microsoft Research / NBER (2025):</strong> A 2025 randomized field experiment across 66 firms found regular GenAI users spent about 2 fewer hours per week on email in the second half of the study.</span>
            </li>
            <li style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.6, color: "#E2E8F0" }}>
              <span style={{ color: "#60A5FA", fontWeight: 800 }}>•</span>
              <span><strong>Microsoft Research (2025):</strong> Randomized trials with 4,867 software developers at Microsoft, Accenture and a Fortune 100 company found a 26.08% increase in completed tasks for developers with an AI coding assistant.</span>
            </li>
            <li style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.6, color: "#E2E8F0" }}>
              <span style={{ color: "#60A5FA", fontWeight: 800 }}>•</span>
              <span>Enterprise learning programs increasingly use role-specific academies, practical experimentation and secure environments rather than one-size-fits-all AI literacy.</span>
            </li>
          </ul>

          <p style={{ fontSize: 13, color: "#94A3B8", fontStyle: "italic" }}>
            * Note: Use these benchmarks as evidence of potential, not a guaranteed result. AI Global Academy positions outcomes as measurable targets tied to each client's specific workflows.
          </p>
        </div>

        {/* Employee Outcomes Section */}
        <div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", marginBottom: 24, letterSpacing: "-.01em" }}>
            What companies should expect employees to do differently
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {outcomes.map((o, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, padding: "24px", display: "flex", gap: 16
                }}
              >
                <div style={{
                  fontSize: 28, width: 52, height: 52, borderRadius: 12,
                  background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0
                }}>
                  {o.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 6 }}>
                    {o.title}
                  </h4>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.55 }}>
                    {o.desc}
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
