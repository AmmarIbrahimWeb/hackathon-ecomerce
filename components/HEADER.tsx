"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 text-gray-500 md:text-[11px] sm:text-[9px] text-[8px] font-medium">
        <Image src={"/logo1.png"} alt={""} width={24} height={24} />

        {/* Links for larger screens */}
        <div className="hidden md:flex gap-4 text-gray-700">
          <Link href="/Location" className="hover:text-gray-800">Find a Store</Link>
          <Link href="/help" className="hover:text-gray-800">Help</Link>
          <Link href="/join" className="hover:text-gray-800">Join Us</Link>
          <Link href="/signUP" className="hover:text-gray-800">Sign In</Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-100 shadow-lg z-10 transition-all duration-300 ease-in-out md:hidden">
          <div className="flex flex-col p-4 gap-2">
            <Link
              href="/Location"
              className="bg-white shadow rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Find a Store
            </Link>
            <Link
              href="/help"
              className="bg-white shadow rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Help
            </Link>
            <Link
              href="/join"
              className="bg-white shadow rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Join Us
            </Link>
            <Link
              href="/signUP"
              className="bg-white shadow rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              Sign In
            </Link>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image src={"/logo2.png"} alt="Nike Logo" width={35} height={35} />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="hidden md:flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-3 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
