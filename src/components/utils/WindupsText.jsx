import React from "react";
import { useWindupString } from "windups";

const WindupsText = () => {
  const [text, { skip }] = useWindupString("Step up your Shoe game with", {
    pace: () => 200,
  });
  return (
    <div
      onClick={skip}
      className="flex justify-center align-center flex-col mb-8 "
    >
      {text}{" "}
      <span className=" bg-gradient-to-r from-orange-600 to-amber-400 rounded-xl px-3 align-center m-auto mt-4">
        SNEAKERSHELF
      </span>
    </div>
  );
};

export default WindupsText;
