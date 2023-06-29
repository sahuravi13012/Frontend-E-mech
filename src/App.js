import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Privateroute from "./Pages/Privateroute";
import ProtectPages from "./ProtectPages";
import "./App.css";
import Login from "./Auth/Login";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Privateroute Component={ProtectPages} />} />
      </Routes>
    </>
  );
}

export default App;
