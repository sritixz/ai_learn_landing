import React from 'react';

export default function ROIAndPackages({ onOpenDemo }) {
  const metrics = [
    { title: "Time saved", desc: "Minutes or hours reduced on selected recurring workflows." },
    { title: "Cycle time", desc: "Faster completion of campaigns, analysis, proposals, code, reports or internal requests." },
    { title: "Quality", desc: "Manager or reviewer scoring of AI-assisted work against predefined standards." },
    { title: "Adoption", desc: "Share of employees using approved workflows and reusable AI assets." },
    { title: "Automation", desc: "Number of manual steps removed or automated with appropriate controls." },
    { title: "Business use cases", desc: "Capstones moved from training into pilot or production workflows." }
  ];

  const packages = [
    {
      name: "AI Essentials",
      bestFor: "Company-wide literacy",
      includes: "Foundations, prompting, productivity, responsible AI",
      cta: "Start AI Literacy"
    },
    {
      name: "Functional Accelerator",
      bestFor: "A specific department",
      includes: "Essentials + role labs + workflow playbook",
      cta: "Upskill a Team",
      highlighted: true
    },
    {
      name: "AI Builders",
      bestFor: "Technical / power users",
      includes: "Coding, automation, agents, RAG, evaluation",
      cta: "Build AI Capability"
    },
    {
      name: "Enterprise Academy",
      bestFor: "Multi-function rollout",
      includes: "Role tracks + capstones + reporting + customization",
      cta: "Design Our Academy"
    }
  ];

  return (
    <section id="resources" style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 09 - WHY AI GLOBAL ACADEMY
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          Training built around work, not buzzwords
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          Role-first curriculum across major models, creative tools, coding copilots, automation platforms and agent frameworks.
        </p>

        {/* Business Metrics Grid */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F1F3D", marginBottom: 24, letterSpacing: "-.01em" }}>
            Measure learning in business language
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC", border: "1px solid #CBD5E1",
                  borderRadius: 16, padding: "24px"
                }}
              >
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 6 }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.55 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Enterprise Packages */}
        <div>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F1F3D", marginBottom: 12, letterSpacing: "-.01em" }}>
            Suggested enterprise packages
          </h3>
          <p style={{ fontSize: 14, color: "#64748B", marginBottom: 32 }}>
            Pricing is customized by cohort size, delivery mode, depth, instructor involvement and enterprise customization.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                style={{
                  background: pkg.highlighted ? "#0F1F3D" : "#FFFFFF",
                  color: pkg.highlighted ? "#FFFFFF" : "#0F1F3D",
                  border: pkg.highlighted ? "2px solid #0F1F3D" : "1px solid #E2E8F0",
                  borderRadius: 20, padding: "32px 24px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  boxShadow: pkg.highlighted ? "0 12px 32px rgba(15,31,61,0.2)" : "none"
                }}
              >
                <div>
                  <div style={{
                    fontSize: 11, fontWeight: 800,
                    color: pkg.highlighted ? "#60A5FA" : "#2563EB",
                    textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8
                  }}>
                    PACKAGE 0{i + 1}
                  </div>
                  <h4 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>
                    {pkg.name}
                  </h4>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.7, textTransform: "uppercase" }}>Best For</div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>{pkg.bestFor}</div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.7, textTransform: "uppercase" }}>Includes</div>
                    <div style={{ fontSize: 14, lineHeight: 1.5, marginTop: 4, opacity: 0.9 }}>{pkg.includes}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenDemo(`${pkg.name} Package`)}
                  style={{
                    width: "100%", padding: "14px 20px", borderRadius: 10, border: "none",
                    fontWeight: 700, fontSize: 15, cursor: "pointer",
                    background: pkg.highlighted ? "#2563EB" : "#0F1F3D",
                    color: "#FFFFFF", transition: "all 0.15s ease"
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
