# Frontend Animation Tools and No-Code Builders for a Scroll-Driven Product Site

Checked: 2026-10-12. Scope: libraries, no-code builders, and design/asset tools for a single-page luxury-watch site with scroll-driven animation and a rotating, exploded, or skeleton 3D/360-degree product view. Market labels: [INT] = EU/US; [RU/CIS] = Russia/CIS.

Method caveat: direct WebFetch of gsap, cdn.jsdelivr.net, help.figma.com, framer.com, tilda.cc, webflow.com and help.readymag.com all failed with DNS errors (getaddrinfo ENOTFOUND) in this session. Prices and most vendor claims below therefore come from search-result snippets and third-party aggregators, not vendor pages. Re-check every price on the official pages before budgeting. Three.js, React Three Fiber, Lottie, Motion, Blender, Photoshop, Squarespace, and learning curves were not researched within the search budget (see Gaps).

## Key Question 1: Which libraries support scroll-linked animation and 3D or image-sequence rotation, and is an image sequence simpler?

### Takeaway
GSAP with ScrollTrigger is the best-supported choice in the sources found: it is reported free for commercial use, with no license key. The sources say nothing about the 3D libraries, so the real-3D vs. image-sequence trade-off below is an inference.

### Cited Findings
- GSAP became free after Webflow's acquisition, including the former Club bonus plugins (SplitText, MorphSVG). The npm README states that commercial use is covered — [GSAP README, jsDelivr v3.15.0](https://cdn.jsdelivr.net/npm/gsap@3.15.0/README.md). Relayed via search summary; the direct fetch failed.
- A third-party skills page lists ScrollTrigger among the plugins that are free with no licensing restrictions, and says no plugin needs a membership, license key, or auth token; everything installs from the public npm package — [GSAP plugins skill page](https://www.skills.sh/greensock/gsap-skills/gsap-plugins). Secondary source.
- The README links to a Webflow announcement (webflow.com/blog/gsap-becomes-free) that I could not open. Gap.

### Inferences
- An image sequence (pre-rendered frames, e.g., from Blender) drawn to a canvas and scrubbed by ScrollTrigger is simpler than real-time 3D: no WebGL scene, no model optimization, and it plays on any device that can show the frames. Real-time 3D (Three.js or React Three Fiber) is justified only if the user needs true orbit control or live material swaps on a model. [Inference; not sourced.]
- The configurator (case and strap, prices in rubles) and the animated counters are plain UI logic and do not need a 3D engine. [Inference; not sourced.]
- Exploded and skeleton views can also be built as frame sequences if the renders are made in advance. Frame count drives file weight, so compression and lazy loading matter. [Inference; not sourced.]

### Gaps
- Three.js, React Three Fiber (with drei), Lottie, and Motion (Framer Motion): licenses, bundle size, and fitness for product rotation were not researched. Check each project's LICENSE file before relying on it.
- Smooth-scroll libraries (e.g., Lenis) and mobile performance of frame sequences were not researched.
- GSAP learning curve was not sourced.

## Key Question 2: Can no-code builders do the same without custom code?

### Takeaway
The sourced evidence is mostly about pricing and payment access, not feature capability. Framer's restricted-countries page lists Russia, and Wix says it has not processed payments in Russia since March 2022. For a [RU/CIS] owner, Tilda and Readymag are the candidates to verify, since no restriction was found for them (this is not confirmation). No source shows that any builder natively supports a 3D or 360-degree product view.

### Cited Findings
- [INT] Framer: a free tier runs on a framer.website subdomain. Basic is about $10/mo and Pro about $30/mo per site, billed yearly — [vp0.com](https://vp0.com/blogs/framer-pricing-plans-2026/); [Brix Templates](https://brixtemplates.com/blog/framer-pricing-plans). Sources conflict: Recurdash lists $15 and $45 per month ([Recurdash](https://recurdash.com/subscription-pricing/framer)). A CostBench changelog says a $100 tier was removed in June 2026 and a new plan was added in September 2026 ([June 2026](https://costbench.com/changelog/framer-plan-removed-2026-06/); [September 2026](https://costbench.com/changelog/framer-design-plan-added-2026-09/)). I could not reconcile these. One aggregator says its figures were read from Framer's pages on 2026-09-03 ([siter.io](https://siter.io/framer-pricing)).
- [RU/CIS] Framer's restricted-countries help page lists Russia. Framer says it complies with US OFAC and EU sanctions, and users in listed places may have trouble opening accounts, reaching sites, or paying — [Framer restricted countries](https://framer.com/help/articles/restricted-countries).
- [INT] Webflow: Starter is free on a webflow.io domain, with 2 static pages, 50 CMS items, and 50 form submissions per one aggregator. Basic is about $14–15/mo billed yearly. Premium is $25/mo — [Landerlab](https://landerlab.io/blog/webflow-pricing); [Flowninja](https://www.flowninja.com/blog/webflow-pricing-demystified); [vp0.com](https://vp0.com/blogs/webflow-pricing-plans-2026/). Premium bandwidth conflicts across these sources (50 GB vs. 2.5 TB).
- [RU/CIS] Webflow: a 2022 user feature request says ecommerce is limited for users in Russia and the CIS because there is no payment integration for the region — [Webflow feedback board](https://wishlist.webflow.com/ideas/WEBFLOW-I-4872). A Russian guide says Russian cards are declined at checkout — [vc.ru](https://vc.ru/services/2121022-oplata-webflow-iz-rossii). Both are dated or non-official; treat as unverified.
- [INT] Wix: Wix's help center says it has not supported payment processing in Russia since March 7, 2022 — [Wix support](https://support.wix.com/article/available-payment-providers-in-your-country). A Russian hosting provider's article claims Wix planned to block accounts of Russian residents from September 12, 2024 — [Timeweb](https://timeweb.com/ru/community/articles/konstruktor-saytov-wix-nedostupen-dlya-polzovateley-iz-rossii). Not confirmed against Wix's own pages.
- [INT; RU/CIS candidate] Tilda: ComparEdge lists a Free plan (one site, 50 pages, tilda.ws subdomain), Personal at $15/mo ($10/mo billed yearly; one site with custom domain and full block library), and Business at $25/mo ($20/mo yearly; up to five sites, HTML/CSS export) — [ComparEdge](https://comparedge.com/tools/tilda/pricing). The page's own dates are inconsistent (verified July 2, 2026; prices as of July 5, 2026). Treat as unverified.
- [INT; RU/CIS candidate] Readymag: the help center describes a Free plan (one published project, up to 10 pages), solo Personal and Freelancer plans, a team Business (Advanced) plan, and a custom Extra tier. Yearly billing gives 10% off — [Readymag help](https://help.readymag.com/hc/en-us/articles/15790840333851-Understanding-Readymag-plans). Aggregator prices conflict: Personal is about $14/mo yearly ([PricingSaaS](https://pricingsaas.com/companies/readymag); [SaaSworthy](https://www.saasworthy.com/product/readymag/pricing)), and SaaSworthy lists $19/mo monthly. Advanced is $58.50 per PricingSaaS and $58.50 yearly / $65 monthly per SaaSworthy.
- Squarespace: no search results addressed it. Gap.

### Inferences
- Lowest-cost paths for one page on a custom domain (aggregator prices): Framer Basic (~$10/mo yearly), Webflow Basic (~$15/mo yearly), or Tilda Personal ($10–15/mo). Each is valid only if the owner can pay for it and reach the service from their market. [Inference.]
- None of the builders above is shown to natively support 3D product rotation. The likely no-code route is embedding a pre-rendered frame sequence or an external viewer through an embed or custom-code block. Embed features were not checked. [Inference.]
- For a [RU/CIS] owner, the sourced evidence points away from Wix (no payments since 2022) and Framer (on the restricted list). Webflow payment access is reported as blocked, but the sources are weak. Tilda and Readymag are the candidates to verify. [Inference from the findings above.]

### Gaps
- Squarespace: no sources found; restriction and payment status unknown.
- Official pricing pages for Framer, Webflow, Tilda, and Readymag were not fetched (DNS failures). Every price here is an aggregator snapshot, and several conflict.
- Whether Tilda, Readymag, Framer, or Webflow support scroll-scrubbed frame sequences, 3D embeds, or scroll-linked counters without code: not researched.
- Russian-language UI and support for each builder: not verified. Payment status from Russia for Tilda and Readymag: not verified.
- Learning curves: not sourced.

## Key Question 3: What do design and asset tools need (Figma, Blender, Photoshop)?

### Takeaway
Figma's official FAQ says new customers located in Russia cannot buy paid plans, and that Figma makes no payment arrangements for Russian customers. Blender and Photoshop were not researched.

### Cited Findings
- Figma's help center says new customers located in Russia can't buy paid tiers, including upgrades from the free Starter plan. Figma offers no payment arrangements for Russian customers and does not accept wire transfers or crypto — [Figma help: FAQ for users in Russia and Belarus](https://help.figma.com/hc/en-us/articles/4685987514519-FAQ-for-users-in-Russia-and-Belarus). Per the search summary, account restrictions apply only to accounts under US, UK, or EU sanctions.
- Ateo Digital reports that figma.com was unreachable from Russia for about a day, apparently because of network filtering. The article's date is not shown — [Ateo Digital](https://ateo.digital/en/blog/figma-ne-rabotaet-v-rossii/). Unverified.
- Russian-language guides from 2026 say cards issued in Russia fail for Figma and promote intermediaries and crypto — [dtf.ru](https://dtf.ru/howto/5311163-oplata-figma-iz-rossii). These guides are not official and were not verified. No payment workaround is recommended here.

### Inferences
- For an [INT] team, the free Figma Starter plan may cover a one-page design. Its current limits were not checked. [Inference.]
- For a [RU/CIS] designer, Figma paid plans are not purchasable under the official policy. Design tools with local payment options were not researched.

### Gaps
- Blender (license, cost, and fit for renders and frame sequences): not researched.
- Adobe Photoshop availability and pricing in Russia: not researched.
- Penpot and other Figma alternatives: not researched.

## Key Question 4: For each option, what are the license and cost, Russian UI and support, access from Russia, and learning curve?

### Takeaway
Only GSAP (license) and Figma (purchase access) have usable sourced statements. Builder pricing is available only from conflicting aggregators. Russian UI, Russian support, and learning curves were not sourced for any option.

### Cited Findings

| Option | Market | License and cost (source) | Russian UI and support | Usable from Russia | Learning curve |
|---|---|---|---|---|---|
| GSAP + ScrollTrigger | INT, RU/CIS | Free, including commercial use ([README](https://cdn.jsdelivr.net/npm/gsap@3.15.0/README.md)) | Not checked | Not tested | Medium (inference) |
| Framer | INT | Free tier; about $10 and $30/mo per site (aggregators, conflicting) ([vp0.com](https://vp0.com/blogs/framer-pricing-plans-2026/)) | Not checked | Russia on restricted-countries list ([Framer](https://framer.com/help/articles/restricted-countries)) | Low to medium (inference) |
| Webflow | INT | Free Starter; Basic about $14–15/mo; Premium $25/mo (aggregators) ([Landerlab](https://landerlab.io/blog/webflow-pricing)) | Not checked | Payments reported blocked (2022 request; unverified guides) ([Webflow](https://wishlist.webflow.com/ideas/WEBFLOW-I-4872)) | Medium (inference) |
| Tilda | INT, RU/CIS candidate | Personal $15/mo ($10 yearly); Business $25/mo ($20 yearly) ([ComparEdge](https://comparedge.com/tools/tilda/pricing)) | Not checked | Not checked | Low (inference) |
| Readymag | INT, RU/CIS candidate | Free; Personal about $14–19/mo; Advanced about $58–65/mo (conflicting) ([SaaSworthy](https://www.saasworthy.com/product/readymag/pricing)) | Not checked | Not checked | Low (inference) |
| Wix | INT | Not checked | Not checked | No payment processing in Russia since March 2022 ([Wix](https://support.wix.com/article/available-payment-providers-in-your-country)) | Low (inference) |
| Figma | INT, RU/CIS | Free Starter; new Russian customers cannot buy paid plans ([Figma help](https://help.figma.com/hc/en-us/articles/4685987514519-FAQ-for-users-in-Russia-and-Belarus)) | Not checked | Purchases restricted; reachability reports unverified ([Ateo](https://ateo.digital/en/blog/figma-ne-rabotaet-v-rossii/)) | Low to medium (inference) |
| Three.js, React Three Fiber, Lottie, Motion, Blender, Photoshop, Squarespace | — | Not researched | — | — | — |

### Inferences
- For an [INT] owner outside sanctioned regions, the cheapest credible stack from the sources is GSAP (free), one builder plan (about $10–15/mo, aggregator prices), and Figma or Blender for design and renders. [Inference.]
- For a [RU/CIS] owner, the sourced access evidence argues against Wix, Framer, and paid Figma. Tilda, or custom code using GSAP on a static host, are the options to verify. Static-host access from Russia was not researched. [Inference.]

### Gaps
- Official pricing, Russian UI, and Russian support for every option: not verified.
- Learning curves: not sourced. The "inference" labels above are not evidence.
- Hosting and domains from Russia (e.g., Vercel, Netlify, Cloudflare Pages), payment processors for reservations, and CRM integration: outside this assignment and not covered here.
- Suggested verification order: (1) GSAP license on webflow.com/blog/gsap-becomes-free and gsap.com; (2) current prices on framer.com/pricing, webflow.com/pricing, tilda.cc, and readymag.com; (3) Russia access statements for Tilda, Readymag, and Webflow from their own help centers; (4) Three.js, React Three Fiber, and Lottie license files on GitHub.
