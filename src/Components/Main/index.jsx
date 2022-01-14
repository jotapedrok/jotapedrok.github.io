import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../Pages/About';
// import Home from '../../Pages/Home/Index';
// import Interests from '../../Pages/Interests';
import Projects from '../../Pages/Projects';
import Skills from '../../Pages/Skills';
import ProjectDetails from '../ProjectDetails';

function Main() {
  return (
    <div className="main">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/interests" element={<Interests />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<h1 className="not-found">404! Ops... Page not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default Main;
