import React from "react";
import SkillCard from "./SkillCard";
import Heading from "../common/Heading";

function Skills({ skillData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading
        name={"My Skills."}
        subtitle={"After all, it's just googling though."}
      />
      <div className="flex justify-between items-center flex-wrap flex-row mt-14">
        {skillData.map((item, index) => {
          return (
            <div
              key={index}
              className="xl:w-[9%]  md:w-[15%] sm:w-[35%] w-[35%] sm:mx-6 mx-4 mb-9 flex justify-center items-center"
            >
              <SkillCard
                skill={item.skill}
                percentage={item.percentage}
                logo={item.logo}
                bg={item.bg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
