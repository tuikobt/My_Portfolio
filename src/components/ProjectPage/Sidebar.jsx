import React, { useMemo } from "react";
import { IoMdClose } from "react-icons/io";
import ExplorerFolder from "../common/ExplorerFolder";
import { projectInformation } from "../../data/projectInformation";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  openFolders,
  toggleFolder,
  selectedFilters = [],
  toggleFilter = () => {},
}) => {
  const technologies = useMemo(() => {
    return [...new Set(projectInformation.flatMap((project) => project.tech))];
  }, []);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
          ${sidebarOpen ? "translate-x-0 bg-[linear-gradient(to_top,#020618,#0F172B,#092635)] bg-fixed" : "-translate-x-full"}
          lg:translate-x-0 fixed lg:relative w-72 h-full
          border-r border-[#1E2D3D]
          flex flex-col transition-transform duration-300 z-50
        `}
      >
        <div className="p-3 text-xs text-white border-b border-[#1E2D3D] flex items-center justify-between uppercase">
          <span>Explorer</span>
          <button
            className="lg:hidden hover:text-[#607B96]"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ExplorerFolder
            name="projects"
            isOpen={openFolders["projects"]}
            toggle={toggleFolder}
          >
            {technologies.map((tech) => (
              <label
                key={tech}
                className="flex items-center gap-3 px-6 py-2 text-[#607B96] hover:text-white cursor-pointer transition-colors group"
              >
                {" "}
                <div className="relative flex items-center justify-center">
                  {" "}
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(tech)}
                    onChange={() => toggleFilter(tech)}
                    className="peer appearance-none w-4 h-4 border-1 border-[#607B96] bg-transparent cursor-pointer checked:bg-transparent checked:border-[#607B96] checked:bg-[#607B96] transition-all hover:border-white"
                  />{" "}
                  <svg
                    className="absolute w-3 h-3 text-[#607B96] pointer-events-none hidden peer-checked:block"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M1 5L4.5 8.5L11 1.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </svg>{" "}
                </div>{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <span className="text-sm">{tech}</span>{" "}
                </div>{" "}
              </label>
            ))}
          </ExplorerFolder>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
