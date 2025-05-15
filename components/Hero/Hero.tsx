"use client";
import React from "react";
import { Phone, MapPin } from "lucide-react";

export default function Hero(): React.JSX.Element {
  const phoneNumber = "+919874094338";
  const whatsappMessage =
    "Hello, I'm interested in learning more about your art programs.";
  const address =
    "125, Dum Dum Park, Swarna Mayur Appartment, 1st Floor, P.O. - Bangur Avenue, Kolkata -700055, West Bengal, India";

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

  const handleAddressClick = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-snug sm:leading-normal md:leading-tight">
              CULTIVATING EXCELLENCE <br className="hidden md:block" />
              IN FINE ARTS
            </h1>

            <p className="mt-3 sm:mt-4 text-gray-400 max-w-xl text-xs sm:text-sm md:text-base font-cormorante italic">
              Join Debashis Dev Roy Art School - Kolkata&apos;s leading
              institution for professional art training. Our certified online
              art courses combine traditional techniques with contemporary
              approaches, offering flexible learning for aspiring artists.
            </p>

            <div className="mt-4 sm:mt-6 group flex items-center space-x-2 cursor-pointer w-fit">
              <span className="text-xs sm:text-sm tracking-wider font-montserrat">
                EXPLORE PROGRAMS
              </span>
              <div className="relative w-12 sm:w-16 h-px bg-gray-400">
                <div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 
                  border-t-2 border-t-transparent
                  border-b-2 border-b-transparent
                  border-l-4 border-l-gray-400 group-hover:border-l-white transition-colors"
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
            <div className="border-l-2 border-gray-800 pl-4 sm:pl-6">
              <h2 className="font-serif text-lg sm:text-xl font-semibold tracking-tight uppercase">
                Admissions Office
              </h2>
              <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                <div
                  role="button"
                  className="flex items-start text-gray-400 hover:text-white transition-colors cursor-pointer py-1"
                  onClick={handleAddressClick}
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{address}</span>
                </div>
                <div
                  role="button"
                  className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer py-1"
                  onClick={handleCallClick}
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3" />
                  <span className="text-xs sm:text-sm">+91 98740 94338</span>
                </div>
                <div
                  className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer py-1"
                  onClick={handleWhatsAppClick}
                >
                  <svg
                    className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Chat on WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-600 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                <span className="text-xl sm:text-2xl">✻</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Affiliated to{" "}
                <span className="text-white">Bharatiya Charukala Mandir</span>
              </p>
              <p className="mt-1 text-sm sm:text-base text-gray-400">
                Licensed by{" "}
                <span className="text-white">Govt. of West Bengal</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-neutral-800 pt-6 sm:pt-8">
          <div className="relative bg-[#121212] p-4 sm:p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800"></div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-8 mb-8">
                <div>
                  <div className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                    2003
                  </div>
                  <div className="font-serif italic text-xs text-gray-200/80 mb-1 tracking-widest">
                    ESTABLISHED IN
                  </div>
                </div>
                <div>
                  <div className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                    {new Date().getFullYear() - 2003}+
                  </div>
                  <div className="font-cormorant italic text-xs text-gray-200/80 mb-1 tracking-widest">
                    YEARS OF SERVING ARTISTIC EXCELLENCE
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                    50,000+
                  </div>
                  <div className="font-serif italic text-xs text-gray-200/80 mb-1 tracking-widest">
                    STUDENTS TILL DATE
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 mb-3 sm:mb-4 h-px bg-neutral-700 w-3/4 mx-auto relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-gray-200 rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 italic max-w-2xl mx-auto">
                Debashis Dev Roy Art School has been Kolkata&apos;s premier
                institution for nurturing artistic talent, with over{" "}
                {new Date().getFullYear() - 2003} years of excellence in fine
                arts education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
