# spillerstech.us

The product storefront for **Spillers Technology**, Joseph "Joey" Spillers'
independent software studio for IT operations.

The visual direction is **black-tie workshop**: satin-black surfaces, warm ivory,
champagne details, and an editorial rhythm around real product evidence. The site
stays connected to the amber personal brand at
[spilloid.github.io](https://spilloid.github.io), but it is product-first rather
than résumé-first.

## Page structure

1. **Hero** — the studio's purpose and a release-linked product collection.
2. **Featured products** — AnchorDesk and ComFlow, with real screenshots and
   direct source/quickstart paths.
3. **More from the workshop** — NetViz, RetroSpool, Partner Center Bridge, and
   OpsQuest with honest maturity labels.
4. **Custom software** — the operational-workflow service offer and method.
5. **Founder** — a concise explanation of Joey's operator and engineering mix.
6. **Contact** — email, public source, and a disclosed ComFlow demo line.

Release links use GitHub's `/releases/latest` route instead of embedding version
numbers that immediately become stale. Public source is described separately from
open-source licensing; a public repository is not automatically open source.

## Product positioning

- **AnchorDesk** — MIT-licensed, self-hosted service desk with device and RMM
  context.
- **ComFlow** — source-available, self-hostable voicemail workflow. Do not call it
  open source unless the project adopts an explicit license.
- **NetViz** — desktop LAN scanner; check the latest release assets for the
  platforms currently published.
- **RetroSpool** — pre-1.0; the capture/render pipeline and operator console work,
  while live queue polling and export automation remain in development.
- **Partner Center Bridge** — early release.
- **OpsQuest** — public trial.

## Files

- `docs/` — static files served by GitHub Pages from `main:/docs`.
- `docs/index.html` / `docs/style.css` — the complete storefront; no build step.
- `docs/assets/` — product screenshots, the social card, and dependency-free
  interaction scripts.
- `docs/privacy.html` — plain-language disclosure for website replay and the
  ComFlow demo line.
- `docs/404.html`, `docs/robots.txt`, `docs/sitemap.xml`, and `docs/CNAME` —
  production recovery and search basics.

## Local use

```sh
python3 -m http.server 4173 --directory docs
```

Then open <http://127.0.0.1:4173>.

## Content guardrails

- Use **Spillers Technology** and **independent software studio**. Add “LLC” only
  after legal formation is effective, then update the legal identity everywhere
  together.
- Prefer direct release, source, or documentation links over unsupported metrics.
- Keep product maturity explicit and avoid guarantees broader than the underlying
  implementation.
- Screenshots use synthetic demo data; never publish tenant, customer, credential,
  or internal-topology data.
- The OpenReplay recorder is loaded from OpenReplay's delivery network and sends
  data to the configured Spillers Technology ingest endpoint. Input values, email
  addresses, and numbers are configured to be obscured; the privacy page must stay
  linked whenever replay is enabled.
