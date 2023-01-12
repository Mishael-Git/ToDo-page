import React from "react";
import { avatar } from "../assets/images/images";
import { BiSearch } from "react-icons/bi";
import { IoApps } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineFolder } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="flex flex-row  bg-white p-2 mt-0 fixed w-full justify-between z-[999] top-0 items-center px-5">
      {/*  */}
      <div className="flex items-end justify-center ">
        <h1 class="text-2xl font-extrabold text-4xl">t</h1>
        <p class="text-red-600 font-bold text-4xl text-center">.</p>
      </div>
      {/*  */}
      <div className="flex flex-row items-center justify-center space-x-9">
        <p class="font-bold text-lg text-slate-500 hover:underline text-black ease-out duration-300 cursor-pointer">
          Start
        </p>
        <p class="font-bold text-lg text-slate-500 cursor- hover:text-slate-800">Projects</p>
        <p class="font-bold text-lg text-slate-500 cursor- hover:text-slate-800">Planning</p>
        <p class="font-bold text-lg text-slate-500 cursor- hover:text-slate-800">Calendar</p>
        <p class="font-bold text-lg text-slate-500 cursor- hover:text-slate-800">Team</p>
      </div>
      {/*  */}
      <div className="flex items-center justify-center space-x-4">
        <BiSearch size={20} className="cursor-pointer hover:text-slate-600" />
        <IoApps size={20} className="cursor-pointer hover:text-slate-600" />
        <IoMdAddCircleOutline size={20} className="cursor-pointer hover:text-slate-600" />
        <AiOutlineFolder size={20} className="cursor-pointer hover:text-slate-600" />
        <GrNotification size={20} className="hover:text-slate-600 cursor-pointer" />
        <div className="w-10 h-10">
          <img
            src={avatar}
            className="w-full h-full rounded-full object-contain object-cover"
          />
        </div>
        <RiArrowDropDownLine size={30} className="cursor-pointer hover:bg-slate-300 rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
