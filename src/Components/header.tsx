'use client'; // Explicitly mark this as a Client Component

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const toggleSearchBar = () => {
    const searchBar = document.getElementById("search-bar");
    if (searchBar) {
      searchBar.classList.toggle("hidden");
    }
  };

  return (
    <header className="flex border-b py-3 px-4 sm:px-10 bg-pink-300 font-sans min-h-[65px] relative z-50">
      <div className="flex items-center gap-4 max-w-screen-xl mx-auto w-full">
        {/* Logo for larger screens */}
        <Link href="/">
          <Image
            src="/Cyberlogo.png"
            alt="Logo"
            width={128}
            height={40}
            className="hidden sm:block md:w-32"
            priority
          />
        </Link>

        {/* Logo for small screens */}
        <Link href="/">
          <Image
            src="/Cyberlogo.png"
            alt="Logo"
            width={32}
            height={32}
            className="sm:hidden"
            priority
          />
        </Link>

        {/* Navigation menu */}
        <nav className="hidden md:flex ml-4 md:ml-10 lg:ml-14 gap-x-4 md:gap-x-6 lg:gap-x-8">
          <ul className="flex gap-x-4 md:gap-x-6 lg:gap-x-8">
            <li>
              <Link href="/" className="text-[#aa2c41] text-sm hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="text-[#aa2c41] text-sm hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#aa2c41] text-sm hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Feature" className="text-[#aa2c41] text-sm hover:text-blue-600">
                Feature
              </Link>
            </li>
            <li>
              <Link href="/RegisterForm" className="text-[#aa2c41] text-sm hover:text-blue-600">
                Register
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-[#aa2c41] text-sm hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <button onClick={toggleSearchBar} className="md:hidden ml-auto">
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="h-[2px] bg-black"></span>
            <span className="h-[2px] bg-black"></span>
            <span className="h-[2px] bg-black"></span>
          </div>
        </button>

        {/* Search bar */}
        <div
          id="search-bar"
          className="absolute top-[65px] left-0 w-full bg-white shadow-lg p-4 sm:hidden hidden"
        >
          <div className="flex w-full bg-gray-100 px-4 py-2 rounded border">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent outline-none"
            />
            <Image
              src="/Search.png"
              alt="Search"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
