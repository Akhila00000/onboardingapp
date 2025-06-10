// src/context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");
  const [layout, setLayout] = useState("Cards");

  useEffect(() => {
    document.body.style.background = theme === "Dark" ? "#222" : "#f0f8ff";
    document.body.style.color = theme === "Dark" ? "#eee" : "#111";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, layout, setLayout }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
