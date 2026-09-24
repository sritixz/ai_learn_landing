import React from 'react';

export default function Footer({ onOpenDemo, scrollToSection }) {
  return (
    <footer style={{ background: "#0B1528", color: "#94A3B8", padding: "64px 0 32px 0", borderTop: "1px solid #1E293B" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 36, marginBottom: 48 }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: "#2563EB",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, color: "#fff", fontWeight: 900
              }}>
                AG
              </div>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-.02em" }}>
                AI GLOBAL ACADEMY
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 16 }}>
              Enterprise Generative AI Upskilling for modern workforces.
            </p>
            <p style={{ fontSize: 13, color: "#60A5FA", fontWeight: 700 }}>
              "Practical AI skills for the workforce of now."
            </p>
          </div>

          {/* Programs Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 16 }}>
              Programs
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <li><a href="#programs" onClick={() => scrollToSection("programs")} style={{ color: "#94A3B8", textDecoration: "none" }}>AI Essentials</a></li>
              <li><a href="#role-tracks" onClick={() => scrollToSection("role-tracks")} style={{ color: "#94A3B8", textDecoration: "none" }}>Functional Academies</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#94A3B8", textDecoration: "none" }}>AI for Coding</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#94A3B8", textDecoration: "none" }}>AI Agents</a></li>
              <li><a href="#agents-automation" onClick={() => scrollToSection("agents-automation")} style={{ color: "#94A3B8", textDecoration: "none" }}>AI Automation</a></li>
              <li><a href="#enterprise-delivery" onClick={() => scrollToSection("enterprise-delivery")} style={{ color: "#94A3B8", textDecoration: "none" }}>Responsible AI</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 16 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <li><a href="#enterprise-delivery" onClick={() => scrollToSection("enterprise-delivery")} style={{ color: "#94A3B8", textDecoration: "none" }}>About Us</a></li>
              <li><a href="#enterprise-delivery" onClick={() => scrollToSection("enterprise-delivery")} style={{ color: "#94A3B8", textDecoration: "none" }}>Enterprise Training</a></li>
              <li><a href="#curriculum" onClick={() => scrollToSection("curriculum")} style={{ color: "#94A3B8", textDecoration: "none" }}>Curriculum</a></li>
              <li><a href="#resources" onClick={() => scrollToSection("resources")} style={{ color: "#94A3B8", textDecoration: "none" }}>Resources</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemo(); }} style={{ color: "#94A3B8", textDecoration: "none" }}>Contact Sales</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 16 }}>
              Legal & Policy
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#94A3B8", textDecoration: "none" }}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#94A3B8", textDecoration: "none" }}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#94A3B8", textDecoration: "none" }}>Responsible AI Governance</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#94A3B8", textDecoration: "none" }}>Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid #1E293B", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontSize: 12 }}>
          <div>
            © {new Date().getFullYear()} AI Global Academy. All rights reserved. Enterprise Generative AI Upskilling.
          </div>
          <div style={{ display: "flex", gap: 16 }}>
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
