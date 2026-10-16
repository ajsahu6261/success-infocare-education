
import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import logo from '../assets/success-infocare-logo.png';

const Navbar = () => {
  const [Menu, openMenu] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact Us', path: '/contactUs' },
  ];

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between bg-white px-4 py-3 text-[#687FE5] shadow-md md:px-8">

      {/* Company Logo and Name */}
      <a href="/" className="flex items-center gap-3">
        <img
          src={logo}
          alt="Success Infocare Education Logo"
          className="h-12 w-12  bg-white object-contain p-1 md:h-14 md:w-14"
        />

        <h1 className="text-xl font-bold font-mono leading-tight md:text-4xl">
          SUCCESS
          <span className="block text-blue-400 md:inline md:pl-2">
            INFOCARE EDUCATION
          </span>
        </h1>
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-6 lg:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.path}
              className="font-medium transition hover:text-blue-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label={Menu ? 'Close menu' : 'Open menu'}
        aria-expanded={Menu}
        className="lg:hidden"
        onClick={() => openMenu(!Menu)}
      >
        {Menu ? (
          <RiCloseLine size={30} />
        ) : (
          <RiMenu2Line size={30} />
        )}
      </button>

      {/* Mobile Navigation */}
      {Menu && (
        <ul className="absolute left-0 top-full flex w-full flex-col items-center gap-5 bg-[#687FE5] py-5 shadow-md lg:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="font-medium hover:text-blue-200"
                onClick={() => openMenu(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
