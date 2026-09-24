import { useState } from 'react';

export default function TrustStrip({ onOpenDemo }) {
  const [userGoal, setUserGoal] = useState("");

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenDemo(userGoal || "Department cohort upskilling");
  };

  return (
    <section style={{ background: "#FFFFFF", padding: "56px 0", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{
          background: "#F8FAFC", border: "1px solid #E2E8F0",
          borderRadius: 20, padding: "36px 40px",
          display: "flex", flexDirection: "column", gap: 24
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 6 }}>
              Flexible Enterprise Delivery Models
            </div>
            <p style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", lineHeight: 1.5, margin: 0 }}>
              Built for enterprises, GCCs, high-growth startups, professional services, and agency teams. Delivery can be cohort-based, department-specific, or company-wide.
            </p>
          </div>

          <form onSubmit={handleQuickSubmit} style={{
            background: "#FFFFFF", border: "1.5px solid #CBD5E1",
            borderRadius: 12, padding: "8px 8px 8px 20px",
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap"
          }}>
            <input
              type="text"
              placeholder="Tell us your teams, current AI maturity, or primary goals..."
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              style={{
                flex: 1, minWidth: 280, border: "none", outline: "none",
                fontSize: 15, color: "#0F172A", fontFamily: "inherit"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#0F172A", color: "#FFFFFF", border: "none",
                padding: "12px 24px", borderRadius: 8, fontWeight: 700,
                fontSize: 14, cursor: "pointer", whiteSpace: "nowrap",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1E293B"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#0F172A"; }}
            >
              Map Your Learning Plan →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
