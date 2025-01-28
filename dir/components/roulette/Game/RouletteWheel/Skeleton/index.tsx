import { Skeleton } from "@/components/ui/skeleton";
import React, { useRef } from "react";

interface RouletteWheelSkeletonProps {
  className?: string; // Optional className prop
}

const RouletteWheelSkeleton: React.FC<RouletteWheelSkeletonProps> = ({ className }) => {
  const wheelRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={wheelRef}
      className={`wheel w-full overflow-hidden flex justify-center items-center transition-transform duration-[6s] ease-in-out h-24 ${className || ""}`} // Apply additional className
    >
      <div className="flex space-x-2">
        {Array.from({ length: 15 }).map((_, idx) => (
          <Skeleton key={idx} className="h-[85px] w-[85px] bg-white/50 rounded-md" />
        ))}
      </div>
    </div>
  );
};

export default RouletteWheelSkeleton;
