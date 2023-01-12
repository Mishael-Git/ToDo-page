import React from "react";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { BsGrid1X2Fill, BsLayers } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
function Sidebar() {
  return (
    <div className="pt-[3%] ">
      <div className="flex flex-col  bg-white p-2 mt-0 fixed space-y-6 z-10 w-20 items-center  h-full pt-12">
        <GrAppsRounded size={20} className="cursor-pointer" />
        <BsLayers size={20} className="cursor-pointer" />
        <RxLightningBolt size={20} className="cursor-pointer" />
        <BsGrid1X2Fill size={20} className="cursor-pointer" />
        <AiOutlineMail size={20} className="cursor-pointer" />
        <AiOutlineCalendar size={20} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Sidebar;
