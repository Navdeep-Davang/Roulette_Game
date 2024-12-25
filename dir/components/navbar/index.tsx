import { Volume2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full px-4 py-4 navbar-bg justify-between items-center inline-flex">
      {/* Logo Section */}
      <div className="justify-start items-center flex">
        <Image
          className="w-36 h-6 relative"
          src="/navbar/RouletteLogo.png"
          alt="Logo"
          width={144}
          height={24}
        />
      </div>

      {/* Navigation Section */}
      <div className="justify-center items-center gap-5 flex">
        {/* Icon */}
        <Volume2 className="w-6 h-6 stroke- text-custom-orange cursor-pointer " />

        {/* Login Button */}
        <button className="p-3 bg-custom-orange rounded justify-center items-center flex transition-color">
          <div className="text-black text-xs font-semibold uppercase leading-tight">
            login
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
