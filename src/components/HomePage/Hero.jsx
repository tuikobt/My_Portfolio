import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-2 max-w-xl z-20">
      <p className="text-[#E5E9F0] text-lg">Hi all. I am</p>

      <h1 className="text-6xl lg:text-[64px] text-[#E5E9F0] font-normal leading-tight">
        Lê Minh Phương
      </h1>

      <h2 className="text-[#4D5BCE] text-2xl lg:text-3xl font-semibold mb-10 flex items-center">
        <span className="mr-2">&gt;</span>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1500,
            "Backend Developer",
            1500,
            "Software Engineer",
            1500,
            "Full Stack Developer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{ display: "inline-block" }}
        />
      </h2>

      <div className="flex flex-col space-y-2 text-[#607B96] text-sm lg:text-base mt-10">
        <p>
          <span className="text-[#607B96]">
            // complete the game to continue
          </span>
        </p>
        <p>
          <span className="text-[#607B96]">// find my profile on Github:</span>
        </p>
        <p>
          <span className="text-[#4D5BCE]">const</span>{" "}
          <span className="text-[#43D9AD]">githubLink</span>{" "}
          <span className="text-white">=</span>{" "}
          <a
            href="https://github.com/tuikobt"
            className="text-[#E99287] underline decoration-[#E99287] hover:text-[#E99287]/80"
          >
            "https://github.com/tuikobt"
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
