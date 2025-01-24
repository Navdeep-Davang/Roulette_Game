'use client'

import React, { useState } from "react";
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
          alt="0"
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

  const [wheelRotation, setWheelRotation] = useState(0);

  const spinWheel = (targetValue: number) => {
    const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
    const position = order.indexOf(targetValue);
    const rows = 12;
    const card = 85; // Width of the wheel item + margin
    const landingPosition = (rows * 15 * card) + (position * card);
    const randomize = Math.floor(Math.random() * 75) - 37;

    const finalPosition = landingPosition + randomize;
    setWheelRotation(finalPosition);

    // Applying smooth transition and reset
    setTimeout(() => {
      setWheelRotation(-(position * card + randomize)); // Reset position after spinning
    }, 6000); // After 6 seconds, reset the wheel
  };

  return (
    <div className="w-full">
      <div className="wheel-container">
        <div className="wheel-selector"></div>
        <div
          className="wheel-content"
          style={{
            transform: `translate3d(-${wheelRotation}px, 0, 0)`, // Use translate3d for smoother animations
            transition: "transform 6s cubic-bezier(0.1, 0.75, 0.25, 1)", // Add cubic-bezier for smoother easing
            willChange: "transform",
          }}
        >
          {wheelData.map((item, index) => (
            <div
              key={index}
              className={`wheel-item ${item.colorClass}`}
            >
              <div className="wheel-text">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-2">
        <input
          type="number"
          placeholder="Outcome"
          className="px-2 py-1 rounded border border-gray-300"
          min="0"
          max="14"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => spinWheel(12)} // You can replace 12 with the desired value
        >
          Spin Wheel
        </button>
      </div>
    </div>
  );
};

export default Wheel;
