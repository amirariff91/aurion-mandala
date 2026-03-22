# Aurion Mandala — Marketing Review

*Prepared: 2026-03-22. Frameworks applied: page-cro, copywriting, site-architecture, ai-seo.*

---

## 1. CRO Audit (page-cro framework)

### Page classification
- **Type:** Single-page marketing site functioning as both homepage and landing page
- **Primary conversion:** Email inquiry via `access@`, `design@`, or `inquiry@`
- **Traffic context:** Cold referral, direct, and limited organic — visitors arrive knowing the name but not the product

---

### 5-second test verdict

**Partial pass.** A technically literate visitor reads "Infrastructure for Verified Identity at Scale" and the sub-headline and understands the general category. The design signals credibility and seriousness immediately. However, the differentiation claim — *verification as a structural property of the record, not an operational step* — does not land above the fold. A cold enterprise CTO or investor walks away knowing what Aurion Mandala is in the broadest sense, but not why it's the right answer to a problem they probably haven't yet articulated this way. The page builds to the insight; it should open with it.

---

### Value proposition clarity

**Moderate.** The sub-headline (page.tsx:47–49) is the most accurate sentence on the page:

> "an identity verification layer built on Structured Verifiable Attributes, for organisations that need provenance, validation, and portability designed into the record itself."

This is clear for the target audience. The problem: it's 38 words of feature description with no contrast against the world it's replacing. The sharp version — "most systems bolt verification logic onto records after the fact; SVA encodes it into the structure" — only appears in the About section body copy (page.tsx:85–86).

The page leads with category positioning. It should lead with the architectural insight. The insight is the differentiation; the category is table stakes.

---

### Headline effectiveness

**Weak.** `"Infrastructure for Verified Identity at Scale"` (page.tsx:43–46) is indefensible as a differentiator. Okta, Onfido, and Ping Identity could each run this headline without changing a word. "At Scale" is the single most overused phrase in enterprise software. The headline names the category but not the proposition.

The H1 sits on one of the best structural concepts in this market — verification as architecture, not operations — and doesn't use it. This is the highest-impact single copy change on the page.

The eyebrow label `"Infrastructure Layer · Pre-Release"` (page.tsx:39) does two things simultaneously: signals exclusivity (good) and fires the "is this production-ready?" objection (bad) before the case for design-partner engagement has been made. Pre-release is a feature of the business model, not a risk caveat — the framing needs to reflect that.

---

### CTA analysis

**Mixed.** The CTA section (page.tsx:266–320) is well-structured for a selective-access model: three distinct paths, three email addresses, clear audience segmentation. The anchor behaviour (both hero CTAs pointing to `#apply`) is correct.

Issues by CTA:

| CTA | Issue |
|-----|-------|
| **Request Access** (hero, primary) | Generic. Doesn't communicate what the visitor receives. |
| **Apply as Design Partner** (hero, secondary) | Appears alongside Request Access targeting a different audience — creates mild decision paralysis for first-time visitors |
| **Request Access** (CTA section) | "We will respond with a technical brief and, where appropriate, a scoped evaluation proposal" — this is the strongest reciprocal benefit statement on the page. Should be visible higher up |
| **Apply as Design Partner** (CTA section) | Frames the relationship as one-sided contribution ("willing to deploy… provide structured feedback"). No reciprocal benefit stated. What does the design partner get? |
| **Institutional Inquiry** | "Institutional" is not investor language. Investors don't self-identify as institutions — VCs especially. |

---

### Trust signals & proof

**Good structure, missing the most important signal.** The Proof section (page.tsx:106–218) does real work:
- Architecture diagram demonstrates genuine system thinking
- Three proof bullets (engine built, partner integrations active, protocol defined) are the right claims for this stage
- The `<dl>` glossary is an unusual and effective credibility signal — it shows the system has been formally specified

**The single largest trust gap:** There is no founding team signal anywhere on the page. The "Who is behind this?" objection — identified in the marketing context as a live objection — goes entirely unaddressed. Even one sentence credentialing the technical lead transforms this from "interesting concept" to "real company." This is the highest-impact content addition that doesn't require a new page.

---

### Page flow / narrative

The current flow is: **Category → Mechanism → Credibility → Audience → Access**

This is a reasonable funnel but it buries audience qualification (the "Who We Work With" section) behind two sections of dense technical content. Visitors who are not the right fit may disengage before reaching it; visitors who are the right fit may not be validated quickly enough.

A stronger flow for a three-persona product: **Category → Problem/Contrast → Credibility → Audience (with early validation) → Access**

The "design partner window" urgency — *this is the moment to influence protocol design before the category crystallises* — never appears on the page. It exists in the marketing context (as a pull and timing signal) but is not surfaced for investors or design partners who respond to first-mover framing.

---

### Top 5 CRO issues, ranked by impact

1. **No founder/team signal.** The "who is behind this?" objection is the most common pre-commitment barrier for early-stage enterprise infrastructure. A single founding team section — or even one line in the footer or hero — would materially reduce this friction. Currently unaddressed.

2. **Headline doesn't differentiate.** "Infrastructure for Verified Identity at Scale" is category naming, not positioning. The USP (verification as structural property, not operational step) is the differentiator and should be in the H1.

3. **Design Partner CTA is one-sided.** The description asks partners to deploy and give feedback but doesn't say what they receive in return (protocol influence, early architecture access, bilateral evaluation). The value exchange is the point — make it explicit.

4. **No "why now" urgency signal.** The design-partner window is genuinely time-bounded — once the protocol crystallises, influence opportunity closes. This creates real first-mover urgency for both investors and design partners. It doesn't appear on the page.

5. **"Pre-Release" eyebrow fires risk objection too early.** The current label is read as a warning before the page has had a chance to reframe design-partner phase as a strategic advantage. Move the risk-reversal mechanism (controlled deployment, not general availability) above the objection rather than leaving it implicit.

---

## 2. Copy Audit (copywriting framework)

### 5 weakest copy moments with rewrites

---

**1. H1 headline (page.tsx:43–46)**

*Current:* `Infrastructure for Verified Identity at Scale`

*Problem:* Could be any IAM vendor's homepage. "At Scale" is empty. The USP — verification embedded as structure, not appended as metadata — is the only thing that makes this company meaningfully different from a dozen established platforms, and it's not in the headline.

*Rewrite options:*
- **A:** `Verification Built Into the Record. Not Added After the Fact.` — directly encodes the USP in customer language from the marketing context
- **B:** `Identity Verification Infrastructure Where Provenance Is Architecture` — technical, but the right signal for CTOs
- **C:** `When Regulators Ask How — Your Records Should Already Know` — problem-first, stakes-anchored; riskier tone but highest differentiation

---

**2. Hero sub-headline (page.tsx:47–49)**

*Current:* `Aurion Mandala is an identity verification layer built on Structured Verifiable Attributes, for organisations that need provenance, validation, and portability designed into the record itself.`

*Problem:* Lists features (provenance, validation, portability) without showing the contrast. The pain — that conventional systems don't have this — is missing. Without the contrast, "designed into the record itself" reads as a feature claim, not a structural distinction.

*Rewrite:* `An identity verification infrastructure layer built on Structured Verifiable Attributes. For organisations where compliance means proving how a credential was verified — not just that it was.`

The final clause activates the "audit trail that doesn't answer the regulator's question" pain point identified in the marketing context.

---

**3. CTA section header (page.tsx:270–271)**

*Current:* `Selective Access. Serious Applications Only.`

*Problem:* "Serious Applications Only" is defensive and slightly combative — it signals that the company expects low-quality inbound and is pre-emptively filtering it out. The reference brands (Stripe early, Linear) never signal exclusivity through rejection framing; they signal it through standards framing. The copy inadvertently positions Aurion Mandala as guarding against noise rather than operating at a level where alignment is assumed.

*Rewrite:* `Access by Arrangement.` followed by the existing body copy. The selectivity signal is already carried by the three-path CTA structure and the email-only mechanic. The header doesn't need to labour it.

---

**4. Design Partner CTA description (page.tsx:288–292)**

*Current:* `For teams willing to deploy SVA infrastructure in a live environment and provide structured feedback during the current build phase.`

*Problem:* "Willing to deploy" and "provide structured feedback" frames the design partner's role as contributor, not collaborator. The word "willing" implies burden. There is no statement of what the partner receives — and the marketing context is explicit that protocol influence is the core value proposition for this audience.

*Rewrite:* `For teams integrating SVA infrastructure into live environments during the current build phase. Design partners work directly with the protocol under real-world constraints and have direct input into architecture and roadmap decisions before the design phase closes.`

---

**5. Footer — Who we are (page.tsx:326–329)**

*Current:* Logo + `aurionmandala.com` + copyright. No human signal.

*Problem:* The footer is the last thing a qualified visitor sees before deciding whether to email. For a pre-revenue company asking enterprise CTOs and investors to reach out cold, the absence of any human identity at the bottom of the page is a missed trust-building moment. Even "Founded by [name(s)]. Building the next layer of identity infrastructure." would close the loop.

*Rewrite:* Pending founding team details from Jason. Placeholder: add a founding team line once available.

---

### Selectivity/exclusivity consistency check

**Consistent, but veering toward theater in one place.** The selectivity signal is well-maintained throughout: "Pre-Release" eyebrow, "not an open platform" in the partners section, three separate email addresses, "by prior arrangement only" for investor calls. The architecture is coherent.

The single inconsistency: "Serious Applications Only" in the CTA section header is exclusivity-via-rejection rather than exclusivity-via-standards. Every other selectivity signal on the page communicates "we are working in a specific way with specific organisations" — this one communicates "we are screening out the unworthy." The former is confident; the latter is slightly anxious. Remove it.

---

### Objection handling assessment

Cross-referencing the objections from the marketing context against what appears on the page:

| Objection | Handled? | Notes |
|-----------|----------|-------|
| "Is this production-ready?" | Partial | The Proof section establishes "real system," but doesn't directly address the question. The "Active Infrastructure. Real Constraints." h2 gestures at it without naming it. |
| "Why not use W3C VCs?" | Not addressed | This is the first technical objection for any enterprise CTO or adjacent infrastructure builder. It doesn't appear anywhere on the page. |
| "Is this a real company?" | Partially | Proof section addresses the technical reality, but the "who is behind this?" dimension is absent. |
| "What does integration look like?" | Partial | About section covers the non-disruption angle ("originating systems don't need to change") but it's buried in the third paragraph of body copy. |
| "Why engage now vs. wait?" | Not addressed | The design-partner window / first-mover timing signal is entirely absent. This is particularly damaging for investor positioning. |

The "Why not W3C VCs?" objection deserves particular attention: it's the technically sophisticated version of "why does this need to exist?" and is the most likely objection from the two most important personas (CTO and Strategic Collaborator). A single paragraph or even an FAQ entry would address it.

---

## 3. Site Architecture Assessment (site-architecture framework)

### Is single-page optimal for this stage?

**Yes.** The current goals are: identify 1–2 capital partners, establish a small design-partner cohort, communicate technical credibility to qualified cold visitors. A single-page architecture with three email CTAs is the correct fit for a pre-revenue, selective-access infrastructure product at design-partner stage. Multi-page expansion before product-market fit adds maintenance overhead without proportionate signal return.

The existing structure of 5 sections (Hero → About → Proof → Partners → Access) is the right hierarchy for the current brief.

### Recommended page structure for next phase (post design-partner cohort)

```
Homepage (/)
├── Technology (/technology)
│   ├── SVA Protocol (/technology/protocol)
│   └── Architecture Overview (/technology/architecture)
├── Design Partners (/design-partners)
│   └── [Case Study slug] (/design-partners/[slug])
├── Investors (/investors)
├── About (/about)
│   └── Team (/about/team)
├── Resources (/resources)
│   └── SVA vs W3C Verifiable Credentials (/resources/sva-vs-w3c-vc)
└── Legal (/privacy)
```

The `/resources/sva-vs-w3c-vc` page is the single highest-value SEO/AI citation asset available to this company and should be the first non-homepage page created. It directly addresses the primary technical objection and targets a well-defined comparison query with genuine AI citation potential.

### Immediate gaps

**1. No privacy policy page.** A compliance-grade identity verification infrastructure company asking regulated enterprises and financial institutions to engage — with no published privacy policy — is a subtle but real inconsistency. Enterprise CTOs and their legal/compliance teams will notice. This should exist at `/privacy` before any enterprise outreach is initiated.

**2. Footer has no legal links.** The footer (page.tsx:322–333) contains only logo, domain, and copyright. No privacy link, no contact link beyond the CTA section. For the target audience, this is a minor but visible gap.

**3. Copyright year is stale.** Footer reads `© 2025 Aurion Mandala` (page.tsx:329). Current year is 2026. For an infrastructure company, outdated page details are a trust signal in the wrong direction.

**4. No dedicated `#team` anchor.** Given that team credibility is the single largest trust gap, when a team section is added it should have its own anchor and potentially appear in the nav.

---

## 4. AEO/AI-SEO Assessment (ai-seo framework)

### Entity clarity

**Good foundation, missing reinforcement.** The Organization schema (layout.tsx:64–88) is well-formed: `@type`, `@id`, `name`, `url`, `logo`, `description`, `foundingDate`, `email`, `contactPoint`, and `knowsAbout` are all present. The `knowsAbout` array covers the right topics (SVA, Identity Verification Infrastructure, W3C Verifiable Credentials, Decentralized Identity).

Gaps:
- **No `sameAs` property.** Without links to LinkedIn, Crunchbase, Wikipedia, or other authoritative sources, AI systems have no corroborating entity signals. Even one `sameAs` link to a LinkedIn company page materially strengthens entity recognition.
- **No `founder` or `employee` properties.** These strengthen the entity graph and allow AI systems to connect the organisation to its people. Requires founding team details from Jason.
- **`foundingDate: '2024'`** — this should be confirmed as accurate and updated to include a full ISO date if available.

### Semantic structure

**Stronger than most sites at this stage.** Several choices actively support AI extraction:

- **`<dl>` glossary** (page.tsx:202–216) — the most AI-extractable unit on the page. The definitions of SVA, Mandala Transformation Engine, and Design Partner are clean, self-contained, and directly answer "What is X?" queries. This is well-executed.
- **`<article>` wrapper on hero** (page.tsx:38) — semantically correct.
- **H1/H2/H3 hierarchy** is consistent and non-decorative.
- **SVG `<title>` and `<desc>`** (page.tsx:126–127) are present and descriptive.

Gaps:
- **SVG content is not extractable by AI systems.** The architecture diagram (page.tsx:120–176) contains meaningful text — Attribute Decomposition, Provenance Verification, Constraint Validation, Structural Restructuring — rendered inside SVG elements. AI crawlers cannot extract SVG text as semantic content. The four processing steps should be replicated in semantic HTML, either as a visible list adjacent to the diagram or as a visually-hidden `<ul>` for AI parsers.
- **No FAQ section or FAQPage schema.** The five objections in the marketing context are perfect FAQ material. FAQ schema is the most reliable schema type for AI extraction. Its absence is the largest structural SEO gap.

### AI citation readiness

**Underdeveloped, but structurally positioned.** Current state:

| Check | Status |
|-------|--------|
| Clear definition in first paragraph | Partial — About section has it, not hero |
| Self-contained answer blocks | Yes — `<dl>` glossary only |
| Statistics with cited sources | No |
| Comparison content (SVA vs. alternatives) | No — critical gap |
| FAQ section | No |
| FAQPage schema | No |
| Expert/author attribution | No |
| Organization schema | Yes — well-formed |
| Recently dated content | No "last updated" visible |
| Semantic H2/H3 structure | Yes |

**Content depth concern:** The page has approximately 700–800 words of body copy. AI citation tools weight content length and depth as authority signals. A single-page site with minimal body copy will struggle to be cited as an authoritative source compared to a competitor who publishes a 2,000-word explainer on "What are Structured Verifiable Attributes?" The `/resources/sva-vs-w3c-vc` comparison page suggested in the architecture section would be 10× more citable than any optimisation to the current homepage.

**Highest-value AI citation gap:** There is no content anywhere on the site that answers "What is the difference between SVA and W3C Verifiable Credentials?" — this is the query that would surface Aurion Mandala to the exact audiences who matter (CTOs evaluating identity infrastructure, investors researching the space). The marketing context has the answer. It needs to be on the web.

**robots.txt:** Cannot verify from code. Ensure GPTBot, ClaudeBot, PerplexityBot, and Google-Extended are not blocked.

---

## 5. Prioritised Improvement Plan

### P0 — Apply to code now (no external dependencies)

These are changes directly implementable from existing content, requiring no new assets or client input.

**P0.1 — Fix copyright year**
page.tsx:329 — `© 2025` → `© 2026`. One-line fix. Stale years undermine credibility for a compliance-focused audience.

**P0.2 — Strengthen H1 headline**
page.tsx:43–46. Replace `Infrastructure for Verified Identity at Scale` with a headline that encodes the structural USP. Recommended: `Verification Built Into the Record. Not Added After the Fact.` or `Identity Verification Infrastructure Where Provenance Is Architecture`.

**P0.3 — Rewrite hero sub-headline**
page.tsx:47–49. Add the contrast ("conventional systems treat verification as an operational step") to the existing definition. The differentiation claim needs to appear above the fold, not in the third paragraph of the About section.

**P0.4 — Remove "Serious Applications Only" from CTA header**
page.tsx:271. Replace with `Access by Arrangement.` The three-path email structure already communicates selectivity; the defensive qualifier weakens the brand voice.

**P0.5 — Rewrite Design Partner CTA description**
page.tsx:288–292. Add the reciprocal value statement: "Design partners have direct input into protocol and architecture decisions before the design phase closes." Frame as collaboration, not contribution.

**P0.6 — Rename "Institutional Inquiry" CTA**
page.tsx:295. Investors don't self-identify as institutions. Rename to `Investor Inquiry` or `Capital & Strategic Inquiry`.

**P0.7 — Add SVG text as semantic HTML**
page.tsx:153–156. The four Mandala Engine process steps (Attribute Decomposition, Provenance Verification, Constraint Validation, Structural Restructuring) are only in the SVG. Add an adjacent or visually-hidden `<ul>` replicating them so AI crawlers and screen readers can access the content.

**P0.8 — Add FAQPage schema + visible FAQ section**
Five objections from the marketing context map directly to FAQ entries. Add a minimal FAQ section (e.g., between Proof and Partners) with FAQPage schema. This is the single highest-ROI AI SEO change available without new content creation:
- "Is the Mandala transformation engine production-ready?"
- "How does SVA differ from W3C Verifiable Credentials?"
- "What does integration look like for existing systems?"
- "What does a design partner engagement involve?"
- "Why engage now rather than wait for general availability?"

**P0.9 — Add `sameAs` to Organization schema**
layout.tsx. Add `sameAs: ['https://www.linkedin.com/company/aurion-mandala']` (or equivalent). Requires confirming the correct LinkedIn URL but no new content.

**P0.10 — Add "design partner window" urgency copy**
Somewhere between the Proof section and the CTA section, add a sentence that communicates timing: the current build phase is the window in which partners have direct protocol influence. This addresses the "why now?" objection for both investors and design partners. Can be a single line in the CTA section intro (page.tsx:273).

---

### P1 — Apply soon (requires content or assets from client)

**P1.1 — Founding team section**
Highest-impact content gap on the page. Even a minimal "Built by [name(s)] with [relevant background]" removes the most common pre-commitment barrier for enterprise and investor audiences. Requires Jason's input on founding team context (currently marked as pending in product-marketing-context.md).

**P1.2 — Add privacy policy page**
Create `/privacy` with a standard infrastructure-company privacy policy. Add link to footer. Required before any enterprise or investor outreach — compliance-focused organisations will look for it.

**P1.3 — Add `sameAs` entity links once profiles are confirmed**
LinkedIn, Crunchbase, possibly Wikidata. Requires verifying correct profile URLs.

**P1.4 — Add "last updated" signal to Proof section**
The proof points (engine built, partner integrations active, protocol defined) should carry a freshness date. AI systems weight recency. Even "as of Q1 2026" is better than undated claims.

**P1.5 — Replace `© 2025` text with dynamic year**
Low priority but best practice: `{new Date().getFullYear()}` in the footer prevents future staleness.

---

### P2 — Future phase (post design-partner cohort)

**P2.1 — SVA vs. W3C Verifiable Credentials comparison page**
`/resources/sva-vs-w3c-vc` — the highest AI citation value asset available to this company. Directly answers the primary technical objection, targets a well-defined query, and positions Aurion Mandala as the definitional authority on SVA. 1,500–2,500 words. Add Article schema, comparison table, FAQ schema.

**P2.2 — Design Partners programme page**
`/design-partners` — once the cohort exists and partners can be named or quoted, this page becomes the social proof hub. Case studies, outcomes, and direct quotes from design partners are the most powerful trust signals available for the next wave of enterprise prospects.

**P2.3 — Technology / Protocol page**
`/technology/protocol` — a public-facing protocol specification or technical overview. This is the content that gets cited in academic papers, industry blogs, and eventually AI answers. It also differentiates Aurion Mandala from vaporware — a formal protocol specification is proof of work.

**P2.4 — About / Team page**
`/about` — founding team story, mission, and relevant credentials. Expands the entity graph for AI systems and addresses investor due diligence needs.

**P2.5 — Wikipedia entity presence**
A Wikipedia page for Aurion Mandala (once the company has sufficient public footprint) would be the single highest-leverage AI citation asset possible. Wikipedia is cited in ~7.8% of all ChatGPT answers. Requires: real-world notability (press coverage, published protocol, design partner announcements).

---

*End of review.*
