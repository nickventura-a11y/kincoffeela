# Kin Coffee — kincoffeela.com

Marketing site for Kin Coffee, a luxury coffee cart rental for weddings, corporate events, open
houses, and private parties in Los Angeles & surrounding areas. Static HTML/CSS/JS — no framework,
no build step, hostable anywhere.

## Layout

```
index.html, about.html,
faq.html, style.css   ← the live site at kincoffeela.com ("Editorial Ivory", the chosen design)
CNAME                 ← custom domain for GitHub Pages (kincoffeela.com)
v1-editorial/         ← redirect stubs so old /v1-editorial/ links land on the root pages
mobile/               ← forced-phone preview of the site (same HTML, desktop breakpoints stripped), noindex
v2-collage/           ← "Coastal Collage" (unused direction, noindex)
v3-atelier/           ← "Quiet Atelier" (unused direction, noindex)
assets/
  css/tokens.css      ← shared design tokens + motion/grain primitives
  js/inquiry.js       ← shared form engine, reveal-on-scroll, nav behavior
  img/                ← web-optimized brand imagery
  form-snippet.html   ← canonical inquiry-form markup (source of truth)
brand/                ← brand board + logo reference
DESIGN_BRIEF.md       ← full research-backed design & conversion spec
```

## Preview locally

```bash
cd kincoffeela
python3 -m http.server 8080
# open http://localhost:8080
```

## Activating the contact form (5 minutes, at hosting time)

The inquiry form posts to Web3Forms (free tier is plenty for a new business). Until activated it
falls back to opening a pre-filled email draft, so no inquiry is ever lost — but activate before
launch:

1. Make sure `kristen@kincoffeela.com` and `adhir@kincoffeela.com` exist (email hosting/aliases).
2. Get a free access key at https://web3forms.com using `kristen@kincoffeela.com` (submissions are
   delivered to the key's email; Adhir is cc'd via the `ccemail` field already configured).
3. Paste the key into `KIN_FORM.accessKey` at the top of `assets/js/inquiry.js`.
4. Test-submit on the live site; both inboxes should receive the inquiry.

Alternative relays (if Web3Forms is ever unavailable): Formspree, Basin, or a serverless function +
Resend — only `inquiry.js` needs to change; the markup is relay-agnostic.

## Launch checklist (when hosting/DNS happens)

- [x] Pick winning variant → moved v1-editorial to the site root (Oct 2026).
- [ ] Activate the form (above) + do a live test submission.
- [x] Hosted on GitHub Pages: GoDaddy DNS has the four GitHub A records on `@` and
      `www` CNAME → `nickventura-a11y.github.io`; HTTPS enforced in the repo's Pages settings.
- [ ] Self-host the two Google Fonts (download woff2, swap the `<link>` for `@font-face`) for
      speed + resilience.
- [ ] Add analytics (GA4 or Plausible) + wire the form success state as the conversion event.
- [ ] Remove `noindex` meta from the chosen page if present anywhere; submit sitemap in Search
      Console; create a Google Business Profile (huge for "coffee cart rental los angeles").
- [ ] Replace AI brand renders with real photos of the actual cart as events get booked;
      add real client reviews into the commented `SLOT` sections (never fabricate).

## Content notes for Kristen & Adhir

- Founder-story copy is intentionally generic in spots — search the variant HTML for `EDIT-ME`
  comments and personalize.
- Packages were removed (Oct 2026, Kristen's edits) — every event is quoted from the inquiry form,
  which now requires date, event time, and party size. Honor the 24-hour reply promise
  operationally — responsiveness outranks pricing as the #1 booking factor in the wedding industry.
- The Menu section mirrors the printed table card; change it only when the card changes.
