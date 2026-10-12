# Claude connectors for a single-page luxury watch website

Checked 2026-10-12. Scope: Claude connectors (directory connectors and custom MCP connectors) relevant to building and running a single-page site with a 3D scroll product view, editable prices, a reservation form and a configurator. Vendor docs were fetched for none of the services; registry facts come from the in-session connector registry lookup (SearchMcpRegistry and ListConnectors, both 2026-10-12). That registry has no public URL, so those rows cite [REG](https://claude.ai/customize/connectors), the page where the same listings are browsed. I did not open that page, since it requires sign-in. Anthropic docs were fetched directly.

## 1. Which connectors does the project need, and which are optional?

### Takeaway
No connector is strictly required. A connector lets Claude act in a service during a chat or in Claude Code. The live website never calls a connector, so the site still needs its own hosting, its own data access for prices and reservations, and its own form handling. Connectors make these easier to manage from Claude.

### Cited Findings
- A connector "links Claude to an outside app or service ... so Claude can find information there and take actions for you" — [Get started with connectors](https://claude.com/docs/connectors/overview)
- Connectors work in claude.ai (web), the Claude desktop app, the mobile app, Claude Code, and Cowork. Connectors added in claude.ai "are available in Claude Code ... when you sign in with your Claude account" — [Get started with connectors](https://claude.com/docs/connectors/overview)
- Before adding a connector you need "A Claude account" and "An account with the service ... That service ... may require its own account or paid plan" — [Get started with connectors](https://claude.com/docs/connectors/overview)
- Custom connector by URL works on "Free, Pro, Max, Team, and Enterprise plans"; "On the Free plan, you can add one custom connector" — [Add a connector that isn't in the directory](https://claude.com/docs/connectors/custom/add-unlisted)
  - Conflict: a third-party Civic guide says "custom MCP connectors need a paid plan and the free tier doesn't support external integrations" (search snippet, [Civic docs](https://docs.civic.com/civic/quickstart/clients/claude-web)). The official page above is preferred.
- On Team and Enterprise, an Owner adds a connector for the organization and members then connect with their own account — [Connectors directory](https://claude.com/docs/connectors/directory)
- Anthropic's supported-country list does not include Russia. The policy says "Any country or region not listed is unsupported" and also covers "Use by persons while physically located in an unsupported region" — [Supported countries](https://www.anthropic.com/supported-countries) (page copyright 2026, no last-updated date)

### Inferences
- Probably required, but not as connectors: a code workspace (Claude Code, or Claude Artifacts) and one hosting target. A host can also deploy from a Git repository without an MCP connector.
- Optional, by job:
  - Deploy and hosting: one of Vercel, Netlify, Cloudflare (see section 3).
  - Editable prices and lead storage: Google Sheets, Airtable or Notion. Supabase only if a real database with auth is needed.
  - Reservation alerts: Slack, or email through Resend.
  - Design handoff: Figma (design context for code) or Canva (asset export).
  - Payments: Stripe only if reservations take a deposit. A plain reservation form does not need it.
  - CRM: HubSpot or Zoho CRM only if leads go into a sales pipeline.
  - Domain: GoDaddy or MuuMuu, only if a domain must be managed from Claude.
- Because connectors serve Claude and not site visitors, "editable prices" needs two parts: Claude edits the sheet or table through a connector, and the live page reads it through its own API key or backend. Only the first part is a connector.
- Market is not stated, so the Russia labels in section 3 are given as they are.

### Gaps
- The video's exact stack is unknown, so the mapping from features to connectors is my inference, not a confirmed match.
- Whether a deposit or payment step is in the video's site is not known.

## 2. Official Claude connectors versus third-party or community servers

### Takeaway
The Connectors Directory mixes connectors from Anthropic and from third-party developers. The labels Verified and Community describe Anthropic's review level, not who built the server. I could not determine the publisher or the label for most listings.

### Cited Findings
- The directory "lists connectors from Anthropic and from third-party developers" — [Connector verification](https://claude.com/docs/connectors/verification)
- Verified: Anthropic "has tested a Verified connector's tools for quality and compatibility"; "It isn't a security audit or a guarantee of how the connector will perform" — [Connector verification](https://claude.com/docs/connectors/verification)
- Community: "A third-party developer built a Community connector. Anthropic screens Community connectors before listing them but hasn't reviewed them in depth" — [Connector verification](https://claude.com/docs/connectors/verification)
- Custom: "You added a Custom connector yourself, and Anthropic hasn't reviewed it" — [Connector verification](https://claude.com/docs/connectors/verification)
- The label "affects how the connector is displayed and discovered in the directory, not how the connector itself functions" — [Connector verification](https://claude.com/docs/connectors/verification)
- Submissions are listed as Community by default and "may then escalate" to Verified — [Connector verification](https://claude.com/docs/connectors/verification)
- Conflict: an unofficial aggregator (claudemarket.ai) says "Verified" means listed at claude.com/connectors and reports 1,625 connectors. This conflicts with the official definition above, and the count is unconfirmed — [Claude Connectors Directory aggregator](https://claudemarket.ai/connectors)

Method: the registry output gives name, description, sample tools and install state, but no publisher or label field. The directory's Discover page shows the labels and needs sign-in, so I did not read it. Listing names that match a vendor (for example Vercel, Figma, Stripe) suggest vendor operation, but this is a name-based inference and not verified.

### Inferences
- The official definition makes "official" the wrong filter. The user should check the publisher and the Verified or Community label under Customize > Connectors > Discover before connecting.
- A custom connector added by URL is never reviewed by Anthropic, whatever the vendor.
- Community connectors "have the same capabilities and access as any connector you grant" — [Connector verification](https://claude.com/docs/connectors/verification). Treat them as trust decisions.

### Gaps
- Publisher and Verified or Community label for each listed connector: not retrieved.
- Which listed connectors Anthropic itself builds: not identified from fetched docs.
- GitHub: no directory listing was returned by the registry search. A GitHub MCP is present in this session's tool list (mcp__github__*), but I did not verify where it comes from.
- Telegram and Firebase: no connector was returned by any registry search.

## 3. Per-connector details: function, account or permissions, how to add, Russia

### Takeaway
Most relevant services have a Claude connector in the registry (not GitHub, Telegram or Firebase). What each needs as a token or scope was not verified against vendor docs. Russia: the Claude side is unsupported (Anthropic list), so all connectors are unusable from Russia through Claude under Anthropic's policy. Vendor-side availability in Russia is unverified.

### Cited Findings

General access and permission rules (apply to every connector):
- Adding: Customize > Connectors > Discover > Connect to Claude, then sign in at the service's page and approve the access requested — [Get started](https://claude.com/docs/connectors/overview)
- Some connectors first ask for a server URL or a hosting region — [Get started](https://claude.com/docs/connectors/overview)
- Tool permissions can be set per tool to Always allow, Needs approval or Blocked — [Get started](https://claude.com/docs/connectors/overview)
- Review requested permission scopes at sign-in; a developer can change exposed tools at any time — [Connector verification](https://claude.com/docs/connectors/verification)
- Russia, all rows: Anthropic does not list Russia — [Supported countries](https://www.anthropic.com/supported-countries)

Per connector (tool names and descriptions from the registry; account needs are the general rule above unless noted):

| Connector | What it can do for this site | Account or permission | Russia | Source |
|---|---|---|---|---|
| Vercel | Lists and inspects projects, deployments and events; searches Vercel docs | Vercel account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Netlify | Deploys and manages websites; tool groups for deploy, project, team and user services | Netlify account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Cloudflare Developer Platform | Accounts, KV namespaces, Workers; storage and compute. DNS is not in the visible tool list | Cloudflare account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Supabase | Projects, database and auth management; create, pause and cost-confirm steps are in the tool list, so project-creating actions may ask for cost confirmation | Supabase account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Figma | Design context, screenshots, metadata, variables and design-system rules from Figma files; generates diagrams. Used for code from designs, not for 3D models | Figma account; scopes not verified. Note: the local plugin entry plugin:design:figma failed to connect in this session (ERR_PROXY_TUNNEL, 403) | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors); session notice |
| Canva | Searches, gets, imports and exports Canva designs and their pages | Canva account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Webflow | Describes itself as able to "Design pages, manage CMS content, add motion, analyze traffic, and launch the whole site". A possible all-in-one for design, CMS and hosting | Webflow workspace; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) (vendor claim, not checked) |
| Google Sheets | Reads and updates spreadsheets, values, formulas. Fits an editable price list | Google account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Google Drive | Searches, reads and creates files. Shows as not connected in this account | Google account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors); [ListConnectors](https://claude.com/docs/connectors/overview) |
| Airtable | Lists bases and tables; creates tables and records. Fits a reservation or lead table | Airtable account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Notion | Searches, fetches, creates and updates pages and databases. Fits a reservation or content database | Notion workspace; scopes not verified. Note: plugin:design:notion failed to connect in this session (403) | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Slack | Sends messages, searches, reads channels and threads, creates canvases. Fits reservation alerts | Slack workspace; scopes not verified. Note: plugin:design:slack failed to connect in this session (403) | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Resend | Email for developers: transactional mail, broadcasts, templates, API-key creation. Fits reservation confirmations | Resend account; API keys are involved; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| HubSpot | CRM objects, properties, marketing email analytics. Only if leads go to a CRM | HubSpot account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| Stripe | Search and read of the Stripe API, plus stripe_api_write and balance summary. Write access is present, so use restricted permissions. Only if deposits are taken | Stripe account; scopes not verified | Via Claude: no. Vendor: not verified. The stripe.com fetch failed with a DNS error (getaddrinfo ENOTFOUND) | [REG](https://claude.ai/customize/connectors); fetch error |
| GoDaddy | Domain search and suggestions, no sign-in needed | None needed (authless entry) | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |
| MuuMuu Domain (byGMO Pepabo) | Lists owned domains, DNS records, nameservers, renewal settings. Purchase is completed on the MuuMuu site. A Japanese registrar | MuuMuu account; scopes not verified | Via Claude: no. Vendor: unverified | [REG](https://claude.ai/customize/connectors) |

Not found, or not verified:
- GitHub: not returned by the registry; a GitHub MCP (mcp__github__*) is in this session's tool list.
- Telegram: no connector was returned by any search.
- Firebase: no connector was returned by any search.

### Inferences
- Video features against connectors:
  - 3D scroll view: no connector. Model and render assets come from outside this list (see the design and animation research notes).
  - Editable prices: Google Sheets or Airtable can be edited through a connector. The live page still needs its own read access, so the connector alone does not update the live site.
  - Reservation form: stored in Airtable, Notion, Google Sheets or Supabase; alerts by Slack or Resend. Telegram has no connector found, so that route needs a custom server.
  - Configurator: front-end logic only, no connector.
  - Payments: Stripe only if deposits are taken.
- Smallest reasonable set: Claude Code, GitHub, one host (Vercel, Netlify or Cloudflare), and one data store (Google Sheets or Airtable). Everything else is optional.
- Russia: no Claude connector is usable from Russia under Anthropic's stated policy. Whether the vendors also block Russia is unknown. This is the most important caveat for this user and needs confirmation.

### Gaps
- Token types, scopes and permissions for each connector: vendor docs not fetched.
- Vendor-side availability in Russia for every connector: not checked. The Stripe page could not be fetched.
- Verified or Community label per connector: not retrieved.
- Telegram and Firebase: no connector found.
- Connection status is for this session's account only.

## 4. Does a Claude feature replace a separate app?

### Takeaway
Partly. Claude Code replaces a local code editor for building. Artifacts, as described in this session's tools, can publish a single HTML page on claude.ai with a shared database. That could replace a small backend for a prototype or reservation log, but whether it can serve a public domain was not verified. Connectors manage existing services; they do not replace hosting.

### Cited Findings
- Connectors added in claude.ai are available in Claude Code and Cowork — [Get started with connectors](https://claude.com/docs/connectors/overview)
- Directory connectors work across claude.ai, Claude Desktop, mobile, Claude Code and Cowork — [Connectors directory](https://claude.com/docs/connectors/directory)
- Webflow's registry description claims it can design pages, manage CMS and "launch the whole site" — [REG](https://claude.ai/customize/connectors). Vendor claim, not checked.
- Lovable, Macaly Cloud, Floot and Softr are listed as app builders with hosting and databases (registry descriptions and tool lists only) — [REG](https://claude.ai/customize/connectors)
- Artifacts: the page is "private by default", and an artifact can keep a small shared database for records (session Artifact tool specification, no public URL checked)

### Inferences
- Webflow, or one of the builders, could replace a separate code project, host and CMS. Its cost and fit were not researched; the hosting research notes cover this.
- An Artifact could hold a reservation log and price table for a prototype. For a public site, the hosting path is still needed.
- Claude Docs can hold copy and notes for the site, but that does not replace a site host.

### Gaps
- Whether an Artifact can serve a custom domain or production traffic: not verified.
- Whether any connector covers the video's 3D or configurator work: no.
- Webflow's full scope and pricing: not researched here.
