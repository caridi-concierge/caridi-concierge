# Analytics Events

How conversion and engagement tracking works on this site, the event contract,
and the GTM / GA4 setup needed to turn these events into reportable Key Events.

## Architecture

- **Container:** Google Tag Manager `GTM-KN8MSZTK`, loaded in
  [`src/app/layout.tsx`](../src/app/layout.tsx) via `@next/third-parties`.
- **Helper:** [`src/lib/analytics.ts`](../src/lib/analytics.ts) exposes
  `pushEvent(event, params)`, which pushes `{ event, ...params }` onto
  `window.dataLayer`. It is SSR-safe and initialises `dataLayer` if GTM has not
  yet, so events queued before the container loads still flush.
- **Link island:** [`src/components/TrackedLink.tsx`](../src/components/TrackedLink.tsx)
  is an `<a>` that fires `pushEvent` on click. Use it to add tracked links inside
  **server** components (e.g. `ContactHero`) without making the whole surface
  client. In client components, call `pushEvent` from an inline `onClick`.

> **Tracking is a contract.** Event names and the element `id`s below are
> referenced by GTM triggers. Renaming or removing either can silently break a
> configured Key Event. Diff rendered ids/events against the prior commit when
> refactoring CTAs or contact surfaces. See also the conversion-tracking note in
> project memory.

## Event reference

| Event | Fires when | Params | Source |
| --- | --- | --- | --- |
| `begin_booking` | `/book` mounts, immediately before the redirect to Jane | `booking_provider: "jane"`, `source` | [`src/app/book/page.tsx`](../src/app/book/page.tsx) |
| `generate_lead` | Contact form submits successfully (`/api/contact` returns ok) | `method: "contact_form"`, `contact_pref: "Text" \| "Call" \| "Email"` | [`ContactForm.tsx`](../src/app/sections/contact/ContactForm.tsx) |
| `phone_click` | A `tel:` link is clicked | `location: "navbar_desktop" \| "navbar_mobile" \| "footer" \| "contact_hero"` | `Navbar`, `Footer`, `ContactHero` |
| `email_click` | A `mailto:` link is clicked | `location: "footer" \| "contact_hero"` | `Footer`, `ContactHero` |
| `sms_click` | "Or send a text" link in the contact hero | `location: "contact_hero"` | `ContactHero` |
| `social_click` | Instagram link in the contact hero | `location: "contact_hero"` | `ContactHero` |
| `widget_sms_initiated` | SMS widget "send" — user opens the prefilled SMS | `widget_type`, `service_selected`, `has_name`, `message_length` | [`SMSContactWidget.tsx`](../src/components/SMSContactWidget.tsx) |
| `widget_opened` | SMS widget opened | `widget_type: "sms_contact"` | `SMSContactWidget` |
| `widget_closed` | SMS widget closed | `widget_type: "sms_contact"` | `SMSContactWidget` |
| `widget_dismissed` | SMS widget dismissed (X) | `widget_type: "sms_contact"` | `SMSContactWidget` |

### `begin_booking` source attribution

`source` resolves to, in order: a `?source=` query param on the `/book` URL,
then `document.referrer`, then `"direct"`.

**Every Book CTA on the site passes an explicit `?source=`**, so `source`
identifies the originating CTA rather than falling back to the referrer:

| `source` value | CTA |
| --- | --- |
| `navbar_desktop` / `navbar_mobile` | Navbar "Book a visit" |
| `home_hero` | Home hero |
| `home_faq` | Home FAQ inline link |
| `footer` | Footer "Schedule" |
| `treatment_detail` | Treatment detail-page hero |
| `card_{slug}` | Treatment cards (`card_consult`, `card_dermal-fillers`, …) |
| `about` / `about_modes` | About page CTAs |
| `staff_bio` | Staff bio |
| `location_gowanus` / `location_in-home` | Location hero primary CTA |
| the CTA's `id` (e.g. `homepage-cta`, `treatments-cta`, `botox-cta`) | any `CTASection` band — appended automatically from the rendered `id` in `CTA.tsx` |

When adding a new Book CTA, append `?source=<surface>` to its `/book` href
(`CTASection` does this automatically from its `id`). The event still fires
without it — you'd just lose the attribution.

## Element IDs (for GTM click triggers)

Stable `id`s exist as a backup trigger mechanism (GTM "Click - just links",
Click ID equals). Booking and primary CTAs:

- Booking CTAs: `homepage-cta`, `hero-booking-cta`, `detail-hero-cta`,
  `treatments-cta`, `about-mission-book-cta`, the per-treatment `*-cta`s.
- Contact links: `nav-phone-cta`, `nav-mobile-phone-cta`, `footer-phone-cta`,
  `footer-email-cta`, `contact-phone-cta`, `contact-sms-cta`,
  `contact-email-cta`, `contact-instagram-cta`.
- SMS widget submit: `sms-contact-cta`.
- Location CTAs (slug-based): `{slug}-primary-cta`, `{slug}-zocdoc-cta`.

Prefer the `dataLayer` events above for primary conversions — they are immune
to per-button id drift. Use id-based click triggers for engagement CTAs that
don't warrant a code-level event.

## GTM setup

The pattern for every event: a **Custom Event trigger** matches the `event` name,
a **GA4 Event tag** forwards it to GA4, and **Data Layer Variables** expose the
params. Concepts first, then the concrete config.

### Concepts

- **Data Layer Variable (DLV)** — reads a key from the `dataLayer` push. Required
  before GTM can reference a param. Create from **Variables → User-Defined → New →
  Data Layer Variable**, with *Data Layer Variable Name* = the exact param key.
  - ⚠️ Do **not** use the "New Variable" button inside a tag's *Event Settings
    Variable* dropdown — it's hard-scoped to the "Google Tag: Event Settings"
    type and won't offer Data Layer Variable. Use the standalone Variables
    section, or the `+` in a value field's variable picker.
- **`{{Event}}` built-in** — returns the current dataLayer event name. Enable via
  **Variables → Configure → Event**. Lets one tag serve many events.
- **Event Parameters (on the GA4 Event tag)** — rows of *Parameter Name* (the GA4
  param) → *Value* (`{{DLV - …}}`). This is where you map params, not the Event
  Settings Variable dropdown (which is only for sharing params across many tags).

### Data Layer Variables to create

| Variable name | Data Layer Variable Name |
| --- | --- |
| `DLV - source` | `source` |
| `DLV - contact_pref` | `contact_pref` |
| `DLV - location` | `location` |
| `DLV - widget_type` | `widget_type` |
| `DLV - service_selected` | `service_selected` |
| `DLV - has_name` | `has_name` |
| `DLV - message_length` | `message_length` |
| `DLV - booking_provider` | `booking_provider` |

Plus enable the built-in **`{{Event}}`** variable.

### Triggers + tags

Group the events into four tags to minimise duplication.

**1. `begin_booking`**
- Trigger: *Custom Event*, Event name `begin_booking`.
- Tag: GA4 Event, Event Name `begin_booking`, params `source` → `{{DLV - source}}`,
  `booking_provider` → `{{DLV - booking_provider}}`.

**2. `generate_lead`**
- Trigger: *Custom Event*, Event name `generate_lead`.
- Tag: GA4 Event, Event Name `generate_lead`, params `method` → `{{DLV - method}}`
  (add a `DLV - method` if you want it), `contact_pref` → `{{DLV - contact_pref}}`.
- The event only fires for **server-accepted** submissions (bot-dropped ones return
  `accepted:false` and suppress it), so it's already bot-filtered. See bot note below.

**3. `*_click` (batched — one trigger, one tag)**
- Trigger: *Custom Event*, ✅ *Use regex matching*, Event name
  `^(phone_click|email_click|sms_click|social_click)$`.
- Tag: GA4 Event, Event Name `{{Event}}`, param `location` → `{{DLV - location}}`.

**4. SMS widget (batched — one trigger, one tag)**
- Trigger: *Custom Event*, ✅ *Use regex matching*, Event name
  `^widget_(opened|closed|dismissed|sms_initiated)$`.
- Tag: GA4 Event, Event Name `{{Event}}`, params `widget_type`, `service_selected`,
  `has_name`, `message_length` → their `{{DLV - …}}`. (Absent params on the
  open/close/dismiss events are simply not sent.)

Then **Preview** to confirm each tag fires with populated params, and **Publish**.

## GA4 setup

### Marking Key Events

Key Events are designated **in GA4, not GTM**. Two ways:
- **Admin → Events**: toggle "Mark as key event" — but the event must have already
  fired *and been processed* (can take ~24h to appear; DebugView/Realtime are
  instant but the toggle lives in the processed table).
- **Admin → Key events → New key event**: type the exact name to pre-register it
  *before* it fires — avoids the wait.

Marking is **not retroactive** — only hits after marking count. Register early.

**Mark as Key Events:** `begin_booking`, `phone_click`, `widget_sms_initiated`.
Add `generate_lead` once the bot filter is confirmed working (see below). Leave
`email_click`, `sms_click`, `social_click`, and the widget funnel events
(`widget_opened/closed/dismissed`) as plain events unless you want them as conversions.

### Custom dimensions (Admin → Custom definitions)

Params are *collected* but only become reportable breakdowns once registered.
Register as **event-scoped custom dimensions**:

- `source` — which CTA/referrer drove booking intent
- `location` — which surface drove phone/email clicks
- `contact_pref` — Text vs Call vs Email
- `service_selected` — which treatment the SMS was about

**Custom metrics: none needed.** Conversion counts come free as event/Key-Event
counts. `message_length` is the only numeric param and is low-value — register it
as a custom metric only if you specifically want to study message composition.

### Bot note for `generate_lead`

The contact form is bot-heavy. `/api/contact` drops bots (honeypot + timing +
**Cloudflare Turnstile** + validation) and the client suppresses `generate_lead`
for them, so the event is trustworthy. Still, watch it against the human-only
signals (`begin_booking`, `phone_click`, `widget_sms_initiated`) for a week before
relying on it.

Turnstile is **env-gated**: the widget renders only when
`NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set at build time, and the server enforces it
only when `TURNSTILE_SECRET_KEY` is set. Set **both together** — a secret without a
site key means no token is ever sent and every submission is rejected.

## Known limitations

- **Booking completion is off-site.** The funnel ends on Jane
  (`caridiconcierge.janeapp.com`); `begin_booking` is the on-site proxy. True
  completion requires Jane-side conversion import or a thank-you-page signal.
- **SPA referrer.** See the `begin_booking` source note above.

## Adding a new event

1. Call `pushEvent("event_name", { ...params })` from a client component, or use
   `TrackedLink` for a link inside a server component.
2. Document it in the table above.
3. Add the GTM trigger + GA4 tag, and mark it a Key Event if it's a conversion.
