import React from "react";

const GameOverlay = ({ message = "Rolling In", timer = "10 : 00" }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-[#0c1220]/70 z-10">
      <div className="w-full h-full pt-24 pb-24 flex flex-col justify-center items-center">
        <div className="text-center text-white text-2xl font-normal uppercase leading-loose">
          {message}
        </div>
        <div className="text-white text-3xl font-normal leading-10">
          {timer}
        </div>
      </div>
    </div>
  );
};

export default GameOverlay;
