import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsLock } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { GoListOrdered } from "react-icons/go";
import { Mile } from "./Info";
function TopInfo() {
  return (
    <div>
      <div className="space-y-10 z-50 items-center   py-2 ">
        <div className="flex flex-row items-center justify-between space-x-4 z-50 w-full px-5 py-2">
          <div className="flex flex-row items-center">
            <IoIosArrowForward />
            <BsLock className="text-purple-900" />
            <p class="text-purple-900 font-semibold">Personal tasks</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-row space-x-96  px-5">
          <div className="flex flex-row items-center space-x-3">
            <IoIosArrowDown />
            <p class="font-semibold">Tasks</p>
          </div>
          <div className="flex flex-row space-x-2 pl-28 w-full ">
            <div className="flex flex-row items-center justify-center space-x-2 border rounded-lg bg-slate-100">
              <BsListUl />
              <p>List</p>
              <IoIosArrowDown />
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 border rounded-lg bg-slate-100">
              <GoListOrdered />
              <p>Starting date(desc) </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopInfo;
