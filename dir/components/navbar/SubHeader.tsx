'use client';

import useSubHeaderStore from "@/dir/states/SubHeader";
import { Volume2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SubHeader = () => {
  const { isSubHeaderVisible, closeSubHeader } = useSubHeaderStore(); // Correct way to access the Zustand store

  const [isRendered, setIsRendered] = useState(false);

  const subHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle click outside the SubHeader
    const handleClickOutside = (event: MouseEvent) => {
     
      if (
        subHeaderRef.current &&
        !subHeaderRef.current.contains(event.target as Node) &&
        isSubHeaderVisible
      ) {
        closeSubHeader(); // Close the SubHeader
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSubHeader, isSubHeaderVisible]);

  useEffect(() => {
    if (isSubHeaderVisible) {
      setIsRendered(true); // Keep the SubHeader in the DOM
    } else {
      setIsRendered(false); // Set isRendered to false immediately for animations
    }
  }, [isSubHeaderVisible]);

  return (
    <>
      {isRendered && (
        <div
          ref={subHeaderRef}
          className={`absolute lg:hidden top-0 left-0 w-full bg-gray-800 p-4 px-8 flex flex-row justify-between items-start gap-2 shadow-lg z-50 ${
           isSubHeaderVisible ? 'slide-down' : 'slide-up'
          }`}
        >
          <div className="flex gap-4 flex-col">
            <Volume2 className="w-6 h-6 stroke- icon-custom-orange cursor-pointer" />
            <button className="p-3 bg-custom-orange rounded justify-center items-center transition-color">
              <div className="text-black text-xs font-semibold uppercase leading-tight">
                login
              </div>
            </button>
          </div>

          <div
            className='text-white p-1 cursor-pointer'
            onClick={closeSubHeader}
          >
            <X />
          </div>
        </div>
      )}
    </>
  );
};

export default SubHeader;
