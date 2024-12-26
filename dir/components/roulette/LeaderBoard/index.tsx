import React from 'react';

const LeaderBoard = () => {
  return (
    <div className="leaderboard-container p-6 justify-center items-center gap-8 flex flex-wrap">
      <div className="leaderboard-item w-full min-w-[200px] flex-col justify-center items-center">
        <div className="leaderboard-win-2x w-full  p-2 justify-center items-center">
          <div className="leaderboard-title text-center">Win 2X</div>
        </div>
        <div className="leaderboard-player-container w-full h-12  py-4 border-b flex-col justify-center items-center">
          <div className="leaderboard-player text-center">Player(0)</div>
        </div>
      </div>

      <div className="leaderboard-item w-full min-w-[200px] flex-col justify-center items-center">
        <div className="leaderboard-win-14x w-full p-2 justify-center items-center">
          <div className="leaderboard-title text-center">Win 14X</div>
        </div>
        <div className="leaderboard-player-container w-full h-12 py-4 border-b flex-col justify-center items-center">
          <div className="leaderboard-player text-center">Player(0)</div>
        </div>
      </div>

      <div className="leaderboard-item w-full min-w-[200px] flex-col justify-center items-center">
        <div className="leaderboard-win-2x w-full p-2 justify-center items-center">
          <div className="leaderboard-title text-center">Win 2X</div>
        </div>
        <div className="leaderboard-player-container w-full h-12 py-4 border-b flex-col justify-center items-center">
          <div className="leaderboard-player text-center">Player(0)</div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
