import { useState } from 'react';

export default function ToolEcosystem() {
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

  const framework = [
    {
      step: "Evaluate & Govern",
      subtitle: "Benchmark & Risk Profiling",
      desc: "Identify specific model strengths, context limits, latency profiles, hallucination risks, and data compliance standards before deployment."
    },
    {
      step: "Contextualize & Practice",
      subtitle: "Workflow Integration",
      desc: "Execute hands-on exercises comparing baseline manual outputs against AI-accelerated workflows using sanitized corporate assets."
    },
    {
      step: "Systematize & Standardize",
      subtitle: "Reusable Assets",
      desc: "Package validated prompt architectures, structured schema templates, and multi-step agent chains into version-controlled team libraries."
    },
    {
      step: "Automate & Measure",
      subtitle: "Production Deployment",
      desc: "Connect models to internal APIs, automate recurring business deliverables, and monitor adoption and accuracy through manager dashboards."
    }
  ];

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="ai-tools" style={{ padding: "110px 0", background: "#050B1A", borderBottom: "1px solid #1E293B" }}>
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
            ENTERPRISE TOOL MATRIX
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            marginBottom: 16
          }}>
            67+ leading AI platforms evaluated and operationalized.
          </h2>
          <p style={{
            fontSize: 16,
            color: "#94A3B8",
            maxWidth: 800,
            lineHeight: 1.65,
            margin: 0
          }}>
            We do not teach isolated tools in a vacuum. We cultivate tool judgment — empowering teams to evaluate accuracy, latency, security, and cost across frontier models and domain-specific applications.
          </p>
        </div>

        {/* Filter Bar (GitHub / Linear Segmented Control) */}
        <div style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          paddingBottom: 12,
          marginBottom: 36,
          borderBottom: "1px solid #1E293B"
        }}>
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "7px 14px",
              borderRadius: 6,
              border: "1px solid",
              borderColor: activeCategory === "all" ? "#2F81F7" : "transparent",
              background: activeCategory === "all" ? "rgba(47, 129, 247, 0.12)" : "transparent",
              color: activeCategory === "all" ? "#F8FAFC" : "#64748B",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.12s ease"
            }}
          >
            All Categories ({categories.reduce((acc, c) => acc + c.tools.length, 0)}+ tools)
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              style={{
                padding: "7px 14px",
                borderRadius: 6,
                border: "1px solid",
                borderColor: activeCategory === c.id ? "#2F81F7" : "transparent",
                background: activeCategory === c.id ? "rgba(47, 129, 247, 0.12)" : "transparent",
                color: activeCategory === c.id ? "#F8FAFC" : "#64748B",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.12s ease"
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Categories & Tools Technical Catalog */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 20,
          marginBottom: 64
        }}>
          {filteredCategories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: "#0B1220",
                border: "1px solid #1E293B",
                borderRadius: 8,
                padding: "24px 26px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: 14.5, fontWeight: 700, color: "#F8FAFC", margin: 0 }}>
                  {cat.name}
                </h3>
                <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#64748B" }}>
                  {cat.tools.length} TOOLS
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.tools.map((t, ti) => (
                  <span
                    key={ti}
                    style={{
                      background: "#050B1A",
                      border: "1px solid #1E293B",
                      padding: "5px 11px",
                      borderRadius: 5,
                      fontSize: 12.5,
                      fontWeight: 500,
                      color: "#CBD5E1",
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

        {/* 4-Stage Pedagogical Framework - Horizontal Timeline Layout */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 10,
          padding: "36px 36px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                PEDAGOGICAL METHODOLOGY
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F8FAFC", margin: 0, letterSpacing: "-.01em" }}>
                The 4-Stage Enterprise Tool Learning Lifecycle
              </h3>
            </div>
            <span style={{ fontSize: 12, color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
              INSTITUTIONAL ENABLEMENT CYCLE
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {framework.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#050B1A",
                  border: "1px solid #1E293B",
                  borderRadius: 8,
                  padding: "22px 20px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", fontFamily: "ui-monospace, monospace" }}>
                    STAGE 0{i + 1}
                  </span>
                  <span style={{ fontSize: 10, color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
                    {f.subtitle}
                  </span>
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#F8FAFC", marginBottom: 8 }}>
                  {f.step}
                </h4>
                <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.55, margin: 0 }}>
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
