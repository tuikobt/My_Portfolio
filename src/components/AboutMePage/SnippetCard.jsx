import React from "react";
import { RiChat3Line } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
const SnippetCard = ({ username, time, code, stars }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
            alt="avatar"
          />
        </div>
        <div>
          <p className="text-[#4D5BCE] text-xs font-bold">@{username}</p>
          <p className="text-[#607B96] text-[10px]">Created {time} ago</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[#607B96] text-xs">
        <span className="flex items-center gap-1 hover:text-white cursor-pointer">
          <RiChat3Line /> details
        </span>
        <span className="flex items-center gap-1 hover:text-white cursor-pointer">
          <AiOutlineStar /> {stars} stars
        </span>
      </div>
    </div>
    <div className="bg-[#010C15] border border-[#1E2D3D] rounded-xl p-4 text-xs font-mono text-[#607B96]">
      <pre className="overflow-x-auto">{code}</pre>
    </div>
  </div>
);

export default SnippetCard;
