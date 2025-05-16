"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export default function ArtistCarousel(): React.JSX.Element {
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback((emblaApi: any) => {
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
    api.on("dragStart", () => setIsDragging(true));
    api.on("dragEnd", () => setIsDragging(false));

    return () => {
      api.off("select", onSelect);
      api.off("dragStart", () => setIsDragging(true));
      api.off("dragEnd", () => setIsDragging(false));
    };
  }, [api, onSelect]);

  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const images = [
    {
      src: "/artwork6.jpeg",
      alt: "Modern art exhibition",
      title: "Contemporary Visions",
      subtitle: "Exploring new artistic frontiers",
    },
    {
      src: "/artwork7.jpg",
      alt: "Abstract painting",
      title: "Color Harmonies",
      subtitle: "The interplay of light and form",
    },
    {
      src: "/artwork3.jpg",
      alt: "Sculpture garden",
      title: "Spatial Dialogues",
      subtitle: "Where form meets environment",
    },
    {
      src: "/artwork9.jpg",
      alt: "Digital art installation",
      title: "Future Canvas",
      subtitle: "Technology redefining creativity",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <Carousel
          setApi={setApi}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "center",
            duration: isDragging ? 30 : 50,
          }}
          className="relative w-full group"
        >
          <CarouselContent className="-ml-1">
            {images.map((image, idx) => (
              <CarouselItem
                key={idx}
                className="pl-1 basis-full sm:basis-4/5 md:basis-2/3 lg:basis-1/2"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <div
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      currentIndex === idx
                        ? "scale-100 opacity-100"
                        : "scale-[0.98] opacity-90"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div
                      className={`absolute bottom-6 left-6 right-6 text-neutral-300 transition-all duration-500 ${
                        currentIndex === idx
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                        {image.title}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-300/90 mt-1">
                        {image.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all border-none shadow-lg text-neutral-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous slide</span>
          </CarouselPrevious>
          <CarouselNext
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all border-none shadow-lg text-neutral-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next slide</span>
          </CarouselNext>
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 transition-all rounded-full ${
                currentIndex === idx
                  ? "bg-white dark:bg-white w-6"
                  : "bg-white/20 dark:bg-white/30 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
