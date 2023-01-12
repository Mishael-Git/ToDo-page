import React from "react";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { BsGrid1X2Fill, BsLayers } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
function Sidebar() {
  return (
    <div className="pt-[3%] ">
      <div className="flex flex-col  bg-white p-2 mt-0 fixed space-y-6 z-10 w-20 items-center  h-full pt-12">
        <GrAppsRounded size={20} />
        <BsLayers size={20} />
        <RxLightningBolt size={20} />
        <BsGrid1X2Fill size={20} />
        <AiOutlineMail size={20} />
        <AiOutlineCalendar size={20} />
      </div>
    </div>
  );
}

export default Sidebar;
