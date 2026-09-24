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
    <section id="role-tracks" style={{ padding: "120px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Role-Based Academies
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          One GenAI Academy. Tailored pathways for every department.
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
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
                  background: isSelected ? "#F8FAFC" : "#FFFFFF",
                  border: "1.5px solid",
                  borderColor: isSelected ? "#0F172A" : "#E2E8F0",
                  borderRadius: 18, padding: "32px 28px", cursor: "pointer",
                  boxShadow: isSelected ? "0 10px 30px -5px rgba(15,23,42,0.08)" : "0 2px 8px rgba(15,23,42,0.02)",
                  transition: "all 0.18s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 700,
                    background: isSelected ? "#0F172A" : "#EFF6FF",
                    color: isSelected ? "#FFFFFF" : "#2563EB",
                    padding: "4px 12px", borderRadius: 999
                  }}>
                    {r.focus}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8" }}>
                    Track 0{i + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 10 }}>
                  {r.name}
                </h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>
                  {r.useCases}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Pathway Callout Banner */}
        <div style={{
          background: "#0F172A", color: "#FFFFFF",
          borderRadius: 20, padding: "36px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap"
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#60A5FA", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>
              TAILORED DEPLOYMENT
            </div>
            <h4 style={{ fontSize: 22, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>
              Request custom curriculum for {roles[selectedRole].name}
            </h4>
          </div>
          <button
            onClick={() => onOpenDemo(`${roles[selectedRole].name} Pathway`)}
            style={{
              background: "#2563EB", color: "#FFFFFF", border: "none",
              padding: "14px 28px", borderRadius: 10, fontWeight: 700,
              fontSize: 15, cursor: "pointer", transition: "all 0.15s ease",
              boxShadow: "0 4px 14px rgba(37,99,235,0.3)"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1D4ED8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#2563EB"; }}
          >
            Get {roles[selectedRole].name} Syllabus →
          </button>
        </div>

      </div>
    </section>
  );
}
