import React , { useRef , useState, useCallback, useEffect } from 'react'

function TouchOfGenius() {
  const canvasRef   = useRef(null);
  const svgRef      = useRef(null);
  const mouse       = useRef({ x: -999, y: -999 });
  const particles   = useRef([]);
  const rafId       = useRef(null);
  const [arcActive, setArcActive] = useState(false);
  const [tipGlow,   setTipGlow]   = useState(false);

  // Human fingertip & robot fingertip positions (SVG-relative → canvas)
  const HUMAN_TIP = { x: 0.38, y: 0.52 };  // fraction of canvas w/h
  const ROBOT_TIP = { x: 0.62, y: 0.52 };

  const spawnParticles = useCallback((cx, cy, count = 12) => {
    const icons = ["◉","⬡","✦","◈","⊛","★"];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 1.2 + Math.random() * 2.2;
      particles.current.push({
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        life: 1, decay: 0.012 + Math.random() * 0.01,
        size: 7 + Math.random() * 8,
        icon: icons[Math.floor(Math.random() * icons.length)],
        hue: Math.random() > 0.5 ? "#0891B2" : "#0D9488",
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cw = canvas.width, ch = canvas.height;
      const htx = HUMAN_TIP.x * cw, hty = HUMAN_TIP.y * ch;
      const rtx = ROBOT_TIP.x * cw, rty = ROBOT_TIP.y * ch;
      const mx  = mouse.current.x,  my  = mouse.current.y;

      // Check if mouse is between the two tips
      const inZone = mx > htx - 80 && mx < rtx + 80 && my > hty - 80 && my < hty + 80;

      if (inZone) {
        const dist = Math.hypot(mx - htx, my - hty) + Math.hypot(mx - rtx, my - rty);
        const gap  = Math.hypot(rtx - htx, rty - hty);
        const proximity = Math.max(0, 1 - dist / (gap * 1.4));

        // Electric arc from human tip → mouse → robot tip
        if (proximity > 0.15) {
          const segments = 14;
          const drawArc = (fromX, fromY, toX, toY, wobble, alpha) => {
            ctx.beginPath();
            ctx.moveTo(fromX, fromY);
            for (let i = 1; i <= segments; i++) {
              const t  = i / segments;
              const bx = fromX + (toX - fromX) * t;
              const by = fromY + (toY - fromY) * t;
              const off = (Math.random() - 0.5) * wobble * (1 - Math.abs(t - 0.5) * 2 + 0.2);
              ctx.lineTo(bx + off, by + off);
            }
            ctx.strokeStyle = `rgba(6,182,212,${alpha})`;
            ctx.lineWidth   = 1.5;
            ctx.shadowColor = "#06B6D4";
            ctx.shadowBlur  = 10;
            ctx.stroke();
            ctx.shadowBlur  = 0;
          };
          drawArc(htx, hty, mx, my, 18 * proximity, 0.85 * proximity);
          drawArc(mx, my, rtx, rty, 18 * proximity, 0.85 * proximity);
          // Secondary faint arc
          drawArc(htx, hty, rtx, rty, 10 * proximity, 0.3 * proximity);

          // Glow circle at cursor
          const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 28 * proximity);
          grad.addColorStop(0, `rgba(6,182,212,${0.5 * proximity})`);
          grad.addColorStop(1, "rgba(6,182,212,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(mx, my, 28 * proximity, 0, Math.PI * 2);
          ctx.fill();

          // Spawn burst particles at midpoint occasionally
          if (Math.random() < 0.12 * proximity) {
            spawnParticles(
              (htx + rtx) / 2 + (Math.random() - 0.5) * 30,
              (hty + rty) / 2 + (Math.random() - 0.5) * 20,
              4
            );
          }
        }
      }

      // Update & draw particles
      particles.current = particles.current.filter(p => p.life > 0);
      for (const p of particles.current) {
        p.x    += p.vx;
        p.y    += p.vy;
        p.vy   += 0.04; // gravity
        p.vx   *= 0.97;
        p.life -= p.decay;

        ctx.globalAlpha = p.life;
        ctx.font        = `${p.size}px sans-serif`;
        ctx.fillStyle   = p.hue;
        ctx.shadowColor = p.hue;
        ctx.shadowBlur  = 8;
        ctx.fillText(p.icon, p.x, p.y);
        ctx.shadowBlur  = 0;
        ctx.globalAlpha = 1;
      }

      rafId.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
    };
  }, [spawnParticles]);

  const onMouseMove = (e) => {
    const rect  = canvasRef.current.getBoundingClientRect();
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const onMouseLeave = () => { mouse.current = { x: -999, y: -999 }; };

  // Click burst
  const onCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    spawnParticles(e.clientX - rect.left, e.clientY - rect.top, 22);
    setTipGlow(true);
    setTimeout(() => setTipGlow(false), 800);
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 680, height: 220, margin: "0 auto 12px", cursor: "crosshair" }}
      onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onClick={onCanvasClick}>

      {/* Canvas layer — arcs & particles */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2 }}/>

      {/* SVG Hands layer */}
      <svg ref={svgRef} viewBox="0 0 680 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <defs>
          <filter id="hglow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <filter id="rglow">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <linearGradient id="humanGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F1F3D" stopOpacity=".9"/>
            <stop offset="100%" stopColor="#0D9488" stopOpacity=".7"/>
          </linearGradient>
          <linearGradient id="robotGrad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0891B2"/>
            <stop offset="100%" stopColor="#0F1F3D"/>
          </linearGradient>
          <radialGradient id="tipGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity={tipGlow ? ".8" : ".35"}/>
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* ── HUMAN HAND (left, pointing right) ── */}
        <g style={{ animation: "handGlow 2.8s ease-in-out infinite" }} filter="url(#hglow)">
          {/* Palm */}
          <ellipse cx="148" cy="145" rx="52" ry="38" fill="url(#humanGrad)" opacity=".85"/>
          {/* Wrist */}
          <rect x="100" y="130" width="40" height="52" rx="10" fill="url(#humanGrad)" opacity=".8"/>
          {/* Index finger pointing */}
          <path d="M148 112 Q152 95 258 108" stroke="url(#humanGrad)" strokeWidth="18" fill="none" strokeLinecap="round"/>
          {/* Middle finger */}
          <path d="M168 118 Q172 104 230 116" stroke="url(#humanGrad)" strokeWidth="15" fill="none" strokeLinecap="round" opacity=".7"/>
          {/* Ring + pinky (folded) */}
          <path d="M172 132 Q178 125 200 128" stroke="url(#humanGrad)" strokeWidth="13" fill="none" strokeLinecap="round" opacity=".5"/>
          <path d="M168 144 Q173 140 190 142" stroke="url(#humanGrad)" strokeWidth="11" fill="none" strokeLinecap="round" opacity=".4"/>
          {/* Thumb */}
          <path d="M130 132 Q118 118 130 108" stroke="url(#humanGrad)" strokeWidth="14" fill="none" strokeLinecap="round" opacity=".6"/>
          {/* Fingertip glow */}
          <circle cx="258" cy="110" r="24" fill="url(#tipGlowGrad)" opacity=".6" style={{ animation: "tipPing 1.8s ease-in-out infinite" }}/>
          <circle cx="258" cy="110" r="6" fill="#0D9488" opacity=".9"/>
          {/* Blueprint circuit lines */}
          <g opacity=".35" stroke="#0D9488" strokeWidth=".8" fill="none">
            <line x1="140" y1="155" x2="120" y2="168"/><circle cx="120" cy="168" r="2.5" fill="#0D9488"/>
            <line x1="155" y1="160" x2="145" y2="178"/><circle cx="145" cy="178" r="2.5" fill="#0D9488"/>
            <line x1="170" y1="155" x2="175" y2="172"/><circle cx="175" cy="172" r="2.5" fill="#0D9488"/>
            <line x1="125" y1="145" x2="108" y2="148"/><circle cx="108" cy="148" r="2" fill="#0D9488"/>
          </g>
        </g>

        {/* ── ROBOT HAND (right, pointing left) ── */}
        <g style={{ animation: "handGlow 2.4s ease-in-out infinite .6s" }} filter="url(#rglow)">
          {/* Palm — segmented */}
          <rect x="488" y="118" width="80" height="52" rx="8" fill="url(#robotGrad)" opacity=".88"/>
          <line x1="520" y1="118" x2="520" y2="170" stroke="#06B6D4" strokeWidth=".8" opacity=".5"/>
          <line x1="540" y1="118" x2="540" y2="170" stroke="#06B6D4" strokeWidth=".8" opacity=".5"/>
          <line x1="556" y1="118" x2="556" y2="170" stroke="#06B6D4" strokeWidth=".8" opacity=".5"/>
          {/* Wrist */}
          <rect x="556" y="122" width="48" height="44" rx="6" fill="url(#robotGrad)" opacity=".75"/>
          <line x1="556" y1="140" x2="604" y2="140" stroke="#06B6D4" strokeWidth=".8" opacity=".4"/>
          {/* Index finger pointing left */}
          <path d="M488 112 Q480 97 422 108" stroke="url(#robotGrad)" strokeWidth="17" fill="none" strokeLinecap="square"/>
          <rect x="422" y="100" width="22" height="16" rx="3" fill="#0891B2" opacity=".8"/>
          <rect x="444" y="100" width="22" height="16" rx="3" fill="#0F1F3D" opacity=".8"/>
          {/* Middle */}
          <path d="M488 124 Q480 112 445 118" stroke="url(#robotGrad)" strokeWidth="14" fill="none" strokeLinecap="square" opacity=".7"/>
          {/* Ring */}
          <path d="M488 136 Q482 130 458 132" stroke="url(#robotGrad)" strokeWidth="12" fill="none" strokeLinecap="square" opacity=".5"/>
          {/* Pinky */}
          <path d="M488 148 Q483 144 463 146" stroke="url(#robotGrad)" strokeWidth="10" fill="none" strokeLinecap="square" opacity=".4"/>
          {/* Thumb */}
          <path d="M550 118 Q562 106 558 94" stroke="url(#robotGrad)" strokeWidth="13" fill="none" strokeLinecap="square" opacity=".6"/>
          {/* Fingertip glow */}
          <circle cx="422" cy="108" r="24" fill="url(#tipGlowGrad)" opacity=".6" style={{ animation: "tipPing 2s ease-in-out infinite .3s" }}/>
          <circle cx="422" cy="108" r="5" fill="#0891B2" opacity=".95"/>
          {/* Blueprint nodes */}
          <g opacity=".4" stroke="#0891B2" strokeWidth=".8" fill="none">
            <line x1="510" y1="165" x2="518" y2="178"/><circle cx="518" cy="178" r="2.5" fill="#0891B2"/>
            <line x1="535" y1="168" x2="530" y2="180"/><circle cx="530" cy="180" r="2.5" fill="#0891B2"/>
            <line x1="548" y1="163" x2="560" y2="172"/><circle cx="560" cy="172" r="2.5" fill="#0891B2"/>
            <line x1="575" y1="158" x2="590" y2="155"/><circle cx="590" cy="155" r="2" fill="#0891B2"/>
          </g>
          {/* Knuckle lines */}
          <g opacity=".35" stroke="#06B6D4" strokeWidth="1" fill="none">
            <line x1="500" y1="120" x2="500" y2="128"/>
            <line x1="510" y1="118" x2="510" y2="126"/>
          </g>
        </g>

        {/* Centre gap energy haze */}
        <ellipse cx="340" cy="112" rx="48" ry="20" fill="#06B6D4" opacity=".06">
          <animate attributeName="opacity" values=".04;.12;.04" dur="1.8s" repeatCount="indefinite"/>
          <animate attributeName="rx" values="40;56;40" dur="1.8s" repeatCount="indefinite"/>
        </ellipse>

        {/* Floating icon nodes around hands */}
        {[
          { x: 80,  y: 70,  icon: "⬡", delay: "0s"   },
          { x: 200, y: 44,  icon: "◉", delay: ".4s"  },
          { x: 340, y: 28,  icon: "🧠", delay: ".8s"  },
          { x: 480, y: 44,  icon: "⚙", delay: ".2s"  },
          { x: 600, y: 70,  icon: "◈", delay: ".6s"  },
          { x: 120, y: 185, icon: "✦", delay: ".3s"  },
          { x: 560, y: 188, icon: "⊛", delay: ".7s"  },
        ].map((n, i) => (
          <text key={i} x={n.x} y={n.y} fontSize="16" fill="#0891B2" opacity=".45" textAnchor="middle"
            style={{ animation: `float ${2.4 + i * 0.3}s ease-in-out ${n.delay} infinite` }}>
            {n.icon}
          </text>
        ))}
      </svg>

      {/* Hint label */}
      <div style={{
        position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)",
        fontSize: 11, color: "#94A3B8", fontWeight: 500, letterSpacing: ".04em",
        whiteSpace: "nowrap", zIndex: 3, pointerEvents: "none",
      }}>Move your cursor between the fingertips ↑</div>
    </div>
  );
}

export default TouchOfGenius
