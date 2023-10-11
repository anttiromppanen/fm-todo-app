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
        <div className="scale-75 md:scale-100">
          <motion.img
            key={darkMode ? "moon" : "sun"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            src={darkMode ? sunIcon : moonIcon}
            alt="Theme toggle button"
          />
        </div>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
