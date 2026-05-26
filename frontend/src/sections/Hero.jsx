import React from "react";

import { BookOpen, Award, Users, MessageSquare } from "lucide-react";

import main from "../assets/main.jpg";

export default function Hero() {
  const stats = [
    {
      icon: <BookOpen size={28} />,
      count: "44",
      label: "Online Courses",
    },
    {
      icon: <Award size={28} />,
      count: "11",
      label: "Expert Instructor",
    },
    {
      icon: <Users size={28} />,
      count: "275",
      label: "Student Enrolled",
    },
    {
      icon: <MessageSquare size={28} />,
      count: "15",
      label: "Positive Feedback",
    },
  ];

  return (
    <section className="w-full bg-black">
      {/* =========================
          HERO IMAGE SECTION
      ========================= */}
      <div className="w-full">
        <img
          src={main}
          alt="Learn Online"
          className="
            w-full
            h-125
            sm:h-100
            md:h-112.5
            lg:h-125
            object-cover
          "
        />
      </div>

      {/* =========================
          STATS SECTION
      ========================= */}
      <div
        className="
          w-full
          bg-black
          py-8
          md:py-12
        "
      >
        {/* Main Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Container */}
          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-12
              gap-8
              items-center
            "
          >
            {/* =========================
                LEFT CONTENT
            ========================= */}
            <div
              className="
                xl:col-span-2
                flex
                flex-col
                gap-4
                items-start
              "
            >
              {/* Badge */}
              <button
                className="
                  bg-white
                  text-black
                  text-xs
                  font-medium
                  px-4
                  py-2
                  rounded-sm
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Start Your Journey
              </button>

              {/* Main Heading */}
              <h2
                className="
                  text-white
                  text-xl
                  sm:text-2xl
                  font-bold
                "
              >
                Achieve Your Goals
                <br />
                with eLMS
              </h2>
            </div>

            {/* =========================
                STATS CARDS GRID
            ========================= */}
            <div
              className="
                xl:col-span-10
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-5
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    bg-[#2A2A37]
                    rounded-2xl
                    p-4
                    flex
                    items-center
                    gap-4
                    hover:scale-105
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {/* Icon Box */}
                  <div
                    className="
                      w-16
                      h-16
                      bg-white
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      text-black
                      shrink-0
                    "
                  >
                    {stat.icon}
                  </div>

                  {/* Content */}
                  <div>
                    {/* Number */}
                    <h3
                      className="
                        text-white
                        text-2xl
                        font-bold
                      "
                    >
                      {stat.count}
                    </h3>

                    {/* Label */}
                    <p
                      className="
                        text-gray-300
                        text-sm
                        mt-1
                      "
                    >
                      {stat.label}
                    </p>
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
