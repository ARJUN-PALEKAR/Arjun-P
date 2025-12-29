"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import { FlipWords } from "@/components/ui/flip-words";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const SilkBackground = dynamic(() => import("./SilkBackground"), {
  ssr: false,
});

const Hero = memo(function Hero() {
  // Words to flip through
  const words = ["beautiful", "modern", "responsive", "data-driven"];

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-black flex items-center"
    >
      {/* Silk background */}
      <div className="absolute inset-0 z-0">
        <SilkBackground />
      </div>

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-6 md:px-20 lg:px-32 flex flex-col justify-center h-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 text-white drop-shadow-2xl text-left tracking-tighter">
            Arjun Palekar
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl text-white mb-6 font-light text-left">
            Data Analyst | Front-End Developer
          </p>

          <p className="text-lg md:text-xl text-neutral-400 mb-12 font-light text-left tracking-wide">
            Aspiring Full-stack Developer & Data Analyst
          </p>

          {/* BIO WITH FLIP WORDS */}
          <div className="text-base md:text-xl text-gray-300 mb-14 leading-loose text-left max-w-2xl">
            Bridging the gap between complex data and interactive design.
            <br className="hidden md:block" />
            I build digital experiences that are
            <FlipWords words={words} className="text-white font-semibold" />
          </div>

          {/* SHIMMER BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            
            {/* Button 1: View My Work */}
            <ShimmerButton
              className="shadow-2xl"
              // ADDED THESE PROPS FOR VISIBILITY
              shimmerColor="#ffffff" 
              shimmerSize="2px"
              borderRadius="100px"
              background="black"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base px-4">
                View My Work
              </span>
            </ShimmerButton>

            {/* Button 2: Let's Connect */}
            <ShimmerButton
              className="shadow-2xl"
              // ADDED THESE PROPS FOR VISIBILITY
              shimmerColor="#ffffff" 
              shimmerSize="2px"
              borderRadius="100px"
              background="black"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/arjunpalekar",
                  "_blank"
                )
              }
            >
              <span className="text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base px-4">
                Let&apos;s Connect
              </span>
            </ShimmerButton>
            
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;