import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "CodeBy Đà Nẵng | Thiết Kế Website Trọn Gói & Chuẩn SEO",
  description: "Dịch vụ thiết kế website chuyên nghiệp, uy tín, tối ưu tỷ lệ chuyển đổi và chuẩn SEO tại Đà Nẵng bởi CodeBy. Tải trang siêu tốc, bảo hành trọn đời.",
  metadataBase: new URL("https://thietkewebsitecodeby.com"),
  openGraph: {
    title: "CodeBy Đà Nẵng | Thiết Kế Website Trọn Gói & Chuẩn SEO",
    description: "Kiến tạo website đẳng cấp bởi CodeBy Đà Nẵng, độc bản và hiệu năng vượt trội.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}
