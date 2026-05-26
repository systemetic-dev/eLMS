import React from "react";

import {
  Bookmark,
  ArrowRight,
} from "lucide-react";

import courseImage from "../assets/course.png";

export default function FreeCourses() {

  const courses = [
    {
      title: "Exploratory Data Analysis (EDA)",
      description:
        "Learn how to explore, summarize, clean, visualize, and interpret data using structured EDA techniques.",
      instructor: "Benjamin Harris",
      level: "Intermediate",
      price: "Free",
      image: courseImage,
    },

    // {
    //   title: "Frontend Web Development",
    //   description:
    //     "Master HTML, CSS, JavaScript, and React to build modern responsive websites.",
    //   instructor: "Sophia Miller",
    //   level: "Beginner",
    //   price: "Free",
    //   image: courseImage,
    // },

    // {
    //   title: "Python for Data Science",
    //   description:
    //     "Learn Python fundamentals, NumPy, Pandas, and visualization for data science.",
    //   instructor: "Olivia Johnson",
    //   level: "Intermediate",
    //   price: "Free",
    //   image: courseImage,
    // },

    // {
    //   title: "Digital Marketing Essentials",
    //   description:
    //     "Understand SEO, social media, email marketing, and online growth strategies.",
    //   instructor: "Ethan Brown",
    //   level: "Advanced",
    //   price: "Free",
    //   image: courseImage,
    // },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-16 md:py-24">

      {/* =========================
          SECTION CONTAINER
      ========================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADER AREA
        ========================= */}
        <div
          className="
            flex
            items-center
            justify-between
            flex-wrap
            gap-4
          "
        >

          {/* TITLE WRAPPER */}
          <div>

            {/* SECTION TITLE */}
            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-black
              "
            >
              Free Courses
            </h2>

          </div>

          {/* OPTIONAL ACTIONS AREA */}
          <div>

            <button
              className="
                hidden
                md:flex
                items-center
                gap-2
                text-[#5B5BB7]
                font-medium
                hover:scale-105
                transition-all
                duration-300
              "
            >

              View All

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

        {/* =========================
            COURSES CONTENT
        ========================= */}
        <div className="mt-14">

          {/* =========================
              DESKTOP COURSES GRID
          ========================= */}
          <div
            className="
              hidden
              md:grid
              grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >

            {courses.map((course, index) => (

              /* COURSE COLUMN */
              <div key={index}>

                {/* COURSE LINK */}
                <a
                  href="#"
                  className="
                    block
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >

                  {/* COURSE CARD */}
                  <div
                    className="
                      bg-white
                      border
                      border-gray-200
                      rounded-2xl
                      overflow-hidden
                      hover:shadow-xl
                      transition-all
                      duration-300
                      group
                    "
                  >

                    {/* =========================
                        THUMBNAIL SECTION
                    ========================= */}
                    <div className="relative p-4">

                      {/* IMAGE WRAPPER */}
                      <div
                        className="
                          rounded-2xl
                          overflow-hidden
                        "
                      >

                        {/* COURSE THUMBNAIL */}
                        <img
                          src={course.image}
                          alt={course.title}
                          className="
                            w-full
                            h-55
                            object-cover
                            group-hover:scale-105
                            transition-all
                            duration-500
                          "
                        />

                      </div>

                      {/* BOOKMARK BUTTON */}
                      <button
                        className="
                          absolute
                          top-6
                          right-6
                          w-10
                          h-10
                          rounded-full
                          bg-white
                          flex
                          items-center
                          justify-center
                          shadow-md
                          hover:scale-110
                          transition-all
                          duration-300
                        "
                      >

                        {/* BOOKMARK ICON */}
                        <Bookmark size={18} />

                      </button>

                    </div>

                    {/* =========================
                        COURSE DETAILS
                    ========================= */}
                    <div className="px-4 pb-5">

                      {/* TOP META */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >

                        {/* DIFFICULTY BADGE */}
                        <span
                          className="
                            bg-[#F1F0FF]
                            text-[#5B5BB7]
                            text-xs
                            px-3
                            py-1
                            rounded-full
                          "
                        >
                          {course.level}
                        </span>

                        {/* EXTRA ACTIONS */}
                        <div />

                      </div>

                      {/* =========================
                          COURSE INFO
                      ========================= */}
                      <div className="mt-5">

                        {/* COURSE TITLE */}
                        <h3
                          className="
                            text-lg
                            font-semibold
                            text-black
                            line-clamp-2
                            group-hover:text-[#5B5BB7]
                            transition-all
                            duration-300
                          "
                        >
                          {course.title}
                        </h3>

                        {/* COURSE DESCRIPTION */}
                        <p
                          className="
                            text-sm
                            text-gray-500
                            leading-6
                            mt-3
                            line-clamp-2
                          "
                        >
                          {course.description}
                        </p>

                      </div>

                      {/* =========================
                          INSTRUCTOR INFO
                      ========================= */}
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-gray-600
                          mt-5
                        "
                      >

                        {/* LABEL */}
                        <span>
                          By :
                        </span>

                        {/* INSTRUCTOR NAME */}
                        <span>
                          {course.instructor}
                        </span>

                      </div>

                      {/* DIVIDER */}
                      <hr className="my-5 border-gray-200" />

                      {/* =========================
                          PRICING AREA
                      ========================= */}
                      <div>

                        {/* FREE PRICE LABEL */}
                        <span
                          className="
                            text-2xl
                            font-bold
                            text-green-600
                          "
                        >
                          {course.price}
                        </span>

                      </div>

                    </div>

                  </div>

                </a>

              </div>

            ))}

          </div>

          {/* =========================
              MOBILE COURSES SLIDER
          ========================= */}
          <div
            className="
              md:hidden
              overflow-x-auto
              scrollbar-hide
              flex
              gap-5
              pb-4
            "
          >

            {/* SWIPER CONTAINER */}
            <div className="flex gap-5">

              {/* SWIPER WRAPPER */}
              {courses.map((course, index) => (

                /* SWIPER SLIDE */
                <div
                  key={index}
                  className="
                    min-w-75
                    shrink-0
                  "
                >

                  {/* COURSE CARD */}
                  <div
                    className="
                      bg-white
                      border
                      border-gray-200
                      rounded-2xl
                      overflow-hidden
                    "
                  >

                    {/* THUMBNAIL SECTION */}
                    <div className="relative p-4">

                      {/* IMAGE WRAPPER */}
                      <div className="rounded-2xl overflow-hidden">

                        {/* COURSE THUMBNAIL */}
                        <img
                          src={course.image}
                          alt={course.title}
                          className="
                            w-full
                            h-55
                            object-cover
                          "
                        />

                      </div>

                      {/* BOOKMARK BUTTON */}
                      <button
                        className="
                          absolute
                          top-6
                          right-6
                          w-10
                          h-10
                          rounded-full
                          bg-white
                          flex
                          items-center
                          justify-center
                          shadow-md
                        "
                      >

                        {/* BOOKMARK ICON */}
                        <Bookmark size={18} />

                      </button>

                    </div>

                    {/* COURSE DETAILS */}
                    <div className="px-4 pb-5">

                      {/* TOP META */}
                      <div>

                        {/* DIFFICULTY BADGE */}
                        <span
                          className="
                            bg-[#F1F0FF]
                            text-[#5B5BB7]
                            text-xs
                            px-3
                            py-1
                            rounded-full
                          "
                        >
                          {course.level}
                        </span>

                      </div>

                      {/* COURSE INFO */}
                      <div className="mt-5">

                        {/* COURSE TITLE */}
                        <h3
                          className="
                            text-lg
                            font-semibold
                          "
                        >
                          {course.title}
                        </h3>

                        {/* COURSE DESCRIPTION */}
                        <p
                          className="
                            text-sm
                            text-gray-500
                            mt-3
                            line-clamp-2
                          "
                        >
                          {course.description}
                        </p>

                      </div>

                      {/* INSTRUCTOR INFO */}
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          text-gray-600
                          mt-5
                        "
                      >

                        <span>
                          By :
                        </span>

                        <span>
                          {course.instructor}
                        </span>

                      </div>

                      {/* DIVIDER */}
                      <hr className="my-5 border-gray-200" />

                      {/* PRICING AREA */}
                      <div>

                        {/* FREE PRICE LABEL */}
                        <span
                          className="
                            text-2xl
                            font-bold
                            text-green-600
                          "
                        >
                          {course.price}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}