// src/components/ui/Sidebar.jsx

import React, { useState } from "react";

import {
  X,
  ChevronRight,
  ChevronDown,
  User,
  Check,
} from "lucide-react";

import { useLms } from "../../context/LmsContext";

export default function Sidebar() {

  const { isSidebarOpen, setIsSidebarOpen } = useLms();

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const [categoryOpen, setCategoryOpen] =
    useState(false);

  const menuItems = [
    "Home",
    "Courses",
    "Instructor",
    "Help & Support",
  ];

  const categories = [
    "Language Learning",
    "Data Science",
    "Finance & Accounting",
    "Business",
    "Development",
    "IT & Software",
    "Marketing",
    "Music",
    "Artificial Intelligence",
  ];

  return (
    <div
      className={`
        fixed inset-0 z-50 lg:hidden
        transition-all duration-300
        ${
          isSidebarOpen
            ? "visible"
            : "invisible"
        }
      `}
    >

      {/* =====================================================
          BACKDROP OVERLAY
      ===================================================== */}

      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`
          absolute inset-0 bg-black/40
          transition-opacity duration-300
          ${
            isSidebarOpen
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
      </div>

      {/* =====================================================
          SIDEBAR CONTAINER
      ===================================================== */}

      <aside
        className={`
          absolute top-0 left-0 h-full
          w-[90%] sm:max-w-sm
          bg-white
          overflow-y-auto
          transition-transform duration-300
          z-10
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* =====================================================
            SIDEBAR HEADER
        ===================================================== */}

        <div className="
          flex items-center justify-between
          px-4 py-4
          border-b border-gray-200
        ">

          {/* LOGO AREA */}

          <div className="flex items-center">

            {/* LOGO IMAGE */}

            <h1 className="
              text-[42px]
              font-extrabold
              text-[#5B56B9]
              leading-none
            ">
              eLMS
            </h1>

          </div>

          {/* CLOSE BUTTON */}

          <button
            onClick={() =>
              setIsSidebarOpen(false)
            }
            className="
              w-9 h-9
              rounded-lg
              bg-gray-100
              flex items-center justify-center
              text-gray-500
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* =====================================================
            AUTHENTICATION AREA
        ===================================================== */}

        <div className="
          px-4 py-5
          border-b border-gray-200
        ">

          <div className="
            flex flex-col
            items-center
            gap-4
          ">

            {/* SIGN IN BUTTON */}

            <button className="
              text-[18px]
              font-medium
              text-black
            ">
              Sign In
            </button>

            {/* REGISTER BUTTON */}

            <button className="
              w-full
              bg-black
              text-white
              rounded-md
              py-3
              flex items-center justify-center
              gap-2
              font-medium
            ">

              {/* USER ICON */}

              <User size={18} />

              {/* BUTTON TEXT */}

              <span>
                Register Now
              </span>

            </button>

          </div>

        </div>

        {/* =====================================================
            NAVIGATION AREA
        ===================================================== */}

        <div className="px-4 py-3">

          {/* NAVIGATION LIST */}

          <div className="space-y-1">

            {menuItems.map((item, index) => (

              /* NAVIGATION ITEM */

              <button
                key={index}
                className="
                  w-full
                  flex items-center justify-between
                  py-5
                  border-b border-gray-200
                  text-left
                "
              >

                {/* NAVIGATION LINK */}

                <span
                  className={`
                    text-[17px]
                    ${
                      index === 0
                        ? "text-[#5B56B9] font-semibold"
                        : "text-black"
                    }
                  `}
                >
                  {item}
                </span>

                {/* ARROW ICON */}

                <div className="
                  w-8 h-8
                  rounded-full
                  bg-[#5B56B9]
                  text-white
                  flex items-center justify-center
                ">

                  <ChevronRight size={18} />

                </div>

              </button>
            ))}

            {/* =====================================================
                LANGUAGE DROPDOWN
            ===================================================== */}

            <div className="
              border-b border-gray-200
            ">

              {/* DROPDOWN HEADER */}

              <button
                onClick={() =>
                  setLanguageOpen(!languageOpen)
                }
                className="
                  w-full
                  flex items-center justify-between
                  py-5
                "
              >

                {/* SELECTED LANGUAGE */}

                <span className="
                  text-[17px]
                  text-black
                ">
                  English - US
                </span>

                {/* TOGGLE ARROW */}

                <div className="
                  w-8 h-8
                  rounded-full
                  bg-[#5B56B9]
                  text-white
                  flex items-center justify-center
                ">

                  <ChevronDown size={18} />

                </div>

              </button>

              {/* DROPDOWN CONTENT */}

              {languageOpen && (

                <div className="
                  pb-4
                  pl-2
                  space-y-3
                ">

                  {/* LANGUAGE OPTION */}

                  <div className="
                    flex items-center justify-between
                    text-[#5B56B9]
                    font-medium
                  ">

                    <span>
                      English
                    </span>

                    {/* ACTIVE CHECK ICON */}

                    <Check size={18} />

                  </div>

                  <div>
                    Arabic
                  </div>

                </div>
              )}

            </div>

            {/* =====================================================
                CATEGORIES DROPDOWN
            ===================================================== */}

            <div className="
              mt-5
              bg-[#F4F3FA]
              rounded-xl
              overflow-hidden
            ">

              {/* DROPDOWN HEADER */}

              <button
                onClick={() =>
                  setCategoryOpen(!categoryOpen)
                }
                className="
                  w-full
                  flex items-center justify-between
                  p-4
                "
              >

                {/* DROPDOWN LABEL */}

                <span className="
                  text-[#5B56B9]
                  text-[18px]
                  font-medium
                ">
                  Category
                </span>

                {/* TOGGLE ARROW */}

                <div className="
                  w-8 h-8
                  rounded-full
                  bg-[#5B56B9]
                  text-white
                  flex items-center justify-center
                ">

                  <ChevronDown size={18} />

                </div>

              </button>

              {/* CATEGORIES LIST */}

              {categoryOpen && (

                <div className="
                  px-4 pb-4
                  space-y-4
                ">

                  {categories.map(
                    (category, index) => (

                      /* CATEGORY ITEM */

                      <div
                        key={index}
                        className="
                          flex items-center justify-between
                        "
                      >

                        {/* CATEGORY LINK */}

                        <span className="
                          text-gray-700
                          text-sm
                        ">
                          {category}
                        </span>

                        {/* SUBMENU TRIGGER ICON */}

                        <ChevronRight
                          size={16}
                          className="text-gray-500"
                        />

                      </div>
                    )
                  )}

                </div>
              )}

            </div>

          </div>

        </div>

      </aside>

    </div>
  );
}