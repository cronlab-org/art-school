import { Facebook, Instagram, MapPin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 mt-16">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">name</h3>
              <p className="text-gray-400 max-w-md">
                Inspiring creativity and fostering artistic excellence through
                dedicated mentorship and innovative teaching methods.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 pt-4">
              <div>
                <h4 className="text-white font-medium mb-2">Contact</h4>
                <p className="text-gray-400">contact@name.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Instagram</span>

                    <Instagram />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>

                    <Twitter />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Facebook</span>

                    <Facebook />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full min-h-64">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-medium">Visit Our Place</h4>
              <a
                href="https://www.google.com/maps/place/Debashis+Dev+Roy+Art+School/@22.609356,88.417099,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275f5cb9093b7:0x56024d91bfceb8a3!8m2!3d22.609356!4d88.417099!16s%2Fg%2F11lc5pd0nn?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium flex gap-x-1 items-center hover:bg-gray-100 transition-colors"
              >
                <MapPin size={18} />
                Open in Google Maps
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1906166340887!2d88.41709900000001!3d22.609356000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f5cb9093b7%3A0x56024d91bfceb8a3!2sDebashis%20Dev%20Roy%20Art%20School!5e0!3m2!1sen!2sin!4v1747152512872!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Arcus. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
