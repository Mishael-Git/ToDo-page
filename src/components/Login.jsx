import React from "react";
import { GiCancel } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
function Login() {
  return (
    <div className="flex flex-col items-center justify-center border border-t-blue-800 w-[30%]">
      <div className="flex items-center space-x-11">
        <h1 class="text-xl font-bold">Please Login To Continue</h1>
        <GiCancel />
      </div>
      <div className="flex items-center">
        <p>Sign In</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 ">
        <div className="flex items-center">
          <CgProfile />
          <input placeholder="Username or email" type="text" />
        </div>
        <div className="flex items-center">
            <FaLock/>
          <input placeholder="Password" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Login;
