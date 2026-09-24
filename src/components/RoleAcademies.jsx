import { useState } from 'react';

export default function RoleAcademies({ onOpenDemo }) {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      name: "Leadership & Managers",
      icon: "👔",
      focus: "Strategy & Governance",
      useCases: "AI strategy, opportunity mapping, governance, evaluation, adoption leadership, ROI and operating-model redesign."
    },
    {
      name: "Marketing & Growth",
      icon: "🚀",
      focus: "Campaigns & Creative Scaling",
      useCases: "Campaign research, positioning, copy, SEO, social content, creatives, video, personalization, reporting and growth automation."
    },
    {
      name: "Sales & Customer Success",
      icon: "💼",
      focus: "Outreach & Account Intelligence",
      useCases: "Account research, outreach, call preparation, proposal creation, CRM workflows, meeting intelligence, follow-ups and support copilots."
    },
    {
      name: "HR & L&D",
      icon: "👥",
      focus: "Talent & Organizational Knowledge",
      useCases: "JD creation, interview support, learning content, policy Q&A, employee communications, survey synthesis and knowledge assistants."
    },
    {
      name: "Finance & Business Teams",
      icon: "📈",
      focus: "Reporting & Scenario Modeling",
      useCases: "Spreadsheet analysis, variance narratives, management reporting, document extraction, scenario analysis and recurring-report automation."
    },
    {
      name: "Operations & PMO",
      icon: "⚙️",
      focus: "SOPs & Process Automation",
      useCases: "SOP generation, process mapping, project updates, knowledge capture, workflow automation, vendor analysis and executive summaries."
    },
    {
      name: "Product & Design",
      icon: "🎨",
      focus: "PRDs & Rapid Prototyping",
      useCases: "Research synthesis, PRDs, user stories, prototypes, UX copy, concept exploration, rapid testing and AI-enabled product workflows."
    },
    {
      name: "Engineering & IT",
      icon: "🛠️",
      focus: "Coding Copilots & System Architecture",
      useCases: "AI-assisted coding, debugging, test generation, code review, documentation, RAG, tool calling, agents, evaluation and secure deployment."
    },
    {
      name: "Data & Analytics",
      icon: "📊",
      focus: "SQL & Analytical Agents",
      useCases: "Natural-language analysis, SQL generation, Python assistance, dashboard narratives, data-cleaning workflows and analytical agents."
    },
    {
      name: "Creative & Content Teams",
      icon: "🎬",
      focus: "Generative Media & Brand Systems",
      useCases: "Image generation, storyboarding, video, voice, presentation design, brand systems, content repurposing and creative automation."
    }
  ];

  return (
    <section id="role-tracks" style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 03 - ROLE-BASED ACADEMIES
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          One GenAI Academy. Multiple role-specific learning paths.
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          Start with a common foundation, then move each team into use cases that matter to their KPIs.
        </p>

        {/* Role Academy Explorer Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 20 }}>
          {roles.map((r, i) => (
            <div
              key={i}
              onClick={() => setSelectedRole(i)}
              style={{
                background: selectedRole === i ? "#F8FAFC" : "#FFFFFF",
                border: "1.5px solid",
                borderColor: selectedRole === i ? "#0F1F3D" : "#E2E8F0",
                borderRadius: 16, padding: "24px", cursor: "pointer",
                boxShadow: selectedRole === i ? "0 8px 24px rgba(15,31,61,0.08)" : "none",
                transition: "all 0.18s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{
                  fontSize: 24, width: 44, height: 44, borderRadius: 10,
                  background: selectedRole === i ? "#0F1F3D" : "#F1F5F9",
                  color: selectedRole === i ? "#FFF" : "#0F1F3D",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {r.icon}
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  background: "#EFF6FF", color: "#2563EB",
                  padding: "4px 10px", borderRadius: 999
                }}>
                  {r.focus}
                </span>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 8 }}>
                {r.name}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
                {r.useCases}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Pathway Callout Banner */}
        <div style={{
          marginTop: 40, background: "#0F1F3D", color: "#FFFFFF",
          borderRadius: 16, padding: "28px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap"
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", letterSpacing: ".06em" }}>
              CUSTOM ROLE PATHWAY
            </div>
            <h4 style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>
              Request custom curriculum for {roles[selectedRole].name}
            </h4>
          </div>
          <button
            onClick={() => onOpenDemo(`${roles[selectedRole].name} Pathway`)}
            style={{
              background: "#2563EB", color: "#FFFFFF", border: "none",
              padding: "12px 28px", borderRadius: 10, fontWeight: 700,
              fontSize: 14, cursor: "pointer"
            }}
          >
            Get {roles[selectedRole].name} Syllabus →
          </button>
        </div>

      </div>
    </section>
  );
}
