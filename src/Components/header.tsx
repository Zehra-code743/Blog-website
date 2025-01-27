"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex border-b py-3 px-4 sm:px-10 bg-gradient-to-r from-green-500 to-red-500 text-white font-sans min-h-[65px] tracking-wide relative z-50">
      <div className="flex items-center gap-4 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        <Link href="/">
          <img src="/cyberlogo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation Menu */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen
              ? "max-lg:translate-x-0"
              : "max-lg:-translate-x-full"
          } lg:flex lg:ml-14 lg:gap-x-5 transition-transform max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:text-gray-800 max-lg:p-6 max-lg:h-full max-lg:shadow-lg max-lg:z-50`}
        >
          <button
            id="toggleClose"
            onClick={toggleMenu}
            className="lg:hidden absolute top-4 right-4 z-[100] p-2 bg-gray-100 rounded-full shadow-md"
          >
            <FaTimes className="text-xl text-gray-800" />
          </button>
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-4 max-lg:pt-10">
            <li>
              <Link
                href="/"
                className="text-lg hover:text-red-700 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="text-lg hover:text-red-700 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Feature"
                className="text-lg hover:text-red-700 transition-colors"
              >
                Feature
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-lg hover:text-red-700 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/RegisterForm"
                className="text-lg hover:text-red-700 transition-colors"
              >
                RegisterForm
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-lg hover:text-red-700 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar and Menu Toggle */}
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center max-w-xs w-full bg-gray-100 px-4 py-2 rounded-full border focus-within:border-blue-600 transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-sm bg-transparent outline-none text-gray-800"
            />
            <FaSearch className="text-gray-500" />
          </div>
          <button
            id="toggleOpen"
            onClick={toggleMenu}
            className="lg:hidden p-2 bg-gray-100 rounded-full shadow-md"
          >
            <FaBars className="text-xl text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
