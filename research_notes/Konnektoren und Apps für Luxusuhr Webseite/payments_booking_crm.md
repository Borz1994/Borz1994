# Payments, Booking, CRM, Notifications, Analytics and Legal for a Limited-Edition Reservation Site

Checked 2026-10-12. Verification caveat: WebFetch returned DNS errors (ENOTFOUND) for every official site attempted (yookassa.ru, cloudpayments.ru, stripe.com, docs.stripe.com, support.stripe.com, gdpr-info.eu, alrud.com), so no official price list or legal text was read directly. Unless marked otherwise, facts below come from search-result summaries or third-party sites. Items I could not source are listed under Gaps. Russian acquirer rates are unconfirmed and conflict between sources. Re-check every fee on the provider's official page before use.

## Payments and Deposits

### Takeaway
For EU/US customers, Stripe is the usual deposit option, but it does not serve Russia. PayPal halted Russian service in 2022. For Russia, YooKassa and CloudPayments use individually negotiated rates, and aggregators quote roughly 2.4-3.5% plus VAT for cards, with conflicting figures. Card holds on Stripe last about 7 days online, too short for pre-orders that ship later, so a deposit is better taken as a normal charge with a refund policy.

### Cited Findings
- Stripe does not support users located in Russia, Ukraine or Belarus. The sanctions page was last updated 26 May 2023 according to the search summary, and no newer confirmation turned up. Stripe's Restricted Business List also bars certain services to people in Russia. — [Stripe sanctions page](https://support.stripe.com/questions/impact-of-sanctions-on-russia-and-belarus)
- Stripe online card holds (manual capture) usually last 7 days. In-person Terminal holds last about 2 days. The `capture_before` field shows expiry. Extended authorizations allow capture up to 30 days later for Terminal payments, subject to card brand and merchant eligibility; online eligibility was not found. — [Stripe: capture later](https://docs.stripe.com/payments/capture-later); [Stripe: placing a hold on a card](https://docs.stripe.com/charges/placing-a-hold)
- Other payment-method windows (per the same Stripe material as summarized): Klarna 28 days, Cash App Pay 7 days, PayPal 10 days (Stripe attempts extension to 20). — [Stripe: capture later](https://docs.stripe.com/payments/capture-later)
- Partial capture releases the uncaptured difference back to the customer, and only one capture is allowed per order. This comes from WooCommerce's Stripe guide, not from Stripe's own documentation. — [WooCommerce: authorize and capture](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture)
- PayPal suspended services in Russia in March 2022. New Russian sign-ups stopped from 2 March 2022, and withdrawals remained possible for a limited period. Current seller status was not verified. — [Engadget (citing Reuters)](https://www.engadget.com/paypal-suspends-services-russia-193756988.html); [The Paypers](https://thepaypers.com/payments/news/paypal-suspends-its-services-in-russia)
- YooKassa: no official tariff page was retrieved. A quasa.io article gives a 3.5% base card rate with 22% VAT on the card fee from 1 January 2026, and states there is no subscription fee. — [quasa.io: YooKassa vs CloudPayments](https://quasa.io/ru/media/yukassa-ili-cloudpayments-podpiski-menyayut-vybor-platezhnogo-servisa). A toolfox listing gives "from 0.4% + VAT" for successful payments only, with no conditions stated; I could not confirm which page this figure comes from. — [toolfox: YooKassa](https://toolfox.ru/services/s/yookassa). A bank tariff for YooMoney ИП/ООО lists card payments from 2.4%, with 54-FZ receipts from 0.1% per receipt. This is a bank tariff, not the YooKassa price list, and its date is not shown. — [1000bankov.ru](https://1000bankov.ru/rko/tarify/yoomoney/yukassa---internet-ekvayring-dlya-ip-i-ooo/). Vybiru.ru shows internet acquiring servicing as free, with the commission individually agreed. — [vbr.ru: YooKassa](https://www.vbr.ru/ekvajring/ukassa/)
- CloudPayments: the 2.6% rate on its public calculator is illustrative only. Actual rates are individual, and VIP terms require turnover of at least 5 million ₽ per month. — [toolfox: Alfa-Bank alternatives review](https://toolfox.ru/services/s/alfa-internet-ekvajring/alternatives). A comparison model assumes 3% for cards and 0.7% for SBP, both plus VAT, but treats these as assumptions to check against the contract. — [quasa.io](https://quasa.io/ru/media/yukassa-ili-cloudpayments-podpiski-menyayut-vybor-platezhnogo-servisa)
- Paddle: 5% + 50¢ per transaction, merchant of record, no monthly fee. — [Spendflo: Paddle](https://spendflo.com/vendors/paddle). A competitor comparison estimates the 50¢ at about 10% of a $5 sale. — [Dodo Payments: Paddle fees](https://dodopayments.com/blogs/paddle-fees-explained) (competitor source)

### Inferences
- For an EU/US deposit, Stripe (charge now, with a stated refund policy) is the practical choice. Paddle's 5% + 50¢ makes a €100 sale cost about €5.50 (my calculation), against about €1.75 at a 1.5% + €0.25 rate. That gap is roughly the price of merchant-of-record services. The 1.5% + €0.25 rate is not sourced here; see Gaps.
- Pre-orders that ship more than about 7 days out cannot rely on a plain card hold. Charge the deposit at order time and charge the balance later as a separate payment.
- For Russia, a 10,000 ₽ deposit at 3.5% costs 350 ₽, or about 427 ₽ if 22% VAT applies to the fee as the quasa.io source states (my calculation).
- The example video's form has no payment fields. The "reserve" button may only open the form. Whether to take a deposit is a product decision.

### Gaps
- Official YooKassa, CloudPayments, T-Bank and Robokassa prices could not be retrieved. Robokassa and T-Bank acquiring were not researched in depth.
- Whether YooKassa, CloudPayments or T-Bank support holds or two-stage payments for pre-orders, and at what cost.
- Paddle's eligibility for physical goods and for Russian sellers was not verified.
- Current PayPal seller status for Russia; sources found are from 2022 only.
- The Stripe EEA card rate (1.5% + €0.25) is from memory and was not sourced in this session.

## CRM and Lead Handling

### Takeaway
A few hundred leads do not need a paid CRM. A Google Sheet or a free-tier CRM as the lead record, plus a Telegram bot that posts each new lead to a managers' chat, is sufficient. HubSpot's free-tier limits and seat prices conflict across sources. Bitrix24 has a free tier, and its paid prices in the sources found are from 2025.

### Cited Findings
- HubSpot free CRM: sources disagree. One says capped at 2 users with a 1-pipeline limit, another says unlimited users, and a third says 1,000 contacts. — [CASRAI: HubSpot CRM pricing](https://www.casrai.org/guides/hubspot-crm-pricing); [Landbase (dated 6 May 2026)](https://www.landbase.com/blog/hubspot-pricing)
- HubSpot Starter: most sources give $20 per seat per month on monthly billing. Annual-billing figures conflict ($7, $9 or $15). Since March 2024 HubSpot bills per seat with write access. Viewers are free. — [TinyCommand](https://tinycommand.com/blogs/hubspot-pricing-explained)
- Bitrix24 has a free tier, plus three paid plans (Basic, Standard, Professional) and an Enterprise plan for 250+ users. — [Bitrix24 journal: plan comparison](https://www.bitrix24.ru/journal/sravnenie-tarifov-bitriks24/). A 2025 review lists paid plans from 1,743 ₽ to 22,094 ₽ per month. The exact source of that figure was not confirmed. — [Infullbroker 2025 CRM review](https://www.infullbroker.ru/articles/luchshie-crm-sistemy-2025/). A 2026 article on Bitrix24's real Basic-plan cost was cut off before any figures. — [vc.ru](https://vc.ru/id5734114/2773135-bitrix24-stoimost-bazovogo-tarifa)
- Bitrix24's built-in contact centre accepts inbound messages from VK and Avito free of charge, but not outbound Instagram messaging. — [selsup.ru CRM ranking 2026](https://selsup.ru/blog/luchshie-crm-sistemy-2026/) (written by a competitor, OkoCRM, per the search summary)
- Telegram Bot API: about 1 message per second per chat (short bursts tolerated), 20 messages per minute in groups, and about 30 messages per second for bulk notifications. — [Telegram Bot FAQ](https://core.telegram.org/bots/faq). Telegram does not document exact limits; they may change. — [python-telegram-bot wiki: flood limits](https://github.com/python-telegram-bot/python-telegram-bot/wiki/Avoiding-flood-limits)

### Inferences
- Smallest sensible setup for a few hundred leads: form, then a Google Sheet (or Bitrix24 free / HubSpot free) as the lead record, with a Telegram bot posting each lead to a managers' group. Telegram's per-chat and group limits are far above what a few hundred leads generate.
- Move to a paid CRM only when several managers need pipeline stages or reporting. In Russia, Bitrix24's free tier is the most likely first CRM. amoCRM and Pipedrive were not researched.
- Keep the lead record outside Telegram. Chats are not a database, and the legal retention and deletion duties (see Legal) are easier to meet in a structured store.

### Gaps
- No verified official price pages for HubSpot, Bitrix24, Pipedrive or amoCRM. Pipedrive and amoCRM were not researched.
- Current 2026 Bitrix24 paid-plan prices were not found.
- HubSpot's current free-tier seat and contact limits remain unresolved.

## Notifications

### Takeaway
The Telegram Bot API is free and suits internal lead alerts. Resend's free tier (3,000 emails per month, 100 per day) covers launch volume, according to third-party reviews. SMS in Russia costs roughly 0.7-4 ₽ per message according to one dated source. No provider's official SMS price list was found.

### Cited Findings
- Telegram limits as listed under CRM above. — [Telegram Bot FAQ](https://core.telegram.org/bots/faq)
- Resend free tier: 3,000 emails per month, 100 per day, 1 verified domain. Pro is listed at $20 per month for 50,000 emails, with $0.90 per 1,000 overage. Sources disagree on Pro and higher tiers and on log retention. These are third-party figures. — [WP Mail SMTP: Resend review 2026](https://wpmailsmtp.com/resend-review/); [AutomationAtlas: Resend pricing 2026](https://automationatlas.io/answers/resend-pricing-explained-2026/)
- SMS in Russia: a Kod.ru article dated 15 August 2026 says smaller organisations pay 0.7-4 ₽ per message. — [Kod.ru](https://kod.ru/banki-khotiat-lghoty-na-sms)
- A vendor webinar notice (April 2026) claims all Russian operators moved to pack-based SMS billing in 2026, so a pack of 5 is charged even for a single message. This is a vendor claim, not verified. — [RBC Companies webinar notice](https://companies.rbc.ru/news/rt4j0DApIt/vebinar-bezumnyie-tarifyi-na-sms/)
- SMSC: a toolfox listing (updated 9 April 2026) says rates vary by destination country and recipient operator, with no figures given. — [toolfox: SMSC](https://toolfox.ru/services/s/smsc)

### Inferences
- For a few hundred leads, send the customer confirmation by email (Resend free tier) and send internal alerts to Telegram. Skip SMS at launch. At 0.7-4 ₽ each, 300 SMS would cost 210-1,200 ₽ one-time (my calculation).
- If SMS is used later, pricing should be taken from a signed rate card, given the pack-billing claim.

### Gaps
- Official per-message prices for SMSC, SMS.ru and Twilio were not found. Twilio, Postmark and Mailgun were not researched in depth.
- Whether Resend and Telegram are reliably reachable for Russian users was not verified.
- Resend's official pricing page (resend.com/pricing) was not fetched.

## Analytics and Consent

### Takeaway
For a Russian audience, Yandex Metrika is the usual analytics tool. A Russian lawyer's blog treats it as needing explicit consent. One Russian news headline reports that Meta was declared extremist in Russia, which would make Meta tools unusable for that audience. GA4 consent mode was not researched.

### Cited Findings
- A Russian lawyer's blog says analytics and ad tools (Metrika, GA, pixels, retargeting) need explicit user consent. This is a blog, not an official source. — [ppt.ru: cookies and 152-FZ](https://ppt.ru/columns/jurist-v-it/kuki-i-personalnye-dannye-chto-trebuet-152-fz)
- The same blog says Roskomnadzor now uses automated site checks, including whether a cookie banner appears on the first visit before data collection starts. This is a blog claim, not verified. — [ppt.ru](https://ppt.ru/columns/jurist-v-it/kuki-i-personalnye-dannye-chto-trebuet-152-fz)
- Another lawyer's answer says 152-FZ has no explicit requirement for "Accept" and "Reject" buttons. It points to Federal Law 266-FZ of 2 July 2021 as a cookie-information source and advises checking Roskomnadzor's guidance. Not checked against the law text. — [harant.ru](https://harant.ru/questions/q-104978/)
- A blog says 266-FZ introduced a "substantial and unambiguous" consent standard. The search summary did not confirm this wording in the statute, so treat it as doubtful. — [lpmotor.ru](https://lpmotor.ru/articles/152-fz-cookie-2511)
- A Russian news headline reports that Meta (owner of Instagram and Facebook) was recognized as extremist and banned in Russia. Headline only; the article body was not read. — [Sostav.ru](https://www.sostav.ru/blogs/254470/74998)
- One Habr commenter says they received a prosecutor's letter over Yandex analytics without a cookie notice. Single anecdote, not evidence. — [Habr: comments](https://habr.com/en/articles/916946/comments)

### Inferences
- For a Russian audience, show a consent banner before loading Metrika and load analytics only after consent. Including a visible reject option is the safer choice even if the statute does not require it.
- Do not plan a Meta pixel for Russian visitors on current evidence.
- For EU visitors, GA4 needs a consent-management setup. Consent mode and cookie-consent tools were not researched.

### Gaps
- GA4 consent mode and Google service availability in Russia: not researched.
- Cookie-consent tools (for example Cookiebot, Klaro): not researched.
- Official Yandex or Roskomnadzor guidance on cookies: not retrieved.

## Legal: Collecting Customer Data (orientation only, not legal advice)

### Takeaway
A reservation form that collects name and phone number needs a privacy notice and a consent checkbox that the user must actively tick. Under 152-FZ, the 2025 amendment to Article 18(5) appears to restrict storing Russian citizens' personal data in foreign databases. Both points rest on secondary sources, and the official texts were not retrieved.

### Cited Findings
- 152-FZ Article 18(5), 2015 version: operators collecting Russian citizens' personal data online must use databases located in Russia. — [The Moscow Times: data localization (2015)](https://www.themoscowtimes.com/archive/b2b-russian-data-localization-in-brief); [Mondaq: Ministry clarifications (2015)](https://www.mondaq.com/russianfederation/data-protection/422058/localization-of-personal-data-processing-in-russia-the-clarificatations-of-the-ministry-of-telecom-and-mass-communications)
- Federal Law No. 23-FZ of 28 February 2025 rewrote Article 18(5), in force from 1 July 2025. According to ALRUD's summary, the new text frames the rule as a prohibition on collecting data through databases outside Russia, and it also applies to processors. The ALRUD page could not be fetched; this is from the search summary. — [ALRUD: HR & Digital (No. 18)](https://www.alrud.com/publications/1688)
- The phrase "primary database" from 2015 commentary does not appear in the statute as quoted in search results. One unofficial guide asserts a primary-database rule; this is unverified and not relied on. — [Mondaq (2015)](https://www.mondaq.com/russianfederation/data-protection/422058/localization-of-personal-data-processing-in-russia-the-clarificatations-of-the-ministry-of-telecom-and-mass-communications)

### Inferences
- If Russian citizens' data is collected, the database holding it (for example the CRM) should be hosted in Russia, which rules out a US-hosted CRM as the primary store for those records. Whether the 2025 wording applies to a foreign-hosted reservation form is not established here.
- Telegram and Resend in the notification path also handle personal data (name, phone). Their role under the localization rule should be checked with counsel.

### Gaps
- Unsourced, from general knowledge, to verify against the official texts:
  - GDPR Article 13 notice content: controller identity and contact, DPO contact, purposes and legal basis, recipients, third-country transfers and safeguards, retention period, data subject rights, right to withdraw consent, right to complain to a supervisory authority, whether provision is a statutory or contractual requirement, and automated decision-making. Source to check: https://gdpr-info.eu/art-13-gdpr/ (not fetched).
  - GDPR consent must be a freely given, specific and unambiguous indication, which excludes pre-ticked boxes. Check Article 7 and Recital 32 on EUR-Lex.
  - 152-FZ consent must be specific and informed. The policy must be publicly available on the site (Article 18.1). Check the consultant.ru or garant.ru text.
  - Transfers of EU data to US processors (Stripe, Resend, HubSpot) need a transfer mechanism such as the EU-US Data Privacy Framework or standard contractual clauses. Check current status.
- Official Roskomnadzor guidance on consent and cookies was not retrieved.
- Consumer-law treatment of deposits and pre-orders (EU Consumer Rights Directive; Russian Consumer Protection Law) was not researched.

## Minimum Viable Reservation Flow and Monthly Cost

### Takeaway
The minimum flow needs a form, a lead store, a Telegram alert, a consent checkbox and a privacy policy. A payment provider is needed only if a deposit is taken. Fixed monthly costs are near zero at launch volumes. Russian acquirer rates are unconfirmed, so their cost is an estimate.

### Cited Findings and Estimates

| Component | Required or optional | International (EU/US) | Russia/CIS | Monthly cost (confidence) |
|---|---|---|---|---|
| Lead store | Required | Google Sheet or HubSpot free (seat limits conflict) | Google Sheet or Bitrix24 free tier | 0 for free tiers (medium; HubSpot limits unresolved) |
| Telegram alert | Required | Telegram Bot API | Telegram Bot API (reachability not verified) | 0 (high for the API; no fee found in the FAQ) |
| Confirmation email | Recommended | Resend free: 3,000/month, 100/day (third-party) | Provider not chosen; Resend reachability unverified | 0 at launch volumes; $20/month Pro if above free limits (low to medium) |
| Consent checkbox and privacy policy | Required | Legal text (see Legal) | Legal text (see Legal) | Not a recurring cost (not researched) |
| Deposit payments | Optional | Stripe per transaction (not available in Russia); Paddle 5% + 50¢ | YooKassa or CloudPayments; individual rates, aggregators quote about 2.4-3.5% + VAT | Per transaction only; no confirmed fixed monthly fee (low) |
| SMS | Optional | Twilio not researched | Roughly 0.7-4 ₽ per message (one dated source) | About 210-1,200 ₽ per 300 messages, one-time (low) |
| Analytics | Optional | GA4 (not researched) | Yandex Metrika (not researched) | Not established |
| Consent banner | Required if analytics runs | Not researched | Not researched | Not established |

### Inferences
- A reservation form that collects name, phone, edition choice, consent and delivery method can run with no payment processor. Add one only after deciding the refund terms.
- Minimum viable setup: form, then a Google Sheet (or free CRM), a Telegram alert, a consent checkbox and a privacy policy. Add Resend for confirmation emails. Add a payment provider only if a deposit is taken.
- Stripe cannot serve Russian users, so the Russia stack needs a local acquirer.
- For a few hundred leads, the free-tier CRM and Telegram setup has no meaningful monthly fee. The real costs are per-transaction acquiring fees on deposits and any SMS.

### Gaps
- No confirmed official monthly fees for any provider. Fees above are from secondary sources.
- Whether YooKassa or CloudPayments support pre-order holds, and at what cost.
- Hosting, domain and CMS costs are covered by other researchers and are not included.
