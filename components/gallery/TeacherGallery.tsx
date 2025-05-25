"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function TeacherGallery(): React.JSX.Element {
  const artworks = {
    initial: [
      {
        id: 1,
        student: "Lena Petrov",
        image: "/artwork1.webp",
        medium: "Oil & mixed media on canvas",
      },
      {
        id: 2,
        student: "James Chen",
        image: "/artwork2.jpg",
        medium: "Clay and found objects",
      },
      {
        id: 3,
        student: "Maria Gonzalez",
        image: "/artwork3.webp",
        medium: "Charcoal and ink on paper",
      },
    ],
    additional: [
      {
        id: 4,
        student: "Aisha Johnson",
        image: "/artwork4.webp",
        medium: "Acrylic and gold leaf",
      },
      {
        id: 5,
        student: "Oliver Park",
        image: "/artwork5.webp",
        medium: "Bronze sculpture",
      },
      {
        id: 6,
        student: "Sophie Müller",
        image: "/artwork6.jpg",
        medium: "Watercolor and ink",
      },
      {
        id: 7,
        student: "Ethan Wong",
        image: "/artwork2.jpg",
        medium: "Digital print",
      },
      {
        id: 8,
        student: "Isabella Rossi",
        image: "/artwork3.jpg",
        medium: "Glass installation",
      },
      {
        id: 9,
        student: "David Kim",
        image: "/artwork4.jpg",
        medium: "Graphite on paper",
      },
    ],
  };

  const [showMore, setShowMore] = useState(false);
  const [displayedArtworks, setDisplayedArtworks] = useState(artworks.initial);

  const toggleArtworks = () => {
    setDisplayedArtworks(
      showMore
        ? artworks.initial
        : [...artworks.initial, ...artworks.additional]
    );
    setShowMore(!showMore);
  };

  const ThaiPatternFrame = () => (
    <svg
      className="absolute inset-0 -top-20 -left-[125px] text-neutral-800 opacity-70 pointer-events-none"
      viewBox="0 0 64 64"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M8.72,61.44c.12,.13,.23,.24,.36,.34,.18,.15,.4,.22,.62,.22,.28,0,.55-.11,.75-.33,.35-.4,.34-1-.04-1.37l-.53-.53c-2.33-2.57-2.22-6.51,.25-8.99,2.56-2.55,6.71-2.55,9.27,0,2.2,2.2,5.41,3,8.34,2.18,.17,2.25,.25,4.93,.25,8.04,0,.55,.45,1,1,1h6c.55,0,1-.45,1-1,0-3.11,.09-5.79,.25-8.04,2.93,.82,6.15,.02,8.34-2.18,2.56-2.55,6.71-2.55,9.27,0,2.48,2.48,2.58,6.43,.27,8.97l-.55,.55c-.38,.38-.39,.98-.04,1.37,.2,.22,.47,.33,.75,.33,.22,0,.44-.07,.62-.22,.13-.1,.25-.22,.36-.34,.12-.12,.23-.23,.28-.3,5.98-6.25,5.85-16.31-.29-22.43-1.41-1.41-3.03-2.5-4.82-3.3,.34-1.42,.54-2.89,.54-4.42,0-10.24-17.54-27.96-18.29-28.71-.38-.38-1.04-.38-1.42,0-.75,.75-18.29,18.47-18.29,28.71,0,1.52,.2,3,.54,4.42-1.78,.79-3.41,1.89-4.82,3.3-6.12,6.1-6.26,16.12-.32,22.4,.1,.12,.2,.22,.31,.33Zm25.28-1.44h-4.01c-.03-4.19-.21-7.6-.56-10.19,.51,.07,1.02,.11,1.54,.14,.34,.03,.68,.05,1.02,.05s.69-.02,1.02-.05c.52-.03,1.03-.07,1.54-.14-.34,2.59-.53,6-.56,10.19Zm-1.19-12.04c-.27,.01-.54,.04-.82,.04s-.54-.03-.82-.04c-4.03-.41-7.18-3.82-7.18-7.96,0-3.42,5.23-10.24,8-13.48,2.77,3.24,8,10.06,8,13.48,0,4.14-3.15,7.55-7.18,7.96Zm21.05-7.83c3.58,3.56,4.82,8.66,3.69,13.3-.36-1.49-1.12-2.9-2.28-4.07-3.33-3.32-8.76-3.32-12.09,0-1.77,1.77-4.41,2.35-6.75,1.55,.06-.54,.13-1.04,.2-1.51,6.17-1.56,11.14-6.13,13.25-12.06,1.47,.69,2.8,1.61,3.98,2.78Zm-4.86-9.13c0,6.49-3.66,12.14-9.02,15,1.26-1.67,2.02-3.75,2.02-6,0-1.2-.45-2.63-1.15-4.12,.74-1.75,1.93-3.25,3.57-4.44,1.66-1.21,2.74-3.15,3.24-5.79,.83,1.94,1.33,3.76,1.33,5.35Zm-3.01-8.68c-.06,3.7-.98,6.22-2.74,7.5-1.49,1.08-2.68,2.38-3.55,3.87-1.57-2.69-3.62-5.37-5.1-7.18,.7-2.03,1.98-3.73,3.83-5.06,1.64-1.19,2.71-3.09,3.23-5.66,1.58,2.13,3.1,4.36,4.34,6.54ZM32,4.44c1.4,1.46,4.65,4.94,7.94,9.11-.23,3.03-1.13,5.15-2.68,6.27-1.86,1.34-3.23,3-4.12,4.96-.17-.19-.31-.36-.39-.44-.38-.42-1.11-.42-1.49,0-.08,.09-.22,.25-.39,.44-.89-1.95-2.26-3.62-4.12-4.96-1.56-1.13-2.45-3.25-2.69-6.28,3.29-4.17,6.54-7.65,7.94-9.11Zm-9.65,11.34c.51,2.57,1.59,4.47,3.23,5.66,1.84,1.33,3.12,3.03,3.83,5.06-1.49,1.81-3.54,4.49-5.1,7.18-.87-1.49-2.06-2.79-3.55-3.87-1.76-1.28-2.68-3.8-2.74-7.5,1.24-2.18,2.75-4.41,4.34-6.54Zm-6.01,9.88c.5,2.63,1.58,4.58,3.24,5.79,1.64,1.19,2.83,2.69,3.57,4.44-.69,1.49-1.15,2.92-1.15,4.12,0,2.25,.76,4.33,2.02,6-5.36-2.86-9.02-8.51-9.02-15,0-1.59,.5-3.41,1.33-5.35Zm-6.19,14.47c1.17-1.17,2.51-2.09,3.98-2.78,2.11,5.93,7.08,10.5,13.25,12.06,.07,.47,.14,.97,.2,1.51-2.34,.8-4.97,.23-6.75-1.55-3.33-3.32-8.76-3.32-12.09,0-1.17,1.17-1.93,2.59-2.29,4.08-1.13-4.63,.12-9.75,3.7-13.32Z"
      />
    </svg>
  );

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-neutral-300 mb-3 tracking-tight">
              Debashis Dev Roy&apos;s Gallery
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-md">
              Celebrating creative excellence from our community
            </p>
          </div>
          <button className="text-xs md:text-sm text-neutral-400 hover:text-neutral-300 border-b border-transparent hover:border-neutral-400 pb-1 transition-colors duration-200 w-fit">
            VIEW ALL WORKS →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedArtworks.map((artwork) => (
            <div key={artwork.id} className="group relative">
              {/* Premium Artwork Frame Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 p-6 border-2 border-neutral-800 hover:border-amber-400/30 transition-all duration-500 shadow-2xl">
                {/* Thai Pattern Frame */}
                <div className="absolute inset-0 overflow-hidden rounded-sm">
                  <ThaiPatternFrame />
                </div>

                {/* Inner Matting - Museum Quality */}
                <div className="absolute inset-4 border border-neutral-800/50 rounded-sm pointer-events-none"></div>

                {/* Second Inner Matting for Depth */}
                <div className="absolute inset-6 border border-neutral-800/30 rounded-sm pointer-events-none"></div>

                {/* Image Container */}
                <div className="relative h-full w-full overflow-hidden z-10">
                  <Image
                    src={artwork.image}
                    alt={`Artwork by ${artwork.student}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/placeholder-artwork.jpg"
                    quality={100}
                  />
                </div>

                {/* Subtle Frame Shadow Effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none z-0"></div>
              </div>

              <div className="mt-4 md:mt-5 pl-1">
                <h3 className="text-lg md:text-xl text-neutral-300 font-medium tracking-tight">
                  {artwork.student}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base mt-1 italic">
                  {artwork.medium}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={toggleArtworks}
            className="inline-flex items-center space-x-2 border border-neutral-800 px-8 py-3 hover:bg-neutral-900/50 hover:border-amber-400/30 transition-all duration-300 group"
          >
            <span className="text-sm tracking-wide text-neutral-300 group-hover:text-amber-400 transition-colors duration-300">
              {showMore ? "SHOW LESS" : "EXPLORE MORE"}
            </span>
            <svg
              className={`w-4 h-4 text-neutral-300 group-hover:text-amber-400 transition-all duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
