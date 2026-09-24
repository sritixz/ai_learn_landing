import React from 'react';

export default function ResponsibleAI() {
  const pillars = [
    {
      title: "Data & privacy",
      desc: "Classify information before sharing it with external AI systems; understand enterprise vs consumer environments.",
      icon: "🔒"
    },
    {
      title: "Verification",
      desc: "Teach source checking, confidence calibration, hallucination detection and review procedures.",
      icon: "🔎"
    },
    {
      title: "Copyright & brand",
      desc: "Understand content provenance, review generated assets and follow company brand and IP policies.",
      icon: "⚖️"
    },
    {
      title: "Security",
      desc: "Recognize prompt injection, unsafe code, secrets exposure, malicious links and risky integrations.",
      icon: "🛡️"
    },
    {
      title: "Human oversight",
      desc: "Define where AI can assist, where humans must approve and where automation should be prohibited.",
      icon: "👁️"
    },
    {
      title: "Responsible deployment",
      desc: "Evaluate agents and workflows before production use; log outcomes and maintain escalation paths.",
      icon: "🚀"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 08 - RESPONSIBLE ENTERPRISE AI
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          Upskill people without creating a data governance problem
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          Responsible AI is embedded across the curriculum rather than isolated into a compliance-only module.
        </p>

        {/* 6 Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20, marginBottom: 48 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 16, padding: "24px", display: "flex", gap: 16
              }}
            >
              <div style={{
                fontSize: 26, width: 48, height: 48, borderRadius: 10,
                background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0
              }}>
                {p.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D", marginBottom: 6 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Enterprise Customization Banner */}
        <div style={{
          background: "#F8FAFC", border: "1.5px solid #CBD5E1",
          borderRadius: 16, padding: "28px 32px"
        }}>
          <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 8 }}>
            Optional enterprise customization
          </h4>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.6 }}>
            We can adapt exercises and examples to your approved AI tools, security policies, brand guidelines, internal knowledge sources and business processes. The academy can also create a company-specific <strong>"AI Usage Playbook"</strong> as a deliverable.
          </p>
        </div>

      </div>
    </section>
  );
}
