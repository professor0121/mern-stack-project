import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut, Home, Briefcase, Info, Phone } from "lucide-react";

export default function UserHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLogout = () => alert("Logged out!");

  return (
    <header className="bg-green-400 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
          <Home className="w-6 h-6" />
          <span>MyWebsite</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200 flex items-center space-x-1">
            <Home className="w-5 h-5" /> <span>Home</span>
          </Link>
          <Link href="/services" className="hover:text-gray-200 flex items-center space-x-1">
            <Briefcase className="w-5 h-5" /> <span>Services</span>
          </Link>
          <Link href="/about" className="hover:text-gray-200 flex items-center space-x-1">
            <Info className="w-5 h-5" /> <span>About</span>
          </Link>
          <Link href="tel:+91 6269880874" className="hover:text-gray-200 flex items-center space-x-1">
            <Phone className="w-5 h-5" /> <span>Contact</span>
          </Link>
        </nav>

        {/* User Dropdown */}
        <div className="relative">
          <button className="flex items-center space-x-2 bg-white text-green-600 px-3 py-2 rounded-md">
            <User className="w-5 h-5" /> <span>User</span>
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white text-blue-600 rounded-lg shadow-lg hidden group-hover:block">
            <Link href="/profile" className="block px-4 py-2 hover:bg-blue-100">
              Profile
            </Link>
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-700 text-white p-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="tel:+91 6269880874" className="block">Contact</Link>
          <button onClick={handleLogout} className="block w-full text-left text-red-300 hover:text-red-500">
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}
