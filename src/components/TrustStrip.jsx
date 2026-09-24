import { useState } from 'react';

export default function TrustStrip({ onOpenDemo }) {
  const [userGoal, setUserGoal] = useState("");

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenDemo(userGoal || "Department cohort upskilling");
  };

  return (
    <section style={{ background: "#FFFFFF", padding: "40px 0", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{
          background: "#F8FAFC", border: "1px solid #CBD5E1",
          borderRadius: 16, padding: "28px 32px",
          display: "flex", flexDirection: "column", gap: 20
        }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em" }}>
              ENTERPRISE DEPLOYMENT MODELS
            </span>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#0F1F3D", marginTop: 4, lineHeight: 1.5 }}>
              Built for enterprises, GCCs, startups, agencies, professional-services firms and digital teams. Delivery can be cohort-based, department-specific or company-wide.
            </p>
          </div>

          <form onSubmit={handleQuickSubmit} style={{
            background: "#FFFFFF", border: "1.5px solid #CBD5E1",
            borderRadius: 12, padding: "8px 8px 8px 18px",
            display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap"
          }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <input
              type="text"
              placeholder="Tell us your teams, current AI maturity and business goals. We will map a role-based learning plan."
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              style={{
                flex: 1, minWidth: 260, border: "none", outline: "none",
                fontSize: 14, color: "#0F1F3D", fontFamily: "inherit"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#0F1F3D", color: "#FFFFFF", border: "none",
                padding: "10px 22px", borderRadius: 8, fontWeight: 700,
                fontSize: 14, cursor: "pointer", whiteSpace: "nowrap"
              }}
            >
              Get Custom Learning Plan →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
