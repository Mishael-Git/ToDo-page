import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <div className=" bg-[#f6fafaf3]  min-h-full">
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
