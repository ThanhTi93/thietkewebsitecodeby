"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  ArrowLeft, 
  Send, 
  CheckSquare, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Zap,
  Shield,
  Search,
  MessageSquare
} from "lucide-react";

// Contact form component with URL parameters pre-population
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
      <div className="border-2 border-accent/20 p-8 md:p-16 text-center flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl shadow-xl">
        <div className="p-4 bg-accent text-white rounded-2xl animate-pulse">
          <CheckSquare className="w-12 h-12" />
        </div>
        <h2 className="font-sans font-bold text-3xl tracking-tight text-slate-900">
          Gửi Yêu Cầu Thành Công!
        </h2>
        <p className="text-slate-600 max-w-md leading-relaxed text-sm md:text-base font-sans">
          Cảm ơn bạn đã tin tưởng dịch vụ của <strong>CodeBy Đà Nẵng</strong>. Chuyên viên tư vấn kỹ thuật của chúng tôi đang nghiên cứu yêu cầu và sẽ chủ động gọi điện tư vấn chi tiết cho bạn trong vòng <strong>2 giờ làm việc</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-4">
          <a
            href="tel:0378486992"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-xs tracking-wider py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> GỌI HOTLINE NGAY
          </a>
          <Link
            href="/"
            className="border border-slate-300 hover:border-slate-800 hover:text-slate-900 font-sans font-bold text-xs tracking-wider py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            QUAY LẠI TRANG CHỦ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-stretch">
      {/* Left Column: Premium Contact Form */}
      <form onSubmit={handleSubmit} className="flex-1 space-y-8 bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-slate-200/60 shadow-sm">
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h3 className="font-sans font-bold text-lg text-slate-900">Gửi thông tin tư vấn</h3>
          <p className="text-xs text-slate-500 font-sans mt-1">Chúng tôi cam kết bảo mật tuyệt đối thông tin dự án của bạn.</p>
        </div>

        {/* Name Field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-sans font-bold text-xs tracking-wider text-accent flex items-center gap-1.5">
            <span>01 / HỌ VÀ TÊN</span> <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nguyen Van A"
            className={`w-full bg-white/90 border p-4 rounded-xl text-foreground font-sans text-sm focus:outline-none transition-all ${
              formErrors.name ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent"
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
            <label htmlFor="email" className="font-sans font-bold text-xs tracking-wider text-accent flex items-center gap-1.5">
              <span>02 / EMAIL LIÊN HỆ</span> <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className={`w-full bg-white/90 border p-4 rounded-xl text-foreground font-sans text-sm focus:outline-none transition-all ${
                formErrors.email ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent"
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
            <label htmlFor="phone" className="font-sans font-bold text-xs tracking-wider text-accent flex items-center gap-1.5">
              <span>03 / SỐ ĐIỆN THOẠI</span> <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0905000000"
              className={`w-full bg-white/90 border p-4 rounded-xl text-foreground font-sans text-sm focus:outline-none transition-all ${
                formErrors.phone ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent"
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
            04 / THÔNG TIN YÊU CẦU THIẾT KẾ CHI TIẾT
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Mô tả ý tưởng website, ngành nghề kinh doanh (Bất động sản, du lịch, nhà hàng...), hoặc tính năng đặc thù bạn muốn xây dựng để chúng tôi chuẩn bị bản thảo tốt nhất..."
            className="w-full bg-white/90 border border-slate-200 p-4 rounded-xl text-foreground font-sans text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-y leading-relaxed"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent hover:bg-[#0044cc] disabled:bg-slate-200 disabled:text-slate-400 text-white font-sans font-bold text-xs tracking-wider py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group w-full sm:w-auto shadow-md"
        >
          {isSubmitting ? (
            <>ĐANG KHỞI TẠO YÊU CẦU...</>
          ) : (
            <>
              GỬI YÊU CẦU TƯ VẤN
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Right Column: Direct Info & Google Maps Embed */}
      <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6 items-stretch">
        {/* Contact Info Card */}
        <div className="border border-slate-200 bg-slate-950 text-white p-8 rounded-3xl flex flex-col justify-between shadow-xl min-h-[380px]">
          <div>
            <span className="text-accent font-sans text-[10px] tracking-[0.2em] font-black block mb-6">
              [ THÔNG TIN STUDIO CODEBY ]
            </span>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[10px] font-mono mb-0.5">[ THƯ ĐIỆN TỬ ]</span>
                  <a href="mailto:contact@thietkewebsitecodeby.com" className="font-sans font-bold text-sm hover:text-accent transition-colors">
                    contact@thietkewebsitecodeby.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[10px] font-mono mb-0.5">[ HOTLINE TƯ VẤN ]</span>
                  <a href="tel:0378486992" className="font-sans font-bold text-sm hover:text-accent transition-colors">
                    0378 486 992
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 block text-[10px] font-mono mb-0.5">[ STUDIO ĐỊA CHỈ ]</span>
                  <p className="text-white/80 leading-relaxed font-sans text-sm">
                    183 Quách Thị Trang, Hoà Xuân, Cẩm Lệ, TP Đà Nẵng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-8 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-sans font-black tracking-widest text-white/40 uppercase block mb-1">
                [ THỜI GIAN LÀM VIỆC ]
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Thứ 2 — Thứ 7 | 8:00 AM — 6:00 PM (GMT+7).<br />
                Nhận thông tin đăng ký tư vấn trực tuyến 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Card */}
        <div className="border border-slate-200/80 bg-white/70 backdrop-blur-md p-4 rounded-3xl shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2 px-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-sans font-bold text-xs text-slate-700">Google Maps Chỉ Đường</span>
          </div>
          <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.6565158652395!2d108.21731631526466!3d15.97931398893544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a14ebaf252b%3A0xe54e6eefbe0ee4ff!2zMTgzIFF1w6FjaCBUaOG7iyBUcmFuZywgSG_DoCBYdcOibiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq5bmcsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThietKeWebsiteDaNang() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/10 to-slate-50 text-foreground flex flex-col font-sans selection:bg-accent selection:text-white relative overflow-x-hidden">
      
      {/* Background visual layers for premium tech identity */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.3] pointer-events-none -z-30"></div>
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none -z-20"></div>
      <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-teal-500/[0.03] rounded-full blur-[150px] pointer-events-none -z-20"></div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col justify-center font-sans font-black text-[10px] sm:text-xs leading-none tracking-[0.2em] hover:text-accent transition-colors">
            <span className="text-slate-900">THIETKEWEBSITE</span>
            <span className="text-accent mt-1">CODEBYDANANG</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-sans font-bold tracking-wider hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> QUAY LẠI TRANG CHỦ
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-20 w-full flex-1 flex flex-col">
        {/* Typographic SEO Header Section */}
        <div className="mb-16">
          <span className="text-accent font-sans text-xs tracking-[0.25em] font-bold block mb-4">[ TRANG LIÊN HỆ TỐI ƯU HÓA SEO ]</span>
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tight leading-tight mb-4 text-slate-900">
            Thiết Kế Website <span className="text-accent">Đà Nẵng</span>
          </h1>
          <h2 className="font-sans font-bold text-lg md:text-xl text-slate-600 mb-6">
            CodeBy — Studio Lập Trình & Mỹ Thuật Số Chất Lượng Cao
          </h2>
          <p className="max-w-3xl text-slate-500 leading-relaxed text-sm md:text-base font-sans">
            Chào mừng bạn đến với chuyên trang tư vấn **thiết kế website Đà Nẵng** của CodeBy. Chúng tôi tự hào mang đến các giải pháp website độc bản đẳng cấp, hiệu năng siêu tốc dưới 1.0 giây giúp tối ưu hóa SEO đạt TOP Google bền vững và đột phá tỷ lệ chuyển đổi. Gửi yêu cầu thiết kế của bạn ngay hôm nay để nhận tư vấn kỹ thuật chuyên sâu trong vòng 2 giờ!
          </p>
        </div>

        {/* Suspense Wrapped Contact Form */}
        <Suspense fallback={
          <div className="w-full py-16 flex items-center justify-center">
            <span className="font-sans font-bold text-sm tracking-widest text-accent animate-pulse">
              ĐANG NẠP THÔNG TIN CẤU HÌNH...
            </span>
          </div>
        }>
          <ContactFormContent />
        </Suspense>

        {/* Premium Local SEO Rich Content Value Section */}
        <section className="mt-28 border-t border-slate-200/80 pt-20">
          <div className="max-w-3xl mb-14">
            <span className="text-accent font-sans text-xs tracking-wider font-bold block mb-2">⚡ THẾ MẠNH ĐỘC QUYỀN</span>
            <h3 className="font-sans font-bold text-2xl md:text-4xl tracking-tight leading-tight text-slate-900">
              Tại sao chọn dịch vụ thiết kế website Đà Nẵng tại CodeBy?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Strength 1 */}
            <div className="flex gap-4 items-start bg-white/50 border border-slate-200/60 p-6 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-50 text-accent rounded-xl">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-slate-900 mb-2">Tốc độ tải siêu tốc dưới 1.0s</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Sử dụng kiến trúc hiện đại hàng đầu như Next.js giúp tối ưu hóa mã nguồn, triệt tiêu tỷ lệ thoát trang do tải chậm và gia tăng đột phá tỷ lệ chuyển đổi đơn hàng.
                </p>
              </div>
            </div>

            {/* Strength 2 */}
            <div className="flex gap-4 items-start bg-white/50 border border-slate-200/60 p-6 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-50 text-accent rounded-xl">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-slate-900 mb-2">Tối ưu chuẩn SEO bền vững</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Hệ thống code tinh gọn, cấu trúc thẻ tiêu đề, sơ đồ trang web và tốc độ phản hồi máy chủ được tối ưu đạt 100 điểm hiệu năng Lighthouse, giúp bot Google dễ dàng đưa website lên TOP.
                </p>
              </div>
            </div>

            {/* Strength 3 */}
            <div className="flex gap-4 items-start bg-white/50 border border-slate-200/60 p-6 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-50 text-accent rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-slate-900 mb-2">Giao diện độc bản tinh tế</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Chúng tôi nói không với các template cũ kỹ, kém hiệu năng. Mỗi website được CodeBy thiết kế riêng biệt dựa trên hành vi khách hàng và giá trị cốt lõi của doanh nghiệp.
                </p>
              </div>
            </div>

            {/* Strength 4 */}
            <div className="flex gap-4 items-start bg-white/50 border border-slate-200/60 p-6 rounded-2xl shadow-sm">
              <div className="p-3 bg-blue-50 text-accent rounded-xl">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-slate-900 mb-2">Bảo mật tuyệt đối & Vận hành 24/7</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Hệ thống được thiết kế đa tầng bảo mật chống các cuộc tấn công DDoS hay xâm nhập dữ liệu. Đội ngũ kỹ sư tại Đà Nẵng túc trực hỗ trợ vận hành và bảo hành trọn đời.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <Link href="/" className="font-sans font-black text-lg tracking-[0.2em] text-white hover:text-accent">
            CODEBY<span className="text-accent">/</span>ĐÀNẴNG
          </Link>
          <span className="font-sans text-xs">© {new Date().getFullYear()} THIẾT KẾ WEBSITE CODEBY. BẢO HÀNH TRỌN ĐỜI.</span>
        </div>
      </footer>
    </div>
  );
}
