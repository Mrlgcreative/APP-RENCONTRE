"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme === "dark" ? "hjsd🌙" : "☀️dhssjh "}
    </button>
  );
};

export default ThemeToggle;
