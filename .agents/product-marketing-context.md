# Product Marketing Context — Aurion Mandala

*Last updated: 2026-03-22*

---

## Product Overview

**One-liner:** Identity verification infrastructure that embeds verification, provenance, and portability as structural properties of the credential record itself.

**What it does:** Aurion Mandala is an identity verification infrastructure layer built on Structured Verifiable Attributes (SVA) — a foundational data model where verification rules, attribute constraints, and provenance metadata are encoded directly into the data structure, not appended after the fact. The Mandala Transformation Engine sits between raw identity data and any downstream consumer (enterprise access systems, regulatory reporting pipelines, partner verification services), processing SVA payloads end-to-end without requiring originating systems to change their own architecture. The core innovation is treating verification as an architectural boundary, not an operational step.

**Product category:** Identity verification infrastructure / digital identity infrastructure layer. Sits between raw identity data and downstream systems. Not an end-user identity product; not a credential issuer; not an IAM platform. The "shelf" is: infrastructure for organisations solving compliance-grade identity verification at scale.

**Product type:** Infrastructure layer / B2B enterprise software. Pre-revenue, design-partner phase.

**Business model:** Not a SaaS product. Selective access model. Design partner engagements during current build phase. Revenue model will likely be infrastructure licensing or deployment fees once production-ready. Currently: no pricing, no open onboarding, no self-serve path.

---

## Target Audience

**Target companies:**
- Regulated enterprises with complex, cross-jurisdictional identity verification requirements (financial services, healthcare, legal, government)
- Organisations where attribute provenance is a compliance requirement, not a preference
- Pre-revenue stage investors with portfolio exposure to identity infrastructure, enterprise software, or regulated data
- Teams building adjacent identity infrastructure (credential issuers, verification networks, access control systems)

**Decision-makers:**
- CTOs and CISOs at regulated enterprises evaluating identity infrastructure
- Pre-revenue/early-stage infrastructure investors (VCs and family offices focused on deep tech / enterprise infra)
- Technical co-founders or infrastructure leads at adjacent identity companies
- Strategic advisors and institutional partners exploring alignment

**Primary use case:** Replacing or augmenting identity verification systems that treat verification as an afterthought — enabling clean architectural separation between identity assertion and identity verification, with full attribute provenance.

**Jobs to be done:**
- Achieve compliance-grade attribute provenance across jurisdictional boundaries without re-architecting originating systems
- Embed verification as a structural property of credentials so downstream consumers can trust the record itself
- Evaluate and partner with an emerging infrastructure layer before it becomes commoditised

**Use cases:**
- Cross-jurisdictional identity verification for financial institutions with regulatory reporting obligations
- Access control systems requiring verified, composable attribute sets (not just raw credentials)
- Credential issuers and verification networks needing native SVA composability
- Regulatory compliance pipelines requiring auditable attribute provenance

---

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| **Infrastructure Investor** (Decision Maker / Financial Buyer) | Technical moat, market timing, team credibility, path to revenue | Finding early-stage infrastructure plays with genuine differentiation before the category crystallises | First-access to a technically differentiated identity infrastructure layer at a moment when the design-partner window is still open |
| **Enterprise CTO / CISO** (Technical Decision Maker) | Attribute provenance, compliance auditability, system portability, integration complexity | Current systems blur identity assertion and verification — creating fragility at compliance boundaries | Verification embedded in the record itself; clean architectural separation; no requirement to re-architect existing systems |
| **Strategic Collaborator / Infrastructure Builder** (Technical Champion) | Interoperability, composability, protocol alignment, mutual value | Integrating with identity systems that don't natively understand structured, composable attributes | Native SVA support creates compound capability and interoperability without custom bridging work |

---

## Problems & Pain Points

**Core problem:** Conventional identity verification systems treat verification as an operational step added downstream — a check that happens *to* a credential, not a property *of* it. This means provenance, constraints, and verification logic are appended as metadata after the fact. At compliance boundaries — particularly across jurisdictions — this creates fragility, integrity gaps, and audit failures.

**Why alternatives fall short:**
- **W3C Verifiable Credentials / DIDs:** Standards-based but don't natively encode attribute-level verification rules, constraints, and provenance as intrinsic structure. Verification logic lives outside the record.
- **Traditional verification platforms (Jumio, Onfido, Persona):** Handle document verification and liveness checks but operate at the edge — they produce verified outputs without structural guarantees about what happened and why. Not designed as infrastructure layers.
- **Enterprise IAM (Okta, Ping Identity):** Identity management and SSO, not verification infrastructure. Don't address attribute provenance or composable verification at the record level.
- **Custom-built systems:** High integration debt; no standard model for attribute provenance; brittle across jurisdictions.

**What it costs them:**
- Compliance failures at jurisdictional boundaries (regulatory risk, fines)
- Integration complexity when consuming partial or mismatched credentials
- Inability to audit attribute provenance — "we verified this, but not how or when"
- Ongoing engineering debt maintaining verification logic outside the data model

**Emotional tension:**
- For enterprise buyers: compliance risk and the fear of a system that looks like it works until a regulator asks a question it can't answer
- For investors: the fear of being too early — or of missing the infrastructure layer that becomes foundational to the next generation of identity systems

---

## Competitive Landscape

**Direct competitors:** W3C Verifiable Credentials ecosystems (Spruce, Veramo, Dock) — same problem space but attribute-level structural verification is not native. Falls short because verification logic remains external to the record.

**Secondary competitors:** Traditional identity verification platforms (Jumio, Onfido, Persona, Stripe Identity) — solve point-of-verification but don't provide structural guarantees or composable provenance. Falls short because they produce verified outputs, not verifiable records with embedded logic.

**Indirect competitors:** Enterprise IAM (Okta, Ping, ForgeRock), custom-built systems, federated identity approaches — solve authentication and access management but not verification infrastructure at the attribute level. Falls short because they blur identity assertion and identity verification.

**The real competition:** Inertia. Organisations with "good enough" existing systems and no regulatory trigger to change.

---

## Differentiation

**Key differentiators:**
- SVA as foundational data model: verification rules, constraints, and provenance encoded directly into the data structure — not metadata, not external logic
- Clean architectural separation between identity assertion and identity verification — most systems blur this boundary; Aurion Mandala treats it as a hard constraint
- Composability: each attribute is a self-contained unit carrying its provenance and verification method, enabling downstream consumers to trust and combine attributes without re-verification
- Layer sits between raw data and downstream consumer — no originating system re-architecture required

**How we do it differently:** The Mandala Transformation Engine processes SVA payloads end-to-end, handling attribute decomposition, provenance verification, constraint validation, and structural restructuring as a single pass. Verification is not a check on the output — it is constitutive of the record structure.

**Why that's better:** Records produced by Mandala are structurally verifiable — downstream systems can trust them because verification is built into their form, not because they trust the upstream system that generated them. This matters most at compliance boundaries, across jurisdictions, and in high-stakes integrations.

**Why partners choose us:** We are at an inflection point before the category crystallises. The design-partner window provides real influence over protocol design. The architecture solves a problem that becomes harder to solve later (retrofit provenance into legacy systems).

---

## Objections

| Objection | Response |
|-----------|----------|
| "Is this production-ready?" | We're in design-partner phase — not production for general deployment, but the core engine is built, partner integrations are active, and the formal verification protocol is specified with test vectors. This is a real system under controlled stress-testing, not a concept deck. |
| "Why not use W3C VCs or existing standards?" | SVA is designed to complement, not replace, existing standards. The gap we address is structural: W3C VCs don't natively encode attribute-level verification logic, constraints, and provenance as intrinsic to the data structure. SVA fills that gap. |
| "Is Aurion Mandala a real company with real traction?" | Pre-revenue, by design. The design-partner model is intentional — we are not broadcasting to a mass market. We are working with a small number of organisations whose requirements and capabilities align with where we are building. The selective access framing is the proof, not a hedge. |
| "What does integration actually look like?" | The Mandala layer sits between your existing data sources and downstream consumers. Originating systems don't need to change. Design-partner engagements begin with a technical brief and scoped evaluation proposal. |
| "Who is behind this?" | [Pending: founding team context from Jason] |

**Anti-persona:**
- Organisations looking for a plug-and-play KYC/AML solution (use Jumio, Onfido, or Persona)
- Startups without complex, cross-jurisdictional identity requirements
- Teams wanting open access, no-friction onboarding, or self-serve evaluation
- Investors requiring revenue traction before engagement

---

## Switching Dynamics

**Push:** Current verification systems fail at compliance boundaries — attribute provenance is either absent or fragile. When a regulator or enterprise partner asks "prove how this was verified," legacy systems can't answer structurally.

**Pull:** Structural verification reduces compliance risk in a way operational verification never can. SVA composability enables portability and interoperability that organisations cannot retrofit into existing architectures.

**Habit:** Existing IAM investments, vendor lock-in, familiarity with W3C standards, and the enormous inertia of "good enough" verification systems that haven't been tested at regulatory boundaries yet.

**Anxiety:** Pre-revenue technology risk. Maturity and longevity of the platform. Integration effort for the first deployment. Whether the SVA model will become an industry standard or remain a proprietary approach.

---

## Customer Language

**How they describe the problem:**
- "Attribute provenance is a compliance requirement, not a preference"
- "We verify at the edge but there's no structural guarantee downstream"
- "Cross-jurisdictional verification is a mess — every system handles it differently"
- "We're bolting verification logic onto records after the fact"
- "Audit trail exists but it's not part of the record"

**How they describe the solution (aspirational):**
- "Verification built into the record itself"
- "Portability by design, not by integration"
- "Clean separation between assertion and verification"
- "Infrastructure that doesn't require us to re-architect"

**Words to use:** infrastructure, verification, provenance, composability, structural, architectural boundary, portability, attribute, constraint, compliance-grade, design partner, selective access, controlled deployment

**Words to avoid:** SaaS, sign up, free trial, pricing, features, product, onboarding, scale (as a buzzword), "innovative," "seamless," "cutting-edge," "next-generation"

**Glossary:**

| Term | Meaning |
|------|---------|
| SVA (Structured Verifiable Attribute) | A credential format encoding verification rules, attribute constraints, and provenance metadata directly into the data structure |
| Mandala Transformation Engine | The processing layer converting raw attribute inputs into verified, schema-compliant SVA records |
| Design Partner | An organisation in the controlled deployment phase, stress-testing SVA infrastructure in real-world integration scenarios |
| Identity assertion | A claim about an identity — what the record says |
| Identity verification | The structural guarantee that the claim is valid, with auditable provenance — what the record proves |
| Attribute provenance | The traceable origin and validation history of each attribute within a credential record |

---

## Brand Voice

**Tone:** Formal, precise, authoritative. Unhurried. Confident without self-promotion. This is not a startup pitching — it is an infrastructure layer being selectively introduced.

**Style:** Technical enough to be credible to CTOs, accessible enough for investors and strategic partners who aren't reading the source code. Dense but not academic. Every sentence earns its place. No filler, no buzzwords, no exclamation points.

**Personality:** Deliberate · Selective · Rigorous · Ahead of the curve

**Reference brands (tone, not aesthetics):** Stripe early communications, Linear release notes, Notion's early positioning docs. The voice of people who have thought carefully about something hard and are sharing it with people who can appreciate the thinking.

---

## Proof Points

**Technical proof:**
- Core Mandala transformation engine built — processes SVA payloads end-to-end with provenance tracking across all attribute mutations
- Partner integrations active in controlled environments — edge cases in attribute composition and constraint resolution under active testing
- Formal verification protocol specified — test vectors covering primary attack surface against attribute spoofing

**Key copy line (use verbatim):**
> "Currently working with select partners to deploy and stress-test SVA infrastructure."

**Customers / Design Partners:** [Pending disclosure — not yet public]

**Testimonials:** [Pending — design-partner phase]

**Value themes:**

| Theme | Proof |
|-------|-------|
| Technically real, not conceptual | Core engine built; protocol specified; partner integrations active |
| Selective, not broadcast | 3 CTAs, each requiring context; no open access; no pricing; by prior arrangement only |
| Ahead of the curve | Addresses a structural gap in current credential standards that is not yet widely articulated |
| Safe to engage | Technical brief provided on inquiry; scoped evaluation proposal for enterprise; no sales call |

---

## Goals

**Business goal:** Identify and engage 1–2 aligned capital partners and a small number of design partners for controlled SVA infrastructure deployment and validation.

**Conversion action:** Submit inquiry via one of the 3 email CTAs:
- `access@aurionmandala.com` — enterprise evaluation
- `design@aurionmandala.com` — design partner application
- `inquiry@aurionmandala.com` — investor / institutional

**Current metrics:** Pre-revenue. No public metrics. Success at this stage = quality of inbound inquiries, not volume.
