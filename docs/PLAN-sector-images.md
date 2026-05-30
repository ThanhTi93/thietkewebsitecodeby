# Project Plan - Custom Sector Images & Premium Matte Background Gradient

This plan outlines the design and implementation of:
1. **6 Custom B2B Sector Images:** Generating high-end visual representations for E-commerce, Real Estate, Tourism, Education, Corporate, and F&B/Restaurants, and embedding them inside the homepage sector cards.
2. **Elimination of Plain White Backgrounds:** Refactoring the homepage container from stark plain white (`bg-background`) to a luxury cool grey matte gradient (`bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50`) that blends perfectly with the ambient glows.

---

## User Review Required

> [!IMPORTANT]
> **We will generate 6 custom B2B sector graphics with these exact professional themes:**
> 1. `sector_ecommerce.png`: Beautiful minimal 3D e-commerce shopping bag with online credit cards and digital checkout floating objects.
> 2. `sector_realestate.png`: Elegant modern luxury architectural villa mockup sketch with blueprint outlines.
> 3. `sector_tourism.png`: Premium wellness spa stone, palm leaf, and luxury hotel room balcony overlook mockup.
> 4. `sector_education.png`: Sleek digital learning graduation cap, school books, and neon pencil creative graphic.
> 5. `sector_corporate.png`: Ultra-premium corporate office high-rise tower silhouette and professional business credentials.
> 6. `sector_restaurant.png`: Gorgeous minimalist dining table plate, gold utensils, and modern restaurant menu chalkboard.

---

## Open Questions

> [!WARNING]
> 1. **Image Layout inside Cards:** We propose placing these images as **card header media banners** (aspect-ratio `aspect-[16/9]` or `aspect-[16/10]` at the very top of each card with rounded corners, followed by the text content). This mimics modern SaaS marketing websites perfectly. Do you approve?
> 2. **Base Page Background Hue:** We will refactor the base body wrapper class to a premium matte cool-grey gradient `bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-50` and add dot grid textures. Should we apply this velvety background style only to the homepage or propagate it globally to `/portfolio`, `/estimator`, and `/contact` as well to maintain a unified B2B agency theme?

---

## Proposed Changes

### [Frontend Component]

#### [MODIFY] [page.tsx](file:///Users/titranthanh/Desktop/antigraviti/app/page.tsx)
*   **Base Layout Refactoring:**
    *   Change outer wrapper from `bg-background` to `bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50/90 text-foreground`.
*   **Sector Cards Enrichment:**
    *   Embed `<img src="/sector_{name}.png" ... />` inside each corresponding card in the `#linh-vuc` grid, using responsive classes, lazy loading, and custom alt keywords.

---

## Verification Plan

### Automated Tests
*   Verify successful production compilation with `npm run build`.

### Manual Verification
*   Inspect cards layout at mobile widths (stacked vertically with header images rendering perfectly) and desktop widths (3 columns).
