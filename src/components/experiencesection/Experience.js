import React from "react";
import Heading from "../common/Heading";
import TimelineCard from "../common/TimelineCard";

function Experience({ experienceData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading
        name={"Experience."}
        subtitle={"Exploration of highs and lows."}
      />
      <div>
        <div className="my-4">
          <TimelineCard data={experienceData} />
        </div>
      </div>
    </div>
  );
}

export default Experience;
