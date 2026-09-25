export default function ROIAndPackages({ onOpenDemo }) {
  const metrics = [
    { title: "Time Saved", desc: "Measurable hours reduced on high-frequency recurring tasks and business workflows." },
    { title: "Cycle Time Reduction", desc: "Accelerated completion rates for campaigns, data analysis, proposals, code, and reports." },
    { title: "Deliverable Quality", desc: "Manager-scored evaluation of AI-assisted outputs against established quality standards." },
    { title: "Active Adoption Rate", desc: "Percentage of trained employees actively utilizing approved prompt libraries and workflow assets." },
    { title: "Process Automation", desc: "Count of repetitive manual steps automated with appropriate human-in-the-loop controls." },
    { title: "Business Use Cases", desc: "Production capstones successfully deployed into active department workflows." }
  ];

  const packages = [
    {
      name: "AI Essentials",
      bestFor: "Company-Wide AI Literacy",
      includes: "GenAI foundations, prompting techniques, everyday productivity tools, and data privacy principles.",
      cta: "Start AI Literacy"
    },
    {
      name: "Functional Accelerator",
      bestFor: "Departmental Deep-Dives",
      includes: "Essentials + role-specific labs, custom prompt libraries, and functional workflow playbooks.",
      cta: "Upskill a Department",
      highlighted: true
    },
    {
      name: "AI Builders Track",
      bestFor: "Technical & Power Users",
      includes: "Coding copilots, process automation, agent architecture, RAG deployment, and evaluation.",
      cta: "Build AI Capability"
    },
    {
      name: "Enterprise Academy",
      bestFor: "Multi-Department Rollout",
      includes: "Full role tracks, capstone projects, manager reporting, governance integration, and custom hub.",
      cta: "Design Enterprise Academy"
    }
  ];

  return (
    <section id="resources" style={{ padding: "110px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
          IMPACT & PRICING PACKAGES
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 18 }}>
          Training structured around real work, not buzzwords
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          We tie learning outcomes directly to practical productivity metrics, active tool adoption rates, and functional team deliverables.
        </p>

        {/* Business Metrics Grid */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F0F6FC", marginBottom: 28, letterSpacing: "-.01em" }}>
            Measuring learning impact in business metrics
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "#0D1117", border: "1px solid #30363D",
                  borderRadius: 14, padding: "32px 26px"
                }}
              >
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Packages */}
        <div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F0F6FC", marginBottom: 10, letterSpacing: "-.01em" }}>
            Enterprise Program Packages
          </h3>
          <p style={{ fontSize: 14.5, color: "#8B949E", marginBottom: 44 }}>
            Pricing is customized based on cohort size, delivery format, depth, instructor involvement, and enterprise customization.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                style={{
                  background: pkg.highlighted ? "rgba(56, 139, 253, 0.08)" : "#0D1117",
                  border: "1px solid",
                  borderColor: pkg.highlighted ? "#388BFD" : "#30363D",
                  borderRadius: 16, padding: "36px 28px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  boxShadow: pkg.highlighted ? "0 0 20px rgba(56, 139, 253, 0.18)" : "none"
                }}
              >
                <div>
                  <div style={{
                    fontSize: 11, fontWeight: 800,
                    color: pkg.highlighted ? "#388BFD" : "#8B949E",
                    textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 12,
                    fontFamily: "ui-monospace, monospace"
                  }}>
                    {pkg.bestFor}
                  </div>
                  <h4 style={{ fontSize: 21, fontWeight: 800, color: "#F0F6FC", marginBottom: 14 }}>
                    {pkg.name}
                  </h4>
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.65 }}>{pkg.includes}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo(`${pkg.name} Package`)}
                  style={{
                    width: "100%", padding: "13px 20px", borderRadius: 8, border: "1px solid rgba(240, 246, 252, 0.1)",
                    fontWeight: 700, fontSize: 14, cursor: "pointer",
                    background: pkg.highlighted ? "#238636" : "#161B22",
                    color: "#FFFFFF", transition: "all 0.15s ease",
                    boxShadow: pkg.highlighted ? "0 2px 8px rgba(35, 134, 54, 0.3)" : "none"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = pkg.highlighted ? "#2EA043" : "#30363D"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = pkg.highlighted ? "#238636" : "#161B22"; }}
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

