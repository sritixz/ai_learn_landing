export default function EnterpriseDelivery() {
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

  return (
    <section id="enterprise" style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
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
            DELIVERY METHODOLOGY
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            Engineered for enterprise-wide adoption, not one-off lectures.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            We combine synchronous instructor-led labs, private sandbox practice, customized prompt libraries, weekly office hours, and manager-tracked adoption analytics.
          </p>
        </div>

        {/* 5-Stage Journey Progression */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 10,
          padding: "32px 28px",
          marginBottom: 48
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>
              The 5-Stage Enterprise Learning Lifecycle
            </span>
            <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B" }}>
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
                  background: "#050B1A",
                  border: "1px solid #1E293B",
                  borderRadius: 8,
                  padding: "20px 18px",
                  position: "relative"
                }}
              >
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#2F81F7",
                  fontFamily: "ui-monospace, monospace",
                  marginBottom: 8
                }}>
                  PHASE {j.num}
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", marginBottom: 6 }}>
                  {j.stage}
                </h4>
                <p style={{ fontSize: 12.5, color: "#94A3B8", lineHeight: 1.5, margin: 0 }}>
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Formats Table / Grid */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 4, fontFamily: "ui-monospace, monospace" }}>
                ENGAGEMENT STRUCTURES
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F8FAFC", margin: 0, letterSpacing: "-.01em" }}>
                Flexible delivery formats tailored to organizational scale
              </h3>
            </div>
            <span style={{ fontSize: 12, color: "#64748B" }}>
              Virtual, hybrid, or on-site delivery globally
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {formats.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#0B1220",
                  border: "1px solid #1E293B",
                  borderRadius: 8,
                  padding: "22px 24px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", margin: 0 }}>
                    {f.title}
                  </h4>
                  <span style={{
                    fontSize: 11,
                    fontFamily: "ui-monospace, monospace",
                    color: "#2F81F7",
                    background: "rgba(47, 129, 247, 0.1)",
                    padding: "2px 8px",
                    borderRadius: 4
                  }}>
                    {f.duration}
                  </span>
                </div>
                <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.55, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manager Visibility Controls */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 10,
          padding: "32px 32px"
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
            FOR L&D & BUSINESS LEADERS
          </div>
          <h3 style={{ fontSize: 19, fontWeight: 800, color: "#F8FAFC", marginBottom: 20, letterSpacing: "-.01em" }}>
            Comprehensive administrative oversight & adoption analytics
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
            {ldChecklist.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "#238636", fontWeight: 800, fontSize: 13 }}>✓</span>
                <span style={{ fontSize: 13.5, color: "#CBD5E1" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
