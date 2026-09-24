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
    <section id="enterprise-delivery" style={{ padding: "120px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Enterprise Delivery Model
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          Designed for company-wide adoption, not one-off workshops
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          We combine instructor-led workshops, self-paced tool practice, live use-case labs, dedicated office hours, and continuous adoption tracking.
        </p>

        {/* 5-Stage Enterprise Learning Journey */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F172A", marginBottom: 32, letterSpacing: "-.01em" }}>
            The 5-stage enterprise learning journey
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {journey.map((j, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC", border: "1px solid #E2E8F0",
                  borderRadius: 18, padding: "28px 24px", position: "relative"
                }}
              >
                <div style={{
                  fontSize: 12, fontWeight: 900, color: "#2563EB",
                  background: "#EFF6FF", width: 36, height: 36, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14
                }}>
                  {j.num}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 10 }}>
                  {j.stage}
                </h4>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Formats Grid */}
        <div style={{ marginBottom: 80 }}>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F172A", marginBottom: 32, letterSpacing: "-.01em" }}>
            Flexible formats tailored to your organizational scale
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {formats.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 18, padding: "32px 28px",
                  boxShadow: "0 4px 16px rgba(15,23,42,0.03)"
                }}
              >
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 10 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* L&D & Business Leaders Checklist */}
        <div style={{
          background: "#0F172A", color: "#FFFFFF",
          borderRadius: 24, padding: "48px 40px"
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>
            FOR L&D & BUSINESS LEADERS
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 28, letterSpacing: "-.01em" }}>
            Complete manager visibility & administrative controls
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {ldChecklist.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 15, color: "#E2E8F0" }}>
                <span style={{ color: "#34D399", fontWeight: 800, fontSize: 18 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
