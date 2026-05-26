import google from "../assets/google.svg";
import ios from "../assets/ios.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#010211] text-gray-300 pt-10 md:pt-14">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Bar */}
        <div className="bg-[#2A2A37] rounded-2xl p-6 md:p-8 lg:p-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Address */}
            <div className="flex items-start gap-4 lg:border-r border-[#9797a547] lg:pr-8">

              <div className="bg-[#FFFFFF1A] p-3 rounded-full shrink-0">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  Address
                </h3>

                <p className="text-sm leading-6 mt-1">
                  #262-263, Time Square Empire,
                  SH 42 Mirjapar Highway,
                  Bhuj - Kutch 370001 Gujarat India.
                </p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-4 lg:border-r border-[#9797a547] lg:px-8">

              <div className="bg-[#FFFFFF1A] p-3 rounded-full shrink-0">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zm-1 4.236l-8 6.4-8-6.4V5l8 6 8-6v2.236z" />
                </svg>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  Mail Us
                </h3>

                <a
                  href="mailto:Support@wrteam.in"
                  className="inline-block text-sm mt-1 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Support@wrteam.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 lg:pl-8">

              <div className="bg-[#FFFFFF1A] p-3 rounded-full shrink-0">
                <svg
                  className="text-white"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012 4.11 2 2 0 014 2h3a2 2 0 012 1.72 12.05 12.05 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  Call Us
                </h3>

                <a
                  href="tel:+919797945459"
                  className="inline-block text-sm mt-1 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  +91 97979 45459
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 md:py-16">

          {/* About */}
          <div>

            <h2 className="text-white text-xl font-semibold mb-5">
              About Us
            </h2>

            <p className="text-sm leading-7 mb-6">
              Empowering learners and educators worldwide,
              our Learning Management System offers a seamless
              platform for online education.
            </p>

            <h3 className="text-white font-medium mb-4">
              Follow Us
            </h3>

            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFFFFF1A]
                flex items-center justify-center
                hover:bg-white hover:text-black hover:scale-110
                transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFFFFF1A]
                flex items-center justify-center
                hover:bg-white hover:text-black hover:scale-110
                transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFFFFF1A]
                flex items-center justify-center
                hover:bg-white hover:text-black hover:scale-110
                transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFFFFF1A]
                flex items-center justify-center
                hover:bg-white hover:text-black hover:scale-110
                transition-all duration-300"
              >
                <FaXTwitter size={16} />
              </a>

            </div>
          </div>

          {/* Useful Links */}
          <div>

            <h2 className="text-white text-xl font-semibold mb-5">
              Useful Links
            </h2>

            <ul className="space-y-4 text-sm">

              {[
                "Home",
                "About Us",
                "Courses",
                "Instructor",
                "Help & Support",
                "Contact Us",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="inline-block hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Legal Policies */}
          <div>

            <h2 className="text-white text-xl font-semibold mb-5">
              Legal Policies
            </h2>

            <ul className="space-y-4 text-sm">

              {[
                "Cookie Policy",
                "Privacy Policy",
                "Terms & Condition",
                "Refund Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="inline-block hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Mobile App */}
          <div>

            <h2 className="text-white text-xl font-semibold mb-5">
              Get the Mobile App
            </h2>

            <p className="text-sm leading-7 mb-6">
              Learn anytime, anywhere with our mobile app!
              Download now to access courses, track progress,
              and enjoy seamless learning on the go.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#"
                className="hover:scale-105 transition-all duration-300"
              >
                <img
                  src={google}
                  alt="Google Play"
                  className="h-14 w-auto"
                />
              </a>

              <a
                href="#"
                className="hover:scale-105 transition-all duration-300"
              >
                <img
                  src={ios}
                  alt="App Store"
                  className="h-14 w-auto"
                />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#2A2A37] py-5 mt-4">

        <div className="max-w-7xl mx-auto px-4 text-center text-sm">

          <p>
            Copyright © 2026{" "}

            <a
              href="https://wrteam.in"
              className="inline-block text-white font-semibold underline hover:scale-105 transition-all duration-300"
            >
              WRTeam
            </a>

            . All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;