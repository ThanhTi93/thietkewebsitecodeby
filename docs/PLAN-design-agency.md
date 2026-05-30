# Kế hoạch phát triển Website Web Design Agency (Swiss Modernism Style)

Dự án này nhằm xây dựng một trang web giới thiệu dịch vụ thiết kế website đẳng cấp, hiệu năng cao và có tính chuyển đổi tốt cho Agency. Thiết kế đi theo phong cách **Swiss Modernism (Chủ nghĩa Hiện đại Thụy Sĩ)** độc bản với các góc sắc nét, bố cục chữ khổng lồ bất đối xứng, màu nền Charcoal tối kết hợp điểm nhấn Acid Green nổi bật, mang lại ấn tượng thị giác cực mạnh (wow-effect) cho khách hàng.

---

## 🎨 Định Hướng Thiết Kế (Design Commitment)

Để phá bỏ các khuôn mẫu thiết kế AI đại trà (Anti-Safe-Harbor) và tuân thủ các quy tắc chất lượng nghiêm ngặt, chúng tôi cam kết áp dụng các nguyên lý mỹ thuật sau:
- **Geometry (Hình học):** Sử dụng các góc sắc nét tuyệt đối (`rounded-none` / 0px - 2px) tạo cảm giác kỹ thuật, sang trọng và chuẩn xác của Thụy Sĩ. Tuyệt đối không lạm dụng góc bo tròn mặc định (4px-8px).
- **Typography (Chữ):** Sử dụng Font chữ Sans-serif hiện đại với tiêu đề cực lớn (Headline 100px - 150px+), căn lề bất đối xứng và sắp đặt chữ có tính nghệ thuật cao.
- **Palette (Màu sắc):** Nền tối sâu thẳm **Dark Charcoal (#0c0c0c)** làm nổi bật văn bản màu Off-White (#f3f3f3) và các phần tử tương tác quan trọng bằng màu chủ đạo **Acid Green (#ccff00)**. Hoàn toàn tuân thủ **Purple Ban** (Không màu tím/indigo thương mại).
- **Layout Uniqueness (Bố cục độc bản):** Phá bỏ bố cục Hero chia đôi 50/50 nhàm chán. Sử dụng bố cục xếp chồng đa chiều (Overlap Z-axis) và lề so le (Staggered Layout) tạo cảm giác chuyển động cuốn hút khi cuộn trang.

---

## 🛠️ Đề Xuất Thay Đổi Cấu Trúc (Proposed Structure)

Dự án sử dụng framework **Next.js App Router** với **TypeScript** và **Tailwind CSS v4** để đạt điểm tối đa SEO và tốc độ tải trang Core Web Vitals.

### Các thành phần mới [NEW]:
- [NEW] `tailwind.config.ts` (Thiết lập hệ thống màu sắc Acid Green, nền Charcoal và vô hiệu hóa border-radius mặc định).
- [NEW] `app/layout.tsx` (Cài đặt font chữ cao cấp Outfit/Inter từ Google Fonts, thẻ Meta SEO tối ưu).
- [NEW] `app/page.tsx` (Trang chủ Asymmetric Hero, Services grid-breaking, Quy trình thiết kế & Testimonial).
- [NEW] `app/estimator/page.tsx` (Công cụ tính giá thiết kế web trực tiếp - lead generator cực kỳ thu hút khách hàng).
- [NEW] `app/portfolio/page.tsx` (Trang trưng bày các dự án đã thực hiện dạng Masonry không quy tắc, hỗ trợ lọc danh mục).
- [NEW] `app/contact/page.tsx` (Form liên hệ tối giản, có hiệu ứng tương tác vật lý sống động và phản hồi mượt mà).

---

## 📋 Danh Sách Nhiệm Vụ (Tasks Checklist)

### Phase 1: Khởi Tạo Dự Án & Cấu Hình Môi Trường (Initialization)
- [ ] **Task 1:** Khởi tạo cấu trúc dự án Next.js App Router bằng `npx create-next-app` trực tiếp tại thư mục gốc.  
  *Kiểm tra:* Thư mục dự án có đầy đủ các file cấu hình `package.json`, `app/` directory và TypeScript.
- [ ] **Task 2:** Tích hợp Tailwind CSS, cấu hình Design Tokens cho phong cách Swiss Modernism trong `app/globals.css`. Định nghĩa bảng màu:
  - Background: `#0c0c0c`
  - Text: `#f3f3f3`
  - Accent/Primary: `#ccff00` (Acid Green)
  - Vô hiệu hóa border-radius: Tất cả nút và thẻ đều có `rounded-none`.  
  *Kiểm tra:* Chạy `npm run dev` không có lỗi build, theme màu được kích hoạt chính xác.

### Phase 2: Phát Triển Trang Chủ Độc Bản (Asymmetric Homepage)
- [ ] **Task 3:** Thiết kế phần **Hero Section** với dòng chữ Typographic khổng lồ "WE DESIGN WEBSITES THAT DESTROY COMPETITION." xếp lớp so le và nút CTA góc vuông phát sáng nhẹ khi hover.  
  *Kiểm tra:* Giao diện hiển thị đúng trên Desktop và Mobile (Breakpoints), không bị vỡ bố cục.
- [ ] **Task 4:** Phát triển khu vực **Dịch Vụ (Services Grid)** phá vỡ cấu trúc lưới bento truyền thống, sử dụng các đường kẻ biên cực mỏng (1px border) và hiệu ứng chuyển dịch vị trí nhẹ (translate) khi hover.  
  *Kiểm tra:* Trải nghiệm mượt mà, hiệu năng tối ưu (chỉ sử dụng GPU-accelerated CSS).

### Phase 3: Tính Năng Cao Cấp & Bộ Lọc Portfolio
- [ ] **Task 5:** Phát triển trang **Portfolio trưng bày sản phẩm (`app/portfolio/page.tsx`)**. Sử dụng layout Masonry bất đối xứng và bộ lọc dự án (Lọc theo E-commerce, Landing Page, SaaS) phản hồi tức thì bằng hiệu ứng chuyển động mượt mà.  
  *Kiểm tra:* Bộ lọc hoạt động chính xác, hình ảnh tối ưu hóa bằng `next/image` tránh hiện tượng CLS (Cumulative Layout Shift).
- [ ] **Task 6:** Xây dựng công cụ **Interactive Web Design Price Estimator (`app/estimator/page.tsx`)**. Cho phép khách hàng tự lựa chọn loại web, số lượng trang, tính năng nâng cao (đa ngôn ngữ, cổng thanh toán) và hiển thị khoảng giá ước tính ngay lập tức cùng nút "Nhận Tư Vấn Ngay".  
  *Kiểm tra:* Tính toán chính xác logic giá, tạo động lực liên hệ cực mạnh cho khách hàng.

### Phase 4: Biểu Mẫu Liên Hệ & Trang Trí Tương Tác
- [ ] **Task 7:** Hoàn thiện trang **Liên hệ (`app/contact/page.tsx`)** tích hợp biểu mẫu tối giản, hỗ trợ tự động xác thực phía client và thông báo thành công có hoạt ảnh tương tác sinh động.  
  *Kiểm tra:* Form hoạt động trơn tru, chống spam cơ bản, không có lỗi runtime.

---

## 🔍 Kế Hoạch Xác Minh Chất Lượng (Verification Plan)

### Kiểm thử Tự động (Automated Verification)
Để đảm bảo website đạt chất lượng tuyệt đối trước khi bàn giao, chúng tôi sẽ chạy các bộ công cụ kiểm định sau:
1. **Linter & Typecheck:** Chạy lệnh `npm run lint` và `npx tsc --noEmit` để đảm bảo sạch lỗi TypeScript và cú pháp.
2. **UX Audit:** Chạy script chuyên dụng `python .agent/skills/frontend-design/scripts/ux_audit.py` để đánh giá sự phân bổ không gian âm và tỷ lệ typography.
3. **SEO Checker:** Chạy script `python .agent/skills/seo-fundamentals/scripts/seo_checker.py` để kiểm định tính hợp lệ của meta tags, cấu trúc header `<h1>` độc nhất và alt images.
4. **Accessibility Checker:** Chạy script `python .agent/skills/frontend-design/scripts/accessibility_checker.py` để kiểm tra độ tương phản màu sắc của nền tối và Acid Green, đảm bảo đạt chuẩn WCAG AA.

### Kiểm thử Thủ công (Manual Verification)
1. Mở trình duyệt để trải nghiệm toàn bộ dòng chảy hành động: Trang chủ -> Chọn bộ lọc Portfolio -> Dùng thử Price Estimator -> Gửi form liên hệ.
2. Kiểm tra độ phản lưu (Responsive) trên môi trường di động giả làm và các kích thước màn hình phổ biến.
3. Đo lường hiệu năng thực tế trên Lighthouse DevTools đảm bảo điểm Performance > 90.

---

## 🏁 Tiêu Chí Hoàn Thành (Done When)
- [ ] Dự án Next.js khởi tạo thành công, biên dịch mượt mà không có bất kỳ cảnh báo/lỗi nào.
- [ ] Giao diện đi đúng phong cách **Swiss Modernism**: Độc bản, bất đối xứng, góc sắc nét, màu nền tối và điểm nhấn Acid Green (Không màu tím AI).
- [ ] Tích hợp đầy đủ các trang cốt lõi: Trang chủ, Portfolio lọc mượt mà, Price Estimator thông minh, và Contact Form.
- [ ] Vượt qua toàn bộ các bài kiểm tra từ các công cụ kiểm định tự động (`ux_audit.py`, `seo_checker.py`, `accessibility_checker.py`).
