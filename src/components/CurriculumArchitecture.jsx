import { useState } from 'react';

export default function CurriculumArchitecture({ onOpenDemo }) {
  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      num: "01",
      title: "GenAI Foundations",
      summary: "How LLMs work, strengths and limitations, multimodal AI, model selection, context, hallucinations, privacy and responsible use."
    },
    {
      num: "02",
      title: "Prompting That Works",
      summary: "Prompt structures, role/context/task patterns, examples, constraints, chain-of-verification, reusable templates and team prompt libraries."
    },
    {
      num: "03",
      title: "AI for Everyday Productivity",
      summary: "Email, meetings, documents, presentations, research, summarization, planning, knowledge retrieval and decision support."
    },
    {
      num: "04",
      title: "Function-Specific GenAI",
      summary: "Hands-on labs for marketing, sales, HR, finance, operations, product, design, customer support and leadership."
    },
    {
      num: "05",
      title: "AI for Coding & Technical Work",
      summary: "AI pair programming, code generation, debugging, testing, refactoring, documentation, app prototyping and secure coding workflows."
    },
    {
      num: "06",
      title: "Data & Research with AI",
      summary: "Document analysis, spreadsheet reasoning, SQL, Python, structured extraction, source verification and insight generation."
    },
    {
      num: "07",
      title: "Generative Media",
      summary: "Image, design, video, voice, avatars, presentations and content-production workflows."
    },
    {
      num: "08",
      title: "AI Automation",
      summary: "Triggers, actions, APIs, webhooks, structured outputs, approval steps, n8n/Make/Zapier/Power Automate and business workflow orchestration."
    },
    {
      num: "09",
      title: "AI Agents",
      summary: "Agent design, goals, memory, tools, retrieval, multi-step execution, guardrails, human-in-the-loop and evaluation."
    },
    {
      num: "10",
      title: "Enterprise Capstone",
      summary: "Each learner or team ships a usable workflow, agent, assistant or automation tied to a real business process."
    }
  ];

  return (
    <section id="curriculum" style={{ padding: "80px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 04 - CURRICULUM ARCHITECTURE
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          From AI literacy to agentic workflows
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 48 }}>
          A modular curriculum that can run as a 1-day executive workshop, 2-4 week bootcamp, or 6-12 week enterprise academy.
        </p>

        {/* Accordion / List View */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {modules.map((m, i) => {
            const isOpen = openModule === i;
            return (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, overflow: "hidden",
                  boxShadow: isOpen ? "0 4px 20px rgba(15,31,61,0.06)" : "none",
                  transition: "all 0.18s ease"
                }}
              >
                <div
                  onClick={() => setOpenModule(isOpen ? null : i)}
                  style={{
                    padding: "20px 24px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isOpen ? "#F8FAFC" : "#FFFFFF"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontSize: 14, fontWeight: 800, color: "#2563EB",
                      background: "#EFF6FF", padding: "6px 12px", borderRadius: 8
                    }}>
                      Module {m.num}
                    </span>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D" }}>
                      {m.title}
                    </h3>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 800, color: "#64748B" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 24px 24px 24px", borderTop: "1px solid #F1F5F9" }}>
                    <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.65, paddingTop: 16 }}>
                      {m.summary}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Download Curriculum Button */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button
            onClick={() => onOpenDemo("Complete 10-Module Curriculum PDF")}
            style={{
              background: "#0F1F3D", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 4px 14px rgba(15,31,61,0.2)"
            }}
          >
            Download Complete Curriculum PDF →
          </button>
        </div>

      </div>
    </section>
  );
}
