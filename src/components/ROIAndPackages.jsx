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
    <section id="resources" style={{ padding: "120px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Impact & Pricing Models
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          Training structured around real work, not buzzwords
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          We tie learning outcomes directly to practical productivity metrics, active tool adoption rates, and functional team deliverables.
        </p>

        {/* Business Metrics Grid */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F172A", marginBottom: 32, letterSpacing: "-.01em" }}>
            Measuring learning impact in business metrics
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC", border: "1px solid #E2E8F0",
                  borderRadius: 18, padding: "32px 28px"
                }}
              >
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Packages */}
        <div>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F1F3D", marginBottom: 12, letterSpacing: "-.01em" }}>
            Enterprise Program Packages
          </h3>
          <p style={{ fontSize: 15, color: "#64748B", marginBottom: 40 }}>
            Pricing is customized based on cohort size, delivery format, depth, instructor involvement, and enterprise customization.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                style={{
                  background: pkg.highlighted ? "#0F172A" : "#FFFFFF",
                  color: pkg.highlighted ? "#FFFFFF" : "#0F172A",
                  border: pkg.highlighted ? "2px solid #0F172A" : "1px solid #E2E8F0",
                  borderRadius: 20, padding: "36px 28px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  boxShadow: pkg.highlighted ? "0 12px 32px rgba(15,23,42,0.18)" : "0 2px 8px rgba(15,23,42,0.02)"
                }}
              >
                <div>
                  <div style={{
                    fontSize: 12, fontWeight: 800,
                    color: pkg.highlighted ? "#60A5FA" : "#2563EB",
                    textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10
                  }}>
                    {pkg.bestFor}
                  </div>
                  <h4 style={{ fontSize: 22, fontWeight: 900, marginBottom: 16 }}>
                    {pkg.name}
                  </h4>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.9 }}>{pkg.includes}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo(`${pkg.name} Package`)}
                  style={{
                    width: "100%", padding: "14px 20px", borderRadius: 10, border: "none",
                    fontWeight: 700, fontSize: 15, cursor: "pointer",
                    background: pkg.highlighted ? "#2563EB" : "#0F172A",
                    color: "#FFFFFF", transition: "all 0.15s ease"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
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
