import React from "react";
import HoverBorderGradient from "../common/HoverBorderGradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

function Footer({ socials }) {
  return (
    <div className="w-full my-10 pt-8 border-t border-t-gray-300 dark:border-t-gray-700">
      <p className="text-gray-700 text-center mb-8 dark:text-gray-400 sm:text-base text-sm">
        @2024 Srijita. All rights reserved.
      </p>
      <div className="flex justify-center items-center flex-wrap mb-8">
        <div className="flex justify-start items-center gap-8">
          {socials.map((item, index) => {
            return (
              <div key={index}>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="a"
                  path={item.path}
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="sm:text-xl text-lg"
                  />
                </HoverBorderGradient>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
