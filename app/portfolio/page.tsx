"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

// Mock data representing premium minimalist agency projects
const PROJECTS = [
  {
    id: 1,
    title: "Veloce E-commerce",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    year: "2026",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    size: "tall", // Controls asymmetric sizing in grid
  },
  {
    id: 2,
    title: "Krypton SaaS Dashboard",
    category: "saas",
    categoryLabel: "SaaS / App",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 3,
    title: "Apex Concrete Architecture",
    category: "corporate",
    categoryLabel: "Corporate / Brand",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    size: "normal",
  },
  {
    id: 4,
    title: "Helvetic Typographic Journal",
    category: "corporate",
    categoryLabel: "Corporate / Brand",
    year: "2026",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    size: "tall",
  },
  {
    id: 5,
    title: "Novus AI Code Portal",
    category: "saas",
    categoryLabel: "SaaS / App",
    year: "2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    size: "wide",
  },
  {
    id: 6,
    title: "Chronos Premium Watch Store",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    year: "2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    size: "normal",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-white selection:font-bold">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col justify-center font-sans font-black text-[10px] sm:text-xs leading-none tracking-[0.15em] sm:tracking-[0.2em] hover:text-accent transition-colors">
            <span className="text-slate-900">THIETKEWEBSITE</span>
            <span className="text-accent mt-1">CODEBYDANANG</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 text-xs font-display font-black tracking-widest hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> TRANG CHỦ
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-20 w-full flex-1 flex flex-col">
        {/* Typographic Intro */}
        <div className="mb-20">
          <span className="text-accent font-display text-sm tracking-[0.2em] font-black block mb-4">[ KHO GIAO DIỆN MẪU ]</span>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6">
            Dự Án Đã Kiến Tạo.
          </h1>
          <p className="max-w-xl text-slate-500 leading-relaxed text-base md:text-lg">
            Khám phá tuyển tập các tác phẩm thiết kế web độc bản, loại bỏ các khuôn mẫu phổ biến để thể hiện rõ nét cá tính thương hiệu của từng khách hàng.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-border pb-8">
          {[
            { id: "all", label: "TẤT CẢ" },
            { id: "ecommerce", label: "E-COMMERCE" },
            { id: "saas", label: "SAAS / APP" },
            { id: "corporate", label: "CORPORATE / BRAND" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 text-xs tracking-wider font-sans font-bold transition-all duration-300 rounded-full border ${
                activeCategory === cat.id
                  ? "bg-accent border-accent text-white"
                  : "border-border hover:border-accent hover:text-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Staggered Stacking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((project) => {
            // Asymmetric heights mapping to break vertical grid lines
            const isTall = project.size === "tall";

            return (
              <div
                key={project.id}
                className={`group flex flex-col relative border border-border bg-slate-50 rounded-2xl overflow-hidden cursor-pointer ${
                  isTall ? "md:row-span-2 md:h-[750px]" : "h-[450px]"
                }`}
              >
                {/* Image Container with organic zoom on hover */}
                <div className="relative w-full h-full overflow-hidden flex-1">
                  {/* Gray solid overlay in background */}
                  <div className="absolute inset-0 bg-slate-100"></div>
                  {/* Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Accent Bottom Overlay bar on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </div>

                {/* Title & Stats Meta Card */}
                <div className="p-8 border-t border-border bg-white flex justify-between items-center group-hover:bg-slate-50 transition-colors duration-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-bold text-accent text-[10px] tracking-wider uppercase">
                      {project.categoryLabel} — {project.year}
                    </span>
                    <h3 className="font-sans font-bold text-lg md:text-xl uppercase tracking-tight text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-3 border border-foreground/20 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 rounded-xl">
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-slate-950 text-white mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <Link href="/" className="font-sans font-extrabold text-lg tracking-wider text-white hover:text-accent">
            CODEBY<span className="text-accent">/</span>ĐÀNẴNG
          </Link>
          <span className="font-mono text-xs">© {new Date().getFullYear()} THIẾT KẾ WEBSITE CODEBY. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}
