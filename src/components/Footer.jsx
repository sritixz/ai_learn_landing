export default function Footer({ onOpenDemo, scrollToSection }) {
  return (
    <footer style={{ background: "#040D21", color: "#8B949E", padding: "64px 0 32px 0", borderTop: "1px solid #30363D" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36, marginBottom: 48 }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: "#161B22", border: "1px solid #30363D",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, color: "#388BFD", fontWeight: 900
              }}>
                AG
              </div>
              <span style={{ fontSize: 15, fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em" }}>
                AI GLOBAL ACADEMY
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#8B949E", lineHeight: 1.6, marginBottom: 12 }}>
              Enterprise Generative AI Upskilling for modern engineering and business teams.
            </p>
            <p style={{ fontSize: 12, color: "#388BFD", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
              "Practical AI skills for the workforce of now."
            </p>
          </div>

          {/* Programs Column */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 800, color: "#F0F6FC", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Programs
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0 }}>
              <li><a href="#programs" onClick={() => scrollToSection("programs")} style={{ color: "#8B949E", textDecoration: "none" }}>AI Essentials</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#8B949E", textDecoration: "none" }}>Functional Academies</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#8B949E", textDecoration: "none" }}>AI for Coding</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#8B949E", textDecoration: "none" }}>AI Agents</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#8B949E", textDecoration: "none" }}>AI Automation</a></li>
              <li><a href="#enterprise-delivery" onClick={() => scrollToSection("enterprise-delivery")} style={{ color: "#8B949E", textDecoration: "none" }}>Responsible AI</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 800, color: "#F0F6FC", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0 }}>
              <li><a href="#enterprise-delivery" onClick={() => scrollToSection("enterprise-delivery")} style={{ color: "#8B949E", textDecoration: "none" }}>About Us</a></li>
              <li><a href="#enterprise-delivery" onClick={() => scrollToSection("enterprise-delivery")} style={{ color: "#8B949E", textDecoration: "none" }}>Enterprise Training</a></li>
              <li><a href="#curriculum" onClick={() => scrollToSection("curriculum")} style={{ color: "#8B949E", textDecoration: "none" }}>Curriculum</a></li>
              <li><a href="#resources" onClick={() => scrollToSection("resources")} style={{ color: "#8B949E", textDecoration: "none" }}>Resources</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo(); }} style={{ color: "#8B949E", textDecoration: "none" }}>Contact Sales</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 800, color: "#F0F6FC", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 14, fontFamily: "ui-monospace, monospace" }}>
              Governance & Security
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, padding: 0 }}>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#8B949E", textDecoration: "none" }}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#8B949E", textDecoration: "none" }}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#8B949E", textDecoration: "none" }}>Enterprise AI Governance</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#8B949E", textDecoration: "none" }}>Security Whitepaper</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid #21262D", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 12, color: "#6E7681" }}>
          <div>
            © {new Date().getFullYear()} AI Global Academy. All rights reserved. Enterprise Generative AI Upskilling.
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <span>Privacy</span>
            <span>·</span>
            <span>Security</span>
            <span>·</span>
            <span>Governance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
