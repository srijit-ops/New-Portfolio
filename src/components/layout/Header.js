import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dynamic from "next/dynamic";

// const DynamicFontAwesomeIcon = dynamic(() => import("@fortawesome/react-fontawesome"), { ssr: false });

function Header() {
  const { theme, setTheme } = useTheme();
  // const [icon, setIcon] = useState(null);

  // useEffect(() => {
  //   const loadIcon = async () => {
  //     const { faMoon, faSun } = await import("@fortawesome/free-solid-svg-icons");
  //     setIcon(theme === "light" ? faMoon : faSun);
  //   };
  //   loadIcon();
  // }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // console.log(theme, "theme check");
  return (
    <div className="bg-white mb-6 lg:px-8 sm:px-5 px-4 py-6 flex justify-between items-center shadow sticky top-0 z-[1000] w-full dark:bg-gray-950">
      <p className="text-gray-950 dark:text-white sm:text-2xl font-semibold text-xl tracking-wider">
        Srijita.
      </p>
      <div
        onClick={toggleTheme}
        className="flex justify-center items-center cursor-pointer"
      >
        {/* {icon && (
          <DynamicFontAwesomeIcon
            icon={icon}
            color="text-gray-950 dark:text-white"
            className="text-2xl"
          />
        )} */}
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          color="text-gray-950 dark:text-white"
          className="text-2xl"
        />
      </div>
    </div>
  );
}

export default Header;
