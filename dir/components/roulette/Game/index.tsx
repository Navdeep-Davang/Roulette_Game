import React from 'react'
import SolidArrow from '../../svg/SolidArrow'
import Wheel from './Wheel'


export const Game = () => {
  return (

    <div className='flex flex-col gap-4'>
        <div className="relative w-full">
            {/* The actual content */}
            <div className='flex flex-col py-4 gap-2 items-center justify-center'>
            <SolidArrow className="rotate-180" />
            <Wheel />
            <SolidArrow />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 overlay" />
        </div>

        <div className="text-center bg-red-700 text-white text-sm">PREVIOUS ROLLS</div>
    
     </div>
    
    
    
  )
}
