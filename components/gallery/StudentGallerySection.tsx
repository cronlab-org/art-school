"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function StudentGallery(): React.JSX.Element {
  const artworks = {
    initial: [
      {
        id: 1,
        student: "Lena Petrov",
        role: "Student",
        image: "/artwork1.avif",
        medium: "Oil & mixed media on canvas",
      },
      {
        id: 2,
        student: "James Chen",
        role: "Teacher",
        image: "/artwork2.jpg",
        medium: "Clay and found objects",
      },
      {
        id: 3,
        student: "Maria Gonzalez",
        role: "Student",
        image: "/artwork3.jpg",
        medium: "Charcoal and ink on paper",
      },
    ],
    additional: [
      {
        id: 4,
        student: "Aisha Johnson",
        role: "Student",
        image: "/artwork4.jpg",
        medium: "Acrylic and gold leaf",
      },
      {
        id: 5,
        student: "Oliver Park",
        role: "Teacher",
        image: "/artwork5.jpeg",
        medium: "Bronze sculpture",
      },
      {
        id: 6,
        student: "Sophie Müller",
        role: "Student",
        image: "/artwork6.jpeg",
        medium: "Watercolor and ink",
      },
      {
        id: 7,
        student: "Ethan Wong",
        role: "Student",
        image: "/artwork2.jpg",
        medium: "Digital print",
      },
      {
        id: 8,
        student: "Isabella Rossi",
        role: "Teacher",
        image: "/artwork3.jpg",
        medium: "Glass installation",
      },
      {
        id: 9,
        student: "David Kim",
        role: "Student",
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
    <section className="py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2">
              Artwork Gallery
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-md font-montserrat">
              Celebrating creative excellence from our community
            </p>
          </div>
          <button className="text-xs md:text-sm text-neutral-300 hover:text-white border-b border-transparent hover:border-white pb-1 transition-colors duration-200 w-fit">
            VIEW ALL WORKS →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedArtworks.map((artwork) => (
            <div key={artwork.id} className="group">
              {/* Artwork Frame Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-900 p-4 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 shadow-lg">
                {/* Inner Matting */}
                <div className="absolute inset-3 border border-neutral-800/50 rounded-sm pointer-events-none"></div>

                {/* Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <Image
                    src={artwork.image}
                    alt={`Artwork by ${artwork.student}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="/placeholder-artwork.jpg"
                    quality={90}
                  />
                </div>
              </div>

              <div className="mt-3 md:mt-4 px-1">
                <p className="text-base md:text-lg text-neutral-300 font-serif">
                  <span className="text-neutral-400">{artwork.role}</span> •{" "}
                  {artwork.student}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={toggleArtworks}
            className="inline-flex items-center space-x-2 border border-neutral-800 px-6 py-2 md:px-8 md:py-3 hover:bg-neutral-900/40 transition-colors duration-200 "
          >
            <span className="text-xs md:text-sm tracking-wide text-neutral-200">
              {showMore ? "SHOW LESS" : "EXPLORE MORE"}
            </span>
            <svg
              className={`w-3 h-3 md:w-4 md:h-4 text-neutral-400 transition-transform duration-200 ${
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
