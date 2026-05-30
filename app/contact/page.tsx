"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Send, CheckSquare, AlertCircle } from "lucide-react";

// Nested component to handle useSearchParams safely within Next.js App Router Suspense requirements
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parse URL query parameters from the Price Estimator
  useEffect(() => {
    const webType = searchParams.get("type");
    const pages = searchParams.get("pages");
    const features = searchParams.get("features");
    const min = searchParams.get("min");
    const max = searchParams.get("max");

    if (webType || pages || features) {
      let populatedMessage = `Chào CodeBy Đà Nẵng,\n\nTôi muốn nhận tư vấn thiết kế website với cấu hình đã tính toán từ công cụ của bạn:\n`;
      if (webType) populatedMessage += `- Loại hình: ${webType}\n`;
      if (pages) populatedMessage += `- Quy mô: ${pages}\n`;
      if (features) populatedMessage += `- Các tính năng thêm: ${features}\n`;
      if (min && max) populatedMessage += `- Dự kiến ngân sách đầu tư: ${min} — ${max}\n`;
      populatedMessage += `\nRất mong nhận được phản hồi và tư vấn chi tiết từ phía các bạn. Xin cảm ơn!`;

      setFormData((prev) => ({ ...prev, message: populatedMessage }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", phone: "" };

    if (!formData.name.trim()) {
      errors.name = "Họ và tên không được để trống.";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email không được để trống.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email không đúng định dạng.";
      valid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Số điện thoại không được để trống.";
      valid = false;
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/\s/g, ""))) {
      errors.phone = "Số điện thoại không hợp lệ (Cần 10-12 số).";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="border-2 border-accent p-8 md:p-16 text-center flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto bg-accent/5 rounded-2xl">
        <div className="p-4 bg-accent text-white rounded-xl">
          <CheckSquare className="w-12 h-12" />
        </div>
        <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight text-slate-900">
          Gửi Yêu Cầu Thành Công!
        </h2>
        <p className="text-slate-600 max-w-md leading-relaxed text-sm md:text-base font-sans">
          Cảm ơn bạn đã tin tưởng dịch vụ của CodeBy Đà Nẵng. Chuyên viên tư vấn kỹ thuật của chúng tôi sẽ phân tích yêu cầu của bạn và chủ động phản hồi trong vòng <strong>2 giờ làm việc</strong>.
        </p>
        <Link
          href="/"
          className="mt-6 border-2 border-foreground hover:border-accent hover:text-accent font-sans font-bold text-xs tracking-wider py-4 px-8 rounded-xl transition-all duration-300"
        >
          QUAY LẠI TRANG CHỦ
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-16">
      {/* Left Column: Form Fields */}
      <form onSubmit={handleSubmit} className="flex-1 space-y-8">
        {/* Name Field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-sans font-bold text-xs tracking-wider text-accent">
            01 / HỌ VÀ TÊN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nguyen Van A"
            className={`w-full bg-white border p-4 rounded-xl text-foreground font-sans focus:outline-none transition-colors ${
              formErrors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
            }`}
          />
          {formErrors.name && (
            <span className="text-red-500 text-xs flex items-center gap-1.5 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
            </span>
          )}
        </div>

        {/* Email & Phone Twin Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Field */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-sans font-bold text-xs tracking-wider text-accent">
              02 / THƯ ĐIỆN TỬ (EMAIL) <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className={`w-full bg-white border p-4 rounded-xl text-foreground font-sans focus:outline-none transition-colors ${
                formErrors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
              }`}
            />
            {formErrors.email && (
              <span className="text-red-500 text-xs flex items-center gap-1.5 mt-1 font-mono">
                <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="phone" className="font-sans font-bold text-xs tracking-wider text-accent">
              03 / SỐ ĐIỆN THOẠI <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0905000000"
              className={`w-full bg-white border p-4 rounded-xl text-foreground font-sans focus:outline-none transition-colors ${
                formErrors.phone ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
              }`}
            />
            {formErrors.phone && (
              <span className="text-red-500 text-xs flex items-center gap-1.5 mt-1 font-mono">
                <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
              </span>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-sans font-bold text-xs tracking-wider text-accent">
            04 / THÔNG TIN YÊU CẦU CHI TIẾT
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            placeholder="Mô tả ý tưởng website, ngành nghề kinh doanh, hoặc tính năng cụ thể bạn muốn xây dựng..."
            className="w-full bg-white border border-border p-4 rounded-xl text-foreground font-sans focus:outline-none focus:border-accent transition-colors resize-y leading-relaxed"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent hover:bg-[#0044cc] disabled:bg-slate-200 disabled:text-slate-400 text-white font-sans font-bold text-xs tracking-wider py-5 px-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
        >
          {isSubmitting ? (
            <>ĐANG KHỞI TẠO YÊU CẦU...</>
          ) : (
            <>
              GỬI THÔNG TIN
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Right Column: Direct Info Block */}
      <div className="w-full lg:w-[360px] shrink-0 border border-border bg-slate-950 text-white p-8 flex flex-col justify-between min-h-[380px]">
        <div>
          <span className="text-accent font-display text-[10px] tracking-[0.2em] font-black block mb-6">
            [ LIÊN HỆ TRỰC TIẾP ]
          </span>
          <div className="space-y-6 text-sm">
            <div>
              <span className="text-white/40 block text-xs mb-1 font-mono">[ THƯ ĐIỆN TỬ ]</span>
              <p className="font-display font-black uppercase text-base hover:text-accent cursor-pointer transition-colors">
                contact@thietkewebsitecodeby.com
              </p>
            </div>
            <div>
              <span className="text-white/40 block text-xs mb-1 font-mono">[ ĐIỆN THOẠI ]</span>
              <p className="font-display font-black uppercase text-base hover:text-accent cursor-pointer transition-colors">
                0378 486 992
              </p>
            </div>
            <div>
              <span className="text-white/40 block text-xs mb-1 font-mono">[ ĐỊA CHỈ STUDIO ]</span>
              <p className="text-white/70 leading-relaxed font-sans">
                183 Quách Thị Trang, Hoà Xuân, Cẩm Lệ, TP Đà Nẵng.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 mt-8">
          <span className="text-[10px] font-display font-black tracking-widest text-white/40 uppercase block mb-2">
            [ THỜI GIAN LÀM VIỆC ]
          </span>
          <p className="text-xs text-white/60 leading-relaxed font-sans">
            Thứ 2 — Thứ 7 | 8:00 AM — 6:00 PM (GMT+7).<br />
            Nhận yêu cầu liên hệ trực tuyến 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}

// Main page export wrapping form inside a Suspense boundary
export default function Contact() {
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
        {/* Typographic Header */}
        <div className="mb-20">
          <span className="text-accent font-display text-sm tracking-[0.2em] font-black block mb-4">[ LIÊN HỆ TƯ VẤN ]</span>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6">
            Bắt đầu thảo luận.
          </h1>
          <p className="max-w-xl text-slate-500 leading-relaxed text-base md:text-lg">
            Gửi yêu cầu thiết kế của bạn ngay hôm nay. Đội ngũ kỹ thuật viên mỹ thuật của chúng tôi sẽ nghiên cứu và phác thảo giải pháp độc bản tối ưu nhất cho bạn.
          </p>
        </div>

        {/* Suspense Wrapped Contact Form */}
        <Suspense fallback={
          <div className="w-full py-16 flex items-center justify-center">
            <span className="font-display font-black text-lg tracking-widest text-accent">
              ĐANG NẠP THÔNG TIN CẤU HÌNH...
            </span>
          </div>
        }>
          <ContactFormContent />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-slate-950 text-white mt-20">
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
