import React from "react";
import { PiUserListBold } from "react-icons/pi";
import ProjectCard from "./ProjectCard";
import { projectInformation } from "../../data/projectInformation";

const ProjectsContent = ({ setSidebarOpen, selectedFilters }) => {
  const filteredProjects =
    selectedFilters.length > 0
      ? projectInformation.filter((project) =>
          project.tech.some((tech) => selectedFilters.includes(tech)),
        )
      : projectInformation;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="border-b border-[#1E2D3D] flex items-center">
        <button
          className="lg:hidden text-[#607B96] hover:text-white transition-colors flex items-center gap-2 px-5 py-3"
          onClick={() => setSidebarOpen(true)}
        >
          <PiUserListBold size={20} />
          <p className="font-mono text-sm text-[#607B96]">Menu</p>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-[#607B96]">
            <p className="text-lg mb-2">No projects found</p>
            <p className="text-sm">Try selecting different filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;
