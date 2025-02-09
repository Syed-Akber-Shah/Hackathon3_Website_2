// components/CategorySection.js
import React from 'react';

const CategorySection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Icons Category */}
          <div>
            <h3 className="text-black text-[18px] sm:text-[18px] font-[700] mb-4">Icons</h3>
            <ul className="space-y-2 text-[16px] font-[500]">
              <li className="text-[#757575]">Air Force 1</li>
              <li className="text-[#757575]">Huarache</li>
              <li className="text-[#757575]">Air Max 90</li>
              <li className="text-[#757575]">Air Max 95</li>
            </ul>
          </div>

          {/* Shoes Category */}
          <div>
            <h3 className="text-black text-[18px] sm:text-[18px] font-[700] mb-4">Shoes</h3>
            <ul className="space-y-2 text-[16px] font-[500]">
              <li className="text-[#757575]">All Shoes</li>
              <li className="text-[#757575]">Custom Shoes</li>
              <li className="text-[#757575]">Jardon Shoes</li>
              <li className="text-[#757575]">Running Shoes</li>
            </ul>
          </div>

          {/* Clothing Category */}
          <div>
            <h3 className="text-black text-[18px] sm:text-[18px] font-[700] mb-4">Clothing</h3>
            <ol className="text-[16px] font-[500] space-y-2">
              <li className="text-[#757575]">All Clothing</li>
              <li className="text-[#757575]">Modest Wear</li>
              <li className="text-[#757575]">Hoodies & Pullovers</li>
              <li className="text-[#757575]">Shirts & Tops</li>
            </ol>
          </div>

          {/* Kids Category */}
          <div>
            <h3 className="text-black text-[18px] sm:text-[18px] font-[700] mb-4">Kids</h3>
            <ul className="space-y-2 text-[16px] font-[500]">
              <li className="text-[#757575]">Infant & Toddler Shoes</li>
              <li className="text-[#757575]">Kids&apos; Shoes</li>
              <li className="text-[#757575]">Kids&apos; Jordan Shoes</li>
              <li className="text-[#757575]">Kids&apos; Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
