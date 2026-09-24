
export default function Navbar({ onOpenDemo, scrollToSection }) {
  const navItems = [
    { label: "Programs", target: "programs" },
    { label: "Role Tracks", target: "role-tracks" },
    { label: "AI Tools", target: "ai-tools" },
    { label: "AI Agents & Automation", target: "agents-automation" },
    { label: "Enterprise", target: "enterprise-delivery" },
    { label: "Resources", target: "resources" }
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255, 255, 255, 0.96)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid #E2E8F0"
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 24px",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
        >
          <div style={{
            width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #0F1F3D 0%, #1E3A8A 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, color: "#fff", fontWeight: 900, boxShadow: "0 2px 8px rgba(15,31,61,0.2)"
          }}>
            AG
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#0F1F3D", letterSpacing: "-.02em", lineHeight: 1.1 }}>
              AI GLOBAL ACADEMY
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#2563EB", letterSpacing: ".06em", textTransform: "uppercase" }}>
              Enterprise GenAI Upskilling
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, color: "#475569",
                padding: "8px 14px", borderRadius: 8,
                transition: "all 0.15s ease",
                letterSpacing: ".01em"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0F1F3D"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "none", border: "1.5px solid #CBD5E1", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: "#0F1F3D",
              padding: "9px 16px", borderRadius: 10,
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0F1F3D"; e.currentTarget.style.background = "#F8FAFC"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#CBD5E1"; e.currentTarget.style.background = "none"; }}
          >
            Curriculum
          </button>
          <button
            onClick={() => onOpenDemo()}
            style={{
              background: "#0F1F3D", color: "#FFFFFF", border: "none",
              cursor: "pointer", fontSize: 13, fontWeight: 700,
              padding: "10px 20px", borderRadius: 10,
              boxShadow: "0 4px 12px rgba(15,31,61,0.2)",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E3A8A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0F1F3D"; }}
          >
            Book Enterprise Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
