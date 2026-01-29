import React from "react";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/ProjectPage/Sidebar";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMePage";

const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col font-mono text-[#607B96]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
