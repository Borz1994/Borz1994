# Hosting, Domain, SSL and CMS for a Single-Page Limited-Edition Watch Site

Checked: 2026-10-12. Markets: **EU/US** and **RU/CIS** are labeled per finding.

Method caveat: vercel.com, netlify.com, developers.cloudflare.com and docs.github.com could not be read from this session. curl to vercel.com returned `CONNECT tunnel failed, response 403` from the egress proxy (org policy, per /root/.ccr/README.md), and WebFetch returned DNS "not found" for all four. The figures below therefore come from third-party guides and search snippets, not vendor pages. Treat every number as unverified until checked on the official pricing page.

## Key Question 1: Static and JavaScript hosting (Vercel, Netlify, Cloudflare Pages, GitHub Pages): free tiers, custom domain, SSL, CDN, functions

### Takeaway
Vercel's free Hobby tier is reported as non-commercial only, so a site that sells watches would need a paid plan. Netlify, Cloudflare Pages and GitHub Pages free-tier figures could not be verified in this session. Russian users report reachability problems with Vercel custom domains and with Cloudflare-proxied sites.

### Cited Findings
- [EU/US] Vercel Hobby is described as single-seat, non-commercial personal use; commercial sites need Pro, listed at $20 per user per month — [Deploywise 2026 guide](https://deploywise.dev/blog/vercel-free-tier-limits-2026); [Livemy Vercel pricing guide](https://livemy.app/blog/vercel-pricing)
- [EU/US] Vercel Hobby mid-2026 guides list about 100 GB Fast Data Transfer, 1M edge requests, 1M function invocations and 4 CPU-hours Active CPU per month, plus 200 projects and 100 deployments per day — [Deploywise 2026 guide](https://deploywise.dev/blog/vercel-free-tier-limits-2026); contradicted by a March 2026 guide (not identified by URL in my search results) that lists 100,000 invocations, 6,000 build minutes and a 10-second function timeout; an August 2026 guide says Hobby has no build minutes
- [EU/US] Vercel's official limits page is listed in search results with a last-updated date of 2026-05-20; I could not open it — [Vercel limits](https://vercel.com/docs/limits) (unverified)
- [RU/CIS] A Russia-based user reports that a Vercel custom production domain is unreachable in Russia while the default `*.vercel.app` address works, and that the problem persists with Cloudflare's proxy off. Anecdotal, unconfirmed by Vercel — [Vercel community thread](https://community.vercel.com/t/urgent-production-domain-bbqp-pro-is-blocked-in-russia-confirmed-vercel-ip-issue/29141.md); [Vercel community: IP blocked in country](https://community.vercel.com/t/the-ip-address-of-my-server-on-vercel-has-been-blocked-in-my-country/26076/4); [Vercel community: IP range/edge region change request](https://community.vercel.com/t/request-to-change-ip-range-edge-region-due-to-regional-ip-blocking/26269)
- [RU/CIS] Cloudflare: Russian ISPs restricted Cloudflare-protected sites (reported as starting 9 June; year per the search summary is 2025, not confirmed against the article text). Cloudflare says the action is outside its control, and Roskomnadzor urged users to switch to domestic hosting — [The Record](https://therecord.media/cloudflare-russia-restricting-access-crackdown); [ThreatBeat](https://threatbeat.com/adversaries/russias-throttling-of-cloudflare-makes-sites-inaccessible/)
- [RU/CIS] A 2026 analysis says Cloudflare is not fully banned in Russia but is unreliable. It links much of the failure to Russian networks blocking TLS with the ECH extension, which Cloudflare enables by default — [Enterno](https://enterno.io/en/articles/cloudflare-in-russia). Separately, a heise report describes Russian providers throttling foreign content with a 16-KB transfer trick — [heise](https://heise.de/-10465087)
- Netlify: the search returned nothing about Netlify free tier or Russia access.
- GitHub Pages: not researched successfully; official limits page (docs.github.com) was unreachable.

### Inferences
- [EU/US] For a one-page site that sells limited editions, Vercel Hobby is probably the wrong free plan because of the non-commercial term. Netlify, Cloudflare Pages or GitHub Pages may allow commercial use on their free tiers, but this must be checked on each vendor's terms page.
- [RU/CIS] Russian-market visitors may not reach a site on Vercel or behind Cloudflare reliably. Test from a Russian network (or ask a Russian user) before choosing a foreign static host; a Russian-hosted origin is the more reliable option for RU buyers.

### Gaps
- Official free-tier limits for Netlify, Cloudflare Pages and GitHub Pages (custom domains, SSL, CDN, serverless functions) were not retrieved. Vendor pages: https://www.netlify.com/pricing/ ; https://developers.cloudflare.com/pages/platform/limits/ ; https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- No source found on whether each host includes free SSL certificates, and on CDN coverage in Russia.

## Key Question 2: Russian hosting and VPS providers (Timeweb, Beget, Reg.ru, Yandex Cloud, Selectel): prices and what they include

### Takeaway
Only aggregator data was found. Beget lists a 6-core / 12 GB / 150 GB Linux VPS at about 3,600 RUB per month. Timeweb raised cloud prices in December 2025 according to a vc.ru ranking. No current Reg.ru, Yandex Cloud or Selectel price was found.

### Cited Findings
- [RU/CIS] Beget Linux VPS, 6 cores, 12 GB RAM, 150 GB disk, 3,600 RUB per month, listed 7 May 2026 on an aggregator — [WhTop](https://www.whtop.com/ru/plans/beget.com/148818)
- [RU/CIS] Beget offers a 30-day free trial, per a vc.ru 2026 hosting ranking (attribution to the specific article is inferred from the search summary) — [vc.ru top-5 hosting for online shops](https://vc.ru/dev/2991557-luchshie-hostingi-dlya-internet-magazina)
- [RU/CIS] Timeweb raised cloud server prices in December 2025, with some items more than doubling, while shared hosting prices stayed the same, per a vc.ru 2026 ranking — [vc.ru top-5 hosting for online shops](https://vc.ru/dev/2991557-luchshie-hostingi-dlya-internet-magazina)
- [RU/CIS] Timeweb Cloud VPS from 188 RUB, per HostingHub (undated) — [HostingHub VPS list](https://hostinghub.ru/node/15140). Timeweb's own community article gives cloud VPS from $6.46 per month, also undated — [Timeweb community](https://timeweb.com/ru/community/articles/luchshie-oblachnye-cloud-hostingi). The two figures conflict and neither is dated.
- [RU/CIS] Reg.ru is described as the cheapest entry option, with a free .ru domain and WordPress auto-install, but with CPU limits under heavy load — [vc.ru VPS ranking](https://vc.ru/top-raiting/3048130-reyting-vps-s-serverami-v-rossii)
- [RU/CIS] Reg.ru is said to support OpenVZ, KVM and Hyper-V — [HostingHub Timeweb vs Reg.ru](https://hostinghub.ru/node/10873) (the claim is from a search summary; not read in full)

### Inferences
- [RU/CIS] A single-page static site with a small form does not need a 6-core VPS. A low-tier VPS or a shared/static hosting plan would likely be enough, but no current price for those tiers was verified.

### Gaps
- No verified current price list for Timeweb, Beget or Reg.ru. Check https://timeweb.com/ru/, https://beget.com/ru/, https://www.reg.ru/ directly.
- Yandex Cloud and Selectel: no pricing or free-tier data found in this session.
- Whether a Russian VPS serves a foreign-domain site with SSL is not verified.

## Key Question 3: Domain registrars for .com, .ru and .рф: can a Russian and a foreign customer register and pay?

### Takeaway
Russian hosts sell .ru and .рф names, but the rules for foreign registrants and for payment from Russia could not be verified. A Gosuslugi identification requirement for .ru, .рф and .su is reported from September 2026, with conflicting dates and no primary source.

### Cited Findings
- [RU/CIS] Reg.ru is said to offer a free .ru domain with hosting — [vc.ru VPS ranking](https://vc.ru/top-raiting/3048130-reyting-vps-s-serverami-v-rossii); the .рф registration page on HostingHub was listed but not read — [HostingHub .рф](https://hostinghub.ru/domeny/rf)
- [RU/CIS] A linux.org.ru forum post quotes a registrar notice: from 1 September 2026, .ru, .рф and .su domains can be managed only after identification through Gosuslugi. This is forum-reported, not a primary source — [linux.org.ru forum](https://www.linux.org.ru/forum/general/18281655)
- [RU/CIS] A techora.ru news item headlined "mandatory identification via Gosuslugi for .RU, .РФ, .SU" has a URL dated 2026-09-15. Its text was not loaded — [techora.ru](https://techora.ru/news/v-rf-vveli-obyazatelnuyu-identifikatsiyu-cherez-2026-09-15). **Conflict:** the forum post says 1 September, the URL slug says 15 September.
- [RU/CIS] A Habr thread claims that for .ru and .рф, foreign registrars can register only with the consent of a Russian responsible person, and that foreign registrants were restricted in 2010. These are undated personal opinions, not regulations — [Habr thread](https://habr.com/ru/news/525064/comments/)
- [EU/US] No source found on .com registration rules or prices for foreign customers in this session.

### Inferences
- [RU/CIS] A Russian customer can probably register .ru or .рф through a Russian registrar. Whether the Gosuslugi requirement changes this, and whether it applies to foreign owners, is unresolved.
- [EU/US] A foreign customer buying a .com is not restricted by these sources, but this is an assumption, not a verified finding.

### Gaps
- Primary sources for .ru/.рф identification rules: the Coordination Center for .RU/.РФ (cctld.ru) and RU-CENTER, which were not searched.
- Whether foreign owners of .ru/.рф domains need a Russian contact or identification.
- Whether a Russian resident can pay foreign registrars (Namecheap, Cloudflare Registrar, Porkbun, etc.) by card. Not researched.
- Current domain prices (per year) for .com, .ru and .рф from any registrar. Not found.

## Key Question 4: Content management for editable data (prices, edition counts, photos): Sanity, Strapi, Directus, Contentful, WordPress, or builder CMS

### Takeaway
Sanity has the most generous free tier reported (10K documents, 1M CDN requests, 100 GB assets, 20 users), so it is the simplest hosted option for prices, edition counts and photos. Strapi and Directus free-tier data conflict across sources. Contentful's free tier is smaller and its paid plan starts high. WordPress and Russian builders were not researched.

### Cited Findings
- [EU/US] Sanity free plan: 10K documents, 1M CDN requests per month, 100 GB assets, 20 users — [Agentdeals Sanity](https://agentdeals.dev/vendor/sanity); [ToolRadar Sanity pricing](https://toolradar.com/tools/sanity/pricing) (the summary does not say which of these two pages carries each figure)
- [EU/US] Sanity Growth plan is $15 per seat per month — [Flow Ninja Sanity pricing](https://www.flowninja.com/blog/sanity-cms-pricing)
- [EU/US] Contentful free tier: about 100K API calls per month and 10 users; Lite plan from $300 per month — [Futurepicker](https://futurepicker.com/?p=2338); [DevToolPicks](https://devtoolpicks.com/blog/best-contentful-alternatives-indie-hackers-2026). Source attribution for individual figures is unclear.
- [EU/US] Strapi: the self-hosted core is free. Cloud free tier conflicts: one source says $0 for personal or non-commercial use only, another lists a Cloud Free Plan alongside a $15/month Essential tier, a third says Essential is about $18/month — [Tech Insider](https://tech-insider.org/?p=19376); [Prismic free headless CMS](https://prismic.io/blog/best-free-headless-cms)
- [EU/US] Directus: self-hosting is free under a BSL license for organizations under $5M revenue. One source says the Cloud free tier was discontinued in November 2025 with Cloud from $15/month; another lists a $499/month Team plan — [Agentdeals Directus](https://agentdeals.dev/vendor/directus) (conflicting; not confirmed)
- Dates on these CMS sources run from June to September 2026 (third-party comparison sites).

### Inferences
- [EU/US] For prices, edition counts and photos on a single page, a hosted headless CMS with a free tier (Sanity, per these sources) avoids running a server. The site would fetch content from the CMS at build time or at runtime.
- [EU/US] Self-hosting Strapi or Directus adds a VPS cost and maintenance work, so it is only worth it if the free hosted tier is too small.
- The availability counter ("№ 254 / 300") changes after each reservation. A CMS field updated by hand is simplest. Live counting needs a small backend or database (see Key Question 5).

### Gaps
- Whether Sanity, Contentful or Strapi APIs are reachable from Russia. Not tested.
- WordPress and Russian-market builders (e.g., Tilda) were not researched, so no price or feature data is given for them.
- Vendor pricing pages were not read for any CMS. Check https://www.sanity.io/pricing, https://www.contentful.com/pricing/, https://strapi.io/pricing, https://directus.io/pricing.

## Key Question 5: Form and backend hosting for the reservation form (serverless functions, Supabase, Firebase, or builder forms)

### Takeaway
Supabase's free tier, per mid-2026 third-party guides, covers 2 projects, 500 MB of database, 1 GB storage, 5 GB bandwidth, 50K monthly active auth users and 500K Edge Function invocations. Free projects pause after a week of inactivity. Firebase's free Spark plan has stricter daily caps. Builder forms and serverless functions were not verified.

### Cited Findings
- [EU/US] Supabase free tier (mid-2026 third-party): 2 free projects, 500 MB Postgres, 1 GB file storage, 5 GB bandwidth, 50,000 MAU, 500K Edge Function invocations per month; projects paused after one week of inactivity — [Automation Atlas Supabase free tier 2026](https://automationatlas.io/answers/supabase-free-tier-limits-2026/). One source says the free plan has unlimited API requests.
- [EU/US] Supabase Pro is $25 per month per project (8 GB database, 100K MAU, daily backups) — [Automation Atlas Supabase pricing 2026](https://automationatlas.io/answers/supabase-pricing-explained-2026/); [ToolRadar Supabase 2026](https://toolradar.com/blog/supabase-pricing-2026). Pro egress figures conflict (50 GB + 200 GB vs. 250 GB total).
- [EU/US] Firebase Spark (free): 1 GB Firestore, 5 GB storage, 50K daily reads, daily caps of 20K writes and 20K deletes. Blaze (pay-as-you-go) roughly $0.06 per 100K reads and $0.18 per 100K writes — [Tech Insider Supabase vs Firebase 2026](https://tech-insider.org/supabase-vs-firebase-2026/). Third-party; not verified against firebase.google.com/pricing.

### Inferences
- [EU/US] A reservation form (a few fields, low volume) fits within Supabase's free limits. It also needs a function or database write, so Supabase (table plus RLS-protected insert, or Edge Function) is a reasonable choice. Free-tier pause after inactivity may matter for a launch-phase site with long gaps.
- [EU/US] Firebase's daily write cap is a risk for a sale-day spike, but is not an issue for a few reservations per day.

### Gaps
- Form-service options (Formspree and similar) and builder-native forms were not researched.
- Serverless function free-tier limits on Netlify/Cloudflare/Vercel were not verified (vendor pages unreachable).
- Whether Supabase or Firebase endpoints are reachable from Russia. Not tested.

## Key Question 6: Minimum service set for a one-page site with a form and editable prices, and monthly cost in 2026

### Takeaway
For an EU/US seller, a plausible minimum is a static host, a headless CMS and Supabase for the form. Its cost is about $0 to $20 per month plus the domain fee, depending on whether the host's free tier permits commercial use. For RU/CIS, a Russian VPS or shared hosting would be a reasonable alternative, with a cost of roughly 0 to 3,600 RUB per month (aggregator-based upper bound). These are estimates; no complete, verified price set was found.

### Cited Findings
- [EU/US] Vercel Pro $20 per user per month (third-party) — [Deploywise](https://deploywise.dev/blog/vercel-free-tier-limits-2026)
- [EU/US] Sanity free tier; Growth $15 per seat per month — [Agentdeals Sanity](https://agentdeals.dev/vendor/sanity); [Flow Ninja](https://www.flowninja.com/blog/sanity-cms-pricing)
- [EU/US] Supabase free tier; Pro $25 per project per month — [Automation Atlas](https://automationatlas.io/answers/supabase-pricing-explained-2026/)
- [RU/CIS] Beget VPS 6 cores / 12 GB at 3,600 RUB per month — [WhTop](https://www.whtop.com/ru/plans/beget.com/148818)

### Inferences
- [EU/US] Minimal stack: static host (free tier, if commercial use is permitted; otherwise Vercel Pro at $20 per user per month), Sanity free tier (CMS for prices, editions, photos), Supabase free tier (reservations and counter). Expected cost: about $0 per month if the free tiers suffice and commercial use is allowed, up to about $20 per month on Vercel Pro, plus the yearly domain fee (price not verified). If Supabase Pro ($25) or Sanity Growth ($15 per seat) is needed, add those.
- [RU/CIS] Minimal stack: a Russian VPS or shared hosting for the static site and form (Beget or similar), a .ru or .рф domain from a Russian registrar, and either Sanity (reachability unverified) or a self-hosted CMS on the same VPS. Expected cost: about 3,600 RUB per month at the aggregator-listed Beget tier (overkill for one page), plus the domain fee.
- SSL: most hosts supply managed certificates; this was not verified for any host in this session. Assume free but confirm.

### Gaps
- No verified price list for static hosts, domains, VPS (except one aggregator entry), or CMS tiers from vendor pages.
- Domain renewal prices for .com, .ru and .рф are unknown.
- Russian VPS prices for Yandex Cloud and Selectel are unknown.
- The estimate ignores taxes, currency conversion, payment fees and the cost of a payment provider, which is a separate research item.
- Official vendor pages (vercel.com, netlify.com, developers.cloudflare.com, docs.github.com) were blocked from this session by egress policy. Re-run the check on those pages before using any figure.
