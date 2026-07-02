# Agent log: Website Redesign Prototype

## 2026-07-02 — Built and shipped v1 (Claude Code)

**Task:** Shea asked to "actually go through all the steps to build this website
redesign", implementing the Website Redesign Proposal, and hand back a link.

**Done:**
- Built the 8-page static prototype (see CONTEXT.md for the page list) with a
  shared design system in `css/site.css` and behaviour in `js/site.js`.
- Verified real facts against the live site (contact details, services, clients).
- QA'd in preview: mega-menu, mobile nav accordion, work filters (9/2/2/9),
  journey rail, fonts, no console errors, no broken internal links.
- Deployed: repo `Wilson-Influential/website-redesign-prototype`, GitHub Pages,
  all pages + assets verified HTTP 200.
- Live: https://wilson-influential.github.io/website-redesign-prototype/
- Recorded in second brain vault note + `Internal/Second Brain/links.json`.

**Decisions:**
- GitHub Pages over Vercel: work Vercel defaults to 401 deploy protection,
  Pages gives Shea a link that opens anywhere (same route as Welcome onboarding).
- Photo placeholders: flat sector-colour blocks with partial rings, per brand
  guidance, since no usable photography assets exist in the folder.
- Team tiles are department groups, not invented people; only Viv Griffiths is
  named (she is in the deck mockup).

**Open items / before team sharing:**
- Copy not humanized (run the humanizer skill first).
- Values copy and team numbers are illustrative.
- Effra woff2 are trial weights on a public URL; licence check before anything
  client-facing.
- Real photography needed for media placeholders and team mosaic.

**Next step suggestion:** Shea reviews the live link, then either iterate on
design or share with Alex/Kelly alongside the proposal microsite.
