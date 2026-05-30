# Project Plan - SEO Visual Showcase & Interactive Mockups

This plan outlines the design, generation, and implementation of high-fidelity B2B visual mockups on the CodeBy Đà Nẵng homepage. It solves the dry, disconnected layout by creating an **interactive split-screen showcase** for Core Services, accompanied by structured alt tags for Google SEO dominance.

---

## User Review Required

> [!IMPORTANT]
> **We will generate 4 unique, premium-quality assets using our text-to-image engine:**
> 1. `service_website_mockup.png`: A high-end dark-themed SaaS web platform showing a clean UI dashboard.
> 2. `service_mobile_mockup.png`: A premium mobile application mockup showcasing responsive iOS interfaces.
> 3. `service_marketing_mockup.png`: A gorgeous B2B analytics dashboard tracking rising SEO keyword ranks.
> 4. `service_branding_mockup.png`: A premium minimalist branding guideline mockup.
> 
> *Please confirm if you want any specific color schemes or alternative contents for these graphics.*

---

## Open Questions

> [!WARNING]
> 1. **Interaction Type on Mobile:** On desktop, the showcase dynamically swaps the image on the right as the user hovers over service rows on the left. On mobile screens (where columns stack vertically), should we embed the respective image inside each service row card directly for a natural, seamless scrolling experience? (Recommended: Yes).
> 2. **SEO Keyword Preferences:** We have drafted standard SEO alt text targeting "thiết kế website đà nẵng", "lập trình app chuyên nghiệp", and "digital marketing uy tín". Do you have any additional target keywords to embed?

---

## Proposed Changes

### [Frontend Component]

#### [MODIFY] [page.tsx](file:///Users/titranthanh/Desktop/antigraviti/app/page.tsx)
*   **State Integration:** Introduce an active state hook `const [activeService, setActiveService] = useState(0)` to track the active service row index (0-indexed).
*   **Interactive Split Grid:**
    *   Refactor the **Services Section** (`#dich-vu`) from a full-width list to a **two-column split grid** (`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start`) on large screens.
    *   **Left Column (lg:col-span-7):** The lists of 4 core services. When a row is hovered, it sets the `activeService` state.
    *   **Right Column (lg:col-span-5):** A sticky, responsive mockup container (`sticky top-28 hidden lg:block overflow-hidden rounded-2xl border border-border shadow-2xl bg-slate-900`) showing the corresponding active generated mockup with a smooth transition (fade-in, slide-up, scale-up).
*   **Mobile Layout Integrity:** On mobile viewports (`lg:hidden`), render the corresponding image directly under the description of each respective row, maintaining clean reading flows without stacking complex states.

#### [NEW] Service Images
We will place the generated files under `/public/`:
*   `public/service_website_mockup.png`
*   `public/service_mobile_mockup.png`
*   `public/service_marketing_mockup.png`
*   `public/service_branding_mockup.png`

---

## SEO Image Optimization Parameters
To maximize crawl efficiency and image indexing on Google Search:
*   **Formats:** PNG/WebP formats with optimized responsive layouts.
*   **Structured ALTs:**
    *   Website: `alt="Thiết kế Website chuyên nghiệp chuẩn SEO Đà Nẵng - CodeBy"`
    *   App Mobile: `alt="Lập trình ứng dụng di động Android iOS uy tín - CodeBy Đà Nẵng"`
    *   Marketing: `alt="Dịch vụ Digital Marketing chạy quảng cáo Ads SEO Đà Nẵng - CodeBy"`
    *   Branding: `alt="Thiết kế nhận diện thương hiệu Logo doanh nghiệp - CodeBy Đà Nẵng"`
*   **Lazy Loading:** Set `loading="lazy"` on all off-screen images to ensure a perfect 100/100 score on Google Lighthouse.

---

## Verification Plan

### Automated Tests
*   Run the production compiler: `npm run build` to guarantee compilation.

### Manual Verification
*   Test responsive scaling across mobile (375px), tablet (768px), and desktop (1440px).
*   Hover over service rows on desktop and verify that the right-side mockups transition smoothly without flashing or shifting layouts.
