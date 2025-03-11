import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton"
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GridGlobe from "./ui/GridGlobe";
import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";


const Hero = () => {
  return (
    <div >
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
      <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 my-10">
            Dynamic Web Magic with Next.js
          </p>

          {/* <TextGenerateEffect
            words="Smart Solutions for Creating a Personalized Online Presence"
            className="text-center text-[40px] text-white md:text-5xl lg:text-6xl"
          /> */}
        
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Full-stack Next.js Developer based in France
            <span className="block my-10">Elena Welty</span>
          </p>

          <a href="#about">
            <MagicButton
              title="Show my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="flex justify-center my-20 z-10">
           <GridGlobe />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;