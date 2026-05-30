# Kế Hoạch Thiết Kế: Trang Liên Hệ Tối Ưu Local SEO `/thiet-ke-website-da-nang`

Kế hoạch này phác thảo các bước triển khai kỹ thuật để tạo một trang liên hệ chuẩn SEO mới tích hợp hoàn hảo với bộ nhận diện thương hiệu **CodeBy Đà Nẵng**, sử dụng slug tiếng Việt không dấu `/thiet-ke-website-da-nang` để chiếm lĩnh TOP tìm kiếm Google Đà Nẵng.

---

## 🛑 Câu hỏi chiến lược (Socratic Gate) - Vui lòng phản hồi ở mục chat:
1. **Dữ liệu Biểu mẫu (Form Submission):** Bạn muốn dữ liệu biểu mẫu liên hệ này được xử lý như thế nào? (Lưu nội bộ tạm thời hiển thị popup thành công, hay gửi email/Google Sheets?)
2. **Google Maps Embed:** Có nên nhúng trực tiếp bản đồ chỉ đường đến văn phòng CodeBy (183 Quách Thị Trang, Đà Nẵng) trên trang này để tăng uy tín không?
3. **Tối ưu SEO nâng cao:** Bạn có muốn tích hợp thêm đoạn giới thiệu ngắn về dịch vụ thiết kế web Đà Nẵng uy tín ngay bên dưới form liên hệ để bot Google quét từ khóa tốt hơn không?

---

## 🛠️ Thiết kế Kiến trúc & Tệp tin mới

### 1. Đường dẫn thư mục (Route):
*   Tạo đường dẫn mới chuẩn SEO: `app/thiet-ke-website-da-nang/`
*   Tệp xử lý chính: `app/thiet-ke-website-da-nang/page.tsx`

### 2. Giao diện & Trải nghiệm (UI/UX):
*   **Hero Header:** Tiêu đề lớn hiển thị chữ dạng text nghệ thuật: **"THIẾT KẾ WEBSITE ĐÀ NẴNG"** kết hợp thẻ `<h1>` chuẩn SEO.
*   **Lớp nền (Background Gradient):** Tiếp tục kế thừa hệ thống dải màu chuyển tuyến tính mượt mà `bg-gradient-to-b from-slate-50 via-blue-50/10 to-slate-50` kết hợp lưới chấm tọa độ để đồng bộ giao diện Premium của trang chủ.
*   **Biểu mẫu liên hệ (Contact Form):** Thiết kế tối tân với 4 trường thông tin: Họ tên, Email, Số điện thoại, và Nội dung yêu cầu chi tiết. Kế thừa cơ chế nhận diện tự động dữ liệu dự toán ngân sách từ trang `/estimator`.
*   **Bảng thông tin trực tiếp:** Hotline (+84 77 441 5059), Email, Địa chỉ Studio kèm bản đồ nhúng tiện lợi.

---

## 📋 Các bước thực hiện (Task Breakdown)

### Phase 1: Tạo thư mục và cấu trúc trang liên hệ SEO
*   [ ] Khởi tạo thư mục `app/thiet-ke-website-da-nang/`
*   [ ] Viết mã nguồn giao diện `page.tsx` cho trang liên hệ mới, sử dụng cơ chế `"use client"` kết hợp `Suspense` an toàn cho tham số URL.

### Phase 2: Cấu hình SEO Metadata
*   [ ] Đặt tiêu đề tối ưu: *"Thiết Kế Website Đà Nẵng Uy Tín, Chuyên Nghiệp | CodeBy"*
*   [ ] Bổ sung Meta Description chứa từ khóa mục tiêu: *"CodeBy chuyên thiết kế website Đà Nẵng chuẩn SEO chuyên nghiệp. Tối ưu tốc độ tải trang dưới 1.0 giây, giao diện độc bản đẳng cấp giúp tăng chuyển đổi đơn hàng hiệu quả."*

### Phase 3: Kiểm tra và Biên dịch (Verification)
*   [ ] Chạy `npm run build` để kiểm tra độ ổn định của toàn bộ website Next.js sau khi bổ sung route mới.
*   [ ] Sử dụng công cụ kiểm tra để đảm bảo trang hiển thị hoàn hảo trên cả di động và máy tính.
