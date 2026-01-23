import React from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div
      className="w-full flex flex-col font-mono text-[#607B96] min-h-screen lg:h-screen lg:overflow-hidden"
      style={{
        background: "linear-gradient(to top, #020618, #0F172B, #092635)",
        backgroundAttachment: "fixed",
      }}
    >
      <HomePage />
    </div>
  );
};

export default App;
