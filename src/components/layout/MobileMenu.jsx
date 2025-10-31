import React, { useState } from "react";

// (Bạn cần dán các biến này từ file cũ)
const navLinksMobile = [
  { name: "_hello", path: "/" },
  { name: "_about-me", path: "/about" },
  { name: "_projects", path: "/projects" },
  { name: "_contact-me", path: "/contact" },
];
const borderColor = "border-[#1E2D3D]";

// Nhận prop onLinkClick từ App.jsx
function MobileMenu({ onLinkClick }) {
  // Bạn có thể giữ state active riêng ở đây
  const [activeLink, setActiveLink] = useState("_hello");

  return (
    <div className="flex flex-col h-full bg-[#011627]">
      <nav className="flex flex-col">
        <span className="text-gray-400 px-4 pt-8 pb-2 text-sm">
          # navigate:
        </span>
        {navLinksMobile.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => {
              setActiveLink(link.name);
              onLinkClick(); // Gọi hàm này để đóng menu
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
  );
}

export default MobileMenu;
