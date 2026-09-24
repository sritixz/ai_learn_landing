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
    <section style={{ padding: "120px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Responsible Enterprise AI
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          Upskill teams without creating a data governance problem
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          Responsible AI practices are woven throughout every single curriculum module rather than isolated into a compliance lecture.
        </p>

        {/* 6 Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28, marginBottom: 56 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 18, padding: "32px 28px",
                boxShadow: "0 4px 16px rgba(15,23,42,0.03)"
              }}
            >
              <div style={{
                fontSize: 12, fontWeight: 700, color: "#2563EB",
                background: "#EFF6FF", padding: "4px 12px", borderRadius: 999,
                display: "inline-block", marginBottom: 16
              }}>
                Pillar 0{i + 1}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 10 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Enterprise Customization Banner */}
        <div style={{
          background: "#F8FAFC", border: "1.5px solid #CBD5E1",
          borderRadius: 20, padding: "36px 40px"
        }}>
          <h4 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 10 }}>
            Customized Enterprise Governance & Playbooks
          </h4>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.65, margin: 0 }}>
            We adapt exercises, prompts, and examples directly to your company's approved AI tools, data policies, security controls, and business processes. We can also deliver a customized <strong>"Enterprise AI Usage Playbook"</strong> tailored to your organization.
          </p>
        </div>

      </div>
    </section>
  );
}
