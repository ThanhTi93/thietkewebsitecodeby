"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code,
  Sparkles,
  Activity,
  Menu,
  X,
  ArrowRight,
  Plus,
  Minus,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Users,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Star,
  Quote,
  Zap,
  Layers,
  TrendingUp,
  Shield,

  ShoppingBag,
  Building2,
  Palmtree,
  GraduationCap,
  Briefcase,
  Utensils
} from "lucide-react";

const PARTNERS = [
  {
    name: "DaNang Travel",
    colorClass: "text-sky-500 bg-sky-50/30 border-sky-100/30 group-hover:bg-sky-50 group-hover:border-sky-200",
    logo: (
      <svg className="w-6 h-6 fill-current transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  {
    name: "Mộc Spa & Boutique",
    colorClass: "text-emerald-500 bg-emerald-50/30 border-emerald-100/30 group-hover:bg-emerald-50 group-hover:border-emerald-200",
    logo: (
      <svg className="w-6 h-6 fill-current transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M17 8C8 10 5.9 16.17 6 20c3.83.1 10-2 12-11 .7-3.15-.3-5.35-1-9-.75 3.65-1.75 5.85-2.1 8zm-8 4c-4.5 1-5.45 4.08-5.5 6 1.91.05 5-1 6-5.5.35-1.58-.15-2.68-.5-4.5-.38 1.83-.88 2.92-1.06 4z"/>
      </svg>
    )
  },
  {
    name: "BĐS Hoà Xuân",
    colorClass: "text-amber-600 bg-amber-50/30 border-amber-100/30 group-hover:bg-amber-50 group-hover:border-amber-200",
    logo: (
      <svg className="w-6 h-6 fill-current transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3L19 9.3zM10 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
      </svg>
    )
  },
  {
    name: "EduCenter Đà Nẵng",
    colorClass: "text-blue-600 bg-blue-50/30 border-blue-100/30 group-hover:bg-blue-50 group-hover:border-blue-200",
    logo: (
      <svg className="w-6 h-6 fill-current transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
      </svg>
    )
  },
  {
    name: "The Coffee House",
    colorClass: "text-orange-500 bg-orange-50/30 border-orange-100/30 group-hover:bg-orange-50 group-hover:border-orange-200",
    logo: (
      <svg className="w-6 h-6 fill-current transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M2 21h18v-2H2v2zM20 8h-2V5h2v3zm-4-5H4v14h12V3zm2 3h2v7h-2V6zm-6 4H6V8h6v2z"/>
      </svg>
    )
  },
  {
    name: "TechCorp Global",
    colorClass: "text-cyan-600 bg-cyan-50/30 border-cyan-100/30 group-hover:bg-cyan-50 group-hover:border-cyan-200",
    logo: (
      <svg className="w-6 h-6 fill-current transition-transform duration-300" viewBox="0 0 24 24">
        <path d="M8.5 8.62L3.88 12l4.62 3.38v2.32L1.5 12l7-5.7v2.32zm7 0L22.5 12l-7 5.7v-2.32L20.12 12l-4.62-3.38v-2.32zM12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>
    )
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);

  // Reference site pricing packages
  const PACKAGES = [
    {
      id: "landing",
      name: "Gói Landing Page",
      price: "3.999.000đ",
      oldPrice: "4.000.000đ",
      badge: "Tối Ưu Chuyển Đổi",
      desc: "Phù hợp chạy chiến dịch quảng cáo, giới thiệu sản phẩm đơn lẻ hoặc sự kiện.",
      features: [
        "Tặng kèm Tên miền Quốc tế (.com / .net)",
        "Tặng kèm Hosting 1GB SSD tốc độ cao",
        "Tặng bảo mật SSL an toàn tuyệt đối",
        "Tương thích hoàn hảo mọi thiết bị di động, PC",
        "Giao diện thiết kế độc bản & riêng biệt",
        "Khai báo website với Google khi bàn giao",
        "Bàn giao toàn bộ Source Code sạch",
        "Bảo hành hệ thống 1 năm"
      ],
      popular: false
    },
    {
      id: "normal",
      name: "Gói Web Thường (Doanh Nghiệp)",
      price: "5.499.000đ",
      oldPrice: "7.000.000đ",
      badge: "Bán Chạy Nhất",
      desc: "Phù hợp cho website giới thiệu công ty, dịch vụ hoặc cửa hàng bán hàng tự động.",
      features: [
        "Tặng kèm Tên miền Quốc tế & Hosting 5GB SSD",
        "Tặng bảo mật SSL an toàn tuyệt đối",
        "Kết nối cổng thanh toán trực tuyến",
        "Cửa hàng bán hàng tự vận hành, tiết kiệm chi phí",
        "Tốc độ truy cập siêu tốc (load < 1.5s)",
        "Tích hợp các nút kêu gọi hành động (CTA) thông minh",
        "Bàn giao toàn bộ Source Code sạch, không ẩn phí",
        "Bảo hành hệ thống 2 năm"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Gói Web Cao Cấp (VIP)",
      price: "7.499.000đ",
      oldPrice: "8.000.000đ",
      badge: "Premium Studio",
      desc: "Giải pháp tối cao cho mọi website chuyên nghiệp, tích hợp đa dạng nền tảng phức tạp.",
      features: [
        "Tặng kèm Tên miền Quốc tế & Hosting 10GB SSD",
        "Bảo hành website trọn đời / vĩnh viễn",
        "Hỗ trợ tính năng song ngữ / đa ngôn ngữ",
        "Hỗ trợ tính năng Custom Field nâng cao",
        "Tích hợp thanh toán online tự động",
        "Cài đặt Google Analytics & Search Console",
        "Hỗ trợ thiết lập chiến dịch Google Ads ban đầu",
        "Hỗ trợ setup chiến dịch SEO tối ưu điểm số Lighthouse"
      ],
      popular: false
    }
  ];

  // Frequently Asked Questions from reference site
  const FAQS = [
    {
      question: "Thiết kế website tại Đà Nẵng sẽ bao gồm những chi phí gì?",
      answer: "Để vận hành một website, bạn cần 3 yếu tố cốt lõi: 1. Tên miền (địa chỉ web gia hạn hàng năm), 2. Hosting (máy chủ lưu trữ dữ liệu, ảnh, video) và 3. Phí thiết kế lập trình ban đầu. Tại CodeBy Đà Nẵng, các gói của chúng tôi đã TRỌN GÓI bao gồm cả Tên miền + Hosting SSD năm đầu + Source code bàn giao, cam kết không phát sinh bất kỳ chi phí ẩn nào khác."
    },
    {
      question: "Tại sao có những dịch vụ thiết kế web giá rẻ chỉ vài trăm ngàn?",
      answer: "Ông bà ta có câu 'tiền nào của đó'. Các đơn vị giá rẻ thường sử dụng theme lậu có sẵn (dễ dính mã độc, lỗi bảo mật), không hỗ trợ tối ưu SEO và đặc biệt là không có chế độ bảo hành. Khi web xảy ra lỗi hoặc bạn muốn nâng cấp, họ sẽ lấy phí rất cao hoặc bỏ mặc bạn. Chúng tôi cam kết bảo hành từ 1 năm đến trọn đời, viết code sạch 100% và hoàn tiền 100% nếu bạn không hài lòng."
    },
    {
      question: "Sau khi bàn giao, tôi có được sở hữu hoàn toàn website không?",
      answer: "CÓ. Chúng tôi tôn trọng quyền sở hữu tuyệt đối của khách hàng. Sau khi hoàn thiện, chúng tôi sẽ bàn giao đầy đủ: 1. Toàn bộ mã nguồn (Source Code), 2. Tài khoản quản trị Hosting, 3. Tài khoản quản trị Domain (Tên miền), 4. Tài khoản Admin tối cao của website. Bạn có quyền di chuyển host hoặc chỉnh sửa tùy ý về sau."
    },
    {
      question: "Website của tôi có đạt chuẩn SEO và load nhanh không?",
      answer: "Tất cả website do chúng tôi thiết lập đều được tối ưu hóa SEO On-page sâu rộng: tối ưu thẻ tiêu đề, mô tả, cấu trúc heading nghiêm ngặt, tự động nén ảnh và cấu hình file sitemap/robots.txt chuẩn chỉ. Nhờ sử dụng máy chủ SSD tốc độ cao và tối ưu mã nguồn Next.js sạch, tốc độ load trang luôn đạt dưới 1.5 giây, giúp bạn dễ dàng lên top Google."
    }
  ];

  // Testimonials database
  const TESTIMONIALS = [
    {
      id: 1,
      name: "Anh Hoàng Nguyễn",
      role: "CEO, DaNang Travel Co.",
      avatar: "HN",
      quote: "Dịch vụ thiết kế web của CodeBy Đà Nẵng rất chuyên nghiệp. Website chạy cực nhanh, chuẩn SEO giúp lượng khách đặt tour tăng 150% chỉ sau 3 tháng hoạt động.",
      rating: 5
    },
    {
      id: 2,
      name: "Chị Mai Trần",
      role: "Founder, Mộc Spa & Boutique",
      avatar: "MT",
      quote: "Giao diện đẹp mắt, tinh tế đúng như yêu cầu của tôi. Nhân viên hỗ trợ rất nhiệt tình, hướng dẫn chỉnh sửa tận tâm kể cả sau khi đã bàn giao sản phẩm.",
      rating: 5
    },
    {
      id: 3,
      name: "Anh Tuấn Phạm",
      role: "Giám đốc, Bất Động Sản Hoà Xuân",
      avatar: "TP",
      quote: "App Mobile và Website đồng bộ mượt mà. Hệ thống quản lý thông tin bất động sản trực quan, dễ dùng. Rất xứng đáng với chi phí đầu tư!",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [TESTIMONIALS.length]);

  // Toggle FAQ collapse state
  const toggleFaq = (idx: number) => {
    if (activeFaq === idx) {
      setActiveFaq(null);
    } else {
      setActiveFaq(idx);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/30 to-slate-50 text-foreground flex flex-col font-sans selection:bg-accent selection:text-white selection:font-bold relative overflow-x-hidden">
      
      {/* ==================== PREMIUM TECH BACKGROUND LAYERS ==================== */}
      {/* 1. Global Subtle Grid dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.35] pointer-events-none -z-30"></div>

      {/* 2. Soft Ambient Glowing Spheres */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none -z-20"></div>
      <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] bg-teal-500/[0.05] rounded-full blur-[180px] pointer-events-none -z-20"></div>
      <div className="absolute top-[45%] left-[5%] w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[180px] pointer-events-none -z-20"></div>
      <div className="absolute top-[68%] right-[10%] w-[500px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[150px] pointer-events-none -z-20"></div>
      <div className="absolute bottom-[8%] left-[15%] w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[180px] pointer-events-none -z-20"></div>




      {/* ==================== 3. HERO SECTION ==================== */}
      <section className="relative pt-24 pb-28 px-6 overflow-hidden max-w-7xl mx-auto w-full min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-slate-50/40 via-blue-50/15 to-slate-50/40 border-b border-border/40">
        {/* Background Grid Lines */}
        <div className="absolute top-0 right-[15%] w-[1px] h-full bg-border/20 hidden md:block"></div>
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-border/20 hidden md:block"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center z-10">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-slate-900 mb-3">
              Thiết Kế Website <span className="text-accent">Đà Nẵng</span>
            </h1>
            <h2 className="font-sans font-bold text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-slate-700 mb-6">
              Chuẩn SEO — Tối Ưu Tốc Độ Tải Siêu Tốc
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-sans max-w-xl mb-8">
              Chúng tôi là CodeBy — đơn vị chuyên thiết kế website Đà Nẵng uy tín, chuyên nghiệp. Không chỉ tạo nên những giao diện độc quyền đẳng cấp, chúng tôi tập trung tối ưu chuẩn SEO đạt TOP Google bền vững và tăng tốc độ tải trang dưới 1.0 giây giúp gia tăng tối đa chuyển đổi cuộc gọi và đơn hàng của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#bao-gia"
                className="bg-accent hover:bg-[#0044cc] text-white border border-accent hover:border-[#0044cc] font-sans font-bold text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                XEM BẢNG GIÁ DỊCH VỤ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <Link
                href="/portfolio"
                className="border border-slate-300 hover:border-accent hover:text-accent font-sans font-bold text-xs tracking-wider py-4 px-8 rounded-full transition-all duration-300 text-center text-slate-700 hover:bg-slate-50"
              >
                KHO GIAO DIỆN MẪU
              </Link>
            </div>

            <div className="inline-flex items-center gap-3 bg-accent/5 px-4 py-2.5 rounded-full border border-accent/10">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
              <span className="font-sans text-xs md:text-sm text-slate-700 font-medium">
                Cam kết hoàn trả <strong className="text-accent">100% chi phí</strong> nếu không hài lòng về chất lượng.
              </span>
            </div>
          </div>

          {/* Right Column: Visual Banners Staggered 4-Card Cascade (Diagonally arranged & auto-floating) */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[500px] mt-12 lg:mt-0 z-10 block">
            {/* Background dynamic light glow effect */}
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Banner 1: Top-Left Card */}
            <div
              className="absolute top-[0%] left-[0%] w-[47%] animate-float-slow bg-white border border-border/80 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.04] hover:border-accent/40 transition-all duration-500 cursor-pointer group"
              style={{ animationDelay: "0s" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/banner1.png"
                alt="Thiết kế Website CodeBy Đà Nẵng Banner 1"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Banner 2: Top-Right Card */}
            <div
              className="absolute top-[6%] right-[0%] w-[47%] animate-float-slower bg-white border border-accent/15 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.04] hover:border-accent/40 transition-all duration-500 cursor-pointer group"
              style={{ animationDelay: "1.5s" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/banner2.png"
                alt="Thiết kế Website CodeBy Đà Nẵng Banner 2"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Banner 3: Bottom-Left Card */}
            <div
              className="absolute top-[42%] lg:top-[30%] left-[3%] w-[47%] animate-float-slower bg-white border border-border/80 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.04] hover:border-accent/40 transition-all duration-500 cursor-pointer group"
              style={{ animationDelay: "3s" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/banner3.png"
                alt="Thiết kế Website CodeBy Đà Nẵng Banner 3"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Banner 4: Bottom-Right Card */}
            <div
              className="absolute top-[48%] lg:top-[35%] right-[3%] w-[47%] animate-float-slow bg-white border border-accent/15 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.04] hover:border-accent/40 transition-all duration-500 cursor-pointer group"
              style={{ animationDelay: "4.5s" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/banner4.png"
                alt="Thiết kế Website CodeBy Đà Nẵng Banner 4"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ==================== 4. STAT BOARD (Experience Metrics) ==================== */}
      <section className="border-t border-b border-border bg-gradient-to-r from-slate-50 via-slate-100/40 to-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border text-center md:text-left">
          <div className="p-10 flex flex-col justify-between h-44">
            <span className="font-sans font-bold text-accent text-xs tracking-wider uppercase">[ Năng Lực Thực Chiến ]</span>
            <div className="flex justify-between items-baseline">
              <span className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight">10+ Năm</span>
              <span className="text-xs text-foreground/50 max-w-[120px] text-right md:text-left">Kinh nghiệm phát triển phần mềm</span>
            </div>
          </div>
          <div className="p-10 flex flex-col justify-between h-44">
            <span className="font-sans font-bold text-accent text-xs tracking-wider uppercase">[ Đối Tác Tin Cậy ]</span>
            <div className="flex justify-between items-baseline">
              <span className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight">20+</span>
              <span className="text-xs text-foreground/50 max-w-[120px] text-right md:text-left">Thương hiệu doanh nghiệp lớn</span>
            </div>
          </div>
          <div className="p-10 flex flex-col justify-between h-44">
            <span className="font-sans font-bold text-accent text-xs tracking-wider uppercase">[ Dự Án Hoàn Thành ]</span>
            <div className="flex justify-between items-baseline">
              <span className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight">500+</span>
              <span className="text-xs text-foreground/50 max-w-[120px] text-right md:text-left">Dự án thiết kế web bàn giao</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VỀ CHÚNG TÔI (ABOUT US TEASER SECTION) ==================== */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-20 w-full border-b border-border bg-gradient-to-b from-slate-50/20 via-slate-100/10 to-slate-50/20">
        {/* Soft Background Glows */}
        <div className="absolute top-[20%] left-[-5%] w-[280px] h-[280px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-30 pointer-events-none -z-20"></div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="max-w-2xl text-left">
            <span className="text-accent font-display text-xs tracking-[0.2em] font-black block mb-4">[ VỀ CHÚNG TÔI ]</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-slate-900 mb-6">
              Hành trình phát triển của <span className="text-accent">CodeBy Đà Nẵng</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-sans">
              Được thành lập vào <strong>tháng 07 năm 2001</strong> với trụ sở chính tại <strong>710 Trần Cao Vân, Đà Nẵng</strong>, CODEBY tự hào là doanh nghiệp tiên phong thiết kế và thi công các công trình kỹ thuật phần mềm, website cao cấp cho nhiều thương hiệu lớn. Trải qua hơn 20 năm phát triển, chúng tôi cam kết đem lại các giải pháp công nghệ hiện đại giúp tối ưu hóa doanh thu và gia tăng vị thế số của doanh nghiệp.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ve-chung-toi"
                className="bg-accent hover:bg-[#0044cc] text-white font-sans font-bold text-xs tracking-wider py-3.5 px-7 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
              >
                XEM CÂU CHUYỆN CỦA CHÚNG TÔI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* A beautiful grid badge representing history */}
          <div className="bg-white border border-border p-8 rounded-2xl flex flex-col justify-between shadow-sm min-w-[280px] w-full lg:w-auto shrink-0 relative overflow-hidden group hover:border-accent/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full flex items-center justify-end pr-4 pb-4">
              <Building2 className="w-5 h-5 text-accent" />
            </div>
            <span className="text-[10px] font-sans font-black tracking-widest text-slate-400 block mb-2">FOUNDED IN</span>
            <span className="font-sans font-black text-slate-900 text-4xl mb-4">07/2001</span>
            <div className="border-t border-slate-100 pt-4 text-left">
              <h4 className="font-sans font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Trụ sở chính</h4>
              <p className="text-slate-500 text-[11px] font-medium leading-relaxed font-sans">710 Trần Cao Vân, Thanh Khê, Đà Nẵng</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE CODEBY (Useful B2B Customer Value Grid) ==================== */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-24 w-full border-b border-border bg-gradient-to-b from-slate-50/20 via-blue-50/5 to-slate-50/20">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">💡 KIẾN THỨC & GIÁ TRỊ THỰC TIỄN</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-slate-900">
              Kiến tạo Website tạo ra <span className="text-accent">doanh thu</span> thực tế
            </h2>
          </div>
          <p className="max-w-md text-slate-600 leading-relaxed text-sm lg:pt-4">
            Đừng chỉ làm một website vô hồn để trưng bày. Tại CodeBy Đà Nẵng, chúng tôi lập trình dựa trên 4 chỉ số vàng quyết định trực tiếp tới tỷ lệ chuyển đổi khách hàng tiềm năng của doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Page Speed */}
          <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">Tốc Độ Tải Trang &lt; 1.5 Giây</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Theo Google, nếu website tải lâu hơn 3 giây, 53% khách hàng di động sẽ rời đi ngay lập tức. Chúng tôi cam kết lập trình bằng Next.js đạt điểm tối đa trên Lighthouse, tăng 40% doanh thu.
            </p>
          </div>

          {/* Card 2: Custom Figma UI */}
          <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">Giao Diện May Đo (Custom UI)</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Bỏ qua các template giá rẻ mua sẵn làm thương hiệu của bạn trở nên nhạt nhòa. Đội ngũ thiết kế mỹ thuật tại Đà Nẵng sẽ phác thảo giao diện riêng biệt trên Figma khớp với bản sắc thương hiệu.
            </p>
          </div>

          {/* Card 3: SEO Optimization */}
          <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">Lập Trình Chuẩn SEO Google</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Tích hợp sẵn cấu trúc flat, thẻ headings chuẩn, thẻ schema microdata và cấu hình robots.txt tối ưu nhất. Website được lập trình để Google dễ dàng index, leo Top từ khóa mà không tốn phí Ads.
            </p>
          </div>

          {/* Card 4: Clean Code & Warranty */}
          <div className="p-8 border border-border bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-accent/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">Mã Nguồn Sạch & Bảo Hành Trọn Đời</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Cam kết code tay sạch 100% không cài cắm mã độc từ theme lậu. Bàn giao toàn bộ source code đi kèm với cam kết bảo hành vĩnh viễn, hỗ trợ kỹ thuật 24/7 trọn đời dự án.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 4.5 BUSINESS SECTORS SECTION (Self-Identification Grid) ==================== */}
      <section id="linh-vuc" className="relative overflow-hidden max-w-7xl mx-auto px-6 py-28 w-full border-b border-border bg-gradient-to-b from-slate-50/50 via-blue-50/15 to-slate-50/50">
        {/* Soft Background Radial Light Layer */}
        <div className="absolute top-[20%] right-[-10%] w-[320px] h-[320px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[320px] h-[320px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        {/* Tech subtle dot coordinates in background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50 pointer-events-none -z-20"></div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-20">
          <div className="max-w-2xl">
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">🎯 KHÁCH HÀNG MỤC TIÊU</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-slate-900">
              Lĩnh vực kinh doanh cần <span className="text-accent">bứt phá</span> doanh số bằng Website
            </h2>
          </div>
          <p className="max-w-md text-slate-600 leading-relaxed text-sm lg:pt-4">
            Mỗi ngành nghề sở hữu một hành vi mua sắm riêng biệt. Tại CodeBy Đà Nẵng, chúng tôi may đo các giải pháp tính năng độc quyền để giải quyết triệt để nhu cầu kinh doanh thực tế của từng lĩnh vực.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sector 1: E-commerce */}
          <div className="overflow-hidden border border-border bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px]">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/sector_ecommerce.png"
                alt="Thiết Kế Web Bán Hàng & E-Commerce - CodeBy Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-full">
                    Tăng Chuyển Đổi
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  Thiết Kế Web Bán Hàng & E-Commerce
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Tích hợp thanh toán online tự động (Momo, ZaloPay, ngân hàng), quản lý kho hàng chuẩn xác, giao diện tối ưu giỏ hàng nâng cao tỷ lệ chốt đơn của khách hàng.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>[ Khuyên dùng website ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sector 2: Real Estate */}
          <div className="overflow-hidden border border-border bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px]">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/sector_realestate.png"
                alt="Website Bất Động Sản Cao Cấp - CodeBy Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-1 bg-accent/10 text-accent rounded-full">
                    Bộ Lọc Thông Minh
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  Website Bất Động Sản Cao Cấp
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Trình chiếu hình ảnh/video 4K sắc nét của dự án, sơ đồ mặt bằng chi tiết, bộ lọc tìm kiếm tin đăng thông minh theo địa điểm, mức giá và diện tích.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>[ Khuyên dùng website ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sector 3: Tourism/Hotels */}
          <div className="overflow-hidden border border-border bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px]">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/sector_tourism.png"
                alt="Website Khách Sạn & Du Lịch & Spa - CodeBy Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Palmtree className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-full">
                    Đặt Phòng Trực Tuyến
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  Website Khách Sạn & Du Lịch & Spa
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Hệ thống đặt phòng, đặt lịch dịch vụ trực tiếp nhanh chóng, đồng bộ email xác nhận tự động, hiển thị trải nghiệm khách hàng và đánh giá chân thực.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>[ Khuyên dùng website ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sector 4: Education */}
          <div className="overflow-hidden border border-border bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px]">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/sector_education.png"
                alt="Website Giáo Dục & Trung Tâm Đào Tạo - CodeBy Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-1 bg-accent/10 text-accent rounded-full">
                    Đăng Ký Khóa Học
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  Website Giáo Dục & Trung Tâm Đào Tạo
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Trưng bày danh sách khóa học khoa học, lịch khai giảng trực quan, tích hợp form tư vấn tuyển sinh và quản lý thông tin học viên tự động.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>[ Khuyên dùng website ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sector 5: Corporate */}
          <div className="overflow-hidden border border-border bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px]">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/sector_corporate.png"
                alt="Website Doanh Nghiệp & Giới Thiệu Công Ty - CodeBy Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-full">
                    Tín Nhiệm B2B
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  Website Doanh Nghiệp & Giới Thiệu Công Ty
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Xây dựng thương hiệu uy tín vượt trội, giới thiệu năng lực cốt lõi, dịch vụ/sản phẩm chi tiết và tích hợp form thu hút đối tác, báo giá B2B cao cấp.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>[ Khuyên dùng website ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sector 6: F&B */}
          <div className="overflow-hidden border border-border bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px]">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                src="/sector_restaurant.png"
                alt="Website Nhà Hàng & Quán Cafe (F&B) - CodeBy Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 bg-accent/5 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold px-2.5 py-1 bg-accent/10 text-accent rounded-full">
                    Menu & Đặt Bàn
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-slate-900 mb-3 group-hover:text-accent transition-colors">
                  Website Nhà Hàng & Quán Cafe (F&B)
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Hiển thị menu thức ăn sinh động, biểu giá chân thực, tính năng đặt bàn trước giữ chỗ và kết nối bản đồ chỉ đường Google Maps trực quan.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>[ Khuyên dùng website ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. SERVICES SECTION (Broken Grid Layout) ==================== */}
      <section id="dich-vu" className="relative overflow-hidden max-w-7xl mx-auto px-6 py-28 w-full border-b border-border bg-gradient-to-b from-slate-50/30 via-slate-100/30 to-slate-50/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">⚡ GIẢI PHÁP LẬP TRÌNH & MARKETING</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-slate-900">
              Dịch vụ số cốt lõi
            </h2>
          </div>
          <p className="max-w-md text-slate-600 leading-relaxed text-sm">
            Chúng tôi tự tin hỗ trợ mọi cá nhân, tổ chức phát triển thương hiệu online, tiếp cận tối đa tệp khách hàng tiềm năng tại Đà Nẵng và cả nước.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Services list (7 cols) */}
          <div className="lg:col-span-7 border-b border-border">
            {/* Service 1 */}
            <div
              onMouseEnter={() => setActiveService(0)}
              className={`border-t border-border py-10 group transition-all duration-300 px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden ${
                activeService === 0 ? "bg-slate-50 border-l-4 border-accent pl-5 md:pl-5" : "hover:bg-slate-50/50 pl-4 md:pl-4 border-l-4 border-transparent"
              }`}
            >
              <div className="flex items-center gap-8 md:gap-12 z-10 w-full">
                <span className={`font-sans font-bold text-lg md:text-xl transition-colors duration-300 ${
                  activeService === 0 ? "text-accent" : "text-foreground/30 group-hover:text-accent"
                }`}>01</span>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight mb-2 text-slate-900">
                    Thiết kế Website Chuẩn SEO
                  </h3>
                  <p className="text-slate-600 max-w-xl group-hover:text-foreground transition-colors duration-300 text-xs md:text-sm">
                    Kiến tạo giao diện độc quyền, tương thích 100% thiết bị. Hỗ trợ tối ưu điểm số SEO Onpage sâu sắc giúp website nhanh lên Top Google.
                  </p>
                  {/* Mobile Preview Image (Shown only on mobile/tablet viewports) */}
                  <div className="mt-6 lg:hidden w-full overflow-hidden rounded-xl border border-border shadow-md aspect-[16/10] bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/service_website_mockup.png"
                      alt="Thiết kế Website chuyên nghiệp chuẩn SEO Đà Nẵng - CodeBy"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 z-10 self-end md:self-center">
                <div className={`p-3 border transition-all duration-300 rounded-xl ${
                  activeService === 0 ? "border-accent bg-accent text-white" : "border-foreground/20 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                }`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <ArrowUpRight className={`w-6 h-6 transition-all duration-300 text-accent ${
                  activeService === 0 ? "opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`} />
              </div>
            </div>

            {/* Service 2 */}
            <div
              onMouseEnter={() => setActiveService(1)}
              className={`border-t border-border py-10 group transition-all duration-300 px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden ${
                activeService === 1 ? "bg-slate-50 border-l-4 border-accent pl-5 md:pl-5" : "hover:bg-slate-50/50 pl-4 md:pl-4 border-l-4 border-transparent"
              }`}
            >
              <div className="flex items-center gap-8 md:gap-12 z-10 w-full">
                <span className={`font-sans font-bold text-lg md:text-xl transition-colors duration-300 ${
                  activeService === 1 ? "text-accent" : "text-foreground/30 group-hover:text-accent"
                }`}>02</span>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight mb-2 text-slate-900">
                    Lập Trình App Mobile (Android & iOS)
                  </h3>
                  <p className="text-slate-600 max-w-xl group-hover:text-foreground transition-colors duration-300 text-xs md:text-sm">
                    Lập trình ứng dụng di động độc lập hoặc đồng bộ trực tiếp với cơ sở dữ liệu website, UI/UX mượt mà, tối ưu hóa phần cứng thiết bị.
                  </p>
                  {/* Mobile Preview Image (Shown only on mobile/tablet viewports) */}
                  <div className="mt-6 lg:hidden w-full overflow-hidden rounded-xl border border-border shadow-md aspect-[16/10] bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/service_mobile_mockup.png"
                      alt="Lập trình ứng dụng di động Android iOS uy tín - CodeBy Đà Nẵng"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 z-10 self-end md:self-center">
                <div className={`p-3 border transition-all duration-300 rounded-xl ${
                  activeService === 1 ? "border-accent bg-accent text-white" : "border-foreground/20 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                }`}>
                  <Code className="w-5 h-5" />
                </div>
                <ArrowUpRight className={`w-6 h-6 transition-all duration-300 text-accent ${
                  activeService === 1 ? "opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`} />
              </div>
            </div>

            {/* Service 3 */}
            <div
              onMouseEnter={() => setActiveService(2)}
              className={`border-t border-border py-10 group transition-all duration-300 px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden ${
                activeService === 2 ? "bg-slate-50 border-l-4 border-accent pl-5 md:pl-5" : "hover:bg-slate-50/50 pl-4 md:pl-4 border-l-4 border-transparent"
              }`}
            >
              <div className="flex items-center gap-8 md:gap-12 z-10 w-full">
                <span className={`font-sans font-bold text-lg md:text-xl transition-colors duration-300 ${
                  activeService === 2 ? "text-accent" : "text-foreground/30 group-hover:text-accent"
                }`}>03</span>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight mb-2 text-slate-900">
                    Hỗ Trợ Digital Marketing (Ads & SEO)
                  </h3>
                  <p className="text-slate-600 max-w-xl group-hover:text-foreground transition-colors duration-300 text-xs md:text-sm">
                    Quản lý và vận hành hiệu quả các chiến dịch quảng cáo trả phí Google Ads, Facebook Ads và xây dựng chiến lược Backlink SEO đẩy từ khóa lên top.
                  </p>
                  {/* Mobile Preview Image (Shown only on mobile/tablet viewports) */}
                  <div className="mt-6 lg:hidden w-full overflow-hidden rounded-xl border border-border shadow-md aspect-[16/10] bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/service_marketing_mockup.png"
                      alt="Dịch vụ Digital Marketing chạy quảng cáo Ads SEO Đà Nẵng - CodeBy"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 z-10 self-end md:self-center">
                <div className={`p-3 border transition-all duration-300 rounded-xl ${
                  activeService === 2 ? "border-accent bg-accent text-white" : "border-foreground/20 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                }`}>
                  <Activity className="w-5 h-5" />
                </div>
                <ArrowUpRight className={`w-6 h-6 transition-all duration-300 text-accent ${
                  activeService === 2 ? "opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`} />
              </div>
            </div>

            {/* Service 4 */}
            <div
              onMouseEnter={() => setActiveService(3)}
              className={`border-t border-border py-10 group transition-all duration-300 px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 cursor-pointer relative overflow-hidden ${
                activeService === 3 ? "bg-slate-50 border-l-4 border-accent pl-5 md:pl-5" : "hover:bg-slate-50/50 pl-4 md:pl-4 border-l-4 border-transparent"
              }`}
            >
              <div className="flex items-center gap-8 md:gap-12 z-10 w-full">
                <span className={`font-sans font-bold text-lg md:text-xl transition-colors duration-300 ${
                  activeService === 3 ? "text-accent" : "text-foreground/30 group-hover:text-accent"
                }`}>04</span>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight mb-2 text-slate-900">
                    Đồng Hành Phát Triển Thương Hiệu Số
                  </h3>
                  <p className="text-slate-600 max-w-xl group-hover:text-foreground transition-colors duration-300 text-xs md:text-sm">
                    Thiết kế Logo thương hiệu chuyên nghiệp, thiết kế Profile công ty độc đáo và tối ưu hóa vận hành hệ thống fanpage tăng tương tác.
                  </p>
                  {/* Mobile Preview Image (Shown only on mobile/tablet viewports) */}
                  <div className="mt-6 lg:hidden w-full overflow-hidden rounded-xl border border-border shadow-md aspect-[16/10] bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/service_branding_mockup.png"
                      alt="Thiết kế nhận diện thương hiệu Logo doanh nghiệp - CodeBy Đà Nẵng"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 z-10 self-end md:self-center">
                <div className={`p-3 border transition-all duration-300 rounded-xl ${
                  activeService === 3 ? "border-accent bg-accent text-white" : "border-foreground/20 group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                }`}>
                  <Users className="w-5 h-5" />
                </div>
                <ArrowUpRight className={`w-6 h-6 transition-all duration-300 text-accent ${
                  activeService === 3 ? "opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`} />
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Mockup Viewer (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block overflow-hidden rounded-2xl border border-border shadow-2xl bg-slate-900 h-[460px] w-full relative">
            {/* Image 1: Website */}
            <div className={`absolute inset-0 transition-all duration-700 ease-out transform ${
              activeService === 0 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/service_website_mockup.png"
                alt="Thiết kế Website chuyên nghiệp chuẩn SEO Đà Nẵng - CodeBy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Image 2: Mobile */}
            <div className={`absolute inset-0 transition-all duration-700 ease-out transform ${
              activeService === 1 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/service_mobile_mockup.png"
                alt="Lập trình ứng dụng di động Android iOS uy tín - CodeBy Đà Nẵng"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Image 3: Marketing */}
            <div className={`absolute inset-0 transition-all duration-700 ease-out transform ${
              activeService === 2 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/service_marketing_mockup.png"
                alt="Dịch vụ Digital Marketing chạy quảng cáo Ads SEO Đà Nẵng - CodeBy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Image 4: Branding */}
            <div className={`absolute inset-0 transition-all duration-700 ease-out transform ${
              activeService === 3 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/service_branding_mockup.png"
                alt="Thiết kế nhận diện thương hiệu Logo doanh nghiệp - CodeBy Đà Nẵng"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CODEBY DESIGN PROCESS (Interactive Staggered Cards) ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 via-blue-50/10 to-slate-50/60 border-t border-b border-border py-28 w-full">
        {/* Soft Background Radial Light Layers */}
        <div className="absolute top-[10%] left-[-5%] w-[380px] h-[380px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[380px] h-[380px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        {/* Subtle dot coordinates inside bg */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-20"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between mb-20">
            <div className="max-w-2xl">
              <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">🛠️ QUY TRÌNH LÀM VIỆC CHUYÊN NGHIỆP</span>
              <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-slate-900">
                Quy trình thiết kế Website <span className="text-accent">CodeBy Đà Nẵng</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-600 leading-relaxed text-sm lg:pt-4">
              Chúng tôi áp dụng quy trình may đo khép kín 6 bước chuyên nghiệp chuẩn công nghệ, giúp mọi dự án được bàn giao đúng hạn với chất lượng tối ưu nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-end pr-6 pb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <span className="font-sans font-extrabold text-2xl text-slate-300 group-hover:text-white">01</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pr-12">Khảo Sát & Tư Vấn</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Tiếp nhận thông tin, phân tích đối thủ cạnh tranh và nghiệp vụ cụ thể của doanh nghiệp. CodeBy sẽ lập bảng tính giá chi tiết tối ưu nhất cho ngân sách của bạn.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent font-sans">
                  <span>TIẾP NHẬN YÊU CẦU</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
              </div>
              {/* Desktop Arrow */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-right">
                <ChevronRight className="w-4 h-4" />
              </div>
              {/* Mobile/Tablet Arrow */}
              <div className="flex lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-down">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-end pr-6 pb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <span className="font-sans font-extrabold text-2xl text-slate-300 group-hover:text-white">02</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pr-12">Phác Thảo UI/UX Figma</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Thiết kế bản vẽ giao diện độc quyền (Mockup) trên Figma dựa trên màu sắc và cá tính thương hiệu của bạn. Chỉnh sửa bản vẽ không giới hạn tới khi khách hàng hài lòng.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent font-sans">
                  <span>THIẾT KẾ ĐỘC BẢN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
              </div>
              {/* Desktop Arrow */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-right">
                <ChevronRight className="w-4 h-4" />
              </div>
              {/* Mobile/Tablet Arrow */}
              <div className="flex lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-down">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-end pr-6 pb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <span className="font-sans font-extrabold text-2xl text-slate-300 group-hover:text-white">03</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pr-12">Lập Trình Code Sạch</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Lập trình viên tay nghề cao của chúng tôi sẽ chuyển đổi bản vẽ sang mã nguồn chạy mượt mà bằng Next.js/React tối tân, tuân thủ tiêu chuẩn code sạch (Clean Code), an toàn tuyệt đối.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent font-sans">
                  <span>NEXT.JS & REACT</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
              </div>
              {/* Desktop & Mobile Arrow (Points down) */}
              <div className="flex md:hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-down">
                <ChevronDown className="w-4 h-4" />
              </div>
              {/* Tablet Arrow (Points right) */}
              <div className="hidden md:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-right">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-end pr-6 pb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <span className="font-sans font-extrabold text-2xl text-slate-300 group-hover:text-white">04</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pr-12">Tối Ưu SEO & Tốc Độ</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Cấu hình hệ thống kỹ thuật SEO, khai báo Sitemap, thiết lập robot.txt và tối ưu hóa tài nguyên (hình ảnh, mã nguồn) đạt tốc độ tải trang cao nhất trên Google PageSpeed Insights.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent font-sans">
                  <span>CHUẨN SEO GOOGLE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
              </div>
              {/* Desktop Arrow */}
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-right">
                <ChevronRight className="w-4 h-4" />
              </div>
              {/* Mobile/Tablet Arrow */}
              <div className="flex lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-down">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-end pr-6 pb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <span className="font-sans font-extrabold text-2xl text-slate-300 group-hover:text-white">05</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pr-12">Kiểm Thử & Nghiệm Thu</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Kiểm tra bảo mật dữ liệu, rà soát hiệu năng hiển thị trên tất cả thiết bị di động (Responsive Audit). Chạy thử hệ thống trước khi chính thức đưa website vào hoạt động thương mại.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent font-sans">
                  <span>RÀ SOÁT LỖI 100%</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
              </div>
              {/* Desktop & Tablet Arrow (Points right) */}
              <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-right">
                <ChevronRight className="w-4 h-4" />
              </div>
              {/* Mobile Arrow (Points down) */}
              <div className="flex md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-white border border-border rounded-full shadow-md text-accent items-center justify-center animate-slide-down">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full flex items-center justify-end pr-6 pb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                  <span className="font-sans font-extrabold text-2xl text-slate-300 group-hover:text-white">06</span>
                </div>
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-4 pr-12">Bàn Giao & Bảo Hành</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                  Bàn giao toàn quyền quản trị và 100% Source Code gốc sạch của website. CodeBy Đà Nẵng hỗ trợ kỹ thuật trọn đời, bảo hành vĩnh viễn chống lỗi phát sinh và mã độc.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent font-sans">
                  <span>BẢO HÀNH VĨNH VIỄN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PARTNER LOGO INFINITE SLIDER ==================== */}
      <section className="border-b border-border bg-slate-50/60 py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">
              🤝 ĐỐI TÁC TIN CẬY
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-slate-900">
              Thương hiệu đã đồng hành & thiết kế Website tại CodeBy
            </h2>
          </div>

        </div>

        <div className="w-full relative overflow-hidden py-4 bg-white/40 border-y border-border/50">
          {/* Subtle overlay gradients on the left and right edges for smooth fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee space-x-20 items-center">
            {/* Copy 1 */}
            {PARTNERS.map((partner, idx) => (
              <div
                key={`partner-1-${idx}`}
                className="flex items-center space-x-3.5 transition-all duration-300 group cursor-pointer"
              >
                <div className={`p-2.5 rounded-xl border transition-all duration-300 ${partner.colorClass}`}>
                  {partner.logo}
                </div>
                <span className="font-sans font-bold text-xs md:text-sm tracking-wider uppercase select-none text-slate-600 group-hover:text-slate-900 group-hover:scale-105 transition-all duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
            {/* Copy 2 for seamless repeat */}
            {PARTNERS.map((partner, idx) => (
              <div
                key={`partner-2-${idx}`}
                className="flex items-center space-x-3.5 transition-all duration-300 group cursor-pointer"
              >
                <div className={`p-2.5 rounded-xl border transition-all duration-300 ${partner.colorClass}`}>
                  {partner.logo}
                </div>
                <span className="font-sans font-bold text-xs md:text-sm tracking-wider uppercase select-none text-slate-600 group-hover:text-slate-900 group-hover:scale-105 transition-all duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. PRICING SECTION (Sleek Swiss Brutalist Cards) ==================== */}
      <section id="bao-gia" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white border-t border-b border-slate-900 py-28">
        {/* Subtle grid and ambient light overlays for premium dark visual depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none -z-20"></div>
        <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-accent/[0.08] rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-teal-500/[0.05] rounded-full blur-[140px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div>
              <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">💰 BẢNG GIÁ CẠNH TRANH - RÕ RÀNG</span>
              <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-white">
                Gói giá trọn gói
              </h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-accent bg-accent/5 border border-accent/20 px-4 py-2 rounded-full">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-sans font-bold tracking-wider text-xs">CAM KẾT HOÀN TIỀN 100% NẾU KHÔNG ƯNG Ý</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`border p-8 flex flex-col justify-between relative rounded-2xl transition-all duration-300 ${
                  pkg.popular
                    ? "bg-slate-900/80 border-accent border-2 shadow-2xl shadow-accent/10"
                    : "border-slate-800 hover:border-accent/40 bg-slate-900/30 backdrop-blur-sm"
                }`}
              >
                {/* Popular banner tag */}
                {pkg.popular && (
                  <span className="absolute -top-3 left-8 bg-accent text-white font-sans font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                    BÁN CHẠY NHẤT
                  </span>
                )}

                <div>
                  {/* Category Name */}
                  <span className={`font-sans font-bold text-xs tracking-wider uppercase block mb-4 ${
                    pkg.popular ? "text-accent" : "text-slate-500"
                  }`}>
                    {pkg.badge}
                  </span>
                  
                  {/* Package title */}
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight mb-3 text-white">
                    {pkg.name}
                  </h3>
                  
                  {/* Desc */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                    {pkg.desc}
                  </p>

                  {/* Prices */}
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="font-sans font-extrabold text-3xl md:text-4xl text-accent tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 line-through font-mono">
                      {pkg.oldPrice}
                    </span>
                  </div>

                  {/* Bullet points check list */}
                  <div className="space-y-4 pt-6 border-t border-slate-800">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Handoff Contact Zalo CTA */}
                <a
                  href="https://zalo.me/0378486992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 w-full text-center py-4 font-sans font-bold text-xs tracking-wider transition-all duration-300 rounded-xl inline-block cursor-pointer ${
                    pkg.popular
                      ? "bg-accent hover:bg-[#0044cc] text-white"
                      : "border border-slate-700 hover:border-accent hover:text-white text-slate-300 hover:bg-accent/10"
                  }`}
                >
                  ĐĂNG KÝ TƯ VẤN
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. TESTIMONIALS SECTION (Autoplay Slider) ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-900 py-28 px-6 w-full overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-20"></div>
        <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="text-center mb-16">
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">⭐ ĐÁNH GIÁ THỰC TẾ</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-white">
              Khách hàng nói gì về chúng tôi
            </h2>
          </div>

          {/* Testimonial Slider Card */}
          <div className="w-full relative bg-slate-900/40 border border-slate-800/80 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm transition-all duration-500 min-h-[300px] flex flex-col justify-between">
            {/* Quote watermark background */}
            <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-800/30 -z-0 pointer-events-none" />

            <div className="z-10">
              {/* Star Ratings */}
              <div className="flex gap-1 mb-6">
                {[...Array(TESTIMONIALS[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="text-slate-200 text-base md:text-xl md:leading-relaxed font-sans italic mb-8 font-medium">
                &ldquo;{TESTIMONIALS[currentTestimonial].quote}&rdquo;
              </p>
            </div>

            {/* Author info & Navigation arrows */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 z-10 pt-6 border-t border-slate-850">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center font-sans font-bold text-accent text-sm">
                  {TESTIMONIALS[currentTestimonial].avatar}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm md:text-base text-white">
                    {TESTIMONIALS[currentTestimonial].name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {TESTIMONIALS[currentTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  className="p-2.5 border border-slate-800 hover:border-accent text-slate-400 hover:text-white rounded-xl hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {/* Dot Indicators */}
                <div className="flex gap-1.5 px-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentTestimonial === idx ? "bg-accent w-4" : "bg-slate-700"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
                  }
                  className="p-2.5 border border-slate-800 hover:border-accent text-slate-400 hover:text-white rounded-xl hover:bg-accent/10 transition-all duration-300 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. FAQS SECTION (Sleek Accordions) ==================== */}
      <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-b border-slate-900 py-28 px-6 w-full overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-20"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[350px] h-[350px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">💬 GIẢI ĐÁP THẮC MẮC</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight leading-tight text-white">
              Hỏi đáp thường gặp
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl p-6 transition-all duration-300 ${
                    isOpen
                      ? "border-accent bg-slate-900/60 shadow-lg shadow-accent/5"
                      : "border-slate-800 bg-slate-900/20 hover:border-slate-700/80 hover:bg-slate-900/45"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex justify-between items-center gap-6 font-sans font-bold text-base md:text-lg tracking-tight hover:text-accent transition-colors text-white group"
                  >
                    <span className={isOpen ? "text-accent" : "text-white"}>{faq.question}</span>
                    <div className={`p-1.5 border shrink-0 rounded-xl transition-all duration-300 ${
                      isOpen ? "border-accent bg-accent text-white" : "border-slate-800 text-slate-400 group-hover:border-accent group-hover:text-accent"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans max-w-3xl pt-4 border-t border-slate-800/50 mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==================== Sticky CTA Omnichannel Widgets (Desktop: Floating Bubbles, Mobile: Sticky Bottom Bar) ==================== */}
      {/* Desktop View: Floating bottom-right bubbles with hover slide-out tooltips */}
      <div className="hidden md:flex flex-col gap-3.5 fixed bottom-6 right-6 z-50 items-end">
        {/* Zalo Bubble */}
        <a
          href="https://zalo.me/0378486992"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#0388cd] hover:bg-[#0275af] text-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          title="Trò chuyện qua Zalo"
        >
          {/* Slide-out tooltip */}
          <div className="group-hover:opacity-100 group-hover:-translate-x-3 pointer-events-none opacity-0 translate-x-4 transition-all duration-300 absolute right-full mr-3 whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-sans font-bold py-1.5 px-3 rounded-xl shadow-xl border border-slate-700/50 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>Chat Zalo: 0378.486.992</span>
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm.56 16.5H8.72c-.4 0-.72-.32-.72-.72V8.22c0-.4.32-.72.72-.72h3.84c1.86 0 3.36 1.5 3.36 3.36v1.28c0 1.86-1.5 3.36-3.36 3.36zm-3.12-2.16h3.12c.79 0 1.44-.65 1.44-1.44v-1.28c0-.79-.65-1.44-1.44-1.44H9.44v4.16z" />
            </svg>
          </div>
        </a>

        {/* Facebook Fanpage Bubble */}
        <a
          href="https://facebook.com/codebydanang"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#1877F2] hover:bg-[#166FE5] text-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          title="Ghé thăm Fanpage Facebook"
        >
          {/* Slide-out tooltip */}
          <div className="group-hover:opacity-100 group-hover:-translate-x-3 pointer-events-none opacity-0 translate-x-4 transition-all duration-300 absolute right-full mr-3 whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-sans font-bold py-1.5 px-3 rounded-xl shadow-xl border border-slate-700/50 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2]"></span>
            <span>Ghé thăm Fanpage Facebook</span>
          </div>
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </div>
        </a>

        {/* Pulse Hotline Bubble */}
        <a
          href="tel:0378486992"
          className="w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          title="Gọi điện Hotline"
        >
          {/* Slide-out tooltip */}
          <div className="group-hover:opacity-100 group-hover:-translate-x-3 pointer-events-none opacity-0 translate-x-4 transition-all duration-300 absolute right-full mr-3 whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-sans font-bold py-1.5 px-3 rounded-xl shadow-xl border border-slate-700/50 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Gọi Hotline: 0378.486.992</span>
          </div>
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping"></span>
          <Phone className="w-5 h-5 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>

      {/* Mobile View: Premium Horizontal Sticky Bottom Bar for instant thumb clicks */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-3 flex gap-2">
        {/* Facebook Fanpage Mobile Button */}
        <a
          href="https://facebook.com/codebydanang"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-sans font-bold text-[10px] tracking-wider py-2.5 rounded-full flex items-center justify-center gap-1 border border-[#1877F2]/20 transition-all active:scale-[0.97]"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
          </svg>
          FB PAGE
        </a>

        {/* Zalo Mobile Button */}
        <a
          href="https://zalo.me/0378486992"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 font-sans font-bold text-[10px] tracking-wider py-2.5 rounded-full flex items-center justify-center gap-1 border border-blue-200/60 transition-all active:scale-[0.97]"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-blue-600">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm.56 16.5H8.72c-.4 0-.72-.32-.72-.72V8.22c0-.4.32-.72.72-.72h3.84c1.86 0 3.36 1.5 3.36 3.36v1.28c0 1.86-1.5 3.36-3.36 3.36zm-3.12-2.16h3.12c.79 0 1.44-.65 1.44-1.44v-1.28c0-.79-.65-1.44-1.44-1.44H9.44v4.16z" />
          </svg>
          CHAT ZALO
        </a>

        {/* Calling Hotline Mobile Button */}
        <a
          href="tel:0378486992"
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-[10px] tracking-wider py-2.5 rounded-full flex items-center justify-center gap-1 border border-emerald-600 transition-all active:scale-[0.97] relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/10 animate-pulse"></span>
          <Phone className="w-3.5 h-3.5 animate-pulse" />
          GỌI ĐIỆN
        </a>
      </div>
    </div>
  );
}
