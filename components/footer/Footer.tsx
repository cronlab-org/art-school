import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-amber-50 text-amber-900 mt-16 py-8 border-t border-amber-200">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-4 font-cormorant">
                DEBASHIS DEV ROY ART SCHOOL
              </h3>
              <p className="text-amber-800/80 max-w-md font-cormorant italic">
                Inspiring creativity and fostering artistic excellence through
                dedicated mentorship and innovative teaching methods.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-amber-900 font-medium mb-2">Contact</h4>
                  <a
                    href="tel:+919874094338"
                    className="text-amber-800 hover:text-amber-900 transition-colors flex items-center gap-2"
                  >
                    <Phone size={16} className="text-amber-700" />
                    <span>+91 98740 94338</span>
                  </a>
                </div>
                <div>
                  <h4 className="text-amber-900 font-medium mb-2">
                    Business Hours
                  </h4>
                  <p className="text-amber-800">Monday - Sunday</p>
                  <p className="text-amber-800">8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start">
                <h4 className="text-amber-900 font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.instagram.com/debashis_devroy_art_school/?hl=en"
                    className="text-amber-700 hover:text-amber-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </Link>

                  <Link
                    href="https://www.facebook.com/debashis.devroy.artschool/"
                    className="text-amber-700 hover:text-amber-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-64">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h4 className="text-amber-900 font-medium">Visit Our Place</h4>
              <Link
                href="https://www.google.com/maps/place/Debashis+Dev+Roy+Art+School/@22.609356,88.417099,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275f5cb9093b7:0x56024d91bfceb8a3!8m2!3d22.609356!4d88.417099!16s%2Fg%2F11lc5pd0nn?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-100 text-amber-900 px-4 py-2 rounded-md text-sm font-medium flex gap-x-1 items-center hover:bg-amber-200 transition-colors border border-amber-200"
              >
                <MapPin size={18} className="text-amber-700" />
                Open in Google Maps
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg w-full h-64 border border-amber-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1906166340887!2d88.41709900000001!3d22.609356000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f5cb9093b7%3A0x56024d91bfceb8a3!2sDebashis%20Dev%20Roy%20Art%20School!5e0!3m2!1sen!2sin!4v1747152512872!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Debashis Dev Roy Art School Map Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-700">
            &copy; {new Date().getFullYear()} Debashis Dev Roy Art School. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
