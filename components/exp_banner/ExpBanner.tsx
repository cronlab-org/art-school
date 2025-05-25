import React from "react";

export default function ExpBanner(): React.JSX.Element {
  const calculateExperience = (): number => {
    const startDate = new Date(2003, 8, 1);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();

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
    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 mb-20 sm:mb-12">
      <div className="relative bg-amber-50 border border-amber-200 p-4 sm:p-6 md:p-8 shadow-xl max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-300"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-300"></div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div>
              <div className="font-cormorant text-4xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-2">
                2003
              </div>
              <div className="font-cormorant italic text-xs text-amber-700 mb-1 tracking-widest">
                ESTABLISHED IN
              </div>
            </div>
            <div>
              <div className="font-cormorant text-4xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-2">
                {yearsOfExperience}+
              </div>
              <div className="font-cormorant italic text-xs text-amber-700 mb-1 tracking-widest">
                YEARS OF SERVING ARTISTIC EXCELLENCE
              </div>
            </div>
            <div>
              <div className="font-cormorant text-4xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-2">
                50,000+
              </div>
              <div className="font-cormorant italic text-xs text-amber-700 mb-1 tracking-widest">
                STUDENTS TILL DATE
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 mb-3 sm:mb-4 h-px bg-amber-300 w-3/4 mx-auto relative">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-amber-600 rounded-full"></div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 italic max-w-2xl mx-auto">
            Debashis Dev Roy Art School has been Kolkata&apos;s premier
            institution for nurturing artistic talent, with over{" "}
            {new Date().getFullYear() - 2003} years of excellence in fine arts
            education
          </p>
        </div>
      </div>
    </div>
  );
}
