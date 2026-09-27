import { useNavigate } from 'react-router-dom';

export default function Footer({ onOpenDemo }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ background: "#F8FAFC", color: "#64748B", padding: "64px 0 32px 0", borderTop: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 36, marginBottom: 48 }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "#0F172A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "#FF8A00",
                fontWeight: 800,
                fontFamily: "ui-monospace, monospace"
              }}>
                AG
              </div>
              <span style={{ fontSize: 15, fontWeight: 850, color: "#0F172A", letterSpacing: "-.02em" }}>
                AI GLOBAL ACADEMY
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, marginBottom: 12 }}>
              Enterprise Generative AI & Agentic Workforce Upskilling Platform.
            </p>
            <div style={{ fontSize: 11.5, color: "#FF8A00", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
              INSTITUTIONAL WORKFORCE ENABLEMENT
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 style={{ fontSize: 11.5, fontWeight: 750, color: "#0F172A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Pages & Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><button onClick={() => handleLinkClick("/")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>Home Page</button></li>
              <li><button onClick={() => handleLinkClick("/curriculum")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>Full 10-Module Syllabus</button></li>
              <li><button onClick={() => handleLinkClick("/tools")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>Evaluated Tools & Agentic Stack</button></li>
              <li><button onClick={() => handleLinkClick("/enterprise")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>Enterprise Delivery & Governance</button></li>
              <li><button onClick={() => handleLinkClick("/faq")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>FAQ & Knowledge Base</button></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 style={{ fontSize: 11.5, fontWeight: 750, color: "#0F172A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Dedicated Pages
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><button onClick={() => handleLinkClick("/curriculum")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>10-Module Syllabus</button></li>
              <li><button onClick={() => handleLinkClick("/tools")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>67+ Evaluated Tools</button></li>
              <li><button onClick={() => handleLinkClick("/tools")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>Agent Architecture</button></li>
              <li><button onClick={() => handleLinkClick("/enterprise")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>Delivery Methodology</button></li>
              <li><button onClick={() => handleLinkClick("/")} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 0, fontSize: 13 }}>ROI & Enterprise Packages</button></li>
            </ul>
          </div>

          {/* Governance Column */}
          <div>
            <h4 style={{ fontSize: 11.5, fontWeight: 750, color: "#0F172A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Governance & Security
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Security & Privacy Inquiry"); }} style={{ color: "#475569", textDecoration: "none" }}>Data Classification Standards</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("SOC2 Inquiry"); }} style={{ color: "#475569", textDecoration: "none" }}>SOC2 & Zero-Retention Boundaries</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Consultation"); }} style={{ color: "#475569", textDecoration: "none" }}>Custom Enterprise Playbooks</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Consultation"); }} style={{ color: "#475569", textDecoration: "none" }}>Schedule Enterprise Demo</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid #E2E8F0",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: "#64748B"
        }}>
          <div>
            © {new Date().getFullYear()} AI Global Academy. Enterprise GenAI Workforce Enablement.
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <span>Privacy Standard</span>
            <span>·</span>
            <span>Zero-Retention Architecture</span>
            <span>·</span>
            <span>Governance Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
