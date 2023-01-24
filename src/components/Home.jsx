import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Home-Top */}
      <div className="flex items-center justify-between px-5 ">
        <h1 class="text-5xl font-extrabold font-sans text-[#ff5959]">ToDo</h1>
        <div className="bg-[#e2424a] px-5 rounded-lg hover:bg-transparent">
          <Link to="/signin">
            <button
              type="submit"
              className="text-xl text-slate-800 hover:text-slate-600 font-semibold font-sans"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
      {/* Middle */}
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 p-6  space-y-8 rounded-md">
          <h1 class="text-4xl font-extrabold text-[#ff1f58]">Hey</h1>
          <p class="text-4xl font-extrabold font-mono">
            You are welcome to todo-page{" "}
          </p>
          <div className="border border-[#ff1f58] rounded-lg">
            <Link to="/dashboard">
              <button
                type="submit"
                className="rounded-lg px-5 text-4xl w-full hover:bg-transparent bg-[#ff5959] "
              >
                DashBoard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
