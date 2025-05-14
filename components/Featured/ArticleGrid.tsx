import React from "react";
import ArticleCard from "./ArticleCard";

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
