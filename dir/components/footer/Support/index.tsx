'use client'

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogClose,
    DialogTitle,
  } from "@/components/ui/dialog";
import { X } from "lucide-react";

//TODO support dialog on the mobie view 
export function Support() {
  return (
    <Dialog>
      <DialogTitle className="hidden">
          Support
      </DialogTitle>
      <DialogTrigger asChild>
          <div className="px-2.5 border-r footer-border justify-center items-start flex">
          <div className="footer-text text-center text-xs font-normal leading-none">
              Support
          </div>
          </div>
      </DialogTrigger>
      <DialogContent 
        className=" w-4/5 h-3/4 p-4 bg-[#191d25] rounded-2xl border-2 border-[#ffa31a] flex-col justify-start items-center gap-1 inline-flex overflow-hidden"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader className="self-stretch p-1 justify-end items-end gap-2.5 inline-flex">
          <DialogClose asChild>
            <X className="text-white hover:text-[#ffa31a] items-end cursor-pointer"/>
          </DialogClose>
        </DialogHeader>
        <div className="self-stretch h-full px-8 flex-col justify-start items-center gap-8 flex overflow-hidden">
          <div className="py-1 border-b-2 border-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[20px] font-bold">SUPPORT</div>
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
            <div className="text-[#767c8a] text-[16px]   font-medium">
              Email address
            </div>
            <div className="self-stretch h-auto p-3 rounded-lg border border-[#767c8a] flex-col justify-start items-start align-center gap-2.5 flex overflow-hidden">
              <div className="text-[#767c8a] text-[16px]  font-medium">
                Enter email
              </div>
            </div>
          </div>
          <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex overflow-hidden">
            <div className="text-[#767c8a] text-[16px]  font-medium">
              Description
            </div>
            <div className="self-stretch h-auto p-3 rounded-lg border border-[#767c8a] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
              <div className="text-[#767c8a] text-[16px]  font-medium">
                Description
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
            <div className="px-4 py-3 bg-[#ffa31a] rounded-lg flex-col justify-center items-center gap-2.5 flex">
              <div className="text-[#0c1220] text-[16px]  font-bold">
                SUBMIT
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
