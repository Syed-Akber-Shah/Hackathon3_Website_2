import React from 'react'
import Link from "next/link"
import Image from "next/image"
import NikeLogo from "../assets/NikeLogo.png"
import heartIcon from "../assets/heartIcon.png"
import bagIcon from "../assets/bagIcon.png"

const page = () => {
  return (
    <div>

      {/* Second Navbar */}
      <nav className="bg-white shadow-sm ">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image
              src={NikeLogo}
              alt="Logo"
              className="h-7" />
          </div>

          {/* Center: Navigation Links */}
          <div className=" space-x-6 md:flex">
          <Link href="/" className="text-black md:hidden font-[600] text-[10px]">Skip to main content</Link>
            <Link href="/Products" className="text-black md:text-[14px] font-[600] text-[10px]">New & Featured</Link>
            <Link href="/shop" className="text-black md:text-[14px] md:font-[600] md:block  hidden">Men</Link>
            <Link href="/" className="text-black md:text-[14px] md:font-[600] md:block  hidden">Women</Link>
            <Link href="/" className="text-black md:text-[14px] md:font-[600] md:block  hidden">Kids</Link>
            <Link href="/" className="text-black md:text-[14px] md:font-[600] md:block  hidden">Sale</Link>
            <Link href="/" className="text-black md:text-[14px] md:font-[600] md:block hidden">SNKRS</Link>
          </div>

          {/* Right: Icons and Search Bar */}
          <div className="flex md:items-center md:space-x-3">

            {/* Search Bar */}


            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Search"
                className="md:text-black md:px-1 md:block md:py-[4px] md:rounded-full md:border md:border-gray-300 hidden"

              /> </div>

            {/* Shopping Bag Icon */}
            <div className="flex-shrink-0">
              <Image
                className="h-6"
                src={heartIcon}
                alt="logo"
              />
            </div>

            {/* Heart Icon */}
            <Link href="/Cart"> <div className="flex-shrink-0">

              <Image
                className="h-6"
                src={bagIcon}
                alt="logo"
              />
            </div></Link>


          </div>
        </div>
      </nav>



    </div>
  )
}

export default page
