import React, { useState } from "react";
import { personalInformation, codeSnippets } from "../data/personalInformation";
import Sidebar from "../components/AboutMePage/SideBar";
import Tabs from "../components/AboutMePage/Tabs";
import CodeEditor from "../components/AboutMePage/CodeEditor";
import SnippetCard from "../components/AboutMePage/SnippetCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { PiUserListBold } from "react-icons/pi";

const AboutMePage = () => {
  const [openFolders, setOpenFolders] = useState({
    "personal-info": true,
    contacts: true,
    bio: true,
    education: true,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [openFiles, setOpenFiles] = useState(["bio"]);
  const [activeFile, setActiveFile] = useState("bio");

  const toggleFolder = (name) => {
    setOpenFolders((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleFileClick = (fileName) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName]);
    }
    setActiveFile(fileName);
    setSidebarOpen(false);
  };

  const closeFile = (fileName) => {
    const newOpenFiles = openFiles.filter((file) => file !== fileName);
    setOpenFiles(newOpenFiles);
    if (activeFile === fileName && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col font-mono text-[#607B96] overflow-hidden"
      style={{
        background: "linear-gradient(to top, #020618, #0F172B, #092635)",
      }}
    >
      <Header />

      <div className="w-full border-[#1E2D3D] border-b lg:hidden">
        <div
          className="flex items-center gap-2 px-5 py-3 cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <PiUserListBold size={20} />
          <p className="text-sm">personal-info</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          onFileClick={handleFileClick}
          activeFile={activeFile}
        />
        <main className="flex-1 flex flex-col min-w-0 border-l border-[#1E2D3D] overflow-hidden">
          <div className="hidden lg:block">
            <Tabs
              activeFile={activeFile}
              openFiles={openFiles}
              setActiveFile={setActiveFile}
              closeFile={closeFile}
            />
          </div>
          <div className="flex flex-1 min-h-0 overflow-hidden">
            <div className="flex-1 flex flex-col border-r border-[#1E2D3D] overflow-hidden">
              <div className="lg:hidden px-5 py-2 border-b border-[#1E2D3D] text-xs text-white">
                // {activeFile}
              </div>
              <div className="flex-1 overflow-y-auto">
                <CodeEditor
                  content={
                    personalInformation[activeFile] || "// No content available"
                  }
                />
              </div>
            </div>
            <div className="hidden lg:flex flex-1 flex-col p-6 overflow-y-aut">
              <h3 className="text-[#607B96] text-sm mb-6">
                // Code snippet showcase:
              </h3>
              {codeSnippets.map((snippet, index) => (
                <SnippetCard
                  key={index}
                  username={snippet.username}
                  time={snippet.time}
                  stars={snippet.stars}
                  code={snippet.code}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMePage;
