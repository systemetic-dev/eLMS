// src/sections/Tutors.jsx

import React, {
  useState,
} from "react";

import {
  Star,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import tutor1 from "../assets/user_profile_1.jpg";
import tutor2 from "../assets/user_profile_2.jpg";
import tutor3 from "../assets/user_profile_3.jpg";
import tutor4 from "../assets/user_profile_4.jpg";

export default function Tutors() {

  // =====================================================
  // ACTIVE SLIDE
  // =====================================================

  const [activeSlide, setActiveSlide] =
    useState(0);

  // =====================================================
  // TOUCH STATES
  // =====================================================

  const [touchStart, setTouchStart] =
    useState(null);

  const [touchEnd, setTouchEnd] =
    useState(null);

  // =====================================================
  // TUTOR DATA
  // =====================================================

  const tutorsData = [
    {
      name: "Isabella White",
      specialty: "M.A in English Literature",
      rating: 5,
      reviews: 4,
      coursesCount: 14,
      studentsCount: 30,
      image: tutor3,
    },
    {
      name: "Olivia Johnson",
      specialty: "MBA in Business Management",
      rating: 5,
      reviews: 1,
      coursesCount: 6,
      studentsCount: 34,
      image: tutor1,
    },
    {
      name: "Sophia Miller",
      specialty: "M.Sc in Information Technology",
      rating: 5,
      reviews: 1,
      coursesCount: 1,
      studentsCount: 7,
      image: tutor2,
    },
    {
      name: "Ethan Brown",
      specialty: "M.Com in Finance",
      rating: 4,
      reviews: 1,
      coursesCount: 7,
      studentsCount: 7,
      image: tutor4,
    },
  ];

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const nextSlide = () => {

    setActiveSlide((prev) =>
      prev === tutorsData.length - 1
        ? 0
        : prev + 1
    );

  };

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  const prevSlide = () => {

    setActiveSlide((prev) =>
      prev === 0
        ? tutorsData.length - 1
        : prev - 1
    );

  };

  // =====================================================
  // TOUCH EVENTS
  // =====================================================

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {

    setTouchEnd(null);

    setTouchStart(
      e.targetTouches[0].clientX
    );

  };

  const onTouchMove = (e) => {

    setTouchEnd(
      e.targetTouches[0].clientX
    );

  };

  const onTouchEnd = () => {

    if (
      !touchStart ||
      !touchEnd
    ) return;

    const distance =
      touchStart - touchEnd;

    const isLeftSwipe =
      distance > minSwipeDistance;

    const isRightSwipe =
      distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }

    if (isRightSwipe) {
      prevSlide();
    }

  };

  return (
    <section
      className="
        w-full
        bg-[#5752B8]
        py-16
        md:py-24
        overflow-hidden
      "
    >

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="max-w-7xl mx-auto">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            px-4
            sm:px-6
            lg:px-8
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-3xl">

            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                bg-[#706CC4]
                px-5
                py-2
                rounded-full
              "
            >

              <span className="w-5 h-0.5 bg-white" />

              <span
                className="
                  text-white
                  text-sm
                  font-medium
                "
              >
                Expert Educators
              </span>

              <span className="w-5 h-0.5 bg-white" />

            </div>

            {/* TITLE */}

            <h2
              className="
                text-white
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                mt-6
              "
            >
              Learn from Industry Experts and
              Elevate Your Skills
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                text-gray-200
                leading-8
                mt-6
                max-w-2xl
              "
            >
              Learn from the best in the field!
              Our platform connects you with highly
              qualified instructors who bring knowledge,
              experience, and passion to every lesson.
            </p>

          </div>

          {/* =====================================================
              BUTTON
          ===================================================== */}

          <button
            className="
              border
              border-white
              text-white
              px-7
              py-4
              rounded-lg
              flex
              items-center
              gap-3
              hover:bg-white
              hover:text-[#5752B8]
              transition-all
              duration-500
              font-medium
              w-fit
            "
          >

            <span>
              View All Tutors
            </span>

            <ArrowRight size={18} />

          </button>

        </div>

        {/* =====================================================
            SLIDER SECTION
        ===================================================== */}

        <div className="relative mt-16">

          {/* =====================================================
              LEFT BUTTON
          ===================================================== */}

          <button
            onClick={prevSlide}
            className="
              hidden
              lg:flex
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              z-30
              w-14
              h-14
              rounded-full
              bg-white
              items-center
              justify-center
              shadow-2xl
              hover:scale-110
              transition-all
              duration-500
            "
          >

            <ArrowLeft
              size={22}
              className="text-[#5752B8]"
            />

          </button>

          {/* =====================================================
              RIGHT BUTTON
          ===================================================== */}

          <button
            onClick={nextSlide}
            className="
              hidden
              lg:flex
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              z-30
              w-14
              h-14
              rounded-full
              bg-white
              items-center
              justify-center
              shadow-2xl
              hover:scale-110
              transition-all
              duration-500
            "
          >

            <ArrowRight
              size={22}
              className="text-[#5752B8]"
            />

          </button>

          {/* =====================================================
              MOBILE BUTTONS
          ===================================================== */}

          <div
            className="
              flex
              lg:hidden
              justify-center
              gap-4
              mb-8
            "
          >

            <button
              onClick={prevSlide}
              className="
                w-12
                h-12
                rounded-full
                bg-white
                flex
                items-center
                justify-center
              "
            >

              <ArrowLeft
                size={20}
                className="text-[#5752B8]"
              />

            </button>

            <button
              onClick={nextSlide}
              className="
                w-12
                h-12
                rounded-full
                bg-white
                flex
                items-center
                justify-center
              "
            >

              <ArrowRight
                size={20}
                className="text-[#5752B8]"
              />

            </button>

          </div>

          {/* =====================================================
              SLIDER WRAPPER
          ===================================================== */}

          <div className="overflow-hidden px-4 lg:px-20">

            {/* =====================================================
                SLIDER TRACK
            ===================================================== */}

            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="
                flex
                transition-transform
                duration-700
                ease-in-out
                touch-pan-y
                select-none
              "
              style={{
                transform: `translateX(-${activeSlide * 100}%)`,
              }}
            >

              {tutorsData.map((tutor, index) => (

                <div
                  key={index}
                  className="
                    min-w-full
                    flex
                    justify-center
                  "
                >

                  {/* =====================================================
                      CARD
                  ===================================================== */}

                  <div
                    className="
                      w-full
                      max-w-105
                      bg-white
                      rounded-[28px]
                      overflow-hidden
                      shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                      hover:-translate-y-2
                      hover:scale-[1.01]
                      transition-all
                      duration-500
                    "
                  >

                    {/* =====================================================
                        TOP AREA
                    ===================================================== */}

                    <div
                      className="
                        p-6
                        flex
                        flex-col
                        sm:flex-row
                        gap-5
                        border-b
                        border-gray-100
                      "
                    >

                      {/* IMAGE */}

                      <div
                        className="
                          w-24
                          h-24
                          rounded-2xl
                          overflow-hidden
                          shrink-0
                        "
                      >

                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          className="
                            w-full
                            h-full
                            object-cover
                          "
                        />

                      </div>

                      {/* DETAILS */}

                      <div className="flex-1">

                        <h3
                          className="
                            text-[22px]
                            font-semibold
                            text-black
                          "
                        >
                          {tutor.name}
                        </h3>

                        <p
                          className="
                            text-gray-500
                            mt-2
                            leading-7
                          "
                        >
                          {tutor.specialty}
                        </p>

                        {/* RATING */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            mt-4
                          "
                        >

                          <Star
                            size={16}
                            fill="#f59e0b"
                            color="#f59e0b"
                          />

                          <span className="text-sm text-gray-700">
                            {tutor.rating}
                            {" "}
                            ({tutor.reviews} Reviews)
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* =====================================================
                        STATS
                    ===================================================== */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        divide-y
                        sm:divide-y-0
                        sm:divide-x
                        divide-gray-100
                      "
                    >

                      {/* COURSES */}

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          p-5
                        "
                      >

                        <BookOpen
                          size={18}
                          className="text-[#5752B8]"
                        />

                        <span className="text-sm text-gray-700 leading-6">
                          {tutor.coursesCount}
                          {" "}
                          Courses Available
                        </span>

                      </div>

                      {/* STUDENTS */}

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          p-5
                        "
                      >

                        <GraduationCap
                          size={18}
                          className="text-[#5752B8]"
                        />

                        <span className="text-sm text-gray-700 leading-6">
                          {tutor.studentsCount}
                          {" "}
                          Enrolled Students
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* =====================================================
              PAGINATION AREA
          ===================================================== */}

          <div className="flex justify-center mt-10 gap-3">

            {tutorsData.map((_, index) => (

              <button
                key={index}
                onClick={() =>
                  setActiveSlide(index)
                }
                className={`
                  w-3
                  h-3
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeSlide === index
                      ? "bg-white scale-125"
                      : "bg-white/40"
                  }
                `}
              >
              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}