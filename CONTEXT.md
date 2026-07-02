# Task: Website Redesign Prototype (thisisinfluential.com)

## What this is

The working prototype of the redesigned thisisinfluential.com, implementing the
approved internal proposal (see `../Website Redesign Proposal/CONTEXT.md`).
Shea asked (2026-07-02) to "actually go through all the steps to build this
website redesign", implement the plan, and give him a link to review.

## What it implements (the audit fixes)

1. **Clear above the fold**: headline, subline and CTAs visible immediately
   (57% of viewing time is above the fold, 85% within two scrolls).
2. **Visible nav + header CTA**: full menu always on show, "Get in touch"
   button in the header, not buried at page bottom.
3. **Nav expands to services**: Services mega-menu listing all six services
   with their sub-services (Meta ads, TikTok ads, PPC, SEO, email, etc.).
4. **Service sections list sub-services** as chips, like Dinosaur/Serotonin.
5. **Blogs are no longer dead ends**: example insight post routes the reader
   Blog → Service page → Case study → Contact (the deck's lead-gen structure),
   with a visible "journey" rail on the post page.

## Pages

- `index.html` — Home (hero, about, clients, work, purpose, testimonial, insights teaser)
- `services.html` — six services, sector-coloured sections, sub-service chips
- `work.html` — case studies with working filter chips
- `case-study-mayfield.html` — Mayfield Depot detail (real deck stats)
- `team.html` — people mosaic, culture, values
- `insights.html` + `insight-tiktok-ads.html` — blog list + example journey post
- `contact.html` — contact page (convert step)
- Shared: `css/site.css`, `js/site.js`, `assets/` (Effra woff2 + logo PNGs)

## Verified facts used

- Contact: info@thisisinfluential.com, 0161 529 1007 (from live site, 2026-07-02)
- Services: Brand strategy, Research & insights, Strategic communications & PR,
  Creative campaigns, Digital marketing, Content creation (live site)
- Clients: Morgan Sindall Construction, NOMA, Everton FC, Landsec/Mayfield,
  Liverpool City Council, The National Lottery, NHS Cheshire and Merseyside,
  Flawless AI, Champs, ECF, Drees & Sommer UK, Downing Square Gardens (live site)
- Mayfield stats (3.5m / 50k / 1.3m, 75 pieces, 15 journalists, 18 broadcasts)
  and the David Collins Sunday Times quote: verbatim from the proposal deck
- Socials: @thisisinfluential (IG), @influentialcoms (X), /company/influential-agency

## Additions beyond the deck (flag if questioned)

- All page copy beyond headlines/stats named above is new writing, NOT humanized yet
- The example insight post (TikTok ads topic) and its journey rail are invented
  to demonstrate the lead-gen structure
- Team page names/roles except Viv Griffiths (Creative Director, from mockup)
  are placeholders; photo tiles are brand-coloured placeholders, no real photos
- Sub-service lists extend the deck's examples with plausible items

## Status

- 2026-07-02: built, QA'd in preview, deployed (see link in links.json / memory)
