'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-8 justify-center text-lg font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`transition cursor-pointer hover:text-blue-600 ${
                pathname === link.path ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
