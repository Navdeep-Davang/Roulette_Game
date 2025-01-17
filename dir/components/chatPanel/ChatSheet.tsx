import { useSheetStore } from "@/stores/sheetStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const ChatSheet = () => {
  const { isOpen, closeSheet } = useSheetStore((state) => ({
    isOpen: state.isOpen,
    closeSheet: state.closeSheet,
  }));

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
