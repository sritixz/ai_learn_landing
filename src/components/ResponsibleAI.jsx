export default function ResponsibleAI() {
  const pillars = [
    {
      num: "01",
      title: "Data Classification & Privacy Boundaries",
      desc: "Establish clear protocols for enterprise data tiers before inputting into LLMs; differentiate zero-retention enterprise API boundaries from consumer tools."
    },
    {
      num: "02",
      title: "Fact Verification & Hallucination Mitigation",
      desc: "Train teams on rigorous source triangulation, confidence calibration, citation validation, and automated verification checks."
    },
    {
      num: "03",
      title: "IP, Copyright & Commercial Compliance",
      desc: "Audit model training provenance, verify generated creative assets for copyright safety, and enforce strict adherence to corporate brand parameters."
    },
    {
      num: "04",
      title: "Security Threat Modeling & Prompt Injection",
      desc: "Identify indirect prompt injection vectors, insecure code generation vulnerabilities, secret leaks, and unauthenticated tool executions."
    },
    {
      num: "05",
      title: "Human Oversight & Approval Checkpoints",
      desc: "Establish explicit operational boundaries determining where AI assists, where mandatory human sign-off is required, and where full automation is prohibited."
    },
    {
      num: "06",
      title: "Responsible Agent Evaluation & Auditing",
      desc: "Stress-test autonomous agent tool loops prior to production deployment; implement execution tracing, rate limits, and fallback escalation pathways."
    }
  ];

  return (
    <section style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
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
            GOVERNANCE & RISK MANAGEMENT
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Enable innovation without creating data security risks.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            Responsible AI principles are embedded directly into every practical lab and coding exercise — transforming compliance from an abstract policy into concrete developer and employee habits.
          </p>
        </div>

        {/* 6 Governance Pillars Matrix */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 20,
          marginBottom: 40
        }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#0B1220",
                border: "1px solid #1E293B",
                borderRadius: 8,
                padding: "24px 24px",
                transition: "border-color 0.15s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2F81F7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E293B"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{
                  fontSize: 11,
                  fontFamily: "ui-monospace, monospace",
                  fontWeight: 700,
                  color: "#2F81F7"
                }}>
                  PILLAR {p.num}
                </span>
                <span style={{ fontSize: 11, color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
                  COMPLIANCE STANDARD
                </span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", marginBottom: 8, letterSpacing: "-.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Governance Tailoring Assurance Box */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 8,
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}>
          <div style={{ maxWidth: 780 }}>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#F8FAFC", marginBottom: 4 }}>
              Customized Corporate AI Policies & Security Playbooks
            </h4>
            <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.5, margin: 0 }}>
              We tailor all prompts, tools, and exercises to align with your organization's approved vendor list, SOC2/ISO requirements, and internal data security classifications.
            </p>
          </div>
          <span style={{
            fontSize: 11,
            fontFamily: "ui-monospace, monospace",
            color: "#238636",
            background: "rgba(35, 134, 54, 0.1)",
            border: "1px solid rgba(35, 134, 54, 0.3)",
            padding: "5px 12px",
            borderRadius: 6
          }}>
            SOC2 & GDPR ALIGNED
          </span>
        </div>

      </div>
    </section>
  );
}
