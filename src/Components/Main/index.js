import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../Pages/About";
import Interests from "../../Pages/Interests";
import Skills from "../../Pages/Skills";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="*" element={<h1>404! Ops... Page not Found!</h1>} />
      </Routes>
    </div>
  )
}

export default Main;