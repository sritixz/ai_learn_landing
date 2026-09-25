export default function EnterpriseDelivery() {
  const journey = [
    { num: "01", stage: "Assess", desc: "Baseline current AI fluency, tool stack access, team objectives, risk constraints, and priority workflows." },
    { num: "02", stage: "Align", desc: "Map tailored learning paths to specific roles and select high-value use cases with functional business leaders." },
    { num: "03", stage: "Learn", desc: "Execute live interactive workshops, micro-lessons, live demonstrations, and guided hands-on tool labs." },
    { num: "04", stage: "Build", desc: "Learners build role-specific prompt systems, process automations, AI assistants, and production capstone projects." },
    { num: "05", stage: "Scale", desc: "Certify employee skills, publish reusable workflow libraries, identify AI champions, and track adoption metrics over time." }
  ];

  const formats = [
    { title: "Executive Briefing (2 to 4 hours)", desc: "High-impact alignment on AI strategy, risk management, opportunity mapping, and leadership governance." },
    { title: "Department Workshop (1 to 2 days)", desc: "Focused hands-on transformation and workflow building for a single business function." },
    { title: "GenAI Bootcamp (2 to 4 weeks)", desc: "Structured intensive learning combining role-specific tool labs, exercises, and practical assignments." },
    { title: "Enterprise AI Academy (6 to 12 weeks)", desc: "Multi-role academy pathways, custom projects, weekly office hours, skill certifications, and impact reporting." },
    { title: "Train-the-Trainer Program", desc: "Empowers internal L&D teams and departmental AI champions to sustain long-term adoption and mentorship." },
    { title: "Custom Enterprise Learning Hub", desc: "Company-branded learning hub with custom tool guides, security playbooks, and reusable workflow libraries." }
  ];

  const ldChecklist = [
    "Role-based cohort planning and learner segmentation",
    "Pre- and post-assessment skill benchmarks",
    "Attendance, completion, and capstone project tracking",
    "Departmental use-case and prompt asset portfolio",
    "Manager feedback and ongoing adoption pulse checks",
    "Internal AI champion identification and showcase events"
  ];

  return (
    <section id="enterprise-delivery" style={{ padding: "100px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12, fontFamily: "ui-monospace, monospace" }}>
          ENTERPRISE DELIVERY FRAMEWORK
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 16 }}>
          Designed for company-wide adoption, not one-off workshops
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 56, fontWeight: 400 }}>
          We combine instructor-led workshops, self-paced tool practice, live use-case labs, dedicated office hours, and continuous adoption tracking.
        </p>

        {/* 5-Stage Enterprise Learning Journey */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0F6FC", marginBottom: 24, letterSpacing: "-.01em" }}>
            The 5-stage enterprise learning journey
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {journey.map((j, i) => (
              <div
                key={i}
                style={{
                  background: "#0D1117", border: "1px solid #30363D",
                  borderRadius: 14, padding: "24px 20px"
                }}
              >
                <div style={{
                  fontSize: 12, fontWeight: 900, color: "#388BFD",
                  background: "#161B22", border: "1px solid #30363D",
                  width: 32, height: 32, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
                  fontFamily: "ui-monospace, monospace"
                }}>
                  {j.num}
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
                  {j.stage}
                </h4>
                <p style={{ fontSize: 13, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Formats Grid */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0F6FC", marginBottom: 24, letterSpacing: "-.01em" }}>
            Flexible formats tailored to your organizational scale
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {formats.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#0D1117", border: "1px solid #30363D",
                  borderRadius: 14, padding: "26px 24px"
                }}
              >
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 13.5, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* L&D & Business Leaders Checklist */}
        <div style={{
          background: "#0D1117", border: "1px solid #30363D",
          borderRadius: 18, padding: "40px 36px"
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
            FOR L&D & BUSINESS LEADERS
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, color: "#F0F6FC", letterSpacing: "-.01em" }}>
            Complete manager visibility & administrative controls
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {ldChecklist.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 14, color: "#8B949E" }}>
                <span style={{ color: "#2EA043", fontWeight: 800, fontSize: 16 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
