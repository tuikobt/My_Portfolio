import React, { useState, useMemo } from "react";
import Sidebar from "../components/ProjectPage/Sidebar";
import ProjectsContent from "../components/ProjectPage/ProjectsContent";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { projectInformation } from "../data/projectInformation";

const ProjectPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openFolders, setOpenFolders] = useState({
    projects: true,
  });
  const [selectedFilters, setSelectedFilters] = useState([]);

  const availableTechnologies = useMemo(() => {
    const techSet = new Set();
    projectInformation.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  return (
    <div
      className="w-full h-screen overflow-hidden flex flex-col font-mono text-[#607B96] mt-bt-5"
      style={{
        background: "linear-gradient(to top, #020618, #0F172B, #092635)",
      }}
    >
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          selectedFilters={selectedFilters}
          toggleFilter={toggleFilter}
          technologies={availableTechnologies}
          projects={projectInformation}
        />

        <ProjectsContent
          setSidebarOpen={setSidebarOpen}
          selectedFilters={selectedFilters}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;
