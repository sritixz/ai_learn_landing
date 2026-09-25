export default function BusinessCase() {
  const shifts = [
    {
      num: "01",
      from: "Ad-hoc isolated chat prompts",
      to: "Standardized team prompt architectures & repeatable execution",
      desc: "Move employees past one-off conversational prompts into structured prompt frameworks, curated enterprise prompt repositories, and automated pipeline execution."
    },
    {
      num: "02",
      from: "Fragmented standalone tools",
      to: "An integrated multi-model enterprise AI stack",
      desc: "Train teams on when to orchestrate deep research engines, coding copilots, multimodal generation models, and enterprise knowledge search."
    },
    {
      num: "03",
      from: "Theoretical high-level AI literacy",
      to: "Job-specific workflows connected to daily deliverables",
      desc: "Every track connects directly to actual business deliverables: client proposals, analytical models, software pull requests, compliance audits, and customer operations."
    },
    {
      num: "04",
      from: "Passive course completion metrics",
      to: "Empirical capability benchmarks & verified business outcomes",
      desc: "Track proficiency through hands-on capstone builds, manager-validated task efficiency gains, and verifiable governance compliance."
    }
  ];

  const workforceTracks = [
    {
      department: "Engineering & Technical",
      badge: "TECHNICAL CORE",
      description: "Accelerate software delivery velocity while improving test coverage and code reliability.",
      capabilities: [
        "AI-assisted architecture & code generation (Copilot, Claude Sonnet, Cursor)",
        "Automated unit, integration, and security test authoring",
        "Streamlined pull request reviews & vulnerability audits",
        "Legacy codebase refactoring & architectural documentation"
      ]
    },
    {
      department: "Marketing & Communications",
      badge: "GROWTH & CONTENT",
      description: "Scale targeted content generation and campaign analytics without sacrificing brand voice.",
      capabilities: [
        "Market research synthesis & audience segmentation models",
        "Multi-channel content production pipelines under brand guidelines",
        "Campaign performance analytics via natural language querying",
        "Multimodal asset creation & automated localization"
      ]
    },
    {
      department: "Sales & Client Solutions",
      badge: "REVENUE ACCELERATION",
      description: "Supercharge sales intelligence, proposal turnaround, and client engagement.",
      capabilities: [
        "Automated account intelligence & competitor synthesis",
        "Instant RFP parsing & tailored enterprise proposal drafting",
        "Call transcription analysis & CRM action-item extraction",
        "Hyper-personalized outbound messaging sequences"
      ]
    },
    {
      department: "Operations, Finance & Legal",
      badge: "GOVERNANCE & OPS",
      description: "Streamline reporting, risk assessment, and document processing with audit-grade precision.",
      capabilities: [
        "Natural language querying on complex financial databases & models",
        "Contract risk review, clause extraction, and regulatory checks",
        "Internal SOP & knowledge base semantic search workflows",
        "Repetitive back-office task automation with custom agent loops"
      ]
    }
  ];

  return (
    <section id="solutions" style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 60 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#2F81F7",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            WORKFORCE CAPABILITY
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16,
            maxWidth: 820
          }}>
            Built around how enterprise teams actually work.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 760,
            lineHeight: 1.65,
            margin: 0
          }}>
            Procuring AI licenses alone does not produce organizational capability. Lasting enterprise value requires systematic role-based enablement, rigorous prompt architecture, and workflows integrated into actual team operations.
          </p>
        </div>

        {/* 4 Shifts - Structured Editorial Divider Layout (No repeated card boxes) */}
        <div style={{
          border: "1px solid #1E293B",
          borderRadius: 10,
          background: "#0B1220",
          overflow: "hidden",
          marginBottom: 80
        }}>
          <div style={{
            padding: "20px 28px",
            borderBottom: "1px solid #1E293B",
            background: "rgba(15, 23, 42, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC", letterSpacing: "-.01em" }}>
              The Strategic Paradigm Shift
            </span>
            <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B" }}>
              INSTITUTIONAL UPGRADING MATRIX
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
            {shifts.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  borderBottom: i < shifts.length - 1 ? "1px solid #1E293B" : "none",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                  alignItems: "center",
                  transition: "background 0.15s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(47, 129, 247, 0.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{
                      fontSize: 11,
                      fontFamily: "ui-monospace, monospace",
                      fontWeight: 700,
                      color: "#2F81F7"
                    }}>
                      TRANSFORMATION {s.num}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "#64748B", textDecoration: "line-through", marginBottom: 4 }}>
                    {s.from}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", lineHeight: 1.35 }}>
                    {s.to}
                  </div>
                </div>

                <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.6 }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Human / Workforce Department Application Matrix */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
                PRACTICAL APPLICATION BY FUNCTION
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F8FAFC", letterSpacing: "-.015em", margin: 0 }}>
                High-impact workflows mapped to organizational roles
              </h3>
            </div>
            <span style={{ fontSize: 13, color: "#64748B" }}>
              Taught through live sandbox environments & client datasets
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {workforceTracks.map((wt, i) => (
              <div
                key={i}
                style={{
                  background: "#0B1220",
                  border: "1px solid #1E293B",
                  borderRadius: 10,
                  padding: "28px 30px",
                  transition: "border-color 0.2s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2F81F7"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E293B"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#F8FAFC", margin: 0 }}>
                    {wt.department}
                  </h4>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#8B7CF6",
                    background: "rgba(139, 124, 246, 0.08)",
                    border: "1px solid rgba(139, 124, 246, 0.25)",
                    padding: "3px 8px",
                    borderRadius: 4,
                    fontFamily: "ui-monospace, monospace"
                  }}>
                    {wt.badge}
                  </span>
                </div>
                <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.5, marginBottom: 18 }}>
                  {wt.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid #1E293B", paddingTop: 16 }}>
                  {wt.capabilities.map((cap, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "#2F81F7", fontSize: 14, lineHeight: "20px" }}>›</span>
                      <span style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.5 }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empirical Evidence & Research Benchmarks - Credible & Restrained */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 10,
          padding: "36px 36px",
          color: "#F8FAFC"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                EMPIRICAL RESEARCH & BENCHMARKS
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-.01em" }}>
                Documented impact of structured enterprise GenAI training
              </div>
            </div>
            <span style={{ fontSize: 12, color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
              PEER-REVIEWED & FIELD TRIAL CITATIONS
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 20 }}>
            <div style={{ background: "#050B1A", border: "1px solid #1E293B", borderRadius: 8, padding: "24px" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#2F81F7", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                ~2 hrs / wk
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F8FAFC", marginBottom: 8 }}>
                Reclaimed from Routine Communications
              </div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6 }}>
                A 2025 randomized field evaluation across 66 enterprise organizations showed systematic GenAI training reduced routine email and document drafting by ~2 hours weekly. <em>(Microsoft Research / NBER 2025)</em>
              </div>
            </div>

            <div style={{ background: "#050B1A", border: "1px solid #1E293B", borderRadius: 8, padding: "24px" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#238636", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                +26.08%
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F8FAFC", marginBottom: 8 }}>
                Software Delivery Velocity
              </div>
              <div style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6 }}>
                Randomized controlled trials across 4,867 software engineers across Fortune 100 enterprise environments recorded a 26.08% increase in completed sprint items. <em>(Microsoft Research 2025)</em>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
            * Empirical studies provided for reference. Enterprise training tracks at AI Global Academy are custom-calibrated against each organization's existing workflows and security baselines.
          </p>
        </div>

      </div>
    </section>
  );
}
