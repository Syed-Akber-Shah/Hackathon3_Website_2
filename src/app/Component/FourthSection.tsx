//Component/forth section
import React from 'react';
import Image from "next/image"
import boyImage from "../assets/boyImage.png"

const FourthSection = () => {
  return (
    <section className="relative bg-white">
      <h2 className="text-black text-[20px] sm:text-[22px] font-[700] ml-[40px] mb-[15px] mt-[80px]">
        Don&apos; Miss
      </h2>
      {/* Image */}
      <div className="relative w-full md:pl-[30px] md:pr-[30px] h-[30vh] sm:h-[50vh] md:h-[100vh]">
        <Image
          src={boyImage}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className=" flex flex-col justify-center items-center text-center px-4 py-12 sm:py-16 md:py-12">

        {/*  (Big Heading) */}
        <h1 className="text-black text-[25px] sm:text-4xl md:text-[50px] font-[600] mb-4 md:mb-6">
          FLIGHT ESSENTIALS
        </h1>

        {/* Description Paragraph */}
        <p className="text-black text-[11px] font-[600] sm:text-[16px] md:text-[17px] mx-auto mb-8 max-w-3xl">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>


        <div className="flex space-x-4">

          {/* Find Your Shoe Button */}
          <button
            className="bg-black text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
