import React from "react";

const ExpBanner = () => {
  return (
    <div className="mt-8 sm:mt-12  pt-6 sm:pt-8">
      <div className="relative bg-[#121212] p-4 sm:p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-800"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800"></div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div>
              <div className="font-cormorant text-4xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                2003
              </div>
              <div className="font-cormorant italic text-xs text-gray-200/80 mb-1 tracking-widest">
                ESTABLISHED IN
              </div>
            </div>
            <div>
              <div className="font-cormorant text-4xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                20+
              </div>
              <div className="font-cormorant italic text-xs text-gray-200/80 mb-1 tracking-widest">
                YEARS OF SERVING ARTISTIC EXCELLENCE
              </div>
            </div>
            <div>
              <div className="font-cormorant text-4xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-2">
                50,000+
              </div>
              <div className="font-cormorant italic text-xs text-gray-200/80 mb-1 tracking-widest">
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
            {new Date().getFullYear() - 2003} years of excellence in fine arts
            education
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpBanner;
