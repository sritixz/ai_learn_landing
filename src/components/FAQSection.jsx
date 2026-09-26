import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is this suitable for non-technical employees and business teams?",
      a: "Yes. The academy begins with foundational AI literacy and practical prompt frameworks, then splits into dedicated departmental tracks (Marketing, Sales, HR, Finance, Operations). Coding copilots and agent-building modules are reserved for engineering cohorts and technical power users."
    },
    {
      q: "Can different departments follow distinct curriculum pathways simultaneously?",
      a: "Yes. Engineering, marketing, sales, HR, finance, operations, product, and leadership cohorts run on parallel schedules with role-specific tool sandboxes, while sharing a unified enterprise governance and prompt engineering foundation."
    },
    {
      q: "Do employees need individual enterprise paid licenses to all tools?",
      a: "No. The training tracks are calibrated directly around your organization's approved tool stack (e.g. Claude Enterprise, Microsoft Copilot, OpenAI Team, internal LLM gateways). Demonstration sandboxes are provided by AI Global Academy during hands-on lab sessions."
    },
    {
      q: "Can curriculum exercises be tailored to our industry and proprietary datasets?",
      a: "Yes. We configure hands-on labs with sanitized versions of your company's actual documents, SOPs, codebases, or analytical workflows to maximize immediate relevance and adoption."
    },
    {
      q: "Do you teach autonomous AI agents and workflow orchestration?",
      a: "Yes. Advanced technical tracks cover autonomous agent architecture, memory management, tool calling (MCP, REST APIs), RAG vector retrieval, human-in-the-loop validation, and automation pipelines (n8n, Make, Power Automate)."
    },
    {
      q: "How is training ROI and skill adoption measured?",
      a: "We conduct baseline diagnostic skill assessments, track verified capstone deliverables in production, evaluate task time savings, and provide leadership with executive adoption dashboards."
    },
    {
      q: "What delivery formats are supported?",
      a: "Programs are available as live virtual cohorts, hybrid multi-week bootcamps, intensive on-site executive briefings, or comprehensive self-paced enterprise academies with live weekly office hours."
    },
    {
      q: "Can our company's security and AI governance policies be incorporated?",
      a: "Yes. We directly embed your internal data classification rules, zero-retention policies, and acceptable-use guidelines into every practical prompt exercise and lab."
    }
  ];

  return (
    <section style={{ padding: "110px 0", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: 44 }}>
          <div style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#FF8A00",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 12,
            fontFamily: "ui-monospace, SFMono-Regular, monospace"
          }}>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 3.8vw, 42px)",
            fontWeight: 850,
            color: "#0F172A",
            letterSpacing: "-.025em",
            lineHeight: 1.18,
            margin: 0
          }}>
            Questions enterprise buyers frequently ask.
          </h2>
        </div>

        {/* Accordion list */}
        <div style={{
          border: "1px solid #E2E8F0",
          borderRadius: 12,
          background: "#FFFFFF",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)"
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: i < faqs.length - 1 ? "1px solid #E2E8F0" : "none",
                  transition: "background 0.15s ease"
                }}
              >
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    padding: "20px 24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isOpen ? "rgba(255, 138, 0, 0.06)" : "transparent"
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.background = "#F8FAFC";
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <h3 style={{
                    fontSize: 15.5,
                    fontWeight: 750,
                    color: isOpen ? "#0F172A" : "#334155",
                    paddingRight: 16,
                    margin: 0,
                    letterSpacing: "-.01em"
                  }}>
                    {faq.q}
                  </h3>
                  <span style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: isOpen ? "#FF8A00" : "#94A3B8",
                    fontFamily: "ui-monospace, monospace",
                    width: 16,
                    textAlign: "center"
                  }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div style={{
                    padding: "0 24px 22px 24px",
                    background: "rgba(255, 138, 0, 0.03)",
                    borderTop: "1px dashed #E2E8F0"
                  }}>
                    <p style={{
                      fontSize: 14,
                      color: "#475569",
                      lineHeight: 1.65,
                      paddingTop: 16,
                      margin: 0
                    }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
