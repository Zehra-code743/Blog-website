"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing search icon from react-icons

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-gradient-to-r from-green-400 to-blue-500 text-red">
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
        <Link href="/">
          <li className="text-red-500 hover:text-blue-500 cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/aboutus">
          <li className="text-red-500 hover:text-blue-500 cursor-pointer">
            About
          </li>
        </Link>
        <Link href="/feature">
          <li className="bg-clip-text text-red-500  hover:text-blue-500 cursor-pointer">
            Feature
          </li>
        </Link>
        <Link href="/blog">
          <li className="bg-clip-text text-red-500  hover:text-blue-500 cursor-pointer">
            Blog
          </li>
        </Link>
        <Link href="/registerform">
          <li className="bg-clip-text text-red-500  hover:text-blue-500 cursor-pointer">
            RegisterForm
          </li>
        </Link>
        <Link href="/contact">
          <li className="bg-clip-text text-red-500  hover:text-blue-500 cursor-pointer">
            Contact
          </li>
        </Link>
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
          className="flex-1 sm:flex-none px-4 py-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:border-teal-500 w-full sm:w-auto"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-teal-500  rounded-r-md hover:bg-teal-600"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
