import React from 'react'
import InfoModal from './InfoModal';
function Navbar({ onCta, onNavClick, activeModal }) {
  const NAV_LINKS = ["Features", "Pricing", "Resources", "About"];
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(250,250,250,.94)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid #E2E8F0",
      }}>
        <div style={{
          width: "100%", padding: "0 28px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
            onClick={() => onNavClick(null)}>
            <div style={{
              width: 34, height: 34, borderRadius: 8, background: "#0F1F3D",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, color: "#fff", fontWeight: 900,
            }}>E</div>
            <span style={{ fontWeight: 800, fontSize: 16, color: "#0F1F3D", letterSpacing: "-.01em" }}>
              Eleviq
            </span>
          </div>

          {/* Nav links — each opens its own info modal */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map(l => {
              const isActive = activeModal === l;
              return (
                <button key={l} onClick={() => onNavClick(isActive ? null : l)} style={{
                  background: isActive ? "#F1F5F9" : "none",
                  border: "none", cursor: "pointer",
                  fontSize: 13, fontWeight: 600,
                  color: isActive ? "#0F1F3D" : "#475569",
                  padding: "7px 14px", borderRadius: 8,
                  transition: "background .15s, color .15s",
                  display: "flex", alignItems: "center", gap: 4,
                  letterSpacing: ".01em",
                }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.color = "#0F1F3D"; }}}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#475569"; }}}
                >
                  {l}
                  <span style={{
                    fontSize: 9, display: "inline-block",
                    transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform .2s",
                    color: "#94A3B8",
                  }}>▼</span>
                </button>
              );
            })}
          </div>

          {/* CTA cluster */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: "#475569",
              padding: "7px 12px", borderRadius: 8,
              transition: "color .15s, background .15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#0F1F3D"; e.currentTarget.style.background = "#F1F5F9"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.background = "none"; }}
            >Sign In</button>
            <button className="cta-btn" onClick={onCta}
              style={{ padding: "9px 20px", fontSize: 13, borderRadius: 10 }}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Info modal rendered inside Navbar so it shares the same state */}
      {activeModal && (
        <InfoModal topic={activeModal} onClose={() => onNavClick(null)} />
      )}
    </>
  );
}

export default Navbar
