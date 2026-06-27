import { useEffect, useRef, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    MapPin,
    X,
} from "lucide-react";

const ImagePreview = ({ images = [], onClose }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const thumbnailRefs = useRef([]);

    if (!images.length) return null;

    const currentImage = images[activeIdx];

    const prev = () => { setActiveIdx((prevIndex) => (prevIndex - 1) % images.length); };

    const next = () => { setActiveIdx((prevIndex) => (prevIndex + 1) % images.length); };

    useEffect(() => {
        thumbnailRefs.current[activeIdx]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    }, [activeIdx]);

    return (
        <>
            {/* Main Image */}
            <div className="relative h-[70vh] w-full rounded-xl overflow-hidden bg-black">
                <img
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="w-full h-full object-cover"
                />
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition"
                >
                    <X size={22} />
                </button>

                {/* Previous */}
                {images.length > 1 && (
                    <>
                        {activeIdx > 0 &&
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition"
                            >
                                <ChevronLeft size={22} />
                            </button>}
                        {activeIdx < images.length - 1 &&
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition"
                            >
                                <ChevronRight size={22} />
                            </button>}
                    </>
                )}

                {/* Project Info */}
                <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-bold">
                        {currentImage.title}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-gray-200">
                        <MapPin size={16} />
                        <span>{currentImage.location}</span>
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex items-center gap-3 mt-5 overflow-x-auto pb-2">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            ref={(el) => (thumbnailRefs.current[index] = el)}
                            onClick={() => setActiveIdx(index)}
                            className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition ${activeIdx === index
                                ? "border-[#C8102E]"
                                : "border-transparent"
                                }`}
                        >
                            <img
                                src={img.image}
                                alt={img.title}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ImagePreview;