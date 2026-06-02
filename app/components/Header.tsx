"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="CodeBy Đà Nẵng - Thiết kế Website"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 font-sans text-xs tracking-wider font-bold">
          <Link href="/#dich-vu" className="hover:text-accent transition-colors relative py-2 group">
            DỊCH VỤ
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/ve-chung-toi" className="hover:text-accent transition-colors relative py-2 group">
            VỀ CHÚNG TÔI
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/portfolio" className="hover:text-accent transition-colors relative py-2 group">
            KHO GIAO DIỆN
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/lien-he" className="hover:text-accent transition-colors relative py-2 group">
            LIÊN HỆ
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Call to action button */}
        <div className="hidden md:block">
          <Link
            href="/estimator"
            className="border-2 border-foreground hover:border-accent hover:bg-accent hover:text-white text-xs font-sans font-bold py-3 px-6 transition-all duration-300 rounded-full inline-block"
          >
            ĐĂNG KÝ TƯ VẤN
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground hover:text-accent focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border py-8 px-6 flex flex-col space-y-6 font-sans font-bold text-base tracking-wider z-50">
          <Link href="/#dich-vu" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors border-b border-border/50 pb-3">
            DỊCH VỤ
          </Link>
          <Link href="/ve-chung-toi" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors border-b border-border/50 pb-3">
            VỀ CHÚNG TÔI
          </Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors border-b border-border/50 pb-3">
            KHO GIAO DIỆN
          </Link>
          <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors border-b border-border/50 pb-3">
            LIÊN HỆ
          </Link>
          <Link href="/estimator" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white text-center py-4 rounded-xl font-bold">
            ĐĂNG KÝ TƯ VẤN
          </Link>
        </div>
      )}
    </header>
  );
}
