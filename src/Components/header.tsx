"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing search icon from react-icons

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo">
        <Image 
          src="/Cyberlogo.png" 
          alt="Logo" 
          width={200} 
          height={200} 
        />
      </div>
      
      <ul className="flex space-x-6">
        <Link href="/"><li className="hover:text-gray-400">Home</li></Link>
        <Link href="/aboutus"><li className="hover:text-gray-400">About </li></Link>
        <Link href="/feature"><li className="hover:text-gray-400">Feature</li></Link>
        <Link href="/blog"><li className="hover:text-gray-400">Blog</li></Link>
        <Link href="/registerform"><li className="hover:text-gray-400">RegisterForm</li></Link>
 <Link href="contact"><li className="hover:text-gray-400">Contact</li></Link>
        {/* Replacing Start button with Search bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Searching for:", searchQuery);
          }}
          className="flex items-center"
        >
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search..." 
            className="px-4 py-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          >
            <FaSearch />
          </button>
        </form>
      </ul>
    </div>
  );
}