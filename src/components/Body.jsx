import React from "react";
import { Buttom, Date, Mile, Search,  Top1, Top2, Ui } from "./Info";
function Body() {
  return (
    <div className="space-y-6">
     
      <div className="px-[8%] ">
        <div className=" flex flex-row w-full ">
        <Top1 />
        </div>
      </div>
      <div className="flex flex-grow h-screen ">
      { /* BODY LEFT */}
        <div className="h-screen flex-grow ">
          <div className="px-[10%]">
            <div className=" flex flex-row ">
              <Top2 />
            </div>
            </div>

            <div className="px-[10%]">
              <div className=" flex flex-row w-full ">
                <Ui />
              </div>
            </div>

            <div className="px-[10%]">
              <div className=" flex flex-row w-full ">
                <Search />
              </div>
            </div>

            <div className="px-[10%] ">
              <div className=" flex flex-row w-full ">
                <Buttom />
              </div>
            </div>
        </div>

        {/* BODY-RIGHT */}
        <div className="w-[20%]">
          <div className="w-full h-screen bg-slate-100 px-10 space-y-6 ">
            <Mile />
            <Date />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
