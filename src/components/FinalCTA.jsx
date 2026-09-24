import React from 'react';

export default function FinalCTA({ onOpenDemo, scrollToSection }) {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0F1F3D 0%, #1E3A8A 100%)",
      color: "#FFFFFF", padding: "96px 0", textAlign: "center"
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{
          display: "inline-block", background: "rgba(255, 255, 255, 0.15)",
          color: "#93C5FD", padding: "6px 18px", borderRadius: 999,
          fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em",
          marginBottom: 20
        }}>
          FINAL CONVERSION
        </div>

        <h2 style={{
          fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 900,
          lineHeight: 1.15, letterSpacing: "-.02em", marginBottom: 20
        }}>
          Your teams are already using AI. The question is whether they are using it systematically, safely and at scale.
        </h2>

        <p style={{
          fontSize: 19, color: "#E2E8F0", maxWidth: 780,
          margin: "0 auto 40px", lineHeight: 1.6, fontWeight: 400
        }}>
          Build an AI-ready workforce with role-based learning, 50+ practical tools, real business projects, AI agents and automation.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo("Final CTA Booking")}
            style={{
              background: "#2563EB", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 800,
              fontSize: 16, cursor: "pointer", boxShadow: "0 6px 20px rgba(37,99,235,0.4)"
            }}
          >
            Book a 30-Minute Enterprise Consultation
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(255, 255, 255, 0.12)", color: "#FFFFFF", border: "1.5px solid rgba(255, 255, 255, 0.3)",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer"
            }}
          >
            Get the Curriculum
          </button>
        </div>

        <p style={{ fontSize: 13, color: "#94A3B8", fontStyle: "italic", maxWidth: 640, margin: "0 auto" }}>
          "Share your employee count, key departments and AI priorities. We will recommend a program structure and sample learning path."
        </p>

      </div>
    </section>
  );
}
