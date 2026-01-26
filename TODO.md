# TODO - Food Visuals & Reliability

## 🚩 Current Problems

1. **Massive Image Duplication**: Over 200 dishes share the same placeholder or category image.
2. **Data Loss Risk**: Incremental scripts have accidentally reverted previous fixes.
3. **Detection**: Users need a way to flag wrong images without manual tracking.

## 📅 Pending Tasks

- [ ] **Massive Unique Image Discovery**: Map all 329 items to 329 **unique** high-res URLs.
- [ ] **Persistent Registry**: Strictly use `database/image_registry.json` as the only source of truth.
- [ ] **Automated Deduplication**: Run script to ensure no 2 items in `foods.ts` share a URL.

## ✅ Accomplished Today

- Created **Admin Gallery** for visual auditing.
- Implemented **🚩 Image Reporting API** and UI button.
- Restored 329-item database and repaired Turkish characters globally.
- Discovered first 40/329 **unique** high-quality URLs via Firecrawl Agent.
