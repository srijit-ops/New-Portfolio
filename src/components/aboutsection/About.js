import React from "react";
import Heading from "../common/Heading";
// import Button from "./common/Button";
import Image from "next/image";
import Styles from "../../styles/aboutsection.module.css";
import Button from "../common/Button";
// import { Player } from "@lottiefiles/react-lottie-player";

function About({ aboutData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5 relative">
      <Heading name={"About Me."} subtitle={"More Than Just 1s and 0s."} />
      <div className="flex justify-between items-center flex-wrap w-full mt-11">
        <div className={`lg:w-4/12 w-full mb-5 lg:mb-0`}>
          {/* <Player
        src={aboutData.lottie}
        className="w-full h-full"
        loop
        autoplay
        // style={{ height: "250px", width: "250px" }}
      /> */}
        </div>
        <div className={`lg:w-7/12 w-full`}>
          <p className="text-gray-700 tracking-wide leading-8 dark:text-[#94949c]">
            {aboutData.about}
          </p>
          {/* <div className="inline-block mt-6">
            <p
              className={`text-transparent font-semibold text-xl tracking-wide ${Styles.gradientStyle}`}
            >
              {aboutData.exp_year} years of expertise.
            </p>
          </div> */}
          <Button name={"Download Resume"}  isLink={true} download={"Srijita Sengupta Resume"} path={"/Srijita Sengupta Resume.pdf"}/>
        </div>
      </div>
    </div>
  );
}

export default About;
