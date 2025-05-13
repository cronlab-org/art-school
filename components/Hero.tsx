"use client";
import React from "react";
import { Phone } from "lucide-react";

export default function Hero(): React.JSX.Element {
  const phoneNumber = "+919874094338";
  const whatsappMessage =
    "Hello, I'm interested in learning more about your art programs.";

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            CULTIVATING EXCELLENCE <br className="hidden md:block" />
            IN FINE ARTS
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-bas font-cormorante italic">
            Join Debashis Dev Roy Art School - Kolkata&apos;s leading
            institution for professional art training. Our certified online art
            courses combine traditional techniques with contemporary approaches,
            offering flexible learning for aspiring artists. Receive
            personalized mentorship from award-winning faculty and build a
            competitive portfolio for artistic careers.
          </p>
          <div className="mt-6 group flex items-center space-x-2 cursor-pointer">
            <span className="text-sm tracking-wider font-montserrat">
              EXPLORE PROGRAMS
            </span>
            <div className="relative w-16 h-px bg-gray-400">
              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 
      border-t-2 border-t-transparent
      border-b-2 border-b-transparent
      border-l-4 border-l-gray-400 group-hover:border-l-white transition-colors"
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="border-l-2 border-gray-800 pl-6">
            <h2 className="font-serif text-xl font-semibold tracking-tight uppercase">
              Admissions Office
            </h2>
            <div className="mt-4 space-y-3">
              <div
                role="button"
                className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                onClick={handleCallClick}
              >
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div
                className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <svg
                  className="h-4 w-4 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm">Chat on WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">✻</span>
            </div>
            <p className="mt-2 text-gray-400 text-base">
              Affiliated to{" "}
              <span className="text-white">Bharatiya Charukala Mandir</span>
            </p>
            <p className="mt-1 text-gray-400 text-base">
              Licensed by{" "}
              <span className="text-white">Govt. of West Bengal</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-neutral-800 pt-8 relative">
        <div className="relative max-w-7xl mx-auto bg-[#121212] p-8 shadow-2xl ">
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800"></div>

          <div className="text-center">
            <div className="font-serif italic text-xs text-gray-200/80 mb-1 tracking-widest">
              ESTABLISHED IN
            </div>
            <div className="font-serif text-5xl font-bold text-gray-300 mb-2">
              2003
            </div>
            <div className="text-7xl font-bold text-gray-200 leading-none font-cormorant">
              {new Date().getFullYear() - 2003}+
            </div>
            <div className="font-serif text-xl uppercase tracking-wider text-gray-100 mt-2">
              Years of Serving Artistic Excellence
            </div>

            <div className="mt-6 mb-4 h-px bg-neutral-700 w-3/4 mx-auto relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full"></div>
            </div>

            <p className="text-sm text-neutral-400 italic max-w-2xl mx-auto">
              Debashis Dev Roy Art School has been Kolkata&apos;s premier
              institution for nurturing artistic talent, with over{" "}
              {new Date().getFullYear() - 2003} years of excellence in fine arts
              education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
