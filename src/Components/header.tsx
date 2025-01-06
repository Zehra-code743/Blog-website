"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <div className="logo">
          <Image 
            src="/Cyberlogo.png" 
            alt="Logo" 
            width={100} 
            height={100} 
            className="rounded-full"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0 text-lg">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-yellow-300 transition duration-300">About</Link>
            </li>
            <li>
              <Link href="/feature" className="hover:text-yellow-300 transition duration-300">Feature</Link>
            </li>
             <li>
              <Link href="/blog" className="hover:text-yellow-300 transition duration-300">Blog</Link>
            </li>
            <li>
              <Link href="/registerform" className="hover:text-yellow-300 transition duration-300">RegisterForm</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
            </li>
          </ul>
        

        {/* Search Bar with Icon */}
        <div className="search-bar flex items-center bg-white rounded-lg shadow-sm border border-gray-300 px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow text-gray-900 outline-none"
          />
          <button className="text-gray-600 hover:text-gray-800 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1119 9a7.5 7.5 0 01-2.35 7.65z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}