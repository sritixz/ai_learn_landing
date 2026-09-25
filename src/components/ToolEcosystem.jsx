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
      desc: "Identify what each tool excels at, where it fails, and strict data privacy parameters."
    },
    {
      step: "Practice",
      desc: "Execute role-tailored exercises with a concrete before-and-after productivity workflow."
    },
    {
      step: "Compare",
      desc: "Evaluate competing tools on real benchmark tasks to choose the optimal stack."
    },
    {
      step: "Operationalize",
      desc: "Package prompts, automations, and agent workflows into reusable enterprise assets."
    }
  ];

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="ai-tools" style={{ padding: "110px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
          67+ ENTERPRISE TOOLS
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 18 }}>
          Learn the AI stack your teams will actually use
        </h2>
        <p style={{ fontSize: 17, color: "#8B949E", maxWidth: 840, lineHeight: 1.65, marginBottom: 52, fontWeight: 400 }}>
          Tool coverage updates dynamically as the technology landscape evolves. Our focus is tool judgment — teaching teams to select the right platform for the task, risk level, and workflow.
        </p>

        {/* Filter Bar */}
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 16, marginBottom: 48 }}>
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "9px 20px", borderRadius: 8, border: "1px solid",
              borderColor: activeCategory === "all" ? "#388BFD" : "#30363D",
              background: activeCategory === "all" ? "rgba(56, 139, 253, 0.15)" : "#0D1117",
              color: activeCategory === "all" ? "#F0F6FC" : "#8B949E",
              fontSize: 13.5, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
              transition: "all 0.15s ease"
            }}
          >
            All 67 Tools & Platforms
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              style={{
                padding: "9px 20px", borderRadius: 8, border: "1px solid",
                borderColor: activeCategory === c.id ? "#388BFD" : "#30363D",
                background: activeCategory === c.id ? "rgba(56, 139, 253, 0.15)" : "#0D1117",
                color: activeCategory === c.id ? "#F0F6FC" : "#8B949E",
                fontSize: 13.5, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                transition: "all 0.15s ease"
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Categories & Tools Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 72 }}>
          {filteredCategories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: "#0D1117", border: "1px solid #30363D",
                borderRadius: 14, padding: "30px 26px"
              }}
            >
              <h3 style={{ fontSize: 16.5, fontWeight: 800, color: "#F0F6FC", marginBottom: 16, fontFamily: "ui-monospace, monospace" }}>
                {cat.name}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {cat.tools.map((t, ti) => (
                  <span
                    key={ti}
                    style={{
                      background: "#161B22", border: "1px solid #30363D",
                      padding: "7px 14px", borderRadius: 6,
                      fontSize: 13, fontWeight: 600, color: "#F0F6FC",
                      fontFamily: "ui-monospace, monospace",
                      transition: "border-color 0.15s ease"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#388BFD"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool Learning Framework Header & Grid */}
        <div style={{ background: "#0D1117", border: "1px solid #30363D", borderRadius: 18, padding: "44px 40px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10, fontFamily: "ui-monospace, monospace" }}>
            PEDAGOGICAL METHODOLOGY
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#F0F6FC", marginBottom: 32, letterSpacing: "-.01em" }}>
            The 4-Stage Tool Learning Framework
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {framework.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#161B22", border: "1px solid #30363D",
                  borderRadius: 12, padding: "28px"
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 800, color: "#388BFD", textTransform: "uppercase", marginBottom: 10, fontFamily: "ui-monospace, monospace" }}>
                  Phase 0{i + 1}
                </div>
                <h4 style={{ fontSize: 17.5, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
                  {f.step}
                </h4>
                <p style={{ fontSize: 13.5, color: "#8B949E", lineHeight: 1.6, margin: 0 }}>
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

