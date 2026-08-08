# Kin Coffee — Website Design Brief

Synthesized from a 9-agent research pass (Aug 2026): 29 US coffee-cart rental sites discovered,
10 deep-dived (6 national leaders + 4 LA competitors), plus dedicated research on inquiry-form CRO,
event-vendor conversion, industry packages/logistics, and anti-template design direction.

## 1. Positioning

Kin Coffee is a luxury coffee cart rental for weddings, corporate events, open houses, and private
parties in Los Angeles & surrounding areas. Coastal luxury, understated elegance, family warmth.

The LA competitive gap is emotional: LA Coffee Cart Co. (closest competitor) reads corporate despite
luxury claims; Glass House wins SEO but has a generic aesthetic; Pulo is cold/corporate; The LA Coffee
Cart is gimmicky. Nobody in the LA market pairs a truly distinctive visual identity with genuine
warmth. Kin's tagline — **"When we're here, you're family."** — plus the ivory/taupe palette and
Cormorant italic voice is the differentiator. Weddings lead; corporate second.

## 2. Conversion strategy (why the site is shaped this way)

- **Visitors comparison-shop 3–5 tabs at once.** The homepage must survive a skim: hero photo that
  instantly reads "coffee cart at an elegant event," one-line concrete positioning, and a CTA within
  the first 1.5 mobile screens.
- **Packages without prices carries a known cost** (price transparency lifts response ~25%). Offsets,
  all mandatory: detailed inclusions per tier, a "why no price" sentence ("Every event is tailored to
  your guest count, menu, and hours — tell us about yours and we'll send a custom proposal within 24
  hours"), a prominent 24-hour response promise (responsiveness outranks pricing as the #1 booking
  factor), and a friction-free form.
- **Form spec (identical engine on all variants):** Required: Name, Email, Event date, Event type
  (select: Wedding / Corporate event / Private party / Open house / Other). Encouraged-optional:
  Guest count (select ranges), Event location (city/venue), Phone ("optional — for faster
  confirmation"), Details textarea. Required phone fields cut inquiries ~30% — never require it.
  Validate on blur, never per keystroke; plain-language inline errors; honeypot instead of CAPTCHA;
  16px+ inputs, 48px tap targets, correct input types + autocomplete attributes.
- **CTA copy:** primary button **"Check My Date"** (availability-framed, first-person — the two
  highest-performing patterns in form CRO). Nav button: "Check Availability". Never "Submit" /
  "Contact Us". Repeat the CTA at nav, after packages, after the about/story section, and footer —
  all anchoring to the one form.
- **Trust microcopy at the form:** "We personally reply to every inquiry within 24 hours." + "Your
  details are only used to plan your event — never shared."
- **Integrity rule: Kin is new. NO fabricated testimonials, review counts, star badges, client
  logos, or venue name-drops anywhere.** Trust is built with: owner-operated founder story near the
  form, licensed & insured line woven into body copy, logistics transparency (FAQ), and the response
  promise. The build leaves clearly-commented slots to add real reviews/venues later.
- Success state: in-page thank-you ("You're family now — we'll be in touch within 24 hours.") ready
  to be wired to a tracked /thank-you URL at hosting time.

## 3. Site structure (one page + anchors, all variants)

Nav (transparent over hero → solidifies with 1px hairline on scroll; no hamburger on desktop):
`The Cart · Packages · Menu · FAQ` + filled **Check Availability** button.

Sections in order:
1. **Hero** — variant-specific (see §6). Concrete positioning line + tagline + single CTA.
2. **Intro / What we do** — weddings, corporate, open houses & private parties; licensed & insured
   woven in; "we come to you" framing.
3. **The experience** — imagery + what's always included (cart, barista, espresso machine, cups,
   syrups, milks, setup & breakdown). Editorial treatment, NOT an icon card grid.
4. **Packages** — 3 tiers, no prices (see §4), the "why no price" line, CTA.
5. **Menu** — drinks + signature touches (see §5).
6. **How it works** — 3 steps: Tell us about your day → A custom proposal within 24 hours →
   Reserve your date (deposit holds it; we handle the rest, down to the last cup).
7. **Meet Kin / founders** — Kristen & Adhir, family story (copy marked EDIT-ME for personalization),
   tagline moment.
8. **FAQ** — accordion, the 9 questions in §5.
9. **Inquire** — the designed form section (the page's destination).
10. **Footer** — quiet 3-column: contact / explore / service area; tagline restated in italic.

## 4. Packages (no prices) & add-ons

Format per tier (industry-standard scannable bullets): service window · baristas · guest fit ·
menu scope · inclusions.

- **The Gathering** — an intimate standard. Up to 2 hours · one barista · up to 75 guests · full
  espresso menu, hot & iced · cups, syrups, milks, setup & breakdown included.
- **The Celebration** — the signature package. Up to 4 hours · two baristas · up to 150 guests ·
  full menu plus cold brew & one seasonal signature drink · choice of cup style.
- **The Heirloom** — the full evening. Up to 6 hours · two baristas · 150+ guests or multi-space
  events · full menu plus matcha & chai bar · custom-branded cups & menu signage · dedicated
  on-site lead.

Add-ons (one line each, no prices): Extra hour · Second barista · Custom-branded cups & sleeves ·
Iced & cold brew bar · Matcha & chai bar · Seasonal signature drink · Shade & weather cover ·
Early load-in.

## 5. Menu, FAQ, voice

**Menu:** Espresso · Americano · Cappuccino ("espresso, steamed milk, a cloud of foam") · Latte ·
Vanilla Latte · Mocha · Matcha Latte · Chai Latte · Hot Chocolate — each hot or iced; cold brew on
request. Oat, almond & whole milk always included. Signature drinks (marked editable): **The Kin
Latte** (brown-butter & vanilla), **Golden Hour** (honey, cinnamon & oat), **Marine Layer Matcha**
(ceremonial matcha, vanilla cold foam). Seasonal special rotates monthly.

**FAQ (9):** power (one dedicated 110V 15–20A outlet within ~25 ft, not shared with DJ/lighting;
generator available for venues without power) · water (fully self-contained) · footprint (roughly
6×6–8×4 ft, ideally against a wall/backdrop) · indoor/outdoor + weather (rain or shine with covered
setup; good-faith reschedule if severe weather cancels) · setup/breakdown (~45 min before, ~30 min
after, never counted against service hours) · insurance (general liability; COI sent to your venue
on request) · booking & deposit (deposit holds the date, balance due about a week out; 4–8 weeks
lead recommended, last-minute welcome when the calendar allows) · travel (included across LA &
surrounding areas; a modest fee beyond, always disclosed upfront in the proposal) · guest minimums
(none — from intimate open houses to 300-cup receptions).

**Voice:** warm, specific, unhurried. Use: single-origin, locally roasted, small-batch syrups,
crafted to order, seasonal. Ban: "artisanal", "gourmet", "elevate your event", superlative claims,
exclamation points, emoji. Section headers sound handwritten, not SEO-generated. LA specificity
(Malibu, Pasadena, the Valley, Orange County) beats generic marketing speak.

## 6. Art direction

**Shared system (all variants):**
- Type: Cormorant Garamond Italic ONLY ≥36px for emotive lines (hero 72–100px desktop / 44–56px
  mobile); Montserrat for everything functional — body 16–18px/1.65 at 400, nav/buttons 12–13px
  600 caps with 0.15–0.2em tracking, eyebrow labels 11–12px/0.25em. Skip the 20–24px middle zone.
- Color 60/30/10: ivory #F6F2EC dominant · soft beige #E8DFD1 section rhythm (alternate — never two
  adjacent sections share a background) · taupe #A48F7A reserved for CTA/links/focus so the inquiry
  button is the page's only "pop". Body text uses dark anchor **#3D332C** (WCAG-safe); #837261 only
  ≥24px or decorative. Warm taupe #8C7B6E for the italic tagline moments.
- Texture: 2–4% grain overlay site-wide (SVG noise); marble texture crops as section accents.
- Rules: 1px hairlines (taupe @ 30–40% opacity) as section punctuation; generous 120–160px desktop
  section padding; asymmetry over centered-everything.
- Motion: ONE primitive — fade + 16–24px translateY, 500–700ms ease-out, IntersectionObserver at
  ~15%, 80–120ms sibling stagger; hero may deviate once (slower, on load). No parallax beyond
  10–20px drift. Zero hover-scale except clickable imagery.
- **DON'T list (audit before ship):** no Inter/system-font-only, no purple/blue gradients, no
  uniform border-radius on everything, no identical 3-card icon grids, no centered-everything hero,
  no emoji icons, no stock people-at-laptops, no exclamation CTAs, no fake badge strips, no
  identical stamped eyebrow labels every section, no identical fade on every element, no
  hamburger-only desktop nav, no five-item feature lists.

**V1 — Editorial Ivory** (`v1-editorial/`): Kinfolk-adjacent magazine spread. Hero: left ~55%
oversized Cormorant italic tagline flush-left on ivory (no photo behind text), right ~45% tall
portrait image. 12-col asymmetric grid (5/7 splits, alternating). Section labels live in gutter
margins. Packages as hairline-separated editorial list rows, not cards. One 40px italic pull-quote
moment mid-page. Form: two-column — tall image left, beige panel right with hairline-underline
inputs (label above, thin line below, no boxes). Print-stable motion (fade+translate only).

**V2 — Coastal Collage** (`v2-collage/`): warm, tactile, layered. Hero: full-viewport dusk cart
photo (cart-dusk), bottom-third dark-taupe scrim, Cormorant italic headline lower-left in ivory,
caps sub-line "LOS ANGELES · WEDDINGS · CORPORATE · PRIVATE EVENTS", CTA offset lower-right.
Slow 8–10s Ken Burns drift in hero only. Collage modules: large landscape + small portrait
overlapping ~100px, zero radius, grain overlay, twice on the page with mirrored corners. Packages
as full-width alternating photo/text bands closed by hairlines. Form: max-640px grain-textured
beige card floated over a darkened blurred texture band — the collage's final overlapping element.

**V3 — Quiet Atelier** (`v3-atelier/`): most restrained; spa/hospitality minimalism. Hero: NO
photo — ivory field, small wordmark, one 96–110px Cormorant italic line in a 70% column, tight 0.95
leading, CTA 80px below. Then a 50vh full-bleed photo band framed by hairlines, no text overlay.
Body: single 680px column, left-aligned text. Packages as a minimal 600px hairline list. ONE
dramatic moment: full-width dark-taupe (#837261) block with a single ivory italic statement.
Form: near-full-width beige panel, form right 55% / reassurance + tagline left 45%, bordered by
2–3px taupe rules. Austere centered single-line footer. Fade-only motion (no translate); the dark
block fades over 900ms.

## 7. Technical

Static HTML/CSS/JS, no frameworks, no build step. Google Fonts (Montserrat 300/400/500/600 +
Cormorant Garamond italic 400/500/600) with `font-display: swap`; self-host at hosting time.
Shared: `assets/css/tokens.css` (design tokens + grain + reveal utilities), `assets/js/inquiry.js`
(form engine + reveal observer + nav solidify), `assets/img/*`. Each variant: `index.html` +
`style.css` only. Images: hero eagerly loaded + fetchpriority, everything below lazy. Semantic
HTML, skip-link, visible focus states, prefers-reduced-motion respected. Performance budget:
above-the-fold renders < 2–3s mobile.

**Form relay:** posts JSON to a configurable endpoint (`KIN_FORM` config at the top of
`inquiry.js`). Ships pointed at Web3Forms (single access key, both inboxes via cc) — activation is
a 5-minute step during hosting setup (documented in README). Until configured, the form degrades
gracefully: it composes a pre-filled email draft to kristen@kincoffeela.com & adhir@kincoffeela.com
so no inquiry is ever lost.

## 8. Assets

`cart-dusk-1400/800` (evening string-lights scene — V2 hero) · `cart-day-1400/800` (sunny patio) ·
`cart-backdrop-1400/800` (indoor cart + COFFEE wall) · `cart-studio-1400/800` (front-on cart
detail) · `cup-1040/600` (branded cup, portrait) · `texture-marble-full-1774` (logo baked in,
top-right — usable where intentional) · `texture-marble-left-760` (clean, portrait) ·
`texture-marble-band-1774` (clean, wide band).

## 9. Tagline alternates (for the comparison page)

Primary: *"When we're here, you're family."* Fully-original alternates if zero Olive Garden echo is
preferred: *"Gathered around good coffee."* · *"Every cup, among family."* · *"Pull up a chair —
the coffee's on."*
