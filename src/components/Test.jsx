import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function Test() {
  return (
      <div className="flex relative items-center justify-center gap-5 pt-20 ">
        <button className="flex relative items-center bg-[#dd456b] justify-center  text-slate-900 rounded group ">
          <Link to="/home">
          <RiArrowDropDownLine
            size={30}
            className="cursor-pointer hover:bg-slate-300 rounded-full"
          />
          </Link>
          <div className="absolute hidden top-full group-focus:block min-w-full w-max bg-white shadow-md mt-1 rounded">
            <ul className="text-left border rounded">
              <li class="px-4 py-1 hover:bg-gray-100 border-b">Menu list-1</li>
              <li class="px-4 py-1 hover:bg-gray-100 border-b">Menu list-2</li>
              <li class="px-4 py-1 hover:bg-gray-100 border-b">Menu list-3</li>
              <li class="px-4 py-1 hover:bg-gray-100 border-b">Menu list-4</li>
              <li class="px-4 py-1 hover:bg-gray-100 border-b">Menu list-5</li>
            </ul>
          </div>
        </button>
      </div>
  );
}

export default Test;
