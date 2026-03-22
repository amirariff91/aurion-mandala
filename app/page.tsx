import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f0ece4] font-sans">
      {/* ─── Navigation ─── */}
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur-sm">
        <Image src="/logo.jpg" alt="Aurion Mandala" width={180} height={50} className="h-10 w-auto object-contain" />
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="hidden md:block text-xs tracking-widest uppercase text-[#9a9590] hover:text-[#f0ece4] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#proof"
            className="hidden md:block text-xs tracking-widest uppercase text-[#9a9590] hover:text-[#f0ece4] transition-colors duration-300"
          >
            Proof of Concept
          </a>
          <a
            href="#apply"
            className="text-xs tracking-widest uppercase border border-[#C9A84C]/40 text-[#C9A84C] px-4 py-2 hover:bg-[#C9A84C]/10 transition-colors duration-300"
          >
            Apply as Design Partner
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-20 overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-dot-grid opacity-100 pointer-events-none" />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0a0a_100%)] pointer-events-none" />

        <article className="relative max-w-4xl animate-fade-in-up">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-8 font-medium">
            Infrastructure Layer · Pre-Release
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#f0ece4] mb-8 text-balance">
            Verification Built Into the <span className="text-[#C9A84C]">Record.</span><br />
            Not Added After the Fact.
          </h1>
          <p className="text-base md:text-lg text-[#9a9590] leading-relaxed max-w-xl mb-6 font-light">
            An identity verification infrastructure layer built on Structured Verifiable Attributes. For organisations where compliance means proving how a credential was verified — not just that it was.
          </p>
          <p className="text-[#524e4a] text-xs font-light leading-relaxed max-w-xl mb-10">
            The design-partner phase is a defined window. Partners in this phase have direct input into protocol and architecture decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C9A84C] text-[#0a0a0a] text-sm font-medium tracking-widest uppercase hover:bg-[#d4b55e] transition-colors duration-300"
            >
              Request Access
            </a>
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#1f1f1f] text-[#9a9590] text-sm font-light tracking-widest uppercase hover:border-[#C9A84C]/30 hover:text-[#f0ece4] transition-colors duration-300"
            >
              Apply as Design Partner
            </a>
          </div>
        </article>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] tracking-widest uppercase text-[#9a9590]">Scroll</span>
          <div className="w-px h-8 bg-[#9a9590]" />
        </div>
      </section>

      {/* ─── What is Aurion Mandala ─── */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-28 md:py-36 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">What We&nbsp;Are</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] leading-tight">
                A new layer beneath the identity stack
              </h2>
            </div>
            <div className="space-y-7 text-[#9a9590] font-light leading-relaxed">
              <p>
                Aurion Mandala is an identity verification infrastructure layer that introduces Structured Verifiable Attributes (SVA) as the foundational data model. Unlike conventional verification systems that treat verification as an operational step, Mandala embeds verification as a structural property of the credential record itself — enabling provenance, validation, and portability by design.
              </p>
              <p>
                Structured Verifiable Attributes — SVAs — are the foundational unit of the Aurion Mandala system. Unlike conventional credential formats, SVAs are designed for composability: each attribute carries its provenance, its constraints, and its verification method as intrinsic structure, not metadata appended after the fact.
              </p>
              <p>
                The Mandala layer sits between raw identity data and any downstream consumer — whether that is an enterprise access system, a regulatory reporting pipeline, or a partner verification service. It transforms, validates, and restructures SVAs without ever requiring the originating system to change its own architecture.
              </p>
              <p>
                The result is a clean separation between identity assertion and identity verification — a distinction most systems blur, and which Aurion Mandala treats as an architectural boundary.
              </p>
              <div className="pt-4 border-t border-[#1f1f1f]">
                <p className="text-[#f0ece4] text-sm font-medium tracking-wide">
                  Aurion Mandala treats verification as a structural property of the record, not an operational step added downstream.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Proof of Concept ─── */}
      <section id="proof" className="px-6 md:px-12 lg:px-24 py-28 md:py-36 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Technical Credibility</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-5 leading-tight">
            Active Infrastructure. Real Constraints.
          </h2>
          <p className="text-[#9a9590] text-base font-light mb-16 max-w-xl">
            The current phase is focused on design-partner evaluation, implementation testing, and protocol refinement.
          </p>

          {/* Architecture Diagram */}
          <div className="mb-16 overflow-x-auto">
            <div className="min-w-[600px]">
              <svg
                viewBox="0 0 960 240"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-4xl mx-auto"
                aria-label="SVA to Mandala architecture diagram"
              >
                <title>Aurion Mandala Architecture: SVA Data Layer → Mandala Engine → Verified Identity Record</title>
                <desc>Diagram showing how raw Structured Verifiable Attribute inputs flow through the Mandala Transformation Engine — which performs attribute decomposition, provenance verification, constraint validation, and structural restructuring — to produce a verified, portable identity record.</desc>
                <defs>
                  <filter id="mandala-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#C9A84C" floodOpacity="0.45" />
                  </filter>
                </defs>

                {/* ── Box 1: SVA Data Layer ── */}
                <rect x="8" y="60" width="220" height="120" rx="3" fill="#111111" stroke="#C9A84C" strokeWidth="0.75" />
                <text x="118" y="97" textAnchor="middle" fill="#f0ece4" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="500" letterSpacing="0.5">SVA Data Layer</text>
                <line x1="34" y1="107" x2="202" y2="107" stroke="#1f1f1f" strokeWidth="0.5" />
                <text x="118" y="126" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Structured Verifiable</text>
                <text x="118" y="141" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Attributes · Raw Input</text>
                <text x="118" y="162" textAnchor="middle" fill="#C9A84C" fontSize="9" fontFamily="system-ui, sans-serif" letterSpacing="1" fontWeight="500">INPUT</text>

                {/* ── Arrow 1 ── */}
                <line x1="228" y1="120" x2="308" y2="120" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="4 3" />
                <polygon points="304,116 314,120 304,124" fill="#C9A84C" />
                <text x="268" y="109" textAnchor="middle" fill="#9a9590" fontSize="9" fontFamily="system-ui, sans-serif" letterSpacing="0.5">transform</text>

                {/* ── Box 2: Mandala Engine (larger, central) ── */}
                <rect x="318" y="28" width="324" height="184" rx="3" fill="#0f0f0f" stroke="#C9A84C" strokeWidth="1.5" filter="url(#mandala-glow)" />
                <rect x="318" y="28" width="324" height="30" rx="3" fill="#C9A84C" fillOpacity="0.07" />
                <text x="480" y="49" textAnchor="middle" fill="#C9A84C" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="1.5">MANDALA ENGINE</text>
                <line x1="344" y1="58" x2="616" y2="58" stroke="#1f1f1f" strokeWidth="0.5" />
                <text x="480" y="90" textAnchor="middle" fill="#f0ece4" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="500">Transformation Layer</text>
                <text x="480" y="114" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Attribute Decomposition</text>
                <text x="480" y="131" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Provenance Verification</text>
                <text x="480" y="148" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Constraint Validation</text>
                <text x="480" y="165" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Structural Restructuring</text>

                {/* ── Arrow 2 ── */}
                <line x1="642" y1="120" x2="728" y2="120" stroke="#C9A84C" strokeWidth="0.75" strokeDasharray="4 3" />
                <polygon points="724,116 734,120 724,124" fill="#C9A84C" />
                <text x="685" y="109" textAnchor="middle" fill="#9a9590" fontSize="9" fontFamily="system-ui, sans-serif" letterSpacing="0.5">emit</text>

                {/* ── Box 3: Verified Identity Record ── */}
                <rect x="738" y="60" width="214" height="120" rx="3" fill="#111111" stroke="#C9A84C" strokeWidth="0.75" />
                <text x="845" y="97" textAnchor="middle" fill="#f0ece4" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="500">Verified Identity</text>
                <text x="845" y="113" textAnchor="middle" fill="#f0ece4" fontSize="12" fontFamily="system-ui, sans-serif" fontWeight="500">Record</text>
                <line x1="762" y1="123" x2="928" y2="123" stroke="#1f1f1f" strokeWidth="0.5" />
                <text x="845" y="141" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Structured · Portable</text>
                <text x="845" y="156" textAnchor="middle" fill="#9a9590" fontSize="10" fontFamily="system-ui, sans-serif">Verifiably Provenant</text>
                <text x="845" y="173" textAnchor="middle" fill="#C9A84C" fontSize="9" fontFamily="system-ui, sans-serif" letterSpacing="1" fontWeight="500">OUTPUT</text>
              </svg>
            </div>
            <p className="text-center text-[10px] tracking-[0.2em] uppercase text-[#524e4a] mt-4">
              Architecture Overview
            </p>
          </div>

          {/* Semantic list of engine steps for AI parsers and screen readers */}
          <ul className="sr-only">
            <li>Attribute Decomposition: Raw input attributes are decomposed into their constituent SVA components, preserving schema structure and source provenance.</li>
            <li>Provenance Verification: Each attribute&apos;s origin, validation chain, and constraint metadata are verified against the SVA specification.</li>
            <li>Constraint Validation: Attribute constraints — type, range, dependency, and composition rules — are validated end-to-end before record assembly.</li>
            <li>Structural Restructuring: Validated attributes are restructured into a schema-compliant SVA record, with verification embedded as structural properties of the output.</li>
          </ul>

          {/* Bullet points */}
          <div className="grid sm:grid-cols-3 gap-px bg-[#1f1f1f]">
            {[
              {
                label: "Core engine built",
                body: "The Mandala transformation engine processes SVA payloads end-to-end, with provenance tracking across all attribute mutations.",
              },
              {
                label: "Partner integrations active",
                body: "Early integration work is underway in controlled environments to test edge cases in attribute composition and constraint resolution.",
              },
              {
                label: "Verification protocol defined",
                body: "The formal verification protocol is specified, with test vectors covering the primary attack surface against attribute spoofing.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#0d0d0d] p-7">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mb-5" />
                <p className="text-[#f0ece4] text-sm font-medium mb-3">{item.label}</p>
                <p className="text-[#9a9590] text-sm font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Key term definitions — semantic reference for AI parsers */}
          <dl className="mt-14 pt-10 border-t border-[#1f1f1f] space-y-5">
            <div>
              <dt className="text-[#524e4a] text-[10px] tracking-[0.2em] uppercase font-medium mb-1">SVA (Structured Verifiable Attribute)</dt>
              <dd className="text-[#524e4a] text-xs font-light leading-relaxed max-w-2xl">A credential format that encodes verification rules, attribute constraints, and provenance metadata directly into the data structure.</dd>
            </div>
            <div>
              <dt className="text-[#524e4a] text-[10px] tracking-[0.2em] uppercase font-medium mb-1">Mandala Transformation Engine</dt>
              <dd className="text-[#524e4a] text-xs font-light leading-relaxed max-w-2xl">The processing layer that converts raw attribute inputs into verified, schema-compliant SVA records.</dd>
            </div>
            <div>
              <dt className="text-[#524e4a] text-[10px] tracking-[0.2em] uppercase font-medium mb-1">Design Partner</dt>
              <dd className="text-[#524e4a] text-xs font-light leading-relaxed max-w-2xl">An organisation participating in the controlled deployment phase to test SVA infrastructure in real-world integration scenarios.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ─── Who We Work With ─── */}
      <section id="partners" className="px-6 md:px-12 lg:px-24 py-28 md:py-36 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Partner Criteria</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-5 leading-tight">
            Who We Work With
          </h2>
          <p className="text-[#9a9590] text-sm font-light mb-16 max-w-md">
            This is not an open platform. Access is extended to a small number of organisations whose requirements and capabilities align with where we are building.
          </p>

          {/* Editorial 2-column layout: large left + 2 stacked right */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-px bg-[#1f1f1f]">
            {/* Left: Investors — large featured card */}
            <div className="bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#C9A84C] mb-6">Investors</h3>
                <p className="text-[#9a9590] text-sm font-light leading-relaxed max-w-sm">
                  Pre-revenue stage investors with portfolio exposure to identity infrastructure, enterprise software, or regulated data systems. We are not fundraising broadly — we are identifying one or two aligned capital partners.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-[#1f1f1f]">
                <p className="text-[#524e4a] text-xs tracking-[0.15em] uppercase">Capital alignment · Early stage</p>
              </div>
            </div>

            {/* Right: 2 stacked cards */}
            <div className="flex flex-col gap-px bg-[#1f1f1f]">
              <div className="bg-[#0a0a0a] p-8 flex-1">
                <h3 className="font-serif text-lg text-[#C9A84C] mb-4">Enterprise Partners</h3>
                <p className="text-[#9a9590] text-sm font-light leading-relaxed">
                  Organisations with active, complex identity verification needs — particularly those operating across jurisdictions or inside regulated industries where attribute provenance is a compliance requirement, not a preference.
                </p>
              </div>
              <div className="bg-[#0a0a0a] p-8 flex-1">
                <h3 className="font-serif text-lg text-[#C9A84C] mb-4">Strategic Collaborators</h3>
                <p className="text-[#9a9590] text-sm font-light leading-relaxed">
                  Teams building adjacent infrastructure — credential issuers, verification networks, access control systems — where native SVA support would create compound value for both sides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section id="faq" className="px-6 md:px-12 lg:px-24 py-28 md:py-36 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Common Questions</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-16 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0 divide-y divide-[#1f1f1f]">
            {[
              {
                q: "Is the Mandala transformation engine production-ready?",
                a: "The core engine is built and processing SVA payloads end-to-end with full provenance tracking. We are not in general availability — we are in a controlled design-partner phase, running real integrations in live environments to stress-test edge cases in attribute composition and constraint resolution. Production-grade does not mean publicly available.",
              },
              {
                q: "How does SVA differ from W3C Verifiable Credentials?",
                a: "SVA is designed to complement, not replace, W3C Verifiable Credentials. The distinction is structural: W3C VCs provide a container format for credentials, but do not natively encode attribute-level verification rules, constraints, and provenance as intrinsic to the data structure. SVA fills that gap — verification logic is not applied to the record after the fact, it is part of the record's definition.",
              },
              {
                q: "What does integration look like for existing systems?",
                a: "The Mandala layer sits between your existing data sources and downstream consumers. Originating systems do not need to change their architecture. Design-partner engagements begin with a technical brief and a scoped evaluation proposal — the first conversation is technical, not commercial.",
              },
              {
                q: "What does a design partner engagement involve?",
                a: "Design partners deploy SVA infrastructure in a live environment, work directly with the protocol under real-world constraints, and participate in structured evaluation cycles. In return, design partners have direct input into architecture and roadmap decisions before the design phase closes. This is a bilateral technical relationship, not a beta programme.",
              },
              {
                q: "Why engage now rather than wait for general availability?",
                a: "The design-partner phase is the window in which partners have direct influence over protocol design, attribute schema, and integration architecture. Once the protocol crystallises, that influence closes. The organisations working with us now are shaping the infrastructure — not inheriting it.",
              },
            ].map((item) => (
              <div key={item.q} className="py-10">
                <p className="font-serif text-lg text-[#C9A84C] mb-4 leading-snug">{item.q}</p>
                <p className="text-[#9a9590] text-sm font-light leading-relaxed max-w-3xl">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="apply" className="px-6 md:px-12 lg:px-24 py-28 md:py-36 border-t border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-xl mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4">Access</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] mb-5 leading-tight">
              Access by Arrangement.
            </h2>
            <p className="text-[#9a9590] text-sm font-light leading-relaxed">
              Each inquiry is reviewed directly. If the context is right, we follow up with a technical conversation — not a sales call.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#1f1f1f]">
            {[
              {
                cta: "Request Access",
                description:
                  "For organisations evaluating Aurion Mandala as identity infrastructure. We will respond with a technical brief and, where appropriate, a scoped evaluation proposal.",
                href: "mailto:access@aurionmandala.com",
                variant: "primary",
              },
              {
                cta: "Apply as Design Partner",
                description:
                  "For teams integrating SVA infrastructure into live environments during the current build phase. Design partners work directly with the protocol under real constraints — with direct input into architecture and roadmap decisions before the design phase closes.",
                href: "mailto:design@aurionmandala.com",
                variant: "secondary",
              },
              {
                cta: "Capital & Strategic Inquiry",
                description:
                  "For investors, strategic advisors, or institutions exploring alignment. Introductory calls are by prior arrangement only.",
                href: "mailto:inquiry@aurionmandala.com",
                variant: "secondary",
              },
            ].map((item) => (
              <div key={item.cta} className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col">
                <p className="text-[#9a9590] text-sm font-light leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className={
                    item.variant === "primary"
                      ? "inline-flex items-center justify-center px-6 py-3 bg-[#C9A84C] text-[#0a0a0a] text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#d4b55e] transition-colors duration-300"
                      : "inline-flex items-center justify-center px-6 py-3 border border-[#1f1f1f] text-[#9a9590] text-xs font-light tracking-[0.15em] uppercase hover:border-[#C9A84C]/30 hover:text-[#f0ece4] transition-colors duration-300"
                  }
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Image src="/logo.jpg" alt="Aurion Mandala" width={180} height={50} className="h-10 w-auto object-contain mb-1" />
            <span className="text-[#524e4a] text-xs">aurionmandala.com</span>
          </div>
          <p className="text-[#524e4a] text-xs">
            &copy; 2026 Aurion Mandala. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
