"use client";

import { ADDRESS } from "@/lib/shared";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import mandriLogo from "@/public/image-removebg-preview.png";

export default function Hero(): React.JSX.Element {
  const handleAddressClick = () => {
    window.open(
      `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919874094338";
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919874094338`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0.5 bg-amber-100 overflow-hidden border border-amber-200 rounded-sm">
        <div className="md:col-span-3 relative group overflow-hidden">
          <Image
            src="/Hero.png"
            alt="Art students working in studio"
            width={1200}
            height={1200}
            priority
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            quality={100}
            style={{
              color: "transparent",
            }}
            onLoadingComplete={(img) => (img.style.opacity = "1")}
          />
        </div>

        {/* Content Column */}
        <div className="md:col-span-2 bg-stone-50 p-6 md:p-8 flex flex-col justify-between border-t border-amber-200 md:border-t-0">
          {/* Main Content */}
          <div className="">
            <h1 className="font-cormorant text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-snug sm:leading-normal md:leading-tight text-amber-900">
              CULTIVATING EXCELLENCE <br className="hidden md:block" />
              IN FINE ARTS
            </h1>

            <p className="mt-3 sm:mt-4 text-stone-600 max-w-xl text-xs sm:text-sm md:text-base font-cormorante italic">
              Join Debashis Dev Roy Art School - Kolkata&apos;s leading
              institution for professional art training. Our certified online
              art courses combine traditional techniques with contemporary
              approaches, offering flexible learning for aspiring artists.
            </p>

            <div className="mt-4 sm:mt-6 group flex items-center space-x-2 cursor-pointer w-fit">
              <span className="text-xs sm:text-sm tracking-wider font-cormorant text-amber-800">
                EXPLORE PROGRAMS
              </span>
              <div className="relative w-12 sm:w-16 h-px bg-amber-600">
                <div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 
                  border-t-2 border-t-transparent
                  border-b-2 border-b-transparent
                  border-l-4 border-l-amber-600 group-hover:border-l-amber-800 transition-colors"
                ></div>
              </div>
            </div>
          </div>

          {/* Admissions Office & Contact Information */}
          <div className="mt-8 space-y-6">
            {/* Admissions Office */}
            <div className="border-l-2 border-amber-300 pl-4">
              <h3 className="font-cormorant text-sm font-semibold tracking-tight uppercase text-amber-900">
                Admissions Office
              </h3>
              <div className="mt-3 space-y-2">
                <div
                  role="button"
                  className="flex items-start text-stone-600 hover:text-amber-800 transition-colors cursor-pointer group"
                  onClick={handleAddressClick}
                >
                  <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0 group-hover:text-amber-800 transition-colors" />
                  <span className="text-xs lg:text-sm">{ADDRESS}</span>
                </div>
                <div
                  role="button"
                  className="flex items-center text-stone-600 hover:text-amber-800 transition-colors cursor-pointer group"
                  onClick={handleCallClick}
                >
                  <Phone className="h-4 w-4 mr-3 group-hover:text-amber-800 transition-colors" />
                  <span className="text-xs lg:text-sm">+91 98740 94338</span>
                </div>
                <div
                  role="button"
                  className="flex items-center text-stone-600 hover:text-amber-800 transition-colors cursor-pointer group py-1"
                  onClick={handleWhatsAppClick}
                >
                  <svg
                    className="h-4 w-4 mr-3 group-hover:text-amber-800 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-xs lg:text-sm">Chat on WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Affiliations */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-sm flex items-center space-x-4">
              <div className="w-10 h-10 border border-amber-300 rounded-full flex items-center justify-center flex-shrink-0 bg-white">
                <Image src={mandriLogo} alt="bharatiya charukala mandir" />
              </div>
              <div className="text-xs lg:text-sm space-y-1">
                <p className="text-stone-600">
                  Affiliated to{" "}
                  <span className="text-amber-800 font-medium">
                    Bharatiya Charukala Mandir
                  </span>
                </p>
                <p className="text-stone-600">
                  Licensed by{" "}
                  <span className="text-amber-800 font-medium">
                    Govt. of West Bengal
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
