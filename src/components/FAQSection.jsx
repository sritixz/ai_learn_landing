import React, { useState } from 'react';

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
    <section style={{ padding: "80px 0", background: "#FAFAFA", borderBottom: "1px solid #E2E8F0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div style={{ fontSize: 12, fontWeight: 800, color: "#2563EB", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>
          SECTION 10 - FAQ
        </div>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900, color: "#0F1F3D", letterSpacing: "-.02em", marginBottom: 40 }}>
          Questions enterprise buyers will ask
        </h2>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "#FFFFFF", border: "1px solid #E2E8F0",
                  borderRadius: 16, overflow: "hidden",
                  boxShadow: isOpen ? "0 4px 16px rgba(15,31,61,0.05)" : "none",
                  transition: "all 0.18s ease"
                }}
              >
                <div
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    padding: "20px 24px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isOpen ? "#F8FAFC" : "#FFFFFF"
                  }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0F1F3D", paddingRight: 16 }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: 20, fontWeight: 800, color: "#2563EB" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 24px 24px 24px", borderTop: "1px solid #F1F5F9" }}>
                    <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.65, paddingTop: 16 }}>
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
