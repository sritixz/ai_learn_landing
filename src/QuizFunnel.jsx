import { useState, useEffect, useCallback, useRef } from "react";
import InfoModal from "./components/InfoModal";
import Navbar from "./components/Navbar";
import TouchOfGenius from "./components/TouchofGenius";
import AvatarRow from "./components/AvatarRow";
/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS  (VaniAgent-inspired white / enterprise SaaS)
   ─────────────────────────────────────────────────────────
   Background   : #FAFAFA  (near-white page)
   Surface      : #FFFFFF  (card white)
   Navy primary : #0F1F3D  (headline + CTA bg – VaniAgent dark)
   Teal accent  : #0D9488  (check marks, highlights, progress)
   Border       : #E2E8F0  (slate-200 equivalent)
   Text main    : #0F1F3D
   Text muted   : #64748B  (slate-500)
   Text xmuted  : #94A3B8  (slate-400)
═══════════════════════════════════════════════════════════ */

const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    *, *::before, *::after {  margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: #FAFAFA;
      font-family: 'Inter', sans-serif;
      color: #0F1F3D;
      -webkit-font-smoothing: antialiased;
    }

    /* ── keyframes ─────────────────────────────── */
    @keyframes fadeIn  { from{opacity:0}               to{opacity:1} }
    @keyframes slideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
    @keyframes slideIn { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
    @keyframes pop     { 0%{transform:scale(.93)} 60%{transform:scale(1.03)} 100%{transform:scale(1)} }
    @keyframes spin    { to{transform:rotate(360deg)} }
    @keyframes scan    { 0%{top:5%} 50%{top:92%} 100%{top:5%} }
    @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.35} }
    @keyframes checkIn { 0%{transform:scale(0)rotate(-15deg)} 70%{transform:scale(1.18)rotate(4deg)} 100%{transform:scale(1)rotate(0)} }
    @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
    @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes avatarFloat {
      0%,100% { transform: translateY(0px) rotate(-1deg); }
      33%     { transform: translateY(-7px) rotate(1deg); }
      66%     { transform: translateY(-3px) rotate(0deg); }
    }
    @keyframes avatarPulse {
      0%   { transform:scale(1);   opacity:.8; }
      100% { transform:scale(1.9); opacity:0; }
    }
    @keyframes floatUp {
      0%   { transform:translateY(0) scale(1);   opacity:1; }
      100% { transform:translateY(-80px) scale(.5); opacity:0; }
    }
    @keyframes btnRipple {
      0%   { transform:scale(1);   opacity:.7; }
      100% { transform:scale(1.5); opacity:0; }
    }
    @keyframes arcFlicker {
      0%,100% { stroke-dashoffset:0; }
      50%     { stroke-dashoffset:-8; }
    }
    @keyframes sparkBurst {
      0%   { transform:scale(0) rotate(0deg);   opacity:1; }
      60%  { transform:scale(1.4) rotate(180deg); opacity:.8; }
      100% { transform:scale(2) rotate(360deg); opacity:0; }
    }
    @keyframes handGlow {
      0%,100% { filter:drop-shadow(0 0 4px rgba(8,145,178,.4)); }
      50%     { filter:drop-shadow(0 0 14px rgba(8,145,178,.9)) drop-shadow(0 0 28px rgba(6,182,212,.4)); }
    }
    @keyframes tipPing {
      0%,100% { r:4; opacity:.9; }
      50%     { r:10; opacity:.2; }
    }
    @keyframes matrixFade {
      0%   { opacity:0; }
      30%  { opacity:1; }
      100% { opacity:0; }
    }

    /* ── animation helpers ──────────────────────── */
    .a-fadeIn  { animation: fadeIn  .4s ease both }
    .a-slideUp { animation: slideUp .48s cubic-bezier(.22,1,.36,1) both }
    .a-slideIn { animation: slideIn .4s  cubic-bezier(.22,1,.36,1) both }
    .a-pop     { animation: pop     .3s  cubic-bezier(.22,1,.36,1) both }
    .a-checkIn { animation: checkIn .4s  cubic-bezier(.22,1,.36,1) both }

    /* ── white card surface ─────────────────────── */
    .card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(15,31,61,.06), 0 4px 16px rgba(15,31,61,.04);
    }
    .card-lg {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 20px;
      box-shadow: 0 2px 8px rgba(15,31,61,.06), 0 12px 40px rgba(15,31,61,.06);
    }

    /* ── option tile ────────────────────────────── */
    .opt-tile {
      cursor: pointer;
      border: 1.5px solid #E2E8F0;
      background: #FFFFFF;
      border-radius: 14px;
      padding: 18px 20px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
      text-align: left;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #0F1F3D;
      transition: border-color .18s, box-shadow .18s, transform .18s, background .18s;
      width: 100%;
      box-shadow: 0 1px 3px rgba(15,31,61,.05);
    }
    .opt-tile:hover:not(:disabled) {
      border-color: #0D9488;
      box-shadow: 0 0 0 3px rgba(13,148,136,.1);
      transform: translateY(-2px);
    }
    .opt-tile.selected {
      border-color: #0F1F3D;
      background: #F0FDF9;
      box-shadow: 0 0 0 3px rgba(13,148,136,.15);
    }
    .opt-tile:disabled { cursor: default; }

    /* ── primary CTA button (dark navy) ─────────── */
    .cta-btn {
      background: #0F1F3D;
      color: #FFFFFF;
      border: none;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 15px 32px;
      cursor: pointer;
      transition: background .18s, transform .15s, box-shadow .18s;
      box-shadow: 0 4px 14px rgba(15,31,61,.25);
      letter-spacing: .01em;
    }
    .cta-btn:hover  { background:#162B52; transform:translateY(-1px); box-shadow:0 6px 20px rgba(15,31,61,.3); }
    .cta-btn:active { transform:translateY(1px); box-shadow:0 2px 8px rgba(15,31,61,.2); }
    .cta-btn:disabled { opacity:.4; cursor:default; transform:none; }

    /* ── secondary / outline button ─────────────── */
    .sec-btn {
      background: #FFFFFF;
      color: #0F1F3D;
      border: 1.5px solid #CBD5E1;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 15px;
      padding: 14px 32px;
      cursor: pointer;
      transition: border-color .18s, background .18s, box-shadow .18s;
    }
    .sec-btn:hover { border-color:#0F1F3D; background:#F8FAFC; box-shadow:0 2px 8px rgba(15,31,61,.08); }

    /* ── teal accent button (annual plan) ───────── */
    .teal-btn {
      background: #0F1F3D;
      color: #FFFFFF;
      border: none;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 15px;
      padding: 15px 32px;
      cursor: pointer;
      transition: background .18s, transform .15s, box-shadow .18s;
      box-shadow: 0 4px 16px rgba(15,31,61,.28);
    }
    .teal-btn:hover  { background:#162B52; transform:translateY(-1px); }
    .teal-btn:active { transform:translateY(1px); }

    /* ── progress track ──────────────────────────── */
    .prog-track {
      height: 5px;
      background: #E2E8F0;
      border-radius: 999px;
      overflow: hidden;
    }
    .prog-fill {
      height: 100%;
      background: #0F1F3D;
      border-radius: 999px;
      transition: width .5s cubic-bezier(.22,1,.36,1);
    }

    /* ── badge pill ──────────────────────────────── */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      background: #F0FDF9;
      border: 1px solid #99F6E4;
      border-radius: 999px;
      padding: 6px 16px;
      font-size: 12px;
      font-weight: 600;
      color: #0F766E;
      letter-spacing: .02em;
    }

    /* ── skeleton shimmer ──────────────────────── */
    .skel {
      background: linear-gradient(90deg,#F1F5F9 25%,#E2E8F0 50%,#F1F5F9 75%);
      background-size: 400px 100%;
      animation: shimmer 1.5s infinite linear;
      border-radius: 8px;
    }

    /* ── subtle dot-grid page texture ─────────── */
    .dot-bg {
      background-color: #FAFAFA;
      background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* ── divider line ──────────────────────────── */
    .divider { height:1px; background:#E2E8F0; width:100%; }

    ::-webkit-scrollbar { width:4px }
    ::-webkit-scrollbar-thumb { background:#CBD5E1; border-radius:4px }
  `}</style>
);

/* ═══════════════════════════════════════════════════════════
   DATA  (unchanged)
═══════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    q: "What's your main goal right now?",
    sub: "We'll personalise your learning path based on this.",
    opts: [
      { e: "💼", label: "Get a better job or promotion" },
      { e: "🚀", label: "Build a business or side project" },
      { e: "🧠", label: "Learn AI out of curiosity" },
      { e: "📈", label: "Stay ahead in my industry" },
    ],
  },
  {
    q: "What's your current experience with AI?",
    sub: "Be honest — we adapt the curriculum to your level.",
    opts: [
      { e: "🐣", label: "Complete beginner — just heard of it" },
      { e: "🌱", label: "I've tried ChatGPT a few times" },
      { e: "⚡", label: "I use AI tools regularly" },
      { e: "🔥", label: "I build with AI professionally" },
    ],
  },
  {
    q: "How much time can you commit per day?",
    sub: "Even 5 minutes a day produces real results.",
    opts: [
      { e: "☕", label: "5–10 minutes" },
      { e: "📱", label: "15–30 minutes" },
      { e: "💪", label: "30–60 minutes" },
      { e: "🎯", label: "1+ hours — I'm serious" },
    ],
  },
  {
    q: "Which area do you want to master?",
    sub: "You can always explore others later.",
    opts: [
      { e: "✍️", label: "AI Writing & Content Creation" },
      { e: "🎨", label: "AI Image & Design Tools" },
      { e: "🤖", label: "ChatGPT & Prompt Engineering" },
      { e: "📊", label: "AI for Business & Productivity" },
    ],
  },
  {
    q: "When do you want to see real results?",
    sub: "We'll calibrate the pace and intensity for you.",
    opts: [
      { e: "⚡", label: "ASAP — I'm in a hurry" },
      { e: "📅", label: "Within the next 30 days" },
      { e: "🗓️", label: "Over the next 3 months" },
      { e: "🌊", label: "No rush — steady progress" },
    ],
  },
];

const SCAN_STEPS = [
  "Analysing your learning style…",
  "Identifying skill gaps…",
  "Mapping career opportunities…",
  "Selecting your ideal courses…",
  "Building your personalised roadmap…",
];

const PHASES = ["landing", "quiz", "analyzing", "paywall"];

/* ═══════════════════════════════════════════════════════════
   INFO MODAL  — shown when nav links are clicked
═══════════════════════════════════════════════════════════ */
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


/* ═══════════════════════════════════════════════════════════
   NAVBAR  (VaniAgent-style top bar — fully wired)
═══════════════════════════════════════════════════════════ */




/* ── 2. ANIMATED AVATAR ROW (above CTA) ── */

/* ── 3. MAGICAL CTA BUTTON with canvas particle pull + matrix overlay ── */
function HeroCTAButton({ onClick }) {
  const canvasRef   = useRef(null);
  const [hovered,   setHovered]   = useState(false);
  const [ripples,   setRipples]   = useState([]);
  const [floaters,  setFloaters]  = useState([]);
  const particles   = useRef([]);
  const rafId       = useRef(null);
  const btnRef      = useRef(null);

  // Spawn data particles from avatar positions that pull toward button center
  const spawnPull = useCallback(() => {
    if (!canvasRef.current || !btnRef.current) return;
    const canvas = canvasRef.current;
    const rect   = canvas.getBoundingClientRect();
    const bRect  = btnRef.current.getBoundingClientRect();
    const bx     = bRect.left + bRect.width  / 2 - rect.left;
    const by     = bRect.top  + bRect.height / 2 - rect.top;

    // Spawn from avatar region (above button)
    for (let i = 0; i < 35; i++) {
      const sx = rect.width  * (0.15 + Math.random() * 0.7);
      const sy = rect.height * (0.05 + Math.random() * 0.35);
      const dx = bx - sx, dy = by - sy;
      const dist = Math.hypot(dx, dy);
      particles.current.push({
        x: sx, y: sy,
        tx: bx, ty: by,
        vx: (dx / dist) * (1.5 + Math.random() * 1.5),
        vy: (dy / dist) * (1.5 + Math.random() * 1.5),
        life: 1, decay: 0.008 + Math.random() * 0.01,
        size: 2 + Math.random() * 3,
        color: Math.random() > 0.5 ? "#0891B2" : "#0D9488",
        icon: ["·","◦","∘","•","⬡","◉"][Math.floor(Math.random() * 6)],
        pull: true,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Matrix grid overlay when hovered
      if (hovered) {
        ctx.strokeStyle = "rgba(8,145,178,.08)";
        ctx.lineWidth   = 1;
        const step = 28;
        for (let x = 0; x < canvas.width; x += step) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += step) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }
        // Falling matrix chars
        ctx.fillStyle = "rgba(13,148,136,.18)";
        ctx.font      = "10px monospace";
        const chars = "01アイウAI▲◉⬡";
        for (let col = 0; col < canvas.width; col += 22) {
          const char = chars[Math.floor(Date.now() / 200 + col) % chars.length];
          const row  = (Math.floor(Date.now() / 80  + col * 3) % canvas.height);
          ctx.fillText(char, col, row);
        }
      }

      // Update particles
      particles.current = particles.current.filter(p => p.life > 0);
      for (const p of particles.current) {
        if (p.pull) {
          p.x += p.vx; p.y += p.vy; p.vx *= 1.04; p.vy *= 1.04;
        } else {
          p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.vx *= 0.98;
        }
        p.life -= p.decay;
        ctx.globalAlpha = p.life;
        ctx.fillStyle   = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 6;
        ctx.font        = `${p.size * 3}px sans-serif`;
        ctx.fillText(p.icon, p.x, p.y);
        ctx.shadowBlur  = 0;
        ctx.globalAlpha = 1;
      }

      rafId.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(rafId.current); window.removeEventListener("resize", resize); };
  }, [hovered]);

  const handleEnter = () => {
    setHovered(true);
    spawnPull();
    // Float icons upward from button
    const icons = ["💡","📈","🤖","⚡","🎯","🧠"];
    setFloaters(icons.map((icon, i) => ({ icon, id: Date.now() + i, delay: i * 80 })));
    // Ripple
    setRipples([{ id: Date.now() }]);
    setTimeout(() => setRipples([{ id: Date.now() + 1 }]), 500);
  };
  const handleLeave = () => {
    setHovered(false);
    setFloaters([]);
    particles.current = [];
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Canvas covering the button zone */}
      <canvas ref={canvasRef} style={{
        position: "absolute", top: -180, left: -300, right: -300,
        width: "calc(100% + 600px)", height: "calc(100% + 200px)",
        pointerEvents: "none", zIndex: 5,
      }}/>

      {/* Floating icon burst */}
      {floaters.map(f => (
        <div key={f.id} style={{
          position: "absolute", left: "50%", top: -10,
          transform: "translateX(-50%)",
          fontSize: 18, animation: "floatUp .9s ease-out forwards",
          animationDelay: `${f.delay}ms`,
          pointerEvents: "none", zIndex: 6,
          filter: "drop-shadow(0 0 6px rgba(6,182,212,.6))",
        }}>{f.icon}</div>
      ))}

      {/* Ripple rings */}
      {ripples.map(r => (
        <div key={r.id} style={{
          position: "absolute", inset: -4, borderRadius: 18,
          border: "2px solid rgba(6,182,212,.7)",
          animation: "btnRipple .8s ease-out forwards",
          pointerEvents: "none", zIndex: 4,
        }}/>
      ))}

      {/* The button */}
      <button
        ref={btnRef}
        onClick={onClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{
          position: "relative", zIndex: 6,
          background: hovered
            ? "linear-gradient(135deg,#0891B2,#0F1F3D)"
            : "#0F1F3D",
          color: "#fff",
          border: hovered ? "2px solid rgba(6,182,212,.5)" : "2px solid transparent",
          borderRadius: 14, fontSize: 17,
          fontWeight: 700, padding: "18px 52px",
          cursor: "pointer", fontFamily: "Inter, sans-serif",
          boxShadow: hovered
            ? "0 0 0 6px rgba(6,182,212,.15), 0 8px 32px rgba(8,145,178,.4)"
            : "0 4px 14px rgba(15,31,61,.25)",
          transition: "background .35s, box-shadow .35s, border-color .35s",
          letterSpacing: ".01em",
        }}
      >
        {hovered ? "✦ Find My Learning Path ✦" : "Find My Learning Path →"}
      </button>
    </div>
  );
}

/* ── 4. ANIMATED TESTIMONIAL CARD ── */
const socialProof = [
  { initials: "AM", name: "Alex M.",  role: "Freelance Dev",  color: "#0F1F3D", delay: "0s",  text: "Got my first AI freelance client in 3 weeks." },
  { initials: "SK", name: "Sara K.",  role: "Content Lead",   color: "#0891B2", delay: ".5s", text: "Doubled my content output with AI tools." },
  { initials: "JR", name: "James R.", role: "Product Manager", color: "#0D9488", delay: "1s",  text: "Promoted after showing my AI automation work." },
];

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
═══════════════════════════════════════════════════════════ */
function useCountUp(target, duration = 2200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const easeOut = t => 1 - Math.pow(1 - t, 3); // cubic ease-out
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

/* ═══════════════════════════════════════════════════════════
   ANIMATED STAT CELL
═══════════════════════════════════════════════════════════ */
// Each stat needs: target number, prefix, suffix, label, duration
const STATS_CONFIG = [
  { target: 800,  prefix: "",  suffix: "K+", label: "Active learners",          duration: 2400 },
  { target: 30,   prefix: "",  suffix: "+",  label: "AI tool courses",           duration: 1200 },
  { target: 94,   prefix: "",  suffix: "%",  label: "Report progress in week 1", duration: 1600 },
  { target: 4.9,  prefix: "",  suffix: "★",  label: "App store rating",          duration: 1800, decimal: true },
];

function StatCell({ config, startAnim, index }) {
  const intTarget  = config.decimal ? Math.round(config.target * 10) : config.target;
  const raw        = useCountUp(intTarget, config.duration, startAnim);
  const display    = config.decimal ? (raw / 10).toFixed(1) : raw.toLocaleString();

  return (
    <div style={{
      background: "#fff", padding: "28px 20px", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle top accent line that fills as the number counts */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        height: 3, background: "#0F1F3D",
        width: startAnim ? "100%" : "0%",
        transition: `width ${config.duration}ms cubic-bezier(.22,1,.36,1)`,
        transitionDelay: `${index * 80}ms`,
        borderRadius: "0 0 2px 0",
      }}/>
      <div style={{
        fontSize: 30, fontWeight: 900, color: "#0F1F3D",
        marginBottom: 6, letterSpacing: "-.02em",
        fontVariantNumeric: "tabular-nums",
      }}>
        {config.prefix}{display}{config.suffix}
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: "#94A3B8", lineHeight: 1.4 }}>
        {config.label}
      </div>
    </div>
  );
}

function Hero({ onStart }) {
  const [count,      setCount]      = useState(847293);
  const [startAnim,  setStartAnim]  = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCount(c => c + Math.floor(Math.random() * 4 + 1)), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStartAnim(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="dot-bg" style={{ minHeight: "100vh", paddingTop: 64 }}>
      <div style={{
        width: "100%", padding: "64px 28px 60px",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>

        {/* Live learner pill */}
        <div className="badge a-slideUp" style={{ marginBottom: 28, animationDelay: ".05s" }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%", background: "#0D9488",
            display: "inline-block", animation: "pulse 1.6s infinite",
          }}/>
          {count.toLocaleString()} learners worldwide
        </div>

        {/* Headline */}
        <h1 className="a-slideUp" style={{
          animationDelay: ".1s",
          fontSize: "clamp(38px, 5.5vw, 68px)",
          fontWeight: 900, textAlign: "center", lineHeight: 1.06,
          color: "#0F1F3D", maxWidth: 720, marginBottom: 20,
          letterSpacing: "-.02em",
        }}>
          Master AI Skills That{" "}
          <span style={{ borderBottom: "4px solid #0D9488", paddingBottom: 2 }}>
            Actually Pay Off
          </span>
        </h1>

        {/* ══ TOUCH OF GENIUS ANIMATION ══ */}
        <div className="a-slideUp" style={{ animationDelay: ".13s", width: "100%", maxWidth: 680 }}>
          <TouchOfGenius />
        </div>

        <p className="a-slideUp" style={{
          animationDelay: ".15s", fontSize: 19, color: "#475569",
          textAlign: "center", maxWidth: 520, lineHeight: 1.7,
          marginBottom: 36, fontWeight: 400,
          transition: "color .5s",
          ...(btnHovered ? { color: "#0891B2" } : {}),
        }}>
          Answer 5 quick questions. We'll build a personalised AI learning plan
          that fits your goals, schedule, and skill level — free.
        </p>

        {/* Feature pills */}
        <div className="a-slideUp" style={{
          animationDelay: ".18s",
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "center", marginBottom: 36,
        }}>
          {["5 quick questions", "Personalised curriculum", "AI tools that matter", "Results in 30 days"].map(f => (
            <div key={f} style={{
              background: "#fff", border: "1px solid #E2E8F0",
              borderRadius: 999, padding: "7px 16px",
              fontSize: 13, fontWeight: 600, color: "#475569",
              boxShadow: "0 1px 3px rgba(15,31,61,.05)",
            }}>{f}</div>
          ))}
        </div>

        {/* ══ ANIMATED AVATAR ROW ══ */}
        <div className="a-slideUp" style={{ animationDelay: ".2s", width: "100%" }}>
          <AvatarRow btnHovered={btnHovered} />
        </div>

        {/* ══ MAGICAL CTA BUTTON ══ */}
        <div className="a-slideUp" style={{ animationDelay: ".22s", marginBottom: 14,
          onMouseEnter: () => setBtnHovered(true), onMouseLeave: () => setBtnHovered(false) }}>
          <div
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            <HeroCTAButton onClick={onStart} />
          </div>
        </div>

        <p className="a-slideUp" style={{
          animationDelay: ".25s", fontSize: 12,
          color: "#94A3B8", marginBottom: 64, fontWeight: 500,
        }}>
          Free to start · No credit card required
        </p>

        {/* Animated Stats strip */}
        <div className="a-slideUp" style={{
          animationDelay: ".28s",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 1, width: "100%", maxWidth: 800,
          background: "#E2E8F0", borderRadius: 16, overflow: "hidden",
          border: "1px solid #E2E8F0",
          boxShadow: "0 2px 12px rgba(15,31,61,.06)",
          marginBottom: 56,
        }}>
          {STATS_CONFIG.map((s, i) => (
            <StatCell key={i} config={s} startAnim={startAnim} index={i} />
          ))}
        </div>

        {/* Animated testimonial cards */}
        <div className="a-slideUp" style={{
          animationDelay: ".32s",
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: 16, width: "100%", maxWidth: 820,
        }}>
          {socialProof.map((p, i) => (
            <div key={i} className="card" style={{
              padding: "20px 22px", display: "flex", alignItems: "flex-start", gap: 14,
              animation: `avatarFloat ${2.8 + i * 0.4}s ease-in-out ${p.delay} infinite`,
              transition: "box-shadow .3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 28px ${p.color}22, 0 0 0 2px ${p.color}33`; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = ""; }}
            >
              {/* Animated avatar */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: p.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 14, color: "#fff",
                  boxShadow: `0 0 0 3px white, 0 0 0 4px ${p.color}44`,
                }}>{p.initials}</div>
                {/* Online dot */}
                <div style={{
                  position: "absolute", bottom: 1, right: 1,
                  width: 10, height: 10, borderRadius: "50%",
                  background: "#10B981", border: "2px solid #fff",
                }}/>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0F1F3D", marginBottom: 1 }}>{p.name}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: p.color, marginBottom: 6 }}>{p.role}</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5, fontWeight: 400 }}>"{p.text}"</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCREEN B — QUIZ
═══════════════════════════════════════════════════════════ */
function Quiz({ onFinish }) {
  const [idx, setIdx]       = useState(0);
  const [sel, setSel]       = useState(null);
  const [ans, setAns]       = useState([]);
  const [key, setKey]       = useState(0);
  const [locked, setLocked] = useState(false);

  const q   = QUESTIONS[idx];
  const pct = (idx / QUESTIONS.length) * 100;

  const pick = useCallback((label) => {
    if (locked) return;
    setSel(label);
    setLocked(true);
    setTimeout(() => {
      const next = [...ans, label];
      if (idx + 1 >= QUESTIONS.length) { onFinish(next); return; }
      setAns(next);
      setIdx(i => i + 1);
      setSel(null);
      setLocked(false);
      setKey(k => k + 1);
    }, 500);
  }, [locked, ans, idx, onFinish]);

  return (
    <div className="dot-bg" style={{ minHeight: "100vh", paddingTop: 64 }}>

      {/* Sticky progress header */}
      <div style={{
        position: "fixed", top: 64, left: 0, right: 0, zIndex: 90,
        background: "rgba(250,250,250,.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E2E8F0", padding: "14px 28px",
      }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", marginBottom: 10,
          }}>
            {/* Step dots */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {QUESTIONS.map((_, i) => (
                <div key={i} style={{
                  height: 7,
                  width: i === idx ? 22 : 7,
                  borderRadius: 999,
                  background: i < idx ? "#0F1F3D" : i === idx ? "#0F1F3D" : "#E2E8F0",
                  transition: "all .4s cubic-bezier(.22,1,.36,1)",
                  opacity: i < idx ? .45 : 1,
                }}/>
              ))}
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#94A3B8" }}>
              {idx + 1} of {QUESTIONS.length}
            </span>
          </div>
          <div className="prog-track">
            <div className="prog-fill" style={{ width: `${pct}%` }}/>
          </div>
        </div>
      </div>

      {/* Question area */}
      <div style={{
        minHeight: "calc(100vh - 64px)", display: "flex",
        flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "120px 20px 60px",
      }}>
        <div key={key} className="a-slideIn" style={{ width: "100%", maxWidth: 560 }}>

          {/* Question label */}
          <p style={{
            textAlign: "center", fontSize: 11, fontWeight: 700,
            color: "#0D9488", letterSpacing: ".1em",
            textTransform: "uppercase", marginBottom: 14,
          }}>
            Question {idx + 1}
          </p>

          <h2 style={{
            textAlign: "center",
            fontSize: "clamp(22px, 4vw, 30px)",
            fontWeight: 900,
            color: "#0F1F3D",
            lineHeight: 1.2,
            marginBottom: 10,
            letterSpacing: "-.01em",
          }}>{q.q}</h2>

          <p style={{
            textAlign: "center", fontSize: 15,
            color: "#64748B", marginBottom: 36, fontWeight: 400, lineHeight: 1.6,
          }}>{q.sub}</p>

          {/* Option tiles */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {q.opts.map((opt, i) => {
              const isSelected = sel === opt.label;
              return (
                <button
                  key={i}
                  disabled={locked}
                  onClick={() => pick(opt.label)}
                  className={`opt-tile${isSelected ? " selected a-pop" : ""}`}
                  style={{ position: "relative", animationDelay: `${i * .05}s` }}
                >
                  <span style={{ fontSize: 26, lineHeight: 1 }}>{opt.e}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: isSelected ? "#0F1F3D" : "#334155", lineHeight: 1.35 }}>
                    {opt.label}
                  </span>
                  {isSelected && (
                    <span style={{
                      position: "absolute", top: 12, right: 12,
                      width: 20, height: 20, borderRadius: "50%",
                      background: "#0F1F3D",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: "#fff", fontWeight: 700,
                    }}>✓</span>
                  )}
                </button>
              );
            })}
          </div>

          <p style={{
            textAlign: "center", marginTop: 28, fontSize: 12,
            color: "#CBD5E1", fontWeight: 500,
          }}>
            Tap to select · Your answers are private
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCREEN C — ANALYSIS
═══════════════════════════════════════════════════════════ */
function DashboardGhost() {
  return (
    <div style={{ width: "100%", maxWidth: 680, opacity: .28, filter: "blur(2px)", transform: "scale(1.03)", padding: "0 20px" }}>
      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 14 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14, padding: "18px 16px" }}>
            <div className="skel" style={{ height: 10, width: "55%", marginBottom: 10 }}/>
            <div className="skel" style={{ height: 22, width: "70%", marginBottom: 6 }}/>
            <div className="skel" style={{ height: 8,  width: "40%" }}/>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{
        background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14,
        padding: "16px", marginBottom: 14,
        display: "grid", gridTemplateColumns: "repeat(5,1fr)",
        gap: 8, alignItems: "flex-end", height: 110,
      }}>
        {[70, 85, 55, 92, 68].map((h, i) => (
          <div key={i} style={{
            height: `${h}%`,
            background: i % 2 === 0 ? "#0F1F3D" : "#E2E8F0",
            borderRadius: "6px 6px 0 0", opacity: .7,
          }}/>
        ))}
      </div>
      {/* Two col */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div className="skel" style={{ height: 64, borderRadius: 14, background: "#E2E8F0" }}/>
        <div className="skel" style={{ height: 64, borderRadius: 14, background: "#E2E8F0" }}/>
      </div>
    </div>
  );
}

function Analysis({ onDone }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState([]);

  useEffect(() => {
    const ts = SCAN_STEPS.map((_, i) =>
      setTimeout(() => { setStep(i + 1); setDone(d => [...d, i]); }, 800 + i * 1050)
    );
    const fin = setTimeout(onDone, 800 + SCAN_STEPS.length * 1050 + 600);
    return () => { ts.forEach(clearTimeout); clearTimeout(fin); };
  }, []);

  const pct = Math.round((step / SCAN_STEPS.length) * 100);

  return (
    <div className="dot-bg" style={{
      minHeight: "100vh", paddingTop: 64,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "64px 20px", position: "relative", overflow: "hidden",
    }}>
      {/* Ghost dashboard */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        pointerEvents: "none",
      }}>
        <DashboardGhost/>
      </div>

      {/* Scan line — now navy */}
      <div style={{
        position: "absolute", left: 0, right: 0, height: 2, zIndex: 10,
        background: "linear-gradient(90deg, transparent, #0F1F3D 30%, #0D9488 70%, transparent)",
        boxShadow: "0 0 16px 4px rgba(15,31,61,.18)",
        animation: "scan 3s linear infinite",
      }}/>

      {/* White analysis card */}
      <div className="a-fadeIn card-lg" style={{
        position: "relative", zIndex: 20,
        width: "100%", maxWidth: 440,
        padding: 36,
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 30 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
            border: "3px solid #E2E8F0", borderTopColor: "#0F1F3D",
            animation: "spin .9s linear infinite",
          }}/>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: "#0F1F3D", marginBottom: 3 }}>
              Building your plan
            </div>
            <div style={{ fontSize: 13, color: "#94A3B8", fontWeight: 400 }}>
              AI is analysing your responses…
            </div>
          </div>
        </div>

        {/* Step list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
          {SCAN_STEPS.map((s, i) => {
            const isDone   = done.includes(i);
            const isActive = step === i + 1 && !isDone;
            return (
              <div key={s} style={{
                display: "flex", alignItems: "center", gap: 14,
                opacity: step <= i && !isDone ? .3 : 1, transition: "opacity .4s",
              }}>
                <div style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {isDone ? (
                    <div className="a-checkIn" style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: "#F0FDF9", border: "1.5px solid #0D9488",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, color: "#0D9488", fontWeight: 800,
                    }}>✓</div>
                  ) : isActive ? (
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%",
                      border: "2.5px solid #E2E8F0", borderTopColor: "#0F1F3D",
                      animation: "spin .8s linear infinite",
                    }}/>
                  ) : (
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2E8F0" }}/>
                  )}
                </div>
                <span style={{
                  fontSize: 14, fontWeight: 600,
                  color: isDone ? "#0F766E" : isActive ? "#0F1F3D" : "#CBD5E1",
                  transition: "color .4s",
                }}>{s}</span>
              </div>
            );
          })}
        </div>

        {/* Progress */}
        <div className="prog-track" style={{ marginBottom: 8 }}>
          <div className="prog-fill" style={{ width: `${pct}%` }}/>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#94A3B8", fontWeight: 500 }}>
          <span>Personalising your curriculum…</span>
          <span style={{ fontFamily: "monospace", fontWeight: 700 }}>{pct}%</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCREEN D — PAYWALL
═══════════════════════════════════════════════════════════ */
function BlurredPlan() {
  const courses = [
    { icon: "🤖", title: "ChatGPT Mastery" },
    { icon: "✍️", title: "AI Writing Pro" },
    { icon: "🎨", title: "Midjourney Basics" },
    { icon: "📊", title: "AI Productivity" },
    { icon: "🔧", title: "Prompt Engineering" },
    { icon: "📈", title: "AI for Business" },
  ];
  return (
    <div style={{ width: "100%", maxWidth: 680, filter: "blur(4px)", opacity: .5, userSelect: "none", padding: "0 16px" }}>
      <div className="card" style={{ padding: "14px 20px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#0F1F3D" }}>Your 12-Week Roadmap</div>
        <div style={{ background: "#F0FDF9", border: "1px solid #99F6E4", padding: "3px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, color: "#0F766E" }}>Week 1 of 12</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {courses.map((c, i) => (
          <div key={i} className="card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, borderRadius: 12 }}>
            <span style={{ fontSize: 22 }}>{c.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0F1F3D", marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.title}</div>
              <div className="prog-track"><div className="prog-fill" style={{ width: "0%" }}/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingTier({ name, price, period, desc, features, cta, highlight, badge, delay = 0 }) {
  const [clicking, setClicking] = useState(false);
  return (
    <div
      className="a-slideUp"
      style={{
        animationDelay: `${delay}s`,
        padding: "32px 28px",
        border: highlight ? "2px solid #0F1F3D" : "1px solid #E2E8F0",
        background: highlight ? "#0F1F3D" : "#FFFFFF",
        position: "relative",
        borderRadius: 20,
        boxShadow: highlight
          ? "0 8px 32px rgba(15,31,61,.25)"
          : "0 1px 4px rgba(15,31,61,.06), 0 8px 24px rgba(15,31,61,.04)",
      }}
    >
      {badge && (
        <div style={{
          position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
          background: "#0D9488", borderRadius: 999, padding: "4px 16px",
          fontSize: 11, fontWeight: 700, whiteSpace: "nowrap",
          color: "#fff", letterSpacing: ".03em",
        }}>{badge}</div>
      )}

      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontSize: 11, fontWeight: 700,
          color: highlight ? "rgba(255,255,255,.5)" : "#94A3B8",
          textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 10,
        }}>{name}</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
          <span style={{ fontSize: 44, fontWeight: 900, lineHeight: 1, color: highlight ? "#fff" : "#0F1F3D" }}>{price}</span>
          <span style={{ fontSize: 14, color: highlight ? "rgba(255,255,255,.45)" : "#94A3B8", marginBottom: 7 }}>{period}</span>
        </div>
        <div style={{ fontSize: 14, color: highlight ? "rgba(255,255,255,.55)" : "#64748B", lineHeight: 1.55 }}>{desc}</div>
      </div>

      <div className="divider" style={{ marginBottom: 24, background: highlight ? "rgba(255,255,255,.12)" : "#F1F5F9" }}/>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
        {features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{
              marginTop: 2, flexShrink: 0, fontSize: 13, fontWeight: 800,
              color: highlight ? "#5EEAD4" : "#0D9488",
            }}>✓</span>
            <span style={{
              fontSize: 14, fontWeight: 500, lineHeight: 1.45,
              color: highlight ? "rgba(255,255,255,.8)" : "#334155",
            }}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={highlight ? "teal-btn" : "sec-btn"}
        style={{
          width: "100%", borderRadius: 12, fontSize: 15,
          transform: clicking ? "scale(.97)" : "scale(1)",
          transition: "all .15s",
          background: highlight ? "#fff" : undefined,
          color: highlight ? "#0F1F3D" : undefined,
        }}
        onMouseDown={() => setClicking(true)}
        onMouseUp={() => setClicking(false)}
        onMouseLeave={() => setClicking(false)}
      >{cta}</button>
    </div>
  );
}

function Paywall() {
  return (
    <div className="dot-bg" style={{ minHeight: "100vh", paddingTop: 64, position: "relative", overflow: "hidden" }}>

      {/* Blurred plan */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        paddingTop: 80, pointerEvents: "none",
      }}>
        <BlurredPlan/>
      </div>
      {/* White scrim */}
      <div style={{
        position: "absolute", inset: 0,
        backdropFilter: "blur(3px)",
        background: "linear-gradient(180deg,rgba(250,250,250,.3) 0%,rgba(250,250,250,.7) 35%,rgba(250,250,250,.97) 65%)",
      }}/>

      {/* Foreground */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px 60px",
      }}>
        {/* Badge */}
        <div className="badge a-slideUp" style={{ marginBottom: 24, animationDelay: ".05s" }}>
          🎉 Your personalised plan is ready
        </div>

        <h2 className="a-slideUp" style={{
          animationDelay: ".1s",
          fontSize: "clamp(28px,5vw,44px)",
          fontWeight: 900, textAlign: "center",
          lineHeight: 1.1, color: "#0F1F3D",
          marginBottom: 14, maxWidth: 520,
          letterSpacing: "-.02em",
        }}>
          Unlock Your AI Learning Roadmap
        </h2>

        <p className="a-slideUp" style={{
          animationDelay: ".15s", fontSize: 17,
          color: "#64748B", textAlign: "center",
          marginBottom: 52, lineHeight: 1.65, maxWidth: 420,
        }}>
          Your 12-week personalised curriculum is ready. Choose a plan to access it now.
        </p>

        {/* Pricing grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 20, width: "100%", maxWidth: 600, marginBottom: 36,
        }}>
          <PricingTier
            name="Monthly"
            price="$19"
            period="/ month"
            desc="Full access, cancel anytime."
            features={["Full 12-week roadmap", "All 30+ AI courses", "Progress tracking", "Community access"]}
            cta="Start Monthly"
            highlight={false}
            delay={0.18}
          />
          <PricingTier
            name="Annual"
            price="$9"
            period="/ month"
            badge="🔥 Most Popular — Save 53%"
            desc="Best value, billed $108/year."
            features={["Everything in Monthly", "Lifetime certificate", "Priority AI mentor", "New courses weekly", "Offline access"]}
            cta="Start Annual Plan"
            highlight
            delay={0.23}
          />
        </div>

        {/* Trust strip */}
        <div className="a-slideUp" style={{
          animationDelay: ".3s",
          display: "flex", gap: 28, flexWrap: "wrap",
          justifyContent: "center", marginBottom: 36,
        }}>
          {["🔒 Secure checkout", "↩ 7-day refund", "⚡ Cancel anytime"].map(t => (
            <span key={t} style={{ fontSize: 13, color: "#94A3B8", fontWeight: 500 }}>{t}</span>
          ))}
        </div>

        {/* Testimonial */}
        <div className="a-slideUp card" style={{
          animationDelay: ".35s",
          padding: "20px 24px", maxWidth: 420, textAlign: "center",
          borderRadius: 16,
        }}>
          <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, fontStyle: "italic", marginBottom: 10 }}>
            "I joined Eleviq to learn AI for my job. Within 4 weeks I got a 20% raise. Worth every penny."
          </p>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#94A3B8" }}>— Maria T., Marketing Manager</div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT — STATE MACHINE  (unchanged logic)
═══════════════════════════════════════════════════════════ */
export default function App() {
  const [phase,      setPhase]      = useState("landing");
  const [activeModal, setActiveModal] = useState(null);   // which nav dropdown is open

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", overflowX: "hidden" }}>
      <G/>
      <Navbar
        onCta={() => { setActiveModal(null); setPhase("quiz"); }}
        onNavClick={setActiveModal}
        activeModal={activeModal}
      />

      {phase === "landing"   && <Hero     key="landing"   onStart={() => setPhase("quiz")}/>}
      {phase === "quiz"      && <Quiz     key="quiz"      onFinish={() => setPhase("analyzing")}/>}
      {phase === "analyzing" && <Analysis key="analyzing" onDone={() => setPhase("paywall")}/>}
      {phase === "paywall"   && <Paywall  key="paywall"/>}

      {/* ── DEV SCREEN SWITCHER ─────────────────────────────────────
           These buttons are for development only — they let you jump
           between the 4 screens without completing the quiz flow.
           DELETE this entire block before you ship to users.
      ──────────────────────────────────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 16, right: 16, zIndex: 9999,
        display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end",
      }}>
        <span style={{ fontSize: 9, fontWeight: 700, color: "#94A3B8", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 2 }}>
          Dev — preview screens
        </span>
        <div style={{ display: "flex", gap: 5 }}>
          {[
            { id: "landing",   label: "🏠 Landing"   },
            { id: "quiz",      label: "❓ Quiz"       },
            { id: "analyzing", label: "⚙️ Analysing" },
            { id: "paywall",   label: "💳 Paywall"   },
          ].map(({ id, label }) => (
            <button key={id} onClick={() => setPhase(id)} style={{
              fontSize: 11, fontWeight: 700, padding: "5px 10px", borderRadius: 8,
              border: "1px solid #E2E8F0", cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              background: phase === id ? "#0F1F3D" : "#fff",
              color:      phase === id ? "#fff"    : "#64748B",
              boxShadow: "0 1px 3px rgba(15,31,61,.1)",
              whiteSpace: "nowrap",
            }}>{label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
