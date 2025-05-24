"use client";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { WhatsApp } from "./Whatsapp";

export default function MobileNavBar(): React.JSX.Element {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-amber-50 border-t border-amber-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-3 px-2">
        {/* Phone Call */}
        <Link
          href="tel:+919874094338"
          className="flex flex-col items-center text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors"
          aria-label="Call us"
        >
          <Phone size={20} className="text-amber-700" />
          <span className="text-xs mt-1">Call</span>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/919874094338"
          className="flex flex-col items-center text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors"
          aria-label="Chat on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp className="text-amber-700" size={20} />
          <span className="text-xs mt-1">WhatsApp</span>
        </Link>

        {/* Location */}
        <Link
          href="https://www.google.com/maps/place/Debashis+Dev+Roy+Art+School/@22.609356,88.417099,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275f5cb9093b7:0x56024d91bfceb8a3!8m2!3d22.609356!4d88.417099!16s%2Fg%2F11lc5pd0nn?entry=ttu"
          className="flex flex-col items-center text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors"
          aria-label="Open location"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={20} className="text-amber-700" />
          <span className="text-xs mt-1">Location</span>
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/debashis_devroy_art_school/?hl=en"
          className="flex flex-col items-center text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={20} className="text-amber-700" />
          <span className="text-xs mt-1">Instagram</span>
        </Link>

        {/* Facebook */}
        <Link
          href="https://www.facebook.com/debashis.devroy.artschool/"
          className="flex flex-col items-center text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size={20} className="text-amber-700" />
          <span className="text-xs mt-1">Facebook</span>
        </Link>
      </div>
    </div>
  );
}
