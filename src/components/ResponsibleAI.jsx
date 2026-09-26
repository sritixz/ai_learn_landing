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
    <section style={{ padding: "110px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
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
            GOVERNANCE & RISK MANAGEMENT
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 850,
            color: "#0F172A",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Enable innovation without creating data security risks.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#475569",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          marginBottom: 40
        }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 12,
                padding: "24px 24px",
                transition: "all 0.15s ease",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#CBD5E1"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(15, 23, 42, 0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 23, 42, 0.05)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{
                  fontSize: 11,
                  fontFamily: "ui-monospace, monospace",
                  fontWeight: 700,
                  color: "#FF8A00"
                }}>
                  PILLAR {p.num}
                </span>
                <span style={{ fontSize: 11, color: "#64748B", fontFamily: "ui-monospace, monospace", fontWeight: 600 }}>
                  COMPLIANCE STANDARD
                </span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 750, color: "#0F172A", marginBottom: 8, letterSpacing: "-.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Governance Tailoring Assurance Box */}
        <div style={{
          background: "#F8FAFC",
          border: "1px solid #E2E8F0",
          borderRadius: 12,
          padding: "24px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)"
        }}>
          <div style={{ maxWidth: 780 }}>
            <h4 style={{ fontSize: 15, fontWeight: 750, color: "#0F172A", marginBottom: 4 }}>
              Customized Corporate AI Policies & Security Playbooks
            </h4>
            <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.5, margin: 0 }}>
              We tailor all prompts, tools, and exercises to align with your organization's approved vendor list, SOC2/ISO requirements, and internal data security classifications.
            </p>
          </div>
          <span style={{
            fontSize: 11.5,
            fontFamily: "ui-monospace, monospace",
            color: "#15803D",
            background: "rgba(21, 128, 61, 0.1)",
            border: "1px solid rgba(21, 128, 61, 0.3)",
            padding: "5px 12px",
            borderRadius: 9999,
            fontWeight: 700
          }}>
            SOC2 & GDPR ALIGNED
          </span>
        </div>

      </div>
    </section>
  );
}
