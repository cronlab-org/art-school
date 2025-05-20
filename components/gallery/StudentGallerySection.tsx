"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function StudentGallery(): React.JSX.Element {
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
        image: "/artwork2.webp",
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
        image: "/artwork6.jpeg",
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

  return (
    <section className="py-16 mt-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-neutral-300 mb-3 tracking-tight">
              Student Gallery
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-md">
              Celebrating creative excellence from the artist himself
            </p>
          </div>
          <button className="text-xs md:text-sm text-neutral-400 hover:text-neutral-300 border-b border-transparent hover:border-neutral-400 pb-1 transition-colors duration-200 w-fit">
            VIEW ALL WORKS →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedArtworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 p-4 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 shadow-xl">
                <div className="absolute inset-3 border border-neutral-800/50 rounded-sm pointer-events-none"></div>

                <div className="absolute inset-5 border border-neutral-800/30 rounded-sm pointer-events-none"></div>

                <div className="relative h-full w-full overflow-hidden">
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

                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] pointer-events-none"></div>
              </div>

              <div className="mt-4 md:mt-5 pl-1">
                <h3 className="text-lg md:text-xl text-neutral-300 font-medium tracking-tight">
                  {artwork.student}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base mt-1">
                  {artwork.medium}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={toggleArtworks}
            className="inline-flex items-center space-x-2 border border-neutral-800 px-8 py-3 hover:bg-neutral-900 transition-colors duration-200"
          >
            <span className="text-sm tracking-wide text-neutral-300">
              {showMore ? "SHOW LESS" : "EXPLORE MORE"}
            </span>
            <svg
              className={`w-4 h-4 text-neutral-300 transition-transform duration-200 ${
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
