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
    <div
      className="w-full h-screen flex flex-col font-mono text-[#607B96]"
      style={{
        background: "linear-gradient(to top, #020618, #0F172B, #092635)",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="flex-1 w-full flex flex-col items-center justify-center relative overflow-auto px-4 lg:px-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 lg:gap-40 z-20 -mt-10 lg:-mt-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Hero />
          </div>

          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="relative transform scale-[0.9] 2xl:scale-100 origin-right overflow-visible pr-24">
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
