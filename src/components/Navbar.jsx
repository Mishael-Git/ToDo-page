import React from "react";
import { avatar } from "../assets/images/images";
import { BiHelpCircle, BiSearch } from "react-icons/bi";
import { IoApps } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineFolder } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { MdSettings } from "react-icons/md";

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
        <p class="font-bold text-lg text-slate-500 cursor-pointer hover:text-slate-800">
          Projects
        </p>
        <p class="font-bold text-lg text-slate-500 cursor-pointer hover:text-slate-800">
          Planning
        </p>
        <p class="font-bold text-lg text-slate-500 cursor-pointer hover:text-slate-800">
          Calendar
        </p>
        <p class="font-bold text-lg text-slate-500 cursor-pointer hover:text-slate-800">
          Team
        </p>
      </div>
      {/*  */}
      <div className="flex items-center justify-center space-x-4">
        <BiSearch size={20} className="cursor-pointer hover:text-slate-600" />
        <IoApps size={20} className="cursor-pointer hover:text-slate-600" />
        <IoMdAddCircleOutline
          size={20}
          className="cursor-pointer hover:text-slate-600"
        />
        <AiOutlineFolder
          size={20}
          className="cursor-pointer hover:text-slate-600"
        />
        <GrNotification
          size={20}
          className="hover:text-slate-600 cursor-pointer"
        />
        <button className="flex justify-center items-center rounded group">
          <div className="w-10 h-10">
            <img
              src={avatar}
              className="w-full h-full cursor-pointer rounded-full object-contain object-cover"
            />
          </div>
          <div className="absolute hidden top-full group-focus:block  w-[40%] w-max pr-52 bg-white shadow-md mt-1 rounded">
            <div className="flex items-center justify-start space-x-4 px-2 border-b ">
              <div className="w-11 h-11">
                <img
                  src={avatar}
                  className="w-full h-full cursor-pointer rounded-full object-contain object-cover"
                />
              </div>
              <h1>John Michael</h1>
              </div>
              <ul>
                <li class="flex items-center justify-start space-x-3 px-4 py-1 hover:bg-gray-100 border-b">
                  <CgProfile size={30}/>
                  <p>Edit Profile</p> </li>
                <li class="flex items-center justify-start space-x-3 px-4 py-1 hover:bg-gray-100 border-b">
                  <MdSettings size={30}/>
                 <p>Settings & Privacy</p></li>
                <li class="flex items-center justify-start space-x-3 px-4 py-1 hover:bg-gray-100 border-b">
                  <BiHelpCircle size={30}/>
                 <p>Help</p></li>
                <li class="flex items-center justify-start space-x-3 px-4 py-1 hover:bg-gray-100 border-b">
                  <CgLogOut size={30}/>
                 <Link to="signin"><p>Logout</p> </Link></li>
              </ul>

  
          </div>
        </button>
        <button className=" flex items-center justify-center  rounded group ">
          <RiArrowDropDownLine
            size={30}
            className="cursor-pointer hover:bg-slate-300 rounded-full"
          />
          <div className="absolute hidden top-full group-focus:block min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded">
              <li class="px-4 py-1 hover:bg-gray-100 border-b">About</li>
              <Link to="/signin"><li class="px-4 py-1 hover:bg-gray-100 border-b">Sign out</li> </Link>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
