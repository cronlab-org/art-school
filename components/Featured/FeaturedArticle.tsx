import Image from "next/image";
import React from "react";

export default function FeaturedArticle(): React.JSX.Element {
  const calculateExperience = () => {
    const startDate = new Date(2003, 7, 1);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < 7 ||
      (currentDate.getMonth() === 7 && currentDate.getDate() < 1)
    ) {
      years--;
    }

    return years;
  };

  const yearsOfExperience = calculateExperience();

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5 bg-neutral-800 overflow-hidden border border-neutral-800">
        {/* Image Column */}
        <div className="md:col-span-3 relative group">
          <Image
            src="/featured.jpg"
            alt="Art students working in studio"
            width={1200}
            height={1200}
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
            <div className="text-xs tracking-wider border-b border-neutral-600 hover:border-neutral-100 pb-0.5 transition-colors cursor-pointer text-neutral-300">
              VIEW COURSES
            </div>
            <div className="text-xs text-neutral-500 font-mono">SINCE 2003</div>
          </div>
        </div>
      </div>
    </section>
  );
}
