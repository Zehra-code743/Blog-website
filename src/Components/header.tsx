"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg">
      {/* Logo Section */}
      <div className="logo flex-shrink-0">
        <Image 
          src="/Cyberlogo.png" 
          alt="Logo" 
          width={150} 
          height={150} 
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
      </div>

      {/* Navigation Menu */}
      <ul className="flex flex-wrap space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 text-sm sm:text-base lg:text-lg mt-2 sm:mt-0">
        <li>
          <Link
            href="/"
            className="text-red-500 hover:text-white font-semibold hover:underline px-3 py-2 rounded-lg transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/aboutus"
            className="text-yellow-400 hover:text-white font-semibold hover:underline px-3 py-2 rounded-lg transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/Feature"
            className="text-green-400 hover:text-white font-semibold hover:underline px-3 py-2 rounded-lg transition duration-300"
          >
            Feature
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-red-500 hover:text-white px-3 py-2 rounded-lg transition duration-300"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/RegisterForm"
            className="text-red-500 hover:text-white px-3 py-2 rounded-lg transition duration-300"
          >
            RegisterForm
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-red-500 hover:text-white px-3 py-2 rounded-lg transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Searching for:", searchQuery);
        }}
        className="flex items-center mt-4 sm:mt-0 w-full sm:w-auto"
      >
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search..." 
          className="flex-1 sm:flex-none px-4 py-2 rounded-l-md border-2 border-red-300 focus:outline-none focus:border-teal-500 w-full sm:w-auto"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-teal-500 text-white rounded-r-md hover:bg-teal-600 flex justify-center items-center"
        >
          <FaSearch className="text-lg" />
        </button>
      </form>
    </div>
  );
}
