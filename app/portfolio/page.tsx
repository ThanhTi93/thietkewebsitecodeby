"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  Check, 
  Layers, 
  Briefcase, 
  ShoppingBag, 
  TrendingUp, 
  Calendar, 
  Home, 
  Sparkles,
  ExternalLink
} from "lucide-react";

interface WebsiteCategory {
  id: string;
  label: string;
  description: string;
  features: string[];
  advancedFeatures?: string[];
}

const CATEGORIES: WebsiteCategory[] = [
  {
    id: "landing-page",
    label: "Landing Page",
    description: "Một trang giới thiệu sản phẩm hoặc dịch vụ chuyên sâu, được tối ưu hóa cấu trúc để chạy quảng cáo, thu hút khách hàng đăng ký thông tin, inbox hoặc gọi điện trực tiếp.",
    features: [
      "Thiết kế 1 trang (Single Page) chuẩn chuyển đổi",
      "Form đăng ký thu thập dữ liệu khách hàng gửi về Email/Google Sheet",
      "Tích hợp nút gọi điện, Zalo, Messenger nổi bật",
      "Hiển thị sản phẩm/dịch vụ trực quan kèm bảng giá",
      "Tốc độ tải trang tối ưu siêu tốc (PageSpeed 90+)"
    ]
  },
  {
    id: "corporate",
    label: "Website Doanh Nghiệp",
    description: "Website giới thiệu hoàn chỉnh nhằm khẳng định uy tín thương hiệu, cung cấp đầy đủ thông tin về doanh nghiệp, dịch vụ, dự án và các đối tác tiêu biểu.",
    features: [
      "Trang chủ thiết kế chuẩn nhận diện thương hiệu",
      "Trang Giới thiệu lịch sử, sứ mệnh, đội ngũ nhân sự",
      "Trang danh sách và chi tiết Dịch vụ / Dự án đã triển khai",
      "Trang Tin tức / Blog cập nhật hoạt động doanh nghiệp",
      "Trang Liên hệ tích hợp bản đồ và form gửi thông điệp"
    ]
  },
  {
    id: "ecommerce-basic",
    label: "Bán Hàng Cơ Bản",
    description: "Giải pháp bán hàng trực tuyến toàn diện cho các cửa hàng, doanh nghiệp vừa và nhỏ, đáp ứng đầy đủ các tính năng duyệt sản phẩm và đặt hàng nhanh.",
    features: [
      "Trưng bày Sản phẩm và phân chia Danh mục đa cấp",
      "Hệ thống Giỏ hàng và trang thanh toán/đặt hàng nhanh",
      "Quản lý tài khoản khách hàng (Đăng ký, đăng nhập, lịch sử mua)",
      "Trang quản lý đơn hàng cơ bản cho admin",
      "Tính năng bình luận, đánh giá sản phẩm từ người dùng"
    ]
  },
  {
    id: "ecommerce-advanced",
    label: "Bán Hàng Nâng Cao",
    description: "Hệ thống thương mại điện tử chuyên nghiệp tích hợp quản trị tồn kho tự động, công cụ khuyến mãi mạnh mẽ và các cổng thanh toán trực tuyến.",
    features: [
      "Bao gồm toàn bộ tính năng của Website bán hàng cơ bản",
      "Tích hợp Thanh toán Online (VNPAY, Momo, Chuyển khoản QR tự động)",
      "Hệ thống mã giảm giá (Coupon), khuyến mãi theo số lượng",
      "Quản lý tồn kho chi tiết theo thuộc tính (size, màu sắc, loại)",
      "Thống kê doanh thu chi tiết (theo ngày, tháng, quý, năm) dạng biểu đồ trực quan"
    ]
  },
  {
    id: "booking",
    label: "Đặt Lịch & Booking",
    description: "Dành cho các ngành dịch vụ như Spa, nha khoa, salon, phòng khám hoặc các dịch vụ vận chuyển (xe ghép, xe du lịch) cần quản lý lịch hẹn trực tuyến.",
    features: [
      "Form đặt lịch hẹn trực quan (chọn ngày, giờ, dịch vụ)",
      "Lựa chọn nhân sự hỗ trợ / bác sĩ / kỹ thuật viên",
      "Quản lý trạng thái lịch hẹn (Chờ duyệt, Đã xác nhận, Đã hoàn thành)",
      "Tự động gửi thông báo lịch hẹn qua email khách hàng và admin",
      "Phân hệ quản lý khung giờ trống (Timeslots) linh hoạt"
    ]
  },
  {
    id: "real-estate",
    label: "Bất Động Sản",
    description: "Kênh thông tin nhà đất chuyên nghiệp hỗ trợ đăng tải dự án, tìm kiếm phân loại bất động sản và kết nối trực tiếp khách hàng với môi giới.",
    features: [
      "Danh sách dự án và tin đăng mua bán/ký gửi nhà đất",
      "Bộ lọc nâng cao (theo khu vực, khoảng giá, loại nhà, diện tích)",
      "Trang thông tin chi tiết đầy đủ thông số, hình ảnh, video/360 VR",
      "Form liên hệ nhanh gắn trực tiếp với từng dự án",
      "Bản đồ vị trí trực quan tích hợp Google Maps"
    ]
  }
];

interface DemoProject {
  id: number;
  title: string;
  category: string;
  image: string;
  demoUrl: string;
  note: string;
  tags: string[];
}

const PROJECTS: DemoProject[] = [
  // LANDING PAGE
  {
    id: 1,
    title: "Mẫu Landing Page 03",
    category: "landing-page",
    image: "https://cdn3290.cdn4s6.io.vn/media/landing03.webp",
    demoUrl: "https://web4s.vn/view-demo/landing03",
    note: "Có form nhập thông tin liên hệ và hiển thị sản phẩm nổi bật.",
    tags: ["Form đăng ký", "Sản phẩm", "CTA"]
  },
  {
    id: 2,
    title: "Mẫu Landing Page 05",
    category: "landing-page",
    image: "https://cdn3290.cdn4s6.io.vn/media/landing05.webp",
    demoUrl: "https://web4s.vn/view-demo/landing05",
    note: "Bố cục hiện đại, thích hợp cho chiến dịch quảng cáo sản phẩm đơn lẻ.",
    tags: ["Form thu thập", "Trưng bày", "Mobile UI"]
  },
  {
    id: 3,
    title: "Mẫu Landing Page 04",
    category: "landing-page",
    image: "https://cdn3290.cdn4s6.io.vn/media/landing04.webp",
    demoUrl: "https://web4s.vn/view-demo/landing04",
    note: "Thiết kế trực quan, tập trung vào tính năng sản phẩm và phản hồi khách hàng.",
    tags: ["Form liên hệ", "Đánh giá", "Landing Page"]
  },
  {
    id: 4,
    title: "Mẫu Landing Page 09",
    category: "landing-page",
    image: "https://cdn3290.cdn4s6.io.vn/media/landing09.webp",
    demoUrl: "https://web4s.vn/view-demo/landing09",
    note: "Giao diện bắt mắt, phù hợp giới thiệu các gói dịch vụ hoặc khóa học trực tuyến.",
    tags: ["Form tư vấn", "Dịch vụ", "Chuyển đổi"]
  },
  {
    id: 5,
    title: "Mẫu Landing Page 10",
    category: "landing-page",
    image: "https://cdn3290.cdn4s6.io.vn/media/landing10.webp",
    demoUrl: "https://web4s.vn/view-demo/landing10",
    note: "Thiết kế tối giản, chuyên biệt cho việc thu thập thông tin tư vấn tài chính / bảo hiểm.",
    tags: ["Form đăng ký", "Tối giản", "Tải nhanh"]
  },

  // CORPORATE / COMPANY
  {
    id: 6,
    title: "Mẫu Doanh Nghiệp 06",
    category: "corporate",
    image: "https://cdn3290.cdn4s6.io.vn/media/doanhnghiep06.webp",
    demoUrl: "https://web4s.vn/view-demo/doanhnghiep06",
    note: "Giao diện tập đoàn lớn, bố cục rõ ràng, chuyên nghiệp và đầy đủ chức năng giới thiệu.",
    tags: ["Doanh nghiệp", "Dự án", "Dịch vụ"]
  },
  {
    id: 7,
    title: "Mẫu Doanh Nghiệp 05",
    category: "corporate",
    image: "https://cdn3290.cdn4s6.io.vn/media/doanhnghiep05.webp",
    demoUrl: "https://web4s.vn/view-demo/doanhnghiep05",
    note: "Phù hợp cho các công ty xây dựng, kiến trúc, khoe năng lực sản xuất và dự án.",
    tags: ["Giới thiệu", "Hồ sơ năng lực", "Liên hệ"]
  },
  {
    id: 8,
    title: "Yadea Việt Nam",
    category: "corporate",
    image: "https://yadea.dongphu.net/wp-content/uploads/2026/03/PC-Banner-2560x1120-1-1024x448.jpg",
    demoUrl: "https://yadea.dongphu.net/",
    note: "Website giới thiệu các dòng sản phẩm xe điện Yadea với hiệu ứng thị giác đỉnh cao.",
    tags: ["Thương hiệu", "Xe điện", "Sản phẩm"]
  },
  {
    id: 9,
    title: "BestAm Logistics",
    category: "corporate",
    image: "https://image.thum.io/get/width/800/crop/600/https://bestam.net/",
    demoUrl: "https://bestam.net/",
    note: "Trang giới thiệu công ty vận tải và kho bãi, tích hợp công cụ tra cứu thông tin.",
    tags: ["Logistics", "Vận chuyển", "Dịch vụ"]
  },
  {
    id: 10,
    title: "Jetbird Express",
    category: "corporate",
    image: "https://image.thum.io/get/width/800/crop/600/https://jetbirdexpress.dongphu.net/",
    demoUrl: "https://jetbirdexpress.dongphu.net/",
    note: "Giao diện chuyển phát nhanh quốc tế, giới thiệu mạng lưới và báo giá dịch vụ.",
    tags: ["Chuyển phát", "Vận tải", "Liên hệ"]
  },

  // E-COMMERCE BASIC
  {
    id: 11,
    title: "Mẫu Mỹ Phẩm 02",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/mypham02.webp",
    demoUrl: "https://web4s.vn/view-demo/mypham02/",
    note: "Thiết kế tông màu ngọt ngào, phù hợp cho shop mỹ phẩm, skincare, giỏ hàng chuẩn.",
    tags: ["Mỹ phẩm", "Cửa hàng", "Giỏ hàng"]
  },
  {
    id: 12,
    title: "Mẫu Mỹ Phẩm 06",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/mypham06.webp",
    demoUrl: "https://web4s.vn/view-demo/mypham06/",
    note: "Giao diện tối giản, làm nổi bật sản phẩm trang điểm và bộ sưu tập làm đẹp.",
    tags: ["Làm đẹp", "Giỏ hàng", "Mỹ phẩm"]
  },
  {
    id: 13,
    title: "Mẫu Mỹ Phẩm 07",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/mypham07.webp",
    demoUrl: "https://web4s.vn/view-demo/mypham07",
    note: "Thích hợp cho các spa bán lẻ dược mỹ phẩm chính hãng, đầy đủ chức năng mua hàng.",
    tags: ["Dược mỹ phẩm", "Đánh giá", "Đặt hàng"]
  },
  {
    id: 14,
    title: "Mẫu Gia Dụng 08 (Bếp Điện)",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/giadung08.webp",
    demoUrl: "https://web4s.vn/view-demo/giadung08",
    note: "Website kinh doanh bếp điện, thiết bị nhà bếp cao cấp và tiện ích gia đình.",
    tags: ["Bếp điện", "Thiết bị bếp", "Đặt hàng"]
  },
  {
    id: 15,
    title: "Mẫu Gia Dụng 07 (Điện Tử)",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/giadung07.webp",
    demoUrl: "https://web4s.vn/view-demo/giadung07",
    note: "Thiết kế cho cửa hàng thiết bị điện tử gia dụng, điện lạnh, đồ công nghệ.",
    tags: ["Điện tử", "Đồ gia dụng", "Bộ lọc"]
  },
  {
    id: 16,
    title: "Mẫu Gia Dụng 06 (Bàn Ghế)",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/giadung06.webp",
    demoUrl: "https://web4s.vn/view-demo/giadung06",
    note: "Phù hợp cho showroom bàn ghế, nội thất, thiết kế decor căn hộ hiện đại.",
    tags: ["Nội thất", "Bàn ghế", "Showroom"]
  },
  {
    id: 17,
    title: "Mẫu Thời Trang 08 (Trang Sức)",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/thoitrang08.webp",
    demoUrl: "https://web4s.vn/view-demo/thoitrang08",
    note: "Website kinh doanh trang sức, phụ kiện kim hoàn cao cấp lấp lánh và trang nhã.",
    tags: ["Trang sức", "Phụ kiện", "Luxury"]
  },
  {
    id: 18,
    title: "Mẫu Thời Trang 03 (Chăn Ga)",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/thoitrang03.webp",
    demoUrl: "https://web4s.vn/view-demo/thoitrang03",
    note: "Giao diện ấm áp cho cửa hàng chăn ga gối nệm, khăn tắm và đồ dùng phòng ngủ.",
    tags: ["Chăn ga", "Nệm", "Khăn tắm"]
  },
  {
    id: 19,
    title: "Mẫu Thời Trang 07 (Quần Áo)",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/thoitrang07.webp",
    demoUrl: "https://web4s.vn/view-demo/thoitrang07",
    note: "Website bán quần áo, đầm váy thiết kế, hỗ trợ lọc theo size và màu sắc cơ bản.",
    tags: ["Quần áo", "Thời trang", "Mua sắm"]
  },
  {
    id: 20,
    title: "Mẫu Thực Phẩm 03",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/thucpham03.webp",
    demoUrl: "https://web4s.vn/view-demo/thucpham03",
    note: "Cửa hàng bán rau củ sạch, trái cây nhập khẩu, quy trình mua sắm thực phẩm tươi sống.",
    tags: ["Thực phẩm sạch", "Trái cây", "Giỏ hàng"]
  },
  {
    id: 21,
    title: "Mẫu Thực Phẩm 08",
    category: "ecommerce-basic",
    image: "https://cdn3290.cdn4s6.io.vn/media/thucpham08.webp",
    demoUrl: "https://web4s.vn/view-demo/thucpham08",
    note: "Giao diện siêu thị mini trực tuyến, phân chia nhiều kệ hàng hóa rõ ràng, dễ lựa chọn.",
    tags: ["Siêu thị mini", "Bách hóa", "Đặt hàng"]
  },

  // E-COMMERCE ADVANCED
  {
    id: 22,
    title: "Mẫu Gia Dụng 08 (Bếp Điện - Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/giadung08.webp",
    demoUrl: "https://web4s.vn/view-demo/giadung08",
    note: "Tích hợp cổng thanh toán trực tuyến, quản lý mã giảm giá, kiểm soát tồn kho bếp điện.",
    tags: ["Thanh toán online", "Mã giảm giá", "Quản lý kho"]
  },
  {
    id: 23,
    title: "Mẫu Gia Dụng 07 (Thiết Bị Điện Tử - Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/giadung07.webp",
    demoUrl: "https://web4s.vn/view-demo/giadung07",
    note: "Hỗ trợ thanh toán online và thống kê doanh thu biểu đồ cho các thiết bị điện tử.",
    tags: ["Doanh thu", "Thanh toán QR", "Đồ điện tử"]
  },
  {
    id: 24,
    title: "Mẫu Gia Dụng 06 (Bàn Ghế - Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/giadung06.webp",
    demoUrl: "https://web4s.vn/view-demo/giadung06",
    note: "Showroom nội thất nâng cao, quản lý các tùy chọn kích thước, màu sắc gỗ chi tiết.",
    tags: ["Thuộc tính nâng cao", "Nội thất", "Đặt cọc"]
  },
  {
    id: 25,
    title: "Mẫu Mỹ Phẩm 02 (Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/mypham02.webp",
    demoUrl: "https://web4s.vn/view-demo/mypham02",
    note: "Cửa hàng mỹ phẩm tích hợp ví điện tử, theo dõi vận đơn và gửi coupon ưu đãi tự động.",
    tags: ["Ví điện tử", "Theo dõi đơn", "Coupon"]
  },
  {
    id: 26,
    title: "Mẫu Mỹ Phẩm 06 (Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/mypham06.webp",
    demoUrl: "https://web4s.vn/view-demo/mypham06",
    note: "Phiên bản nâng cao hỗ trợ flash sale giới hạn thời gian và thống kê bán hàng theo ngày.",
    tags: ["Flash sale", "Thống kê", "Mỹ phẩm"]
  },
  {
    id: 27,
    title: "Mẫu Mỹ Phẩm 07 (Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/mypham07.webp",
    demoUrl: "https://web4s.vn/view-demo/mypham07",
    note: "Thanh toán ATM/VNPAY và thẻ tín dụng, quản lý kho hàng nhập ngoại nghiêm ngặt.",
    tags: ["VNPAY", "Kiểm soát kho", "Thanh toán thẻ"]
  },
  {
    id: 28,
    title: "Mẫu Thực Phẩm 03 (Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/thucpham03.webp",
    demoUrl: "https://web4s.vn/view-demo/thucpham03/",
    note: "Website bán thực phẩm tươi sống nâng cao, tự động cộng phí giao hàng theo khoảng cách.",
    tags: ["Tính phí ship", "Mã giảm giá", "Thanh toán QR"]
  },
  {
    id: 29,
    title: "Mẫu Thực Phẩm 08 (Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/thucpham08.webp",
    demoUrl: "https://web4s.vn/view-demo/thucpham08",
    note: "Hệ thống bách hóa online lớn, tích hợp báo cáo tài chính tháng/quý/năm cho quản trị.",
    tags: ["Báo cáo tài chính", "Quản lý tồn kho", "Bách hóa"]
  },
  {
    id: 30,
    title: "Mẫu Thời Trang 08 (Trang Sức - Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/thoitrang08.webp",
    demoUrl: "https://web4s.vn/view-demo/thoitrang08",
    note: "Trang phụ kiện cao cấp tích hợp mã QR thanh toán nhanh và chức năng tích điểm thành viên.",
    tags: ["Tích điểm", "Thanh toán QR", "Trang sức"]
  },
  {
    id: 31,
    title: "Mẫu Thời Trang 03 (Chăn Ga - Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/thoitrang03.webp",
    demoUrl: "https://web4s.vn/view-demo/thoitrang03",
    note: "Quản lý tồn kho chăn ga gối nệm quy mô lớn theo từng chi nhánh, cửa hàng phụ.",
    tags: ["Đa chi nhánh", "Tồn kho đa kho", "Đơn hàng"]
  },
  {
    id: 32,
    title: "Mẫu Thời Trang 07 (Quần Áo - Nâng Cao)",
    category: "ecommerce-advanced",
    image: "https://cdn3290.cdn4s6.io.vn/media/thoitrang07.webp",
    demoUrl: "https://web4s.vn/view-demo/thoitrang07",
    note: "Thời trang thiết kế hỗ trợ trả góp online qua cổng ngân hàng liên kết, giảm giá tự động.",
    tags: ["Trả góp online", "Mã giảm giá", "Quần áo"]
  },

  // BOOKING / APPOINTMENT
  {
    id: 33,
    title: "Website Xe Ghép (Duẩn)",
    category: "booking",
    image: "https://image.thum.io/get/width/800/crop/600/https://xeghep.dongphu.net/",
    demoUrl: "https://xeghep.dongphu.net/",
    note: "Chức năng đặt lịch đi xe ghép, chọn điểm đưa đón, thời gian và số lượng chỗ ngồi.",
    tags: ["Đặt xe ghép", "Chọn chỗ", "Booking xe"]
  },
  {
    id: 34,
    title: "Xe Quảng Ngãi - Đà Nẵng",
    category: "booking",
    image: "https://www.xequangngaidanang.id.vn/anhxequangngaidanang/xechaycodinh.jpg",
    demoUrl: "https://xequangngaidanang.id.vn/",
    note: "Hệ thống đặt lịch xe chạy tuyến cố định Quảng Ngãi - Đà Nẵng, cập nhật chuyến đi.",
    tags: ["Tuyến cố định", "Đặt lịch nhanh", "Vận tải"]
  },
  {
    id: 35,
    title: "Mẫu Y Tế 03",
    category: "booking",
    image: "https://cdn3290.cdn4s6.io.vn/media/yte03.webp",
    demoUrl: "https://web4s.vn/view-demo/yte03",
    note: "Giao diện phòng khám, trung tâm y tế sang trọng (Chưa tích hợp sẵn chức năng đặt lịch).",
    tags: ["Y tế", "Phòng khám", "Chưa đặt lịch"]
  },

  // REAL ESTATE
  {
    id: 36,
    title: "Mẫu Bất Động Sản 04",
    category: "real-estate",
    image: "https://cdn3290.cdn4s6.io.vn/media/batdongsan04.webp",
    demoUrl: "https://web4s.vn/view-demo/batdongsan04",
    note: "Trưng bày thông tin dự án bất động sản sang trọng kết hợp form đăng ký nhận bảng giá.",
    tags: ["Dự án", "Nhận báo giá", "Liên hệ"]
  },
  {
    id: 37,
    title: "Bất Động Sản 38",
    category: "real-estate",
    image: "https://image.thum.io/get/width/800/crop/600/https://batdongsan38.muathemewp.com/",
    demoUrl: "https://batdongsan38.muathemewp.com/",
    note: "Website đầy đủ tính năng mua bán, ký gửi đất nền, nhà phố, lọc dự án nâng cao.",
    tags: ["Mua bán ký gửi", "Lọc nâng cao", "Bản đồ"]
  },
  {
    id: 38,
    title: "Bất Động Sản 51 (Flatsome)",
    category: "real-estate",
    image: "https://image.thum.io/get/width/800/crop/600/https://batdongsan51.flatsome.vn/",
    demoUrl: "https://batdongsan51.flatsome.vn/",
    note: "Đầy đủ tính năng tin đăng bất động sản trên nền tảng Flatsome tối ưu, trực quan.",
    tags: ["Đầy đủ", "Flatsome WP", "Tin đăng"]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("landing-page");

  const activeCategoryData = CATEGORIES.find((cat) => cat.id === activeCategory) || CATEGORIES[0];

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "landing-page":
        return <Layers className="w-5 h-5" />;
      case "corporate":
        return <Briefcase className="w-5 h-5" />;
      case "ecommerce-basic":
        return <ShoppingBag className="w-5 h-5" />;
      case "ecommerce-advanced":
        return <TrendingUp className="w-5 h-5" />;
      case "booking":
        return <Calendar className="w-5 h-5" />;
      case "real-estate":
        return <Home className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-20 w-full flex-1 flex flex-col">
      {/* Typographic Intro */}
      <div className="mb-16">
        <span className="text-accent font-display text-sm tracking-[0.2em] font-black block mb-4">[ KHO GIAO DIỆN MẪU ]</span>
        <h1 className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none mb-6">
          Kho Giao Diện Mẫu Đa Dạng
        </h1>
        <p className="max-w-2xl text-slate-500 leading-relaxed text-base md:text-lg">
          Trải nghiệm và khám phá hàng loạt các mẫu giao diện website độc bản, tải trang cực nhanh và tối ưu hóa chuyển đổi, được CodeBy Đà Nẵng thiết kế và lập trình hoàn chỉnh.
        </p>
      </div>

      {/* Modern Categories Bar */}
      <div className="mb-12 border-b border-border pb-6">
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-3 pb-4 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 text-xs tracking-wider font-sans font-bold transition-all duration-300 rounded-full border whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-accent border-accent text-white shadow-md shadow-accent/20"
                    : "border-border bg-white text-slate-600 hover:border-accent hover:text-accent"
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stacked Layout: Category Profile Panel */}
      <div className="bg-slate-50 border border-border rounded-3xl p-8 md:p-10 mb-16 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12 transition-all duration-500 ease-in-out">
        {/* Left column: Overview */}
        <div className="flex-1 lg:max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-3 bg-accent/10 text-accent rounded-2xl">
              {getCategoryIcon(activeCategoryData.id)}
            </span>
            <h2 className="font-sans font-extrabold text-xl md:text-2xl text-foreground">
              {activeCategoryData.label}
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
            {activeCategoryData.description}
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-wider uppercase bg-accent-subtle px-3 py-1.5 rounded-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chuẩn SEO & Tối ưu chuyển đổi</span>
          </div>
        </div>

        {/* Right column: Feature Checklist */}
        <div className="flex-1 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center">
          <h3 className="font-sans font-bold text-sm tracking-widest text-slate-400 uppercase mb-4">
            Các tính năng cốt lõi đi kèm
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategoryData.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="p-0.5 bg-emerald-500 text-white rounded-full mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="text-slate-600 text-sm leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Asymmetric Staggered Stacking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => {
          // Add organic height variance to cards to maintain the asymmetric feel without breaking vertical stack
          const isStaggered = idx % 3 === 1;

          return (
            <div
              key={project.id}
              className={`group flex flex-col border border-border bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-out ${
                isStaggered ? "lg:-translate-y-4" : ""
              }`}
            >
              {/* Image Container with organic zoom and grayscale hover */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 shrink-0">
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category & Badge overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                  {project.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] font-extrabold tracking-wider bg-white/90 backdrop-blur-sm text-slate-800 rounded-md uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Accent Bottom Overlay bar on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </div>

              {/* Title & Stats Meta Card */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white group-hover:bg-slate-50/50 transition-colors duration-300">
                <div className="flex flex-col gap-2.5 mb-6">
                  <h3 className="font-sans font-extrabold text-lg uppercase tracking-tight text-foreground line-clamp-1 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {project.note}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(2).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 group-hover:text-white group-hover:bg-accent border border-slate-200 group-hover:border-accent rounded-xl transition-all duration-300 shrink-0"
                    onClick={(e) => e.stopPropagation()} // Prevent card click conflict
                  >
                    <span>XEM DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
