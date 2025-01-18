"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import ReactDOM from "react-dom";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({ children }: { children: React.ReactNode }) => {
  const [mainElement, setMainElement] = React.useState<Element | null>(null);

  React.useEffect(() => {
    setMainElement(document.querySelector("main"));
  }, []);

  if (!mainElement) return null;

  return ReactDOM.createPortal(children, mainElement);
};


const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn("absolute inset-0 z-50 bg-black/80", className)}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;


const sheetVariants = cva(
  "absolute z-40 gap-4 bg-background p-6 shadow-lg transition-transform ease-in-out duration-300",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:translate-y-[-100%] data-[state=open]:translate-y-0",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
        left: "inset-y-0 left-0 h-full w-full border-r data-[state=closed]:translate-x-[-100%] data-[state=open]:translate-x-0",
        right: "inset-y-0 right-0 h-full w-full border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);



  interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> {}

  const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
    ({ side = "right", className, children, ...props }, ref) => {
      return (
        <SheetPortal>
          <SheetPrimitive.Content
            ref={ref}
            className={cn(sheetVariants({ side }), className, "animate-slide-in-from-right")}
            {...props}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              document.body.style.pointerEvents = '';
            }}
          >
            {children}
          </SheetPrimitive.Content>
        </SheetPortal>
      );
    }
  );
  
  
  

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
