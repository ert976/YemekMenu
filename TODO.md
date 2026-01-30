# TODO - Food Visuals & Reliability

## 🚩 Current Problems (Audit 2026-01-30-22:00)

1. **Residual Duplication**: 184 items are now unique, but 145+ still share images across 12 generic groups.
2. **Kebab Crisis**: The 'Doner Kebab' Wikimedia URL is still used by 21 different kebab variants.
3. **Sweet Duplication**: Most cakes/pastries still fallback to a single generic cupcake or chocolate cake image.

## 📅 Pending Tasks

- [ ] **Phase 3 Discovery**: Target the 12 remaining duplicate groups (Kebabs, Sweets, Salads, Pasta) and find 145 unique URLs.
- [ ] **Registry Sync**: Continue using `image_registry.json` as the bridge between AI and Code.
- [ ] **Final Validator**: Run `scripts/audit_uniqueness.js` until "Total Duplicated Instances" is 0.

## ✅ Accomplished Today (30 Ocak 2026)

- **Firecrawl Phase 2**: 41 new unique images from yemek.com added to registry
- **Updated Foods**: 18 foods synchronized from registry to foods.ts (Wikimedia → Yemek.com)
- **Kebab Group**: 7 new unique kebab images discovered (Adana, Kavurma, Tepsi, etc.)
- **Izgara Group**: 9 new unique grill images discovered (Köfte, Tavuk, etc.)
- **Registry Total**: 68 verified images (100% success rate)
- **Duplicate Groups**: Reduced from 15 to 12 groups
