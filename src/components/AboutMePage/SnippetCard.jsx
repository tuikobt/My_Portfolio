/*import React from "react";
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

export default SnippetCard;*/
import React from "react";
import { RiChat3Line } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";

const SnippetCard = ({ username, time, stars, codeType }) => {
  const renderCode = () => {
    if (codeType === "initialize") {
      return (
        <>
          <span className="text-[#4D5BCE]">function</span>{" "}
          <span className="text-[#E5E9F0]">initializeModelChunk</span>
          <span className="text-[#607B96]">&lt;T&gt;</span>(chunk:{" "}
          <span className="text-[#43D9AD]">ResolvedModelChunk</span>):{" "}
          <span className="text-[#E5E9F0]">T</span> {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-[#4D5BCE]">const</span> value:{" "}
          <span className="text-[#E5E9F0]">T</span> ={" "}
          <span className="text-[#E99287]">parseModel</span>(chunk._response);
          <br />
          &nbsp;&nbsp;<span className="text-[#4D5BCE]">const</span>{" "}
          initializedChunk:{" "}
          <span className="text-[#43D9AD]">InitializedChunk</span>
          <span className="text-[#607B96]">&lt;T&gt;</span> = (chunk:{" "}
          <span className="text-[#4D5BCE]">any</span>);
          <br />
          &nbsp;&nbsp;initializedChunk._status ={" "}
          <span className="text-[#4D5BCE]">INITIALIZED</span>;
          <br />
          &nbsp;&nbsp;initializedChunk._value = value;
          <br />
          &nbsp;&nbsp;<span className="text-[#4D5BCE]">return</span> value;
          <br />
          {"}"}
        </>
      );
    }

    return (
      <>
        <span className="text-[#4D5BCE]">export function</span>{" "}
        <span className="text-[#E99287]">parseModelTuple</span>(response:{" "}
        <span className="text-[#43D9AD]">Response</span>) {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-[#4D5BCE]">const</span> tuple: [
        <span className="text-[#4D5BCE]">mixed</span>,{" "}
        <span className="text-[#4D5BCE]">mixed</span>] = (value:{" "}
        <span className="text-[#4D5BCE]">any</span>);
        <br />
        {"}"}
      </>
    );
  };

  return (
    <div className="mb-8 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#1E2D3D] flex items-center justify-center overflow-hidden">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
              alt="avatar"
            />
          </div>
          <div>
            <p className="text-[#4D5BCE] text-xs font-bold">{username}</p>
            <p className="text-[#607B96] text-[10px]">Created {time}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#607B96] text-xs">
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <RiChat3Line size={14} /> details
          </span>
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <AiOutlineStar size={14} /> {stars} stars
          </span>
        </div>
      </div>

      <div className="bg-[#010C15] border border-[#1E2D3D] rounded-2xl p-4 text-[13px] font-mono leading-relaxed relative overflow-hidden">
        <div className="absolute inset-0 bg-[#010C15] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 text-[#607B96]">{renderCode()}</div>
      </div>
    </div>
  );
};

export default SnippetCard;
