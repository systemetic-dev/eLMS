import React from "react";

import {
  Bookmark,
  ArrowRight,
  BadgePercent,
} from "lucide-react";

import img1 from "../assets/caicon1.png";
import img2 from "../assets/caicon2.jpg";
import img3 from "../assets/caicon3.png";
import img4 from "../assets/caicon4.png";
import img5 from "../assets/caicon5.png";
import img6 from "../assets/caicon6.png";

export default function NewlyAddedCourses() {

  const courses = [
    {
      title: "Chatbots & Conversational AI",
      description:
        "Learn how to design, build, train and deploy conversational AI systems.",
      instructor: "Benjamin Harris",
      level: "Beginner",
      price: "$99.00",
      image: img1,
    },

    {
      title: "Transformers (BERT / GPT)",
      description:
        "Learn how to apply BERT and GPT architectures in NLP projects.",
      instructor: "Benjamin Harris",
      level: "Advanced",
      price: "$129.00",
      image: img2,
    },

    {
      title: "Text Preprocessing & NLP",
      description:
        "Learn essential NLP preprocessing and text cleaning pipelines.",
      instructor: "Benjamin Harris",
      level: "Beginner",
      price: "$80.00",
      image: img3,
    },

    {
      title: "CNNs / RNNs / Transformers",
      description:
        "Learn the fundamentals of CNNs, RNNs and Transformers.",
      instructor: "Benjamin Harris",
      level: "Intermediate",
      price: "$110.00",
      image: img4,
    },

    {
      title: "PyTorch Practical Labs",
      description:
        "Hands-on deep learning labs using PyTorch framework.",
      instructor: "Benjamin Harris",
      level: "Intermediate",
      price: "$49.00",
      image: img5,
    },

    {
      title: "Neural Networks Fundamentals",
      description:
        "Learn the core concepts of neural networks and AI systems.",
      instructor: "Benjamin Harris",
      level: "Intermediate",
      price: "$20.00",
      oldPrice: "$59.00",
      discount: "66.1% Off",
      image: img6,
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24">

      {/* =========================
          SECTION CONTAINER
      ========================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADER AREA
        ========================= */}
        <div className="flex items-center justify-between flex-wrap gap-4">

          {/* SECTION TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Newly Added Courses
          </h2>

          {/* BROWSE ALL LINK */}
          <a
            href="#"
            className="
              flex
              items-center
              gap-2
              text-black
              font-medium
              hover:text-[#5B5BB7]
              hover:scale-105
              transition-all
              duration-300
            "
          >

            {/* LINK TEXT */}
            <span>Browse All</span>

            {/* ARROW ICON */}
            <ArrowRight size={18} />

          </a>

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
              xl:grid-cols-3
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

                    <div className="flex">

                      {/* =========================
                          THUMBNAIL SECTION
                      ========================= */}
                      <div className="relative w-[48%] p-3">

                        {/* IMAGE WRAPPER */}
                        <div className="rounded-2xl overflow-hidden">

                          {/* COURSE THUMBNAIL */}
                          <img
                            src={course.image}
                            alt={course.title}
                            className="
                              w-full
                              h-42.5
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
                            top-5
                            right-5
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
                      <div className="w-[52%] py-3 pr-3 flex flex-col">

                        {/* TOP META */}
                        <div className="flex items-center justify-between">

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
                        <div className="mt-4 flex-1">

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
                              mt-2
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
                            text-gray-500
                            mt-4
                          "
                        >

                          {/* LABEL */}
                          <span>By :</span>

                          {/* INSTRUCTOR NAME */}
                          <span>{course.instructor}</span>

                        </div>

                      </div>

                    </div>

                    {/* DIVIDER */}
                    <hr className="border-gray-200" />

                    {/* =========================
                        PRICING AREA
                    ========================= */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        flex-wrap
                        gap-3
                        p-4
                      "
                    >

                      <div className="flex items-center gap-2">

                        {/* CURRENT PRICE */}
                        <span
                          className="
                            text-3xl
                            font-bold
                            text-black
                          "
                        >
                          {course.price}
                        </span>

                        {/* OLD PRICE */}
                        {course.oldPrice && (
                          <span
                            className="
                              text-gray-400
                              line-through
                            "
                          >
                            {course.oldPrice}
                          </span>
                        )}

                      </div>

                      {/* DISCOUNT BADGE */}
                      {course.discount && (

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-red-500
                            text-sm
                            font-medium
                          "
                        >

                          {/* DISCOUNT ICON */}
                          <BadgePercent size={16} />

                          {/* DISCOUNT PERCENTAGE */}
                          <span>{course.discount}</span>

                        </div>

                      )}

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
                    min-w-[320px]
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
                        <Bookmark size={18} />
                      </button>

                    </div>

                    {/* COURSE DETAILS */}
                    <div className="px-4 pb-5">

                      {/* TOP META */}
                      <div>

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

                        <h3 className="text-lg font-semibold">
                          {course.title}
                        </h3>

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
                        <span>By :</span>
                        <span>{course.instructor}</span>
                      </div>

                      {/* DIVIDER */}
                      <hr className="my-5 border-gray-200" />

                      {/* PRICING AREA */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          flex-wrap
                          gap-3
                        "
                      >

                        <div className="flex items-center gap-2">

                          <span
                            className="
                              text-2xl
                              font-bold
                            "
                          >
                            {course.price}
                          </span>

                          {course.oldPrice && (
                            <span
                              className="
                                text-gray-400
                                line-through
                              "
                            >
                              {course.oldPrice}
                            </span>
                          )}

                        </div>

                        {course.discount && (

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-red-500
                              text-sm
                            "
                          >

                            <BadgePercent size={15} />

                            <span>
                              {course.discount}
                            </span>

                          </div>

                        )}

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
