'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-2 z-10 bg-white/5 shadow-sky-50/30 backdrop-blur-md py-4 rounded-3xl w-4/5 mx-auto shadow-lg mt-8 border border-white/40 hover:border-blue-400 transition-all duration-300 ease-in-out  ">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl font-bold mx-6 tracking-wide hover:text-blue-400 transition ${
              pathname !== '/' ? '' : 'text-blue-400 font-semibold'
            }`}
          >
            Portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition duration-200 pb-1 text-xl ${
                    pathname === link.path
                      ? 'border-blue-500 text-blue-400 font-semibold'
                      : 'border-transparent hover:border-blue-500 hover:text-blue-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block w-24" />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden">
          {/* Background overlay with blur */}
          <div 
            className="bg-black/30  "
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile menu with strong blur effect */}
          <ul className="fixed left-1/2 transform -translate-x-1/2 bg-white/3 my-4 backdrop-blur-md py-4 rounded-3xl w-4/5 shadow-lg border border-white/40 flex flex-col items-center space-y-3 ">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition duration-200 pb-1 text-xl ${
                    pathname === link.path
                      ? 'border-blue-500 text-blue-400 font-semibold'
                      : 'border-transparent hover:border-blue-500 hover:text-blue-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}