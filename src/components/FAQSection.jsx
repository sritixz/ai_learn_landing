import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Is this suitable for non-technical employees?",
      a: "Yes. The academy starts with practical AI literacy and splits into role-specific pathways. Coding and agent-building modules can be reserved for technical teams and advanced users."
    },
    {
      q: "Can you train different departments differently?",
      a: "Yes. Marketing, sales, HR, finance, operations, product, data, design, engineering and leadership can follow separate use-case labs while sharing common responsible-AI foundations."
    },
    {
      q: "Do employees need paid subscriptions to every tool?",
      a: "No. The curriculum can be designed around your approved stack. Some demonstrations can use instructor environments or free tiers; production use should follow the organization's licensing and security policy."
    },
    {
      q: "Can you customize training to our industry?",
      a: "Yes. Exercises, use cases, prompts and capstones can be adapted to your industry, processes, terminology, tools and governance requirements."
    },
    {
      q: "Do you cover AI agents and automation?",
      a: "Yes. Advanced tracks cover workflow automation, APIs, tool calling, RAG, agent design, human approval flows, evaluation and deployment patterns."
    },
    {
      q: "How do you measure success?",
      a: "Use pre/post skill assessments, practical task performance, workflow time savings, adoption metrics, capstone completion and manager feedback."
    },
    {
      q: "Can this be delivered online and in person?",
      a: "Yes. The program can be delivered virtually, in person or as a blended enterprise academy with workshops, labs, office hours and projects."
    },
    {
      q: "Can our internal AI policy be included?",
      a: "Yes. Responsible-use content can be aligned with your approved tools, security controls, privacy policy and AI governance standards."
    }
  ];

  return (
    <section style={{ padding: "100px 0", background: "#040D21", borderBottom: "1px solid #30363D" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "#388BFD", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12, fontFamily: "ui-monospace, monospace" }}>
          FREQUENTLY ASKED QUESTIONS
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 900, color: "#F0F6FC", letterSpacing: "-.02em", marginBottom: 44 }}>
          Questions enterprise buyers frequently ask
        </h2>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "#0D1117", border: "1px solid",
                  borderColor: isOpen ? "#388BFD" : "#30363D",
                  borderRadius: 12, overflow: "hidden",
                  transition: "all 0.15s ease"
                }}
              >
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    padding: "20px 28px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isOpen ? "rgba(56, 139, 253, 0.08)" : "#0D1117"
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#F0F6FC", paddingRight: 16, margin: 0 }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#388BFD", fontFamily: "ui-monospace, monospace" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 28px 22px 28px", borderTop: "1px solid #21262D" }}>
                    <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.65, paddingTop: 16, margin: 0 }}>
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
