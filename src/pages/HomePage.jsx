/*import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/HomePage/Hero";
import SnakeGame from "../components/HomePage/SnakeGame";
import CodeSnippetBackground from "../components/HomePage/CodeSnippetBackground";
const HomePage = () => {
  const [skip, setSkip] = useState(false);

  const handleSkip = () => {
    setSkip(true);
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col font-mono text-[#607B96]"
      style={{
        background: "linear-gradient(to top, #020618, #0F172B, #092635)",
      }}
    >
      <Header />

      <main className="flex-1 w-full flex flex-col items-center relative px-4 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-40 mt-16 mb-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Hero />
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end items-center">
            <div className="relative transform scale-[0.9] pointer-events-none lg:pointer-events-auto h-[600px] flex items-center justify-center">
              {skip === false ? (
                <SnakeGame handleSkip={handleSkip} />
              ) : (
                <CodeSnippetBackground />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default HomePage;*/
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/HomePage/Hero";
import SnakeGame from "../components/HomePage/SnakeGame";
import CodeSnippetBackground from "../components/HomePage/CodeSnippetBackground";

const HomePage = () => {
  const [skip, setSkip] = useState(false);

  const handleSkip = () => {
    setSkip(true);
  };

  return (
    <div className="w-full h-full flex flex-col font-mono text-[#607B96] overflow-hidden">
      <Header />

      <main
        className="flex-1 w-full flex flex-col items-center relative px-4 lg:px-10 overflow-y-auto"
        style={{
          background: "linear-gradient(to top, #020618, #0F172B, #092635)",
        }}
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-40 mt-16 mb-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Hero />
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="relative transform scale-[0.9] pointer-events-none lg:pointer-events-auto transition-all duration-500 ease-in-out">
              {skip === false ? (
                <SnakeGame handleSkip={handleSkip} />
              ) : (
                <CodeSnippetBackground />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
