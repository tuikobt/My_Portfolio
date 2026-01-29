import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import ExplorerFolder from "../common/ExplorerFolder";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  openFolders,
  toggleFolder,
  //openFile,
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
        lg:translate-x-0 fixed lg:relative w-64 md:w-72 lg:w-72 h-full
        border-r border-[#1E2D3D] flex flex-col transition-transform duration-300 z-50 lg:z-auto
      `}
      >
        <div className="p-3 text-xs text-white border-b border-[#1E2D3D] flex items-center justify-between uppercase">
          <span>Explorer</span>
          <button
            className="lg:hidden p-1 hover:text-white transition-colors rounded"
            onClick={() => setSidebarOpen(false)}
          >
            <IoMdClose size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ExplorerFolder
            name="contacts"
            isOpen={openFolders["contacts"]}
            toggle={toggleFolder}
          >
            <div className="flex items-center gap-2 px-2 py-1.5 text-[#607B96]">
              <IoMail size={14} />
              <span className="text-xs break-all">
                leminhphuong15032005@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-[#607B96]">
              <FaPhone size={14} />
              <span className="text-xs">0344662655</span>
            </div>
          </ExplorerFolder>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
