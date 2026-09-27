import React from 'react';

export default function ToolTicker({ onOpenDemo }) {
  const row1 = [
    { name: "OpenAI GPT-4o", tag: "LLM", color: "#10A37F", bg: "rgba(16, 163, 127, 0.08)", icon: "⚡" },
    { name: "Claude 3.5 Sonnet", tag: "LLM", color: "#D97706", bg: "rgba(217, 119, 6, 0.08)", icon: "🧠" },
    { name: "Google Gemini 1.5 Pro", tag: "Multimodal", color: "#2563EB", bg: "rgba(37, 99, 235, 0.08)", icon: "✨" },
    { name: "GitHub Copilot", tag: "Engineering", color: "#0F172A", bg: "rgba(15, 23, 42, 0.06)", icon: "💻" },
    { name: "Cursor IDE", tag: "Coding", color: "#0284C7", bg: "rgba(2, 132, 199, 0.08)", icon: "🚀" },
    { name: "Perplexity Enterprise", tag: "Research", color: "#7C3AED", bg: "rgba(124, 58, 237, 0.08)", icon: "🔍" },
    { name: "Microsoft Copilot", tag: "Productivity", color: "#0078D4", bg: "rgba(0, 120, 212, 0.08)", icon: "🛡️" },
    { name: "Midjourney v6", tag: "Design", color: "#DB2777", bg: "rgba(219, 39, 119, 0.08)", icon: "🎨" },
    { name: "ElevenLabs AI", tag: "Voice", color: "#059669", bg: "rgba(5, 150, 105, 0.08)", icon: "🎙️" },
    { name: "n8n Enterprise", tag: "Automation", color: "#EA580C", bg: "rgba(234, 88, 12, 0.08)", icon: "⚡" }
  ];

  const row2 = [
    { name: "LangChain & LangGraph", tag: "Framework", color: "#0D9488", bg: "rgba(13, 148, 136, 0.08)", icon: "🦜" },
    { name: "CrewAI Multi-Agents", tag: "Agents", color: "#E11D48", bg: "rgba(225, 29, 72, 0.08)", icon: "🤖" },
    { name: "Make.com Pipelines", tag: "Workflows", color: "#9333EA", bg: "rgba(147, 51, 234, 0.08)", icon: "🔄" },
    { name: "Runway Gen-3", tag: "Video AI", color: "#C026D3", bg: "rgba(192, 38, 211, 0.08)", icon: "🎬" },
    { name: "PyTorch & Python", tag: "Deep Learning", color: "#EE4C2C", bg: "rgba(238, 76, 44, 0.08)", icon: "🔥" },
    { name: "Notion AI Enterprise", tag: "Workspace", color: "#18181B", bg: "rgba(24, 24, 27, 0.06)", icon: "📝" },
    { name: "Pinecone Vector DB", tag: "RAG / Data", color: "#2563EB", bg: "rgba(37, 99, 235, 0.08)", icon: "🌲" },
    { name: "Adobe Firefly", tag: "Generative Media", color: "#DC2626", bg: "rgba(220, 38, 38, 0.08)", icon: "✨" },
    { name: "vLLM & Ollama", tag: "Local Models", color: "#4F46E5", bg: "rgba(79, 70, 229, 0.08)", icon: "🦙" },
    { name: "Lovable & v0.dev", tag: "App Gen", color: "#0284C7", bg: "rgba(2, 132, 199, 0.08)", icon: "⚡" }
  ];

  return (
    <section style={{
      background: "#FFFFFF",
      padding: "54px 0 60px",
      borderBottom: "1px solid #E2E8F0",
      overflow: "hidden",
      position: "relative"
    }}>
      <style>{`
        @keyframes ticker-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-track-left {
          display: flex;
          width: max-content;
          animation: ticker-left 40s linear infinite;
        }
        .ticker-track-right {
          display: flex;
          width: max-content;
          animation: ticker-right 45s linear infinite;
        }
        .ticker-wrapper:hover .ticker-track-left,
        .ticker-wrapper:hover .ticker-track-right {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", marginBottom: 24, textAlign: "center" }}>
        <div style={{
          fontSize: 11.5,
          fontWeight: 800,
          color: "#FF8A00",
          textTransform: "uppercase",
          letterSpacing: ".1em",
          fontFamily: "ui-monospace, monospace",
          marginBottom: 6
        }}>
          67+ HANDS-ON ENTERPRISE TOOLS & FRAMEWORKS
        </div>
        <h3 style={{
          fontSize: "clamp(20px, 2.5vw, 26px)",
          fontWeight: 850,
          color: "#0F172A",
          letterSpacing: "-.02em",
          margin: 0
        }}>
          Master the complete Generative AI & Agentic Stack
        </h3>
      </div>

      {/* Row 1: Left Scroll */}
      <div className="ticker-wrapper" style={{ position: "relative", marginBottom: 16 }}>
        {/* Left/Right Edge Fades */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: 0, width: 90,
          background: "linear-gradient(to right, #FFFFFF, transparent)",
          zIndex: 10, pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", top: 0, bottom: 0, right: 0, width: 90,
          background: "linear-gradient(to left, #FFFFFF, transparent)",
          zIndex: 10, pointerEvents: "none"
        }} />

        <div className="ticker-track-left">
          {[...row1, ...row1].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenDemo && onOpenDemo(`${item.name} Hands-on Training`)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 18px",
                marginRight: 14,
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 9999,
                cursor: "pointer",
                transition: "all 0.15s ease",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.background = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#F8FAFC";
              }}
            >
              <span style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13
              }}>
                {item.icon}
              </span>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: "#0F172A" }}>
                {item.name}
              </span>
              <span style={{
                fontSize: 10,
                fontWeight: 800,
                color: item.color,
                background: item.bg,
                padding: "2px 7px",
                borderRadius: 9999,
                fontFamily: "ui-monospace, monospace"
              }}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right Scroll */}
      <div className="ticker-wrapper" style={{ position: "relative" }}>
        {/* Left/Right Edge Fades */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: 0, width: 90,
          background: "linear-gradient(to right, #FFFFFF, transparent)",
          zIndex: 10, pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", top: 0, bottom: 0, right: 0, width: 90,
          background: "linear-gradient(to left, #FFFFFF, transparent)",
          zIndex: 10, pointerEvents: "none"
        }} />

        <div className="ticker-track-right">
          {[...row2, ...row2].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenDemo && onOpenDemo(`${item.name} Hands-on Training`)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 18px",
                marginRight: 14,
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 9999,
                cursor: "pointer",
                transition: "all 0.15s ease",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.background = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#F8FAFC";
              }}
            >
              <span style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13
              }}>
                {item.icon}
              </span>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: "#0F172A" }}>
                {item.name}
              </span>
              <span style={{
                fontSize: 10,
                fontWeight: 800,
                color: item.color,
                background: item.bg,
                padding: "2px 7px",
                borderRadius: 9999,
                fontFamily: "ui-monospace, monospace"
              }}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
