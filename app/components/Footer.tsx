import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Top Level Lawn Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <span className="text-xl font-bold text-white">Top Level Lawn</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Professional turf and hardscape installs for Reno homeowners who want it done once.
            </p>
            <p className="text-gray-400">
              Based in Northern Nevada
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-green-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition-colors">
                <a href="tel:+17751234567" className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (775) 123-4567
                </a>
              </li>
              <li className="hover:text-green-400 transition-colors">
                <a href="mailto:info@toplevellawn.com" className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@toplevellawn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Top Level Lawn. All rights reserved. | 
            {' '}
            <a 
              href="https://spicedai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              SpicedAi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

