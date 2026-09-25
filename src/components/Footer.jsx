export default function Footer({ onOpenDemo, scrollToSection }) {
  return (
    <footer style={{ background: "#050B1A", color: "#94A3B8", padding: "64px 0 32px 0", borderTop: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 36, marginBottom: 48 }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "#0B1220",
                border: "1px solid #1E293B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "#2F81F7",
                fontWeight: 800,
                fontFamily: "ui-monospace, monospace"
              }}>
                AG
              </div>
              <span style={{ fontSize: 14.5, fontWeight: 800, color: "#F8FAFC", letterSpacing: "-.02em" }}>
                AI GLOBAL ACADEMY
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 12 }}>
              Enterprise Generative AI & Agentic Workforce Upskilling Platform.
            </p>
            <div style={{ fontSize: 11.5, color: "#2F81F7", fontWeight: 600, fontFamily: "ui-monospace, monospace" }}>
              INSTITUTIONAL WORKFORCE ENABLEMENT
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Pathways
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#94A3B8", textDecoration: "none" }}>Engineering & IT Track</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#94A3B8", textDecoration: "none" }}>Marketing & Growth Track</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#94A3B8", textDecoration: "none" }}>Sales & Client Solutions</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#94A3B8", textDecoration: "none" }}>Operations & PMO</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#94A3B8", textDecoration: "none" }}>Finance & Legal Modeling</a></li>
            </ul>
          </div>

          {/* Architecture Column */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Platform
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#curriculum" onClick={() => scrollToSection("curriculum")} style={{ color: "#94A3B8", textDecoration: "none" }}>10-Module Syllabus</a></li>
              <li><a href="#ai-tools" onClick={() => scrollToSection("ai-tools")} style={{ color: "#94A3B8", textDecoration: "none" }}>67+ Evaluated Tools</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#94A3B8", textDecoration: "none" }}>Agent Architecture</a></li>
              <li><a href="#enterprise" onClick={() => scrollToSection("enterprise")} style={{ color: "#94A3B8", textDecoration: "none" }}>Delivery Methodology</a></li>
              <li><a href="#resources" onClick={() => scrollToSection("resources")} style={{ color: "#94A3B8", textDecoration: "none" }}>ROI & Enterprise Packages</a></li>
            </ul>
          </div>

          {/* Governance Column */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Governance & Security
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Security & Privacy Inquiry"); }} style={{ color: "#94A3B8", textDecoration: "none" }}>Data Classification Standards</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("SOC2 Inquiry"); }} style={{ color: "#94A3B8", textDecoration: "none" }}>SOC2 & Zero-Retention Boundaries</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Consultation"); }} style={{ color: "#94A3B8", textDecoration: "none" }}>Custom Enterprise Playbooks</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Consultation"); }} style={{ color: "#94A3B8", textDecoration: "none" }}>Schedule Enterprise Demo</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid #1E293B",
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
