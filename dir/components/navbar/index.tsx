'use client'

import { MenuIcon, MessageCircleIcon, Volume2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import useSubHeaderStore from "@/dir/states/SubHeader";
import { useSheetStore } from "@/dir/states/ChatSheet";



const NavBar = () => {
  const { isSubHeaderVisible, openSubHeader  } = useSubHeaderStore();
  const { isOpen, openSheet, closeSheet } = useSheetStore();
  return (
    <div>
      {/* Navbar */}
      <div className="w-full px-4 py-4 navbar-bg justify-between items-center inline-flex relative">
        {/* Logo Section */}
        <div className="justify-start items-center flex">
          <Image
            className="w-36 h-6 relative"
            src="/navbar/SpinAndWinLogo.png"
            alt="Logo"
            width={144}
            height={24}
          />
        </div>

        {/* Navigation Section */}
        <div className="justify-center items-center gap-5 flex">
          {/* Icon */}
          <Volume2 className="w-6 h-6 stroke- icon-custom-orange cursor-pointer hidden lg:block " />

          {/* Login Button */}
          <button className="p-3 bg-custom-orange rounded justify-center items-center transition-color hidden lg:flex">
            <div className="text-black text-xs font-semibold uppercase leading-tight">
              login
            </div>
          </button>

          {/* On smaller Device */}
          <div 
            className={`p-1 lg:hidden cursor-pointer icon-custom-orange ${isOpen ? 'active' : ''}`}
            onClick={() => isOpen ? closeSheet() : openSheet()}
          >
            <MessageCircleIcon className="w-8 h-8 " />
          </div>
          
          <div
            className={`p-1 lg:hidden border icon-custom-orange rounded-md ${isSubHeaderVisible ? 'burger-menu active pointer-events-none' : ''}`}
            onClick={() => !isSubHeaderVisible && openSubHeader()}  
          >          
            <MenuIcon className="w-8 h-8 cursor-pointer " />
          </div>
          
        </div>
      </div>     
    </div>    
  );
};

export default NavBar;
