"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Send, CheckSquare, AlertCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

// Nested component to handle useSearchParams safely within Next.js App Router Suspense requirements
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState(() => {
    const webType = searchParams ? searchParams.get("type") : null;
    const pages = searchParams ? searchParams.get("pages") : null;
    const features = searchParams ? searchParams.get("features") : null;
    const min = searchParams ? searchParams.get("min") : null;
    const max = searchParams ? searchParams.get("max") : null;

    let initialMessage = "";
    if (webType || pages || features) {
      initialMessage = `Chào CodeBy Đà Nẵng,\n\nTôi muốn nhận tư vấn thiết kế website với cấu hình đã tính toán từ công cụ của bạn:\n`;
      if (webType) initialMessage += `- Loại hình: ${webType}\n`;
      if (pages) initialMessage += `- Quy mô: ${pages}\n`;
      if (features) initialMessage += `- Các tính năng thêm: ${features}\n`;
      if (min && max) initialMessage += `- Dự kiến ngân sách đầu tư: ${min} — ${max}\n`;
      initialMessage += `\nRất mong nhận được phản hồi và tư vấn chi tiết từ phía các bạn. Xin cảm ơn!`;
    }

    return {
      name: "",
      email: "",
      phone: "",
      message: initialMessage,
    };
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setSubmitError(data.error || "Gửi thất bại, vui lòng thử lại.");
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setSubmitError("Lỗi kết nối mạng, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="border border-slate-200 bg-white/80 backdrop-blur-md p-8 md:p-16 text-center flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto rounded-[2rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[120px] h-[120px] bg-accent/[0.04] rounded-full blur-[40px] pointer-events-none -z-10"></div>
        <div className="w-16 h-16 bg-accent/5 text-accent rounded-2xl flex items-center justify-center shadow-inner shadow-accent/5 mb-2">
          <CheckSquare className="w-8 h-8" />
        </div>
        <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-slate-900 uppercase">
          Gửi Yêu Cầu Thành Công!
        </h2>
        <p className="text-slate-500 max-w-md leading-relaxed text-xs md:text-sm font-sans">
          Cảm ơn bạn đã tin tưởng dịch vụ của <strong>CodeBy Đà Nẵng</strong>. Chuyên viên tư vấn kỹ thuật của chúng tôi sẽ phân tích yêu cầu của bạn và chủ động phản hồi trong vòng <strong>2 giờ làm việc</strong>.
        </p>
        <Link
          href="/"
          className="mt-6 bg-accent hover:bg-[#0044cc] text-white font-display text-xs tracking-widest font-black py-4 px-10 rounded-2xl transition-all duration-300 shadow-md shadow-accent/25 hover:shadow-accent/40"
        >
          QUAY LẠI TRANG CHỦ
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
      {/* Left Column: Form Fields with Premium Glassmorphism */}
      <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8 bg-white/70 border border-slate-200/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-sm">
        
        {/* Name Field */}
        <div className="flex flex-col space-y-2 group">
          <label htmlFor="name" className="font-sans text-xs font-bold text-slate-500 group-focus-within:text-accent transition-colors uppercase">
            01 / HỌ VÀ TÊN CỦA BẠN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nguyen Van A"
            className={`w-full bg-white/50 border p-4 rounded-xl text-slate-900 font-sans focus:outline-none focus:bg-white transition-all duration-300 shadow-inner ${
              formErrors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-accent"
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
          <div className="flex flex-col space-y-2 group">
            <label htmlFor="email" className="font-sans text-xs font-bold text-slate-500 group-focus-within:text-accent transition-colors uppercase">
              02 / THƯ ĐIỆN TỬ (EMAIL) <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className={`w-full bg-white/50 border p-4 rounded-xl text-slate-900 font-sans focus:outline-none focus:bg-white transition-all duration-300 shadow-inner ${
                formErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-accent"
              }`}
            />
            {formErrors.email && (
              <span className="text-red-500 text-xs flex items-center gap-1.5 mt-1 font-mono">
                <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col space-y-2 group">
            <label htmlFor="phone" className="font-sans text-xs font-bold text-slate-500 group-focus-within:text-accent transition-colors uppercase">
              03 / SỐ ĐIỆN THOẠI <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0905000000"
              className={`w-full bg-white/50 border p-4 rounded-xl text-slate-900 font-sans focus:outline-none focus:bg-white transition-all duration-300 shadow-inner ${
                formErrors.phone ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-accent"
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
        <div className="flex flex-col space-y-2 group">
          <label htmlFor="message" className="font-sans text-xs font-bold text-slate-500 group-focus-within:text-accent transition-colors uppercase">
            04 / THÔNG TIN YÊU CẦU CHI TIẾT
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={formData.message}
            onChange={handleChange}
            placeholder="Mô tả ý tưởng website, ngành nghề kinh doanh, hoặc tính năng cụ thể bạn muốn xây dựng..."
            className="w-full bg-white/50 border border-slate-200 p-4 rounded-xl text-slate-900 font-sans focus:outline-none focus:bg-white focus:border-accent transition-all duration-300 shadow-inner resize-y leading-relaxed"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-accent hover:bg-[#0044cc] disabled:bg-slate-200 disabled:text-slate-400 text-white font-display text-xs tracking-widest font-black py-5 px-12 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group shadow-lg shadow-accent/25 hover:shadow-accent/40"
        >
          {isSubmitting ? (
            <>ĐANG GỬI THÔNG TIN...</>
          ) : (
            <>
              GỬI THÔNG TIN YÊU CẦU
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Right Column: Premium Dark Glassmorphic Sidebar */}
      <div className="lg:col-span-5 bg-slate-950 border border-slate-800 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[480px] text-white shadow-xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[180px] h-[180px] bg-accent/[0.02] rounded-full blur-[60px] pointer-events-none"></div>

        <div className="relative z-10">
          <span className="text-accent font-display text-[10px] tracking-[0.25em] font-black block mb-8 uppercase">
            [ LIÊN HỆ TRỰC TIẾP ]
          </span>
          
          <div className="space-y-8 text-sm">
            {/* Email info */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-white/40 block text-[10px] tracking-wider font-mono mb-1 uppercase">[ THƯ ĐIỆN TỬ ]</span>
                <a href="mailto:tranthanhtiqn@gmail.com" className="font-display font-black uppercase text-sm md:text-base hover:text-accent transition-colors block">
                  tranthanhtiqn@gmail.com 
                </a>
              </div>
            </div>

            {/* Phone info */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-white/40 block text-[10px] tracking-wider font-mono mb-1 uppercase">[ ĐIỆN THOẠI ]</span>
                <a href="tel:0378486992" className="font-display font-black uppercase text-sm md:text-base hover:text-accent transition-colors block">
                  0378 486 992
                </a>
              </div>
            </div>

            {/* Address info */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-white/40 block text-[10px] tracking-wider font-mono mb-1 uppercase">[ ĐỊA CHỈ STUDIO ]</span>
                <p className="text-white/80 leading-relaxed font-sans text-sm">
                  710 Trần Cao Vân, Thanh Khê, Đà Nẵng.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours segment */}
        <div className="pt-6 border-t border-white/10 mt-8 relative z-10 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
            <Clock className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-display font-black tracking-widest text-white/40 uppercase block mb-1">
              [ THỜI GIAN LÀM VIỆC ]
            </span>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Thứ 2 — Thứ 7 | 8:00 AM — 6:00 PM (GMT+7).<br />
              Nhận yêu cầu liên hệ trực tuyến 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page export wrapping form inside a Suspense boundary
export default function Contact() {
  return (
    <main className="flex-1 w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden py-24 px-6 font-sans">
      {/* Visual background layers */}
      <div className="absolute top-[5%] left-[-10%] w-[450px] h-[450px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none -z-20"></div>
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-teal-500/[0.02] rounded-full blur-[150px] pointer-events-none -z-20"></div>
      
      {/* Coordinate grid dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-30"></div>

      <div className="max-w-7xl mx-auto">
        {/* Typographic Header */}
        <div className="mb-20 text-left relative z-10">
          <span className="text-accent font-display text-sm tracking-[0.25em] font-black block mb-4 uppercase">
            [ LIÊN HỆ TƯ VẤN ]
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6 text-slate-900">
            Liên hệ <span className="text-accent">với chúng tôi</span>.
          </h1>
          <p className="max-w-2xl text-slate-500 leading-relaxed text-base md:text-lg">
            Gửi yêu cầu thiết kế của bạn ngay hôm nay. Đội ngũ kỹ thuật viên mỹ thuật của chúng tôi sẽ nghiên cứu và phác thảo giải pháp độc bản tối ưu nhất cho bạn.
          </p>
        </div>

        {/* Suspense Wrapped Contact Form */}
        <Suspense fallback={
          <div className="w-full py-24 flex items-center justify-center">
            <span className="font-display font-black text-sm tracking-widest text-accent animate-pulse">
              ĐANG NẠP THÔNG TIN CẤU HÌNH...
            </span>
          </div>
        }>
          <ContactFormContent />
        </Suspense>
      </div>
    </main>
  );
}
