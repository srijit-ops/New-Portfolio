import React from "react";

function Heading({ name, subtitle }) {
  return (
    <div className="my-6">
      <h1 className="font-semibold text-gray-950 sm:text-4xl text-2xl tracking-wider overflow-y-hidden dark:text-white">
        {name}
      </h1>
      <p className="sm:text-3xl font-semibold text-xl text-[#ff69b4] font-[Caveat] tracking-wide mt-7">
        {subtitle}
      </p>
    </div>
  );
}

export default Heading;
