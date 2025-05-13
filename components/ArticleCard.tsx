import React from "react";
import { Palette, Camera, Scan, Box } from "lucide-react";
import Image from "next/image";

type ArtCategory = "painting" | "sculpture" | "photography" | "digital";

interface ArtistAchievement {
  title: string;
  year: string;
  isGold?: boolean;
}

interface ArticleCardProps {
  image: string;
  artistName: string;
  artworkTitle: string;
  category: ArtCategory;
  achievements: ArtistAchievement[];
}

const categoryStyles = {
  painting: {
    accentColor: "bg-amber-900/20",
    icon: <Palette className="h-4 w-4 text-amber-300" />,
    textColor: "text-amber-300",
    borderColor: "border-amber-900/30",
  },
  sculpture: {
    accentColor: "bg-stone-800/20",
    icon: <Box className="h-4 w-4 text-stone-300" />,
    textColor: "text-stone-300",
    borderColor: "border-stone-800/30",
  },
  photography: {
    accentColor: "bg-blue-900/20",
    icon: <Camera className="h-4 w-4 text-blue-300" />,
    textColor: "text-blue-300",
    borderColor: "border-blue-900/30",
  },
  digital: {
    accentColor: "bg-purple-900/20",
    icon: <Scan className="h-4 w-4 text-purple-300" />,
    textColor: "text-purple-300",
    borderColor: "border-purple-900/30",
  },
};

export default function ArticleCard({
  image,
  artistName,
  artworkTitle,
  category = "painting",
  achievements = [],
}: ArticleCardProps): React.JSX.Element {
  const styles = categoryStyles[category];

  return (
    <div className="group relative h-[500px] overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl transition-all duration-500 hover:border-neutral-700">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={artworkTitle}
          width={1200}
          height={500}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay - stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />
      </div>

      {/* Floating content panel with glass morphism effect */}
      <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-black/50 border-t border-neutral-800/50 transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-black/60">
        {/* Artist name with animated underline */}
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-white inline-block relative">
            {artistName}
            <span
              className={`absolute bottom-0 left-0 h-0.5 ${styles.textColor} w-0 group-hover:w-full transition-all duration-500`}
            ></span>
          </h3>
        </div>

        {/* Artwork title with category */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`p-2 rounded-full ${styles.accentColor} ${styles.borderColor} border`}
          >
            {styles.icon}
          </div>
          <p className={`${styles.textColor} text-lg font-medium`}>
            {artworkTitle}
          </p>
        </div>

        {/* Achievements as minimalist badges */}
        {achievements.length > 0 && (
          <div className="mt-4 pt-4 border-t border-neutral-800/50">
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    achievement.isGold
                      ? `${styles.accentColor} ${styles.textColor} border ${styles.borderColor}`
                      : "bg-neutral-900/70 text-neutral-300 border border-neutral-800"
                  }`}
                >
                  {achievement.year} • {achievement.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating corner accent */}
      <div
        className={`absolute top-0 right-0 h-32 w-32 ${styles.accentColor} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500 -translate-y-1/2 -translate-x-1/2`}
      ></div>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${styles.accentColor.replace(
          "bg-",
          "shadow-[0_0_60px_10px_"
        )} blur-xl`}
      ></div>
    </div>
  );
}
