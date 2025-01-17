'use client';

import { motion } from 'framer-motion';
import useSubHeaderStore from "@/dir/states/SubHeader/store";
import { Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

const SubHeader = () => {
  const isSubHeaderVisible = useSubHeaderStore(state => state.isSubHeaderVisible); // Correct way to access the Zustand store

  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isSubHeaderVisible) {
      setIsRendered(true); // Keep the SubHeader in the DOM
    } else {
      const timer = setTimeout(() => setIsRendered(false), 200); // Ensure immediate removal after animation
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isSubHeaderVisible]);



  return (
    <>
      {isRendered  && (
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gray-800 py-2 flex flex-col items-start gap-2 shadow-lg z-40"
          initial={{ translateY: "-20px", opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: "-20px", opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex gap-4 px-4">
            <Volume2 className="w-6 h-6 stroke- icon-custom-orange cursor-pointer" />
            <button className="p-3 bg-custom-orange rounded justify-center items-center transition-color">
                <div className="text-black text-xs font-semibold uppercase leading-tight">
                login
                </div>
            </button>
            </div>
        </motion.div>
      )}
    </>
  );
};

export default SubHeader;
