'use client'

import { useRouletteStore } from '@/dir/states/roulette/RouletteWheel';
import React, { useRef, useEffect } from 'react';

const RouletteWheel: React.FC = () => {
  const { spinning, outcome, stopSpin } = useRouletteStore();
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
  
  useEffect(() => {
    initWheel();
  }, []);
  


  // Function to spin the wheel based on the outcome
  useEffect(() => {
    if (spinning && outcome !== null && wheelRef.current) {
      const wheel = wheelRef.current;
      const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
      const position = order.indexOf(outcome);
      const rows = 12;
      const cardWidth = 85 + 3 * 2;
      const landingPosition = rows * 15 * cardWidth + position * cardWidth;
      const randomize = Math.floor(Math.random() * 85) - 85 / 2;
      const landingPositionWithRandomize = landingPosition + randomize;

      wheel.style.transitionTimingFunction = `cubic-bezier(0, ${Math.random()}, ${Math.random()}, 1)`;
      wheel.style.transitionDuration = '6s';
      wheel.style.transform = `translate3d(-${landingPositionWithRandomize}px, 0, 0)`;

      setTimeout(() => {
        // Disable transition for the instant reset
        wheel.style.transition = 'none';
        const resetTo = -(position * cardWidth + randomize);
        wheel.style.transform = `translate3d(${resetTo}px, 0, 0)`;
        void wheel.offsetHeight; // Force reflow
        wheel.style.transition = '';
        stopSpin(); // Stop spinning state
      }, 6000);
    }
  }, [spinning, outcome, stopSpin]);



  return (
    
    <div className="select-none px-4 py-0 w-full flex flex-col items-center">      

      <div className="roulette-wrapper relative flex justify-center w-full mx-auto overflow-hidden">
        

        {/* Hidden selector Bar to visually show the selected number */}
        <div className="selector hidden absolute left-1/2 transform -translate-x-1/2 w-px bg-[#FFA41A] h-full z-20" />

        <div
          ref={wheelRef}
            className="wheel w-full flex justify-center items-center transition-transform duration-[6s] ease-in-out"
        />
      </div>     

    </div>
  );
};

export default RouletteWheel;
