'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSheetStore } from "@/dir/states/ChatSheet";

const ChatSheet = () => {
    const isOpen = useSheetStore((state) => state.isOpen);
    const closeSheet = useSheetStore((state) => state.closeSheet);
  

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? null : closeSheet())}>
      <SheetContent side="right" className="w-[400px]">
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
