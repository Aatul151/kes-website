import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Pause,
  Play,
  X,
} from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";

const SIZE_PATTERN = ["tall", "wide", "square", "square", "wide", "tall"];
const GALLERY_AUDIO_SRC = "/downloads/bg-gallery.mp3";

export default function Gallery() {
  const { COMPANY, PRODUCT_IMAGES } = useContent();
  const [activeIdx, setActiveIdx] = useState(null);
  const [entered, setEntered] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const thumbsRef = useRef(null);
  const audioRef = useRef(null);

  const isOpen = activeIdx !== null;
  const current = isOpen ? PRODUCT_IMAGES[activeIdx] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const timer = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen || isVideoOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, isVideoOpen]);

  const closeLightbox = useCallback(() => setActiveIdx(null), []);

  const goPrev = useCallback(() => {
    setActiveIdx((idx) =>
      idx === null ? null : (idx - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length
    );
  }, [PRODUCT_IMAGES.length]);

  const goNext = useCallback(() => {
    setActiveIdx((idx) =>
      idx === null ? null : (idx + 1) % PRODUCT_IMAGES.length
    );
  }, [PRODUCT_IMAGES.length]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "Escape") setIsVideoOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeLightbox, goPrev, goNext]);

  useEffect(() => {
    if (!isOpen || activeIdx === null || !thumbsRef.current) return;

    const activeThumb = thumbsRef.current.children[activeIdx];
    if (!activeThumb) return;

    activeThumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIdx, isOpen]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || musicError) return undefined;

    if (musicEnabled) {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          setIsMusicPlaying(false);
        });
      }
    } else {
      audio.pause();
    }

    return undefined;
  }, [musicEnabled, musicError]);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = useCallback(() => {
    if (musicError) return;
    setMusicEnabled((value) => !value);
  }, [musicError]);

  const openGalleryVideo = useCallback(() => {
    setIsVideoOpen(true);
    setMusicEnabled(false);
  }, []);

  const closeGalleryVideo = useCallback(() => {
    setIsVideoOpen(false);
    if (!musicError) {
      setMusicEnabled(true);
    }
  }, [musicError]);

  return (
    <div className={`gallery-immersive ${entered ? "gallery-immersive--entered" : ""}`}>
      <audio
        ref={audioRef}
        src={GALLERY_AUDIO_SRC}
        loop
        preload="auto"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
        onError={() => {
          setMusicError(true);
          setIsMusicPlaying(false);
        }}
      />

      <div className="gallery-immersive__bg" aria-hidden="true">
        <div className="gallery-immersive__orb gallery-immersive__orb--1" />
        <div className="gallery-immersive__orb gallery-immersive__orb--2" />
        <div className="gallery-immersive__orb gallery-immersive__orb--3" />
        <div className="gallery-immersive__grid-lines" />
      </div>

      <header className="gallery-immersive__header">
        <Link href="/" className="gallery-immersive__back">
          <ArrowLeft size={18} />
          <span>Back</span>
        </Link>

        <Link href="/" className="gallery-immersive__logo">
          <img src="/kes_logo.gif" alt="KES Group" className="kes-brand-logo" />
        </Link>

        <div className="gallery-immersive__actions">
          <button
            type="button"
            className={`gallery-immersive__music-toggle ${isMusicPlaying ? "is-playing" : ""}`}
            onClick={toggleMusic}
            disabled={musicError}
            aria-pressed={musicEnabled && isMusicPlaying}
            aria-label={
              musicError
                ? "Gallery music unavailable"
                : isMusicPlaying
                  ? "Pause gallery music"
                  : "Play gallery music"
            }
            title={
              musicError
                ? "Gallery music unavailable"
                : isMusicPlaying
                  ? "Pause gallery music"
                  : "Play gallery music"
            }
          >
            {isMusicPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <Link href="/contact" className="gallery-immersive__cta">
            <span>Request a Quote</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <main className="gallery-immersive__main">
        {PRODUCT_IMAGES.length > 0 && (
          <section className="gallery-immersive__hero">
            <div className="gallery-immersive__hero-copy">
              <div className="gallery-immersive__eyebrow-row">
                <span className="gallery-immersive__eyebrow">Project Gallery</span>
                {COMPANY.corporateVideoEmbed && (
                  <button
                    type="button"
                    className="gallery-immersive__video-trigger"
                    onClick={openGalleryVideo}
                    aria-label="Open corporate video"
                  >
                    <Play size={12} />
                    <span>Corporate Video</span>
                  </button>
                )}
              </div>
              <h1>Industrial Spaces, Captured Beautifully</h1>
              <p>
                A curated visual collection of KES project execution across manufacturing,
                logistics, warehousing, and infrastructure environments.
              </p>
            </div>

            <div className="gallery-immersive__hero-metrics">
              <div className="gallery-immersive__metric">
                <strong>{String(PRODUCT_IMAGES.length).padStart(2, "0")}</strong>
                <span>Visual frames</span>
              </div>
              <div className="gallery-immersive__metric">
                <strong>
                  {new Set(PRODUCT_IMAGES.map((item) => item.category)).size}
                </strong>
                <span>Project sectors</span>
              </div>
            </div>
          </section>
        )}

        {PRODUCT_IMAGES.length === 0 ? (
          <div className="gallery-immersive__empty">
            <p>No gallery images available yet.</p>
          </div>
        ) : (
          <div className="gallery-immersive__masonry">
            {PRODUCT_IMAGES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-card gallery-card--${SIZE_PATTERN[i % SIZE_PATTERN.length]}`}
                style={{ "--gallery-delay": `${Math.min(i * 70, 840)}ms` }}
                onClick={() => setActiveIdx(i)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-card__noise" aria-hidden="true" />
                <div className="gallery-card__shine" aria-hidden="true" />
                <div className="gallery-card__overlay">
                  <div className="gallery-card__topbar">
                    <span className="gallery-card__tag">{item.category}</span>
                    <span className="gallery-card__view">Open View</span>
                  </div>

                  <div className="gallery-card__content">
                    <span className="gallery-card__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>
                      <MapPin size={12} />
                      {item.location}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>

      {isVideoOpen && COMPANY.corporateVideoEmbed && (
        <div
          className="gallery-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="KES corporate video"
        >
          <div className="gallery-video-modal__backdrop" onClick={closeGalleryVideo} />
          <div className="gallery-video-modal__dialog">
            <button
              type="button"
              className="gallery-video-modal__close"
              onClick={closeGalleryVideo}
              aria-label="Close corporate video"
            >
              <X size={20} />
            </button>
            <iframe
              src={`${COMPANY.corporateVideoEmbed}?autoplay=1`}
              title="KES Corporate Video"
              className="gallery-video-modal__frame"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {isOpen && current && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} preview`}
        >
          <div className="gallery-lightbox__backdrop" onClick={closeLightbox} />

          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close preview"
          >
            <X size={22} />
          </button>

          {PRODUCT_IMAGES.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--next"
                onClick={goNext}
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <div className="gallery-lightbox__stage" key={activeIdx}>
            <img
              src={current.image}
              alt={current.title}
              className="gallery-lightbox__image"
            />
          </div>

          <div className="gallery-lightbox__meta">
            <div>
              <span className="gallery-lightbox__index">
                {String(activeIdx + 1).padStart(2, "0")} / {String(PRODUCT_IMAGES.length).padStart(2, "0")}
              </span>
              <h2>{current.title}</h2>
              <p>
                <MapPin size={14} />
                {current.location}
              </p>
            </div>
            <span className="gallery-lightbox__chip">{current.category}</span>
          </div>

          {PRODUCT_IMAGES.length > 1 && (
            <div className="gallery-lightbox__thumbs" ref={thumbsRef}>
              {PRODUCT_IMAGES.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`gallery-lightbox__thumb ${i === activeIdx ? "is-active" : ""}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to ${item.title}`}
                >
                  <img src={item.image} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
