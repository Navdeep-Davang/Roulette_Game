'use client'

import React, { useState, useEffect } from "react";

interface GameOverlayProps {
  targetTime: string | Date; // Accepting either a string or Date object
  message?: string;
}

const getTimeLeft = async (targetTime: string | Date) => {
  try {
    const now = new Date();
    const futureTime = new Date(targetTime); // Ensure it's a Date object
    const timeDiff = futureTime.getTime() - now.getTime();
    if (timeDiff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  } catch (error) {
    console.error('Error calculating time left:', error);
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};
const GameOverlay: React.FC<GameOverlayProps> = ({ targetTime, message = "Rolling In" }) => {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const fetchInitialTimeLeft = async () => {
        const initialTimeLeft = await getTimeLeft(targetTime);
        setTimeLeft(initialTimeLeft);
      };
  
      fetchInitialTimeLeft();
    }, [targetTime]);
  
  
    useEffect(() => {
        const interval = setInterval(async () => {
          const newTimeLeft = await getTimeLeft(targetTime);
      
          // Handle undefined or invalid states
          if (newTimeLeft) {
            setTimeLeft(newTimeLeft);
          }
      
          if (newTimeLeft.days <= 0 && newTimeLeft.hours <= 0 && newTimeLeft.minutes <= 0 && newTimeLeft.seconds <= 0) {
            setVisible(false)
            clearInterval(interval); // Stop timer at 0
          }
        }, 1000); // Update every second
      
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [targetTime]);
      
    return (
        visible && (            
        <div className="absolute inset-0 flex justify-center items-center bg-[#0c1220]/70 z-10">
            <div className="w-full h-full pt-24 pb-24 flex flex-col justify-center items-center">
                <div className="text-center text-white text-2xl font-normal uppercase leading-loose">
                    {message}
                </div>
                <div className="text-white text-3xl font-normal leading-10">
                    {timeLeft.days > 0 && `${timeLeft.days}:`}
                    {timeLeft.hours.toString().padStart(2, '0')}:
                    {timeLeft.minutes.toString().padStart(2, '0')}:
                    {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
            </div>
        </div>
        )
    );
  };
  
  export default GameOverlay;
  