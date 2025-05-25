"use client";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { WhatsApp } from "../Whatsapp";

export default function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 bg-amber-100 border-b border-amber-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-base lg:text-2xl tracking-tighter font-playfair font-bold"
            >
              DEBASHIS DEV ROY ART SCHOOL
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Phone Call */}
            <Link
              href="tel:+919874094338"
              className="hidden md:flex items-center text-amber-900 p-2 rounded-full hover:bg-amber-200 transition-colors"
              aria-label="Call us"
            >
              <Phone size={18} className="text-amber-700" />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/919874094338"
              className="hidden md:flex items-center text-amber-900 p-2 rounded-full hover:bg-amber-200 transition-colors"
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="text-amber-700" size={18} />
            </Link>

            {/* Location */}
            <Link
              href="https://www.google.com/maps/place/Debashis+Dev+Roy+Art+School/@22.609356,88.417099,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275f5cb9093b7:0x56024d91bfceb8a3!8m2!3d22.609356!4d88.417099!16s%2Fg%2F11lc5pd0nn?entry=ttu"
              className="hidden md:flex items-center text-amber-900 p-2 rounded-full hover:bg-amber-200 transition-colors"
              aria-label="Open location"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} className="text-amber-700" />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/debashis_devroy_art_school/?hl=en"
              className="hidden md:flex items-center text-amber-900 p-2 rounded-full hover:bg-amber-200 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} className="text-amber-700" />
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/debashis.devroy.artschool/"
              className="hidden md:flex items-center text-amber-900 p-2 rounded-full hover:bg-amber-200 transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} className="text-amber-700" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
