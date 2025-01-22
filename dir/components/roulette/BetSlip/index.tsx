'use client'

import useBetStore from '@/dir/states/roulette/BetSlip';
import Image from 'next/image';
import React from 'react';

const BetSlip = () => {
  
  const {
    betAmount,
    setBetAmount,
    addBetAmount,
    multiplyBetAmount,
    divideBetAmount,
    clearBetAmount,
  } = useBetStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setBetAmount(value);
  };


  return (
    <div className="bet-slip px-2 py-9 flex flex-wrap justify-center items-center gap-3">
      <div className="bet-input select-none h-10 px-2 flex justify-center items-center gap-2 overflow-hidden">
        <Image
          className="w-6 h-6"
          src="/roulette/Coin.png"
          alt="Coin Icon"
          width={24}
          height={24}
        />
        <input
          type="number"
          value={betAmount}
          onChange={handleInputChange}
          className="text-input w-36 bg-transparent border-none outline-none"
          placeholder="Enter bet amount..."
        />
      </div>
      <div
        className="bet-button h-10 min-w-20 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={() => addBetAmount(0.01)}
      >
        <div className="grow text-white shrink text-center select-none">+0.01</div>
      </div>
      <div
        className="bet-button h-10 min-w-20 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={() => addBetAmount(0.1)}
      >
        <div className="grow text-white shrink text-center select-none">+0.1</div>
      </div>
      <div
        className="bet-button h-10 min-w-20 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={() => addBetAmount(0.5)}
      >
        <div className="grow text-white shrink text-center select-none">+0.5</div>
      </div>
      <div
        className="bet-button h-10 min-w-20 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={() => multiplyBetAmount(2)}
      >
        <div className="grow text-white shrink text-center select-none">×2</div>
      </div>
      <div
        className="bet-button h-10 min-w-20 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={() => divideBetAmount(2)}
      >
        <div className="grow text-white shrink text-center select-none">1/2</div>
      </div>
      <div
        className="bet-max-button h-10 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={() => setBetAmount(100)} // Assuming 100 is the max bet amount
      >
        <div className="grow shrink text-center select-none">Max</div>
      </div>
      <div
        className="bet-clear-button h-10 px-5 py-3 flex justify-center items-center cursor-pointer"
        onClick={clearBetAmount}
      >
        <div className="text-center select-none">Clear</div>
      </div>
    </div>
  );
};

export default BetSlip;
