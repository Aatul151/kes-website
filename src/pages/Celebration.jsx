import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import "./Celebration.css";

const SKY_PALETTES = [
  ["#FFD700", "#FF9F1C", "#FFF1A8", "#FF6B35"], // gold / saffron
  ["#00E5FF", "#4FC3F7", "#FFFFFF", "#81D4FA"], // sky cyan
  ["#FF2E63", "#C8102E", "#FF8A9A", "#FFFFFF"], // KES red
  ["#B388FF", "#7C4DFF", "#E1BEE7", "#FFFFFF"], // violet
  ["#69F0AE", "#00E676", "#B9F6CA", "#FFFFFF"], // emerald
  ["#FF80AB", "#F50057", "#FFD180", "#FFFFFF"], // pink / warm
  ["#40C4FF", "#2979FF", "#82B1FF", "#E3F2FD"], // electric blue
  ["#FFAB40", "#FF6D00", "#FFD740", "#FFFFFF"], // orange flare
  ["#76FF03", "#C6FF00", "#FFEA00", "#FFFFFF"], // lime / yellow
  ["#F48FB1", "#CE93D8", "#80DEEA", "#FFE082"], // mixed festive
];

const MAX_PARTICLES = 1200;

const CONFETTI_COLORS = [
  "#C8102E",
  "#FFD700",
  "#FF6B35",
  "#00E5FF",
  "#69F0AE",
  "#B388FF",
  "#FF80AB",
  "#40C4FF",
  "#FFFFFF",
  "#FFEA00",
  "#F50057",
  "#76FF03",
];

function pickPalette() {
  return SKY_PALETTES[Math.floor(Math.random() * SKY_PALETTES.length)];
}

function pickBurstStyle() {
  const roll = Math.random();
  // ~2 of 10 are confetti; rest are normal / star sky shots
  if (roll < 0.2) return "confetti";
  if (roll < 0.6) return "star";
  return "normal";
}

function createRocket(x, y, palette) {
  const tip = palette[0];
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 1.1,
    vy: -(7.5 + Math.random() * 2.8),
    alpha: 1,
    decay: 0,
    color: tip,
    palette,
    style: pickBurstStyle(),
    size: 2.6,
    isRocket: true,
    trail: [],
    gravity: 0.048,
    targetY: window.innerHeight * (0.12 + Math.random() * 0.28),
  };
}

function pushSpark(particles, spark) {
  if (particles.length >= MAX_PARTICLES) return;
  particles.push(spark);
}

function createNormalBurst(x, y, particles, palette) {
  const room = Math.max(0, MAX_PARTICLES - particles.length);
  if (room < 20) return;

  const primary = palette[0];
  const secondary = palette[1];
  const accent = palette[2];
  const highlight = palette[3] || "#FFFFFF";

  const outerCount = Math.min(48 + Math.floor(Math.random() * 24), room);
  for (let i = 0; i < outerCount; i++) {
    const angle = (i / outerCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.08;
    const speed = 2.8 + Math.random() * 2.4;
    pushSpark(particles, {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: 0.012 + Math.random() * 0.008,
      color: Math.random() > 0.35 ? primary : secondary,
      size: 1.6 + Math.random() * 1.8,
      isRocket: false,
      trail: [],
      gravity: 0.055 + Math.random() * 0.025,
      drag: 0.985,
    });
  }

  const innerRoom = Math.max(0, MAX_PARTICLES - particles.length);
  const innerCount = Math.min(28 + Math.floor(Math.random() * 16), innerRoom);
  for (let i = 0; i < innerCount; i++) {
    const angle = (i / innerCount) * Math.PI * 2;
    const speed = 1.3 + Math.random() * 1.6;
    pushSpark(particles, {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: 0.016 + Math.random() * 0.01,
      color: Math.random() > 0.4 ? accent : highlight,
      size: 1.2 + Math.random() * 1.4,
      isRocket: false,
      trail: [],
      gravity: 0.05 + Math.random() * 0.02,
      drag: 0.98,
    });
  }

  const coreRoom = Math.max(0, MAX_PARTICLES - particles.length);
  const coreCount = Math.min(14, coreRoom);
  for (let i = 0; i < coreCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.6;
    pushSpark(particles, {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: 0.04 + Math.random() * 0.02,
      color: highlight,
      size: 2 + Math.random() * 2.5,
      isRocket: false,
      trail: [],
      gravity: 0.04,
      drag: 0.97,
    });
  }
}

function createStarBurst(x, y, particles, palette) {
  const room = Math.max(0, MAX_PARTICLES - particles.length);
  if (room < 24) return;

  const primary = palette[0];
  const secondary = palette[1];
  const accent = palette[2];
  const highlight = palette[3] || "#FFFFFF";
  const points = 5 + Math.floor(Math.random() * 3); // 5–7 pointed star
  const rotation = Math.random() * Math.PI * 2;
  const sparksPerRay = 10 + Math.floor(Math.random() * 5);

  // Long rays forming a clear star shape
  for (let p = 0; p < points; p++) {
    const angle = rotation + (p / points) * Math.PI * 2;
    for (let s = 0; s < sparksPerRay; s++) {
      const t = (s + 1) / sparksPerRay;
      const speed = 1.6 + t * 4.0 + Math.random() * 0.45;
      const spread = (Math.random() - 0.5) * 0.12;
      pushSpark(particles, {
        x,
        y,
        vx: Math.cos(angle + spread) * speed,
        vy: Math.sin(angle + spread) * speed,
        alpha: 1,
        decay: 0.011 + Math.random() * 0.008,
        color: t > 0.7 ? highlight : Math.random() > 0.4 ? primary : secondary,
        size: 1.4 + (1 - t) * 1.8,
        isRocket: false,
        trail: [],
        gravity: 0.045 + Math.random() * 0.02,
        drag: 0.986,
      });
    }

    // Short in-between rays (star valleys) for sharper star silhouette
    const midAngle = angle + Math.PI / points;
    for (let s = 0; s < 5; s++) {
      const t = (s + 1) / 5;
      const speed = 0.9 + t * 1.8;
      pushSpark(particles, {
        x,
        y,
        vx: Math.cos(midAngle) * speed,
        vy: Math.sin(midAngle) * speed,
        alpha: 1,
        decay: 0.018 + Math.random() * 0.01,
        color: accent,
        size: 1.1 + Math.random(),
        isRocket: false,
        trail: [],
        gravity: 0.05,
        drag: 0.98,
      });
    }
  }

  // Glowing star center
  const coreCount = Math.min(16, Math.max(0, MAX_PARTICLES - particles.length));
  for (let i = 0; i < coreCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.4;
    pushSpark(particles, {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      decay: 0.035 + Math.random() * 0.02,
      color: highlight,
      size: 2.2 + Math.random() * 2.2,
      isRocket: false,
      trail: [],
      gravity: 0.035,
      drag: 0.96,
    });
  }
}

function createConfettiBurst(x, y, particles) {
  const room = Math.max(0, MAX_PARTICLES - particles.length);
  if (room < 20) return;

  const count = Math.min(70 + Math.floor(Math.random() * 40), room);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.2 + Math.random() * 5.5;
    const w = 4 + Math.random() * 6;
    const h = 2.2 + Math.random() * 3.5;
    pushSpark(particles, {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (1.5 + Math.random() * 2.5),
      alpha: 1,
      decay: 0.004 + Math.random() * 0.004,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: w,
      height: h,
      isRocket: false,
      isConfetti: true,
      trail: [],
      gravity: 0.045 + Math.random() * 0.03,
      drag: 0.99,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.28,
      flutter: 0.08 + Math.random() * 0.14,
      flutterPhase: Math.random() * Math.PI * 2,
    });
  }
}

function createSkyBurst(x, y, particles, palette = pickPalette(), style = "normal") {
  if (style === "confetti") {
    createConfettiBurst(x, y, particles);
    return;
  }
  if (style === "star") {
    createStarBurst(x, y, particles, palette);
    return;
  }
  createNormalBurst(x, y, particles, palette);
}

function Diya({ delay = 0, scale = 1 }) {
  return (
    <div
      className="celebration-diya"
      style={{
        animationDelay: `${delay}s`,
        "--diya-scale": scale,
      }}
    >
      <div className="celebration-diya-flame">
        <span className="celebration-diya-flame-inner" />
      </div>
      <div className="celebration-diya-bowl">
        <div className="celebration-diya-wick" />
      </div>
    </div>
  );
}

export default function Celebration() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const clickBurstsRef = useRef([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = particlesRef.current;
    particles.length = 0;

    let lastLaunch = 0;
    let width = 0;
    let height = 0;
    let running = true;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const launchRocket = (forcedX) => {
      const x = forcedX ?? width * (0.1 + Math.random() * 0.8);
      particles.push(createRocket(x, height + 10, pickPalette()));
    };

    const draw = (time) => {
      if (!running) return;

      // Full clear every frame — no ghost hang trails
      ctx.clearRect(0, 0, width, height);

      while (clickBurstsRef.current.length) {
        const burst = clickBurstsRef.current.shift();
        createSkyBurst(burst.x, burst.y, particles, pickPalette(), pickBurstStyle());
      }

      if (time - lastLaunch > 420 + Math.random() * 420) {
        const salvo = 2 + Math.floor(Math.random() * 3);
        for (let s = 0; s < salvo; s++) {
          launchRocket();
        }
        lastLaunch = time;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.isRocket) {
          p.trail.push({ x: p.x, y: p.y, color: p.color });
          if (p.trail.length > 12) p.trail.shift();

          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;

          for (let t = 0; t < p.trail.length; t++) {
            const point = p.trail[t];
            const fade = (t + 1) / p.trail.length;
            ctx.globalAlpha = fade * 0.85;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 1.2 * fade, 0, Math.PI * 2);
            ctx.fillStyle = point.color;
            ctx.fill();
          }

          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.55, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          if (p.y <= p.targetY || p.vy >= -0.35) {
            createSkyBurst(p.x, p.y, particles, p.palette, p.style);
            if (Math.random() > 0.6) {
              // Extra shell prefers sky shots; confetti only via pickBurstStyle (~20%)
              const extraStyle =
                p.style === "confetti"
                  ? Math.random() > 0.5
                    ? "star"
                    : "normal"
                  : pickBurstStyle();
              createSkyBurst(
                p.x + (Math.random() - 0.5) * 36,
                p.y + (Math.random() - 0.5) * 24,
                particles,
                pickPalette(),
                extraStyle,
              );
            }
            particles.splice(i, 1);
          }
          continue;
        }

        if (p.isConfetti) {
          p.flutterPhase += p.flutter;
          p.vx += Math.sin(p.flutterPhase) * 0.12;
          p.vx *= p.drag;
          p.vy *= 0.995;
          p.vy += p.gravity;
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.spin;
          p.alpha -= p.decay;

          if (
            p.alpha <= 0.05 ||
            p.y > height + 40 ||
            p.x < -60 ||
            p.x > width + 60
          ) {
            particles.splice(i, 1);
            continue;
          }

          // Google-style paper confetti rectangles
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = Math.max(p.alpha, 0);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -(p.height || 3) / 2, p.size, p.height || 3);
          ctx.restore();
          ctx.globalAlpha = 1;
          continue;
        }

        p.vx *= p.drag || 0.985;
        p.vy *= p.drag || 0.985;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        const speed = Math.hypot(p.vx, p.vy);

        if (
          p.alpha <= 0.05 ||
          (speed < 0.25 && p.alpha < 0.45) ||
          p.y > height + 40 ||
          p.x < -50 ||
          p.x > width + 50
        ) {
          particles.splice(i, 1);
          continue;
        }

        // Soft glow + core for sky-shot bloom (redrawn each frame, no leftover hang)
        const radius = p.size * (0.55 + p.alpha * 0.55);
        ctx.globalAlpha = p.alpha * 0.28;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.globalAlpha = p.alpha * 0.9;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 14; i++) {
      setTimeout(() => {
        if (running) launchRocket();
      }, i * 90);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const onPointerDown = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    clickBurstsRef.current.push({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="celebration-page">
      <canvas
        ref={canvasRef}
        className="celebration-canvas"
        onPointerDown={onPointerDown}
        aria-hidden="true"
      />

      <div className="celebration-stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="celebration-star"
            style={{
              left: `${(i * 17 + 7) % 100}%`,
              top: `${(i * 23 + 3) % 70}%`,
              animationDelay: `${(i % 8) * 0.35}s`,
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
            }}
          />
        ))}
      </div>

      <Link href="/">
        <button type="button" className="celebration-back" aria-label="Back to home">
          <ArrowLeft size={16} />
          <span>Home</span>
        </button>
      </Link>

      <div className="celebration-content">
        <img
          src="/kes_logo.gif"
          alt="KES Group"
          className="celebration-logo"
          loading="eager"
          decoding="async"
        />
        <p className="celebration-eyebrow">Wishes you</p>
        <h1 className="celebration-title">
          Happy <span>Diwali</span>
        </h1>
        <p className="celebration-subtitle">
          May the festival of lights bring prosperity, warmth, and brilliance
          to your world.
        </p>
        <p className="celebration-hint">Tap anywhere for fireworks</p>
      </div>

      <div className="celebration-diyas" aria-hidden="true">
        <Diya delay={0} scale={0.85} />
        <Diya delay={0.25} scale={1.05} />
        <Diya delay={0.1} scale={0.95} />
        <Diya delay={0.4} scale={1.15} />
        <Diya delay={0.15} scale={0.9} />
        <Diya delay={0.35} scale={1} />
        <Diya delay={0.05} scale={0.88} />
      </div>

      <div className="celebration-glow" aria-hidden="true" />
    </div>
  );
}
