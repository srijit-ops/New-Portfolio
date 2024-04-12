import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'


function Header() {
  const { theme, setTheme } = useTheme();
  console.log(theme, "theme check")
  return (
    <div className="bg-white mb-6 lg:px-8 sm:px-5 px-4 py-6 flex justify-between items-center shadow sticky top-0 z-[1000] w-full dark:bg-gray-950">
      <p className="text-gray-950 dark:text-white font-semibold sm:text-3xl text-xl tracking-wider">
        Srijita.
      </p>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex justify-center items-center cursor-pointer"
      >
        <FontAwesomeIcon icon={theme==="light"?faMoon:faSun} color="text-gray-950 dark:text-white" className="text-2xl"/>
        {/* <i
          className={`fa-solid fa-${
            theme === "light" ? "moon" : "sun"
          } text-gray-950 dark:text-white text-2xl`}
        ></i> */}
      </div>
    </div>
  );
}

export default Header;