import { useState } from 'react';

export default function HeroSection({ onOpenDemo, scrollToSection }) {
  const [activeRole, setActiveRole] = useState("Engineering");

  const roleMap = {
    Engineering: {
      title: "Software & Engineering",
      tool: "GitHub Copilot, Cursor & Claude Code",
      output: "26% faster feature delivery, automated test suites & code reviews",
      badge: "Technical Track"
    },
    Marketing: {
      title: "Marketing & Content",
      tool: "Jasper, Claude & Midjourney",
      output: "Multi-channel campaign packs, SEO research & automated content repurposing",
      badge: "Growth Track"
    },
    Sales: {
      title: "Sales & RevOps",
      tool: "ChatGPT, Gong AI & CRM Copilots",
      output: "Automated account research briefs, hyper-personalized outreach & CRM updates",
      badge: "Revenue Track"
    },
    Finance: {
      title: "Finance & Operations",
      tool: "Excel Copilot, Julius AI & n8n",
      output: "Automated variance narratives, scenario modeling & invoice processing",
      badge: "Operations Track"
    }
  };

  const pillars = [
    {
      title: "Role-Based Pathways",
      desc: "Distinct learning tracks tailored specifically for leadership, engineering, marketing, sales, finance, HR, product, and operations."
    },
    {
      title: "Hands-On Execution",
      desc: "No passive lectures. Learners build real workflows, custom prompts, and automated assistants directly in live tool labs."
    },
    {
      title: "Multi-Tool Stack",
      desc: "Master 50+ industry-standard AI tools. Employees learn tool judgment rather than becoming reliant on a single vendor."
    },
    {
      title: "Measurable ROI",
      desc: "Focus on reusable team assets, automated manual processes, and manager-tracked adoption metrics tied directly to business KPIs."
    }
  ];

  return (
    <section style={{ paddingTop: 120, paddingBottom: 96, background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Subtle Eyebrow Badge */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{
            background: "#EFF6FF", border: "1px solid #DBEAFE",
            color: "#1D4ED8", fontSize: 13, fontWeight: 700,
            padding: "6px 18px", borderRadius: 999, letterSpacing: ".02em",
            display: "inline-flex", alignItems: "center", gap: 8
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB" }} />
            Enterprise Generative AI Upskilling
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: "clamp(44px, 5.5vw, 64px)", fontWeight: 900,
          color: "#0F172A", textAlign: "center", lineHeight: 1.1,
          letterSpacing: "-.03em", maxWidth: 920, margin: "0 auto 20px"
        }}>
          Build an AI-Ready Workforce.
        </h1>

        {/* Subhead Line */}
        <p style={{
          fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 700,
          textAlign: "center", maxWidth: 840, margin: "0 auto 28px",
          color: "#2563EB", lineHeight: 1.35
        }}>
          Turn Generative AI into measurable, everyday productivity across every business function.
        </p>

        {/* Main Body Paragraph */}
        <p style={{
          fontSize: 18, color: "#475569", textAlign: "center",
          maxWidth: 780, margin: "0 auto 44px", lineHeight: 1.7, fontWeight: 400
        }}>
          Enterprise GenAI upskilling for modern teams — from AI fundamentals and prompt engineering to marketing, coding, data, research, AI agents, and workflow automation. Learn by building real use cases with 50+ of today's most useful AI tools.
        </p>

        {/* Primary CTAs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 72, flexWrap: "wrap" }}>
          <button
            onClick={() => onOpenDemo()}
            style={{
              background: "#0F172A", color: "#FFFFFF", border: "none",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 10px 25px -5px rgba(15,23,42,0.25)",
              transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E293B"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0F172A"; e.currentTarget.style.transform = "none"; }}
          >
            Request Enterprise Demo
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            style={{
              background: "#FFFFFF", color: "#0F172A", border: "1.5px solid #CBD5E1",
              padding: "16px 36px", borderRadius: 12, fontWeight: 700,
              fontSize: 16, cursor: "pointer", boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
              transition: "all 0.18s ease"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0F172A"; e.currentTarget.style.background = "#F8FAFC"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#CBD5E1"; e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.transform = "none"; }}
          >
            Explore Curriculum ↓
          </button>
        </div>

        {/* Interactive Capability Map Widget */}
        <div style={{
          background: "#FFFFFF", border: "1px solid #E2E8F0",
          borderRadius: 20, padding: "36px", boxShadow: "0 10px 30px -10px rgba(15,23,42,0.06)",
          marginBottom: 72
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, borderBottom: "1px solid #F1F5F9", paddingBottom: 20 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".06em" }}>
                INTERACTIVE CAPABILITY MAP
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", marginTop: 4 }}>
                Role-Based Pathways & Outcome Drivers
              </h3>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#64748B", background: "#F1F5F9", padding: "6px 14px", borderRadius: 999 }}>
              Select a team track below
            </span>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
            {Object.keys(roleMap).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                style={{
                  padding: "10px 20px", borderRadius: 10, border: "1.5px solid",
                  borderColor: activeRole === role ? "#0F172A" : "#E2E8F0",
                  background: activeRole === role ? "#0F172A" : "#F8FAFC",
                  color: activeRole === role ? "#FFFFFF" : "#475569",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                  transition: "all 0.18s ease"
                }}
              >
                {role}
              </button>
            ))}
          </div>

          <div style={{
            background: "#F8FAFC", border: "1px solid #E2E8F0",
            borderRadius: 14, padding: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Department Track</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "#0F172A", marginTop: 6 }}>{roleMap[activeRole].title}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Approved Tool Stack</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#2563EB", marginTop: 6 }}>{roleMap[activeRole].tool}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase" }}>Target Business Outcome</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#16A34A", marginTop: 6 }}>✓ {roleMap[activeRole].output}</div>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF", border: "1px solid #E2E8F0",
                borderRadius: 16, padding: "32px 28px",
                boxShadow: "0 4px 16px rgba(15,23,42,0.03)"
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: "#EFF6FF",
                color: "#2563EB", fontWeight: 800, fontSize: 14,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
              }}>
                0{i + 1}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 10, letterSpacing: "-.01em" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
