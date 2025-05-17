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
import { Button } from "../ui/button";

export default function MomentsCarousel(): React.JSX.Element {
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

  const moments = [
    {
      src: "/artwork6.jpeg",
      alt: "Students at work in the studio",
      caption: "Wednesday Studio Session • 2023",
    },
    {
      src: "/artwork7.jpg",
      alt: "Art class in session",
      caption: "Summer Workshop Series • 2023",
    },
    {
      src: "/artwork3.jpg",
      alt: "Exhibition preparation",
      caption: "Annual Student Exhibition • 2023",
    },
    {
      src: "/artwork9.jpg",
      alt: "Award ceremony",
      caption: "Scholarship Awards • June 2023",
    },
  ];

  return (
    <section className="w-full py-16 mt-8 md:py-20 lg:py-24 bg-[#101010]">
      <div className="relative max-w-screen-2xl mx-auto px-6">
        {/* Minimalist header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-4 tracking-tight">
            Moment&apos;s Captured
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-base md:text-lg">
            Moments from our creative space
          </p>
        </div>

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
            {moments.map((moment, idx) => (
              <CarouselItem
                key={idx}
                className="pl-1 basis-full sm:basis-4/5 md:basis-2/3 lg:basis-1/2"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <div
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      currentIndex === idx
                        ? "scale-100 opacity-100"
                        : "scale-[0.98] opacity-90"
                    }`}
                  >
                    {/* Image with subtle glow effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={moment.src}
                        alt={moment.alt}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Minimalist caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                      <p className="text-xs text-neutral-300 font-mono tracking-wide">
                        {moment.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Subtle navigation buttons */}
          <CarouselPrevious
            className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-neutral-900/80 backdrop-blur-sm hover:bg-neutral-800 transition-all border border-neutral-800 shadow-sm text-white ${
              isHovered ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Previous slide</span>
          </CarouselPrevious>
          <CarouselNext
            className={`absolute right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-neutral-900/80 backdrop-blur-sm hover:bg-neutral-800 transition-all border border-neutral-800 shadow-sm text-white ${
              isHovered ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            <span className="sr-only">Next slide</span>
          </CarouselNext>
        </Carousel>

        {/* Minimal indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {moments.map((_, idx) => (
            <Button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-1 transition-all rounded-full p-0 ${
                currentIndex === idx ? "bg-white w-6" : "bg-neutral-700 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
