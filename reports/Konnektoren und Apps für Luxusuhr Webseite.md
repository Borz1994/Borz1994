# Wenige Dienste genügen, Connectors bleiben optional

**Kurzantwort:** Für eine Seite wie im Video brauchen Sie **keinen Claude-Connector**. Connectors geben Claude Zugriff auf Dienste im Chat und in Claude Code; die Live-Seite ruft sie nie auf. **Notwendig** sind ein Code-Arbeitsplatz wie Claude Code (Inferenz), eine Scroll-Animation (GSAP mit ScrollTrigger), ein Hosting für die statische Seite, eine Ablage für Reservierungen, ein Benachrichtigungskanal (etwa ein Telegram-Bot) und ein Datenschutzhinweis mit Einwilligungs-Häkchen, weil das Formular Namen und Telefonnummer erfasst. **Optional** sind ein CMS für Preise und Auflagenzahl, eine Zahlungsanbindung (nur bei Anzahlung), E-Mail-Bestätigungen, SMS und ein CRM. Ob die 3D-Drehung aus Bildsequenz oder echtem 3D entsteht, ist offen. Alle Preise stammen aus Drittquellen, weil die offiziellen Seiten im Test nicht erreichbar waren. Die Monatskosten liegen bei etwa 0 bis 20 $ (EU/US) bzw. 0 bis 3.600 ₽ (Russland/GUS), jeweils plus Domain.

## 1. Bau und Animation: GSAP ist kostenlos, 3D bleibt offen

**GSAP mit ScrollTrigger** ist laut Notizen kostenlos, auch kommerziell, ohne Lizenzschlüssel ([GSAP-README auf jsDelivr](https://cdn.jsdelivr.net/npm/gsap@3.15.0/README.md)). Die Aussage stammt aus einem Suchauszug, weil der direkte Abruf scheiterte; eine Drittseite stützt sie nur sekundär ([skills.sh](https://www.skills.sh/greensock/gsap-skills/gsap-plugins)).

**Bildsequenz oder echtes 3D ist eine Schlussfolgerung, keine belegte Aussage.** Vorgerenderte Frames, die ScrollTrigger abspielt, brauchen keine WebGL-Szene und sind einfacher; echtes 3D lohnt nur bei freier Drehung oder wechselnden Materialien. Three.js, React Three Fiber, Lottie und Blender wurden nicht recherchiert. Keine untersuchte Plattform belegt eine eingebaute 360-Grad-Produktansicht.

| Option | Markt | Preis laut Notizen | Russland |
|---|---|---|---|
| Framer | INT | Basic etwa 10 $, Pro 30 $ pro Monat; Quellen widersprechen sich (unverifiziert, [vp0.com](https://vp0.com/blogs/framer-pricing-plans-2026/)) | Auf der Sperrliste ([Framer](https://framer.com/help/articles/restricted-countries)) |
| Webflow | INT | Starter gratis, Basic etwa 14 bis 15 $ (unverifiziert, [Landerlab](https://landerlab.io/blog/webflow-pricing)) | Zahlungen blockiert laut Nutzerantrag von 2022; schwach belegt ([Webflow](https://wishlist.webflow.com/ideas/WEBFLOW-I-4872)) |
| Tilda | INT, RU-Kandidat | Personal 15 $, jährlich 10 $ (unverifiziert, [ComparEdge](https://comparedge.com/tools/tilda/pricing)) | Nicht geprüft |
| Figma | INT, RU | Gratis-Starter, für eine Seite wahrscheinlich ausreichend (Inferenz) | Neue Kunden in Russland können keinen Bezahltarif kaufen ([Figma](https://help.figma.com/hc/en-us/articles/4685987514519-FAQ-for-users-in-Russia-and-Belarus)) |

**Empfehlung EU/US:** GSAP im eigenen Code auf einem Gratis-Host; wer keinen Code schreiben will, nimmt Webflow Basic. **Empfehlung Russland/GUS:** GSAP selbst gehostet (Inferenz). Tilda ist der einzige Builder-Kandidat, sein Zugang ist ungeprüft. Framer scheidet aus, und Wix verarbeitet laut Wix seit dem 7. März 2022 keine Zahlungen in Russland ([Wix](https://support.wix.com/article/available-payment-providers-in-your-country)).

## 2. Hosting, Domain und CMS: Vercel-Gratistarif scheidet für Verkäufe aus

**EU/US:** Der Vercel-Gratistarif gilt laut Drittquellen nur für private Nutzung; verkaufende Seiten brauchen Pro mit 20 $ pro Nutzer und Monat (unverifiziert, [Deploywise](https://deploywise.dev/blog/vercel-free-tier-limits-2026)). **Empfehlung:** Netlify, Cloudflare Pages oder GitHub Pages, sobald der Gratistarif gewerbliche Nutzung erlaubt. Die Notizen konnten das bei keinem der drei prüfen. Für .com fanden sie weder Preise noch Regeln.

**Russland/GUS:** Eine russische Adresse ist zuverlässiger (Inferenz). Eine Vercel-Custom-Domain war in einem Community-Thread nicht erreichbar, und russische Provider schränken Cloudflare-geschützte Seiten ein ([The Record](https://therecord.media/cloudflare-russia-restricting-access-crackdown)). **Empfehlung:** Beget, Timeweb oder Reg.ru. Beget nennt 3.600 ₽ pro Monat für 6 Kerne und 12 GB (unverifiziert, [WhTop](https://www.whtop.com/ru/plans/beget.com/148818)), für eine Seite überdimensioniert (Inferenz). Timeweb-Preise widersprechen sich (ab 188 ₽ und ab 6,46 $, beide undatiert, unverifiziert). Reg.ru bietet laut vc.ru eine .ru-Domain kostenlos zum Hosting ([vc.ru](https://vc.ru/top-raiting/3048130-reyting-vps-s-serverami-v-rossii)). Ob Ausländer .ru- oder .рф-Domains registrieren dürfen, ist ungeklärt.

**CMS:** **Sanity** bietet im Gratistarif laut Drittquelle 10.000 Dokumente, 1 Mio. CDN-Anfragen, 100 GB Medien und 20 Nutzer (unverifiziert, [Agentdeals](https://agentdeals.dev/vendor/sanity)). **Empfehlung EU/US:** Sanity für Preise, Auflagen und Fotos. **Russland/GUS:** Sanity ist nicht auf Erreichbarkeit getestet; Strapi läuft auf dem eigenen VPS, sein Kern ist laut Drittquelle frei ([Tech Insider](https://tech-insider.org/?p=19376)). Den Auflagenzähler („254 / 300“) pflegt man am einfachsten von Hand; eine Live-Zählung braucht einen Server (Inferenz).

**Formularablage EU/US:** **Supabase** Free umfasst laut Drittquelle 2 Projekte, 500 MB Datenbank, 50.000 aktive Nutzer und 500.000 Funktionsaufrufe; Projekte pausieren nach einer Woche ohne Aktivität (unverifiziert, [Automation Atlas](https://automationatlas.io/answers/supabase-free-tier-limits-2026/)).

## 3. Reservierung, Zahlung, CRM und Benachrichtigungen: Die Anzahlung entscheidet den Rest

Das Beispielvideo hat im Formular keine Zahlungsfelder; ob eine Anzahlung nötig ist, ist eine Produktentscheidung.

**EU/US:** **Stripe** nimmt laut Stripe-Hilfeseite keine Kunden in Russland, der Ukraine oder Belarus an ([Stripe](https://support.stripe.com/questions/impact-of-sanctions-on-russia-and-belarus)); die Seite stammt laut Suchauszug von 2023. Online halten Kartenreservierungen meist **7 Tage** (unverifiziert, [Stripe](https://docs.stripe.com/payments/capture-later)), zu kurz für Vorbestellungen mit späterem Versand. Deshalb die Anzahlung sofort abbuchen und den Rest separat (Inferenz). Alternative: **Paddle** mit 5 % plus 50 ¢ pro Transaktion (unverifiziert, [Spendflo](https://spendflo.com/vendors/paddle)); seine Eignung für physische Waren ist ungeprüft.

**Russland/GUS:** **YooKassa** oder **CloudPayments**, mit individuell verhandelten Sätzen. Laut quasa.io gilt bei YooKassa ab 1. Januar 2026 ein Kartensatz von 3,5 % plus 22 % MwSt. auf die Gebühr (unverifiziert, [quasa.io](https://quasa.io/ru/media/yukassa-ili-cloudpayments-podpiski-menyayut-vybor-platezhnogo-servisa)). **PayPal** hat den Dienst in Russland im März 2022 eingestellt ([Engadget/Reuters](https://www.engadget.com/paypal-suspends-services-russia-193756988.html)).

**CRM:** Für ein paar hundert Leads reicht eine Tabelle. **EU/US:** HubSpot-Gratisangaben widersprechen sich; der Starter kostet 20 $ pro Sitz (unverifiziert, [TinyCommand](https://tinycommand.com/blogs/hubspot-pricing-explained)). **Russland/GUS:** **Bitrix24** mit Gratistarif ist der naheliegende Start (Inferenz); eine Quelle von 2025 nennt Bezahltarife von 1.743 bis 22.094 ₽ pro Monat, Herkunft unbestätigt (unverifiziert, [Infullbroker](https://www.infullbroker.ru/articles/luchshie-crm-sistemy-2025/)). Pipedrive und amoCRM wurden nicht recherchiert.

**Benachrichtigungen:** Der **Telegram-Bot** ist laut Notizen kostenlos, mit etwa einer Nachricht pro Sekunde je Chat und 20 pro Minute in Gruppen (unverifiziert, [Telegram-FAQ](https://core.telegram.org/bots/faq)); exakte Grenzen nennt Telegram nicht ([python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot/wiki/Avoiding-flood-limits)). Für Kundenbestätigungen bietet **Resend** einen Gratistarif mit 3.000 E-Mails im Monat und 100 am Tag (unverifiziert, [WP Mail SMTP](https://wpmailsmtp.com/resend-review/)). **SMS** kostet in Russland laut Kod.ru (August 2026) für kleinere Organisationen 0,7 bis 4 ₽ je Nachricht (unverifiziert, [Kod.ru](https://kod.ru/banki-khotiat-lghoty-na-sms)). Die Erreichbarkeit von Telegram und Resend in Russland ist ungeprüft; Twilio wurde nicht recherchiert.

**Analyse:** Die Notizen nennen Yandex Metrika als üblich in Russland, ohne Beleg. Ein russischer Anwaltsblog verlangt dafür eine Einwilligung ([ppt.ru](https://ppt.ru/columns/jurist-v-it/kuki-i-personalnye-dannye-chto-trebuet-152-fz)). Ein Meta-Pixel für russische Besucher ist nicht einzuplanen, denn eine Schlagzeile meldet ein Verbot als extremistisch; der Artikel wurde nicht gelesen ([Sostav.ru](https://www.sostav.ru/blogs/254470/74998)). GA4 Consent Mode wurde nicht recherchiert.

## 4. Rechtliches: Einwilligung und Serverstandort bestimmen das Formular

Die folgenden Punkte sind eine Orientierung und keine Rechtsberatung.

Ein Formular mit Namen und Telefonnummer braucht laut Notizen einen Datenschutzhinweis und ein Häkchen, das die Person aktiv setzen muss. Die Inhalte nach DSGVO Artikel 13 und das Verbot vorausgewählter Kästchen stammen aus allgemeinem Wissen; die Gesetzestexte wurden nicht abgerufen.

Nach **152-FZ Artikel 18 Absatz 5** in der Fassung von 2015 mussten Betreiber, die Daten russischer Bürger online erheben, Datenbanken in Russland nutzen ([The Moscow Times](https://www.themoscowtimes.com/archive/b2b-russian-data-localization-in-brief)). Das Bundesgesetz Nr. 23-FZ vom 28. Februar 2025 fasst die Regel neu, in Kraft seit 1. Juli 2025. Laut ALRUD-Zusammenfassung verbietet sie die Erhebung über Datenbanken außerhalb Russlands und gilt auch für Auftragsverarbeiter ([ALRUD](https://www.alrud.com/publications/1688)). Für das CRM heißt das: Daten russischer Kunden in Russland speichern (Inferenz). Ob das für ein im Ausland gehostetes Formular gilt, ist ungeklärt.

Bei Cookies widersprechen sich die Anwälte: Einer verlangt Einwilligung vor Metrika, ein anderer sieht keine ausdrückliche Pflicht für Ablehnen-Buttons und verweist auf 266-FZ ([harant.ru](https://harant.ru/questions/q-104978/)). Ein Banner mit Ablehnen-Option ist die sicherere Wahl (Inferenz). Übermittlungen an US-Dienste wie Stripe, Resend oder HubSpot brauchen laut Notizen einen Mechanismus wie das EU-US Data Privacy Framework oder Standardvertragsklauseln; das ist ungeprüft. Verbraucherrecht für Anzahlungen wurde nicht recherchiert.

## 5. Claude-Connectors: Keiner ist nötig, Russland fehlt in der Länderliste

Ein Connector verbindet Claude mit einem Dienst für Chat und Claude Code ([Anthropic](https://claude.com/docs/connectors/overview)). Die Notizen nennen als kleinste Auswahl Claude Code, GitHub, einen Host (Vercel, Netlify oder Cloudflare) und einen Datenspeicher (Google Sheets oder Airtable); alles andere ist optional (Inferenz).

| Aufgabe | Connectors in der Registry | Hinweis |
|---|---|---|
| Hosting | Vercel, Netlify, Cloudflare | Nur Verwaltung aus Claude |
| Preise, Reservierungen | Google Sheets, Airtable, Notion, Supabase | Live-Seite braucht eigenen Zugriff |
| Alarme, Zahlung | Slack, Resend, Stripe | Stripe nur mit eingeschränkten Rechten |
| CRM, Design, Domain | HubSpot, Figma, Canva, GoDaddy, MuuMuu Domain | HubSpot nur bei Vertriebspipeline |
| Builder | Webflow | Herstellerangabe „alles aus einer Hand“, ungeprüft |

Kein Connector gefunden wurde für Telegram und Firebase. GitHub hat keinen Registry-Eintrag; in dieser Sitzung ist ein GitHub-MCP verfügbar, dessen Herkunft ungeprüft ist. Die Labels **Verified** und **Community** beschreiben die Prüftiefe von Anthropic, nicht den Hersteller; Herausgeber und Label gehören vor dem Verbinden geprüft ([Anthropic](https://claude.com/docs/connectors/verification)).

**Russland:** Anthropic listet Russland nicht und erfasst laut Richtlinie auch die Nutzung aus einer nicht unterstützten Region ([Anthropic](https://www.anthropic.com/supported-countries)). Nach diesem Wortlaut sind Connectors dort nicht nutzbar. Ob die Dienste selbst sperren, ist ungeprüft.

## Offene Punkte und Prüfbedarf

| Punkt | Stand laut Notizen | Prüfen bei |
|---|---|---|
| Offizielle Seiten nicht erreichbar | DNS-Fehler oder Proxy-Sperre bei Framer, Webflow, Vercel, Netlify, Stripe, GSAP, Figma u. a.; Preise und Limits stammen aus Drittquellen, die sich widersprechen | Preisseiten der Anbieter |
| Russische Rechtsaussagen | 152-FZ Artikel 18 Absatz 5 (2015), Neufassung 2025 und Datenlokalisierung nur aus Sekundärquellen | Gesetzestext bei consultant.ru oder garant.ru; Roskomnadzor |
| Gosuslugi-Pflicht für .ru, .рф, .su | Forum nennt 1. September 2026, Artikel-URL 15. September 2026. Beide Daten liegen vor dem heutigen Datum (12. Oktober 2026); unklar, ob die Pflicht gilt und Ausländer betrifft | cctld.ru, RU-CENTER |
| Länderliste der Claude-Connectors | Russland fehlt; die Seite trägt kein Datum | anthropic.com/supported-countries |
| GSAP-Lizenz | Nur über Suchauszug und Drittseite belegt | Lizenz auf gsap.com und im npm-Paket |
| Nicht recherchiert | GA4 Consent Mode, Pipedrive, amoCRM, Twilio, Three.js, Lottie, Blender, Squarespace, Lernkurven | Eigene Recherche |
| Weitere Lücken | Gratistarife von Netlify, Cloudflare Pages, GitHub Pages; .com- und .ru-Preise; offizielle YooKassa-Tarife; PayPal-Status; Erreichbarkeit von Telegram, Resend, Sanity, Supabase aus Russland | Anbieterseiten; Test aus russischem Netz |

## Mindeststack und Monatskosten je Markt

| Baustein | EU/US | Russland/GUS |
|---|---|---|
| Bau und Animation | GSAP + ScrollTrigger, Code mit Claude Code | GSAP selbst gehostet |
| Hosting | Gratis-Host mit gewerblicher Nutzung (zu prüfen) | Kleinster Tarif bei Beget, Timeweb oder Reg.ru |
| Domain | .com (Preis unbekannt) | .ru oder .рф bei russischem Registrar (Preis unbekannt) |
| CMS | Sanity Free | Strapi auf dem VPS oder Sanity (Erreichbarkeit offen) |
| Reservierungen | Supabase Free | Formular auf dem VPS, Ablage Bitrix24 Free |
| Alarm | Telegram-Bot, Resend Free | Telegram-Bot (Erreichbarkeit offen) |
| Zahlung | keine; Anzahlung über Stripe oder Paddle | keine; Anzahlung über YooKassa oder CloudPayments |
| Recht | Datenschutzhinweis, Häkchen, Cookie-Banner bei Analyse | Datenschutzhinweis, Einwilligung, Metrika erst nach Einwilligung |
| Connectors | keine nötig | keine nutzbar |
| Monatskosten | 0 bis etwa 20 $ plus Domain (unverifiziert) | 0 bis etwa 3.600 ₽ plus Domain (unverifiziert) |

**EU/US:** Die Obergrenze ist Vercel Pro; Supabase Pro (25 $ pro Projekt) oder Sanity Growth (15 $ pro Sitz, unverifiziert) kämen bei Wachstum hinzu. **Russland/GUS:** Die Obergrenze ist der Beget-Tarif; eine 30-Tage-Testphase kostet nichts (unverifiziert, [vc.ru](https://vc.ru/dev/2991557-luchshie-hostingi-dlya-internet-magazina)). SMS und Zahlungsgebühren (aggregatorseitig 2,4 bis 3,5 % plus MwSt., unverifiziert) fallen nur bei Bedarf an. Domainkosten sind in beiden Märkten unbekannt.
