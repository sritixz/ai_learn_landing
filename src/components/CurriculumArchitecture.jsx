import { useState } from 'react';

export default function CurriculumArchitecture({ onOpenDemo }) {
  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      num: "01",
      title: "GenAI Foundations & Core Concepts",
      summary: "How LLMs work, strengths and limitations, multimodal AI, model selection strategy, context windows, hallucination mitigation, data privacy, and responsible enterprise use."
    },
    {
      num: "02",
      title: "Enterprise Prompt Engineering",
      summary: "Prompt structures, role/context/task patterns, few-shot prompting, constraints, chain-of-verification, reusable prompt templates, and shared team prompt libraries."
    },
    {
      num: "03",
      title: "Everyday Workflow Productivity",
      summary: "AI-assisted email triage, meeting intelligence, executive summaries, presentation generation, document research, planning, and knowledge retrieval."
    },
    {
      num: "04",
      title: "Function-Specific GenAI Labs",
      summary: "Role-tailored deep-dives for marketing, sales, HR, finance, operations, product, design, customer support, and executive leadership."
    },
    {
      num: "05",
      title: "AI for Coding & Technical Delivery",
      summary: "AI pair programming, code generation, automated debugging, test suite generation, refactoring, API documentation, rapid prototyping, and secure coding practices."
    },
    {
      num: "06",
      title: "Data Analysis & Research with AI",
      summary: "Document reasoning, automated spreadsheet analysis, natural language SQL generation, Python assistance, structured data extraction, and source verification."
    },
    {
      num: "07",
      title: "Generative Media & Content Systems",
      summary: "Commercial image creation, brand visual consistency, storyboarding, video synthesis, voice generation, slides, and content repurposing pipelines."
    },
    {
      num: "08",
      title: "Business Process Automation",
      summary: "Triggers, actions, APIs, webhooks, structured outputs, approval logic, n8n/Make/Zapier/Power Automate integration, and multi-step process orchestration."
    },
    {
      num: "09",
      title: "Autonomous AI Agent Design",
      summary: "Agent architecture, goal definitions, memory management, tool usage, RAG retrieval, multi-step planning, guardrails, human-in-the-loop checkpoints, and evaluation."
    },
    {
      num: "10",
      title: "Enterprise Capstone Delivery",
      summary: "Learners or department cohorts build and ship a production-ready workflow, custom agent, assistant, or automation tied directly to an active business goal."
    }
  ];

  return (
    <section id="curriculum" style={{ padding: "100px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12, fontFamily: "ui-monospace, monospace" }}>
          CURRICULUM SYLLABUS
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 16 }}>
          From AI literacy to agentic workflows
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 56, fontWeight: 400 }}>
          A modular 10-phase curriculum that adapts seamlessly as a 1-day executive briefing, a 2-4 week intensive bootcamp, or a 6-12 week full enterprise academy.
        </p>

        {/* Accordion / Module List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
          {modules.map((m, i) => {
            const isOpen = openModule === i;
            return (
              <div
                key={i}
                style={{
                  background: "#0D1117", border: "1px solid",
                  borderColor: isOpen ? "#388BFD" : "#30363D",
                  borderRadius: 12, overflow: "hidden",
                  transition: "all 0.15s ease"
                }}
              >
                <div
                  onClick={() => setOpenModule(isOpen ? null : i)}
                  style={{
                    padding: "20px 28px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isOpen ? "rgba(56, 139, 253, 0.08)" : "#0D1117"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontSize: 12, fontWeight: 800, color: "#388BFD",
                      background: "#161B22", border: "1px solid #30363D",
                      padding: "4px 10px", borderRadius: 6,
                      fontFamily: "ui-monospace, monospace"
                    }}>
                      Module {m.num}
                    </span>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#F0F6FC", margin: 0 }}>
                      {m.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#8B949E", fontFamily: "ui-monospace, monospace" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 28px 24px 28px", borderTop: "1px solid #21262D" }}>
                    <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.65, paddingTop: 16, margin: 0 }}>
                      {m.summary}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Download Curriculum Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => onOpenDemo("Complete 10-Module Curriculum PDF")}
            style={{
              background: "#238636", color: "#FFFFFF", border: "1px solid rgba(240, 246, 252, 0.1)",
              padding: "14px 32px", borderRadius: 8, fontWeight: 700,
              fontSize: 15, cursor: "pointer", boxShadow: "0 2px 8px rgba(35, 134, 54, 0.3)",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Download Full Curriculum PDF ↓
          </button>
        </div>

      </div>
    </section>
  );
}
