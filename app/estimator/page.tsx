"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Layers, RefreshCw } from "lucide-react";

// Pricing data structures in VND (Vietnamese Dong)
const WEB_TYPES = [
  { id: "landing", name: "Landing Page / Single Page", baseMin: 8000000, baseMax: 12000000, desc: "Tối ưu hóa chuyển đổi, kể chuyện thương hiệu, giới thiệu chiến dịch cụ thể." },
  { id: "corporate", name: "Corporate Website / Doanh nghiệp", baseMin: 15000000, baseMax: 25000000, desc: "Trang thông tin doanh nghiệp, giới thiệu năng lực, dịch vụ, tuyển dụng chuyên nghiệp." },
  { id: "ecommerce", name: "E-Commerce / Bán hàng", baseMin: 22000000, baseMax: 38000000, desc: "Quản lý sản phẩm, giỏ hàng, đặt hàng, xử lý thanh toán tự động." },
  { id: "saas", name: "Custom SaaS / Web Application", baseMin: 35000000, baseMax: 60000000, desc: "Hệ thống tùy biến phức tạp, tài khoản người dùng, cơ sở dữ liệu riêng biệt." },
];

const PAGES_COUNTS = [
  { id: "small", label: "1 — 5 trang", minPrice: 0, maxPrice: 0 },
  { id: "medium", label: "6 — 15 trang", minPrice: 3000000, maxPrice: 5000000 },
  { id: "large", label: "16 — 30 trang", minPrice: 6000000, maxPrice: 10000000 },
  { id: "xlarge", label: "Trên 30 trang", minPrice: 10000000, maxPrice: 18000000 },
];

const FEATURES = [
  { id: "i18n", name: "Đa ngôn ngữ (Tiếng Anh, Trung...)", price: 4000000, desc: "Tiếp cận khách hàng toàn cầu." },
  { id: "payment", name: "Tích hợp Cổng thanh toán (Momo, VNPay...)", price: 5000000, desc: "Xử lý giao dịch tự động trực tuyến." },
  { id: "cms", name: "CMS Tùy biến (Quản lý Tin tức, Portfolio)", price: 6000000, desc: "Chủ động cập nhật nội dung dễ dàng." },
  { id: "seo", name: "Tối ưu SEO Nâng cao & Core Web Vitals", price: 3000000, desc: "Đạt điểm tối đa Lighthouse, dễ dàng lên top Google." },
];

export default function Estimator() {
  const [selectedType, setSelectedType] = useState("landing");
  const [selectedPages, setSelectedPages] = useState("small");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  useEffect(() => {
    const webType = WEB_TYPES.find((w) => w.id === selectedType);
    const pages = PAGES_COUNTS.find((p) => p.id === selectedPages);

    if (!webType || !pages) return;

    let min = webType.baseMin + pages.minPrice;
    let max = webType.baseMax + pages.maxPrice;

    selectedFeatures.forEach((fId) => {
      const feat = FEATURES.find((f) => f.id === fId);
      if (feat) {
        min += feat.price;
        max += feat.price;
      }
    });

    setPriceMin(min);
    setPriceMax(max);
  }, [selectedType, selectedPages, selectedFeatures]);

  const toggleFeature = (featId: string) => {
    if (selectedFeatures.includes(featId)) {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featId));
    } else {
      setSelectedFeatures([...selectedFeatures, featId]);
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(val);
  };

  const getContactUrl = () => {
    const typeLabel = WEB_TYPES.find((w) => w.id === selectedType)?.name || "";
    const pagesLabel = PAGES_COUNTS.find((p) => p.id === selectedPages)?.label || "";
    const featuresLabels = selectedFeatures
      .map((fId) => FEATURES.find((f) => f.id === fId)?.name || "")
      .join(", ");

    const query = new URLSearchParams({
      type: typeLabel,
      pages: pagesLabel,
      features: featuresLabels,
      min: formatCurrency(priceMin),
      max: formatCurrency(priceMax),
    });

    return `/thiet-ke-website-da-nang?${query.toString()}`;
  };

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

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-20 w-full flex-1 flex flex-col lg:flex-row gap-16 relative">

        {/* Left Side: Interactive Configuration Forms */}
        <div className="flex-1 flex flex-col space-y-12">
          {/* Header */}
          <div>
            <span className="text-accent font-display text-sm tracking-[0.2em] font-black block mb-4">[ CÔNG CỤ TÍNH GIÁ TRỰC TIẾP ]</span>
            <h1 className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none mb-6">
              Ước Tính Ngân Sách.
            </h1>
            <p className="text-slate-500 leading-relaxed max-w-xl">
              Chọn các cấu hình dưới đây để hệ thống tự động tính toán khoảng giá đầu tư ước tính dựa trên tiêu chuẩn chất lượng cao cấp của chúng tôi.
            </p>
          </div>

          {/* Step 1: Website Type */}
          <div className="border-t border-border pt-8">
            <span className="font-sans font-bold text-accent text-xs tracking-wider block mb-6">
              01 / LOẠI HÌNH WEBSITE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WEB_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-6 text-left border rounded-2xl transition-all duration-300 flex flex-col justify-between min-h-[160px] group ${
                    selectedType === type.id
                      ? "bg-accent border-accent text-white"
                      : "border-border hover:border-accent bg-white"
                  }`}
                >
                  <div>
                    <h3 className={`font-sans font-bold text-lg tracking-tight mb-2 ${
                      selectedType === type.id ? "text-white" : "group-hover:text-accent"
                    }`}>
                      {type.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      selectedType === type.id ? "text-white/80" : "text-slate-600"
                    }`}>
                      {type.desc}
                    </p>
                  </div>
                  <span className={`font-mono text-xs mt-4 ${
                    selectedType === type.id ? "text-white/60" : "text-slate-400"
                  }`}>
                    [ BASE: {formatCurrency(type.baseMin)} ]
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Pages Count */}
          <div className="border-t border-border pt-8">
            <span className="font-sans font-bold text-accent text-xs tracking-wider block mb-6">
              02 / QUY MÔ SỐ LƯỢNG TRANG (PAGES)
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PAGES_COUNTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPages(p.id)}
                  className={`py-6 px-4 text-center border rounded-xl transition-all duration-300 font-sans font-bold text-sm tracking-wider ${
                    selectedPages === p.id
                      ? "bg-accent border-accent text-white"
                      : "border-border hover:border-accent hover:text-accent bg-white"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Features */}
          <div className="border-t border-border pt-8 border-b pb-8">
            <span className="font-display font-black text-accent text-xs tracking-widest block mb-6">
              03 / CÁC TÍNH NĂNG NÂNG CAO (TÙY CHỌN)
            </span>
            <div className="flex flex-col divide-y divide-border">
              {FEATURES.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className="py-6 flex justify-between items-center cursor-pointer group hover:bg-slate-50 transition-colors px-4 -mx-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* Custom Square Checkbox */}
                      <div className={`w-5 h-5 border mt-1 flex items-center justify-center transition-colors ${
                        isSelected ? "border-accent bg-accent" : "border-foreground/30 group-hover:border-accent"
                      }`}>
                        {isSelected && <div className="w-2.5 h-2.5 bg-white"></div>}
                      </div>
                      <div>
                        <h4 className="font-display font-black uppercase text-sm md:text-base group-hover:text-accent transition-colors">
                          {feat.name}
                        </h4>
                        <p className="text-xs text-slate-400">{feat.desc}</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-accent whitespace-nowrap">
                      + {formatCurrency(feat.price)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Sticky Price Calculator Card */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-32 border border-border bg-slate-950 text-white p-8 flex flex-col justify-between min-h-[480px]">
            {/* Header info */}
            <div>
              <span className="text-accent font-display text-[10px] tracking-[0.2em] font-black block mb-6">
                [ TỔNG HỢP CẤU HÌNH ]
              </span>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-sm text-white/60">Tốc độ thiết lập</span>
                <div className="flex items-center gap-2 text-accent">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-display font-black tracking-widest">SIÊU TỐC</span>
                </div>
              </div>

              {/* Dynamic specs summary list */}
              <div className="py-6 flex flex-col space-y-4 text-xs font-sans text-white/80">
                <div className="flex justify-between">
                  <span>Loại hình:</span>
                  <span className="font-bold text-right uppercase">
                    {WEB_TYPES.find((w) => w.id === selectedType)?.name.split(" / ")[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Quy mô:</span>
                  <span className="font-bold">
                    {PAGES_COUNTS.find((p) => p.id === selectedPages)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tính năng thêm:</span>
                  <span className="font-bold text-accent">
                    {selectedFeatures.length} đã chọn
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Range display */}
            <div className="pt-6 border-t border-white/10 mt-8">
              <span className="text-[10px] font-sans font-bold tracking-wider text-white/40 uppercase block mb-3">
                KHOẢNG NGÂN SÁCH ĐẦU TƯ
              </span>
              <div className="flex flex-col space-y-2">
                <span className="font-sans font-extrabold text-2xl md:text-3xl text-accent tracking-tight leading-none">
                  {formatCurrency(priceMin)}
                </span>
                <span className="text-xs text-white/30 font-mono pl-1">— ĐẾN —</span>
                <span className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight leading-none text-white">
                  {formatCurrency(priceMax)}
                </span>
              </div>

              {/* Submit CTA button */}
              <Link
                href={getContactUrl()}
                className="mt-8 bg-accent hover:bg-[#0044cc] text-white font-sans font-bold text-xs tracking-wider text-center py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group w-full"
              >
                GỬI YÊU CẦU BÁO GIÁ
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Trust standards info */}
      <section className="bg-slate-50 border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="flex gap-4 items-start">
            <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="font-display font-black uppercase mb-1">Cam kết Độc bản 100%</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chúng tôi không tái sử dụng các layout cũ hay dùng mẫu có sẵn. Từng thiết kế đều được may đo riêng cho mô hình kinh doanh của bạn.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Layers className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="font-display font-black uppercase mb-1">Cấu trúc Chuẩn SEO & Clean Code</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mã nguồn Next.js được tối ưu hóa tối đa điểm hiệu năng, thân thiện với các công cụ tìm kiếm và dễ dàng mở rộng tính năng về sau.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <RefreshCw className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="font-display font-black uppercase mb-1">Bảo hành Trọn đời</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hỗ trợ kỹ thuật trọn đời cho mọi lỗi phát sinh từ mã nguồn hệ thống, cam kết vận hành mượt mà, ổn định 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <Link href="/" className="font-display font-black text-lg tracking-[0.2em] text-white hover:text-accent">
            CODEBY<span className="text-accent">/</span>ĐÀNẴNG
          </Link>
          <span className="font-mono text-xs">© {new Date().getFullYear()} THIẾT KẾ WEBSITE CODEBY. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}
