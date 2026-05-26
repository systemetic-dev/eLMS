// src/App.jsx
import React from "react";
import Navbar from "./layouts/Navbar";
import Sidebar from "./components/ui/Sidebar"; // Sidebar Import
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import Courses from "./sections/Courses";
import Tutors from "./sections/Tutors";
import WhyChooseUs from "./sections/WhyChooseUs";
import InstructorOnboarding from "./sections/InstructorOnboarding";
import Testimonials from "./sections/Testimonials";
import Footer from "./layouts/Footer";
// import PreviewHeader from "./components/ui/PreviewHeader";
import NewCourses from "./sections/NewCourses";


export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased selection:bg-indigo-500 selection:text-white">
      {/* Global Navigation Layer Hooks */}
      {/* <PreviewHeader /> */}
      <Navbar />
      <Sidebar />

      {/* Main Structural Flow Content */}
      <main>
        <Hero />
        <Categories />
        <Tutors />
        <Courses />
        <NewCourses />
        <InstructorOnboarding />
        <WhyChooseUs />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
