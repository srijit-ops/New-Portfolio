import React from "react";
import Heading from "../common/Heading";
// import Button from "./common/Button";
import Image from "next/image";
import Styles from "../../styles/aboutsection.module.css";
import Button from "../common/Button";
import { EvervaultCard, Icon } from "../common/evervault-card";
// import { Player } from "@lottiefiles/react-lottie-player";

function About({ aboutData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5 relative">
      <Heading name={"About Me."} subtitle={"More Than Just 1s and 0s."} />
      <div className="flex justify-between items-center flex-wrap w-full mt-11">
        <div className={`lg:w-4/12 w-full mb-5 lg:mb-0`}>
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[28rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="I'm all about..&#x1F9D0;" hoverText="Coding, nature, birds & movies &#x1F343;"/>
 
      <h2 className="dark:text-gray-600 text-gray-400 mt-4 text-sm font-light text-center w-full">
        Hover over this card to know my life secrets!
      </h2>
    </div>
          
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
          <div className="inline-block mt-6">
            <p
              className={`text-transparent font-semibold text-xl tracking-wide ${Styles.gradientStyle}`}
            >
              Currently looking for new opportunities!
            </p>
          </div>
          <Button name={"Download Resume"}  isLink={true} download={"Srijita Sengupta Resume"} path={"/Srijita Sengupta Resume.pdf"}/>
        </div>
      </div>
    </div>
  );
}

export default About;
