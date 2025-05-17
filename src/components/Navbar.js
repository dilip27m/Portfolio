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
      <nav className="sticky top-2 z-10 bg-white/70 dark:bg-white/5 shadow-md dark:shadow-sky-50/30 backdrop-blur-md py-4 rounded-3xl w-4/5 mx-auto mt-8 border border-gray-200 dark:border-white/40 hover:border-blue-400 transition-all duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl font-bold mx-6 tracking-wide transition ${
              pathname === '/'
                ? 'text-blue-500 dark:text-blue-400 font-semibold'
                : 'text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400'
            }`}
          >
            Portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-900 dark:text-white mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 text-gray-900 dark:text-white text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition duration-200 pb-1 text-xl ${
                    pathname === link.path
                      ? 'border-blue-500 text-blue-500 dark:text-blue-400 font-semibold'
                      : 'border-transparent hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-300'
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
            className="fixed inset-0 bg-black/30 z-0"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile menu */}
          <ul className="fixed left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-white/10 my-4 backdrop-blur-md py-4 rounded-3xl w-4/5 shadow-lg border border-gray-200 dark:border-white/40 flex flex-col items-center space-y-3 z-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition duration-200 pb-1 text-xl ${
                    pathname === link.path
                      ? ' border-blue-500 text-blue-500 dark:text-blue-400 font-semibold'
                      : 'border-transparent hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-300'
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
