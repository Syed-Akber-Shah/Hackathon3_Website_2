// components
import React from 'react';
import Image from 'next/image';
import essentialImg1 from "../assets/essentialImg1.png"
import essentialImg2 from "../assets/essentialImg2.png"
import essentialImg3 from "../assets/essentialImg3.png"

const FifthSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Images with Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Image 1 */}
          <div className="relative">
            <Image
              src={essentialImg1}
              alt="Image 1"
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute bottom-8 left-4 bg-white text-black py-2 px-4 rounded-[20px]">
              <span>Men&apos;s</span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <Image
              src={essentialImg2}
              alt="Image 2"
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute bottom-8 left-4 bg-white text-black py-2 px-4 rounded-[20px]">
              <span>Women&apos;s</span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <Image
              src={essentialImg3}
              alt="Image 3"
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute bottom-8 left-4 bg-white text-black py-2 px-4 rounded-[20px]">
              <span>Kid&apos;s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
