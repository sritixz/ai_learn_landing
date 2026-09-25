export default function ResponsibleAI() {
  const pillars = [
    {
      title: "Data Classification & Privacy",
      desc: "Establish clear protocols for classifying sensitive corporate data before inputting into LLMs; differentiate enterprise security boundaries from consumer tools."
    },
    {
      title: "Fact Verification & Source Checking",
      desc: "Train employees on rigorous source checking, confidence calibration, hallucination detection, and multi-step review procedures."
    },
    {
      title: "IP, Copyright & Brand Compliance",
      desc: "Understand content provenance, review generated creative assets for copyright safety, and enforce strict adherence to corporate brand guidelines."
    },
    {
      title: "AI Security & Threat Awareness",
      desc: "Recognize prompt injection vectors, unsafe code generation, credentials/secrets exposure risks, malicious links, and unauthorized API integrations."
    },
    {
      title: "Human Oversight Checkpoints",
      desc: "Define explicit boundaries for where AI can assist, where mandatory human review is required, and where full automation is prohibited."
    },
    {
      title: "Responsible Agent Deployment",
      desc: "Rigorously evaluate autonomous agents and workflows prior to production rollout; log process outcomes and establish clear escalation paths."
    }
  ];

  return (
    <section style={{ padding: "100px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12, fontFamily: "ui-monospace, monospace" }}>
          RESPONSIBLE AI GOVERNANCE
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 16 }}>
          Upskill teams without creating a data governance problem
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 56, fontWeight: 400 }}>
          Responsible AI practices are woven throughout every single curriculum module rather than isolated into a compliance lecture.
        </p>

        {/* 6 Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 48 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#0D1117", border: "1px solid #30363D",
                borderRadius: 14, padding: "28px 24px",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#388BFD"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; }}
            >
              <div style={{
                fontSize: 11, fontWeight: 700, color: "#388BFD",
                background: "rgba(56, 139, 253, 0.15)", border: "1px solid rgba(56, 139, 253, 0.3)",
                padding: "3px 10px", borderRadius: 6,
                display: "inline-block", marginBottom: 14,
                fontFamily: "ui-monospace, monospace"
              }}>
                Pillar 0{i + 1}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Enterprise Customization Banner */}
        <div style={{
          background: "#0D1117", border: "1px solid #30363D",
          borderRadius: 16, padding: "32px 36px"
        }}>
          <h4 style={{ fontSize: 18, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
            Customized Enterprise Governance & Playbooks
          </h4>
          <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.65, margin: 0 }}>
            We adapt exercises, prompts, and examples directly to your company's approved AI tools, data policies, security controls, and business processes. We can also deliver a customized <strong style={{ color: "#F0F6FC" }}>"Enterprise AI Usage Playbook"</strong> tailored to your organization.
          </p>
        </div>

      </div>
    </section>
  );
}
