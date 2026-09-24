export default function BusinessCase() {
  const shifts = [
    {
      title: "From ad-hoc prompting to reliable execution",
      desc: "Move employees past simple chat prompts into repeatable workflows, standardized prompt libraries, automation pipelines, and custom agents."
    },
    {
      title: "From isolated tools to an integrated AI stack",
      desc: "Teach teams when to deploy research assistants, coding copilots, creative AI, automation platforms, and internal knowledge search."
    },
    {
      title: "From generic literacy to job-specific relevance",
      desc: "Every track connects GenAI directly to actual daily deliverables: campaigns, reports, codebases, financial models, SOPs, and customer support."
    },
    {
      title: "From learning hours to business outcomes",
      desc: "Use baseline skill assessments, practical capstone projects, and manager-visible adoption metrics to measure real impact."
    }
  ];

  const outcomes = [
    {
      tag: "Content & Copy",
      title: "Create faster",
      desc: "Draft, summarize, repurpose, and localize high-quality corporate content without compromising brand guidelines."
    },
    {
      tag: "Knowledge & Intelligence",
      title: "Research smarter",
      desc: "Synthesize dense reports, market analysis, and internal documentation with fully traceable, cited sources."
    },
    {
      tag: "Analytics & Reporting",
      title: "Analyze better",
      desc: "Use natural language to query complex spreadsheets, dashboards, financial databases, and operational data."
    },
    {
      tag: "Engineering & Tech",
      title: "Build quicker",
      desc: "Accelerate software delivery, prototype applications, automate test suites, and streamline code reviews."
    },
    {
      tag: "Integration & Tools",
      title: "Automate workflows",
      desc: "Connect LLMs with email systems, CRMs, spreadsheets, databases, forms, and internal business tools."
    },
    {
      tag: "Custom Agents",
      title: "Deploy AI agents",
      desc: "Design autonomous agents that reason, query tools, follow strict business rules, and execute multi-step processes."
    }
  ];

  return (
    <section id="programs" style={{ padding: "120px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Why Enterprise Upskilling
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          AI adoption is easy. Building true capability is the real advantage.
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          Buying software licenses does not automatically create an AI-ready organization. Employees need repeatable skills, enterprise governance standards, and role-specific workflows that translate tools into tangible business outcomes.
        </p>

        {/* 4 Shifts Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 28, marginBottom: 80 }}>
          {shifts.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 18, padding: "36px 30px",
                boxShadow: "0 4px 20px -2px rgba(15,23,42,0.03)"
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", marginBottom: 12 }}>
                Shift 0{i + 1}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 12, lineHeight: 1.35 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Research Evidence Box */}
        <div style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          borderRadius: 24, padding: "48px 40px", color: "#FFFFFF",
          marginBottom: 80, boxShadow: "0 16px 40px -10px rgba(15,23,42,0.25)"
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 16 }}>
            RESEARCH BENCHMARKS & EVIDENCE
          </div>
          <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 28, letterSpacing: "-.01em", lineHeight: 1.3 }}>
            Empirical evidence on how practical GenAI skills transform work
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, marginBottom: 32 }}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#60A5FA", marginBottom: 6 }}>~2 hrs/wk</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Saved on Email Workflows</div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6 }}>
                A 2025 randomized field study across 66 firms found regular GenAI users reduced email processing by ~2 hours per week. <em>(Microsoft Research / NBER 2025)</em>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#34D399", marginBottom: 6 }}>+26.08%</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Task Completion Increase</div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6 }}>
                Randomized trials across 4,867 software developers at Microsoft, Accenture, and Fortune 100 firms reported a 26.08% boost in completed tasks using AI copilots. <em>(Microsoft Research 2025)</em>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 13, color: "#94A3B8", fontStyle: "italic", margin: 0 }}>
            * Note: Benchmark data illustrates potential impact. AI Global Academy structures training goals around each client's specific baseline workflows.
          </p>
        </div>

        {/* Employee Outcomes Section */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
            Core Capabilities
          </div>
          <h3 style={{ fontSize: 30, fontWeight: 800, color: "#0F172A", marginBottom: 36, letterSpacing: "-.01em" }}>
            What your teams will do differently after upskilling
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {outcomes.map((o, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 18, padding: "32px 28px",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.03)"
                }}
              >
                <div style={{
                  fontSize: 11, fontWeight: 700, color: "#2563EB",
                  background: "#EFF6FF", padding: "4px 12px", borderRadius: 999,
                  display: "inline-block", marginBottom: 14
                }}>
                  {o.tag}
                </div>
                <h4 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
                  {o.title}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
