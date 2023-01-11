import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="  min-h-full">
      <div>
        <Navbar />
      </div>
      
      <div className="pt-1">
        <Sidebar />
      </div>

      <div className="pt-9">
        <Body />
      </div>
    </div>
  );
}

export default App;
