
import { Input } from "@/components/ui/input";
import React from "react";

const CurrentSeedPair = () => {
    return (
        <div className="h-full lg:w-3/4 w-full mx-2 flex flex-col  rounded-lg border border-[#767c8a]">
            {/* Header Section */}
            <div className="self-stretch sm:p-6 p-4 bg-[#202328] rounded-tl-lg rounded-tr-lg border-b border-[#767c8a] flex justify-start items-center gap-2.5">
                <div className="text-white text-[22px] font-bold">Fairness</div>
            </div>

            {/* Content Section */}
            <div className="self-stretch h-full sm:p-8 p-4 bg-[#202328] rounded-bl-lg rounded-br-lg flex flex-col justify-center items-start sm:gap-12 gap-8">
                {/* Client Seed Section */}
                <div className="self-stretch h-auto flex flex-col justify-start items-start sm:gap-4 gap-2">
                  <div className="text-white text-[16px] font-medium">Client Seed</div>
                  <div className="self-stretch h-auto rounded-lg border border-transparent sm:border-[#767c8a] flex justify-center gap-2 sm:gap-0 items-center sm:flex-row flex-col sm:w-auto w-full">
                    <Input className="h-12 rounded-lg border border-[#767c8a] sm:border-none text-white text-[16px] px-4 sm:py-3 py-3.5 " placeholder="Type here..." />
                    <div className="sm:p-3 p-3 bg-[#ffa31a] hover:bg-[#ff8c00] cursor-pointer rounded-lg sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-lg sm:rounded-br-lg flex justify-center items-center gap-2.5 sm:w-auto w-full">
                      <div className="text-white text-[16px] font-medium">Change</div>
                    </div>
                  </div>
                </div>

                {/* Server Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start sm:gap-4 gap-2">
                  <div className="text-white text-[16px] font-medium">Server Seed</div>
                  <div className="self-stretch rounded-lg border border-transparent sm:border-[#767c8a]  flex  justify-start gap-2 sm:gap-0 items-center sm:flex-row flex-col sm:w-auto w-full">
                    <Input className="h-12 rounded-lg border border-[#767c8a] sm:border-none text-white text-[16px] px-4 sm:py-2 py-3.5" placeholder="Type here..." />
                    <div className="sm:p-3 p-3 bg-[#ffa31a] hover:bg-[#ff8c00] cursor-pointer rounded-lg sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-lg sm:rounded-br-lg flex justify-center items-center gap-2.5 sm:w-auto w-full">
                        <div className="text-white text-[16px] font-medium">Change</div>
                    </div>
                  </div>
                </div>

                {/* Nonce Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="text-white text-xl font-medium">Nonce</div>
                  <Input className="h-12 rounded-lg border border-[#767c8a] text-white text-[16px] px-4 sm:py-3 py-3.5" placeholder="Type here..." />
                </div>
            </div>
        </div>
    );
};

export default CurrentSeedPair;
