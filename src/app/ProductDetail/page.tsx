import React from 'react'
import Image from "next/image"
import whitepinkshoes from "../assets/whitepinkshoes.png"
import shoppingcart from "../assets/shoppingcart.png"
import Link from "next/link"

const ProductDetail = () => {
  return (
    <div className="w-full h-auto bg-[#ffffff] flex justify-center items-center py-10 px-4">

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[70px] items-center">

        <Image 
          src={whitepinkshoes} 
          alt="Logo Image" 
          width={480}
          height={480}
          className="max-w-full h-auto"
        />

        <div className="w-full max-w-[371px] text-[#111111] items-center text-center lg:text-left">

          <h1 className="text-[30px] leading-[50px] font-[700]">
            Nike Air Force 1 PLT.AF.ORM
          </h1>

          <p className="text-[17px] leading-[25px] font-[500] mt-2">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>

          <p className="text-[30px] font-[500] mt-4">₹ 8 695.00</p>

         <Link href="/Cart"><div className="flex justify-center lg:justify-start mt-6 w-[190px] h-[50px] rounded-[40px] p-[16px] gap-[15px] bg-[#111111] text-[#FFFFFF] hover:bg-gray-900 focus:outline-none">
            <Image 
              src={shoppingcart} 
              alt="Logo Image" 
              className="h-[23px] w-[24px]"
            />
            <p>Add To Cart</p>
          </div></Link> 
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
