"use client";
import React, { useState } from "react";

export default function StudentGallery(): React.JSX.Element {
  const initialArtworks = [
    {
      id: 1,
      title: "CHROMATIC DIALOGUES",
      student: "Lena Petrov, BFA '24",
      image:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      medium: "Oil & mixed media on canvas",
    },
    {
      id: 2,
      title: "EPHEMERAL STRUCTURES",
      student: "James Chen, MFA '23",
      image:
        "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      medium: "Clay and found objects",
    },
    {
      id: 3,
      title: "URBAN PALIMPSEST",
      student: "Maria Gonzalez, BFA '24",
      image:
        "https://images.unsplash.com/photo-1578926375605-eeb7e9de13c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      medium: "Charcoal and ink on paper",
    },
  ];

  const additionalArtworks = [
    {
      id: 4,
      title: "LUMINOUS FRAGMENTS",
      student: "Aisha Johnson, BFA '23",
      image:
        "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1666&q=80",
      medium: "Acrylic and gold leaf",
    },
    {
      id: 5,
      title: "SILENT CONVERSATIONS",
      student: "Oliver Park, MFA '24",
      image:
        "https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      medium: "Bronze sculpture",
    },
    {
      id: 6,
      title: "VERTIGO OF COLOR",
      student: "Sophie Müller, BFA '25",
      image:
        "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      medium: "Watercolor and ink",
    },
    {
      id: 7,
      title: "METAMORPHIC LANDSCAPES",
      student: "Ethan Wong, BFA '24",
      image:
        "https://images.unsplash.com/photo-1579783900882-c0d3dad3f43a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      medium: "Digital print",
    },
    {
      id: 8,
      title: "THE WEIGHT OF LIGHT",
      student: "Isabella Rossi, MFA '23",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      medium: "Glass installation",
    },
    {
      id: 9,
      title: "MONOCHROME MEMORIES",
      student: "David Kim, BFA '25",
      image:
        "https://images.unsplash.com/photo-1578926375605-eeb7e9de13c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      medium: "Graphite on paper",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [displayedArtworks, setDisplayedArtworks] = useState(initialArtworks);

  const handleExploreMore = () => {
    if (!showMore) {
      setDisplayedArtworks([...initialArtworks, ...additionalArtworks]);
    } else {
      setDisplayedArtworks(initialArtworks);
    }
    setShowMore(!showMore);
  };

  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8 border-b border-gray-800 pb-4">
          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
            Student <span className="text-gray-400">Gallery</span>
          </h2>
          <div className="text-xs tracking-wider border-b border-transparent hover:border-white pb-0.5 transition-colors cursor-pointer">
            VIEW ALL WORKS →
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedArtworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4">
                  <div>
                    <p className="text-xs text-gray-300">{artwork.medium}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {artwork.student}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mt-3 font-serif text-lg font-medium tracking-tight group-hover:text-white">
                {artwork.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleExploreMore}
            className="inline-flex items-center space-x-6 border border-gray-800 px-8 py-3 hover:bg-gray-900"
          >
            <span className="text-sm tracking-wider">
              {showMore ? "SHOW LESS" : "EXPLORE MORE STUDENT WORK"}
            </span>
            <div className="relative w-12 h-px bg-gray-400">
              <div
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 
                border-t-2 border-t-transparent
                border-b-2 border-b-transparent
                border-l-4 border-l-gray-400 ${showMore ? "rotate-180" : ""}`}
              ></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
