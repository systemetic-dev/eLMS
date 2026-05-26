import React from "react";

import {
  CheckCircle2,
  Monitor,
  BookOpen,
} from "lucide-react";

import footerImg from "../assets/foter.png";

export default function WhyChooseUs() {

  const features = [
    "Easily create engaging courses with user-friendly tools.",
    "Boost engagement with interactive quizzes and videos.",
    "Personalize experiences with customizable dashboards.",
    "Track progress effectively with detailed analytics.",
    "Rely on 24/7 support for uninterrupted learning.",
  ];

  return (
    <section className="bg-[#F5F5F5] overflow-hidden py-14 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* =====================================================
              LEFT CONTENT AREA
          ===================================================== */}

          <div className="flex flex-col order-2 lg:order-1">

            {/* INTRO CONTENT */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 sm:px-5 py-2 shadow-sm mb-5 sm:mb-6">

                {/* LEFT DIVIDER LINE */}
                <span className="w-5 sm:w-6 h-0.5 bg-[#5B56B9]"></span>

                {/* BADGE TEXT */}
                <span className="text-xs sm:text-sm font-medium text-[#5B56B9] whitespace-nowrap">
                  Why Choose Us
                </span>

                {/* RIGHT DIVIDER LINE */}
                <span className="w-5 sm:w-6 h-0.5 bg-[#5B56B9]"></span>

              </div>

              {/* MAIN HEADING */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] leading-[1.3] mb-5 sm:mb-6 max-w-155">
                Transform Knowledge Sharing with Our
                Cutting-Edge LMS
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-155 mb-8 sm:mb-10">
                Our online course platform redefines learning
                with innovative features like interactive content,
                real-time progress tracking, and seamless integrations.
              </p>

            </div>

            {/* FEATURES LIST */}
            <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                >

                  {/* CHECK ICON */}
                  <div className="mt-1 shrink-0">

                    <CheckCircle2
                      size={18}
                      className="text-[#5B56B9]"
                    />

                  </div>

                  {/* FEATURE TEXT */}
                  <p className="text-[#222] text-sm sm:text-base leading-6 sm:leading-7">
                    {feature}
                  </p>

                </div>
              ))}

            </div>

            {/* CTA BUTTON */}
            <div>

              <button className="bg-[#5B56B9] hover:bg-[#4A45A3] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition duration-300 shadow-md text-sm sm:text-base w-full sm:w-auto">
                Join for Free
              </button>

            </div>

          </div>

          {/* =====================================================
              RIGHT IMAGE AREA
          ===================================================== */}

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">

            {/* IMAGE WRAPPER */}
            <div className="relative w-full max-w-162.5">

              

              {/* MAIN IMAGE */}
              <div className="relative z-10">

                <img
                  src={footerImg}
                  alt="Why Choose Us"
                  className="w-full h-auto object-contain"
                />

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}