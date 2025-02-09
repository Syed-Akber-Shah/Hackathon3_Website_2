import React from 'react';
import Link from "next/link";
import Image from "next/image";
import twitterLogo from "../assets/twitterLogo.png"
import facebookLogo from "../assets/facebookLogo.png"
import youtubeLogo from "../assets/youtubeLogo.png"
import instagramLogo from "../assets/instagramLogo.png"
import locationLogo from "../assets/locationLogo.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-[80px]">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12 ">
        
        {/* Left Side */}
        <div className="lg:flex lg:justify-start lg:gap-[60px] md:flex md:gap-[60px] p-y-[30px]">
          {/* Find a Store */}
          <div>
            <h3 className="text-[18px] font-[500] text-[#FFFFFF] pt-[20px] ">Find a Store</h3>
            <ul className="space-y-2 text-[#FFFFFF] text-[14px] font-[500]">
              <li>Become A Member</li>
              <li>Sign Up for Email</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
          </div>

          {/* Get Help */}


          <div>
            <h3 className="text-[18px] font-[500] text-[#FFFFFF] pt-[20px]">Get Help</h3>
            <ul className="space-y-2 text-[#7E7E7E] text-[14px] font-[500]">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
       

          {/* About Nike */}


          <div>
            <h3 className="text-[18px] font-[500] text-[#FFFFFF] pt-[20px]">About NIKE</h3>
            <ul className="space-y-2 text-[#7E7E7E] text-[14px] font-[500]">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>


          
   
        </div>


        {/* Right Side */}
        <div className="flex-1 space-y-6 flex flex-col md:items-end items-start">
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-white">
     <Link href=""> <Image
         className="h-8"
         src={twitterLogo}
         alt="logo"
         /></Link>


     <Link href=""><Image
         className="h-8"
         src={facebookLogo}
         alt="logo"
         /></Link>


     <Link href=""><Image
         className="h-8"
         src={youtubeLogo}
         alt="logo"
         /></Link>


     <Link href=""><Image
         className="h-8"
         src={instagramLogo}
         alt="logo"
         /></Link>

          </div>
          </div>
          </div>

{/* end section */}
<div className="md:flex md:flex-row md:justify-between flex flex-col pt-[80px] ml-[20px] mr-[20px] ">
<div className="flex md:gap-[10px]  ">
        <Image
         className="h-5"
         src={locationLogo}
         alt="logo"
         />
         <p className="text-[#FFFFFF] text-[14px] font-[600]">Pakistan</p>
         <p className="text-[#7E7E7E] text-[14px] font-[400] pl-1">© 2024 Nike, Inc. All Rights Reserved</p>


</div>

          {/* Footer Links */}
          <div className=" text-[#7E7E7E] md:text-[16px] md:gap-[40px] md:flex md:flex-row gap-[40px] mt-[20px] text-[11px] flex flex-col">
            <Link href="#" className="hover:text-white">Guide</Link>
            <Link href="#" className="hover:text-white">Terms of Sale</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Nike Privacy Policy</Link>
          </div>
       
          </div> 
    </footer>
  );
}

export default Footer;

