import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import ExplorerFolder from "../common/ExplorerFolder";
import ExplorerFile from "../common/ExplorerFile";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  openFolders,
  toggleFolder,
  onFileClick, // Đổi tên từ openFile thành onFileClick để khớp với AboutMePage
}) => {
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
        lg:translate-x-0 fixed lg:relative w-64 md:w-72 h-full
        border-r border-[#1E2D3D] flex flex-col transition-transform duration-300 z-50 lg:z-auto
      `}
      >
        <div className="p-3 text-xs text-[#607B96] border-b border-[#1E2D3D] flex items-center justify-between">
          <span>EXPLORER</span>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <IoMdClose size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ExplorerFolder
            name="personal-info"
            isOpen={openFolders?.["personal-info"]}
            toggle={() => toggleFolder("personal-info")}
          >
            <ExplorerFile label="bio" onClick={() => onFileClick("bio")} />
            <ExplorerFile
              label="interests"
              onClick={() => onFileClick("interests")}
            />
            <ExplorerFolder
              name="education"
              isOpen={openFolders?.["education"]}
              toggle={() => toggleFolder("education")}
            >
              <ExplorerFile
                label="high-school"
                onClick={() => onFileClick("high-school")}
              />
              <ExplorerFile
                label="university"
                onClick={() => onFileClick("university")}
              />
            </ExplorerFolder>
          </ExplorerFolder>
          <ExplorerFolder
            name="contacts"
            isOpen={openFolders?.["contacts"]}
            toggle={() => toggleFolder("contacts")}
          >
            <div className="flex items-center gap-2 px-2 py-1.5 text-[#607B96] hover:text-white cursor-pointer group">
              <IoMail size={14} className="group-hover:text-white" />
              <span className="text-xs truncate">
                leminhphuong15032005@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-[#607B96] hover:text-white cursor-pointer group">
              <FaPhone size={14} className="group-hover:text-white" />
              <span className="text-xs">0344662655</span>
            </div>
          </ExplorerFolder>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
