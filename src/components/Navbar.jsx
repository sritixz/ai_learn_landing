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
      background: "rgba(4, 13, 33, 0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid #30363D"
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
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #161B22 0%, #1F242C 100%)",
            border: "1px solid #30363D",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, color: "#388BFD", fontWeight: 900,
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)"
          }}>
            AG
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, color: "#F0F6FC", letterSpacing: "-.02em", lineHeight: 1.1 }}>
              AI GLOBAL ACADEMY
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#388BFD", letterSpacing: ".06em", textTransform: "uppercase" }}>
              Enterprise GenAI Upskilling
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600, color: "#8B949E",
                padding: "8px 12px", borderRadius: 6,
                transition: "all 0.15s ease",
                letterSpacing: ".01em"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(48, 54, 61, 0.4)"; e.currentTarget.style.color = "#F0F6FC"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#8B949E"; }}
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
              background: "rgba(22, 27, 34, 0.6)", border: "1px solid #30363D", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: "#F0F6FC",
              padding: "8px 16px", borderRadius: 8,
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#8B949E"; e.currentTarget.style.background = "#161B22"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#30363D"; e.currentTarget.style.background = "rgba(22, 27, 34, 0.6)"; }}
          >
            Curriculum
          </button>
          <button
            onClick={() => onOpenDemo()}
            style={{
              background: "#238636", color: "#FFFFFF", border: "1px solid rgba(240, 246, 252, 0.1)",
              cursor: "pointer", fontSize: 13, fontWeight: 700,
              padding: "8px 18px", borderRadius: 8,
              boxShadow: "0 2px 8px rgba(35, 134, 54, 0.3)",
              transition: "all 0.15s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2EA043"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#238636"; }}
          >
            Book Enterprise Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
