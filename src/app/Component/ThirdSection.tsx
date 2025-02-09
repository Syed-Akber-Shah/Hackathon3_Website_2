import React from 'react'
import Image from "next/image"
import rightArrowIcon from "../assets/rightArrowIcon.png"
import leftArrowIcon from "../assets/leftArrowIcon.png"
import gearupImg1 from "../assets/gearupImg1.png"
import gearupImg2 from "../assets/gearupImg2.png"
import gearupImg3 from "../assets/gearupImg3.png"
import gearupImg4 from "../assets/gearupImg4.png"
const ThirdSection = () => {
  return (
    <>
      <div>
        <h2 className="text-black text-[20px] sm:text-[22px] font-[700] ml-[40px] mb-[15px] mt-[50px]">Gear Up</h2>

        <div className="lg:flex lg:justify-around mb-[100px] place-items-center">

          <div>
            {/* first div cards */}
            <div className="flex justify-end cursor-pointer mb-[10px]">
              <span className="text-black text-[14px] font-[500] sm:text-[16px] md:text-[18]  content-center"> Shop Men&apos;s</span>

              {/* arrow */}

              <Image
                src={leftArrowIcon}
                alt="Nike Air Max Pulse"
                className="w-[45px] h-[45] object-cover rounded-[full]"
              />

              <Image
                src={rightArrowIcon}
                alt="Nike Air Max Pulse"
                className="w-[45px] h-[45] object-cover rounded-[full]"
              />
            </div>


            {/* Cards start here */}

            <div className="md:flex md:gap-[30px] grid grid-cols-1 sm:grid-cols-2">

              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[290px] h-[400px] mt-[7px] mb-[7px]">
                <Image
                  src={gearupImg1}
                  alt="Nike Air Max Pulse"
                  className="w-[290px] h-[300px] object-cover "
                />
                <div className="p-4">
                  <div className="flex justify-between items-center ">
                    <h3 className="text-black text-[12px] font-[700] md:text-[13px]">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <span className="text-black text-[14px] font-[600]">₹ 3 895</span></div>

                  <div className="flex justify-start "><p className="text-[#757575] text-[14px]">Mens Short-Sleeve <br /> Running Top</p></div>

                </div>
              </div>


              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[290px] h-[400px] mt-[7px] mb-[7px]">
                <Image
                  src={gearupImg2}
                  alt="Nike Air Max Pulse"
                  className="w-[290px] h-[300px] object-cover "
                />
                <div className="p-4">
                  <div className="flex justify-between items-center ">
                    <h3 className="text-black text-[12px] font-[600] md:text-[13px]">Nike Dri-FIT Challenger</h3>
                    <span className="text-black text-[14px] font-[600]">₹ 2 495</span></div>

                  <div className="flex justify-start "><p className="text-[#757575] text-[14px]">Men&apos;s 18cm (approx.) 2 <br />-in-1 Versatile Shorts</p></div>

                </div>
              </div>

            </div>
          </div>




          <div>
            {/* second div cards */}
            <div className="flex justify-end cursor-pointer mb-[10px] ">
              <span className="text-black text-[14px] font-[500] sm:text-[16px] md:text-[18px] content-center "> Shop Women&apos;s</span>

              {/* arrow */}

              <Image
                src={leftArrowIcon}
                alt="Nike Air Max Pulse"
                className="w-[45px] h-[45px] object-cover rounded-[full] "
              />

              <Image
                src={rightArrowIcon}
                alt="Nike Air Max Pulse"
                className="w-[45px] h-[45px] object-cover rounded-[full]"
              />
            </div>


            {/* Cards start here */}

            <div className="md:flex md:gap-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">

              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[290px] h-[400px] mt-[7px] mb-[7px]">
                <Image
                  src={gearupImg3}
                  alt="Nike Air Max Pulse"
                  className="w-[290px] h-[300px] object-cover "
                />
                <div className="p-4">
                  <div className="flex justify-between items-center ">
                    <h3 className="text-black text-[12px] font-[700] md:text-[13px]">Nike Dri-FIT ADV Run Division</h3>
                    <span className="text-black text-[12px] font-[700]">₹ 5 295</span></div>

                  <div className="flex justify-start "><p className="text-[#757575] text-[14px]">Women&apos;s Long-Sleeve <br /> Running Top</p></div>

                </div>
              </div>


              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[290px] h-[400px] mt-[7px] mb-[7px]">
                <Image
                  src={gearupImg4}
                  alt="Nike Air Max Pulse"
                  className="w-[290px] h-[300px] object-cover "
                />
                <div className="p-4">
                  <div className="flex justify-between items-center ">
                    <h3 className="text-black text-[13px] font-[700] md:text-[13px]">Nike Fast</h3>
                    <span className="text-black text-[12px] font-[700]">₹ 3 795</span></div>

                  <div className="flex justify-start "><p className="text-[#757575] text-[14px]">Women&apos;s Mid-Rise 7/8 Running <br /> Leggings with Pockets</p></div>
                </div>
              </div>

            </div>
          </div>


        </div>


      </div>
    </>
  )
}

export default ThirdSection;
