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
    <section id="ai-tools" style={{ padding: "120px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 12 }}>
          Enterprise Tool Ecosystem
        </div>
        <h2 style={{ fontSize: "clamp(34px, 4.5vw, 50px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-.02em", marginBottom: 20 }}>
          Learn the AI stack your teams will actually use
        </h2>
        <p style={{ fontSize: 19, color: "#475569", maxWidth: 840, lineHeight: 1.65, marginBottom: 48, fontWeight: 400 }}>
          Tool coverage updates dynamically as the technology landscape evolves. Our focus is tool judgment — teaching teams to select the right platform for the task, risk level, and workflow.
        </p>

        {/* Filter Bar */}
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 16, marginBottom: 48 }}>
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "10px 20px", borderRadius: 999, border: "1.5px solid",
              borderColor: activeCategory === "all" ? "#0F172A" : "#E2E8F0",
              background: activeCategory === "all" ? "#0F172A" : "#F8FAFC",
              color: activeCategory === "all" ? "#FFFFFF" : "#475569",
              fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
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
                padding: "10px 20px", borderRadius: 999, border: "1.5px solid",
                borderColor: activeCategory === c.id ? "#0F172A" : "#E2E8F0",
                background: activeCategory === c.id ? "#0F172A" : "#F8FAFC",
                color: activeCategory === c.id ? "#FFFFFF" : "#475569",
                fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
                transition: "all 0.15s ease"
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Categories & Tools Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28, marginBottom: 80 }}>
          {filteredCategories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: "#F8FAFC", border: "1px solid #E2E8F0",
                borderRadius: 18, padding: "32px 28px"
              }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginBottom: 16 }}>
                {cat.name}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {cat.tools.map((t, ti) => (
                  <span
                    key={ti}
                    style={{
                      background: "#FFFFFF", border: "1px solid #CBD5E1",
                      padding: "8px 16px", borderRadius: 10,
                      fontSize: 13, fontWeight: 600, color: "#0F172A",
                      boxShadow: "0 1px 3px rgba(15,23,42,0.03)"
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
        <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 24, padding: "48px 40px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>
            METHODOLOGY
          </div>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0F172A", marginBottom: 36, letterSpacing: "-.01em" }}>
            The Tool Learning Framework
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {framework.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, padding: "28px"
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", marginBottom: 8 }}>
                  Phase 0{i + 1}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
                  {f.step}
                </h4>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, margin: 0 }}>
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
