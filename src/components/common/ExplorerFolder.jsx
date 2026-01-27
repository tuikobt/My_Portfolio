import React from "react";
import { IoChevronForward, IoChevronDownSharp } from "react-icons/io5";
const ExplorerFolder = ({ name, isOpen, toggle, children }) => (
  <div>
    <div
      className="flex items-center gap-1 px-2 py-1.5 hover:text-white transition-colors cursor-pointer"
      onClick={() => toggle(name)}
    >
      {isOpen ? (
        <IoChevronDownSharp size={16} />
      ) : (
        <IoChevronForward size={16} />
      )}
      <span className="text-xs text-[#607B96] hover:text-white transition-colors">
        {name}
      </span>
    </div>
    {isOpen && <div className="ml-4">{children}</div>}
  </div>
);

export default ExplorerFolder;
