// dir\components\roulette\index.tsx
import React from 'react';
import LeaderBoard from './LeaderBoard';
import BetSlip from './BetSlip';

const Roulette = () => {
  return (
    <div>
      <h2>Roulette Game Results</h2>
      <BetSlip/>
      <LeaderBoard/>
    </div>
  );
};

export default Roulette;
