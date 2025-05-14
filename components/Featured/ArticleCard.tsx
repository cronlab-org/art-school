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
    pattern: "bg-[url('/patterns/painting-pattern.svg')]",
  },
  sculpture: {
    accentColor: "bg-stone-800/20",
    icon: <Box className="h-4 w-4 text-stone-300" />,
    textColor: "text-stone-300",
    borderColor: "border-stone-800/30",
    pattern: "bg-[url('/patterns/sculpture-pattern.svg')]",
  },
  photography: {
    accentColor: "bg-blue-900/20",
    icon: <Camera className="h-4 w-4 text-blue-300" />,
    textColor: "text-blue-300",
    borderColor: "border-blue-900/30",
    pattern: "bg-[url('/patterns/photography-pattern.svg')]",
  },
  digital: {
    accentColor: "bg-purple-900/20",
    icon: <Scan className="h-4 w-4 text-purple-300" />,
    textColor: "text-purple-300",
    borderColor: "border-purple-900/30",
    pattern: "bg-[url('/patterns/digital-pattern.svg')]",
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
    <div className="group relative h-[500px] overflow-hidden rounded-lg">
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-amber-300 opacity-40 z-10"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-amber-300 opacity-40 z-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-amber-300 opacity-40 z-10"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-amber-300 opacity-40 z-10"></div>

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={artworkTitle}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-100"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/50" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm transition-all duration-500">
        <h3 className="font-serif text-2xl font-bold text-white mb-2 relative inline-block">
          {artistName}
          <span
            className={`absolute bottom-0 left-0 h-0.5 ${styles.textColor} w-full opacity-50`}
          ></span>
        </h3>

        {achievements.length > 0 && (
          <div className="mt-4 pt-4 border-t border-neutral-700/30">
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      achievement.isGold
                        ? "bg-amber-500/20 border border-amber-500/30"
                        : "bg-neutral-800/40 border border-neutral-700/50"
                    } flex items-center justify-center mr-3 backdrop-blur-sm`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        achievement.isGold ? "bg-amber-300" : "bg-neutral-300"
                      }`}
                    ></div>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-100">
                      {achievement.title}
                    </p>
                    <p className="text-xs text-neutral-300">
                      {achievement.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
