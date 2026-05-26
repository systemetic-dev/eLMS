// src/components/ui/Navbar.jsx

import React, { useState, useEffect } from "react";

import {
  Search,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react";

import logo from "../assets/eLMS.svg";
import englishFlag from "../assets/america.png";

import Sidebar from "../components/ui/Sidebar";

import { useLms } from "../context/LmsContext";

export default function Navbar() {

  const { setIsSidebarOpen } = useLms();

  // =====================================================
  // CATEGORY DROPDOWN STATE
  // =====================================================

  const [categoryOpen, setCategoryOpen] =
    useState(false);

  // =====================================================
  // TYPING EFFECT STATES
  // =====================================================

  const placeholders = [
    "What do you want to learn?",
    "Search programming courses...",
    "Learn React & JavaScript...",
    "Master Data Science...",
    "Explore AI courses...",
  ];

  const [placeholder, setPlaceholder] =
    useState("");

  const [currentText, setCurrentText] =
    useState(0);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isDeleting, setIsDeleting] =
    useState(false);

  // =====================================================
  // TYPING EFFECT
  // =====================================================

  useEffect(() => {

    const currentWord =
      placeholders[currentText];

    const typingSpeed =
      isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {

      setPlaceholder(
        currentWord.substring(
          0,
          currentIndex
        )
      );

      if (
        !isDeleting &&
        currentIndex ===
          currentWord.length
      ) {

        setTimeout(() => {
          setIsDeleting(true);
        }, 1500);

      } else if (
        isDeleting &&
        currentIndex === 0
      ) {

        setIsDeleting(false);

        setCurrentText(
          (prev) =>
            (prev + 1) %
            placeholders.length
        );

      } else {

        setCurrentIndex((prev) =>
          isDeleting
            ? prev - 1
            : prev + 1
        );

      }

    }, typingSpeed);

    return () =>
      clearTimeout(timeout);

  }, [
    currentIndex,
    isDeleting,
    currentText,
  ]);

  // =====================================================
  // CATEGORY DATA
  // =====================================================

  const categories = [
    "Language Learning",
    "Data Science",
    "Finance & Accounting",
    "Business",
    "Development",
    "IT & Software",
    "Marketing",
    "Personal Development",
    "Music",
    "Artificial Intelligence (AI)",
  ];

  return (
    <header
      className="
        w-full
        bg-white
        border-b
        border-gray-200
        relative
        z-40
      "
    >

      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}

      <Sidebar />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP NAVIGATION
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            py-4
          "
        >

          {/* =====================================================
              LEFT SECTION
          ===================================================== */}

          <div className="flex items-center gap-6 lg:gap-8">

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() =>
                setIsSidebarOpen(true)
              }
              className="
                lg:hidden
                hover:scale-110
                transition-all
                duration-300
              "
            >

              <Menu size={28} />

            </button>

            {/* =====================================================
                LOGO
            ===================================================== */}

            <a
              href="#"
              className="inline-block"
            >

              <img
                src={logo}
                alt="eLMS"
                className="
                  h-12
                  sm:h-14
                  md:h-16
                  w-auto
                "
              />

            </a>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <nav className="hidden lg:block">

              <ul className="flex items-center gap-8">

                {[
                  "Home",
                  "Courses",
                  "Instructor",
                  "Help & Support",
                ].map((item, index) => (

                  <li key={index}>

                    <a
                      href="#"
                      className="
                        inline-block
                        text-[17px]
                        text-black
                        hover:text-[#5B5BB7]
                        transition-all
                        duration-300
                      "
                    >
                      {item}
                    </a>

                  </li>

                ))}

              </ul>

            </nav>

          </div>

          {/* =====================================================
              RIGHT SECTION
          ===================================================== */}

          <div className="flex items-center gap-3 sm:gap-4">

            {/* =====================================================
                LANGUAGE SELECTOR
            ===================================================== */}

            <button
              className="
                hidden
                sm:flex
                items-center
                gap-2
                border
                border-gray-300
                px-4
                py-3
                rounded-xl
                hover:border-[#5B5BB7]
                transition-all
                duration-300
              "
            >

              <img
                src={englishFlag}
                alt="English"
                className="
                  w-6
                  h-6
                  rounded-full
                "
              />

              <span className="font-medium">
                EN
              </span>

              <ChevronDown size={18} />

            </button>

            {/* DIVIDER */}

            <div
              className="
                hidden
                lg:block
                h-10
                w-px
                bg-gray-300
              "
            >
            </div>

            {/* =====================================================
                AUTH BUTTONS
            ===================================================== */}

            <div className="flex items-center gap-3">

              {/* SIGN IN */}

              <button
                className="
                  hidden
                  sm:block
                  text-black
                  hover:text-[#5B5BB7]
                  transition-all
                  duration-300
                "
              >
                Sign In
              </button>

              {/* REGISTER BUTTON */}

              <button
                className="
                  bg-black
                  text-white
                  px-4
                  sm:px-5
                  py-3
                  rounded-md
                  font-medium
                  hover:bg-[#1d1d1d]
                  transition-all
                  duration-300
                  text-sm
                  sm:text-base
                "
              >
                Register Now
              </button>

            </div>

          </div>

        </div>

        {/* =====================================================
            SEARCH SECTION
        ===================================================== */}

        <div
          className="
            hidden
            lg:flex
            gap-4
            py-5
            border-t
            border-gray-200
            relative
          "
        >

          {/* =====================================================
              EXPLORE CATEGORY DROPDOWN
          ===================================================== */}

          <div className="relative">

            {/* CATEGORY BUTTON */}

            <button
              onClick={() =>
                setCategoryOpen(!categoryOpen)
              }
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-[#E7E7F2]
                text-[#5B5BB7]
                font-semibold
                px-6
                py-4
                rounded-lg
                transition-all
                duration-300
                min-w-72.5
              "
            >

              {/* CATEGORY ICON */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >

                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                />

                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                />

                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                />

                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                />

              </svg>

              <span>
                Explore Category
              </span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform duration-300
                  ${
                    categoryOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </button>

            {/* =====================================================
                CATEGORY DROPDOWN
            ===================================================== */}

            {categoryOpen && (

              <div
                className="
                  absolute
                  top-full
                  left-0
                  mt-4
                  w-[320px]
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  border
                  border-gray-100
                  overflow-hidden
                  z-50
                "
              >

                <div className="py-2">

                  {categories.map(
                    (category, index) => (

                      <button
                        key={index}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          px-6
                          py-4
                          text-left
                          hover:bg-[#F5F5FA]
                          transition-all
                          duration-200
                        "
                      >

                        <span
                          className="
                            text-[18px]
                            text-black
                          "
                        >
                          {category}
                        </span>

                        <ChevronRight
                          size={18}
                          className="text-black"
                        />

                      </button>
                    )
                  )}

                </div>

              </div>

            )}

          </div>

          {/* =====================================================
              SEARCH AREA
          ===================================================== */}

          <div className="flex flex-1 gap-4">

            {/* SEARCH FORM */}

            <form className="flex flex-1">

              {/* SEARCH INPUT */}

              <input
                type="text"
                placeholder={placeholder}
                className="
                  w-full
                  border
                  border-gray-300
                  px-5
                  py-4
                  rounded-l-lg
                  outline-none
                  focus:border-[#5B5BB7]
                "
              />

              {/* SEARCH BUTTON */}

              <button
                type="submit"
                className="
                  bg-black
                  text-white
                  px-6
                  rounded-r-lg
                  hover:bg-[#1d1d1d]
                  transition-all
                  duration-300
                "
              >

                <Search size={22} />

              </button>

            </form>

            {/* =====================================================
                CART BUTTON
            ===================================================== */}

            <button
              className="
                border
                border-gray-300
                px-5
                rounded-lg
                hover:border-[#5B5BB7]
                transition-all
                duration-300
              "
            >

              <ShoppingCart size={24} />

            </button>

          </div>

        </div>

      </div>

    </header>
  );
}