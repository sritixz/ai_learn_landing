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
      background: "rgba(255, 255, 255, 0.94)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid #E2E8F0",
      boxShadow: "0 2px 12px rgba(15, 23, 42, 0.04)"
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
            width: 34, height: 34, borderRadius: 8,
            background: "#0F172A",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, color: "#FF8A00", fontWeight: 800,
            fontFamily: "ui-monospace, monospace",
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.2)"
          }}>
            AG
          </div>
          <div>
            <div style={{ fontWeight: 850, fontSize: 15, color: "#0F172A", letterSpacing: "-.02em", lineHeight: 1.1 }}>
              AI GLOBAL ACADEMY
            </div>
            <div style={{ fontSize: 9.5, fontWeight: 700, color: "#FF8A00", letterSpacing: ".06em", textTransform: "uppercase" }}>
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
                fontSize: 13.5, fontWeight: 600, color: "#475569",
                padding: "8px 14px", borderRadius: 9999,
                transition: "all 0.15s ease",
                letterSpacing: "-.01em"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0F172A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Action CTAs */}
        <div className="desktop-nav-actions">
          <button
            onClick={() => scrollToSection("curriculum")}
            className="btn-outline-pill"
          >
            Syllabus ↓
          </button>
          <button
            onClick={() => onOpenDemo()}
            className="btn-orange-pill"
          >
            TRENDING COURSES
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
          background: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          padding: "16px 24px 24px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)"
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
                color: "#0F172A",
                cursor: "pointer"
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={() => { setMobileMenuOpen(false); scrollToSection("curriculum"); }}
              className="btn-outline-pill"
              style={{ width: "100%", justifyContent: "center", padding: "11px" }}
            >
              Explore 10-Module Syllabus ↓
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="btn-orange-pill"
              style={{ width: "100%", justifyContent: "center", padding: "12px" }}
            >
              TRENDING COURSES
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
