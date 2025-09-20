import React from "react";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 !py-8 !px-4 md:px-16 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="space-y-4">
          <h2 className="text-md md:text-sm pl-1 py-4 lg:text-md font-semibold text-white">
            Quick Links
          </h2>
          <ul className="grid gap-2 !pt-2 text-md md:text-sm lg:text-md">
            <li>
              <Link
                to="/"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                About Us
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                to="/tours/international"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                International travel
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                to="/tours/domestic"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Domestic travel
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                to="/tours/hajj-umrah"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Hajj & Umrah
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Store Address */}
        <div className="space-y-4">
          <h2 className="text-md md:text-sm py-4 lg:text-md font-semibold text-white">
            Our Location
          </h2>
          <div className="text-md !pt-2 md:text-sm lg:text-md">
            <address className="not-italic text-md md:text-sm lg:text-md">
              87-C, 11th Commercial Street,
              <br />
              Suite 2/2, Phase II Extension,
              <br />
              DHA, Karachi-Pakistan
              <br />
              <div className="mt-2 space-y-1">
                <div>
                  <a href="tel:+922135804268" className="hover:text-[#023f82] transition-colors">
                    +9221-35804268
                  </a>
                </div>
                <div>
                  <a href="tel:+922135894268" className="hover:text-[#023f82] transition-colors">
                     +9221-35894268
                  </a>
                </div>
                <div>
                  <a href="tel:+922137220480" className="hover:text-[#023f82] transition-colors">
                     +9221-37220480
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/+923333204268" className="hover:text-[#023f82] transition-colors" target="_blank" rel="noopener noreferrer">
                     +92-333-3204268
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-md md:text-sm lg:text-md font-semibold text-white">
            Follow Us
          </h2>
          <div className="flex !pt-2 !space-x-4">
            <a
              href="https://www.facebook.com"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://wa.me/+923336940534"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                className="w-6 h-6 transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg"
                alt="WhatsApp"
              />
            </a>
            <a
              href="https://www.instagram.com/arjtravelsandtourism?igsh"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                className="w-5 h-5 mt-[2px] transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg"
                alt="Instagram"
              />
            </a>
            </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ARJ Travel & Tours - All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;