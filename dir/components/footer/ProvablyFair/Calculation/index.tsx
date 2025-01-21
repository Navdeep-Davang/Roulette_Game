
import { Input } from "@/components/ui/input";
import React from "react";

const Calculation = () => {
    return (
        <div className="h-full w-3/4 flex flex-col  rounded-lg border border-[#767c8a]">
            {/* Header Section */}
            <div className="self-stretch p-6 bg-[#202328] rounded-tl-lg rounded-tr-lg border-b border-[#767c8a] flex justify-start items-center gap-2.5">
                <div className="text-white text-[22px] font-bold">Fairness</div>
            </div>

            {/* Content Section */}
            <div className="self-stretch h-full p-8 bg-[#202328] rounded-bl-lg rounded-br-lg flex flex-col justify-center items-start gap-10">
                {/* Client Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-[16px] font-medium">Client Seed</div>
                    <div className="self-stretch rounded-lg border border-[#767c8a] flex py-1.5 justify-start items-center">
                        <Input className="border-none text-white text-[16px] px-4 py-2" placeholder="Type here..." />                      
                    </div>
                </div>

                {/* Server Seed Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-[16px] font-medium">Server Seed</div>
                    <div className="self-stretch rounded-lg border border-[#767c8a] flex py-1.5 justify-start items-center">
                        <Input className="border-none text-white text-[16px] px-4 py-2" placeholder="Type here..." />                      
                    </div>
                </div>

                {/* Nonce Section */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="text-white text-xl font-medium">Nonce</div>
                    <div className="self-stretch rounded-lg border border-[#767c8a] flex py-1.5 justify-start items-center">
                        <Input className="border-none text-white text-[16px] px-4 py-2" placeholder="Type here..." />                      
                    </div>
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
