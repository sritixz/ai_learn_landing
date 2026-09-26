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
    <section id="resources" style={{ padding: "110px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
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
            BUSINESS IMPACT & PACKAGES
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 850,
            color: "#0F172A",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Accountability tied to measurable business output.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#475569",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            We establish baseline operational metrics before training begins and track employee adoption, artifact production, and task cycle times throughout the engagement.
          </p>
        </div>

        {/* Business Metrics Scorecard */}
        <div style={{
          background: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: 12,
          padding: "32px 32px",
          marginBottom: 64,
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.05)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 750, color: "#0F172A" }}>
              Enterprise Impact Measurement Dimensions
            </span>
            <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B", fontWeight: 600 }}>
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
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: 10,
                  padding: "20px 22px",
                  boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)"
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#FF8A00", fontFamily: "ui-monospace, monospace", marginBottom: 6 }}>
                  METRIC 0{i + 1}
                </div>
                <h4 style={{ fontSize: 15.5, fontWeight: 750, color: "#0F172A", marginBottom: 6 }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.55, margin: 0 }}>
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
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FF8A00", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4, fontFamily: "ui-monospace, monospace" }}>
                ENGAGEMENT STRUCTURES
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F172A", margin: 0, letterSpacing: "-.015em" }}>
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
                  background: "#FFFFFF",
                  border: "1.5px solid",
                  borderColor: pkg.highlighted ? "#FF8A00" : "#E2E8F0",
                  borderRadius: 12,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: pkg.highlighted ? "0 8px 30px rgba(255, 138, 0, 0.15)" : "0 4px 16px rgba(15, 23, 42, 0.05)",
                  transform: pkg.highlighted ? "translateY(-4px)" : "none"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 750,
                      color: pkg.highlighted ? "#FF8A00" : "#64748B",
                      background: pkg.highlighted ? "rgba(255, 138, 0, 0.12)" : "#F1F5F9",
                      border: "1px solid",
                      borderColor: pkg.highlighted ? "rgba(255, 138, 0, 0.3)" : "#CBD5E1",
                      padding: "3px 8px",
                      borderRadius: 9999,
                      fontFamily: "ui-monospace, monospace"
                    }}>
                      {pkg.badge}
                    </span>
                    <span style={{ fontSize: 11.5, color: "#64748B", fontWeight: 600 }}>
                      {pkg.bestFor}
                    </span>
                  </div>

                  <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 16 }}>
                    {pkg.name}
                  </h4>

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    borderTop: "1px solid #E2E8F0",
                    paddingTop: 16,
                    marginBottom: 28
                  }}>
                    {pkg.features.map((f, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: pkg.highlighted ? "#FF8A00" : "#64748B", fontSize: 12, lineHeight: "18px" }}>›</span>
                        <span style={{ fontSize: 12.5, color: "#334155", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo(`${pkg.name} Package`)}
                  className={pkg.highlighted ? "btn-orange-pill" : "btn-navy-pill"}
                  style={{ width: "100%", justifyContent: "center", padding: "11px" }}
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
