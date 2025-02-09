//Component/second section
import React from 'react';
import Image from "next/image"
import runningBoy from "../assets/runningBoy.png"

const SecondSection = () => {
  return (
    <section className="relative bg-white">
          <h2 className="text-black text-[20px] sm:text-[22px] font-[700] ml-[40px] mb-[15px] mt-[80px]">
            Featured
          </h2>
      {/* Image */}
      <div className="relative w-full md:pl-[30px] md:pr-[30px] h-[50vh] sm:h-[70vh] md:h-[100vh]">
        <Image
          src={runningBoy} 
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className=" flex flex-col justify-center items-center text-center px-4 py-12 sm:py-16 md:py-12">
       
        {/*  (Big Heading) */}
        <h1 className="text-black text-[25px] sm:text-4xl md:text-[50px] font-[600] mb-4 md:mb-6">
        STEP INTO WHAT FEELS GOOD
        </h1>

        {/* Description Paragraph */}
        <p className="text-black text-[11px] font-[600] sm:text-[16px] md:text-[17px] mx-auto mb-8 max-w-3xl">
        Cause everyone should know the feeling of running in that perfect pair.
        </p>

      
        <div className="flex space-x-4">

          {/* Find Your Shoe Button */}
          <button
            className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
           Find Your Shoe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
