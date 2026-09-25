import { useState } from 'react';

export default function TrustStrip({ onOpenDemo }) {
  const [userGoal, setUserGoal] = useState("");

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenDemo(userGoal || "Enterprise Deployment Architecture Consultation");
  };

  const stages = [
    {
      step: "01",
      name: "Enterprise Scope",
      sub: "Workforce segmentation & tool security boundaries"
    },
    {
      step: "02",
      name: "Role Cohorts",
      sub: "Tailored syllabi for Engineering, Sales, Ops & Finance"
    },
    {
      step: "03",
      name: "Live Tool Labs",
      sub: "Hands-on execution with 50+ enterprise AI platforms"
    },
    {
      step: "04",
      name: "Workflow Delivery",
      sub: "Production prompt libraries, automations & capstones"
    },
    {
      step: "05",
      name: "Adoption & ROI",
      sub: "Manager verification & ongoing productivity tracking"
    }
  ];

  return (
    <section style={{ background: "#050B1A", padding: "80px 0 88px", borderBottom: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#2F81F7", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
              ENTERPRISE DEPLOYMENT ARCHITECTURE
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-.02em", margin: 0 }}>
              End-to-End Workforce Transformation Framework
            </h2>
          </div>
          <p style={{ fontSize: 14, color: "#94A3B8", maxWidth: 440, lineHeight: 1.5, margin: 0 }}>
            Engineered for global enterprises, engineering organizations, GCCs, and high-growth teams scaling AI fluency.
          </p>
        </div>

        {/* Structured 5-Stage Architecture Flow Diagram */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: 16,
          marginBottom: 40
        }}>
          {stages.map((st, i) => (
            <div
              key={st.step}
              style={{
                background: "#0B1220",
                border: "1px solid #1E293B",
                borderRadius: 8,
                padding: "20px 18px",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, color: "#2F81F7",
                  fontFamily: "ui-monospace, monospace",
                  background: "rgba(47, 129, 247, 0.1)",
                  padding: "2px 7px", borderRadius: 4,
                  border: "1px solid rgba(47, 129, 247, 0.2)"
                }}>
                  STAGE {st.step}
                </span>
                {i < stages.length - 1 && (
                  <span style={{ color: "#334155", fontSize: 13, fontWeight: 700 }}>→</span>
                )}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#F8FAFC", marginBottom: 6 }}>
                {st.name}
              </div>
              <div style={{ fontSize: 12.5, color: "#94A3B8", lineHeight: 1.45 }}>
                {st.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar for Custom Architecture Mapping */}
        <div style={{
          background: "#0B1220",
          border: "1px solid #1E293B",
          borderRadius: 8,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap"
        }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#F8FAFC" }}>
              Request a Customized Enterprise Deployment Plan
            </div>
            <div style={{ fontSize: 12.5, color: "#94A3B8", marginTop: 2 }}>
              Receive an organizational roadmap based on your headcount, departments, and tool stack.
            </div>
          </div>

          <form onSubmit={handleQuickSubmit} style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flex: "1 1 400px",
            maxWidth: 520
          }}>
            <input
              type="text"
              placeholder="Your organization / target departments..."
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              style={{
                flex: 1,
                background: "#0F172A",
                border: "1px solid #1E293B",
                borderRadius: 6,
                padding: "9px 14px",
                fontSize: 13.5,
                color: "#F8FAFC",
                outline: "none"
              }}
            />
            <button
              type="submit"
              style={{
                background: "#238636",
                color: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "9px 18px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
            >
              Plan Deployment →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}


