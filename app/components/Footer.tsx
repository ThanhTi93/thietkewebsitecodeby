"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 bg-slate-950 text-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-left">
        <div className="flex flex-col space-y-6 max-w-sm">
          <span className="font-sans font-extrabold text-xl tracking-wider">
            CODEBY<span className="text-accent">/</span>ĐÀNẴNG
          </span>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Chúng tôi là đơn vị chuyên nghiệp chuyên thiết kế website, ứng dụng di động, đồ họa thương hiệu và triển khai giải pháp Digital Marketing tối ưu cho doanh nghiệp tại Đà Nẵng, Quảng Nam, Quảng Ngãi và cả nước.
          </p>
          <span className="text-[10px] text-slate-500 font-mono">
            © {new Date().getFullYear()} THIẾT KẾ WEBSITE CODEBY. ALL RIGHTS RESERVED.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-sans font-semibold text-xs tracking-wider w-full md:w-auto">
          <div className="flex flex-col space-y-3">
            <span className="text-accent text-[10px] tracking-wider font-bold uppercase mb-1">LIÊN KẾT NHANH</span>
            <Link href="/#dich-vu" className="hover:text-accent transition-colors text-slate-300">Dịch Vụ</Link>
            <Link href="/#bao-gia" className="hover:text-accent transition-colors text-slate-300">Bảng Giá</Link>
            <Link href="/kho-giao-dien" className="hover:text-accent transition-colors text-slate-300">Kho Giao Diện Mẫu</Link>
            <Link href="/estimator" className="hover:text-accent transition-colors text-slate-300">Bộ Tính Giá</Link>
          </div>
          <div className="flex flex-col space-y-3 font-sans">
            <span className="text-accent text-[10px] tracking-wider font-bold uppercase mb-1">THÔNG TIN LIÊN HỆ</span>
            <span className="text-slate-300 hover:text-white font-sans lowercase">tranthanhtiqn@gmail.com </span>
            <span className="text-slate-300 hover:text-white font-sans">0378 486 992</span>
            <span className="text-slate-300 hover:text-white font-sans">710 Trần Cao Vân, Thanh Khê, Đà Nẵng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
