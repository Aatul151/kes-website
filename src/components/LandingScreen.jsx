import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";

export default function LandingScreen({ onComplete }) {
  const { COMPANY, LANDING_SCREEN } = useContent();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const exitingRef = useRef(false);
  const lastRestartRef = useRef(0);
  const bgVideoRef = useRef(null);
  const [bgVideoFailed, setBgVideoFailed] = useState(false);

  const finish = useCallback(() => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    setExiting(true);
    setTimeout(onComplete, 600);
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
    const reveal = setTimeout(() => setVisible(true), 80);
    return () => {
      document.body.style.overflow = "";
      clearTimeout(reveal);
    };
  }, []);

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video || bgVideoFailed || !LANDING_SCREEN.backgroundVideo) return;
    video.play().catch(() => setBgVideoFailed(true));
  }, [bgVideoFailed, LANDING_SCREEN.backgroundVideo]);

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
  }, [timerKey, finish, LANDING_SCREEN.durationMs]);

  return (
    <div
      className={`landing-screen${exiting ? " landing-screen--exit" : ""}${
        !bgVideoFailed && LANDING_SCREEN.backgroundVideo
          ? " landing-screen--video"
          : ""
      }`}
      role="dialog"
      aria-label="Welcome to KES Engineering"
      onClick={restartTimer}
      onTouchStart={restartTimer}
      onWheel={restartTimer}
      onKeyDown={restartTimer}
      onMouseMove={restartTimer}
    >
      <div
        className={`landing-screen__bg${
          !bgVideoFailed && LANDING_SCREEN.backgroundVideo
            ? " landing-screen__bg--video"
            : ""
        }`}
      >
        {!bgVideoFailed && LANDING_SCREEN.backgroundVideo ? (
          <video
            ref={bgVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setBgVideoFailed(true)}
            className="landing-screen__bg-img"
            aria-hidden="true"
          >
            <source src={LANDING_SCREEN.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={LANDING_SCREEN.backgroundImage}
            alt=""
            className="landing-screen__bg-img"
          />
        )}
        <div className="landing-screen__bg-overlay" aria-hidden="true" />
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

      <div
        className={`landing-screen__content ${visible ? "is-visible" : ""}`}
        onScroll={restartTimer}
      >
        <div className="landing-screen__shed">
          <div className="landing-screen__shed-backdrop" aria-hidden="true" />

          <div className="landing-screen__eaves" aria-hidden="true">
            <span className="landing-screen__eave landing-screen__eave--left" />
            <span className="landing-screen__eave landing-screen__eave--right" />
          </div>

          <div className="landing-screen__dome" aria-hidden="true">
            <div className="landing-screen__dome-cap" />
            <div className="landing-screen__dome-purlins">
              <span /><span /><span /><span /><span />
            </div>
            <div className="landing-screen__dome-ribs">
              <span /><span /><span /><span /><span /><span /><span />
            </div>
            <span className="landing-screen__dome-ridge" />
          </div>

          <div className="landing-screen__side-wall landing-screen__side-wall--left" aria-hidden="true" />
          <div className="landing-screen__side-wall landing-screen__side-wall--right" aria-hidden="true" />

          <div className="landing-screen__panel-inner">
            <div className="landing-screen__corrugation" aria-hidden="true" />
            <div className="landing-screen__truss landing-screen__truss--left" aria-hidden="true">
              <span className="landing-screen__truss-brace" />
            </div>
            <div className="landing-screen__truss landing-screen__truss--right" aria-hidden="true">
              <span className="landing-screen__truss-brace" />
            </div>

            <div className="landing-screen__panel-body">
              <img
                src="/kes_logo.png"
                alt={COMPANY.name}
                className="landing-screen__logo"
              />
              <h1 className="landing-screen__brand">{COMPANY.name}</h1>
              <p className="landing-screen__tagline">{COMPANY.tagline}</p>
              {COMPANY.subTagline && (
                <p className="landing-screen__subtitle">{COMPANY.subTagline}</p>
              )}
              {LANDING_SCREEN.highlights?.length > 0 && (
                <ul className="landing-screen__highlights">
                  {LANDING_SCREEN.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="landing-screen__foundation" aria-hidden="true">
            <span className="landing-screen__foundation-plate landing-screen__foundation-plate--left" />
            <span className="landing-screen__foundation-plate landing-screen__foundation-plate--right" />
          </div>
          <div className="landing-screen__ground-shadow" aria-hidden="true" />
        </div>
      </div>

      <div className="landing-screen__progress-wrap">
        <div
          className="landing-screen__progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
