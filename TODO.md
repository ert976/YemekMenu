# TODO - Food Visuals & Reliability

## 🚩 Current Problems (Audit 2026-01-26-23:45)

1. **Residual Duplication**: 145 items are now unique, but 180+ still share images across 15 generic groups.
2. **Kebab Crisis**: The 'Doner Kebab' Wikimedia URL is still used by 21 different kebab variants.
3. **Sweet Duplication**: Most cakes/pastries still fallback to a single generic cupcake or chocolate cake image.

## 📅 Pending Tasks

- [ ] **Phase 2 Discovery**: Target the 15 duplicate groups (Kebabs, Sweets, Salads, Pasta) and find 180 unique URLs.
- [ ] **Registry Sync**: Continue using `image_registry.json` as the bridge between AI and Code.
- [ ] **Final Validator**: Run `scripts/audit_uniqueness.js` until "Total Duplicated Instances" is 0.

## ✅ Accomplished Today

- Re-injected **131 unique, HD verified URLs** into the database.
- Created **`scripts/audit_uniqueness.js`** to provide hard numbers on data quality.
- Identified the exact items still in duplication (logged to `duplicate_report.json`).
- Standardized 329 dish names with correct Turkish characters.
