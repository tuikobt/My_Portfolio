import React, { useState } from "react";
// Import icon
import { FiMenu, FiX } from "react-icons/fi";

// (Bạn cần dán các biến này từ file cũ của bạn)
const logoName = "minhphuong_lee"; // Hoặc tên của bạn
const navLinksDesktop = [
  { name: "_hello", path: "/" },
  { name: "_about-me", path: "/about" },
  { name: "_projects", path: "/projects" },
];
const contactLinkDesktop = { name: "_contact-me", path: "/contact" };
const borderColor = "border-[#1E2D3D]";

// Header nhận props: isMobileMenuOpen và onToggleMenu
function Header({ isMobileMenuOpen, onToggleMenu }) {
  const [activeLink, setActiveLink] = useState("_hello");

  // (Hàm getDesktopLinkClasses giữ nguyên)
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
    // 'sticky top-0 z-50' giúp header luôn ở trên cùng
    <header
      className={`bg-[#011627] text-white ${borderColor} border-b sticky top-0 z-50`}
    >
      {/* === HEADER CHO DESKTOP === (Không thay đổi) */}
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

      {/* === HEADER CHO MOBILE === (Sửa lại) */}
      <div className="lg:hidden flex justify-between items-center h-16 px-4">
        <div className="text-white text-lg font-normal">{logoName}</div>

        {/* Nút này gọi hàm onToggleMenu từ App.jsx */}
        {/* và hiển thị icon FiX hoặc FiMenu tùy vào state */}
        <button
          onClick={onToggleMenu}
          aria-label="Toggle menu"
          className="text-gray-400 hover:text-white"
        >
          {isMobileMenuOpen ? (
            <FiX className="w-7 h-7" />
          ) : (
            <FiMenu className="w-7 h-7" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
