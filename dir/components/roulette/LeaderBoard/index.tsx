import React from 'react';

const LeaderBoard = () => {
  return (
    <div className="leaderboard-container p-6 justify-center items-center gap-8 flex flex-wrap">
      <div className="leaderboard-item flex-col justify-start items-start">
        <div className="leaderboard-win-2x p-2 justify-center items-center">
          <div className="leaderboard-title text-center">Win 2X</div>
        </div>
        <div className="leaderboard-player-container h-12 px-40 pt-3.5 pb-4 border-b flex-col justify-start items-center">
          <div className="leaderboard-player text-center">Player(0)</div>
        </div>
      </div>
      <div className="leaderboard-item flex-col justify-start items-start">
        <div className="leaderboard-win-14x p-2 justify-center items-center">
          <div className="leaderboard-title text-center">Win 14X</div>
        </div>
        <div className="leaderboard-player-container h-12 px-40 pt-3.5 pb-4 border-b flex-col justify-start items-center">
          <div className="leaderboard-player text-center">Player(0)</div>
        </div>
      </div>
      <div className="leaderboard-item flex-col justify-start items-start">
        <div className="leaderboard-win-2x p-2 justify-center items-center">
          <div className="leaderboard-title text-center">Win 2X</div>
        </div>
        <div className="leaderboard-player-container h-12 px-40 pt-3.5 pb-4 border-b flex-col justify-start items-center">
          <div className="leaderboard-player text-center">Player(0)</div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
