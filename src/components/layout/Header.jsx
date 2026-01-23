import React, { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("/");

  const navLinks = [
    { name: "_hello", path: "/" },
    { name: "_about-me", path: "/about" },
    { name: "_projects", path: "/projects" },
  ];

  return (
    <header className="w-full bg-[#0F172B]/50 backdrop-blur-md border-b border-[#1E2D3D] text-[#607B96] font-mono text-sm relative">
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center h-full w-full">
          <div className="w-full lg:w-72 px-5 flex items-center h-full border-r border-[#1E2D3D] text-[#607B96] hover:text-white transition-colors cursor-pointer shrink-0 justify-between lg:justify-start">
            <span>minhphuong-lee</span>
            <button
              className="lg:hidden text-[#607B96] hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <VscClose size={24} />
              ) : (
                <VscMenu size={24} />
              )}
            </button>
          </div>

          <nav className="hidden lg:flex h-full">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`flex items-center px-8 h-full border-r border-[#1E2D3D] hover:text-white transition-colors
                  ${isActive === link.path ? "text-white border-b-2 border-b-[#FEA55F]" : "text-[#607B96]"} 
                `}
                onMouseEnter={() => setIsActive(link.path)}
                onMouseLeave={() => setIsActive("/")}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <a
          href="/contact"
          className="hidden lg:flex items-center px-5 h-full border-l border-[#1E2D3D] hover:text-white transition-colors shrink-0"
        >
          _contact-me
        </a>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-[#011627] z-50 border-b border-[#1E2D3D]">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="px-5 py-4 border-b border-[#1E2D3D] hover:text-white block"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="px-5 py-4 border-b border-[#1E2D3D] hover:text-white block"
            >
              _contact-me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
