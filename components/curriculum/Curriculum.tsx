"use client";
import React from "react";
import {
  Palette,
  GraduationCap,
  Users,
  Laptop,
  Globe,
  Ruler,
  Droplets,
  Paintbrush,
} from "lucide-react";

export default function Curriculum(): React.JSX.Element {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-gray-600 pb-4 mb-8 relative">
          <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gray-400"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Art Curriculum
          </h2>
          <p className="font-montserrat text-xs text-gray-400 mt-2 tracking-widest">
            STRUCTURED LEARNING PATH • TRADITIONAL TO CONTEMPORARY • SINCE 2003
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-neutral-800/50 p-6 sm:p-8 border-l-4 border-gray-500 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-gray-300 mr-3" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Fine Arts Diploma Courses
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Our structured diploma program is designed to guide you from the
                basics to mastery, culminating in a Diploma Certificate and Mark
                Sheet from our Govt. of West Bengal licensed institute.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Basic Level",
                  "Intermediate Level",
                  "Advanced Level",
                  "Professional Level",
                ].map((level, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 p-4 hover:border-gray-400 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-gray-400 mr-3"></div>
                      <h4 className="font-montserrat text-sm sm:text-base font-medium text-white">
                        {level}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      {index === 0 && "Foundational techniques & principles"}
                      {index === 1 && "Developing skills & personal style"}
                      {index === 2 && "Mastering complex compositions"}
                      {index === 3 && "Professional portfolio development"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 sm:p-8 border-l-4 border-gray-500 shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-gray-300 mr-3" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Art for Everyone
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm sm:text-base italic">
                &quot;The Artistic Eye&quot; — learning to see and express
                everyday life in a unique, imaginative way.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Children (Age 6+)",
                    desc: "Nurturing creativity in a fun, supportive environment",
                  },
                  {
                    title: "Beginners & Hobbyists",
                    desc: "Learn at your own pace and gain confidence",
                  },
                  {
                    title: "College Students & Advanced",
                    desc: "Enhance skills and prepare for creative careers",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-900 p-4 border border-gray-700"
                  >
                    <h4 className="font-cormorant text-sm font-bold text-gray-200 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 sm:p-8 border-l-4 border-gray-500 shadow-lg">
              <div className="flex items-center mb-6">
                <Palette className="h-6 w-6 text-gray-300 mr-3" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Specialized Courses & Techniques
                </h3>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-montserrat text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                    <Ruler className="h-5 w-5 text-amber-400 mr-3" />
                    <span className="bg-white bg-clip-text text-transparent font-cormorant">
                      Advanced Drawing Techniques
                    </span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Sighting & Measuring",
                      "The Grid Technique",
                      "Location Marking",
                      "Shape Identification",
                      "Linear Perspective",
                      "Facial Proportions",
                      "Figure Proportions",
                      "Gesture Drawing",
                      "Positive/Negative Space",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-px"
                      >
                        <div className="relative z-10 flex items-center p-3 h-full bg-neutral-900 rounded-[7px] group-hover:bg-neutral-800 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white">
                            {item}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-montserrat text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                    <Droplets className="h-5 w-5 text-blue-300 mr-3" />
                    <span className="bg-white bg-clip-text text-transparent font-cormorant">
                      Watercolor Techniques
                    </span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Wet-on-Wet",
                      "Wet-on-Dry",
                      "Dry-on-Dry",
                      "Dry-on-Wet",
                      "Flat Washes",
                      "Graded Washes",
                      "Blending",
                      "Glazing",
                      "Lifting",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-px"
                      >
                        <div className="relative z-10 flex items-center p-3 h-full bg-neutral-900 rounded-[7px] group-hover:bg-neutral-800 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white">
                            {item}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-montserrat text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                    <Paintbrush className="h-5 w-5 text-purple-300 mr-3" />
                    <span className="bg-white bg-clip-text text-transparent font-cormorant">
                      Acrylic Techniques
                    </span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Dry Brush",
                      "Washing",
                      "Stippling",
                      "Splattering",
                      "Dabbing",
                      "Impasto",
                      "Scumbling",
                      "Glazing",
                      "Sgraffito",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-px"
                      >
                        <div className="relative z-10 flex items-center p-3 h-full bg-neutral-900 rounded-[7px] group-hover:bg-neutral-800 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white">
                            {item}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-montserrat text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                    <Palette className="h-5 w-5 text-emerald-300 mr-3" />
                    <span className="bg-white bg-clip-text text-transparent font-cormorant">
                      Oil Painting
                    </span>
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Master the advantages of oil painting: greater flexibility,
                    richer colors, and a wider tonal range from light to dark,
                    with crisp effects and linear treatment.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Alla Prima",
                      "Glazing",
                      "Scumbling",
                      "Impasto",
                      "Underpainting",
                      "Grisaille",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-px"
                      >
                        <div className="relative z-10 flex items-center p-3 h-full bg-neutral-900 rounded-[7px] group-hover:bg-neutral-800 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-3 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white">
                            {item}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-montserrat text-base sm:text-lg font-bold text-white mb-4 flex items-center">
                    <Globe className="h-5 w-5 text-rose-300 mr-3" />
                    <span className="bg-white bg-clip-text text-transparent font-cormorant">
                      Folk & Cultural Art
                    </span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Madhubani",
                      "Mandala",
                      "Egyptian",
                      "Warli",
                      "Kalamkari",
                    ].map((style, index) => (
                      <div
                        key={index}
                        className="relative group overflow-hidden rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 p-px"
                      >
                        <div className="relative z-10 flex items-center px-4 py-2 bg-neutral-900 rounded-full group-hover:bg-neutral-800 transition-all duration-300">
                          <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover:text-white">
                            {style}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-800/50 p-6 sm:p-8 border-l-4 border-gray-500 shadow-lg">
              <div className="flex items-center mb-6">
                <svg
                  className="h-6 w-6 text-gray-300 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Corporate & Professional Programs
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                Intensive courses for working professionals across creative
                fields:
              </p>

              <div className="space-y-3">
                {[
                  "Graphic & Digital Design",
                  "2D & 3D Animation",
                  "Fashion & Textile Design",
                  "Interior & Exterior Design",
                  "Photography",
                  "Jewelry Design",
                  "Mehndi & Tattoo Art",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 sm:p-8 border-l-4 border-gray-500 shadow-lg">
              <div className="flex items-center mb-6">
                <Laptop className="h-6 w-6 text-gray-300 mr-3" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Interactive Online Classes
                </h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Our Multimedia-Based Interactive Online Classrooms connect
                students globally via Google Meet.
              </p>

              <div className="bg-neutral-900 p-4 border border-gray-700 mb-4">
                <h4 className="font-montserrat text-sm font-bold text-gray-200 mb-2">
                  Students:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["National", "International"].map((type, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-300 bg-neutral-800 px-2 py-1 rounded border border-gray-700"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-900 border border-gray-700 p-4">
                <h4 className="font-montserrat text-xs font-bold text-gray-300 mb-1">
                  NOTE
                </h4>
                <p className="text-gray-400 text-xs">
                  We do not offer demo classes. All admissions and monthly fees
                  are non-refundable.
                </p>
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 sm:p-8 border border-gray-700 shadow-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-gray-700 font-serif">
                &quot;
              </div>
              <p className="text-gray-300 italic text-sm sm:text-base relative z-10">
                Your potential can grow only when you can think and grow through
                your imaginations.
              </p>
              <p className="text-gray-300 text-right text-sm mt-4 font-serif">
                — Artist Debashis Dev Roy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="bg-neutral-800 p-2 px-3 rounded border border-gray-700">
              <span className="text-xs text-gray-300 font-bold">
                ISO 9001:2015
              </span>
            </div>
            <div className="bg-neutral-800 p-2 px-3 rounded border border-gray-700">
              <span className="text-xs text-gray-300 font-bold">
                GOVT. OF WB LICENSED
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
            Affiliated with Bharatiya Charukala Mandir • Classes available 7
            days a week
          </p>
        </div>
      </div>
    </section>
  );
}
