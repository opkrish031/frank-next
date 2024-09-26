import React from "react";
import { CiHeart } from "react-icons/ci";

export default function SliderCard() {
  return (
    <>
      <div className="w-[25%]">
        <div className="relative">
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310173-5JR.01_450x.jpg?v=1721145183"
            }
            alt=""
            
          />
          <p className="text-[#FB4B21] bg-white p-1 absolute top-1 left-1 z-20 text-[12px]">-26%</p>
        </div>
        <p className="my-1 text-black text-sm font-bold">
          The Zip Up Bomber Jacket in Light Beige
          <CiHeart className="float-right text-[20px] font-bold" />
        </p>
        <div className="my-1 flex gap-2">
          <p className="text-sm line-through">$149.00 </p>
          <span className="text-[#FB4B21] text-sm">$109.99</span>
        </div>
        <p className="my-1 text-[#ADAA92] text-sm">1 color</p>
      </div>
    </>
  );
}
