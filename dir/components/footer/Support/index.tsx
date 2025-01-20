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
import { SupportForm } from "./SupportForm";


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
        className=" sm:w-4/5 w-11/12  h-3/4 p-4 bg-[#191d25] rounded-2xl border-2 border-[#ffa31a] flex-col justify-start items-center gap-1 inline-flex overflow-hidden"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader className="self-stretch p-1 justify-end items-end gap-2.5 inline-flex">
          <DialogClose asChild>
            <X className="text-white hover:text-[#ffa31a] items-end cursor-pointer"/>
          </DialogClose>
        </DialogHeader>
        <div className="self-stretch h-full sm:px-8 px-2 flex-col justify-start items-center gap-8 flex overflow-hidden">
          <div className="py-1 border-b-2 border-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[20px] font-bold">SUPPORT</div>
          </div>
                
          <SupportForm/>
        </div>

      </DialogContent>
    </Dialog>
  );
}
