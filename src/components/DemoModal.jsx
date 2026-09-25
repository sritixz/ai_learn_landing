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
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(5, 11, 26, 0.85)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }}>
      <div style={{
        background: "#0B1220",
        borderRadius: 12,
        maxWidth: 520,
        width: "100%",
        padding: "32px 30px",
        boxShadow: "0 20px 48px rgba(0, 0, 0, 0.6)",
        position: "relative",
        border: "1px solid #1E293B",
        color: "#F8FAFC"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "#050B1A",
            border: "1px solid #1E293B",
            borderRadius: 6,
            width: 28,
            height: 28,
            cursor: "pointer",
            fontSize: 13,
            color: "#94A3B8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div style={{
              display: "inline-block",
              background: "rgba(47, 129, 247, 0.1)",
              border: "1px solid rgba(47, 129, 247, 0.25)",
              color: "#2F81F7",
              padding: "3px 10px",
              borderRadius: 4,
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 10,
              fontFamily: "ui-monospace, SFMono-Regular, monospace"
            }}>
              ENTERPRISE CONSULTATION
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#F8FAFC", marginBottom: 6, letterSpacing: "-.015em" }}>
              Request Enterprise Briefing & Syllabus
            </h3>
            <p style={{ fontSize: 13.5, color: "#94A3B8", marginBottom: 20, lineHeight: 1.5 }}>
              Provide your organization details. Our solution architects will map a customized role-based training blueprint.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#94A3B8", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: 6,
                    background: "#050B1A",
                    border: "1px solid #1E293B",
                    fontSize: 13.5,
                    color: "#F8FAFC",
                    outline: "none"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#94A3B8", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Enterprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: 6,
                      background: "#050B1A",
                      border: "1px solid #1E293B",
                      fontSize: 13.5,
                      color: "#F8FAFC",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#94A3B8", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                    EMPLOYEE COUNT
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "9px 12px",
                      borderRadius: 6,
                      background: "#050B1A",
                      border: "1px solid #1E293B",
                      fontSize: 13.5,
                      color: "#F8FAFC",
                      outline: "none"
                    }}
                  >
                    <option value="1-50">1 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="201-1000">201 – 1,000 employees</option>
                    <option value="1000+">1,000+ enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#94A3B8", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  KEY DEPARTMENTS
                </label>
                <input
                  type="text"
                  placeholder="e.g. Engineering, Sales, Marketing, Finance"
                  value={formData.departments}
                  onChange={(e) => setFormData({ ...formData, departments: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: 6,
                    background: "#050B1A",
                    border: "1px solid #1E293B",
                    fontSize: 13.5,
                    color: "#F8FAFC",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#94A3B8", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  PRIMARY OBJECTIVES
                </label>
                <textarea
                  rows={2}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: 6,
                    background: "#050B1A",
                    border: "1px solid #1E293B",
                    fontSize: 13.5,
                    color: "#F8FAFC",
                    outline: "none",
                    fontFamily: "inherit"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#238636",
                  color: "#FFFFFF",
                  padding: "11px 20px",
                  borderRadius: 7,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  marginTop: 6,
                  transition: "background 0.15s ease"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
              >
                Schedule Briefing & Request Blueprint →
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(35, 134, 54, 0.15)",
              border: "1px solid #238636",
              color: "#238636",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px auto"
            }}>
              ✓
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#F8FAFC", marginBottom: 8 }}>
              Consultation Request Received
            </h3>
            <p style={{ fontSize: 13.5, color: "#94A3B8", marginBottom: 20, lineHeight: 1.6 }}>
              An enterprise solution architect will contact you at <strong style={{ color: "#F8FAFC" }}>{formData.workEmail}</strong> within 24 business hours to present a customized curriculum blueprint.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              style={{
                background: "#050B1A",
                color: "#F8FAFC",
                border: "1px solid #1E293B",
                padding: "9px 20px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 13.5,
                cursor: "pointer"
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
