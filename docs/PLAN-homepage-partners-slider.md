# PLAN: Nâng cấp Màu nền Trang chủ & Thêm Slider Đối tác Chạy vòng lặp

Tài liệu này phác thảo kế hoạch chi tiết để nâng cấp trải nghiệm thị giác trên trang chủ của `thietkewebsitecodeby.com`. Chúng tôi sẽ thay thế các mảng nền trắng đơn điệu ở nửa dưới trang web bằng các dải nền màu sắc sang trọng, có chiều sâu mỹ thuật cao, đồng thời tích hợp một Infinite Slider (Marquee) chạy vòng lặp hiển thị các đối tác uy tín đã thiết kế website tại CodeBy Đà Nẵng.

---

## 🎨 Tuyên bố Thiết kế (Design Commitment)

*   **Geometry:** Sharp Edges (0px - 2px) cho cảm giác công nghệ, chính xác và cao cấp.
*   **Palette:** Sử dụng dải màu Slate-950/Slate-900 (Deep Dark) chuyển tiếp mượt mà từ Slate-50 sang trọng ở trên, kết hợp với các đường lưới kỹ thuật mảnh (Subtle Grid Layout) và ánh sáng ambient xanh lục/ngọc bích dịu nhẹ để tạo điểm nhấn thị giác mà không phạm vào lệnh cấm màu Tím (Purple Ban).
*   **Effects/Motion:** Infinite CSS Keyframe Marquee cho slider đối tác, hoạt động mượt mà, sử dụng tăng tốc phần cứng GPU (`transform: translate3d`) đảm bảo hiệu năng tải trang đạt điểm tối đa trên Lighthouse.

---

## 🔎 Câu hỏi Socratic Gate (Yêu cầu làm rõ)

> [!IMPORTANT]
> Để bản thiết kế đạt hiệu quả thẩm mỹ tối đa và đúng ý bạn nhất, vui lòng phản hồi 3 câu hỏi chiến lược sau:
> 
> 1. **Phong cách Màu nền nửa dưới trang (Bảng giá, Đánh giá, FAQ):**
>    *   **Lựa chọn A (Deep Dark - Khuyên dùng):** Chuyển toàn bộ các phần này sang tông nền tối cực sang trọng (Slate-950), kết hợp viền mỏng và hiệu ứng ánh sáng ngầm (Ambient Glow). Điều này tạo sự tương phản mạnh mẽ, giúp trang web cực kỳ thu hút khi cuộn xuống dưới.
>    *   **Lựa chọn B (Modern Premium Light):** Giữ tông sáng nhưng phối lại các gam màu xám ấm tinh tế (Warm Slate, Sandstone) cùng lưới tọa độ kỹ thuật mờ, loại bỏ hoàn toàn cảm giác trắng đơn điệu.
> 
> 2. **Kiểu hiển thị Logo Đối tác trong Slider:**
>    *   **Lựa chọn A (Tối giản - Monochrome):** Sử dụng các logo dạng SVG một màu trắng/xám mờ đồng bộ, khi hover vào sẽ chuyển sang màu nguyên bản. Đây là tiêu chuẩn thiết kế của các SaaS cao cấp toàn cầu giúp trang web nhìn cực kỳ sạch sẽ và chuyên nghiệp.
>    *   **Lựa chọn B (Original Color):** Giữ nguyên màu sắc logo gốc của từng đối tác để tăng tính nhận diện thực tế của thương hiệu đối tác đó.
> 
> 3. **Vị trí hiển thị của Slider Đối tác:**
>    *   **Vị trí 1 (Khuyên dùng):** Đặt ngay phía dưới phần Hero (ngay trước phần Stat Board) để đập vào mắt người dùng ngay lập tức, chứng minh uy tín thương hiệu ngay từ giây đầu tiên.
>    *   **Vị trí 2:** Đặt ở giữa trang, phía trên phần Bảng Giá để củng cố lòng tin khách hàng trước khi xem chi phí dịch vụ.

---

## 🛠️ Đề xuất Thay đổi (Proposed Changes)

### Component 1: Đối tác Slider (Infinite Marquee)
*   **[NEW]** Tạo một component slider chạy vòng lặp vô tận bằng CSS thuần cực nhẹ.
*   **Thiết kế:** Grid-free, logo chạy cuộn ngang liên tục, hỗ trợ tự động dừng khi rê chuột qua (`hover:pause`).
*   **Logo đối tác:** Tạo sẵn 6-8 đối tác tiêu biểu (ví dụ: DaNang Travel, Mộc Spa, BĐS Hoà Xuân, EduCenter, Coffee House, TechCorp) được thiết kế bằng mã SVG sạch trực tiếp trong code, không sử dụng ảnh placeholder chất lượng kém.

### Component 2: Nâng cấp Màu nền & Độ sâu thị giác
*   **[MODIFY] [page.tsx](file:///d:/thietkewebsitecodeby/app/page.tsx)**
    *   Tái cấu trúc nền của các Section: Dịch vụ, Quy trình, Bảng giá, Testimonials, FAQ.
    *   Tích hợp dải màu Gradient chuyển tiếp tinh tế từ tối dần xuống chân trang (hoặc theo phong cách chủ đạo được chọn).
    *   Thêm lưới tọa độ CSS (`background-size`, `radial-gradient`) kết hợp các hình khối phát sáng ngầm mượt mà ở chế độ GPU-accelerated.

---

## 🏁 Kế hoạch Xác minh (Verification Plan)

### Kiểm thử Thủ công
1.  **Marquee Smoothness:** Kiểm tra slider chạy mượt mà trên cả Safari, Chrome, Edge và các thiết bị di động (iPhone/Android). Đảm bảo không bị giật lag (sử dụng `will-change-transform`).
2.  **Responsive Layout:** Kiểm tra độ hiển thị của slider logo khi co giãn màn hình di động (tối ưu kích thước logo mượt mà từ desktop xuống mobile).
3.  **Contrast & Accessibility:** Đảm bảo chữ trên nền màu mới đạt độ tương phản chuẩn WCAG AA (đọc rõ ràng, không mỏi mắt).

### Kiểm thử Tự động & Build
*   Chạy lệnh `npm run lint` để kiểm tra lỗi cú pháp và code style.
*   Chạy lệnh `npm run build` để kiểm tra lỗi build tĩnh của Next.js 16 và React 19.
