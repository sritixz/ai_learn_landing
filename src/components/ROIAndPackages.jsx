export default function ROIAndPackages({ onOpenDemo }) {
  const metrics = [
    { title: "Task Velocity & Time Savings", desc: "Measurable reduction in weekly hours spent on recurring communications, research synthesis, and data compilation." },
    { title: "Software & PR Cycle Reduction", desc: "Accelerated sprint velocity, unit test coverage expansion, and reduced pull request turnaround times." },
    { title: "Output Quality & Consistency", desc: "Manager-scored evaluation of AI-generated work products against enterprise brand, tone, and accuracy baselines." },
    { title: "Active Workflow Adoption Rate", desc: "Percentage of trained staff actively deploying standardized prompt templates and automated workflows 90 days post-training." },
    { title: "Process Automation Volume", desc: "Number of manual operational steps successfully delegated to governed AI pipelines with human checkpoints." },
    { title: "Enterprise Capstones in Production", desc: "Count of functional departmental assistants and automated workflows deployed into active operations." }
  ];

  const packages = [
    {
      name: "AI Essentials",
      badge: "FOUNDATION",
      bestFor: "Organization-Wide Literacy",
      features: [
        "Core LLM dynamics & token mechanics",
        "Prompt architecture & standard templates",
        "Data privacy & zero-retention guidelines",
        "Everyday office workflow acceleration"
      ],
      cta: "Request Foundation Plan"
    },
    {
      name: "Department Accelerator",
      badge: "POPULAR",
      bestFor: "Functional Team Deep-Dives",
      features: [
        "Everything in AI Essentials",
        "Role-specific sandbox workstations",
        "Customized departmental prompt library",
        "Sanitized corporate dataset exercises"
      ],
      cta: "Upskill a Department",
      highlighted: true
    },
    {
      name: "AI Builders & Devs",
      badge: "TECHNICAL",
      bestFor: "Engineers & Power Users",
      features: [
        "AI coding copilots & CLI tools",
        "Autonomous agent architecture (LangGraph)",
        "API integration & webhook pipelines",
        "Enterprise RAG vector retrieval"
      ],
      cta: "Enroll Technical Cohort"
    },
    {
      name: "Enterprise Academy",
      badge: "TRANSFORMATION",
      bestFor: "Full Organization Rollout",
      features: [
        "Multi-department simultaneous tracks",
        "Custom LMS integration & internal hub",
        "Executive ROI & adoption dashboard",
        "Dedicated weekly mentor office hours"
      ],
      cta: "Design Enterprise Academy"
    }
  ];

  return (
    <section id="resources" style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#2F81F7",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            BUSINESS IMPACT & PACKAGES
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Accountability tied to measurable business output.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            We establish baseline operational metrics before training begins and track employee adoption, artifact production, and task cycle times throughout the engagement.
          </p>
        </div>

        {/* Business Metrics Scorecard */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 10,
          padding: "32px 32px",
          marginBottom: 64
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>
              Enterprise Impact Measurement Dimensions
            </span>
            <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B" }}>
              VALIDATED ADOPTION SCORECARD
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20
          }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "#050B1A",
                  border: "1px solid #1E293B",
                  borderRadius: 8,
                  padding: "20px 22px"
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", fontFamily: "ui-monospace, monospace", marginBottom: 6 }}>
                  METRIC 0{i + 1}
                </div>
                <h4 style={{ fontSize: 15.5, fontWeight: 700, color: "#F8FAFC", marginBottom: 6 }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.55, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Program Packages */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4, fontFamily: "ui-monospace, monospace" }}>
                ENGAGEMENT STRUCTURES
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F8FAFC", margin: 0, letterSpacing: "-.015em" }}>
                Enterprise Program Packages
              </h3>
            </div>
            <span style={{ fontSize: 13, color: "#64748B" }}>
              Calibrated to cohort size and organizational governance needs
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20
          }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                style={{
                  background: "#0B1220",
                  border: "1px solid",
                  borderColor: pkg.highlighted ? "#2F81F7" : "#1E293B",
                  borderRadius: 10,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: pkg.highlighted ? "#2F81F7" : "#64748B",
                      background: pkg.highlighted ? "rgba(47, 129, 247, 0.12)" : "rgba(30, 41, 59, 0.5)",
                      border: "1px solid",
                      borderColor: pkg.highlighted ? "rgba(47, 129, 247, 0.3)" : "rgba(100, 116, 139, 0.2)",
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontFamily: "ui-monospace, monospace"
                    }}>
                      {pkg.badge}
                    </span>
                    <span style={{ fontSize: 11, color: "#64748B" }}>
                      {pkg.bestFor}
                    </span>
                  </div>

                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#F8FAFC", marginBottom: 16 }}>
                    {pkg.name}
                  </h4>

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    borderTop: "1px solid #1E293B",
                    paddingTop: 16,
                    marginBottom: 28
                  }}>
                    {pkg.features.map((f, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: pkg.highlighted ? "#2F81F7" : "#64748B", fontSize: 12, lineHeight: "18px" }}>›</span>
                        <span style={{ fontSize: 12.5, color: "#94A3B8", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo(`${pkg.name} Package`)}
                  style={{
                    width: "100%",
                    padding: "10px 16px",
                    borderRadius: 7,
                    border: "1px solid",
                    borderColor: pkg.highlighted ? "rgba(255, 255, 255, 0.15)" : "#1E293B",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                    background: pkg.highlighted ? "#238636" : "#050B1A",
                    color: "#FFFFFF",
                    transition: "all 0.15s ease",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = pkg.highlighted ? "#2EA043" : "#1E293B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = pkg.highlighted ? "#238636" : "#050B1A";
                  }}
                >
                  {pkg.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
