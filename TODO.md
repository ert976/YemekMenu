# TODO - Food Visuals & Reliability

## 🚩 Current Problems

1. **CORS/Hotlinking**: Turkish food sites like `yemek.com` block direct hotlinking in browsers.
2. **Generic Fallbacks**: Some dishes (like Karnabahar) still use a "nearest category" placeholder if a specific one isn't found.
3. **Proxy Dependency**: The current solution relies on `images.weserv.nl`. While stable, native direct URLs are preferred.

## 📅 Pending Tasks

- [ ] **Specific Mapping Expansion**: Match the remaining 200+ dishes to specific high-quality URLs.
- [ ] **Unsplash Primary Source**: Migrate more dishes to Unsplash/Pexels for native browser performance.
- [ ] **Image Cache Layer**: Implement a more robust client-side image caching strategy in Expo to handle large catalogs.
- [ ] **AI Image Generation**: Consider using a generation tool for very obscure dishes that lack authentic online photos.

## ✅ Accomplished Today

- Implemented image proxy to bypass CORS.
- Fixed `LazyImage` fallback logic bug.
- Mapped 40+ core Turkish dishes to specific, authentic images.
- Resolved category clash logic bug in `mealPlanner.ts`.
