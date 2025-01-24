'use client'

import React, { useState, useRef, useEffect } from 'react';

const RouletteWheel: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [outcome, setOutcome] = useState<number | null>(null);
  const wheelRef = useRef<HTMLDivElement | null>(null);

  // Initialize the wheel when the component mounts
  const initWheel = () => {
    const row = ["1", "14", "2", "13", "3", "12", "4", "0", "11", "5", "10", "6", "9", "7", "8"]; 

    const colors = ["red", "black", "red", "black", "red", "black", "red", "green", "black", "red", "black", "red", "black", "red", "black"];
  
    const wheel = wheelRef.current;
    if (wheel) {
      const rowsCount = 29;  // Ensure enough rows for proper spin
      const rows = Array.from({ length: rowsCount }, () => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach((number, idx) => {
          const cardElement = document.createElement('div');
          cardElement.classList.add('card', colors[idx]);
          if (number === "0") {
            const img = document.createElement('img');
            img.classList.add('wheel-icon');
            img.src = '/roulette/Sign.png';
            img.alt = '0';
            img.width = 70;
            img.height = 70;
            cardElement.appendChild(img);
          } else {
            cardElement.textContent = number;
          }
          rowElement.appendChild(cardElement);
        });
        return rowElement;
      });

      rows.forEach(rowElement => wheel.appendChild(rowElement));
    }
  };
  
  
  // Function to spin the wheel based on the outcome
  const spinWheel = (roll: number) => {
    if (wheelRef.current && !spinning) {
      setSpinning(true);
      const wheel = wheelRef.current;
      const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
      const position = order.indexOf(roll);
  
      const rows = 12;
      const cardWidth = 85 + 3 * 2;
      const landingPosition = rows * 15 * cardWidth + position * cardWidth;
  
      const randomize = Math.floor(Math.random() * 85) - 85 / 2;
      const landingPositionWithRandomize = landingPosition + randomize;
  
      console.log(`Spin Position: ${position}`);
      console.log(`Card Width: ${cardWidth}`);
      console.log(`Landing Position: ${landingPosition}`);
      console.log(`Randomize: ${randomize}`);
      console.log(`Landing Position with Randomize: ${landingPositionWithRandomize}`);

      const randomX = Math.floor(Math.random() * 50) / 100;
      const randomY = Math.floor(Math.random() * 20) / 100;
  
      wheel.style.transitionTimingFunction = `cubic-bezier(0, ${randomX}, ${randomY}, 1)`;
      wheel.style.transitionDuration = '6s';
      wheel.style.transform = `translate3d(-${landingPositionWithRandomize}px, 0, 0)`;
  
      setTimeout(() => {
        // Disable transition for the instant reset
        wheel.style.transition = 'none';
        const resetTo = -(position * cardWidth + randomize);
        wheel.style.transform = `translate3d(${resetTo}px, 0, 0)`;
  
        // Force a reflow to apply the transform without transition
        void wheel.offsetHeight;
  
        // Re-enable transitions for future spins
        wheel.style.transition = '';
        setSpinning(false);
      }, 6000);
    }
  };
  
  

  // Handle Spin button click
  const handleSpin = () => {
    if (outcome !== null && outcome >= 0)  {
      spinWheel(outcome);
    }
  };

  useEffect(() => {
    initWheel();
  }, []);

  return (
    <div className="bg-[#191B28] p-8 w-full flex flex-col items-center">
      <div className="roulette-wrapper relative flex justify-center w-full mx-auto overflow-hidden">
        <div className="selector absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-500 h-full z-20" />
        <div
          ref={wheelRef}
            className="wheel w-full flex justify-center items-center transition-transform duration-[6s] ease-in-out"
        />
      </div>

      <div className="mt-8 text-center">
        <input
          className="p-2 rounded-md bg-white text-black"
          placeholder="Enter outcome"
          type="number"
          value={outcome ?? ''}
          onChange={(e) => setOutcome(Number(e.target.value))}
        />
        <button
          className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleSpin}
          disabled={spinning}
        >
          {spinning ? 'Spinning...' : 'Spin Wheel'}
        </button>
      </div>
    </div>
  );
};

export default RouletteWheel;
