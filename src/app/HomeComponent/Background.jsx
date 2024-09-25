import React from "react";
import truck from "../Images/Shipping-black_2_ce714247-b176-4ecf-832e-fa3a2a773e20.png";
import timer from "../Images/Sezzle.png";
import returnPro from "../Images/Returns-black_40542005-7a75-4b5b-89fe-190bad6422e6.png";
import club from "../Images/franks-club-icon-1.png";
import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="relative bg-[url(https://www.frankandoak.com/cdn/shop/files/HP_DESKTOP_1440x640_5be018d4-b6ee-4ce8-ad98-4612ffe0d628_2160x.jpg?v=1725902107)] h-[85vh] w-[100%] bg-center bg-cover bg-no-repeat">
        <div className="absolute top-[60%] left-20 w-[90%] mx-auto">
          <h2 className="text-[48px] text-white font-circular ">
            The Fall Collection
          </h2>
          <div className="flex gap-16">
            <button className="bg-white text-black font-bold px-10 py-3">
              Women
            </button>
            <button className="bg-white text-black font-bold px-10 py-3">
              Men
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-black p-3 text-sm text-white">
        <div className="flex justify-between w-[60%] mx-auto">
          <div className="text-white flex items-center gap-2">
            <Image src={truck} width={20}></Image>
            Free Shipping over $99
          </div>
          <div className="text-white flex items-center gap-2">
            <Image src={returnPro} width={20}></Image>
            Free Returns{" "}
          </div>
          <div className="text-white flex items-center gap-2">
            <Image src={club} width={20}></Image>
            Earn Points{" "}
          </div>
          <div className="text-white flex items-center gap-2">
            <Image src={timer} width={20}></Image>
            Buy Now, Pay Later{" "}
          </div>
        </div>
      </div>
    </>
  );
}
