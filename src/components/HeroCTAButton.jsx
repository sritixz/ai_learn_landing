import React , {useState, useEffect , useCallback , useRef} from 'react'

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

export default HeroCTAButton



