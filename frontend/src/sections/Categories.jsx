import React from "react";

import {
  ArrowRight,
  Code,
  GraduationCap,
  BarChart3,
  Binary,
  Languages,
  Percent,
  Briefcase,
  LineChart,
} from "lucide-react";

export default function Categories() {

  const categories = [
    {
      title: "Language Learning",
      count: 10,
      icon: <Languages size={34} />,
    },
    {
      title: "Data Science",
      count: 10,
      icon: <Binary size={34} />,
    },
    {
      title: "Finance & Accounting",
      count: 7,
      icon: <Percent size={34} />,
    },
    {
      title: "Business",
      count: 6,
      icon: <Briefcase size={34} />,
    },
    {
      title: "Development",
      count: 1,
      icon: <Code size={34} />,
    },
    {
      title: "IT & Software",
      count: 1,
      icon: <GraduationCap size={34} />,
    },
    {
      title: "Marketing",
      count: 5,
      icon: <BarChart3 size={34} />,
    },
    {
      title: "Personal Development",
      count: 8,
      icon: <LineChart size={34} />,
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-16 md:py-24">

      {/* =========================
          SECTION CONTAINER
      ========================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className="text-center max-w-2xl mx-auto">

          {/* Title */}
          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-black
            "
          >
            Explore Our Top Categories
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              text-gray-600
              leading-7
              text-sm
              md:text-base
            "
          >
            Dive deep into a world of knowledge!
            Explore our top categories, from
            business and technology to creative
            arts and personal development.
          </p>

        </div>

        {/* =========================
            DESKTOP CATEGORIES GRID
        ========================= */}
        <div
          className="
            hidden
            md:grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            mt-14
          "
        >

          {categories.map((cat, idx) => (

            /* CATEGORY CARD */
            <div
              key={idx}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-7
                min-h-50
                hover:border-[#5B5BB7]
                hover:shadow-lg
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
              "
            >

              {/* CATEGORY IMAGE */}
              <div
                className="
                  w-16
                  h-16
                  rounded-xl
                  bg-[#F6F6F6]
                  flex
                  items-center
                  justify-center
                  text-[#5B5BB7]
                "
              >
                {cat.icon}
              </div>

              {/* CATEGORY CONTENT */}
              <div className="mt-7">

                {/* CATEGORY NAME */}
                <h3
                  className="
                    text-xl
                    font-semibold
                    text-black
                  "
                >
                  {cat.title}
                </h3>

                {/* MOBILE CONTENT */}
                <div className="mt-4 md:hidden">

                  <p className="text-gray-600">
                    {cat.count}+ Courses
                  </p>

                </div>

                {/* DESKTOP HOVER CONTENT */}
                <div
                  className="
                    hidden
                    md:flex
                    items-center
                    justify-between
                    mt-5
                  "
                >

                  {/* COURSE COUNT */}
                  <p className="text-gray-600">

                    {cat.count}+ Courses

                  </p>

                  {/* VIEW COURSES LINK */}
                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      text-[#5B5BB7]
                      font-medium
                      opacity-0
                      group-hover:opacity-100
                      translate-x-2.5
                      group-hover:translate-x-0
                      transition-all
                      duration-300
                    "
                  >

                    View Courses

                    <ArrowRight size={16} />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* =========================
            MOBILE CATEGORIES SLIDER
        ========================= */}
        <div
          className="
            md:hidden
            flex
            gap-5
            overflow-x-auto
            scrollbar-hide
            mt-12
            pb-4
          "
        >

          {categories.map((cat, idx) => (

            /* SWIPER SLIDE */
            <div
              key={idx}
              className="
                min-w-70
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-6
                shrink-0
                hover:scale-105
                transition-all
                duration-300
              "
            >

              {/* CATEGORY IMAGE */}
              <div
                className="
                  w-16
                  h-16
                  rounded-xl
                  bg-[#F6F6F6]
                  flex
                  items-center
                  justify-center
                  text-[#5B5BB7]
                "
              >
                {cat.icon}
              </div>

              {/* CATEGORY CONTENT */}
              <div className="mt-6">

                {/* CATEGORY NAME */}
                <h3 className="text-lg font-semibold">
                  {cat.title}
                </h3>

                {/* MOBILE CONTENT */}
                <div className="mt-4 flex items-center justify-between">

                  <p className="text-gray-600">
                    {cat.count}+ Courses
                  </p>

                  <ArrowRight
                    size={18}
                    className="text-[#5B5BB7]"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* =========================
            BOTTOM ACTION AREA
        ========================= */}
        <div className="flex justify-center mt-14">

          {/* ALL CATEGORIES BUTTON */}
          <button
            className="
              bg-[#5B5BB7]
              text-white
              px-8
              py-4
              rounded-lg
              font-medium
              hover:bg-[#fefeff]
              hover:text-black
              hover:scale-105
              transition-all
              duration-300
              shadow-md
            "
          >
            All Categories
          </button>

        </div>

      </div>

    </section>
  );
}