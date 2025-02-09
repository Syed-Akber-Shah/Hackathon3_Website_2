import React from 'react'
import HeroSection from './Component/HeroSection';
import FirstSection from "./Component/firstSection"
import SecondSection from "./Component/secondSection"
import ThirdSection from "./Component/ThirdSection";
import FourthSection from "./Component/FourthSection";
import FifthSection from "./Component/FifthSection";
import SixthSection from "./Component/SixthSection";


const page = () => {
  return (
    <div>
      <HeroSection/>
      <FirstSection/>
      <SecondSection />
      <ThirdSection />
      <FourthSection/>
      <FifthSection />
      <SixthSection />
    </div>
  )}
  
  export default page;