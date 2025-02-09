// components/HeroSection.js
import React from 'react';
import Image from "next/image"
import HeroImage from "../assets/HeroImage.png"

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Hero Image */}
      <div className="relative w-full md:pl-[30px] md:pr-[30px] h-[40vh] sm:h-[50vh] md:h-[100vh]">
        <Image
          src={HeroImage} 
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className=" flex flex-col justify-center items-center text-center px-4 py-12 sm:py-16 md:py-12">
        {/* First Look (Small Heading) */}
        <h2 className="text-black text-[13px] font-[500] sm:text-base uppercase mb-2">
          First Look
        </h2>

        {/* Nike Air Max Pulse (Big Heading) */}
        <h1 className="text-black text-[30px] sm:text-4xl md:text-5xl font-[600] mb-2">
        Nike Air Max Pulse
        </h1>

        {/* Description Paragraph */}
        <p className="text-black text-[14px] sm:text-[16px] md:text-[17px] mx-auto mb-8 max-w-3xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulsebr <br />
          — designed to push you past your limits and help you go to the max.
        </p>

        {/* Flex Buttons */}
        <div className="flex space-x-4">
          {/* Notify Me Button */}
          <button
            className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Notify Me
          </button>

          {/* Shop Air Max Button */}
          <button
            className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
