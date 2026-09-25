import { useState } from 'react';

export default function DemoModal({ isOpen, onClose, initialGoal = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    workEmail: "",
    company: "",
    employeeCount: "51-200",
    departments: "Marketing, Engineering, Sales",
    goal: initialGoal || "Upskill teams on GenAI & Automations"
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(4, 13, 33, 0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20
    }}>
      <div style={{
        background: "#0D1117",
        borderRadius: 16,
        maxWidth: 540,
        width: "100%",
        padding: "36px 32px",
        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.6)",
        position: "relative",
        border: "1px solid #30363D",
        color: "#F0F6FC"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, right: 20,
            background: "#161B22", border: "1px solid #30363D", borderRadius: "50%",
            width: 32, height: 32, cursor: "pointer",
            fontSize: 14, fontWeight: "bold", color: "#8B949E",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div style={{
              display: "inline-block", background: "rgba(56, 139, 253, 0.15)",
              border: "1px solid rgba(56, 139, 253, 0.3)",
              color: "#388BFD", padding: "4px 12px", borderRadius: 6,
              fontSize: 11, fontWeight: 700, marginBottom: 12,
              fontFamily: "ui-monospace, monospace"
            }}>
              ENTERPRISE CONSULTATION
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#F0F6FC", marginBottom: 6, letterSpacing: "-.02em" }}>
              Request an Enterprise Demo
            </h3>
            <p style={{ fontSize: 13.5, color: "#8B949E", marginBottom: 24, lineHeight: 1.5 }}>
              Tell us your teams, current AI maturity, and business goals. We will map a role-based learning plan for your organization.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8B949E", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  style={{
                    width: "100%", padding: "10px 14px", borderRadius: 8,
                    background: "#161B22", border: "1px solid #30363D",
                    fontSize: 14, color: "#F0F6FC", outline: "none"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8B949E", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 8,
                      background: "#161B22", border: "1px solid #30363D",
                      fontSize: 14, color: "#F0F6FC", outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8B949E", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                    EMPLOYEE COUNT
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    style={{
                      width: "100%", padding: "10px 14px", borderRadius: 8,
                      background: "#161B22", border: "1px solid #30363D",
                      fontSize: 14, color: "#F0F6FC", outline: "none"
                    }}
                  >
                    <option value="1-50">1 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="201-1000">201 - 1,000 employees</option>
                    <option value="1000+">1,000+ enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8B949E", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  KEY DEPARTMENTS TO UPSKILL
                </label>
                <input
                  type="text"
                  placeholder="e.g. Engineering, Sales, Marketing, Finance"
                  value={formData.departments}
                  onChange={(e) => setFormData({ ...formData, departments: e.target.value })}
                  style={{
                    width: "100%", padding: "10px 14px", borderRadius: 8,
                    background: "#161B22", border: "1px solid #30363D",
                    fontSize: 14, color: "#F0F6FC", outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8B949E", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  PRIMARY TRAINING GOAL
                </label>
                <textarea
                  rows={3}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  style={{
                    width: "100%", padding: "10px 14px", borderRadius: 8,
                    background: "#161B22", border: "1px solid #30363D",
                    fontSize: 14, color: "#F0F6FC", outline: "none", fontFamily: "inherit"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#238636", color: "#FFFFFF",
                  padding: "12px 24px", borderRadius: 8, border: "1px solid rgba(240, 246, 252, 0.1)",
                  fontWeight: 700, fontSize: 14, cursor: "pointer",
                  marginTop: 4, boxShadow: "0 2px 8px rgba(35, 134, 54, 0.35)",
                  transition: "all 0.15s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
              >
                Schedule Consultation & Get Curriculum
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "rgba(46, 160, 67, 0.15)", border: "1px solid #2EA043",
              color: "#2EA043", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px auto"
            }}>
              ✓
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F0F6FC", marginBottom: 8 }}>
              Consultation Request Received
            </h3>
            <p style={{ fontSize: 14, color: "#8B949E", marginBottom: 24, lineHeight: 1.6 }}>
              Thank you for reaching out. An AI Global Academy enterprise solution specialist will contact you at <strong style={{ color: "#F0F6FC" }}>{formData.workEmail}</strong> within 24 hours to present a customized curriculum blueprint.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              style={{
                background: "#161B22", color: "#F0F6FC", border: "1px solid #30363D",
                padding: "10px 24px", borderRadius: 8,
                fontWeight: 600, fontSize: 14, cursor: "pointer"
              }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
