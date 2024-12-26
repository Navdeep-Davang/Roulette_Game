import React from "react";
import "./wheel.css";
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
          src="https://via.placeholder.com/35x45"
          alt="Special Icon"
          width={40}
          height={40}
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
      className="wheel-container w-96 h-20 justify-start items-center gap-2.5 inline-flex"
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {wheelData.map((item, index) => (
        <div
          key={index}
          className={`wheel-item w-20 h-20 px-8 pt-7 pb-6 rounded-lg flex-col justify-start items-center inline-flex ${item.colorClass}`}
        >
          <div className="wheel-text text-center text-xl font-normal">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Wheel;
