import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#011221] rounded-xl border border-[#1E2D3D] overflow-hidden hover:border-[#607B96] transition-all duration-300 flex flex-col">
      <div className="relative h-40 overflow-hidden bg-[#010C15]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute top-3 right-3 bg-[#011627]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#1E2D3D]">
          <span className="text-[#607B96] text-xs">
            {project.tech.join(", ")}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-[#615FFF] font-bold mb-1">
            {project.title}{" "}
            <span className="text-[#607B96] font-light">
              // {project.subtitle}
            </span>
          </h3>
        </div>

        <p className="text-[#607B96] text-sm mb-4 flex-1">
          {project.description}
        </p>

        <button className="bg-[#1C2B3A] hover:bg-[#263B4A] text-white px-4 py-2 rounded-lg text-sm transition-colors w-full">
          view-project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
