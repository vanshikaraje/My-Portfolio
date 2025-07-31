import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-gray-900 text-white py-6 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Vanshika . All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/vanshikaraje"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vanshika-965b82307"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/u/Vanshikaraje010/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="mailto:vanshikaraje010@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
