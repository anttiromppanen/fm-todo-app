import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
      document.documentElement.classList.remove("bg-userLightLightGray");
      document.documentElement.classList.add("bg-userDarkDarkBlue");
    } else {
      document.documentElement.classList.remove("bg-userDarkDarkBlue");
      document.documentElement.classList.add("bg-userLightLightGray");
    }

    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      document.documentElement.classList.remove("bg-userLightLightGray");
      document.documentElement.classList.add("bg-userDarkDarkBlue");
    } else {
      document.documentElement.classList.remove("bg-userDarkDarkBlue");
      document.documentElement.classList.add("bg-userLightLightGray");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button type="button" onClick={toggleDarkMode}>
      <AnimatePresence mode="wait">
        <motion.img
          key={darkMode ? "moon" : "sun"}
          initial={{ opacity: 0 }}
          animate={{ scale: 0.75, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.1 }}
          src={darkMode ? sunIcon : moonIcon}
          alt="Theme toggle button"
          className="scale-75"
        />
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
