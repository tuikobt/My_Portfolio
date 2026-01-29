import React from "react";
const CodeEditor = ({ content = "" }) => {
  const lines = content.split("\n");

  return (
    <div className="h-full w-full font-mono text-sm py-4 overflow-x-hidden overflow-y-auto">
      <table className="w-full border-collapse">
        <tbody>
          {lines.map((line, i) => (
            <tr key={i} className="hover:bg-[#1e2d3d33] leading-6">
              <td className="w-10 text-right pr-4 text-[#607B96] select-none align-top border-r border-[#1E2D3D]/30">
                {i + 1}
              </td>
              <td className="pl-4 text-[#607B96] whitespace-pre-wrap break-words word-break-all">
                {line || " "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CodeEditor;
