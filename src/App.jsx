import React from "react";
import { Navigate, Route, Routes ,} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <div className=" bg-[#f6fafaf3]  min-h-full">
      <div>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/" element={() => <Navigate to="/signin"  />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
