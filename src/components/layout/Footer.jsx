import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin, FiGithub, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaCoffee } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FiInstagram className="w-5 h-5" />,
    url: "https://www.instagram.com/minhphuong_lee/",
  },
  {
    icon: <FiFacebook className="w-5 h-5" />,
    url: "https://www.facebook.com/minhphuong.lee.376/",
  },
  { icon: <FiGithub className="w-5 h-5" />, url: "https://github.com/tuikobt" },
];

// Màu viền (giống header)
const borderColor = "border-[#1E2D3D]";

function Footer() {
  return (
    <footer className={`bg-[#011627] text-gray-400 ${borderColor} border-t`}>
      <div className="hidden lg:flex h-12 items-center justify-between">
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
        <div
          className={`flex items-center h-full px-6 ${borderColor} border-l`}
        >
          <a
            href="#"
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span className="mr-2">minhphuong_lee @</span>
          </a>
        </div>
      </div>

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
