import React from "react";
import { BsCircle, BsListUl } from "react-icons/bs";
import { IoMdAlarm } from "react-icons/io";
import { GoListOrdered } from "react-icons/go";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiAlarmAdd } from "react-icons/bi";
import { MdOutlineDangerous } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { round1 } from "../assets/images/images";
function Search() {
  return (
    <div className="bg-white rounded-lg tracking-wider ">
      <BsCircle />
      <div className="flex flex-row justify-between items-center space-x-64  z-50 w-full px-5 py-2  ">
        <div className="flex flex-col  ">
          <h4 class="text-base font-semibold text-ellipsis">
            Search inspiration for upcoming projects
          </h4>
        </div>
        <div className="flex flex-row space-x-2 items-center justify-center">
          <div className="flex flex-row items-center border rounded-lg bg-slate-100 space-x-2">
            <IoMdAlarm size={20} />
            <p>Reminder</p>
          </div>
          <div className="flex flex-row items-center border rounded-lg bg-slate-100 space-x-2">
            <GoListOrdered />
            <p>Priority</p>
          </div>
          <div className="rounded-lg bg-slate-100">
            <TfiMoreAlt />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-5">
        <p>There is so much great inspiration in this world </p>
      </div>
      {/*  */}
      <div className="flex flex-row space-x-2 p-2 z-10 px-5 justify-between ">
        <div className="flex flex-row items-center space-x-3">
          <div className="w-8 h-8">
            <img
              src={round1}
              className="w-full h-full object-contain object-cover rounded-full"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <BiAlarmAdd size={20} />
            <p>02:42:12</p>
          </div>
        </div>
        <div className="flex flex-row justify-between space-x-3 items-baseline">
          <div className="flex flex-row items-center rounded-md bg-[#bbf7d0]">
            <p>New Client</p>
            <MdOutlineDangerous size={20} />
          </div>
          <div className="flex flex-row items-baseline mt-2 space-x-3">
            <div className=" border border-spacing-9 rounded-full  w-32 h-3">
              <div className={`bg-gray-100  w-full h-full`}>
                <div className="rounded-full bg-[#168607e0] h-full w-[60%]"></div>
              </div>
            </div>
            <p>60% complete</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2">
            <p>3 Comments</p>
            <BiMessageRounded size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
