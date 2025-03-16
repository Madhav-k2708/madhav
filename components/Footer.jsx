import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="w-full text-center flex items-center justify-center gap-2 ">
        <Image src={assets.nameLogo} alt="logo" className=" w-6 md:w-12 md:p-1 bg-purple-500 rounded-full " />
        <h1 className="font-extrabolditalic text-[20px] md:text-[35px] lg:text-[40px] tracking-widest   ">
          Madhav
        </h1>
      </div>

      <div className="w-max flex items-center gap-2 mx-auto ">
            <Image src={isDarkMode ? assets.mail_icon_dark :assets.mail_icon} alt="" className="w-6" />
            madhavk0803@gmail.com
            </div>

        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 ">
            <p>@ 2025 Madhav. All rights reserved.</p>
            <ul className="flex items-center justify-center md:justify-between gap-3 md:gap-10 mt-4 sm:mt-0 ">
            <li><a href="https://github.com/Madhav-k2708/" target="_blank" >Github</a></li>
            <li><a href="https://www.linkedin.com/in/madhav-k-b24586319/" target="_blank" >Linkedin</a></li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;
