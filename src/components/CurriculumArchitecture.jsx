import { useState } from 'react';

export default function CurriculumArchitecture({ onOpenDemo }) {
  const [openModule, setOpenModule] = useState(0);

  const stages = [
    { name: "Phase 1: Foundations", range: "Modules 01–03", color: "#2F81F7" },
    { name: "Phase 2: Departmental Labs", range: "Modules 04–07", color: "#8B7CF6" },
    { name: "Phase 3: Agents & Capstones", range: "Modules 08–10", color: "#238636" }
  ];

  const modules = [
    {
      num: "01",
      phase: "Phase 1",
      title: "GenAI Foundations & Core Concepts",
      summary: "How LLMs operate under the hood, tokenization, model capabilities & tradeoffs (OpenAI, Anthropic, Google, open-weights), context window dynamics, hallucination reduction strategies, data privacy, and enterprise compliance.",
      labs: "Model benchmarking lab, context optimization exercise, enterprise security parameter configuration."
    },
    {
      num: "02",
      phase: "Phase 1",
      title: "Enterprise Prompt Architecture",
      summary: "System prompt engineering, role-context-constraint framing, few-shot conditioning, chain-of-thought verification, structured JSON outputs, team prompt repositories, and reusable corporate prompt templates.",
      labs: "Authoring production prompt templates, output schema validation, prompt regression testing."
    },
    {
      num: "03",
      phase: "Phase 1",
      title: "Everyday Workflow & Knowledge Synthesis",
      summary: "AI-assisted communication triage, meeting intelligence extraction, executive briefing generation, multimodal slide creation, and private enterprise document search using semantic retrieval.",
      labs: "Automated executive briefing workflow, dense PDF research synthesis, meeting action extractor."
    },
    {
      num: "04",
      phase: "Phase 2",
      title: "Role-Specific Hands-On Workstations",
      summary: "Deep-dive department tracks for engineering, marketing, sales, finance, legal, HR, operations, and product design. Mapped directly to real quarterly job deliverables.",
      labs: "Departmental sandbox deliverables using real sanitized enterprise datasets."
    },
    {
      num: "05",
      phase: "Phase 2",
      title: "AI for Software Engineering & Code Delivery",
      summary: "AI pair programming with GitHub Copilot and Claude, automated unit/integration test authoring, vulnerability scanning, legacy refactoring, and AI-assisted documentation.",
      labs: "Refactoring legacy endpoints, building comprehensive test suites with Claude Code, AI pull-request reviews."
    },
    {
      num: "06",
      phase: "Phase 2",
      title: "Data Reasoning & Analytical Extraction",
      summary: "Natural language SQL query generation, Python data cleaning scripts, automated financial spreadsheet analysis, predictive commentary, and structured schema extraction.",
      labs: "Building natural language SQL chatbots, automating financial variance commentary, dataset anomaly detection."
    },
    {
      num: "07",
      phase: "Phase 2",
      title: "Generative Media & Enterprise Content Systems",
      summary: "Brand-aligned image asset production, video and audio synthesis, storyboarding, multilingual localization pipelines, and creative automation systems.",
      labs: "Commercial brand visual generation, automated multilingual video voiceover localization."
    },
    {
      num: "08",
      phase: "Phase 3",
      title: "Business Process & Workflow Automation",
      summary: "Connecting LLMs to enterprise APIs, webhooks, and automation orchestrators (Make, Zapier, n8n). Implementing approval gates, error handling, and structured data flow.",
      labs: "Building an automated customer escalation pipeline, multi-app CRM sync with structured AI validation."
    },
    {
      num: "09",
      phase: "Phase 3",
      title: "Autonomous AI Agent Architecture",
      summary: "Designing multi-step agents with goal loops, memory persistence, tool invocation (MCP, APIs), RAG vector retrieval, guardrail enforcement, and human-in-the-loop validation.",
      labs: "Architecting a multi-tool research agent, deploying human-approval safety gates."
    },
    {
      num: "10",
      phase: "Phase 3",
      title: "Enterprise Production Capstone Delivery",
      summary: "Cohorts or individual teams design, build, and deploy an end-to-end production AI workflow or internal assistant solving an approved organizational business challenge.",
      labs: "Final cohort demo day, peer code review, executive presentation, and operational deployment handoff."
    }
  ];

  return (
    <section id="curriculum" style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#2F81F7",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            CURRICULUM SYLLABUS
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            From foundational literacy to agentic workflows.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            A modular 10-phase curriculum adaptable as an executive briefing (1 day), intensive cohort bootcamp (2–4 weeks), or comprehensive organizational academy (6–12 weeks).
          </p>
        </div>

        {/* Phase Markers Bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
          marginBottom: 32
        }}>
          {stages.map((st, i) => (
            <div
              key={i}
              style={{
                background: "#0B1220",
                border: "1px solid #1E293B",
                borderRadius: 8,
                padding: "12px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: st.color }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#F8FAFC" }}>{st.name}</span>
              </div>
              <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B" }}>
                {st.range}
              </span>
            </div>
          ))}
        </div>

        {/* Structured Syllabus Table / Accordion List */}
        <div style={{
          border: "1px solid #1E293B",
          borderRadius: 10,
          background: "#0B1220",
          overflow: "hidden",
          marginBottom: 48
        }}>
          {modules.map((m, i) => {
            const isOpen = openModule === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: i < modules.length - 1 ? "1px solid #1E293B" : "none",
                  transition: "background 0.15s ease"
                }}
              >
                <div
                  onClick={() => setOpenModule(isOpen ? null : i)}
                  style={{
                    padding: "20px 24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isOpen ? "rgba(47, 129, 247, 0.04)" : "transparent"
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.background = "rgba(47, 129, 247, 0.02)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: isOpen ? "#2F81F7" : "#64748B",
                      fontFamily: "ui-monospace, monospace",
                      width: 28
                    }}>
                      {m.num}
                    </span>
                    <div>
                      <h3 style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: isOpen ? "#F8FAFC" : "#CBD5E1",
                        margin: 0,
                        letterSpacing: "-.01em"
                      }}>
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: "#64748B",
                      fontFamily: "ui-monospace, monospace"
                    }}>
                      {m.phase}
                    </span>
                    <span style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: isOpen ? "#2F81F7" : "#64748B",
                      fontFamily: "ui-monospace, monospace",
                      width: 16,
                      textAlign: "center"
                    }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    padding: "0 24px 24px 68px",
                    background: "rgba(47, 129, 247, 0.02)",
                    borderTop: "1px dashed #1E293B"
                  }}>
                    <div style={{ paddingTop: 18, marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                        SYLLABUS FOCUS
                      </div>
                      <p style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.6, margin: 0 }}>
                        {m.summary}
                      </p>
                    </div>

                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                        PRACTICAL LAB WORKSTATION
                      </div>
                      <p style={{ fontSize: 13.5, color: "#94A3B8", lineHeight: 1.5, margin: 0, fontFamily: "ui-monospace, monospace" }}>
                        › {m.labs}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 8,
          padding: "24px 28px"
        }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#F8FAFC", marginBottom: 4 }}>
              Need a custom syllabus tailored to your team's internal tech stack?
            </div>
            <div style={{ fontSize: 13, color: "#64748B" }}>
              We customize tools, governance constraints, and sample datasets for private enterprise cohorts.
            </div>
          </div>
          <button
            onClick={() => onOpenDemo("Complete 10-Module Curriculum PDF")}
            style={{
              background: "#238636",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "11px 22px",
              borderRadius: 7,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "background 0.15s ease",
              whiteSpace: "nowrap"
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
