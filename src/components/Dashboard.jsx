import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div>
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
};

export default Dashboard;
