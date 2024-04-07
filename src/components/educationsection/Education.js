import React from "react";
import TimelineCard from "./TimelineCard";
import Heading from "../common/Heading";

function Education({ educationData }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading name={"Education."} subtitle={"My academic journey."} />
      <div>
        <div className="my-4">
          <TimelineCard data={educationData} />
        </div>
      </div>
    </div>
  );
}

export default Education;