import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sign_up() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" p-6 md:w-[34%] sm:w-[10%] shadow-lg bg-white space-y-8 rounded-md">
        <p class="text-3xl block text-center font-semibold">Sign Up</p>
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <form action="POST">
            <div className="flex items-center border rounded-md px-2 text-2xl font-semibold">
              <CgProfile size={20} />
              <input
                placeholder="Username or email"
                type="email"
                name=""
                id=""
                className=" w-full h-[50px] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              />
            </div>
            <div className="flex items-center border rounded-md px-2 text-2xl font-semibold ">
              <FaLock size={20} />
              <input
                placeholder="Password"
                type="password"
                name=""
                id=""
                className=" w-full h-[50px] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
              />
            </div>
            <Link to="/dashboard">
          <div className="mt-5 ">
            <button
              type="submit"
              class="border-2 border-[#37a137] rounded-lg bg-[#37a137] text-white hover:text-slate-600 hover:bg-transparent text-xl font-semibold py-1 w-full"
            >
              Sign up
            </button>
          </div>
        </Link>
          </form>
        </div>
        <p class="flex justify-center items-center">Or</p>
         {/* Google & Facebook */}
         <div className="p-6 ">
          <div className="flex md:flex-row sm:flex-col justify-center items-center md:space-x-10">
            <div className="flex  mt-5 items-start w-full bg-[#f31111] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                class="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                Google
              </button>
            </div>
            {/* Facebook */}
            <div className="flex  mt-5 items-center w-full bg-[#160674da] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                class="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                Facebook
              </button>
            </div>
          </div>
          {/* Linledin & GitHub */}
          <div className="flex md:flex-row sm:flex-col items-center justify-center md:space-x-10">
            <div className="flex  mt-5 items-center w-full bg-[#336492] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                class="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                Linkedin
              </button>
            </div>
            {/* Github */}

            <div className="flex  mt-5 items-center w-full bg-[#1b1a1a] rounded-lg hover:bg-transparent px-5">
              <button
                type="submit"
                class="text-white hover:text-slate-600 text-xl font-semibold  py-1 w-full"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p class="text-xl font-semibold text-[#37a137] hover:underline cursor-pointer">
            Why Create an Account?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;