import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Top1 from "./components/Top1";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="px-32 pl-40">
          <div className=" flex flex-row w-full border border-fuchsia-600">
            <Top1 />
          </div>
        </div>
      <Body />
    </div>
  );
}

export default App;