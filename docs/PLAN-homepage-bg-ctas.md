# [PLAN] Homepage Modernization: Ambient Backgrounds & High-Value B2B Conversion CTAs

This plan outlines the visual modernization and B2B conversion-focused branding for thietkewebsitecodeby.com. The objective is to elevate the website's professional appeal, replace stark section backgrounds with premium layered visual elements, and implement immediate contact triggers (Calling/Messaging) to drive business inquiries.

---

## 1. Core Objectives & Strategy

### A. Non-Monotonous Ambient Backgrounds
*   **Layered Gradients & Grids:** Inject subtle radial glow lights (`from-blue-500/5 to-transparent`) and fine coordinate dot grid overlays inside specific sections (Hero, Process, Sectors, Portfolio).
*   **Aesthetic Dividers:** Replace standard horizontal border cuts with organic wave curves or subtle slate color splits to keep the page visually continuous and premium.

### B. High-Value B2B Commercial Copy (Selling the Value)
*   **ROI-focused Hero messaging:** Pivot copywriting from generic technical specs to business growth metrics ("Tối ưu hóa phễu bán hàng", "Thiết kế website sinh lời", "Bứt phá tỷ lệ chuyển đổi").
*   **Tangible B2B Metrics Section:** Embed key client success factors showing why investing in a premium website brings immediate financial returns.

### C. Omnichannel Call-to-Action Float (Call & Chat Integrations)
*   **Sticky Conversion Widgets:** Implement a modern, glassmorphic sticky contact widget on the bottom-right of the screen containing:
    1.  **Direct Hotline Action:** Floating green pulsing button (`tel:0905623002` or similar) with immediate tooltips.
    2.  **Zalo Chat Integration:** Quick click to chat (`https://zalo.me/...`).
    3.  **Facebook Messenger Integration:** Link to direct inbox.
*   **Hover tooltips:** Dynamic bubble text reading "Nhận Tư Vấn Miễn Phí Trong 5 Phút!" to capture user attention.

---

## 2. Proposed System Architecture & Changes

### Component 1: Global Sticky Contact Widget
*   **[NEW]** Define a floating component at the bottom of the main layout inside `app/page.tsx`.
*   **Interactions:** Micro-pulses on the call button, tooltips fading in upon scroll, and slick slide-up transitions when entering the viewport.

### Component 2: Ambient Background Section Overlays
*   **[MODIFY] [page.tsx](file:///Users/titranthanh/Desktop/antigraviti/app/page.tsx)**
    *   Add absolute background glow containers inside the `#linh-vuc` and `#quy-trinh` sections.
    *   Configure fine SVG coordinate patterns underneath the text layers so the typography stands out beautifully.

### Component 3: B2B Business Value Propositions Copy
*   **[MODIFY] [page.tsx](file:///Users/titranthanh/Desktop/antigraviti/app/page.tsx)**
    *   Rewrite subheadings to speak directly to business owners' goals (Sales growth, brand authority, operational savings).

---

## 3. Socratic Gate Clarifying Questions

> [!IMPORTANT]
> To ensure the implementation aligns perfectly with your operations, please review these two questions:
> 1. **Hotline & Social IDs:** What exact phone number, Zalo link, and Messenger URL should we wire into the interactive floating buttons? (We will use mock/placeholders first if you want to update them later).
> 2. **Floating Position:** Should the sticky calling/messaging panel float on the right edge of the screen, or as a modern bottom-bar on mobile? (We recommend right floating bubbles for desktop and a sticky bottom bar on mobile for maximum conversion).

---

## 4. Verification Plan

### Manual Layout QA
*   Scroll tests on desktop and mobile viewports.
*   Click triggers for the Hotline (`tel:` protocol check) and chat channels to verify they open respective native apps correctly.

### Build Compilation Check
*   Run `npm run build` to confirm 0 errors.
