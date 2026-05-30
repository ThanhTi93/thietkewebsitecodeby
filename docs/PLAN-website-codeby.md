# PLAN: Rebranding & Quy Trình Thiết Kế Website CodeBy Đà Nẵng

This plan details the modernization, comprehensive B2B content expansion, interactive "Quy Trình Thiết Kế Website CodeBy Đà Nẵng" (Design Process), and global brand migration from "Thiết Kế Web Đà Nẵng" to "CODEBY ĐÀ NẴNG / thietkewebsitecodeby.com".

---

## 🛑 Socratic Gate (User Input Requested)

Please review the following strategic questions. You can reply with your feedback, or approve the plan to proceed with execution:

1. **Về Giao Diện Quy Trình (Process Section)**: Bạn muốn quy trình 6 bước hiển thị theo dạng **Dòng thời gian ngang (Horizontal Timeline)** có hoạt họa nhấp nháy, hay dạng **Thẻ ô lưới (Staggered Grid Cards)** bo góc kèm số thứ tự lớn nổi bật?
2. **Về Thông Tin Hữu Ích (Customer Value Content)**: Bên cạnh việc tối ưu SEO/Tốc độ, chúng tôi sẽ thêm mục *"Tại sao chọn CodeBy?"* phân tích kỹ lưỡng các giá trị công nghệ (Next.js tối tân, Code sạch 100% không dùng theme lậu, bảo hành trọn đời). Bạn có muốn bổ sung thêm điểm giá trị đặc biệt nào khác của CodeBy không?
3. **Về Thông Tin Liên Hệ**:
   - Tên miền chính: `thietkewebsitecodeby.com`
   - Email liên hệ: Chúng tôi sẽ đổi sang dạng `contact@thietkewebsitecodeby.com` hay bạn muốn sử dụng một hòm thư khác?
   - Số điện thoại Hotline: Giữ nguyên `+84 77 441 5059`?

---

## 📋 Proposed Changes & File Impact

### 1. Global Rebranding (Branding Migration)
All instances of text, footers, headers, copyright, metadata titles, and contact links will be fully renamed to reflect **CODEBY ĐÀ NẴNG** & `thietkewebsitecodeby.com`:
- **Modify**: `app/layout.tsx` (Update Page SEO Metadata, Titles, Descriptions)
- **Modify**: `app/page.tsx` (Hero title branding, quick contact panel links, footers)
- **Modify**: `app/portfolio/page.tsx` (Subpages titles, footer)
- **Modify**: `app/estimator/page.tsx` (Cost calculation header, branding details)
- **Modify**: `app/contact/page.tsx` (Contact layout, form headings)

### 2. quy Trình Thiết Kế Website CodeBy (Interactive Step Section)
We will design a stunning interactive **6-step website design workflow section** inside `app/page.tsx`:
- **Bước 1: Tiếp Nhận & Khảo Sát**: Khảo sát nghiệp vụ, phân tích nhu cầu và lập bảng tính giá.
- **Bước 2: Phác Thảo UI/UX (Figma)**: Thiết kế giao diện độc quyền dựa trên màu sắc thương hiệu.
- **Bước 3: Lập Trình Code Sạch (Clean-Code)**: Phát triển mã nguồn bằng Next.js/React tối tân, hiệu suất tuyệt đối.
- **Bước 4: Tối Ưu Tốc Độ & Chuẩn SEO**: Tối ưu điểm Lighthouse >95%, cấu hình sitemap, robot.txt.
- **Bước 5: Kiểm Thử & Nghiệm Thu**: Kiểm thử bảo mật toàn diện, tối ưu giao diện di động.
- **Bước 6: Bàn Giao & Bảo Hành Vĩnh Viễn**: Bàn giao 100% Source Code sạch và đồng hành trọn đời.

### 3. Kiến Thức & Giá Trị Hữu Ích Cho Khách Hàng (Why CodeBy Grid)
Add a B2B section offering direct customer value, explaining core website health metrics:
- **Tốc độ load trang**: Tại sao tải dưới 1.5s giúp tăng 40% doanh thu.
- **Chuẩn SEO Google**: Tầm quan trọng của thiết kế cấu trúc phẳng và semantic HTML.
- **Thiết kế May Đo (Custom UI)**: Tại sao template có sẵn kéo lùi thương hiệu của bạn.
- **Sở hữu mã nguồn sạch**: Tránh xa mã độc từ các theme lậu trôi nổi.

---

## 🧪 Verification & QA Checklist

- [ ] **TypeScript Build**: Run `npm run build` to confirm zero compilation errors.
- [ ] **Brand Audit**: Grep for any remaining "thietkewebdanang" or old titles to ensure 100% brand consistency.
- [ ] **Interactive States**: Verify step-by-step accordion/hover highlights and responsive flex structures function properly.
- [ ] **Metadata Audit**: Ensure HTML tab title reads `CodeBy Đà Nẵng — Thiết Kế Website Trọn Gói` with matching keywords.
