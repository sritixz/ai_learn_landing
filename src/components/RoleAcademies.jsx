import { useState } from 'react';

export default function RoleAcademies({ onOpenDemo }) {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      name: "Leadership & Managers",
      focus: "Strategy & Governance",
      useCases: "AI strategy, opportunity mapping, governance, evaluation, adoption leadership, ROI and operating-model redesign."
    },
    {
      name: "Marketing & Growth",
      focus: "Campaigns & Content Scaling",
      useCases: "Campaign research, positioning, copy, SEO, social content, creatives, video, personalization, reporting and growth automation."
    },
    {
      name: "Sales & Customer Success",
      focus: "Outreach & Account Intelligence",
      useCases: "Account research, outreach, call preparation, proposal creation, CRM workflows, meeting intelligence, follow-ups and support copilots."
    },
    {
      name: "HR & L&D",
      focus: "Talent & Policy Knowledge",
      useCases: "JD creation, interview support, learning content, policy Q&A, employee communications, survey synthesis and knowledge assistants."
    },
    {
      name: "Finance & Business Teams",
      focus: "Financial Modeling & Reporting",
      useCases: "Spreadsheet analysis, variance narratives, management reporting, document extraction, scenario analysis and recurring-report automation."
    },
    {
      name: "Operations & PMO",
      focus: "SOPs & Process Automation",
      useCases: "SOP generation, process mapping, project updates, knowledge capture, workflow automation, vendor analysis and executive summaries."
    },
    {
      name: "Product & Design",
      focus: "PRDs & Rapid Prototyping",
      useCases: "Research synthesis, PRDs, user stories, prototypes, UX copy, concept exploration, rapid testing and AI-enabled product workflows."
    },
    {
      name: "Engineering & IT",
      focus: "Coding Copilots & Dev Architecture",
      useCases: "AI-assisted coding, debugging, test generation, code review, documentation, RAG, tool calling, agents, evaluation and secure deployment."
    },
    {
      name: "Data & Analytics",
      focus: "SQL & Data Extraction",
      useCases: "Natural-language analysis, SQL generation, Python assistance, dashboard narratives, data-cleaning workflows and analytical agents."
    },
    {
      name: "Creative & Content Teams",
      focus: "Generative Media & Systems",
      useCases: "Image generation, storyboarding, video, voice, presentation design, brand systems, content repurposing and creative automation."
    }
  ];

  return (
    <section id="role-tracks" style={{ padding: "110px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
          10 ROLE ACADEMIES
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 18 }}>
          One GenAI Academy. Tailored pathways for every department.
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          Start with a unified enterprise foundation, then transition each team into specialized tool tracks and use cases aligned directly with their KPIs.
        </p>

        {/* Role Academy Explorer Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 56 }}>
          {roles.map((r, i) => {
            const isSelected = selectedRole === i;
            return (
              <div
                key={i}
                onClick={() => setSelectedRole(i)}
                style={{
                  background: isSelected ? "rgba(56, 139, 253, 0.08)" : "#0D1117",
                  border: "1px solid",
                  borderColor: isSelected ? "#388BFD" : "#30363D",
                  borderRadius: 14, padding: "32px 26px", cursor: "pointer",
                  boxShadow: isSelected ? "0 0 16px rgba(56, 139, 253, 0.15)" : "none",
                  transition: "all 0.15s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{
                    fontSize: 11.5, fontWeight: 700,
                    background: isSelected ? "#388BFD" : "#161B22",
                    color: isSelected ? "#FFFFFF" : "#388BFD",
                    border: "1px solid", borderColor: isSelected ? "#388BFD" : "#30363D",
                    padding: "4px 11px", borderRadius: 6,
                    fontFamily: "ui-monospace, monospace"
                  }}>
                    {r.focus}
                  </span>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: "#6E7681", fontFamily: "ui-monospace, monospace" }}>
                    Track 0{i + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: 18.5, fontWeight: 800, color: "#F0F6FC", marginBottom: 10 }}>
                  {r.name}
                </h3>
                <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
                  {r.useCases}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Pathway Callout Banner */}
        <div style={{
          background: "#0D1117", border: "1px solid #30363D",
          borderRadius: 16, padding: "38px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap"
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
              CUSTOM CURRICULUM SYLLABUS
            </div>
            <h4 style={{ fontSize: 21, fontWeight: 800, margin: 0, color: "#F0F6FC", lineHeight: 1.35 }}>
              Request customized enterprise syllabus for {roles[selectedRole].name}
            </h4>
          </div>
          <button
            onClick={() => onOpenDemo(`${roles[selectedRole].name} Pathway`)}
            style={{
              background: "#238636", color: "#FFFFFF", border: "1px solid rgba(240, 246, 252, 0.1)",
              padding: "13px 26px", borderRadius: 8, fontWeight: 700,
              fontSize: 14.5, cursor: "pointer", transition: "all 0.15s ease",
              boxShadow: "0 2px 8px rgba(35, 134, 54, 0.3)",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Get {roles[selectedRole].name} Syllabus →
          </button>
        </div>

      </div>
    </section>
  );
}

