import { ADDRESS } from "@/lib/shared";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero(): React.JSX.Element {
  const calculateExperience = (): number => {
    const startDate = new Date(2003, 7, 1); // August 1, 2003
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();

    // Adjust year if we haven't reached the anniversary date yet
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() && 
       currentDate.getDate() < startDate.getDate())
    ) {
      years--;
    }

    return years;
  };

  const yearsOfExperience = calculateExperience();

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5 bg-neutral-800 overflow-hidden border border-neutral-800 rounded-sm">
        {/* Image Column */}
        <div className="md:col-span-3 relative group overflow-hidden">
          <Image
            src="/featured.jpg"
            alt="Art students working in studio"
            width={1200}
            height={1200}
            priority
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content Column */}
        <div className="md:col-span-2 bg-[#121212] p-6 md:p-8 flex flex-col justify-center border-t border-neutral-800 md:border-t-0">
          <div className="mb-4 flex items-center space-x-3">
            <span className="text-xs tracking-widest text-neutral-400 font-mono">
              ESTABLISHED 2003 • {yearsOfExperience} YEARS
            </span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-tight text-neutral-100">
            Boost Your Career With Fine Arts Diploma
          </h2>

          <p className="mt-3 text-neutral-400 text-sm leading-relaxed border-l border-neutral-700 pl-4">
            The journey of DEBASHIS DEV ROY ART SCHOOL began in 2003, serving
            students of all ages. We proudly complete {yearsOfExperience} years
            of excellence in fine arts training, cultivating generations of
            artists through our rigorous curriculum and master instructors.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="text-xs tracking-wider border-b border-neutral-600 hover:border-neutral-100 pb-0.5 transition-colors text-neutral-300 hover:text-white">
              VIEW COURSES
            </button>
            <div className="text-xs text-neutral-500 font-mono">SINCE 2003</div>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-neutral-400 hover:text-white transition-colors cursor-pointer py-1 group"
            >
              <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0 group-hover:text-white transition-colors" />
              <span className="text-sm">{ADDRESS}</span>
            </a>
            <a
              href="tel:+919874094338"
              className="flex items-center text-neutral-400 hover:text-white transition-colors cursor-pointer py-1 group"
            >
              <Phone className="h-4 w-4 mr-3 group-hover:text-white transition-colors" />
              <span className="text-sm">+91 98740 94338</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}