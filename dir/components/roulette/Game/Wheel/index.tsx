'use client'


import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from 'gsap';


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



const Wheel = () => {
  const wheelRef: React.RefObject<HTMLDivElement | null> = useRef(null);

  const colors = wheelData.map((item) => item.colorClass); // Extract colors from wheelData

  useEffect(() => {
    if (wheelRef.current) {
      const items = wheelRef.current.querySelectorAll('.wheel-item');
      gsap.set(items, {
        backgroundColor: (i) => colors[i % colors.length], // Set background color based on index
        x: (i) => i * (items[0] as HTMLElement).offsetWidth, // Position items in a row
      });
    }
  }, [colors]);

  useEffect(() => {
    if (wheelRef.current) {
      const tl = gsap.timeline({ repeat: -1 }); // Repeat indefinitely
      const items = wheelRef.current.querySelectorAll('.wheel-item');
      const totalWidth = items.length * (items[0] as HTMLElement).offsetWidth;
  
      tl.to(items, {
        duration: 20, // Adjust this value to control the animation speed
        ease: "none",
        x: `+=${totalWidth}`,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth), // Wrap around
        },
      });
    }

    
  }, []);
  
  
  
  
  return (
    
    <div
      className="wheel-container relative select-none overflow-hidden w-[1600px] flex h-20 justify-normal items-center"
      ref={wheelRef}
    >
      {wheelData.map((item, index) => (
        <div
          key={index}
          className={`wheel-item absolute min-w-[95px] `}
        >
          <div
            key={index}
            className={`min-w-[80px] h-20 pt-7 pb-6 rounded-lg flex-col justify-center items-center inline-flex ${item.colorClass}`}
          > 

            <div className="wheel-text min-w-8 text-center text-xl font-normal">{item.value}</div>

          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Wheel;
