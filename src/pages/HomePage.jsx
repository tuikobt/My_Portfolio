import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero";
import Game from "../components/SnakeGame";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <Header />
      <main className="flex-grow w-full flex flex-col items-center justify-center relative overflow-y-auto lg:overflow-hidden">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-32 px-0 lg:px-10 z-20">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Hero />
          </div>
          <div className="hidden lg:flex w-full lg:w-1/2 justify-end">
            <div className="transform scale-[0.9] 2xl:scale-100 origin-right">
              <Game />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
