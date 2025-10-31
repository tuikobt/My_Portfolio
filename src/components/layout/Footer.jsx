import React from "react";
// Đảm bảo bạn import các icon này
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
// Icon này có thể là icon tùy chỉnh, tôi dùng 'FaCoffee' làm ví dụ
import { FaCoffee } from "react-icons/fa";

// Dữ liệu cho các link mạng xã hội
const socialLinks = [
  // Thay # bằng link thật của bạn
  { icon: <FiInstagram className="w-5 h-5" />, url: "#" },
  { icon: <FiFacebook className="w-5 h-5" />, url: "#" },
  { icon: <FiGithub className="w-5 h-5" />, url: "#" },
];

// Màu viền (giống header)
const borderColor = "border-[#1E2D3D]";

function Footer() {
  return (
    <footer className={`bg-[#011627] text-gray-400 ${borderColor} border-t`}>
      {/* === FOOTER CHO DESKTOP === */}
      {/* 'hidden lg:flex' -> Ẩn trên mobile, hiển thị trên desktop (lg) */}
      {/* Đã xóa 'container mx-auto' để nó full-width */}
      <div className="hidden lg:flex h-12 items-center justify-between">
        {/* Phần bên trái: "find me in:" */}
        <div className="flex items-center space-x-4 px-6">
          <span>find me in:</span>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Phần bên phải: "michael-weaver @" */}
        {/* Phần này có đường viền bên trái */}
        <div
          className={`flex items-center h-full px-6 ${borderColor} border-l`}
        >
          <a
            href="#" // Có thể là link tới trang "Buy me a coffee"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="mr-2">minhphuong_lee @</span>
          </a>
        </div>
      </div>

      {/* === FOOTER CHO MOBILE === */}
      {/* 'lg:hidden' -> Hiển thị trên mobile, ẩn trên desktop (lg) */}
      {/* Giao diện này giống hình "image_61995b.png" */}
      <div className="lg:hidden flex h-12 items-center justify-between px-4">
        <span>find me in:</span>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
