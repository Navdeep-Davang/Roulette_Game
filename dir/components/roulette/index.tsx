// dir\components\roulette\index.tsx
import React from 'react';
import LeaderBoard from './LeaderBoard';
import BetSlip from './BetSlip';
import { Game } from './Game';

const Roulette = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="h-1 bg-[var(--custom-orange)]" />
      
      <Game/>
      <BetSlip/>
      <LeaderBoard/>
      
    </div>
  );
};

export default Roulette;
