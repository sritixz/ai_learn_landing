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
      background: "rgba(15, 23, 42, 0.75)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }}>
      <div style={{
        background: "#FFFFFF",
        borderRadius: 14,
        maxWidth: 520,
        width: "100%",
        padding: "32px 30px",
        boxShadow: "0 20px 48px rgba(15, 23, 42, 0.2)",
        position: "relative",
        border: "1px solid #E2E8F0",
        color: "#0F172A"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: 9999,
            width: 30,
            height: 30,
            cursor: "pointer",
            fontSize: 13,
            color: "#64748B",
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
              background: "rgba(255, 138, 0, 0.12)",
              border: "1px solid rgba(255, 138, 0, 0.3)",
              color: "#FF8A00",
              padding: "4px 12px",
              borderRadius: 9999,
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 10,
              fontFamily: "ui-monospace, SFMono-Regular, monospace"
            }}>
              ENTERPRISE CONSULTATION
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 850, color: "#0F172A", marginBottom: 6, letterSpacing: "-.015em" }}>
              Request Enterprise Briefing & Syllabus
            </h3>
            <p style={{ fontSize: 13.5, color: "#475569", marginBottom: 20, lineHeight: 1.5 }}>
              Provide your organization details. Our solution architects will map a customized role-based training blueprint.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#64748B", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
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
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    fontSize: 13.5,
                    color: "#0F172A",
                    outline: "none"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#64748B", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
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
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "#F8FAFC",
                      border: "1px solid #CBD5E1",
                      fontSize: 13.5,
                      color: "#0F172A",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#64748B", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                    EMPLOYEE COUNT
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      background: "#F8FAFC",
                      border: "1px solid #CBD5E1",
                      fontSize: 13.5,
                      color: "#0F172A",
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
                <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#64748B", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  KEY DEPARTMENTS
                </label>
                <input
                  type="text"
                  placeholder="e.g. Engineering, Sales, Marketing, Finance"
                  value={formData.departments}
                  onChange={(e) => setFormData({ ...formData, departments: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    fontSize: 13.5,
                    color: "#0F172A",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#64748B", marginBottom: 6, fontFamily: "ui-monospace, monospace" }}>
                  PRIMARY OBJECTIVES
                </label>
                <textarea
                  rows={2}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    fontSize: 13.5,
                    color: "#0F172A",
                    outline: "none",
                    fontFamily: "inherit"
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-orange-pill"
                style={{ width: "100%", justifyContent: "center", padding: "12px", marginTop: 6 }}
              >
                Schedule Briefing & Request Blueprint →
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(21, 128, 61, 0.12)",
              border: "1px solid #15803D",
              color: "#15803D",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px auto",
              fontWeight: 800
            }}>
              ✓
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
              Consultation Request Received
            </h3>
            <p style={{ fontSize: 13.5, color: "#475569", marginBottom: 20, lineHeight: 1.6 }}>
              An enterprise solution architect will contact you at <strong style={{ color: "#0F172A" }}>{formData.workEmail}</strong> within 24 business hours to present a customized curriculum blueprint.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-navy-pill"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
