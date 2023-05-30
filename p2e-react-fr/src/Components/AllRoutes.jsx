import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Welcome from "./Welcome";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/reg" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/welcome" element={<Welcome/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;