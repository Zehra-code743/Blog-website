import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="logo">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={100} 
            height={100} 
            className="rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-yellow-300 transition duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link href="/feature">Feature</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link href="/registerform">RegisterForm</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-300">
              <Link href="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>

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