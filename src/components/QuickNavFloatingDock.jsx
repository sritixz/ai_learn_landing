import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuickNavFloatingDock({ onOpenDemo }) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 24,
      right: 24,
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      border: "1px solid #CBD5E1",
      borderRadius: 9999,
      padding: "6px 10px",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.15)",
      transition: "all 0.25s ease"
    }}>
      <button
        onClick={() => { navigate("/curriculum"); window.scrollTo(0, 0); }}
        style={{
          background: "none",
          border: "none",
          fontSize: 12,
          fontWeight: 700,
          color: "#475569",
          padding: "6px 10px",
          borderRadius: 9999,
          cursor: "pointer"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0F172A"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
      >
        📚 Syllabus
      </button>

      <button
        onClick={() => { navigate("/tools"); window.scrollTo(0, 0); }}
        style={{
          background: "none",
          border: "none",
          fontSize: 12,
          fontWeight: 700,
          color: "#475569",
          padding: "6px 10px",
          borderRadius: 9999,
          cursor: "pointer"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0F172A"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
      >
        🛠️ Tools
      </button>

      <button
        onClick={() => { navigate("/enterprise"); window.scrollTo(0, 0); }}
        style={{
          background: "none",
          border: "none",
          fontSize: 12,
          fontWeight: 700,
          color: "#475569",
          padding: "6px 10px",
          borderRadius: 9999,
          cursor: "pointer"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0F172A"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
      >
        🏢 Enterprise
      </button>

      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        style={{
          background: "none",
          border: "none",
          fontSize: 12,
          fontWeight: 700,
          color: "#FF8A00",
          padding: "6px 10px",
          borderRadius: 9999,
          cursor: "pointer"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255, 138, 0, 0.1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
      >
        ⚡ Footer ↓
      </button>

      <div style={{ width: 1, height: 16, background: "#CBD5E1" }} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Scroll to Top"
        style={{
          background: "#0F172A",
          color: "#FFFFFF",
          border: "none",
          width: 30,
          height: 30,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 800,
          cursor: "pointer"
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        ↑
      </button>
    </div>
  );
}
