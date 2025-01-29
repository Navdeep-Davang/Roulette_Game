
import { Input } from "@/components/ui/input";
import React from "react";

const Calculation = () => {
    return (
        <div className="h-full lg:w-3/4 w-full mx-2 flex flex-col  rounded-lg border border-[#767c8a]">
            {/* Header Section */}
            <div className="self-stretch sm:p-6 p-4 bg-[#202328] rounded-tl-lg rounded-tr-lg border-b border-[#767c8a] flex justify-start items-center gap-2.5">
                <div className="text-white text-[22px] font-bold">Fairness</div>
            </div>

            {/* Content Section */}
            <div className="self-stretch h-full sm:p-8 p-4 bg-[#202328] rounded-bl-lg rounded-br-lg flex flex-col justify-center items-start sm:gap-12 gap-8">
                {/* Client Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start sm:gap-4 gap-2">
                    <div className="text-white text-[16px] font-medium">Client Seed</div>
                    <Input className="h-12 rounded-lg border border-[#767c8a] text-white text-[16px] px-4 sm:py-2 py-3.5" placeholder="Type here..." />
                </div>

                {/* Server Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-[16px] font-medium">Server Seed</div>
                    <Input className="h-12 rounded-lg border border-[#767c8a] text-white text-[16px] px-4 sm:py-2 py-3.5" placeholder="Type here..." />
                </div>

                {/* Nonce Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-xl font-medium">Nonce</div>
                    <Input className="h-12 rounded-lg border border-[#767c8a] text-white text-[16px] px-4 sm:py-2 py-3.5" placeholder="Type here..." />
                </div>

                <button
                    type="submit"
                    className="px-4 py-3 w-fit bg-custom-orange rounded-lg text-[#0c1220] text-[16px] font-bold"
                >
                    SUBMIT
                </button>
            </div>

            <div className="text-xl py-4 px-8 pt-0 text-white">
                Final Result : 
            </div>
        </div>
    );
};

export default Calculation;
