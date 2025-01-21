
import { Input } from "@/components/ui/input";
import React from "react";

const CurrentSeedPair = () => {
    return (
        <div className="h-full w-3/4 flex flex-col  rounded-lg border border-[#767c8a]">
            {/* Header Section */}
            <div className="self-stretch p-6 bg-[#202328] rounded-tl-lg rounded-tr-lg border-b border-[#767c8a] flex justify-start items-center gap-2.5">
                <div className="text-white text-[22px] font-bold">Fairness</div>
            </div>

            {/* Content Section */}
            <div className="self-stretch h-full p-8 bg-[#202328] rounded-bl-lg rounded-br-lg flex flex-col justify-center items-start gap-12">
                {/* Client Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-[16px] font-medium">Client Seed</div>
                    <div className="self-stretch rounded-lg border border-[#767c8a] flex  justify-start items-center">
                        <Input className="border-none text-white text-[16px] px-4 py-2" placeholder="Type here..." />
                        <div className="p-3 bg-[#ffa31a] hover:bg-[#ff8c00] cursor-pointer rounded-tr-lg rounded-br-lg flex justify-center items-center gap-2.5">
                            <div className="text-white text-[16px] font-medium">Change</div>
                        </div>
                    </div>
                </div>

                {/* Server Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-[16px] font-medium">Server Seed</div>
                    <div className="self-stretch rounded-lg border border-[#767c8a] flex  justify-start items-center">
                        <Input className="border-none text-white text-[16px] px-4 py-2" placeholder="Type here..." />
                        <div className="p-3 bg-[#ffa31a] hover:bg-[#ff8c00] cursor-pointer rounded-tr-lg rounded-br-lg flex justify-center items-center gap-2.5">
                            <div className="text-white text-[16px] font-medium">Change</div>
                        </div>
                    </div>
                </div>

                {/* Nonce Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-xl font-medium">Nonce</div>
                    <div className="self-stretch rounded-lg border border-[#767c8a] flex py-1.5 justify-start items-center">
                        <Input className="border-none text-white text-[16px] px-4 py-2" placeholder="Type here..." />                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentSeedPair;
