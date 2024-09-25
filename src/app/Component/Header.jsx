import React from "react";
import Logo from "./Logo";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {
  return (
    <div>
      <nav className="w-[95%] mx-auto sticky top-0 items-center justify-between flex gap-12">
        <aside className="flex gap-10 items-center">
          <Logo />
          <ul className="flex gap-8 font-circular font-[100]  ">
            <li className="hover:bg-[#F9F9F9] p-3 transition-all delay-50 hover:underline cursor-pointer">This Just In</li>
            <li className="hover:bg-[#F9F9F9] p-3 transition-all delay-50 hover:underline cursor-pointer">Women</li>
            <li className="hover:bg-[#F9F9F9] p-3 transition-all delay-50 hover:underline cursor-pointer">Men</li>
            <li className="hover:bg-[#F9F9F9] p-3 transition-all delay-50 hover:underline cursor-pointer">Our Story</li>
          </ul>
        </aside>
        <aside className="flex gap-8 items-center">
          <CiSearch className="text-3xl cursor-pointer"/>
          <FaRegCircleUser className="text-2xl cursor-pointer"/>
          <CiHeart className="text-3xl cursor-pointer"/>
          <HiOutlineShoppingBag className="text-2xl cursor-pointer"/>
        </aside>
      </nav>
    </div>
  );
}
