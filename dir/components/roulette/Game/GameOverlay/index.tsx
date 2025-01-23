'use client';

import React, { useState, useEffect, useRef } from 'react';

interface GameOverlayProps {
  targetTime: string | Date; // Accepting either a string or Date object
  message?: string;
}

const GameOverlay: React.FC<GameOverlayProps> = ({
  targetTime,
  message = 'Rolling In',
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to fetch initial time left from the API
  const fetchInitialTimeLeft = async (targetTime: string | Date) => {
    try {
      const response = await fetch(
        `/api/getTimeLeft?targetTime=${encodeURIComponent(targetTime.toString())}`
      );
      if (!response.ok) throw new Error('Failed to fetch time left');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching time left:', error);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialTimeLeft = await fetchInitialTimeLeft(targetTime);
      setTimeLeft(initialTimeLeft);
    };

    fetchData();

    // Set up an interval to update time left every second
    intervalRef.current = setInterval(() => {
      const currentTime = new Date();
      const millisecondsLeft =
        (new Date(targetTime as string).getTime() - currentTime.getTime());

      if (millisecondsLeft <= 0) {
        setVisible(false);
        if (intervalRef.current) { 
          clearInterval(intervalRef.current); 
        }
        return;
      }

      const seconds = Math.floor(millisecondsLeft / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      setTimeLeft({
        days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetTime]);

  // Render the countdown overlay
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