import { useState } from 'react';

export default function EnterpriseDelivery() {
  const [activeTab, setActiveTab] = useState("methodology");

  const journey = [
    { num: "01", stage: "Assess", desc: "Baseline organizational AI fluency, tool access, risk boundaries, and target workflows." },
    { num: "02", stage: "Align", desc: "Map tailored curriculum tracks to specific business roles and select high-leverage deliverables." },
    { num: "03", stage: "Enable", desc: "Deliver live interactive cohorts, sandbox workstations, and instructor-guided tool labs." },
    { num: "04", stage: "Build", desc: "Learners ship role-specific prompt architectures, process automations, and capstones." },
    { num: "05", stage: "Scale", desc: "Certify employee proficiency, publish team prompt repositories, and track KPI adoption." }
  ];

  const formats = [
    { duration: "2–4 Hours", title: "Executive Briefing", desc: "Strategic alignment on AI opportunity mapping, risk governance, and organizational operating-model redesign." },
    { duration: "1–2 Days", title: "Department Intensive", desc: "Concentrated hands-on enablement and workflow construction for a single high-priority business unit." },
    { duration: "2–4 Weeks", title: "GenAI Cohort Bootcamp", desc: "Structured intensive combining role-specific tool labs, weekly deliverables, and peer code reviews." },
    { duration: "6–12 Weeks", title: "Enterprise AI Academy", desc: "Full multi-role academy across all departments with capstones, office hours, and manager dashboards." },
    { duration: "Ongoing", title: "Train-the-Trainer Track", desc: "Empowers internal L&D leaders and departmental AI champions to sustain long-term mentorship." },
    { duration: "Custom", title: "Private Enterprise Hub", desc: "Dedicated corporate portal with internal tool guides, proprietary playbooks, and prompt repositories." }
  ];

  const ldChecklist = [
    "Role-based cohort planning & custom learner segmentation",
    "Pre- and post-program empirical skill benchmarks",
    "Attendance, completion, and capstone deliverable auditing",
    "Departmental use-case and prompt asset repository",
    "Manager feedback loops and recurring adoption pulse checks",
    "Internal AI champion identification & showcase demo days"
  ];

  const governancePillars = [
    { title: "Data Classification & Privacy Boundaries", desc: "Establish clear protocols for enterprise data tiers before inputting into LLMs; differentiate zero-retention enterprise API boundaries." },
    { title: "Fact Verification & Hallucination Mitigation", desc: "Train teams on rigorous source triangulation, confidence calibration, citation validation, and automated verification checks." },
    { title: "IP, Copyright & Commercial Compliance", desc: "Audit model training provenance, verify generated creative assets for copyright safety, and enforce strict adherence to brand parameters." },
    { title: "Security Threat Modeling & Prompt Injection", desc: "Identify indirect prompt injection vectors, insecure code generation vulnerabilities, secret leaks, and unauthenticated tool executions." },
    { title: "Human Oversight & Approval Checkpoints", desc: "Establish explicit operational boundaries determining where AI assists vs mandatory human sign-off checkpoints." },
    { title: "Responsible Agent Evaluation & Auditing", desc: "Stress-test autonomous agent tool loops prior to production deployment with rate limits and fallback escalation pathways." }
  ];

  return (
    <section id="enterprise" style={{ padding: "100px 0", background: "#F8FAFC", color: "#0F172A", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FF8A00",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            ENTERPRISE DEPLOYMENT & GOVERNANCE
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 850,
            color: "#0F172A",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Engineered for enterprise scale & zero-retention security.
          </h2>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: "flex",
          gap: 12,
          marginBottom: 40,
          borderBottom: "1px solid #E2E8F0",
          paddingBottom: 14
        }}>
          <button
            onClick={() => setActiveTab("methodology")}
            style={{
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid",
              borderColor: activeTab === "methodology" ? "#FF8A00" : "#CBD5E1",
              background: activeTab === "methodology" ? "#FF8A00" : "#FFFFFF",
              color: activeTab === "methodology" ? "#FFFFFF" : "#475569",
              fontWeight: 750,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow: activeTab === "methodology" ? "0 4px 14px rgba(255, 138, 0, 0.3)" : "none"
            }}
          >
            🚀 5-Stage Delivery Methodology
          </button>
          <button
            onClick={() => setActiveTab("governance")}
            style={{
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid",
              borderColor: activeTab === "governance" ? "#FF8A00" : "#CBD5E1",
              background: activeTab === "governance" ? "#FF8A00" : "#FFFFFF",
              color: activeTab === "governance" ? "#FFFFFF" : "#475569",
              fontWeight: 750,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow: activeTab === "governance" ? "0 4px 14px rgba(255, 138, 0, 0.3)" : "none"
            }}
          >
            🛡️ AI Governance & Security (6 Pillars)
          </button>
        </div>

        {/* TAB 1: METHODOLOGY */}
        {activeTab === "methodology" && (
          <div>
            {/* 5-Stage Journey Progression */}
            <div style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 12,
              padding: "32px 28px",
              marginBottom: 40,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#0F172A" }}>
                  The 5-Stage Enterprise Learning Lifecycle
                </span>
                <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#FF8A00", fontWeight: 700 }}>
                  END-TO-END EXECUTION MODEL
                </span>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16
              }}>
                {journey.map((j, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: "20px 18px",
                      position: "relative"
                    }}
                  >
                    <div style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#FF8A00",
                      fontFamily: "ui-monospace, monospace",
                      marginBottom: 8
                    }}>
                      PHASE {j.num}
                    </div>
                    <h4 style={{ fontSize: 16, fontWeight: 750, color: "#0F172A", marginBottom: 6 }}>
                      {j.stage}
                    </h4>
                    <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.5, margin: 0 }}>
                      {j.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flexible Formats Grid */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#FF8A00", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4, fontFamily: "ui-monospace, monospace" }}>
                    ENGAGEMENT STRUCTURES
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 800, color: "#0F172A", margin: 0, letterSpacing: "-.01em" }}>
                    Flexible delivery formats tailored to organizational scale
                  </h3>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {formats.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: 10,
                      padding: "22px 24px",
                      color: "#0F172A",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <h4 style={{ fontSize: 16, fontWeight: 750, color: "#0F172A", margin: 0 }}>
                        {f.title}
                      </h4>
                      <span style={{
                        fontSize: 11,
                        fontFamily: "ui-monospace, monospace",
                        color: "#C2410C",
                        background: "rgba(255, 138, 0, 0.12)",
                        padding: "3px 8px",
                        borderRadius: 9999,
                        fontWeight: 700
                      }}>
                        {f.duration}
                      </span>
                    </div>
                    <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.55, margin: 0 }}>
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Manager Visibility Controls */}
            <div style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: 12,
              padding: "30px 30px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FF8A00", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
                FOR L&D & BUSINESS LEADERS
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 20, letterSpacing: "-.01em" }}>
                Comprehensive administrative oversight & adoption analytics
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
                {ldChecklist.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "#16A34A", fontWeight: 800, fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 13.5, color: "#334155" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GOVERNANCE & SECURITY */}
        {activeTab === "governance" && (
          <div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20
            }}>
              {governancePillars.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 12,
                    padding: "26px 24px",
                    boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11,
                      fontFamily: "ui-monospace, monospace",
                      fontWeight: 800,
                      color: "#FF8A00",
                      background: "rgba(255, 138, 0, 0.1)",
                      padding: "3px 9px",
                      borderRadius: 9999
                    }}>
                      PILLAR 0{i + 1}
                    </span>
                  </div>
                  <h4 style={{ fontSize: 16, fontWeight: 750, color: "#0F172A", marginBottom: 8 }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: 13.5, color: "#475569", lineHeight: 1.6, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
