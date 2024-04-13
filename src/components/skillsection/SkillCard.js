import React, { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "../common/GradientSVG";
import { useTheme } from "next-themes";
import ProgressProvider from "../common/ProgressProvider";
import Image from "next/image";
import Styles from "../../styles/skills.module.css";

const gradientId = "hello";
const gradientTransform = "rotate(90)";

function SkillCard({ skill, percentage, logo, bg }) {
  const [hoveredPercentage, setHoveredPercentage] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
    setHoveredPercentage(0);
    setTimeout(() => setHoveredPercentage(percentage), 800);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHoveredPercentage(percentage);
  };
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  return (
    <div className={`w-full block`}>
      <GradientSVG
        gradientId={gradientId}
        gradientTransform={gradientTransform}
        color1={"#00ccff"}
        color2={"#d400d4"}
      />
      <ProgressProvider valueStart={10} valueEnd={percentage}>
        {(value) => (
          <CircularProgressbarWithChildren
            strokeWidth={8}
            // value={percentage}
            value={hovered ? hoveredPercentage : percentage}
            styles={{
              path: {
                stroke: `url(#${gradientId})`,
                height: "100%",
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: theme === "dark" ? "#424242" : "#f1f1f1",
              },
            }}
          >
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`sm:w-20 sm:h-20 w-16 h-16 rounded-[50%] p-4  cursor-pointer hover:scale-105 shadow-md hover:shadow-lg overflow-y-hidden flex items-center justify-center`}
              style={{ backgroundColor: bg }}
            >
              <div className={`${Styles.img_container} w-full`}>
                <Image
                  src={logo}
                  alt={skill}
                  layout="fill"
                  className={`${Styles.img}`}
                />
              </div>
            </div>
          </CircularProgressbarWithChildren>
        )}
      </ProgressProvider>
      <p className="text-gray-700 text-sm sm:text-base dark:text-white overflow-y-hidden text-center font-semibold tracking-wide mt-4">
        {skill}
      </p>
    </div>
  );
}

export default SkillCard;
