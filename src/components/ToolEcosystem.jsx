import { useState } from 'react';

export default function ToolEcosystem() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "assistants",
      name: "AI Assistants & Research",
      tools: ["ChatGPT", "Claude", "Gemini", "Microsoft Copilot", "Perplexity", "NotebookLM", "Poe", "You.com"]
    },
    {
      id: "coding",
      name: "Coding & App Building",
      tools: ["GitHub Copilot", "Claude Code", "Cursor", "OpenAI Codex", "Windsurf", "Replit", "Cline", "Continue", "Bolt.new", "Lovable", "v0"]
    },
    {
      id: "marketing",
      name: "Marketing & Writing",
      tools: ["Jasper", "Copy.ai", "Writer", "Grammarly", "Canva Magic Studio", "Adobe Express AI", "HubSpot AI"]
    },
    {
      id: "image",
      name: "Image & Design",
      tools: ["Adobe Firefly", "Midjourney", "Ideogram", "Leonardo AI", "Canva AI", "Figma AI"]
    },
    {
      id: "video",
      name: "Video, Voice & Media",
      tools: ["Runway", "Descript", "ElevenLabs", "Synthesia", "HeyGen", "OpusClip", "VEED AI"]
    },
    {
      id: "data",
      name: "Data, Analysis & BI",
      tools: ["ChatGPT Data Analysis", "Julius AI", "Power BI Copilot", "Excel Copilot", "Elicit", "Consensus"]
    },
    {
      id: "productivity",
      name: "Productivity & Knowledge",
      tools: ["Notion AI", "Slack AI", "Zoom AI Companion", "Otter.ai", "Fireflies.ai", "Granola", "Gamma", "Beautiful.ai"]
    },
    {
      id: "automation",
      name: "Automation & Integration",
      tools: ["Zapier", "Make", "n8n", "Microsoft Power Automate", "Gumloop", "Lindy"]
    },
    {
      id: "agents",
      name: "Agents & Orchestration",
      tools: ["OpenAI Agents SDK", "LangChain", "LangGraph", "CrewAI", "Microsoft Copilot Studio", "Google Vertex AI Agent Builder", "Salesforce Agentforce", "Retool Agents"]
    }
  ];

  const framework = [
    {
      step: "Understand",
      desc: "What the tool is best at, where it fails and what data should not be shared."
    },
    {
      step: "Practice",
      desc: "Complete a guided role-specific task with a clear before/after workflow."
    },
    {
      step: "Compare",
      desc: "Solve the same task with two approaches and learn when each is preferable."
    },
    {
      step: "Operationalize",
      desc: "Save prompts, templates, automations or agents so the workflow can be reused by the team."
    }
  ];

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="ai-tools" style={{ padding: "80px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 05 - 50+ TOOL ECOSYSTEM
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 16 }}>
          Learn the AI stack your teams will actually use
        </h2>
        <p style={{ fontSize: 18, color: "#475569", maxWidth: 880, lineHeight: 1.6, marginBottom: 40 }}>
          Tool coverage is updated as the ecosystem changes. The goal is tool judgment: choosing the right system for the task, risk level and workflow.
        </p>

        {/* Filter Bar */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 16, marginBottom: 36 }}>
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "8px 18px", borderRadius: 999, border: "1.5px solid",
              borderColor: activeCategory === "all" ? "#0F1F3D" : "#E2E8F0",
              background: activeCategory === "all" ? "#0F1F3D" : "#F8FAFC",
              color: activeCategory === "all" ? "#FFFFFF" : "#475569",
              fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap"
            }}
          >
            All 67 Tools & Platforms
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              style={{
                padding: "8px 18px", borderRadius: 999, border: "1.5px solid",
                borderColor: activeCategory === c.id ? "#0F1F3D" : "#E2E8F0",
                background: activeCategory === c.id ? "#0F1F3D" : "#F8FAFC",
                color: activeCategory === c.id ? "#FFFFFF" : "#475569",
                fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap"
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Categories & Tools Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 64 }}>
          {filteredCategories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: "#F8FAFC", border: "1px solid #CBD5E1",
                borderRadius: 16, padding: "24px"
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0F1F3D", marginBottom: 14 }}>
                {cat.name}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.tools.map((t, ti) => (
                  <span
                    key={ti}
                    style={{
                      background: "#FFFFFF", border: "1px solid #CBD5E1",
                      padding: "6px 14px", borderRadius: 8,
                      fontSize: 13, fontWeight: 600, color: "#0F1F3D",
                      boxShadow: "0 1px 3px rgba(15,31,61,0.04)"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Learning Framework Header & Grid */}
        <div style={{ background: "#F1F5F9", borderRadius: 20, padding: "36px" }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F1F3D", marginBottom: 24, letterSpacing: "-.01em" }}>
            Tool Learning Framework
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {framework.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #CBD5E1",
                  borderRadius: 14, padding: "20px"
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", marginBottom: 6 }}>
                  STEP 0{i + 1}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F1F3D", marginBottom: 8 }}>
                  {f.step}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.55 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
