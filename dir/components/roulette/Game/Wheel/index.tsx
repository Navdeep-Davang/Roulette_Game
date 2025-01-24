'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
 

  const [winner, setWinner] = useState<string | React.JSX.Element | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const drawWinner = () => {
    const randomIndex = Math.floor(Math.random() * wheelData.length);
    setWinner(wheelData[randomIndex].value);

    // Smooth scroll to the winner slide based on the index
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(randomIndex);
    }
  };



  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust based on your design
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 20,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
    variableWidth: true,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      if (nextSlide < currentSlide) {
        return false; // Prevent backward slide
      }
    },
  };

  
  return (
    <div className="wheel-container w-full">
      <div className="carousel-wrapper select-none w-full flex flex-col items-center">
        <Slider {...settings} 
          className="w-full"
          ref={sliderRef}
        >
          {wheelData.map((item, index) => (
            <div key={index} className="item-card mx-2 justify-center items-center">
              <div
                className={`wheel-item w-[85px] h-20 pt-7 pb-6 rounded-lg flex-col justify-center items-center inline-flex ${item.colorClass}`}
              >
                <div className="wheel-text min-w-8 text-center text-xl font-normal">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={drawWinner}
          className="draw-winner-btn mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Draw Winner
        </button>
        {winner && (
          <div className="winner-display mt-4 text-center text-2xl font-bold text-green-600">
            Winner: {typeof winner === "string" ? winner : "Special Icon"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wheel;
