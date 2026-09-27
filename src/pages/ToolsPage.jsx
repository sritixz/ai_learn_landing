import React, { useEffect } from 'react';
import ToolEcosystem from '../components/ToolEcosystem';
import FinalCTA from '../components/FinalCTA';
import { useNavigate } from 'react-router-dom';

export default function ToolsPage({ onOpenDemo, scrollToSection }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header Banner */}
      <div style={{
        background: "#F8FAFC",
        padding: "60px 24px 40px",
        borderBottom: "1px solid #E2E8F0",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              color: "#FF8A00",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              marginBottom: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 6
            }}
          >
            ← Back to Main Page
          </button>
          <div style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#FF8A00",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 8,
            fontFamily: "ui-monospace, monospace"
          }}>
            ENTERPRISE TOOLKIT & AGENTIC STACK
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 850,
            color: "#0F172A",
            letterSpacing: "-.02em",
            marginBottom: 16
          }}>
            67+ Evaluated AI Tools & Agent Systems
          </h1>
          <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.6, maxWidth: 720, margin: "0 auto" }}>
            Comprehensive directory of evaluated LLMs, code copilots, image/video synthesis suites, automation pipelines, and autonomous agent frameworks.
          </p>
        </div>
      </div>

      <ToolEcosystem onOpenDemo={onOpenDemo} />

      <FinalCTA onOpenDemo={onOpenDemo} scrollToSection={scrollToSection} />
    </div>
  );
}
