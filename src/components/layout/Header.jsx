import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const logoName = "minhphuong_lee";

const navLinksDesktop = [
  { name: "_hello", path: "/" },
  { name: "_about-me", path: "/about" },
  { name: "_projects", path: "/projects" },
];
const contactLinkDesktop = { name: "_contact-me", path: "/contact" };

const navLinksMobile = [
  { name: "_hello", path: "/" },
  { name: "_about-me", path: "/about" },
  { name: "_projects", path: "/projects" },
  { name: "_contact-me", path: "/contact" },
];

function Header() {
  const [activeLink, setActiveLink] = useState("_hello");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const borderColor = "border-[#1E2D3D]";

  const getDesktopLinkClasses = (linkName) => {
    const isActive = activeLink === linkName;
    return `
      h-16 flex items-center px-6 
      ${borderColor} border-l 
      text-gray-400 hover:text-white 
      transition-colors duration-200
      ${
        isActive
          ? "border-b-2 border-orange-400 text-white"
          : "border-b-2 border-transparent"
      }
    `;
  };

  return (
    <>
      <header className={`bg-[#011627] text-white ${borderColor} border-b`}>
        <div className="hidden lg:flex items-center h-16">
          <div
            className={`h-16 flex items-center px-6 text-lg ${borderColor} border-r`}
          >
            {logoName}
          </div>

          {navLinksDesktop.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.name);
              }}
              className={getDesktopLinkClasses(link.name)}
            >
              {link.name}
            </a>
          ))}

          <div className="ml-auto flex h-full">
            <a
              href={contactLinkDesktop.path}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(contactLinkDesktop.name);
              }}
              className={`${getDesktopLinkClasses(
                contactLinkDesktop.name
              )} ${borderColor} border-r`}
            >
              {contactLinkDesktop.name}
            </a>
          </div>
        </div>

        <div className="lg:hidden flex justify-between items-center h-16 px-4">
          <div className="text-white text-lg font-normal">{logoName}</div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className="text-gray-400 hover:text-white"
          >
            <FiMenu className="w-7 h-7" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-[#011627] z-50 p-4 
                    flex flex-col
                    transform transition-transform duration-300 ease-in-out
                    lg:hidden
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="text-white text-lg font-normal">{logoName}</div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="text-gray-400 hover:text-white"
          >
            <FiX className="w-7 h-7" />
          </button>
        </div>

        <nav className="flex flex-col mt-8">
          <span className="text-gray-400 px-4 pb-2 text-sm"># navigate:</span>
          {navLinksMobile.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => {
                setActiveLink(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={`py-4 px-4 text-lg ${borderColor} border-b
                          ${
                            activeLink === link.name
                              ? "text-white"
                              : "text-gray-400"
                          }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
