'use client'

import React from 'react'
import SolidArrow from '../../svg/SolidArrow'
import GameOverlay from './GameOverlay'
import RouletteWheel from './RouletteWheel'
import { useRouletteStore } from '@/dir/states/roulette/RouletteWheel'


export const Game = () => {
  const futureTime = new Date();
  futureTime.setMinutes(futureTime.getMinutes() + 0);

  const { outcome, setOutcome, spinning, startSpin } = useRouletteStore();

  const handleSpin = () => {
    if (outcome !== null && outcome >= 0) {
      startSpin(outcome);
    }
  };

  return (

    <div className='flex flex-col gap-4'>
        <div className="relative w-full">
          
            <GameOverlay targetTime={futureTime} />

            {/* The actual content */}
            <div className='flex flex-col py-4 gap-2 items-center justify-center'>
              <SolidArrow className="rotate-180" />
              
              <RouletteWheel/>
                            
              <SolidArrow />
            </div>

            {/* Gradient overlay */}
            <div className="absolute rounded-md inset-0 overlay" />
        </div>

        <div className="text-center select-none text-white text-sm">PREVIOUS ROLLS</div>

        {/* Interface to Control wheelspinning */}
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
    
    
    
  )
}
