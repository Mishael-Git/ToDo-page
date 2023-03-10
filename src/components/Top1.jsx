import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Top1() {
  return (
    <div className="flex flex-row   p-2 mt-0 w-full justify-between z-10 top-0 items-center ">
      <h1 class="text-3xl font-extrabold">My work</h1>
      <div className="flex flex-row items-center space-x-3 ">
        <div className="flex  items-center justify-center h-7 w-28  bg-[#2a3385] rounded-lg tracking-widest">
          <span class="cursor-pointer text-slate-100">Add task</span>
          <IoIosArrowDown size={20} className="cursor-pointer hover:text-slate-500 ease-in duration-300 border-l-2" />
        </div>
        <div className="border rounded-sm">
          <AiOutlineSetting size={20} />
        </div>
      </div>
    </div>
  );
}

export default Top1;
