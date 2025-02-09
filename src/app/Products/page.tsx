import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import image from "../assets/Rectangle.png"
import image1 from "../assets/Rectangle (1).png"
import image2 from "../assets/Rectangle (2).png"
import image3 from "../assets/Rectangle (3).png"
import image4 from "../assets/Rectangle (4).png"
import image5 from "../assets/Rectangle (5).png"
import image6 from "../assets/Rectangle (6).png"
import image7 from "../assets/Rectangle (7).png"
import image8 from "../assets/Rectangle (8).png"
import image9 from "../assets/Rectangle (9).png"
import image10 from "../assets/Rectangle (10).png"
import image11 from "../assets/Rectangle (11).png"
import image12 from "../assets/Rectangle (12).png"
import image13 from "../assets/Rectangle (13).png"
import image14 from "../assets/Rectangle (14).png"
import image15 from "../assets/Rectangle (15).png"
import image16 from "../assets/Rectangle (16).png"
import image17 from "../assets/Rectangle (17).png"
import image18 from "../assets/Rectangle (18).png"
import image19 from "../assets/Rectangle (19).png"
import image20 from "../assets/Rectangle (20).png"
import image21 from "../assets/Rectangle (21).png"
import image22 from "../assets/Rectangle (22).png"
import image23 from "../assets/Rectangle (23).png"
import image24 from "../assets/Rectangle (24).png"
import image25 from "../assets/Rectangle (25).png"
import image26 from "../assets/Rectangle (26).png"
import image27 from "../assets/Rectangle (27).png"
import image28 from "../assets/Rectangle (28).png"
import image29 from "../assets/Rectangle (29).png"


const ProductPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-6 space-x-0 lg:space-x-4">

        {/* Sidebar: Navbar */}
        <div className="w-full lg:w-[250px] bg-white border-r border-gray-300">
          <ul className="list-none p-3">
            <li className="text-gray-700 mb-2">Shoes</li>
            <li className="text-gray-700 mb-2">Sports Bras</li>
            <li className="text-gray-700 mb-2">Tops & T-Shirts</li>
            <li className="text-gray-700 mb-2">Hoodies & Sweatshirts</li>
            <li className="text-gray-700 mb-2">Jackets</li>
            <li className="text-gray-700 mb-2">Trousers & Tights</li>
            <li className="text-gray-700 mb-2">Shorts</li>
            <li className="text-gray-700 mb-2">Tracksuits</li>
            <li className="text-gray-700 mb-2">Jumpsuits & Rompers</li>
            <li className="text-gray-700 mb-2">Skirts & Dresses</li>
            <li className="text-gray-700 mb-2">Socks</li>
            <li className="text-gray-700 mb-2">Accessories & Equipment</li>
          </ul>
        </div>

        {/* Vertical Separator */}
        <div className="border-l border-gray-300 h-full lg:block hidden mx-4"></div>

        {/* Product Cards */}
        <div className="flex flex-col lg:flex-row w-full lg:space-x-4 space-y-6 lg:space-y-0">


          {/* Product Card 1*/}
          <div className="w-full lg:w-[348px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">

              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>

              {/* Product Name */}
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Force 1 Mid &apos;07</h1>

              {/* Category */}
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>

              {/* Additional Category */}
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>

              {/* MRP */}
              <h1 className="text-[15px] font-[500] mt-1">MRP: ₹ 10,795.00</h1>
            </div>
          </div>


          {/* Product Card 2*/}
          <div className="w-full lg:w-[348px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image1}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">

              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>

              {/* Product Name */}
              <h1 className="text-[15px] font-[500] mt-1">Nike Court Vision Low Next Nature</h1>

              {/* Category */}
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>

              {/* Additional Category */}
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>

              {/* MRP */}
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 4 995.00</h1>
            </div>
          </div>


          {/* Product Card 3*/}
          <div className="w-full lg:w-[348px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image2}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">

              <Link href="/ProductDetail"> <h3 className="text-red-600 text-[17px] font-[800]">Click to View</h3></Link>


              {/* Product Name */}
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Force 1 PLT.AF.ORM</h1>

              {/* Category */}
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>

              {/* Additional Category */}
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>

              {/* MRP */}
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 8 695.00</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row p-6 space-x-0 lg:space-x-4">
        {/* Sidebar: Navbar */}
        <div className="w-full lg:w-[250px] bg-white border-r border-gray-300">
          <div>


            {/* cheak boxes*/}
            <h1 className="text-[21px] font-[500] pt-[10px]">Gender</h1>


            <div className="flex items-center justify-between mb-2 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">Men</label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">Women</label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">Unisex</label>
              </div>
            </div>

            {/* cheak boxes for kids*/}
            <h1 className="text-[21px] font-[500] pt-[15px]">Kids</h1>


            <div className="flex items-center justify-between mb-3 mt-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">Boys</label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3 mt-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">Girls</label>
              </div>
            </div>

            {/* cheak boxes for shop by price*/}
            <h1 className="text-[21px] font-[500] pt-[15px]">Shop by price</h1>


            <div className="flex items-center justify-between mb-3 mt-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">Under ₹ 2 500.00</label>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3 mt-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mr-2 h-4 w-4 text-black border-2 border-gray-300 rounded focus:ring-2 focus:ring-black checked:bg-black checked:border-black"
                />
                <label htmlFor="newsletter" className="text-sm text-[#000000]">₹ 2 501.00 - ₹ 7 500.00</label>
              </div>
            </div>
          </div>
        </div>


        {/* Product Cards */}
        <div className="flex flex-col lg:flex-row w-full lg:space-x-4 space-y-6 lg:space-y-0">


          {/* Product Card 4*/}
          <div className="w-full lg:w-[348px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image3}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">

              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>

              {/* Product Name */}
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Force 1 React</h1>

              {/* Category */}
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>

              {/* Additional Category */}
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>

              {/* MRP */}
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 13 295.00</h1>
            </div>
          </div>


          {/* Product Card 5*/}
          <div className="w-full lg:w-[348px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image4}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">

              <h3 className="text-red-600 text-sm font-semibold">Promo Exclusion</h3>

              {/* Product Name */}
              <h1 className="text-[15px] font-[500] mt-1">Air Jordan 1 Elevate Low</h1>

              {/* Category */}
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>

              {/* Additional Category */}
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>

              {/* MRP */}
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 11 895.00</h1>
            </div>
          </div>


          {/* Product Card 6*/}
          <div className="w-full lg:w-[348px] h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image5}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">

              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>

              {/* Product Name */}
              <h1 className="text-[15px] font-[500] mt-1">Nike Standard Issue</h1>

              {/* Category */}
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Basketball Jersey</p>

              {/* Additional Category */}
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>

              {/* MRP */}
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 2 895.00</h1>
            </div>
          </div>
        </div>
      </div>


      {/* Cards without side nav */}

      <div className="flex flex-col p-6 space-x-0 lg:space-x-3">
        {/* Product Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:ml-20">

          {/* Product Card 7*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image6}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Promo Exclusion</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dunk Low Retro SE</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 9 695.00</h1>
            </div>
          </div>

          {/* Product Card 8*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image7}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dri-FIT UV Hyverse</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Short-Sleeve Graphic Fitness</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 2 495.00</h1>
            </div>
          </div>

          {/* Product Card 9*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image8}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Court Vision Low</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 5 695.00</h1>
            </div>
          </div>

          {/* Product Card 10*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image9}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dri-FIT Ready</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Short-Sleeve Fitness Top</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">3 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 2 495.00</h1>
            </div>
          </div>


          {/* Product Card 11*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image10}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike One Leak Protection: Period</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Biker Shorts</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 3 395.00</h1>
            </div>
          </div>


          {/* Product Card 12*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image11}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Force 1 LV8 3</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Older Kids&apos; Shoe</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 7 495.00</h1>
            </div>
          </div>


          {/* Product Card 13*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image12}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Blazer Low Platform</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 8 195.00</h1>
            </div>
          </div>



          {/* Product Card 14*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image13}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Force 1 &apos;07</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 8 195.00</h1>
            </div>
          </div>


          {/* Product Card 15*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image14}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Pro Dri-FIT</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Tight-Fit Sleeveless Top</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 1 495.00</h1>
            </div>
          </div>



          {/* Product Card 16*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image15}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dunk Low Retro</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 8 695.00</h1>
            </div>
          </div>



          {/* Product Card 17*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image16}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Max SC</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 5 995.00</h1>
            </div>
          </div>




          {/* Product Card 18*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image17}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dri-FIT UV Miler</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Short-Sleeve Running Top</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 1 695.00</h1>
            </div>
          </div>



          {/* Product Card 19*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image18}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Air Max SYSTM</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Older Kids&apos; Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 6 495.00</h1>
            </div>
          </div>


          {/* Product Card 20*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image19}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Alate All U</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 2 195.00</h1>
            </div>
          </div>


          {/* Product Card 21*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image20}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Court Legacy Lift</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 7 495.00</h1>
            </div>
          </div>


          {/* Product Card 22*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image21}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Swoosh</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Medium-support </p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 3 095.00</h1>
            </div>
          </div>


          {/* Product Card 23*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image22}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike SB Zoom Janoski OG+</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1"> Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 8 595.00</h1>
            </div>
          </div>


          {/* Product Card 24*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image23}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dri-FIT Run Division Rise 365</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Running Tank</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 3 495.00</h1>
            </div>
          </div>



          {/* Product Card 25*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image24}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Dri-FIT Challenger</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Versatile Shorts</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 2 495.00</h1>
            </div>
          </div>


          {/* Product Card 26*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image25}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Jordan Series ES</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Men&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 7 495.00</h1>
            </div>
          </div>


          {/* Product Card 27*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image26}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Outdoor Play</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Kids&apos; Oversized Woven Jacket</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 3 895.00</h1>
            </div>
          </div>



          {/* Product Card 28*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image27}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Sportswear Trend</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1"> Kids&apos; High-waisted Woven Shorts</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">2 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 2 495.00</h1>
            </div>
          </div>



          {/* Product Card 29*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image28}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike Blazer Low &apos;77 Jumbo</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Women&apos;s Shoes</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 8 595.00</h1>
            </div>
          </div>



          {/* Product Card 30*/}
          <div className="w-full h-[370px] bg-white border border-gray-300 rounded-lg shadow-lg">
            {/* Product Image */}
            <Image
              src={image29}
              alt="Nike Air Force 1 Mid '07"
              className="w-full h-[37vh] object-cover"
            />

            {/* Texts below the image */}
            <div className="p-4">
              <h3 className="text-red-600 text-sm font-semibold">Just In</h3>
              <h1 className="text-[15px] font-[500] mt-1">Nike SB Force 58</h1>
              <p className="text-[#757575] text-[14px] font-[500] mt-1">Skate Shoe</p>
              <p className="text-[#757575] text-[500] font-[500] mt-1">1 Colour</p>
              <h1 className="text-[15px] font-[500] mt-1">MRP : ₹ 5 995.00</h1>
            </div>
          </div>




        </div>
      </div>





    </>





  );
};

export default ProductPage;
