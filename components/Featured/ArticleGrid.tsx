"use client";
import React, { useRef, useState } from "react";
import ArticleCard from "./ArticleCard";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Artist {
  id: number;
  artistName: string;
  artworkTitle: string;
  image: string;
  category: "painting" | "sculpture" | "photography" | "digital";
  achievements: {
    title: string;
    year: string;
    isGold?: boolean;
  }[];
}

export default function ArticleGrid(): React.JSX.Element {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [isHovered, setIsHovered] = useState(false);

  const featuredArtist: Artist = {
    id: 0,
    artistName: "Elena Vasquez",
    artworkTitle: "Chromatic Resonance Series",
    image: "/featured.jpg",
    category: "painting",
    achievements: [
      {
        title: "International Art Prize Gold Medal",
        year: "2023",
        isGold: true,
      },
    ],
  };

  const artists: Artist[] = [
    {
      id: 1,
      artistName: "Marcus Chen",
      artworkTitle: "Urban Fragments",
      image: "/featured.jpg",
      category: "photography",
      achievements: [
        { title: "Photo Annual Gold Award", year: "2023", isGold: true },
      ],
    },
    {
      id: 2,
      artistName: "Sophia Laurent",
      artworkTitle: "Ephemeral Structures",
      image: "/featured.jpg",
      category: "sculpture",
      achievements: [
        { title: "Sculpture Biennale Winner", year: "2023", isGold: true },
      ],
    },
    {
      id: 3,
      artistName: "Jamal Wright",
      artworkTitle: "Digital Horizons",
      image: "/featured.jpg",
      category: "digital",
      achievements: [{ title: "Digital Art Pioneer Award", year: "2023" }],
    },
    // {
    //   id: 4,
    //   artistName: "Isabella Moreno",
    //   artworkTitle: "Silent Dialogues",
    //   image:
    //     "https://images.unsplash.com/photo-1578926375605-eeb7e9de13c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    //   category: "painting",
    //   achievements: [
    //     { title: "Contemporary Masters Award", year: "2023", isGold: true },
    //     { title: "Art Critics Choice", year: "2022" },
    //   ],
    // },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
          Our Award-Winning Artists
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-montserrat">
          Celebrating excellence from our art school alumni and their remarkable
          achievements in the global art scene.
        </p>
      </div>
      <Carousel
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {artists.map((artist, idx) => (
            <CarouselItem key={idx}>
              {/* Featured Artist */}
              <div className="mb-16">
                <div className="relative group overflow-hidden rounded-xl h-[500px]">
                  <Image
                    src={artist.image}
                    alt={artist.artworkTitle}
                    width={1200}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-amber-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        Featured Artist
                      </span>
                      <span className="text-white/80 text-sm">
                        {artist.category}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {artist.artistName}
                    </h2>
                    <p className="text-xl text-amber-300 font-medium mb-4">
                      {artist.artworkTitle}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {artist.achievements.map((achievement, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            achievement.isGold
                              ? "bg-amber-400 text-black"
                              : "bg-white/20 text-white"
                          }`}
                        >
                          {achievement.title} {achievement.isGold && "★"}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-white group">
                      <span className="font-medium">View artist profile</span>
                      <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {isHovered && (
          <CarouselPrevious
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/50 transition-all"
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
            <span className="sr-only">Previous slide</span>
          </CarouselPrevious>
        )}

        {isHovered && (
          <CarouselNext
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/50 transition-all"
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="h-6 w-6 text-white" />
            <span className="sr-only">Next slide</span>
          </CarouselNext>
        )}
      </Carousel>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <ArticleCard
            key={artist.id}
            artistName={artist.artistName}
            artworkTitle={artist.artworkTitle}
            image={artist.image}
            category={artist.category}
            achievements={artist.achievements}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-neutral-950 text-white font-medium hover:bg-neutral-900 transition-colors">
          View all artists and achievements
        </button>
      </div>
    </section>
  );
}
