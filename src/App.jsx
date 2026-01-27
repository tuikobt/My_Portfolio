import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ExpolorerFile from "./components/common/ExplorerFile";
import Sidebar from "./components/ContactPage/SideBar";
import Header from "./components/layout/Header";
import ContactForm from "./components/ContactPage/ContactForm";

const App = () => {
  const [openFolders, setOpenFolders] = useState({ contacts: true });
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleFolder = (name) => {
    setOpenFolders((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div className="w-full h-screen overflow-hidden font-mono text-[#607B96]">
      {/*<HomePage />*/}
      {/*<ExpolorerFile label="minhphuong.lee" />*/}
      {/*<Header />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        openFolders={openFolders}
        toggleFolder={toggleFolder}
      />*/}
      <main className="flex-1 flex items-center justify-center overflow-y-auto border-l border-[#1E2D3D]">
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
