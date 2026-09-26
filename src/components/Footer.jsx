export default function Footer({ onOpenDemo, scrollToSection }) {
  return (
    <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "64px 0 32px 0", borderTop: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 36, marginBottom: 48 }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                background: "#050B1A",
                border: "1px solid #334155",
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
              <span style={{ fontSize: 15, fontWeight: 850, color: "#FFFFFF", letterSpacing: "-.02em" }}>
                AI GLOBAL ACADEMY
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.6, marginBottom: 12 }}>
              Enterprise Generative AI & Agentic Workforce Upskilling Platform.
            </p>
            <div style={{ fontSize: 11.5, color: "#FF8A00", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
              INSTITUTIONAL WORKFORCE ENABLEMENT
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 style={{ fontSize: 11.5, fontWeight: 750, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Pathways
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Engineering & IT Track</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Marketing & Growth Track</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Sales & Client Solutions</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Operations & PMO</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Finance & Legal Modeling</a></li>
            </ul>
          </div>

          {/* Architecture Column */}
          <div>
            <h4 style={{ fontSize: 11.5, fontWeight: 750, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Platform
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#curriculum" onClick={() => scrollToSection("curriculum")} style={{ color: "#CBD5E1", textDecoration: "none" }}>10-Module Syllabus</a></li>
              <li><a href="#ai-tools" onClick={() => scrollToSection("ai-tools")} style={{ color: "#CBD5E1", textDecoration: "none" }}>67+ Evaluated Tools</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Agent Architecture</a></li>
              <li><a href="#enterprise" onClick={() => scrollToSection("enterprise")} style={{ color: "#CBD5E1", textDecoration: "none" }}>Delivery Methodology</a></li>
              <li><a href="#resources" onClick={() => scrollToSection("resources")} style={{ color: "#CBD5E1", textDecoration: "none" }}>ROI & Enterprise Packages</a></li>
            </ul>
          </div>

          {/* Governance Column */}
          <div>
            <h4 style={{ fontSize: 11.5, fontWeight: 750, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Governance & Security
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0, margin: 0 }}>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Security & Privacy Inquiry"); }} style={{ color: "#CBD5E1", textDecoration: "none" }}>Data Classification Standards</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("SOC2 Inquiry"); }} style={{ color: "#CBD5E1", textDecoration: "none" }}>SOC2 & Zero-Retention Boundaries</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Consultation"); }} style={{ color: "#CBD5E1", textDecoration: "none" }}>Custom Enterprise Playbooks</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo("Consultation"); }} style={{ color: "#CBD5E1", textDecoration: "none" }}>Schedule Enterprise Demo</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid #334155",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: "#94A3B8"
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
