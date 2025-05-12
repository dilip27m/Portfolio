'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <nav className="sticky top-2 z-10 bg-white/5 shadow-sky-50/30  backdrop-blur-md py-4 rounded-3xl w-4/5 mx-auto shadow-lg mt-8 border border-white/40 hover:border-blue-400 transition-all duration-300 ease-in-out ">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Portfolio logo */}
        <Link
        href="/"
        className={` text-2xl font-bold tracking-wide hover:text-blue-400 transition ${
          pathname !== '/' ? '' : 'text-blue-400 font-semibold'
        }`}
        >
          Portfolio
        </Link>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-8 text-white text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`transition duration-200 pb-1 border-b-2 ${
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

        {/* Right: Empty spacer or add other icons/buttons if needed */}
        <div className="w-24" />
      </div>
    </nav>
  );
}
