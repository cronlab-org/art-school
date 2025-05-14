import Link from "next/link";
import React from "react";

export default function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-2xl tracking-widest font-playfair font-bold"
            >
              DEBASHIS DEV ROY ART SCHOOL
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative w-32 h-0.5 bg-gray-600">
              <div
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 
                border-t-4 border-t-transparent
                border-b-4 border-b-transparent
                border-l-8 border-l-gray-600"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
