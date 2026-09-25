import { useState } from 'react';

export default function TrustStrip({ onOpenDemo }) {
  const [userGoal, setUserGoal] = useState("");

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenDemo(userGoal || "Department cohort upskilling");
  };

  return (
    <section style={{ background: "#040D21", padding: "80px 0", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{
          background: "#0D1117", border: "1px solid #30363D",
          borderRadius: 16, padding: "38px 42px",
          display: "flex", flexDirection: "column", gap: 24,
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)"
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
              ENTERPRISE DEPLOYMENT ARCHITECTURE
            </div>
            <p style={{ fontSize: 16.5, fontWeight: 600, color: "#F0F6FC", lineHeight: 1.55, margin: 0 }}>
              Engineered for enterprises, GCCs, high-growth engineering teams, and global services. Deployable as department cohorts, executive briefing tracks, or company-wide academies.
            </p>
          </div>

          <form onSubmit={handleQuickSubmit} style={{
            background: "#161B22", border: "1px solid #30363D",
            borderRadius: 10, padding: "8px 8px 8px 20px",
            display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap"
          }}>
            <input
              type="text"
              placeholder="Specify your team, current AI maturity, or primary goals..."
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              style={{
                flex: 1, minWidth: 260, border: "none", outline: "none",
                fontSize: 14.5, color: "#F0F6FC", background: "transparent",
                fontFamily: "inherit"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#238636", color: "#FFFFFF", border: "1px solid rgba(240, 246, 252, 0.1)",
                padding: "12px 24px", borderRadius: 8, fontWeight: 700,
                fontSize: 14, cursor: "pointer", whiteSpace: "nowrap",
                transition: "all 0.15s ease",
                boxShadow: "0 2px 8px rgba(35, 134, 54, 0.3)"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
            >
              Map Learning Plan →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

