'use client'

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useSheetStore } from "@/dir/states/ChatSheet";
import ChatPanel from ".";
import { useEffect } from "react";

const ChatSheet = () => {
    const {isOpen, closeSheet} = useSheetStore();  

    useEffect(() => {
      const handleResize = () => {
        // Check if media width matches the lg breakpoint (e.g., 1024px)
        if (window.matchMedia('(min-width: 1024px)').matches) {
          closeSheet(); // Automatically close the sheet
        }
      };
  
      // Listen to resize events
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [closeSheet]);
    

  return (
      <Sheet open={isOpen} >
        <SheetContent side="right" className="w-full p-0">
          
          <SheetTitle className="hidden">
            ChatSheet
          </SheetTitle>

          <ChatPanel/>
          
        </SheetContent>
      </Sheet>
  );
};

export default ChatSheet;
