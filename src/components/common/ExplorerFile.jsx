import React from "react";
import { CiFileOn } from "react-icons/ci";
const ExpolorerFile = ({ label, onClick }) => {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1 text-[#607B96] hover:text-white cursor-pointer"
      onClick={onClick}
    >
      <CiFileOn size={14} className="text-[#519ABA]" />
      <span className="text-xs">{label}</span>
    </div>
  );
};
export default ExpolorerFile;
