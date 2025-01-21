'use client'

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import Overview from "./Overview";
import Implementation from "./Implementation";
import CurrentSeedPair from "./CurrentSeedPair";
import CopySeedPair from "./CopySeedPair";

export function ProvablyFair() {
    return (
        <Dialog>
            <DialogTitle className="hidden">
                Provably Fair
            </DialogTitle>
            <DialogTrigger asChild>
                <div className="px-2.5 justify-center items-start flex">
                    <div className="footer-text text-center text-xs font-normal leading-none">
                        Provably Fair
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent 
                className="sm:w-4/5 w-11/12 h-3/4 p-4 bg-[#191d25] rounded-2xl border-2 border-[#ffa31a] flex-col justify-start items-center gap-1 inline-flex"
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
            >
                <DialogHeader className="self-stretch p-1 justify-end items-end gap-2.5 inline-flex">
                  <DialogClose asChild>
                    <X className="text-white hover:text-[#ffa31a] items-end cursor-pointer"/>
                  </DialogClose>
                </DialogHeader>
                <div className="self-stretch tabs-parent h-full sm:px-4 px-2 pb-2 flex flex-col justify-start items-center gap-4 overflow-hidden flex-1">
                  <div className="py-1 border-b-2 border-white justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[20px] font-bold">PROVABLY FAIR</div>
                  </div>

                  {/* Overflow hidden is necessory on the div along with the flex-1 on the parent so that the div only occupy remaining space of its parent
                  and not exceed to occupy more space */}
                  <Tabs defaultValue="overview" className="w-full gap-4 flex flex-col flex-1 overflow-hidden"> 
                    <TabsList className=" text-white text-[16px] justify-around border-b-2 border-white">
                      <TabsTrigger value="overview" >Overview</TabsTrigger>
                      <TabsTrigger value="implementation">Implementation</TabsTrigger>
                      <TabsTrigger value="current-seed-pair">Current Seed Pair</TabsTrigger>
                      <TabsTrigger value="copy-seed-pair">Copy Seed Pair</TabsTrigger>
                      <TabsTrigger value="calculation">calculation</TabsTrigger>
                    </TabsList>

                    <div className="flex-1 tabs-content-parent h-full overflow-y-auto custom-scrollbar">
                      <TabsContent value="overview">
                        <Overview />
                      </TabsContent>
                      <TabsContent value="implementation">
                        <Implementation/>
                      </TabsContent>
                      {/* To align the items in the parent in the center, put the flex on the parent  */}
                      <TabsContent value="current-seed-pair" className="flex justify-center items-center">
                        <CurrentSeedPair/>
                      </TabsContent>
                      <TabsContent value="copy-seed-pair" className="flex justify-center items-center">
                        <CopySeedPair/>
                      </TabsContent>
                      <TabsContent value="calculation">calculation</TabsContent>
                    </div>
                    
                  </Tabs>                   
                </div>
            </DialogContent>
        </Dialog>
    );
}
