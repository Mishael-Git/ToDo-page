import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { IoMdAlarm } from "react-icons/io";
import { MdOutlineDangerous } from "react-icons/md";
import { TfiMoreAlt } from "react-icons/tfi";
import { round1, round2, round3 } from "../assets/images/images";
function BottomInfo() {
  return (
    <div className="bg-slate-50 rounded-lg tracking-wider ">
      <div className="flex flex-row justify-between items-center space-x-64  z-50 w-full px-5 py-2">
        <div className="flex flex-row items-center justify-center space-x-3">
          <BsCircle />
          <h4 class="text-base font-semibold">
            Create designs for the first round
          </h4>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <div className="border rounded-full bg-red-300 tracking-wider">
            <p>Important</p>
          </div>
          <div className="flex flex-row items-center justify-center border rounded-lg bg-slate-100 space-x-2">
            <IoMdAlarm size={20} />
            <p>Reminder</p>
          </div>
          <div className="rounded-lg bg-slate-100">
            <TfiMoreAlt />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-5">
        <p>Projects are about modern tech,so keep minimalistic </p>
      </div>
      {/*  */}
      <h4 class="text-base font-semibold pl-5">Sub-Tasks</h4>
      <div className="flex flex-row justify-between items-center space-x-64  z-50 w-full px-5 py-2">
        <div className="flex flex-row items-center justify-center space-x-3">
          <BsCircle />
          <h6>Draw rough sketches</h6>
          <button className="text-slate-600 hover:text-black ease-in duration-300">
            Show less
          </button>
        </div>
        <div className="rounded-lg bg-slate-100">
          <TfiMoreAlt />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-5">
        <p>Prepare first concept of project (two versions needed)</p>
      </div>
      {/* images */}
      <div className="flex flex-row space-x-2 p-2 z-10 px-5 justify-between ">
        <div className="flex flex-row items-center justify-center space-x-3">
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
          <IoMdAlarm size={20} />
          <p>05:12:48</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3">
          <div className="rounded-full border-spacing-2 border w-32 h-3 ">
            <div className="w-full h-full bg-slate-100 rounded-full">
              <div className="w-[28%] bg-[#168607e0] h-full rounded-full"></div>
            </div>
          </div>
          <p>28% complete</p>
          <div className="flex flex-row items-center justify-center space-x-2">
            <p>1 Comments</p>
            <BiMessageRounded size={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center space-x-64  z-50 w-full px-5 py-2">
        <div className="flex flex-row items-center justify-center space-x-3">
          <BsCircle />
          <h6>Create Styleguide</h6>
          <button class="text-slate-600 hover:text-black ease-in duration-300">
            Show more
          </button>
        </div>
        <div className="rounded-lg bg-slate-100">
          <TfiMoreAlt />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-row items-center justify-between px-5 py-2">
      <div className="flex flex-row items-center ">
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
        <IoMdAlarm size={20} />
        <p>00:00:00</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3">
      <div className="flex flex-row items-center">
        <p>StyleGuide</p>
        <MdOutlineDangerous size={20}/>
      </div>
      <div>
        <p>+2</p>
      </div>
      <div className="border border-spacing-3 w-32 h-3 rounded-full">
        <div className="w-full h-full bg-slate-100 rounded-full"></div>
      </div>
      <p>0% complete</p>
      <div className="flex flex-row items-center justify-center space-x-3">
        <p>4 Comments</p>
        <BiMessageRounded size={20} />
      </div>
      </div>
     
      </div>
     
    </div>
  );
}

export default BottomInfo;
