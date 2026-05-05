import React from 'react'


const NAV_CONTENT = {
  Features: {
    title: "What You Get with Eleviq",
    items: [
      { icon: "🗺️", h: "Personalised Roadmap",    b: "A 12-week curriculum built around your exact goals and current skill level." },
      { icon: "🤖", h: "30+ AI Tool Courses",      b: "ChatGPT, Midjourney, Claude, Jasper, Make.com and more — always up to date." },
      { icon: "📊", h: "Progress Tracking",         b: "Visual progress bars, streak counters, and milestone badges keep you on track." },
      { icon: "🏆", h: "Verified Certificates",     b: "Shareable certificates accepted by employers and freelance clients globally." },
      { icon: "💬", h: "Community Access",          b: "Join 800K+ learners in our private forum, weekly live sessions, and Slack group." },
      { icon: "⚡", h: "Bite-size Lessons",         b: "5–10 minute micro-lessons so you can learn during a coffee break or commute." },
    ],
  },
  Pricing: {
    title: "Simple, Transparent Pricing",
    items: [
      { icon: "📅", h: "Monthly Plan — $19/mo",    b: "Full roadmap, all 30+ courses, progress tracking and community. Cancel anytime." },
      { icon: "🔥", h: "Annual Plan — $9/mo",       b: "Save 53% vs monthly. Includes lifetime certificate, AI mentor and offline access." },
      { icon: "🎓", h: "7-Day Refund Guarantee",    b: "Not satisfied? Email us within 7 days for a full refund — no questions asked." },
      { icon: "🔒", h: "Secure Checkout",            b: "Payments processed by Stripe. We never store your card details." },
    ],
  },
  Resources: {
    title: "Free Learning Resources",
    items: [
      { icon: "📝", h: "AI Starter Guide",          b: "A free 10-page PDF covering the 5 AI tools every professional needs in 2025." },
      { icon: "🎥", h: "YouTube Channel",            b: "Weekly tutorials, tool deep-dives and AI news breakdowns — 100% free." },
      { icon: "📧", h: "Weekly Newsletter",          b: "The best AI tools, prompts and opportunities delivered every Tuesday." },
      { icon: "🗣️", h: "Community Forum",            b: "Post questions, share wins and get feedback from 800K+ active members." },
    ],
  },
  About: {
    title: "About Eleviq",
    items: [
      { icon: "🌍", h: "Our Mission",               b: "Make world-class AI education accessible to everyone — no coding background needed." },
      { icon: "👥", h: "800K+ Learners",             b: "Professionals, entrepreneurs and career-switchers from 120+ countries." },
      { icon: "📅", h: "Founded 2022",              b: "Born from one question: how do you learn AI without a course you'll never finish?" },
      { icon: "📬", h: "Contact Us",                 b: "Questions? Reach us at support@eleviq.io — we reply within 24 hours." },
    ],
  },
};


function InfoModal({ topic, onClose }) {
  const data = NAV_CONTENT[topic];
  if (!data) return null;
  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(15,31,61,.35)", backdropFilter: "blur(4px)",
        animation: "fadeIn .2s ease both",
      }}/>
      {/* Panel */}
      <div style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 201, width: "calc(100% - 32px)", maxWidth: 560,
        background: "#fff", borderRadius: 20,
        border: "1px solid #E2E8F0",
        boxShadow: "0 24px 80px rgba(15,31,61,.18)",
        animation: "slideUp .3s cubic-bezier(.22,1,.36,1) both",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          padding: "22px 28px 18px",
          borderBottom: "1px solid #F1F5F9",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0F1F3D" }}>{data.title}</h3>
          <button onClick={onClose} style={{
            background: "#F1F5F9", border: "none", borderRadius: "50%",
            width: 32, height: 32, cursor: "pointer", fontSize: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#64748B", fontWeight: 700, transition: "background .15s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#E2E8F0"}
            onMouseLeave={e => e.currentTarget.style.background = "#F1F5F9"}
          >✕</button>
        </div>
        {/* Items */}
        <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
          {data.items.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: "#F8FAFC",
                border: "1px solid #E2E8F0", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 20, flexShrink: 0,
              }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0F1F3D", marginBottom: 3 }}>{item.h}</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>{item.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


export default InfoModal
