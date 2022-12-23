import React from "react";
import { round1, round2, round3 } from "../assets/images/images";
import { IoMdAdd } from "react-icons/io";

function UiInfo() {
  return (
    <div className="  shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center ">
        <h1 class="font-bold text-lg">User Interface Projects</h1>
        {/* Images */}
        <div className="flex flex-row ">
          <div className="w-10 h-10">
            <img
              src={round1}
              className="w-full h-full object-contain object-cover rounded-full"
            />
          </div>

          <div className="w-10 h-10">
            <img
              src={round2}
              className="w-full h-full object-contain object-cover rounded-full"
            />
          </div>

          <div className="w-10 h-10">
            <img
              src={round3}
              className="w-full h-full object-contain object-cover rounded-full"
            />
          </div>
          <div className="w-10 h-10">
          <IoMdAdd s className='w-full h-full bg-slate-300 object-contain object-cover rounded-full'/>
          </div>
        </div>
        </div>
  );
}

export default UiInfo;
