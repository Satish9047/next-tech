"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] bg-dark/75 backdrop-blur-[18px] border-b border-primary/10 transition-all duration-300 ${
        scrolled ? "py-[0.8rem]" : "py-[1.2rem]"
      }`}
    >
      <Link href="#" className="flex items-center gap-[0.6rem] no-underline">
        <div className="flex items-center shrink-0 h-[52px]">
          <Image
            src="/logo-blue.png"
            alt="Next Tech Logo"
            width={156}
            height={156}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      </Link>

      {/* Desktop Links */}
      <ul
        className={`hidden md:flex gap-8 list-none m-0 p-0 ${menuOpen ? "flex fixed top-[80px] left-0 w-full bg-dark/95 flex-col p-8 items-center" : ""}`}
      >
        <li>
          <Link
            href="#services"
            className="text-muted no-underline text-[0.88rem] transition-colors duration-200 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#why"
            className="text-muted no-underline text-[0.88rem] transition-colors duration-200 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#process"
            className="text-muted no-underline text-[0.88rem] transition-colors duration-200 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            href="#testimonials"
            className="text-muted no-underline text-[0.88rem] transition-colors duration-200 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Clients
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="text-muted no-underline text-[0.88rem] transition-colors duration-200 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <Link
        href="#contact"
        className="hidden md:inline-block bg-primary text-dark py-[0.55rem] px-[1.4rem] rounded-full font-semibold text-[0.85rem] no-underline font-rajdhani transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary-glow)] hover:-translate-y-[1px]"
      >
        Get a Quote
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-0 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className="w-[22px] h-[2px] bg-text transition-all duration-300 block"></span>
        <span className="w-[22px] h-[2px] bg-text transition-all duration-300 block"></span>
        <span className="w-[22px] h-[2px] bg-text transition-all duration-300 block"></span>
      </button>
    </nav>
  );
}
