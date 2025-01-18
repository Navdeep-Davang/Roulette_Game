import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogClose,
    DialogTitle,
  } from "@/components/ui/dialog";
import { X } from "lucide-react";
  
  
  export function AboutUs() {
    return (
      <Dialog>
        <DialogTitle className="hidden">
            About us
        </DialogTitle>
        <DialogTrigger asChild>
            <div className="px-2.5 border-r footer-border justify-center items-start flex">
            <div className="footer-text text-center text-xs font-normal leading-none">
                About
            </div>
            </div>
        </DialogTrigger>
        <DialogContent className="w-[1000px] h-96 p-4 bg-[#191d25] rounded-2xl border-2 border-[#ffa31a] flex-col justify-start items-center gap-1 inline-flex overflow-auto">
          <DialogHeader className="self-stretch p-1 justify-end items-center gap-2.5 inline-flex">
            <DialogClose asChild>
              <X className="text-white items-end"/>
            </DialogClose>
          </DialogHeader>
          <div className="self-stretch h-96 px-6 flex-col justify-start items-center gap-8 flex overflow-hidden">
            <div className="py-1 border-b-2 border-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-2xl font-bold">ABOUT US</div>
            </div>
            <div className="self-stretch h-96 flex-col justify-start items-start gap-6 flex overflow-hidden">
              <div className="self-stretch text-white text-xl font-medium">
                Welcome to our project, a platform committed to delivering a transparent, secure, and user-friendly experience in the world of online gaming and decentralized applications. Our focus is on combining cutting-edge technology with trust and fairness, ensuring an exceptional experience for our users.
              </div>
              <div className="text-white text-2xl font-bold">OUR MISSION</div>
              <div className="self-stretch text-white text-xl font-medium">
                We strive to set a new standard for integrity in the digital space by implementing provably fair systems and leveraging blockchain technology to foster transparency. Our solutions empower users, giving them complete control over their interactions while ensuring the highest level of security and reliability.
              </div>
              <div className="text-white text-2xl font-bold">OUR VISION</div>
              <div className="self-stretch text-white text-xl font-medium">
                Our vision is to create a seamless, decentralized ecosystem where users can trust every interaction and enjoy a fair, verifiable, and engaging experience. By integrating modern tools and frameworks, we aim to redefine industry standards.
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
}
