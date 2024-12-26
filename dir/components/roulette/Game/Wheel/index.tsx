import React from "react";
import Image from "next/image";

const Wheel = () => {
  const wheelData = [
    { value: "14", colorClass: "gradient-dark" },
    { value: "3", colorClass: "gradient-red" },
    { value: "12", colorClass: "gradient-dark" },
    { value: "1", colorClass: "gradient-red" },
    { value: "12", colorClass: "gradient-dark" },
    { value: "5", colorClass: "gradient-red" },
    { value: "10", colorClass: "gradient-dark" },
    { value: "7", colorClass: "gradient-red" },
    { value: "8", colorClass: "gradient-dark" },
    {
      value: (
        <Image
          className="wheel-icon"
          src="/roulette/Sign.png"
          alt="Special Icon"
          width={70}
          height={70}
        />
      ),
      colorClass: "gradient-green",
    },
    { value: "9", colorClass: "gradient-red" },
    { value: "8", colorClass: "gradient-dark" },
    { value: "11", colorClass: "gradient-red" },
    { value: "14", colorClass: "gradient-dark" },
    { value: "1", colorClass: "gradient-red" },
  ];

  return (
    <div
      className="wheel-container overflow-clip w-full flex h-20 justify-center items-center gap-2.5"
    >
      {wheelData.map((item, index) => (
        <div
          key={index}
          className={`wheel-item min-w-[85px] h-20 pt-7 pb-6 rounded-lg flex-col justify-center items-center inline-flex ${item.colorClass}`}
        >
          <div className="wheel-text min-w-8 text-center text-xl font-normal">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Wheel;
