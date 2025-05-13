import Image from "next/image";
import React from "react";

export default function FeaturedArticle(): React.JSX.Element {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5 bg-gray-800 overflow-hidden">
        {/* Image Column - spans 3 columns on desktop */}
        <div className="md:col-span-3 relative group">
          <Image
            src="/featured.jpg"
            alt="Art students working in studio"
            width={1200}
            height={1200}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Content Column - spans 2 columns on desktop */}
        <div className="md:col-span-2 bg-[#121212] p-8 flex flex-col justify-center">
          <div className="mb-4 flex items-center space-x-3">
            <span className="text-xs tracking-widest text-gray-500">
              FEATURED EXHIBITION
            </span>
            <div className="h-px flex-1 bg-gray-800" />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-tight">
            Emerging Visions: <br />
            Student Showcase 2024
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Witness the extraordinary talent of our graduating class in this
            year&apos;s annual exhibition. Featuring mixed media installations,
            avant-garde paintings, and experimental sculpture from the next
            generation of contemporary artists.
          </p>

          <div className="mt-6 flex items-center space-x-4">
            <div className="text-xs tracking-wider border-b border-transparent hover:border-white pb-0.5 transition-colors cursor-pointer">
              VIEW GALLERY
            </div>
            <div className="text-xs text-gray-500">May 15 - June 30</div>
          </div>
        </div>
      </div>
    </section>
  );
}
