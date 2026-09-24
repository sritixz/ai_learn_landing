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
    <section id="curriculum" style={{ padding: "120px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Curriculum Architecture
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          From AI literacy to agentic workflows
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 64, fontWeight: 400 }}>
          A modular 10-phase curriculum that adapts seamlessly as a 1-day executive briefing, a 2-4 week intensive bootcamp, or a 6-12 week full enterprise academy.
        </p>

        {/* Accordion / Module List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}>
          {modules.map((m, i) => {
            const isOpen = openModule === i;
            return (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, overflow: "hidden",
                  boxShadow: isOpen ? "0 8px 24px -4px rgba(15,23,42,0.06)" : "0 2px 8px rgba(15,23,42,0.02)",
                  transition: "all 0.18s ease"
                }}
              >
                <div
                  onClick={() => setOpenModule(isOpen ? null : i)}
                  style={{
                    padding: "24px 32px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isOpen ? "#F8FAFC" : "#FFFFFF"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <span style={{
                      fontSize: 13, fontWeight: 800, color: "#2563EB",
                      background: "#EFF6FF", padding: "6px 14px", borderRadius: 8
                    }}>
                      Module {m.num}
                    </span>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", margin: 0 }}>
                      {m.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "#64748B" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 32px 28px 32px", borderTop: "1px solid #F1F5F9" }}>
                    <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, paddingTop: 20, margin: 0 }}>
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
              background: "#0F172A", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 6px 20px rgba(15,23,42,0.2)",
              transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E293B"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0F172A"; e.currentTarget.style.transform = "none"; }}
          >
            Download Full Curriculum PDF ↓
          </button>
        </div>

      </div>
    </section>
  );
}
