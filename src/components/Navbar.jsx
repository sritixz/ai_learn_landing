import { useState } from 'react';

export default function Navbar({ onOpenDemo, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Programs", target: "solutions" },
    { label: "Solutions", target: "role-tracks" },
    { label: "Curriculum", target: "curriculum" },
    { label: "AI Tools", target: "ai-tools" },
    { label: "Enterprise", target: "enterprise" },
    { label: "Resources", target: "resources" }
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(5, 11, 26, 0.9)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid #1E293B"
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 24px",
        height: 68, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "#0F172A",
            border: "1px solid #1E293B",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, color: "#2F81F7", fontWeight: 800,
            fontFamily: "ui-monospace, monospace"
          }}>
            AG
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14.5, color: "#F8FAFC", letterSpacing: "-.02em", lineHeight: 1.1 }}>
              AI GLOBAL ACADEMY
            </div>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#2F81F7", letterSpacing: ".05em", textTransform: "uppercase" }}>
              Enterprise GenAI Education
            </div>
          </div>
        </div>

        {/* Desktop Center Nav Links */}
        <div className="desktop-nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 500, color: "#94A3B8",
                padding: "8px 12px", borderRadius: 6,
                transition: "all 0.15s ease",
                letterSpacing: "-.01em"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(30, 41, 59, 0.5)"; e.currentTarget.style.color = "#F8FAFC"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#94A3B8"; }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Action CTAs */}
        <div className="desktop-nav-actions">
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "rgba(15, 23, 42, 0.6)", border: "1px solid #1E293B", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: "#F8FAFC",
              padding: "7px 14px", borderRadius: 7,
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.background = "#1E293B"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1E293B"; e.currentTarget.style.background = "rgba(15, 23, 42, 0.6)"; }}
          >
            Syllabus ↓
          </button>
          <button
            onClick={() => onOpenDemo()}
            style={{
              background: "#238636", color: "#FFFFFF", border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer", fontSize: 13, fontWeight: 600,
              padding: "7px 16px", borderRadius: 7,
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Book Enterprise Demo
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: "#0B1220",
          borderBottom: "1px solid #1E293B",
          padding: "16px 24px 24px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 10
        }}>
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                padding: "10px 12px",
                borderRadius: 6,
                fontSize: 14.5,
                fontWeight: 600,
                color: "#F8FAFC",
                cursor: "pointer"
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ borderTop: "1px solid #1E293B", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={() => { setMobileMenuOpen(false); scrollToSection("curriculum"); }}
              style={{
                width: "100%",
                background: "#050B1A",
                border: "1px solid #1E293B",
                color: "#F8FAFC",
                padding: "10px",
                borderRadius: 7,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Explore 10-Module Syllabus ↓
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              style={{
                width: "100%",
                background: "#238636",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                padding: "11px",
                borderRadius: 7,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Book Enterprise Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
