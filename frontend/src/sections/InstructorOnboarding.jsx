// src/sections/InstructorOnboarding.jsx

import React from "react";

export default function InstructorOnboarding() {
  const steps = [
    {
      step: "Step 1",
      title: "Sign Up and Create an Account",
      desc: "Register on the platform and complete your profile.",
      image:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      step: "Step 2",
      title: "Fill Out the Instructor Application Form",
      desc:
        "Provide details about your expertise, teaching experience, and the course you'd like to create.",
      image:
        "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      step: "Step 3",
      title: "Prepare Your Course Content",
      desc:
        "Plan and create your course material, including lessons, videos, and resources.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
    },
    {
      step: "Step 4",
      title: "Upload and Submit Your Course",
      desc:
        "Use the platform's tools to upload and organize your course, then submit it for review and approval.",
      image:
        "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },
  ];

  return (
    <section className="bg-[#4B46A3] py-16 px-5">

      <div className="max-w-7xl mx-auto">

        {/* ================= TOP CONTENT AREA ================= */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">

          {/* LEFT CONTENT */}

          <div className="max-w-3xl">

            {/* SECTION HEADING */}

            <h2 className="text-white text-3xl md:text-4xl font-bold leading-[1.3] mb-4">
              Unlock Your Teaching Potential:
              <br />
              Join Our Instructor Community
            </h2>

            {/* DESCRIPTION */}

            <p className="text-gray-200 text-sm md:text-base leading-7">
              Join our platform and share your expertise with
              students worldwide. Follow simple steps to create
              your course and start teaching today!
            </p>

          </div>

          {/* RIGHT CONTENT */}

          <div className="w-full lg:w-auto">

            {/* CTA BUTTON */}

            <button className="bg-white text-[#4B46A3] font-semibold px-7 py-4 rounded-md text-base hover:scale-105 transition duration-300 w-full lg:w-auto">
              Become an Instructor
            </button>

          </div>

        </div>

        {/* ================= STEPS GRID ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 text-center flex flex-col items-center min-h-105 hover:-translate-y-2 transition duration-300"
            >

              {/* STEP BADGE */}

              <div className="bg-gray-100 text-[#4B46A3] text-sm font-semibold px-5 py-2 rounded-full mb-8">
                {item.step}
              </div>

              {/* IMAGE */}

              <div className="w-full h-42.5 flex items-center justify-center mb-6">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-35 h-35 object-contain"
                />

              </div>

              {/* STEP CONTENT */}

              <div className="flex flex-col gap-3">

                {/* STEP TITLE */}

                <h3 className="text-[#2A2A2A] text-lg font-bold leading-7">
                  {item.title}
                </h3>

                {/* STEP DESCRIPTION */}

                <p className="text-gray-500 text-sm leading-7">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}