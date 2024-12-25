import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-12 px-3.5 py-2.5 justify-between items-center inline-flex">
      {/* Logo Section */}
      <div className="justify-start items-center flex">
        <Image
          className="w-36 h-6 relative"
          src="https://via.placeholder.com/152x23"
          alt="Logo"
        />
      </div>

      {/* Navigation Section */}
      <div className="justify-center items-center gap-5 flex">
        {/* Icon */}
        <Image
          className="w-5 h-5 relative"
          src="https://via.placeholder.com/20x20"
          alt="Icon"
        />
        
        {/* Login Button */}
        <div className="px-2.5 bg-custom-orange rounded justify-center items-center flex hover:bg-custom-orange transition-color">
          <div className="w-12 p-1 flex-col justify-start items-start inline-flex">
            <div className="text-black text-xs font-semibold font-['Poppins'] uppercase leading-tight">
              login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
