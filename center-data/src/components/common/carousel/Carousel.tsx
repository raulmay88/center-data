import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function Carousel({
  images,
  autoPlayInterval = 4000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasImages = images.length > 0;

  const prevSlide = useCallback(() => {
    if (!hasImages) return;

    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [hasImages, images.length]);

  const nextSlide = useCallback(() => {
    if (!hasImages) return;

    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [hasImages, images.length]);

  useEffect(() => {
    if (!hasImages || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, hasImages, isPaused, nextSlide]);

  if (!hasImages) {
    return (
      <div className="w-full h-[420px] bg-gradient-to-br from-sky-100 via-emerald-100 to-amber-100 flex items-center justify-center">
        <p className="text-slate-600 font-medium">
          No hay imágenes disponibles
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[420px] md:h-[560px] overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Imagen del carrusel ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Color overlay del propio carousel */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/75 via-slate-900/35 to-emerald-700/30 pointer-events-none" />

      {/* Left button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Imagen anterior"
        className="absolute left-4 md:left-8 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-md border border-white/30 shadow-lg transition hover:bg-white/35 hover:scale-105 active:scale-95"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Siguiente imagen"
        className="absolute right-4 md:right-8 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-md border border-white/30 shadow-lg transition hover:bg-white/35 hover:scale-105 active:scale-95"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}