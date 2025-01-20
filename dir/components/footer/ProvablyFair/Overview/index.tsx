import React from "react";

const Overview = () => {
    return (
        <div className="self-stretch flex flex-1 flex-col justify-start items-start gap-6 overflow-y-auto">
            <div className="self-stretch text-white text-[16px] font-medium">
                Provable fairness is a transparent way for us to guarantee as the operator that we are providing true randomness without manipulation.
            </div>
            <div className="self-stretch text-white text-[16px] font-medium">
                In a land-based Casino, this could be by the turn of a card, the roll of a dice, or even the spin of a roulette wheel, but when it comes to online gambling, this type of functionality needs to be handled within the programming of our service.
            </div>
            <div className="self-stretch text-white text-[16px] font-medium">
                To ensure operating honestly, the provably fair algorithm is implemented to provide a completely transparent and verifiable solution to the handling of pre-determined bet outcomes.
            </div>
            <div className="self-stretch text-white text-[16px] font-medium">
                This in short means that, as a player you have complete power over your gambling experience, and can be assured there is true randomness when you play our games.
            </div>
            <div className="self-stretch text-white text-[16px] font-medium">
                Every game on our platform uses this list of random numbers to determine its outcome by converting them into:
            </div>
            <ul className="self-stretch text-white text-[16px] font-medium list-disc list-inside">
                <li>Cards or Diamonds (Blackjack, Baccarat, Hilo, Diamond Poker)</li>
                <li>Shuffling a list of possible results (Keno, Mines)</li>
                <li>Numbers (Roulette, Dice)</li>
                <li>Path (Plinko)</li>
            </ul>
            <div className="self-stretch text-white text-[16px] font-medium">
                For further information and insights about provable fairness and the power it has in this industry, check out the Cryptogambling Foundation via their website: 
                <a href="https://cryptogambling.org" className="text-[#ffa31a] underline">https://cryptogambling.org</a>
            </div>
        </div>
    );
};

export default Overview;
