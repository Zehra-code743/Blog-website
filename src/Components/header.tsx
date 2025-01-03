"use client"; // This line marks the file as a Client Component
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Toggle search bar visibility for mobile
  const toggleSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <header className="flex border-b py-3 px-4 sm:px-10 bg-yellow-200 font-[sans-serif] min-h-[65px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
          {/* Logo for larger screens */}
          <Link href="#" legacyBehavior>
            <a className="hidden sm:block">
              <Image
                src="/Cyberlogo.png"
                alt="Logo"
                width={128}
                height={40}
                className="w-32"
                priority
              />
            </a>
          </Link>

          {/* Logo for small screens */}
          <Link href="#" legacyBehavior>
            <a className="sm:hidden">
              <Image
                src="/Cyberlogo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8"
                priority
              />
            </a>
          </Link>

          {/* Navigation menu for large screens */}
          <div id="collapseMenu" className="lg:flex lg:ml-14 lg:gap-x-5 hidden sm:flex">
            <ul className="flex gap-x-5">
              <li>
                <Link href="/" className="lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/Feature" className="lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]">
                  Feature
                </Link>
              </li>
              <li>
                <Link href="/RegisterForm" className="lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]">
                  Register Form
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="lg:hidden flex ml-auto">
            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Search box for larger screens */}
          <div className="hidden sm:flex gap-4 ml-auto relative">
            <div className="flex max-w-xs w-full bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent rounded outline-none pr-8 pl-8" // Added padding-left for input
              />
              <Image
                src="/Search.png"
                alt="Search Icon"
                width={16}
                height={16}
                className="cursor-pointer absolute right-2 top-2" // Positioned search icon inside the input field
              />
            </div>
          </div>

          {/* Mobile Search Toggle */}
          <div className="sm:hidden flex ml-auto">
            <button onClick={toggleSearchBar} className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar for mobile */}
        {searchOpen && (
          <div className="sm:hidden absolute top-0 left-0 w-full bg-white shadow-lg p-4">
            <div className="flex w-full bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent rounded outline-none pr-8 pl-8"
              />
              <Image
                src="/Search.png"
                alt="Search Icon"
                width={16}
                height={16}
                className="cursor-pointer absolute right-2 top-2"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
