"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Zap,
  Star,
  Code,
  ArrowRight,
  Milestone,
  History,
  Target,
  Award,
  Settings
} from "lucide-react";

export default function About() {
  return (
    <main className="flex-1 w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden py-24 px-6 font-sans">
      
      {/* Visual background layers */}
      <div className="absolute top-[5%] left-[-10%] w-[450px] h-[450px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none -z-20"></div>
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] bg-teal-500/[0.02] rounded-full blur-[150px] pointer-events-none -z-20"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-[160px] pointer-events-none -z-20"></div>
      
      {/* Coordinate grid dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-25 pointer-events-none -z-30"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-24 text-left relative z-10">
          <span className="text-accent font-display text-sm tracking-[0.25em] font-black block mb-4 uppercase">
            [ VỀ CHÚNG TÔI ]
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6 text-slate-900">
            Hành Trình <span className="text-accent">CodeBy</span>.
          </h1>
          <p className="max-w-2xl text-slate-500 leading-relaxed text-base md:text-lg">
            Hơn hai thập kỷ cống hiến trí tuệ công nghệ, thiết lập các tiêu chuẩn mỹ thuật số độc bản và đồng hành nâng tầm vị thế trực tuyến cho các thương hiệu hàng đầu.
          </p>
        </div>

        {/* ================= EDITORIAL TIMELINE SECTION ================= */}
        <div className="mb-32 relative z-10">
          <div className="border-b border-slate-200 pb-6 mb-16 flex items-center justify-between">
            <span className="text-slate-400 font-display text-xs tracking-widest font-black uppercase flex items-center gap-2">
              <History className="w-4 h-4 text-accent" /> CHẶNG ĐƯỜNG LỊCH SỬ
            </span>
            <span className="text-xs font-mono text-accent font-black">[ SINCE 2001 ]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Timeline Left: Editorial Lead & HQ Card */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12 lg:sticky lg:top-32">
              <div className="text-left">
                <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 leading-tight mb-6">
                  Kiến tạo giá trị vững bền từ lòng đam mê công nghệ.
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Được khai sinh tại trung tâm thành phố Đà Nẵng, CODEBY đã chuyển mình mạnh mẽ vượt qua những thử thách về thời gian, biến khó khăn thành động lực phát triển để vươn lên thành một studio lập trình cao cấp hàng đầu khu vực.
                </p>
              </div>

              {/* HQ Detail Badge - Floating premium glass look */}
              <div className="p-8 bg-white/70 border border-slate-200 backdrop-blur-md rounded-3xl flex flex-col sm:flex-row gap-6 items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-sans font-extrabold text-slate-900 text-sm">Trụ sở chính CODEBY</h4>
                    <p className="text-slate-500 text-xs mt-1">710 Trần Cao Vân, Thanh Khê, Đà Nẵng</p>
                  </div>
                </div>
                <div className="text-center sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                  <span className="text-[10px] font-sans font-black tracking-widest text-slate-400 block uppercase">KHỞI ĐẦU</span>
                  <span className="font-sans font-black bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent text-xl md:text-2xl">07 / 2001</span>
                </div>
              </div>
            </div>

            {/* Timeline Right: Asymmetric Editorial Chapters */}
            <div className="lg:col-span-7 flex flex-col gap-16 relative pl-6 md:pl-10 border-l border-slate-200/80">
              
              {/* Chapter 1: 2001 */}
              <div className="relative text-left group">
                {/* Visual indicator dot on timeline */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 bg-accent group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-display font-black text-5xl md:text-7xl bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent transition-all duration-300 block leading-none mb-3 group-hover:scale-105 origin-left">2001</span>
                <span className="text-accent font-display text-[10px] tracking-widest font-black uppercase block mb-3">[ CHƯƠNG I: KHỞI NGUYÊN & ĐẶT NỀN MÓNG ]</span>
                <h3 className="font-sans font-extrabold text-xl text-slate-800 mb-4">Thành lập & Cấp phép hoạt động</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Công Ty TNHH Công Nghệ CODEBY được thành lập vào tháng 07 năm <span className="text-accent font-extrabold">2001</span>, chính thức đi vào hoạt động theo Giấy phép đăng ký kinh doanh ngày <span className="text-accent font-extrabold">08/08/2001</span> do Sở Kế hoạch và Đầu tư Đà Nẵng cấp. Giữa bối cảnh CNTT miền Trung đang chớm nở, những nhà sáng lập đã dũng cảm đầu tư nguồn vốn ban đầu để khai phá và kiến tạo các giải pháp kỹ thuật phần mềm chất lượng cao.
                </p>
              </div>

              {/* Chapter 2: 2005 */}
              <div className="relative text-left group">
                {/* Visual indicator dot on timeline */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 bg-slate-400 group-hover:bg-accent group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-display font-black text-5xl md:text-7xl bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent transition-all duration-300 block leading-none mb-3 group-hover:scale-105 origin-left">2005</span>
                <span className="text-accent font-display text-[10px] tracking-widest font-black uppercase block mb-3">[ CHƯƠNG II: VƯỢT KHÓ & KHẲNG ĐỊNH THƯƠNG HIỆU ]</span>
                <h3 className="font-sans font-extrabold text-xl text-slate-800 mb-4">Vượt chướng ngại vật & Thu hút nhân tài</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Thuở ban đầu đối diện khó khăn cực đại về bài toán định vị thương hiệu và nhân sự trẻ chưa nhiều kinh nghiệm. Tuy nhiên, bằng chất lượng thực thi và tinh thần vượt khó cống hiến, CODEBY đã từng bước tuyển dụng, đào tạo được lực lượng lập trình viên xuất sắc bậc nhất. Công ty dần trở thành đối tác tin cậy thi công hàng loạt dự án kỹ thuật quy mô lớn toàn khu vực miền Trung.
                </p>
              </div>

              {/* Chapter 3: 2026 */}
              <div className="relative text-left group">
                {/* Visual indicator dot on timeline */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 border-slate-50 bg-slate-400 group-hover:bg-accent group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-display font-black text-5xl md:text-7xl bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent transition-all duration-300 block leading-none mb-3 group-hover:scale-105 origin-left">2026</span>
                <span className="text-accent font-display text-[10px] tracking-widest font-black uppercase block mb-3">[ CHƯƠNG III: BỨT PHÁ CÔNG NGHỆ TOÀN CẦU ]</span>
                <h3 className="font-sans font-extrabold text-xl text-slate-800 mb-4">Cơ sở vật chất tối tân & Tầm nhìn tương lai</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
                  Bước sang năm 2026, CODEBY chính thức nâng cấp hạ tầng công nghệ và chuyển mình mạnh mẽ thành một studio lập trình cao cấp quy mô toàn cầu. Chúng tôi tự hào đầu tư hệ thống trang thiết bị tối tân tại văn phòng làm việc mới, mở rộng quy mô nhân sự chất lượng cao và hoàn thiện quy trình vận hành Agile tiên tiến. Từ nền tảng vững chắc này, CODEBY tự tin tiên phong cung cấp những giải pháp công nghệ độc bản và dẫn dắt các doanh nghiệp bứt phá ngoạn mục trên bản đồ số quốc tế.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CORE VALUES SECTION (DEFAULT EDITORIAL LIGHT BACKGROUND) ================= */}
        <div className="border-t border-slate-200/80 pt-24 pb-16 mb-24 relative z-10 w-full">
          <div className="mb-20 text-left">
            <span className="text-accent font-display text-[10px] tracking-[0.25em] font-black block mb-4 uppercase">
              [ TRIẾT LÝ HÀNH ĐỘNG ]
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-slate-900 leading-tight uppercase">
              Hệ Giá Trị <span className="text-accent">Cốt Lõi</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-3 max-w-xl leading-relaxed">
              Nền móng vững chắc quyết định sự phát triển bền bỉ của chúng tôi. Chúng tôi đo lường thành công bằng chính thành quả thực tế của khách hàng.
            </p>
          </div>

          {/* Premium Light Glass Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch w-full">
            
            {/* Pillar 1: Vision */}
            <div className="bg-white/70 border border-slate-200 hover:border-accent/40 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/[0.01] rounded-bl-full group-hover:bg-accent/[0.03] transition-colors duration-500"></div>
              <div>
                <div className="w-14 h-14 bg-accent/5 text-accent rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-8 shadow-inner shadow-accent/5">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 mb-4 group-hover:text-accent transition-colors tracking-wide uppercase">TẦM NHÌN CHIẾN LƯỢC</h3>
                <ul className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-3 list-disc pl-4 font-sans">
                  <li>Đem lại giá trị thặng dư cao nhất cho nhà đầu tư và khách hàng, đóng góp sâu rộng cho lợi ích cộng đồng.</li>
                  <li>Kiến tạo môi trường phát triển tài năng vượt bậc, biến CODEBY thành ngôi nhà đáng tự hào của toàn thể nhân sự.</li>
                  <li>Bứt phá trở thành studio công nghệ hàng đầu, tiên phong xuất khẩu các giải pháp phần mềm độc bản ra thế giới.</li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Mission */}
            <div className="bg-white/70 border border-slate-200 hover:border-emerald-500/40 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.01] rounded-bl-full group-hover:bg-emerald-500/[0.03] transition-colors duration-500"></div>
              <div>
                <div className="w-14 h-14 bg-emerald-500/5 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 mb-8 shadow-inner shadow-emerald-500/5">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors tracking-wide uppercase">SỬ MỆNH PHỤC VỤ</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                  Không ngừng nghiên cứu và phát triển để đem lại những giải pháp phần mềm và kiến trúc website tối tân nhất. Chúng tôi cam kết đáp ứng và vượt trên sự kỳ vọng khắt khe của khách hàng, đồng hành và thúc đẩy sự đột phá doanh thu bền vững trong dài hạn của doanh nghiệp.
                </p>
              </div>
            </div>

            {/* Pillar 3: Achievements */}
            <div className="bg-white/70 border border-slate-200 hover:border-amber-500/40 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/[0.01] rounded-bl-full group-hover:bg-amber-500/[0.03] transition-colors duration-500"></div>
              <div>
                <div className="w-14 h-14 bg-amber-500/5 text-amber-600 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 mb-8 shadow-inner shadow-amber-500/5">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 mb-4 group-hover:text-amber-600 transition-colors tracking-wide uppercase">THÀNH TỰU VỮNG VÀNG</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                  Từ một xuất phát điểm khiêm tốn, CODEBY tự hào vươn lên khẳng định vị thế studio lập trình phần mềm và thiết kế website đẳng cấp bậc nhất thành phố Đà Nẵng. Chúng tôi đã xây dựng lòng tin tuyệt đối bằng việc bàn giao thành công hàng trăm dự án kỹ thuật quy mô lớn cho cả đối tác trong nước và doanh nghiệp đa quốc gia.
                </p>
              </div>
            </div>

            {/* Pillar 4: Capabilities */}
            <div className="bg-white/70 border border-slate-200 hover:border-purple-500/40 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/[0.01] rounded-bl-full group-hover:bg-purple-500/[0.03] transition-colors duration-500"></div>
              <div>
                <div className="w-14 h-14 bg-purple-500/5 text-purple-600 rounded-2xl flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 mb-8 shadow-inner shadow-purple-500/5">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 mb-4 group-hover:text-purple-600 transition-colors tracking-wide uppercase">LĨNH VỰC HOẠT ĐỘNG</h3>
                <ul className="text-slate-600 text-xs md:text-sm leading-relaxed space-y-3 list-disc pl-4 font-sans">
                  <li><strong>Kỹ thuật phần mềm chuyên sâu:</strong> Lập trình tối ưu kiến trúc hệ thống dữ liệu, xây dựng các ứng dụng Web/App tùy biến từ trung bình đến phức tạp cao.</li>
                  <li><strong>Thiết kế Mỹ thuật Số mỹ cảm:</strong> Sáng tạo giao diện UI/UX độc bản chuẩn hóa công năng tiếp thị, tối ưu tỉ lệ chuyển đổi thực tế cho doanh nghiệp.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* ================= BOTTOM CTA PANEL (Light Slate background for seamless return) ================= */}
        <div className="border border-slate-200/80 bg-white/70 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-10 shadow-sm relative z-10">
          <div className="text-center md:text-left max-w-xl">
            <span className="text-accent font-display text-[10px] tracking-widest font-black uppercase block mb-3">[ KIẾN TẠO TƯƠNG LAI ]</span>
            <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 mb-4 uppercase">Sẵn Sàng Đồng Hành Cùng CODEBY?</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans">
              Đừng để thương hiệu của bạn bị bó hẹp trong những khuôn mẫu cũ kỹ. Hãy sở hữu ngay một hệ thống website độc bản với hiệu năng bứt phá hàng đầu.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/lien-he"
              className="bg-accent hover:bg-[#0044cc] text-white font-display text-xs tracking-widest font-black py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-accent/25 hover:shadow-accent/40 w-full md:w-auto"
            >
              LIÊN HỆ KHỞI ĐẦU DỰ ÁN
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
