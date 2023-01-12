import React from "react";

function MileStone() {
  return (
    <div>
      <h1 class="text-2xl font-bold">Milestones</h1>
      <div className="space-y-5 bg-white rounded-lg w-[110%] px-5 py-5">
        <div className="space-y-5">
          <div>
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-col items-center border border-spacing-2">
                <h1 class="text-base font-medium">SEP</h1>
                <h3 class="text-2xl font-extrabold">18</h3>
              </div>
              <div className="flex flex-col items-center">
                <h6>Write 15 blog articles on Medium</h6>
                <p>Office/Marketing</p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div className="border border-spacing-3 rounded-full w-32 h-3">
                <div className="w-full h-full rounded-full bg-slate-100">
                  <div className="w-[72%] h-full bg-[#971313] rounded-full"></div>
                </div>
              </div>
              <p>72% complete</p>
            </div>
          </div>

          {/*  */}
          <div>
            <div className="flex flex-row items-center space-x-4">
              <div className="flex flex-col items-center border border-spacing-2">
                <h1 class="text-base font-medium">NOV</h1>
                <h3 class="text-2xl font-extrabold">02</h3>
              </div>
              <div className="flex flex-col items-center">
                <h6>Pubish 20 dribbes</h6>
                <p>Office/Marketing</p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div className="border border-spacing-3 rounded-full w-32 h-3">
                <div className="w-full h-full rounded-full bg-slate-100">
                  <div className="w-[14%] h-full bg-[#971313] rounded-full"></div>
                </div>
              </div>
              <p>14% complete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MileStone;
