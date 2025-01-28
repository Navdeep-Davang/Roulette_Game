import Image from "next/image";
import React from "react";
import { AboutUs } from "./AboutUs";
import { Support } from "./Support";
import { FAQ } from "./FAQ";
import { ProvablyFair } from "./ProvablyFair";

const Footer = () => {
  return (
    <div className="w-full p-4 footer-bg justify-between items-center inline-flex">
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

      {/* Links Section */}
      <div className="py-1 justify-center items-start gap-1 flex overflow-hidden">
        <AboutUs/>
        <Support/>
        <FAQ/>
        <ProvablyFair/>
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
