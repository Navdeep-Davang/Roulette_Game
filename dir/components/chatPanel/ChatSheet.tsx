'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSheetStore } from "@/dir/states/ChatSheet";

const ChatSheet = () => {
    const isOpen = useSheetStore((state) => state.isOpen);  

  return (
    <Sheet open={isOpen} >
      <SheetContent side="right" className="w-full">
        <SheetHeader>
          <SheetTitle>Chat Panel</SheetTitle>
        </SheetHeader>
        <div>
          {/* Chat content goes here */}
          <p>Your chat content...</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatSheet;
