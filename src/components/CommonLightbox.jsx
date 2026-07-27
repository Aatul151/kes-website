import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { useContent } from "../context/ContentContext";
import LazyImage from "./LazyImage.jsx";

const CommonLightbox = ({
  isOpen,
  currentIndex,
  onClose
}) => {
  const { PRODUCT_IMAGES } = useContent();

  if (!isOpen || !PRODUCT_IMAGES.length) return null;

  const [activeIdx, setActiveIdx] = useState(currentIndex);
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

  const current = PRODUCT_IMAGES[activeIdx];

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} preview`}
    >
      <div
        className="gallery-lightbox__backdrop"
        onClick={onClose}
      />

      <button
        type="button"
        className="gallery-lightbox__close"
        onClick={onClose}
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

      <div className="gallery-lightbox__stage">
        <LazyImage
          src={current.image}
          alt={current.title}
          className="gallery-lightbox__image"
          loading="eager"
        />
      </div>

      {current.title && (
        <p className="gallery-lightbox__title">
          {current.title}
        </p>
      )}
    </div>
  );
};

export default CommonLightbox;