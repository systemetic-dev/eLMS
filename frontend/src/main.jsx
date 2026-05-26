// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { LmsProvider } from "./context/LmsContext";

import "./index.css";

// =====================================================
// LENIS
// =====================================================

import Lenis from "lenis";

// Create Lenis Instance

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.2,
});

// RAF Loop

function raf(time) {

  lenis.raf(time);

  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// =====================================================
// RENDER APP
// =====================================================

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <LmsProvider>

      <App />

    </LmsProvider>

  </React.StrictMode>

);