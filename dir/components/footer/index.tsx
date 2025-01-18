import Image from "next/image";
import React from "react";
import { AboutUs } from "./AboutUs";

const Footer = () => {
  return (
    <div className="w-full p-4 footer-bg justify-between items-center inline-flex">
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

      {/* Links Section */}
      <div className="py-1 justify-center items-start gap-1 flex overflow-hidden">
        <AboutUs/>
        <div className="px-2.5 border-r footer-border justify-center items-start flex">
          <div className="footer-text text-center text-xs font-normal leading-none">
            Support
          </div>
        </div>
        <div className="px-2.5 border-r footer-border justify-center items-start flex">
          <div className="footer-text text-center text-xs font-normal leading-none">
            FAQ
          </div>
        </div>
        <div className="px-2.5 justify-center items-start flex">
          <div className="footer-text text-center text-xs font-normal leading-none">
            Provably Fair
          </div>
        </div>
      </div>

      {/* Logo Image Section */}
      <div className=" flex-col justify-center items-start inline-flex">
        <Image
          className=" cursor-pointer "
          src="/footer/DiscodIcon.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Footer;
