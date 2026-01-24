import React from "react";

const CodeSnippetBackground = () => {
  return (
    <div className="relative w-full min-h-[600px] overflow-visible flex items-center justify-center px-32">
      <div className="transform -rotate-348 scale-110 flex flex-col gap-5 opacity-80 select-none pointer-events-none">
        <CodeCard opacity="opacity-40">
          <span className="text-[#4D5BCE]">function</span>{" "}
          <span className="text-[#E5E9F0]">initializeModelChunk</span>
          <span className="text-[#607B96]">&lt;T&gt;</span>(chunk:{" "}
          <span className="text-[#43D9AD]">ResolvedModelChunk</span>):{" "}
          <span className="text-[#E5E9F0]">T</span> {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-[#4D5BCE]">const</span> value:{" "}
          <span className="text-[#E5E9F0]">T</span> ={" "}
          <span className="text-[#E99287]">parseModel</span>(chunk._response,
          chunk._value);
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
        </CodeCard>

        <CodeCard opacity="opacity-100" active={true}>
          <span className="text-[#4D5BCE]">function</span>{" "}
          <span className="text-[#E5E9F0]">initializeModelChunk</span>
          <span className="text-[#607B96]">&lt;T&gt;</span>(chunk:{" "}
          <span className="text-[#43D9AD]">ResolvedModelChunk</span>):{" "}
          <span className="text-[#E5E9F0]">T</span> {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-[#4D5BCE]">const</span> value:{" "}
          <span className="text-[#E5E9F0]">T</span> ={" "}
          <span className="text-[#E99287]">parseModel</span>(chunk._response,
          chunk._value);
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
        </CodeCard>

        <CodeCard opacity="opacity-40">
          <span className="text-[#4D5BCE]">function</span>{" "}
          <span className="text-[#E5E9F0]">initializeModelChunk</span>
          <span className="text-[#607B96]">&lt;T&gt;</span>(chunk:{" "}
          <span className="text-[#43D9AD]">ResolvedModelChunk</span>):{" "}
          <span className="text-[#E5E9F0]">T</span> {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-[#4D5BCE]">const</span> value:{" "}
          <span className="text-[#E5E9F0]">T</span> ={" "}
          <span className="text-[#E99287]">parseModel</span>(chunk._response,
          chunk._value);
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
        </CodeCard>
      </div>
    </div>
  );
};

const CodeCard = ({ children, opacity, active }) => {
  return (
    <div
      className={`
      relative rounded-xl border p-6 w-[500px] transition-all duration-300
      ${
        active
          ? "bg-[#011221]/90 border-[#1E2D3D] shadow-2xl scale-105 z-10"
          : "bg-[#011221]/60 border-[#1E2D3D]/50 blur-[1px]"
      }
      ${opacity}
    `}
    >
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>

      <div className="font-mono text-xs sm:text-sm leading-6 text-[#607B96]">
        {children}
      </div>
    </div>
  );
};

export default CodeSnippetBackground;
