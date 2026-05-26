// src/sections/Testimonials.jsx

import React, { useState } from "react";

import {
  Star,
} from "lucide-react";

export default function Testimonials() {

  const feedbackGroups = [

    // ================= SLIDE 1 =================

    [
      {
        name: "Payal Patel",
        role: "eLMS Student",
        rating: 5,
        feedback:
          "Simple, practical, and straight to the point. One of the most useful courses I've come across. Highly recommended!",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
      },

      {
        name: "Divy Jani",
        role: "eLMS Student",
        rating: 5,
        feedback:
          "Clear concepts. Practical learning. Easy to understand. One of the best courses out there!!!",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
      },

      {
        name: "Sophia Miller",
        role: "eLMS Student",
        rating: 5,
        feedback:
          "No boring theory, no confusion — just clear and practical learning. A solid choice if you actually want to learn.",
        avatarUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
      },
    ],

    // ================= SLIDE 2 =================

    [
      {
        name: "Benjamin Harris",
        role: "eLMS Student",
        rating: 5,
        feedback:
          "This course helped me clearly understand concepts in a very engaging and practical way.",
        avatarUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
      },

      {
        name: "Sophia Miller",
        role: "eLMS Student",
        rating: 5,
        feedback:
          "Totally worth it! The content is structured perfectly and easy to follow.",
        avatarUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
      },

      {
        name: "Emma Watson",
        role: "eLMS Student",
        rating: 4,
        feedback:
          "The exercises were realistic and helped me apply concepts professionally.",
        avatarUrl:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
      },
    ],
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-20 overflow-hidden">

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="text-center mb-14">

          {/* SECTION TITLE */}

          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-5">
            What Our Learners Say
          </h2>

          {/* SECTION DESCRIPTION */}

          <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
            Real feedback from students who have taken our courses.
            See how our lessons have helped them grow!
          </p>

        </div>

        {/* =====================================================
            TESTIMONIALS AREA
        ===================================================== */}

        <div className="relative">

          {/* BACKGROUND DECORATION */}

          <div className="
            absolute
            inset-0
            bg-[#4D49B3]
            rounded-[30px]
            overflow-hidden
            z-0
          ">

            {/* Decorative Pattern */}

            <div className="
              absolute
              inset-0
              opacity-20
              bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
              bg-size-[30px_30px]
            ">
            </div>

          </div>

          {/* =====================================================
              TESTIMONIALS SLIDER
          ===================================================== */}

          <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-12 sm:py-16">

            {/* SWIPER CONTAINER */}

            <div className="overflow-hidden">

              {/* SWIPER WRAPPER */}

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              >

                {feedbackGroups.map((group, groupIndex) => (

                  /* TESTIMONIAL SLIDE */

                  <div
                    key={groupIndex}
                    className="
                      min-w-full
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      xl:grid-cols-3
                      gap-6
                    "
                  >

                    {group.map((item, index) => (

                      /* TESTIMONIAL CARD */

                      <div
                        key={index}
                        className="
                          bg-white
                          rounded-2xl
                          p-6
                          shadow-lg
                          min-h-62.5
                          flex
                          flex-col
                          justify-between
                        "
                      >

                        {/* USER HEADER */}

                        <div className="flex items-start justify-between mb-6">

                          {/* LEFT SIDE */}

                          <div className="flex items-center gap-4">

                            {/* PROFILE IMAGE AREA */}

                            <div className="
                              w-14
                              h-14
                              rounded-full
                              border-2
                              border-[#5B56B9]
                              p-0.5
                              shrink-0
                            ">

                              {/* USER IMAGE */}

                              <img
                                src={item.avatarUrl}
                                alt={item.name}
                                className="
                                  w-full
                                  h-full
                                  rounded-full
                                  object-cover
                                "
                              />

                            </div>

                            {/* USER DETAILS */}

                            <div>

                              {/* USER NAME */}

                              <h4 className="font-semibold text-[#111] text-lg">
                                {item.name}
                              </h4>

                              {/* USER ROLE */}

                              <p className="text-gray-500 text-sm">
                                {item.role}
                              </p>

                            </div>

                          </div>

                          {/* RATING BADGE */}

                          <div className="
                            bg-[#F4A100]
                            text-white
                            px-3
                            py-1
                            rounded-full
                            flex
                            items-center
                            gap-1
                            text-sm
                            font-semibold
                          ">

                            {/* STAR ICON */}

                            <Star size={14} fill="white" />

                            {/* RATING NUMBER */}

                            {item.rating}

                          </div>

                        </div>

                        {/* REVIEW CONTENT */}

                        <p className="
                          text-gray-700
                          leading-8
                          text-sm
                          sm:text-base
                        ">
                          {item.feedback}
                        </p>

                      </div>
                    ))}

                  </div>
                ))}

              </div>

            </div>

            {/* =====================================================
                PAGINATION AREA
            ===================================================== */}

            <div className="flex justify-center mt-10 gap-3">

              {feedbackGroups.map((_, index) => (

                /* PAGINATION BULLETS */

                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
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

      </div>

    </section>
  );
}