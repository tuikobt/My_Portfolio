/*import React from "react";
import HomePage from "./pages/HomePage";
import ExpolorerFile from "./components/common/ExplorerFile";
import Sidebar from "./components/ContactPage/SideBar";
import Header from "./components/layout/Header";
import ContactForm from "./components/ContactPage/ContactForm";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden font-mono text-[#607B96]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;*/
import React from "react";
import HomePage from "./pages/HomePage";
import ExpolorerFile from "./components/common/ExplorerFile";
import Sidebar from "./components/ContactPage/SideBar";
import Header from "./components/layout/Header";
import ContactForm from "./components/ContactPage/ContactForm";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col font-mono text-[#607B96]">
      {/* Thêm: flex flex-col để layout dọc */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
