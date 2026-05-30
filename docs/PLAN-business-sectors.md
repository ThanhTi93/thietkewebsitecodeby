# Project Plan - Business Sectors Grid & Premium Ambient Background

This plan outlines the design and implementation of two major UX/UI updates on the homepage:
1. **Lĩnh Vực Kinh Doanh Cần Làm Website:** A dedicated, conversion-focused grid enabling target visitors (E-commerce, Real Estate, Hotels/Tourism, Corporate, Education, Restaurants) to easily self-identify their needs.
2. **Premium Ambient Sub-Background:** Refactoring the plain, flat white background into a luxury tech experience utilizing subtle radial dot grids and colorful ambient glowing blur spots.

---

## User Review Required

> [!IMPORTANT]
> **We propose integrating 6 major business sectors into the interactive grid:**
> 1. **E-Commerce & Retail (Bán Lẻ & Thương Mại):** Needs automatic payment gateways, stock synch.
> 2. **Real Estate (Bất Động Sản):** Needs high-res galleries, filter listings.
> 3. **Hotels, Travel & Spa (Du Lịch, Khách Sạn & Làm Đẹp):** Needs booking systems, visual galleries.
> 4. **Education & Training (Giáo Dục & Đào Tạo):** Needs courses registration, schedules.
> 5. **Corporates & Enterprise (Doanh Nghiệp & Công Ty):** Needs elite profile portfolios, high B2B trust.
> 6. **Restaurants & F&B (Nhà Hàng & Ẩm Thực):** Needs dynamic menus, table booking.
> 
> *Please confirm if this list is complete or if you would like to swap any sector.*

---

## Open Questions

> [!WARNING]
> 1. **Grid Placement on Homepage:** We propose inserting this new **"Lĩnh vực Kinh doanh"** section immediately after the B2B Useful Grid ("Why Choose Us") and right before the Core Services list. This creates a natural narrative flow: *Why choose CodeBy -> Who we build websites for (Sectors) -> What we do (Services) -> How we do it (Design Process).* Do you approve of this position?
> 2. **Ambient Glow Tone:** Should the subtle background light highlights utilize Pacific Blue (`bg-accent/5`) exclusively, or mix in some soft teal/slate hues for extra premium depth?

---

## Proposed Changes

### [Frontend Component]

#### [MODIFY] [page.tsx](file:///Users/titranthanh/Desktop/antigraviti/app/page.tsx)
*   **Background Enhancements:**
    *   Add a global radial dot grid overlay (`bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-75`) behind the entire homepage layout.
    *   Embed 5 absolute ambient glowing blur spheres (`absolute rounded-full blur-[160px] opacity-40 -z-20 pointer-events-none`) behind major sections:
        *   Hero: Pacific Blue glow.
        *   Why Choose Us: Slate blue glow.
        *   Sectors Grid: Teal glow.
        *   Design Process: Accent blue glow.
        *   FAQ & Footer: Soft cyan glow.
*   **New Section [Lĩnh Vực Kinh Doanh]:**
    *   Create an interactive, responsive grid section `#linh-vuc` showcasing 6 custom-styled cards.
    *   Include modern Lucide SVG icons matching each industry:
        *   E-commerce: `ShoppingBag`
        *   Real Estate: `Building2`
        *   Tourism: `Palmtree`
        *   Education: `GraduationCap`
        *   Corporate: `Briefcase`
        *   F&B: `Utensils`
    *   Apply micro-interactions: on hover, cards scale slightly (`hover:-translate-y-1.5 hover:shadow-xl`), add a blue active border, and slide in a neat conversion pill tag like `[ Tối ưu chuyển đổi ]` or `[ Tăng doanh số ]`.

---

## SEO & Copywriting Integration
*   Ensure all sector headers use semantic `<h3>` elements with robust target keyword placement (e.g. `Thiết kế Website Bán Hàng`, `Website Bất Động Sản Chuẩn SEO`, etc.) to capture transactional search intents on Google.

---

## Verification Plan

### Automated Tests
*   Run the Next.js production compiler: `npm run build` to guarantee compilation.

### Manual Verification
*   Verify responsive scaling on mobile viewport (cards stack into a single column) and desktop (cards spread into a balanced 3-column grid).
*   Test that the background grid and absolute blur highlights scale perfectly without causing any horizontal layout shifts or scroll bars on mobile viewports.
