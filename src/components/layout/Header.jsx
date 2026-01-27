import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { VscMenu, VscClose } from "react-icons/vsc";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "_hello", path: "/" },
    { name: "_about-me", path: "/about" },
    { name: "_projects", path: "/projects" },
  ];

  return (
    <header className="w-full bg-[#0F172B]/50 backdrop-blur-md border-b border-[#1E2D3D] text-[#607B96] font-mono text-sm relative">
      <div className="flex items-center justify-between h-14">
        {/* LEFT */}
        <div className="flex items-center h-full w-full">
          {/* LOGO + MOBILE BUTTON */}
          <div className="w-full lg:w-72 px-5 flex items-center h-full border-r border-[#1E2D3D] shrink-0 justify-between lg:justify-start">
            <span className="text-[#607B96] hover:text-white transition-colors cursor-pointer">
              minhphuong-lee
            </span>

            <button
              className="lg:hidden text-[#607B96] hover:text-white"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <VscClose size={24} />
              ) : (
                <VscMenu size={24} />
              )}
            </button>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-8 h-full border-r border-[#1E2D3D] transition-colors
                  ${
                    isActive
                      ? "text-white border-b-2 border-b-[#FEA55F]"
                      : "text-[#607B96] hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* CONTACT (DESKTOP) */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hidden lg:flex items-center px-5 h-full border-l border-[#1E2D3D] transition-colors shrink-0
            ${
              isActive
                ? "text-white border-b-2 border-b-[#FEA55F]"
                : "text-[#607B96] hover:text-white"
            }`
          }
        >
          _contact-me
        </NavLink>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-[#011627] z-50 border-b border-[#1E2D3D]">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-4 border-b border-[#1E2D3D] block transition-colors
                  ${
                    isActive ? "text-white" : "text-[#607B96] hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-4 border-b border-[#1E2D3D] text-[#607B96] hover:text-white block"
            >
              _contact-me
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
