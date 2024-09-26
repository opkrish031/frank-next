import React from "react";
import SliderCard from "./SliderCard";

export default function SliderCarousel() {
  return (
    <>
      <div className="w-[96%] mx-auto">
        <h2 className="text-[40px] font-[100] my-14 font-circular ">This Just In</h2>
        <div className=" flex ">
          <SliderCard />
        </div>
      </div>
    </>
  );
}
