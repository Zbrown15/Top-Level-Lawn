import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Top Level Lawn Logo"
              width={60}
              height={60}
              className="mr-3"
            />
            <span className="text-2xl font-bold text-gray-900">Top Level Lawn</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              How It Works
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Gallery
            </Link>
            <Link 
              href="#contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-green-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

