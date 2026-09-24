import React from 'react';

export default function EnterpriseDelivery() {
  const journey = [
    { num: "1", stage: "Assess", desc: "Baseline AI fluency, tool access, department goals, risk constraints and priority workflows." },
    { num: "2", stage: "Align", desc: "Map learning paths to roles and choose high-value use cases with functional leaders." },
    { num: "3", stage: "Learn", desc: "Run live workshops, short lessons, demos and guided tool labs." },
    { num: "4", stage: "Build", desc: "Learners create role-specific prompts, automations, assistants and capstone projects." },
    { num: "5", stage: "Scale", desc: "Certify skills, publish reusable assets, identify AI champions and track adoption over time." }
  ];

  const formats = [
    { title: "Executive Briefing - 2 to 4 hours", desc: "AI strategy, risk, opportunity mapping and leadership alignment." },
    { title: "Department Workshop - 1 to 2 days", desc: "Focused, hands-on transformation for one business function." },
    { title: "GenAI Bootcamp - 2 to 4 weeks", desc: "Structured learning plus role labs and practical assignments." },
    { title: "Enterprise AI Academy - 6 to 12 weeks", desc: "Multi-role pathways, projects, office hours, certifications and impact tracking." },
    { title: "Train-the-Trainer", desc: "Enable internal L&D teams and AI champions to sustain adoption." },
    { title: "Custom Learning Hub", desc: "Company-branded learning paths, resources, tool guides and reusable workflow libraries." }
  ];

  const ldChecklist = [
    "Role-based cohort plans and learner segmentation.",
    "Pre/post assessments and practical skill checks.",
    "Attendance, completion and project tracking.",
    "Use-case portfolio by department.",
    "Manager feedback and adoption pulse checks.",
    "Capstone showcase and internal AI champion identification."
  ];

  return (
    <section id="enterprise-delivery" style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 07 - ENTERPRISE DELIVERY
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          Designed for company-wide adoption, not one-off workshops
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          Combine instructor-led learning, self-paced practice, use-case labs, office hours and adoption measurement.
        </p>

        {/* 5-Stage Enterprise Learning Journey */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F1F3D", marginBottom: 24, letterSpacing: "-.01em" }}>
            A 5-stage enterprise learning journey
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {journey.map((j, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC", border: "1.5px solid #CBD5E1",
                  borderRadius: 16, padding: "24px", position: "relative"
                }}
              >
                <div style={{
                  fontSize: 14, fontWeight: 900, color: "#2563EB",
                  background: "#EFF6FF", width: 32, height: 32, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12
                }}>
                  {j.num}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 8 }}>
                  {j.stage}
                </h4>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flexible Formats Grid */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F1F3D", marginBottom: 24, letterSpacing: "-.01em" }}>
            Flexible formats tailored to your timeline
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
            {formats.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, padding: "24px",
                  boxShadow: "0 2px 8px rgba(15,31,61,0.04)"
                }}
              >
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D", marginBottom: 8 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.55 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* L&D & Business Leaders Checklist */}
        <div style={{
          background: "#0F1F3D", color: "#FFFFFF",
          borderRadius: 20, padding: "36px"
        }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, letterSpacing: "-.01em" }}>
            For L&D and business leaders
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {ldChecklist.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "#E2E8F0" }}>
                <span style={{ color: "#60A5FA", fontWeight: 800, fontSize: 18 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
