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
      stopOnInteraction: true, // Changed to true for better mobile UX
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
    <section className="w-full py-12 md:py-20 lg:py-24 bg-amber-50 mt-10">
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Minimalist header */}
        <div className="text-center mb-8 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-amber-900 mb-3 sm:mb-4 tracking-tight">
            Moments Captured
          </h2>
          <p className="text-amber-800/80 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Moments from our creative space
          </p>
        </div>

        <div className="relative group">
          <Carousel
            setApi={setApi}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start", // Changed to 'start' for better mobile behavior
              duration: isDragging ? 30 : 50,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {moments.map((moment, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-2 basis-full sm:basis-4/5 md:basis-2/3 lg:basis-1/2"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md mx-1">
                    <div
                      className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        currentIndex === idx
                          ? "scale-100 opacity-100"
                          : "scale-[0.98] opacity-90"
                      }`}
                    >
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={moment.src}
                          alt={moment.alt}
                          fill
                          className="object-cover"
                          priority={idx === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/50 via-amber-900/20 to-transparent p-3 sm:p-4">
                        <p className="text-xs sm:text-sm text-amber-50 font-mono tracking-wide">
                          {moment.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons - hidden on mobile for better touch experience */}
            <CarouselPrevious
              className={`hidden sm:flex absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-amber-50/90 backdrop-blur-sm hover:bg-amber-100 transition-all border border-amber-200 shadow-sm text-amber-900 ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
              variant="ghost"
              size="icon"
            >
              <ChevronLeft
                className="h-4 w-4 sm:h-5 sm:w-5"
                strokeWidth={1.5}
              />
              <span className="sr-only">Previous slide</span>
            </CarouselPrevious>
            <CarouselNext
              className={`hidden sm:flex absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-amber-50/90 backdrop-blur-sm hover:bg-amber-100 transition-all border border-amber-200 shadow-sm text-amber-900 ${
                isHovered ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100`}
              variant="ghost"
              size="icon"
            >
              <ChevronRight
                className="h-4 w-4 sm:h-5 sm:w-5"
                strokeWidth={1.5}
              />
              <span className="sr-only">Next slide</span>
            </CarouselNext>
          </Carousel>

          {/* Mobile swipe indicator */}
          <div className="sm:hidden text-center mt-2 text-amber-800/70 text-xs">
            Swipe to navigate
          </div>

          {/* Indicators - larger and more spaced on mobile */}
          <div className="flex justify-center gap-3 sm:gap-1.5 mt-6 sm:mt-8">
            {moments.map((_, idx) => (
              <Button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`h-1.5 sm:h-1 transition-all rounded-full p-0 ${
                  currentIndex === idx
                    ? "bg-amber-600 w-8 sm:w-6"
                    : "bg-amber-300 w-3 sm:w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
