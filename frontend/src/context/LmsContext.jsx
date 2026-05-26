// src/context/LmsContext.jsx
import React, { createContext, useContext, useState } from "react";

const LmsContext = createContext();

export function LmsProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar trigger state

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <LmsContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        cartCount,
        setCartCount,
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </LmsContext.Provider>
  );
}

export const useLms = () => useContext(LmsContext);
