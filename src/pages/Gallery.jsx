import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { useContent } from "../context/ContentContext.jsx";
import LazyImage from "../components/LazyImage.jsx";
import CommonLightbox from "../components/CommonLightbox.jsx";

const GALLERY_AUDIO_SRC = "/downloads/bg-gallery.mp3";

function getGalleryCardLayout(index) {
  const block = Math.floor(index / 3);
  const pos = index % 3;
  const flipped = block % 2 === 1;
  const baseRow = block * 2 + 1;

  if (!flipped) {
    return [
      { size: "tall", gridColumn: "1 / span 2", gridRow: `${baseRow} / span 2` },
      { size: "square", gridColumn: "3", gridRow: String(baseRow) },
      { size: "square", gridColumn: "3", gridRow: String(baseRow + 1) },
    ][pos];
  }

  return [
    { size: "square", gridColumn: "1", gridRow: String(baseRow) },
    { size: "square", gridColumn: "1", gridRow: String(baseRow + 1) },
    { size: "tall", gridColumn: "2 / span 2", gridRow: `${baseRow} / span 2` },
  ][pos];
}

function GalleryCard({ item, index, onOpen }) {
  const layout = getGalleryCardLayout(index);
  if (!layout) return null;

  return (
    <button
      type="button"
      className={`gallery-card gallery-card--${layout.size}`}
      style={{
        "--gallery-delay": `${Math.min(index * 70, 840)}ms`,
        "--gallery-col": layout.gridColumn,
        "--gallery-row": layout.gridRow,
      }}
      onClick={() => onOpen(index)}
      aria-label={`View ${item.title}`}
    >
      <LazyImage src={item.image} alt={item.title} />
      <div className="gallery-card__noise" aria-hidden="true" />
      <div className="gallery-card__shine" aria-hidden="true" />
      <div className="gallery-card__overlay">
        <div className="gallery-card__topbar">
          <span className="gallery-card__tag">{item.category}</span>
          <span className="gallery-card__view">Open View</span>
        </div>

        <div className="gallery-card__content">
          <h3>{item.title}</h3>
          <p>
            <MapPin size={12} />
            {item.location}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function Gallery() {
  const { PRODUCT_IMAGES } = useContent();
  const [activeIdx, setActiveIdx] = useState(null);
  const [entered, setEntered] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef(null);

  const isOpen = activeIdx !== null;
  const current = isOpen ? PRODUCT_IMAGES[activeIdx] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const timer = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeLightbox = useCallback(() => setActiveIdx(null), []);


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
          <LazyImage src="/kes_logo.gif" alt="KES Group" className="kes-brand-logo" loading="eager" />
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
        {PRODUCT_IMAGES.length === 0 ? (
          <div className="gallery-immersive__empty">
            <p>No gallery images available yet.</p>
          </div>
        ) : (
          <div className="gallery-immersive__masonry">
            {PRODUCT_IMAGES.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                onOpen={setActiveIdx}
              />
            ))}
          </div>
        )}
      </main>

      {isOpen && (
        <CommonLightbox
          isOpen={isOpen}
          currentIndex={activeIdx}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
