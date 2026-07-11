import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";


export default function LandingScreen({ onComplete }) {
  const { COMPANY, LANDING_SCREEN } = useContent();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [buildKey, setBuildKey] = useState(0);
  const exitingRef = useRef(false);
  const lastRestartRef = useRef(0);
  const bgVideoRef = useRef(null);
  const [bgVideoFailed, setBgVideoFailed] = useState(false);

  // Change only these two to control factory animation
  const FACTORY_BUILD_MS = 5000; // total duration of one build (ms)
  const FACTORY_BUILD_LOOPS = 1; // how many times to play

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

  // Replay factory build based on FACTORY_BUILD_LOOPS / FACTORY_BUILD_MS
  useEffect(() => {
    if (!visible || exitingRef.current) return;
    if (buildKey >= FACTORY_BUILD_LOOPS - 1) return;
    const replay = setTimeout(() => {
      setBuildKey((key) => key + 1);
    }, FACTORY_BUILD_MS);
    return () => clearTimeout(replay);
  }, [visible, buildKey, FACTORY_BUILD_MS, FACTORY_BUILD_LOOPS]);

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

  const handleDoNotShowAgain = useCallback(
    (e) => {
      e.stopPropagation();
      onComplete({ persistHide: true });
    },
    [onComplete]
  );

  const highlights = LANDING_SCREEN.highlights || [];

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
        onClick={handleDoNotShowAgain}
        className="landing-screen__dismiss"
      >
        Do Not Show Again
      </button>

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
        className={`landing-screen__stage ${visible ? "is-visible" : ""}`}
        onScroll={restartTimer}
      >
        <div
          className="landing-screen__structure"
          aria-hidden="true"
          key={buildKey}
          style={{ "--factory-build-ms": `${FACTORY_BUILD_MS}ms` }}
        >
          <svg
            className="landing-screen__steel"
            viewBox="0 0 720 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Flip diagonal look direction (cross / opposite corner view) */}
            <g transform="translate(720 0) scale(-1 1)">
            {/* Ground */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--slab"
              d="M20 255 L80 300 L620 310 L680 250 L640 220 L100 215 Z"
            />

            {/* ===== LONG SIDE WALL (facing camera) ===== */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--side"
              d="M40 165 L40 265 L560 285 L560 180 Z"
            />
            {/* Vertical cladding */}
            <path
              className="landing-screen__steel-line landing-screen__steel-line--cladding"
              d="M70 168 L70 268 M100 170 L100 270 M130 172 L130 272 M160 174 L160 274 M190 176 L190 276 M220 177 L220 277 M250 179 L250 279 M280 180 L280 280 M310 182 L310 281 M340 183 L340 282 M370 184 L370 283 M400 185 L400 283 M430 186 L430 284 M460 187 L460 284 M490 188 L490 284 M520 189 L520 284"
              strokeWidth="1.1"
            />
            {/* Dark mid band (two-tone wall) */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--band"
              d="M42 200 L42 228 L558 246 L558 216 Z"
            />
            {/* Lower windows row — aligned inside wall */}
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M75 240 L75 252 L95 254 L95 242 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M115 242 L115 254 L135 256 L135 244 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M155 244 L155 256 L175 258 L175 246 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M195 245 L195 257 L215 259 L215 247 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M235 247 L235 259 L255 261 L255 249 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M275 248 L275 260 L295 262 L295 250 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M315 250 L315 262 L335 264 L335 252 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M355 251 L355 263 L375 265 L375 253 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M395 252 L395 264 L415 266 L415 254 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M435 253 L435 265 L455 267 L455 255 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M475 254 L475 266 L495 268 L495 256 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--win" d="M515 255 L515 267 L535 269 L535 257 Z" />

            {/* Loading doors + white awnings */}
            <path className="landing-screen__steel-fill landing-screen__steel-fill--bay" d="M150 230 L150 268 L185 271 L185 233 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--awning" d="M145 226 L145 234 L190 237 L190 229 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--bay" d="M300 236 L300 274 L335 277 L335 239 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--awning" d="M295 232 L295 240 L340 243 L340 235 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--bay" d="M450 242 L450 278 L485 281 L485 245 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--awning" d="M445 238 L445 246 L490 249 L490 241 Z" />

            {/* ===== FRONT GABLE (right end) ===== */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--front"
              d="M560 180 L560 285 L650 250 L650 155 L605 112 Z"
            />
            <path
              className="landing-screen__steel-line landing-screen__steel-line--front-clad"
              d="M580 175 L580 278 M600 160 L600 268 M620 155 L620 258"
              strokeWidth="1.15"
            />
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--band"
              d="M562 210 L562 235 L648 210 L648 188 Z"
            />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--bay" d="M585 245 L585 280 L620 268 L620 235 Z" />

            {/* ===== TRIANGLE GABLE ROOF ===== */}
            {/* Near roof plane (main visible) */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--roof-l"
              d="M40 165 L560 180 L605 112 L80 100 Z"
            />
            {/* Far roof plane (thin strip beyond ridge) */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--roof-r"
              d="M80 100 L605 112 L650 155 L130 138 Z"
            />
            {/* Front gable triangle face of roof */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--roof-r"
              d="M560 180 L650 155 L605 112 Z"
            />

            {/* Corrugation — along roof length, synced between eave & ridge */}
            <path
              className="landing-screen__steel-line landing-screen__steel-line--corrugation"
              d="M55 158 L95 108 M95 160 L135 110 M135 162 L175 111 M175 164 L215 112 M215 166 L255 113 M255 168 L295 114 M295 170 L335 115 M335 171 L375 116 M375 173 L415 117 M415 174 L455 118 M455 176 L495 119 M495 177 L535 120 M535 178 L575 118 M555 179 L595 115"
              strokeWidth="1.05"
            />
            {/* Far roof corrugation */}
            <path
              className="landing-screen__steel-line landing-screen__steel-line--corrugation-r"
              d="M100 105 L145 140 M160 107 L205 142 M220 108 L265 143 M280 109 L325 144 M340 110 L385 145 M400 111 L445 146 M460 112 L505 147 M520 113 L565 148 M580 114 L630 150"
              strokeWidth="0.95"
            />

            {/* Ridge line */}
            <path
              className="landing-screen__steel-line landing-screen__steel-line--ridge"
              d="M80 100 L605 112"
              strokeWidth="2.8"
            />
            {/* Ridge ventilators / skylights along ridge */}
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M140 98 L155 101 L155 108 L140 105 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M200 100 L215 103 L215 110 L200 107 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M260 101 L275 104 L275 111 L260 108 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M320 103 L335 106 L335 113 L320 110 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M380 104 L395 107 L395 114 L380 111 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M440 106 L455 109 L455 116 L440 113 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--vent" d="M500 107 L515 110 L515 117 L500 114 Z" />
            {/* Raised ridge section near front */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--monitor"
              d="M530 100 L560 106 L590 108 L575 95 L545 92 Z"
            />

            {/* Chimney / stack at front-right */}
            <path
              className="landing-screen__steel-fill landing-screen__steel-fill--chimney"
              d="M630 70 L642 68 L648 200 L636 205 Z"
            />
            <path
              className="landing-screen__steel-line landing-screen__steel-line--chimney"
              d="M645 75 L658 74 L658 195 M645 95 L658 94 M645 120 L658 119 M645 145 L658 144 M645 170 L658 169"
              strokeWidth="1.2"
            />
            <ellipse className="landing-screen__steel-fill landing-screen__steel-fill--chimney-top" cx="638" cy="68" rx="10" ry="4" />

            {/* Storage tanks along base */}
            <path className="landing-screen__steel-fill landing-screen__steel-fill--tank" d="M90 268 L90 288 L125 292 L125 272 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--tank" d="M200 274 L200 294 L240 298 L240 278 Z" />
            <path className="landing-screen__steel-fill landing-screen__steel-fill--tank" d="M380 280 L380 298 L420 302 L420 284 Z" />

            {/* Silhouette edges */}
            <path
              className="landing-screen__steel-line landing-screen__steel-line--eaves"
              d="M40 165 L560 180 L650 155 L605 112 L80 100 Z"
              strokeWidth="2"
            />
            <path
              className="landing-screen__steel-line landing-screen__steel-line--edges"
              d="M40 165 L40 265 L560 285 L650 250 L650 155 M560 180 L560 285 M560 180 L605 112 L650 155"
              strokeWidth="2.2"
            />
            </g>
          </svg>
        </div>

        <div className="landing-screen__copy">
          <div className="landing-screen__logo-box">
            <img
              src="/kes_logo.gif"
              alt={COMPANY.name}
              className="landing-screen__logo"
            />
          </div>
          <p className="landing-screen__eyebrow">{COMPANY.tagline}</p>
          {COMPANY.subTagline && (
            <p className="landing-screen__subtitle">{COMPANY.subTagline}</p>
          )}

          {highlights.length > 0 && (
            <ul className="landing-screen__highlights">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="landing-screen__highlight"
                  style={{ "--i": i }}
                >
                  <span className="landing-screen__highlight-mark" aria-hidden="true" />
                  <span className="landing-screen__highlight-text">{item}</span>
                </li>
              ))}
            </ul>
          )}
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
