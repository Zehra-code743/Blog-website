import Link from "next/link";

export default function Header() {
  return (
    <header className='flex border-b py-3 px-4 sm:px-10 bg-yellow-200 font-[sans-serif] min-h-[65px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full'>
        {/* Logo for larger screens */}
        <a href="javascript:void(0)" className="hidden sm:block">
          <img src="/Cyberlogo.png" alt="logo" className='w-32' />
        </a>

        {/* Logo for small screens */}
        <a href="javascript:void(0)" className="sm:hidden">
          <img src="/Cyberlogo.png" alt="logo" className='w-8' />
        </a>

        {/* Navigation menu for large screens */}
        <div id="collapseMenu" className='lg:flex lg:ml-14 lg:gap-x-5 hidden sm:flex'>
          <ul className='flex gap-x-5'>
            <li>
              <Link href="/" className='lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]'>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className='lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]'>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className='lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Feature" className='lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]'>
                Feature
              </Link>
            </li>
            <li>
              <Link href="/RegisterForm" className='lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]'>
                Register Form
              </Link>
            </li>
            <li>
              <Link href="/Contact" className='lg:hover:text-[#007bff] text-[#aa2c41] text-[15px]'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className='lg:hidden flex ml-auto'>
          <button id="toggleOpen" className='lg:hidden'>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        {/* Search box */}
        <div className='flex gap-4 ml-auto'>
          <div className='flex max-w-xs w-full bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all'>
            <input type='text' placeholder='Search something...'
              className='w-full text-sm bg-transparent rounded outline-none pr-2' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
              className="cursor-pointer fill-gray-400">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
