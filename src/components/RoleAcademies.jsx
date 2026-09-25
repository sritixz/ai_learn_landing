import { useState } from 'react';

export default function RoleAcademies({ onOpenDemo }) {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      name: "Engineering & IT",
      focus: "Coding Copilots & Dev Architecture",
      badge: "DEV / IT",
      duration: "16 Hours Hands-On Labs",
      tools: ["GitHub Copilot", "Claude Sonnet", "Cursor", "LangChain", "vLLM"],
      useCases: "AI-assisted coding, automated test generation, PR review automation, legacy refactoring, RAG architectures, and local model orchestration.",
      deliverables: ["Production PR copilot workflow", "Automated regression test suite", "Internal RAG retrieval pipeline"]
    },
    {
      name: "Leadership & Managers",
      focus: "AI Strategy & Enterprise Governance",
      badge: "EXECUTIVE",
      duration: "8 Hours Executive Briefing",
      tools: ["Enterprise Claude", "Microsoft Copilot Studio", "Custom GPTs"],
      useCases: "AI opportunity mapping, organizational risk governance, adoption metrics, ROI calculation, and operating-model transformation.",
      deliverables: ["Departmental AI adoption scorecard", "Vendor risk assessment matrix", "Quarterly ROI evaluation model"]
    },
    {
      name: "Marketing & Growth",
      focus: "Campaign Scaling & Content Pipelines",
      badge: "MARKETING",
      duration: "12 Hours Live Workshops",
      tools: ["Claude", "ChatGPT Team", "Midjourney v6", "Perplexity Pro"],
      useCases: "Audience segmentation, multi-channel copy production, SEO cluster generation, creative assets, and campaign performance analytics.",
      deliverables: ["Standardized brand-safe prompt library", "Automated campaign reporting pipeline", "Multi-platform content engine"]
    },
    {
      name: "Sales & Customer Success",
      focus: "Account Intelligence & Proposal Velocity",
      badge: "SALES",
      duration: "10 Hours Interactive Labs",
      tools: ["Gong AI", "Perplexity Enterprise", "Clay", "Copilot"],
      useCases: "Account research automation, personalized outbound generation, RFP response synthesis, meeting recap extraction, and objection handling.",
      deliverables: ["Automated RFP response workflow", "Account intelligence research dossier", "CRM follow-up copilot pipeline"]
    },
    {
      name: "Operations & PMO",
      focus: "SOPs & Workflow Automation",
      badge: "OPERATIONS",
      duration: "14 Hours Studio Labs",
      tools: ["Make.com", "Zapier Central", "n8n", "OpenAI Assistant API"],
      useCases: "Standard operating procedure generation, cross-tool workflow automation, meeting synthesis, project status reports, and vendor analysis.",
      deliverables: ["Automated multi-step operations agent", "Standardized team SOP generator", "Live project status synthesizer"]
    },
    {
      name: "Finance & Accounting",
      focus: "Financial Modeling & Extraction",
      badge: "FINANCE",
      duration: "10 Hours Guided Labs",
      tools: ["Claude Artifacts", "Code Interpreter", "Excel Copilot"],
      useCases: "Natural language financial dataset querying, variance commentary generation, invoice document extraction, and scenario stress testing.",
      deliverables: ["Automated variance narrative generator", "Invoice document parsing script", "Scenario sensitivity analyzer"]
    },
    {
      name: "Product & Design",
      focus: "PRDs & Rapid Interactive Prototyping",
      badge: "PRODUCT",
      duration: "12 Hours Design Sprints",
      tools: ["v0.dev", "Claude Artifacts", "Figma AI", "Whimsical AI"],
      useCases: "User research clustering, rapid PRD drafting, interactive prototype generation, UX copy variant testing, and user feedback synthesis.",
      deliverables: ["Clickable interactive UI prototype", "AI-assisted PRD & acceptance criteria", "User interview insight matrix"]
    },
    {
      name: "Data & Analytics",
      focus: "SQL Generation & Diagnostic Narratives",
      badge: "ANALYTICS",
      duration: "14 Hours Deep Dive",
      tools: ["DataCamp AI", "Claude Code", "Jupyter AI", "Hex AI"],
      useCases: "Complex SQL query generation, Python data cleaning scripts, automated executive dashboard commentary, and predictive trend modeling.",
      deliverables: ["Natural language to SQL pipeline", "Automated KPI narrative report", "Data quality auditing script"]
    },
    {
      name: "HR & People Operations",
      focus: "Talent Acquisition & Policy Intelligence",
      badge: "HR & L&D",
      duration: "8 Hours Practical Labs",
      tools: ["NotebookLM Enterprise", "Custom GPTs", "Claude"],
      useCases: "Job description benchmarking, competency interview rubrics, internal policy search assistants, and employee survey sentiment analysis.",
      deliverables: ["Internal HR policy search agent", "Standardized interview guide generator", "Pulse survey thematic cluster analysis"]
    },
    {
      name: "Creative & Media Teams",
      focus: "Generative Media & Design Systems",
      badge: "CREATIVE",
      duration: "12 Hours Creative Studio",
      tools: ["Midjourney", "Magnific", "Runway Gen-3", "ElevenLabs"],
      useCases: "Brand-aligned visual asset generation, storyboard production, voiceover synthesis, presentation styling, and video asset localization.",
      deliverables: ["Enterprise brand image generation system", "Multi-language voiceover asset library", "Concept moodboard generator"]
    }
  ];

  const current = roles[selectedRole];

  return (
    <section id="role-tracks" style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#2F81F7",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            DEPARTMENTAL UPGRADE PATHWAYS
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            10 Role Academies. Tailored for daily organizational output.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            Every department starts with shared enterprise governance fundamentals, then splits into specialized tool tracks, sandbox labs, and deliverable-focused capstones.
          </p>
        </div>

        {/* Interactive Master Workstation (Split View) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: 24,
          alignItems: "stretch",
          marginBottom: 48
        }}>
          
          {/* Left Column: Role Selector List */}
          <div style={{
            background: "#0B1220",
            border: "1px solid #1E293B",
            borderRadius: 10,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{
              padding: "16px 20px",
              background: "rgba(15, 23, 42, 0.7)",
              borderBottom: "1px solid #1E293B",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: ".04em" }}>
                Select Department Track
              </span>
              <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B" }}>
                10 TRACKS AVAILABLE
              </span>
            </div>

            <div style={{ maxHeight: 520, overflowY: "auto" }}>
              {roles.map((r, i) => {
                const isSelected = selectedRole === i;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedRole(i)}
                    style={{
                      padding: "16px 20px",
                      borderBottom: i < roles.length - 1 ? "1px solid #1E293B" : "none",
                      background: isSelected ? "rgba(47, 129, 247, 0.08)" : "transparent",
                      borderLeft: isSelected ? "3px solid #2F81F7" : "3px solid transparent",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.12s ease"
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.background = "rgba(47, 129, 247, 0.03)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                        <span style={{
                          fontSize: 14.5,
                          fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? "#F8FAFC" : "#CBD5E1"
                        }}>
                          {r.name}
                        </span>
                      </div>
                      <div style={{ fontSize: 12.5, color: "#64748B" }}>
                        {r.focus}
                      </div>
                    </div>

                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: "ui-monospace, monospace",
                      color: isSelected ? "#2F81F7" : "#475569",
                      background: isSelected ? "rgba(47, 129, 247, 0.12)" : "rgba(30, 41, 59, 0.5)",
                      padding: "3px 7px",
                      borderRadius: 4
                    }}>
                      {r.badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Track Deep Dive Inspector */}
          <div style={{
            background: "#0B1220",
            border: "1px solid #1E293B",
            borderRadius: 10,
            padding: "32px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              {/* Header of Inspector */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#2F81F7", fontWeight: 700, marginBottom: 4 }}>
                    PATHWAY SPECIFICATION
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F8FAFC", margin: 0, letterSpacing: "-.015em" }}>
                    {current.name}
                  </h3>
                </div>
                <span style={{
                  fontSize: 11,
                  fontFamily: "ui-monospace, monospace",
                  color: "#94A3B8",
                  background: "#050B1A",
                  border: "1px solid #1E293B",
                  padding: "5px 10px",
                  borderRadius: 6
                }}>
                  {current.duration}
                </span>
              </div>

              <div style={{ fontSize: 14.5, color: "#CBD5E1", lineHeight: 1.6, marginBottom: 24 }}>
                {current.useCases}
              </div>

              {/* Tool Stack */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10, fontFamily: "ui-monospace, monospace" }}>
                  CORE TOOL STACK COVERED
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {current.tools.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#F8FAFC",
                        background: "#050B1A",
                        border: "1px solid #1E293B",
                        padding: "5px 12px",
                        borderRadius: 6,
                        fontFamily: "ui-monospace, monospace"
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Capstone Deliverables */}
              <div style={{ marginBottom: 28, borderTop: "1px solid #1E293B", paddingTop: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 12, fontFamily: "ui-monospace, monospace" }}>
                  VERIFIED CAPSTONE DELIVERABLES
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {current.deliverables.map((d, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#238636", fontWeight: 800, fontSize: 13 }}>✓</span>
                      <span style={{ fontSize: 13.5, color: "#94A3B8" }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #1E293B",
              paddingTop: 20,
              flexWrap: "wrap",
              gap: 16
            }}>
              <span style={{ fontSize: 12, color: "#64748B" }}>
                Includes enterprise lab sandboxes & custom prompt repository
              </span>
              <button
                onClick={() => onOpenDemo(`${current.name} Pathway`)}
                style={{
                  background: "#2F81F7",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  padding: "10px 20px",
                  borderRadius: 7,
                  fontWeight: 600,
                  fontSize: 13.5,
                  cursor: "pointer",
                  transition: "background 0.15s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#388BFD"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#2F81F7"; }}
              >
                Request {current.name} Syllabus →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
