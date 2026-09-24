import React, { useState } from 'react';

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
      background: "rgba(15, 31, 61, 0.75)",
      backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20
    }}>
      <div style={{
        background: "#FFFFFF",
        borderRadius: 20,
        maxWidth: 540,
        width: "100%",
        padding: "36px 32px",
        boxShadow: "0 20px 50px rgba(15, 31, 61, 0.3)",
        position: "relative",
        border: "1px solid #E2E8F0"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, right: 20,
            background: "#F1F5F9", border: "none", borderRadius: "50%",
            width: 32, height: 32, cursor: "pointer",
            fontSize: 16, fontWeight: "bold", color: "#64748B"
          }}
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div style={{ display: "inline-block", background: "#EFF6FF", color: "#2563EB", padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 12 }}>
              Enterprise GenAI Consultation
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F1F3D", marginBottom: 8, letterSpacing: "-.02em" }}>
              Request an Enterprise Demo
            </h3>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 24, lineHeight: 1.5 }}>
              Tell us your teams, current AI maturity, and business goals. We will map a role-based learning plan for your organization.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F1F3D", marginBottom: 6 }}>Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 10,
                    border: "1.5px solid #CBD5E1", fontSize: 14, outline: "none"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F1F3D", marginBottom: 6 }}>Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 14px", borderRadius: 10,
                      border: "1.5px solid #CBD5E1", fontSize: 14, outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F1F3D", marginBottom: 6 }}>Employee Count</label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 14px", borderRadius: 10,
                      border: "1.5px solid #CBD5E1", fontSize: 14, outline: "none", background: "#fff"
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
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F1F3D", marginBottom: 6 }}>Key Departments to Upskill</label>
                <input
                  type="text"
                  placeholder="e.g. Marketing, Sales, Engineering, Finance"
                  value={formData.departments}
                  onChange={(e) => setFormData({ ...formData, departments: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 10,
                    border: "1.5px solid #CBD5E1", fontSize: 14, outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#0F1F3D", marginBottom: 6 }}>Primary Training Goal</label>
                <textarea
                  rows={3}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 10,
                    border: "1.5px solid #CBD5E1", fontSize: 14, outline: "none", fontFamily: "inherit"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#0F1F3D", color: "#FFFFFF",
                  padding: "14px 24px", borderRadius: 12, border: "none",
                  fontWeight: 700, fontSize: 15, cursor: "pointer",
                  marginTop: 6, boxShadow: "0 4px 14px rgba(15,31,61,0.2)"
                }}
              >
                Schedule Consultation & Get Curriculum
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0F1F3D", marginBottom: 10 }}>
              Consultation Request Received!
            </h3>
            <p style={{ fontSize: 14, color: "#64748B", marginBottom: 24, lineHeight: 1.6 }}>
              Thank you for reaching out. An AI Global Academy enterprise solution specialist will contact you at <strong>{formData.workEmail}</strong> within 24 hours to present a customized curriculum blueprint.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              style={{
                background: "#0F1F3D", color: "#FFFFFF",
                padding: "12px 28px", borderRadius: 10, border: "none",
                fontWeight: 700, cursor: "pointer"
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
