'use client'
import { useState, useEffect } from "react";

function useColorMode() {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('color-mode') : null;
    if (savedMode) {
      setColorMode(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorMode);
    localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  const toggleMode = () =>
    setColorMode((val) => (val === "light" ? "dark" : "light"));

  return [colorMode, toggleMode];
}

export default useColorMode;
