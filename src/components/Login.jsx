import React from "react";
import { FcGoogle } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex items-center justify-center h-screen  border border-fuchsia-600 ">
      <div className="w-96 p-6 shadow-lg bg-white space-y-8 rounded-md">
        <p class="text-3xl block text-center font-semibold">Sign In</p>
        <div className="flex flex-col items-center justify-center space-y-2 ">
          <div className="flex items-center border rounded-md px-2">
            <CgProfile size={20} />
            <input
              placeholder="Username or email"
              type="text"
              className=" w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            />
          </div>
          <div className="flex items-center border rounded-md px-2 ">
            <FaLock size={20} />
            <input
              placeholder="Password"
              type="text"
              className=" w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
            />
          </div>
        </div>
        <div className="flex mt-3 justify-between items-center">
          <div>
            <input type="checkbox" />
            <label>Remember Me?</label>
          </div>
          <p class="text-slate-500">Forgot Password</p>
        </div>
        <Link to="/Dashboard">
          <div className="mt-5 ">
            <button
              type="submit"
              class="border-2 border-[#37a137] rounded-lg bg-[#37a137] text-white hover:text-slate-600 hover:bg-transparent text-xl font-semibold py-1 w-full"
            >
              Sign In
            </button>
          </div>
        </Link>
         
         <p class="flex justify-center items-center">Or</p>
         {/* Google & Facebook */}
<div className="p-6 ">
<div className="flex flex-row items-center justify-between space-x-10">
        <div className="flex  mt-5 items-center w-full bg-[#f31111] rounded-lg hover:bg-transparent px-5">
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
          <div className="flex flex-row items-center justify-between space-x-10">
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
      </div>
    </div>
  );
}

export default Login;
