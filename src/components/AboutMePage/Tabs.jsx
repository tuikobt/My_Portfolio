import React from "react";
import { IoMdClose } from "react-icons/io";
const Tabs = ({ activeFile, openFiles, setActiveFile, closeFile }) => {
  return (
    <div className="flex border-b border-[#1E2D3D] overflow-x-auto">
      {openFiles.map((file) => (
        <div
          key={file}
          onClick={() => setActiveFile(file)}
          className={`
            flex items-center justify-between px-4 py-2 text-sm cursor-pointer border-r border-[#1E2D3D] min-w-[120px]
            ${activeFile === file ? "text-white border-b-2 border-b-[#FEA55F]" : "text-[#607B96]"}
          `}
        >
          <span className="truncate">{file}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeFile(file);
            }}
            className="hover:bg-[#1e2d3d] rounded p-0.5"
          >
            <IoMdClose size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
