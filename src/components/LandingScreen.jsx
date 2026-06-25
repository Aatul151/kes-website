import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Building2,
  Factory,
  HardHat,
  Layers,
  Wrench,
  Cog,
  Droplets,
  ArrowRight,
} from "lucide-react";
import { COMPANY, LANDING_SCREEN } from "../data/content.js";

const ICONS = [Building2, Factory, HardHat, Layers, Wrench, Cog, Droplets];
const PHASE_SCHEDULE = [
  { at: 400, phase: 1 },
  { at: 1400, phase: 2 },
  { at: 2800, phase: 3 },
  { at: 4200, phase: 4 },
  { at: 5600, phase: 5 },
];

export default function LandingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const exitingRef = useRef(false);
  const lastRestartRef = useRef(0);

  const finish = useCallback(() => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    setExiting(true);
    setTimeout(onComplete, 700);
  }, [onComplete]);

  const restartTimer = useCallback(() => {
    if (exitingRef.current) return;
    const now = Date.now();
    if (now - lastRestartRef.current < 400) return;
    lastRestartRef.current = now;
    setProgress(0);
    setTimerKey((key) => key + 1);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const timers = PHASE_SCHEDULE.map(({ at, phase: p }) =>
      setTimeout(() => setPhase(p), at)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (exitingRef.current) return;

    const start = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / LANDING_SCREEN.durationMs) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(progressInterval);
    }, 40);

    const autoClose = setTimeout(finish, LANDING_SCREEN.durationMs);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(autoClose);
    };
  }, [timerKey, finish]);

  return (
    <div
      className={`landing-screen ${exiting ? "landing-screen--exit" : ""}`}
      role="dialog"
      aria-label="Welcome to KES Engineering"
      onClick={restartTimer}
      onTouchStart={restartTimer}
      onWheel={restartTimer}
      onKeyDown={restartTimer}
      onMouseMove={restartTimer}
    >
      {/* Background layers */}
      <div className="landing-screen__bg">
        <img
          src={LANDING_SCREEN.backgroundImage}
          alt=""
          className="landing-screen__bg-img"
        />
        <div className="landing-screen__bg-overlay" />
        <div className="landing-screen__grid" />
        <div className="landing-screen__scanline" />
      </div>

      {/* Floating industrial icons */}
      <div className="landing-screen__particles" aria-hidden="true">
        {ICONS.map((Icon, i) => (
          <div
            key={i}
            className="landing-screen__particle"
            style={{
              left: `${8 + i * 13}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          >
            <Icon size={18} />
          </div>
        ))}
      </div>

      {/* Steel frame accent */}
      <div className="landing-screen__frame" aria-hidden="true">
        <div className="landing-screen__beam landing-screen__beam--h landing-screen__beam--top" />
        <div className="landing-screen__beam landing-screen__beam--v landing-screen__beam--left" />
        <div className="landing-screen__beam landing-screen__beam--h landing-screen__beam--bottom" />
        <div className="landing-screen__beam landing-screen__beam--v landing-screen__beam--right" />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          finish();
        }}
        className="landing-screen__skip"
      >
        Skip <ArrowRight size={13} />
      </button>

      <div className="landing-screen__content" onScroll={restartTimer}>
        {/* Phase 0+: Logo & brand */}
        <div className={`landing-screen__block ${phase >= 0 ? "is-visible" : ""}`}>
          <img
            src="/kes_logo.png"
            alt={COMPANY.name}
            className="landing-screen__logo"
          />
          <p className="landing-screen__brand">{COMPANY.name}</p>
          <p className="landing-screen__tagline">{COMPANY.tagline}</p>
        </div>

        {/* Phase 1+: Mission */}
        <div className={`landing-screen__block landing-screen__mission ${phase >= 1 ? "is-visible" : ""}`}>
          <span className="landing-screen__label">Our Mission</span>
          <p>{LANDING_SCREEN.mission}</p>
        </div>

        {/* Phase 2+: One stop */}
        <div className={`landing-screen__block landing-screen__onestop ${phase >= 2 ? "is-visible" : ""}`}>
          <p className="landing-screen__highlight">{LANDING_SCREEN.oneStop}</p>
        </div>

        {/* Phase 3+: Turnkey services */}
        <div className={`landing-screen__block landing-screen__services ${phase >= 3 ? "is-visible" : ""}`}>
          <span className="landing-screen__label">{LANDING_SCREEN.turnkeyTitle}</span>
          <ul>
            {LANDING_SCREEN.turnkeyServices.map((item, i) => (
              <li
                key={item}
                className={phase >= 3 ? "is-visible" : ""}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Wrench size={12} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase 4+: Value added */}
        <div className={`landing-screen__block landing-screen__services landing-screen__services--alt ${phase >= 4 ? "is-visible" : ""}`}>
          <span className="landing-screen__label">{LANDING_SCREEN.valueAddedTitle}</span>
          <ul>
            {LANDING_SCREEN.valueAddedServices.map((item, i) => (
              <li
                key={item}
                className={phase >= 4 ? "is-visible" : ""}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Cog size={12} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phase 5: Entering site */}
        <div className={`landing-screen__entering ${phase >= 5 ? "is-visible" : ""}`}>
          <Factory size={16} className="landing-screen__entering-icon" />
          <span>Entering KES Engineering</span>
        </div>
      </div>

      <div className="landing-screen__progress-wrap">
        <div className="landing-screen__progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
