import React from "react";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiGithubFill,
} from "react-icons/ri";

const Footer = () => {
  const iconStyle =
    "w-12 h-full flex items-center justify-center border-r border-[#1E2D3D] text-[#607B96] hover:text-white hover:bg-[#011627]/50 transition-colors cursor-pointer";

  return (
    <footer className="w-full h-12 bg-[#0F172B]/50 backdrop-blur-md border-t border-[#1E2D3D] font-mono text-sm shrink-0 mt-auto z-10">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex items-center h-full">
          <div className="px-5 h-full flex items-center border-r border-[#1E2D3D] shrink-0">
            <span>find me in:</span>
          </div>

          <div className="flex h-full">
            <a
              href="https://www.facebook.com/minhphuong.lee.376/"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <RiFacebookBoxLine size={22} />
            </a>

            <a
              href="https://www.instagram.com/minhphuong_lee/"
              target="_blank"
              rel="noreferrer"
              className={iconStyle}
            >
              <RiInstagramLine size={22} />
            </a>

            <a
              href="https://github.com/tuikobt"
              target="_blank"
              rel="noreferrer"
              className={`${iconStyle} lg:hidden`}
            >
              <RiGithubFill size={22} />
            </a>
          </div>
        </div>

        <a
          href="https://github.com/tuikobt"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center h-full px-5 gap-2 border-l border-[#1E2D3D] text-[#607B96] hover:text-white hover:bg-[#011627]/50 transition-colors cursor-pointer"
        >
          <span>@tuikobt</span>
          <RiGithubFill size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
