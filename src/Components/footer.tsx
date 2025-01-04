export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 pt-12 pb-6 px-10 font-sans tracking-wide relative">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white text-sm uppercase font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="/cybersecurity" className="text-gray-400 hover:text-white text-sm transition-all">Cybersecurity</a>
              </li>
              <li>
                <a href="/hackers" className="text-gray-400 hover:text-white text-sm transition-all">Hackers</a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white text-sm transition-all">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-sm uppercase font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com" className="text-gray-400 hover:text-white text-sm transition-all">Github</a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white text-sm transition-all">LinkedIn</a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white text-sm transition-all">Twitter</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-sm uppercase font-semibold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white text-sm transition-all">About</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-all">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-all">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:justify-center sm:justify-start max-sm:-order-1">
            <a href="/">
              <img src="/Cyberlogo.png" alt="logo" className="sm:w-56 w-40" />
            </a>
          </div>
        </div>

        <hr className="mt-12 mb-6 border-gray-600" />

        <div className="flex sm:justify-between flex-wrap gap-6">
          <div className="flex space-x-5">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white text-sm transition-all">
              Facebook
            </a>
            <a href="https://www.youtube.com" className="text-gray-400 hover:text-white text-sm transition-all">
              YouTube
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white text-sm transition-all">
              Instagram
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-4 sm:mt-0">© CyberSecurity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
