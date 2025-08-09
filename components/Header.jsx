"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Search, ChevronDown, Menu } from "lucide-react";

// UPDATED: Navigation links now better reflect the sections on the HomePage.
const navLinks = [
  { name: "About Us", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Who We Serve", href: "#who-we-serve" },
  { name: "Our Strengths", href: "#strengths" },
  { name: "Why Choose Us", href: "#why-choose-us" },
];

export default function Header() {
  return (
    // Header background now matches the DetailedContent component's color.
    <header className='w-full shadow-sm' style={{ background: "#F9F6F2" }}>
      <div className='w-full mx-auto flex items-center justify-between px-6 h-24'>
        {/* Left: Logo */}
        <div className='flex-1'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='SCMCC Logo'
              width={120}
              height={40}
              className='h-auto px-2'
            />
          </Link>
        </div>

        {/* Center: Main Navigation */}
        <nav className='hidden md:flex justify-center'>
          <div className='flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                // Text and hover colors now use the consistent color palette.
                className='font-medium transition-colors'
                style={{ color: "#4A4A4A" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#A98C6A")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#4A4A4A")}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right: Controls */}
        <div className='hidden md:flex flex-1 justify-end'>
          <div className='flex flex-row items-center space-x-6'>
            {/* Using inline styles for consistent colors and hover effects */}
            <button
              className='flex items-center text-sm transition-colors'
              style={{ color: "#5A5A5A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#A98C6A")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#5A5A5A")}
            >
              <Search size={18} strokeWidth={2} />
              <span className='ml-2'>Search</span>
            </button>
            <button
              className='flex items-center text-sm transition-colors'
              style={{ color: "#5A5A5A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#A98C6A")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#5A5A5A")}
            >
              <Globe size={16} strokeWidth={2} />
              <span className='ml-2'>Global</span>
              <ChevronDown size={16} strokeWidth={2} className='ml-1' />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          {/* Accent color applied to the menu icon */}
          <button style={{ color: "#A98C6A" }}>
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
