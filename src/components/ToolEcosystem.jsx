import { useState } from 'react';

export default function ToolEcosystem({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState("tools");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "assistants",
      name: "AI Assistants & Research",
      tools: ["ChatGPT Team/Enterprise", "Claude 3.5 Sonnet", "Google Gemini 1.5 Pro", "Microsoft Copilot", "Perplexity Enterprise", "NotebookLM", "You.com", "Poe"]
    },
    {
      id: "coding",
      name: "Coding & Engineering",
      tools: ["GitHub Copilot", "Claude Code", "Cursor", "Windsurf", "Cline", "Continue.dev", "Bolt.new", "Lovable", "v0.dev"]
    },
    {
      id: "marketing",
      name: "Marketing & Strategy",
      tools: ["Jasper Enterprise", "Writer.com", "Copy.ai", "Canva Magic Studio", "Adobe Express AI", "HubSpot Breeze"]
    },
    {
      id: "image",
      name: "Design & Multimodal",
      tools: ["Midjourney v6", "Adobe Firefly Enterprise", "Ideogram 2.0", "Leonardo.ai", "Figma AI"]
    },
    {
      id: "video",
      name: "Video & Speech Synthesis",
      tools: ["Runway Gen-3", "ElevenLabs Enterprise", "HeyGen", "Descript", "Synthesia", "OpusClip"]
    },
    {
      id: "data",
      name: "Data & BI Analytics",
      tools: ["ChatGPT Advanced Data Analysis", "Julius.ai", "Power BI Copilot", "Excel Copilot", "Consensus", "Elicit"]
    },
    {
      id: "productivity",
      name: "Enterprise Workspace",
      tools: ["Notion AI", "Slack AI", "Zoom AI Companion", "Granola", "Otter.ai", "Gamma App", "Beautiful.ai"]
    },
    {
      id: "automation",
      name: "Automation & Orchestration",
      tools: ["Make.com", "n8n Enterprise", "Zapier Central", "Microsoft Power Automate", "Gumloop", "Lindy.ai"]
    },
    {
      id: "agents",
      name: "Agent Frameworks & APIs",
      tools: ["OpenAI Agents SDK", "LangChain & LangGraph", "CrewAI", "Microsoft Copilot Studio", "Google Vertex AI", "Salesforce Agentforce"]
    }
  ];

  const agentPoints = [
    "Agent Architecture: Goal definitions, system context, state memory, tool invocation schemas.",
    "Tool Integrations: Connecting search, SQL databases, internal REST APIs, CRM, and documents.",
    "Enterprise RAG Grounding: Restricting agent responses strictly to verified corporate knowledge bases.",
    "Multi-Step Reasoning Loops: Planning cycles, error recovery logic, and deterministic fallback paths.",
    "Human-in-the-Loop Gates: Establishing strict approval checkpoints for sensitive external actions.",
    "Framework Practice: Hands-on implementation with OpenAI Agents SDK, LangGraph, and Copilot Studio."
  ];

  const automationPoints = [
    "Workflow Deconstruction: Auditing manual recurring tasks to isolate deterministic logic steps.",
    "Integration Orchestration: Production pipeline authoring across n8n, Make, and Power Automate.",
    "System Webhooks & APIs: Synchronizing forms, spreadsheets, CRMs, and LLM inference endpoints.",
    "Resilient Execution: Structured JSON validation, branching rules, retry backoffs, and audit logging.",
    "Production Delivery: Deploying automated pipelines for inbound triage, financial narratives, and reporting."
  ];

  const capstones = [
    { title: "Marketing Campaign Engine", desc: "Performs audience research, generates verified copy variants, routes for legal review.", category: "Marketing & Growth" },
    { title: "Sales Account Intelligence Agent", desc: "Monitors target enterprise accounts, parses public SEC filings, and drafts personalized briefs.", category: "Sales & RevOps" },
    { title: "Enterprise Policy Search Assistant", desc: "Answers employee questions against handbooks with citation traceability.", category: "HR & Operations" },
    { title: "Automated Financial Variance Reporter", desc: "Queries financial databases, calculates variances against budget, and synthesizes commentary.", category: "Finance & Strategy" },
    { title: "Customer Support Escalation Triage", desc: "Classifies ticket sentiment, drafts resolution steps, and routes edge cases.", category: "Customer Experience" },
    { title: "Developer Test & Refactor Copilot", desc: "Converts acceptance specs into regression test suites and pull request audits.", category: "Engineering & IT" }
  ];

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="ai-tools" style={{ padding: "100px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FF8A00",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            ENTERPRISE TOOLS & AGENT SYSTEMS
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 850,
            color: "#0F172A",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            67+ AI platforms & production agent architectures.
          </h2>
        </div>

        {/* Top Tab Switcher */}
        <div style={{
          display: "flex",
          gap: 12,
          marginBottom: 36,
          borderBottom: "1px solid #E2E8F0",
          paddingBottom: 14
        }}>
          <button
            onClick={() => setActiveTab("tools")}
            style={{
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid",
              borderColor: activeTab === "tools" ? "#FF8A00" : "#CBD5E1",
              background: activeTab === "tools" ? "#FF8A00" : "#FFFFFF",
              color: activeTab === "tools" ? "#FFFFFF" : "#475569",
              fontWeight: 750,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow: activeTab === "tools" ? "0 4px 14px rgba(255, 138, 0, 0.3)" : "none"
            }}
          >
            🛠️ Evaluated Tools Matrix (67+ Tools)
          </button>
          <button
            onClick={() => setActiveTab("agents")}
            style={{
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid",
              borderColor: activeTab === "agents" ? "#FF8A00" : "#CBD5E1",
              background: activeTab === "agents" ? "#FF8A00" : "#FFFFFF",
              color: activeTab === "agents" ? "#FFFFFF" : "#475569",
              fontWeight: 750,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow: activeTab === "agents" ? "0 4px 14px rgba(255, 138, 0, 0.3)" : "none"
            }}
          >
            🤖 Autonomous Agents & Capstones
          </button>
        </div>

        {/* TAB 1: TOOLS MATRIX */}
        {activeTab === "tools" && (
          <div>
            {/* Filter Bar */}
            <div style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 12,
              marginBottom: 32
            }}>
              <button
                onClick={() => setActiveCategory("all")}
                style={{
                  padding: "7px 16px",
                  borderRadius: 9999,
                  border: "1px solid",
                  borderColor: activeCategory === "all" ? "#FF8A00" : "#CBD5E1",
                  background: activeCategory === "all" ? "rgba(255, 138, 0, 0.1)" : "#F8FAFC",
                  color: activeCategory === "all" ? "#FF8A00" : "#475569",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                All Categories ({categories.reduce((acc, c) => acc + c.tools.length, 0)}+ tools)
              </button>
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 9999,
                    border: "1px solid",
                    borderColor: activeCategory === c.id ? "#FF8A00" : "#E2E8F0",
                    background: activeCategory === c.id ? "rgba(255, 138, 0, 0.1)" : "#FFFFFF",
                    color: activeCategory === c.id ? "#FF8A00" : "#64748B",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap"
                  }}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Tools Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18
            }}>
              {filteredCategories.map((cat, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 12,
                    padding: "22px 24px",
                    boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 750, color: "#0F172A", margin: 0 }}>
                      {cat.name}
                    </h3>
                    <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B", fontWeight: 600 }}>
                      {cat.tools.length} TOOLS
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {cat.tools.map((t, ti) => (
                      <span
                        key={ti}
                        style={{
                          background: "#F8FAFC",
                          border: "1px solid #E2E8F0",
                          padding: "4px 10px",
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#334155",
                          fontFamily: "ui-monospace, monospace"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: AGENTS & AUTOMATION */}
        {activeTab === "agents" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 40 }}>
              {/* Agent Track */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10, padding: "28px 24px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", fontFamily: "ui-monospace, monospace", marginBottom: 8 }}>
                  TRACK 01 • AGENT ENGINEERING
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 14 }}>
                  Autonomous AI Agent Architecture
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {agentPoints.map((pt, i) => (
                    <div key={i} style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: "#2563EB", fontWeight: 700 }}>›</span>
                      <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.5 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automation Track */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10, padding: "28px 24px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#7C3AED", fontFamily: "ui-monospace, monospace", marginBottom: 8 }}>
                  TRACK 02 • PIPELINE ORCHESTRATION
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 14 }}>
                  Business Process & API Automation
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {automationPoints.map((pt, i) => (
                    <div key={i} style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: "#7C3AED", fontWeight: 700 }}>›</span>
                      <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.5 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Capstones Matrix */}
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10, padding: "28px 28px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#FF8A00", fontFamily: "ui-monospace, monospace", marginBottom: 6 }}>
                PRODUCTION CAPSTONE DELIVERABLES
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 20 }}>
                Shipped to Production Repositories During Training
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14 }}>
                {capstones.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => onOpenDemo && onOpenDemo(`${c.title} Capstone`)}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: 8,
                      padding: "18px 20px",
                      cursor: "pointer",
                      transition: "all 0.15s ease"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#FF8A00"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}
                  >
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: "#2563EB", fontFamily: "ui-monospace, monospace" }}>
                      {c.category}
                    </span>
                    <h4 style={{ fontSize: 14.5, fontWeight: 700, color: "#0F172A", margin: "4px 0 6px" }}>
                      {c.title}
                    </h4>
                    <p style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.45, margin: 0 }}>
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
