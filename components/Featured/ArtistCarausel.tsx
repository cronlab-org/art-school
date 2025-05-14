"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Trophy, Star } from "lucide-react";
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

interface Artist {
  id: number;
  artistName: string;

  image: string;
  achievements: {
    title: string;
    year: string;
    isGold?: boolean;
  }[];
}

export default function ArtistCarousel(): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [api, setApi] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback((emblaApi: any) => {
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
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

  const artists: Artist[] = [
    {
      id: 1,
      artistName: "Marcus Chen",

      image: "/featured.jpg",
      achievements: [
        { title: "Photo Annual Gold Award", year: "2023", isGold: true },
      ],
    },
    {
      id: 2,
      artistName: "Sophia Laurent",

      image: "/featured.jpg",
      achievements: [
        { title: "Sculpture Biennale Winner", year: "2023", isGold: true },
      ],
    },
    {
      id: 3,
      artistName: "Jamal Wright",

      image: "/featured.jpg",
      achievements: [{ title: "Digital Art Pioneer Award", year: "2023" }],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 font-playfair">
          Our Award-Winning Artists
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-montserrat">
          Celebrating excellence from our art school alumni and their remarkable
          achievements in the global art scene.
        </p>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "center",
          }}
          className="relative overflow-visible"
        >
          <CarouselContent className="-ml-4">
            {artists.map((artist, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 basis-[85%] sm:basis-[80%] md:basis-[65%] lg:basis-[50%]"
              >
                <div
                  className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                    currentIndex === idx ? "scale-100" : "scale-95 opacity-80"
                  }`}
                  style={{
                    paddingBottom: "65%", // Adjusted aspect ratio to show more image
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.artistName}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: "center center" }}
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 65vw, 50vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
                  </div>

                  {/* Artist name - reduced size and position */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-6">
                    <div className="relative">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                          {artist.artistName.split(" ")[0]}
                        </span>
                      </h2>
                      <div className="h-0.5 w-full bg-white/30 rounded-full mt-1 mb-1"></div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/10 tracking-tight">
                        {artist.artistName.split(" ")[1] || ""}
                      </h2>
                    </div>
                  </div>

                  {/* Info footer - made more compact */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 backdrop-blur-sm bg-black/30">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                      <div className="flex flex-col items-end">
                        {artist.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-1 sm:gap-2 mb-1 last:mb-0 p-1.5 rounded-md ${
                              achievement.isGold
                                ? "bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20"
                                : "bg-white/5 border border-white/5"
                            }`}
                          >
                            {achievement.isGold ? (
                              <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                            ) : (
                              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                            )}
                            <div className="text-right">
                              <p className="text-xs font-medium text-white">
                                {achievement.title}
                              </p>
                              <p
                                className={`text-xs ${
                                  achievement.isGold
                                    ? "text-amber-300"
                                    : "text-white/60"
                                }`}
                              >
                                {achievement.year}
                              </p>
                            </div>
                            {achievement.isGold && (
                              <Star className="h-2 w-2 sm:h-3 sm:w-3 text-amber-400 fill-amber-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {isHovered && (
            <>
              <CarouselPrevious
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border-none shadow-lg"
                variant="ghost"
                size="icon"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                <span className="sr-only">Previous slide</span>
              </CarouselPrevious>
              <CarouselNext
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all border-none shadow-lg"
                variant="ghost"
                size="icon"
              >
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                <span className="sr-only">Next slide</span>
              </CarouselNext>
            </>
          )}
        </Carousel>

        <div className="flex justify-center gap-1.5 mt-4">
          {artists.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                api?.scrollTo(idx);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 sm:h-2 transition-all ${
                currentIndex === idx
                  ? "bg-white w-4 sm:w-5"
                  : "bg-white/30 w-1.5 sm:w-2"
              } rounded-full`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
