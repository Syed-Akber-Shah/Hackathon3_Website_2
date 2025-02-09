import React from 'react'
import Link from "next/link"
import Image from "next/image"
import mainLogo from "../assets/mainLogo.png"
// components/Navbar.js


const Navbar = () => {
  return (
    <nav className="bg-[#F5F5F5]">
      <div className="max-w-screen-xl mx-auto px-4 py-[6px] flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
         <Image 
         src={mainLogo}
         alt='Jordan'/>
        </div>


        {/* Right: Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/Products" className="text-black text-[10px] md:text-[14px] font-[600]">Find a Store </Link>
          <span className="text-black">|</span>

          <Link href="/Help" className="text-black text-[10px]  md:text-[14px] font-[600]"> Help </Link>
          <span className="text-black">|</span>

          <Link href="/Joinus" className="text-black text-[10px]  md:text-[14px] font-[600]">Join us </Link>
          <span className="text-black">|</span>

          <Link href="/Signin" className="text-black text-[10px]  md:text-[14px] font-[600]">Sign in</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

