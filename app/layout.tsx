import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: 'Aurion Mandala — Structured Verifiable Attribute Infrastructure',
  description: 'Aurion Mandala is an identity verification infrastructure layer built on Structured Verifiable Attributes (SVA). Currently working with select design partners to deploy and validate SVA infrastructure.',
  keywords: ['verifiable credentials', 'identity verification infrastructure', 'structured verifiable attributes', 'SVA infrastructure', 'digital identity platform', 'enterprise identity verification', 'W3C verifiable credentials', 'decentralized identity'],
  authors: [{ name: 'Aurion Mandala' }],
  creator: 'Aurion Mandala',
  metadataBase: new URL('https://www.aurionmandala.com'),
  alternates: {
    canonical: 'https://www.aurionmandala.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.aurionmandala.com',
    title: 'Aurion Mandala — Structured Verifiable Attribute Infrastructure',
    description: 'An identity verification infrastructure layer built on Structured Verifiable Attributes. Selective access for design partners, investors, and strategic collaborators.',
    siteName: 'Aurion Mandala',
    images: [{ url: '/logo.jpg', width: 670, height: 210, alt: 'Aurion Mandala' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurion Mandala — Structured Verifiable Attribute Infrastructure',
    description: 'Identity verification infrastructure layer built on SVA. Design partner applications open.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.aurionmandala.com',
              name: 'Aurion Mandala',
              url: 'https://www.aurionmandala.com',
              logo: 'https://www.aurionmandala.com/logo.jpg',
              description: 'Aurion Mandala is an identity verification infrastructure layer built on Structured Verifiable Attributes (SVA). Currently in design-partner phase, working with select partners on deployment and validation.',
              foundingDate: '2024',
              email: 'inquiry@aurionmandala.com',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Partnership Inquiry',
                email: 'inquiry@aurionmandala.com',
              },
              knowsAbout: [
                'Structured Verifiable Attributes',
                'Identity Verification Infrastructure',
                'W3C Verifiable Credentials',
                'Decentralized Identity',
                'Enterprise Identity Systems',
                'Digital Credential Verification',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is the Mandala transformation engine production-ready?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The core engine is built and processing SVA payloads end-to-end with full provenance tracking. We are not in general availability — we are in a controlled design-partner phase, running real integrations in live environments to stress-test edge cases in attribute composition and constraint resolution. Production-grade does not mean publicly available.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does SVA differ from W3C Verifiable Credentials?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SVA is designed to complement, not replace, W3C Verifiable Credentials. The distinction is structural: W3C VCs provide a container format for credentials, but do not natively encode attribute-level verification rules, constraints, and provenance as intrinsic to the data structure. SVA fills that gap — verification logic is not applied to the record after the fact, it is part of the record\'s definition.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What does integration look like for existing systems?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Mandala layer sits between your existing data sources and downstream consumers. Originating systems do not need to change their architecture. Design-partner engagements begin with a technical brief and a scoped evaluation proposal — the first conversation is technical, not commercial.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What does a design partner engagement involve?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Design partners deploy SVA infrastructure in a live environment, work directly with the protocol under real-world constraints, and participate in structured evaluation cycles. In return, design partners have direct input into architecture and roadmap decisions before the design phase closes. This is a bilateral technical relationship, not a beta programme.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Why engage now rather than wait for general availability?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The design-partner phase is the window in which partners have direct influence over protocol design, attribute schema, and integration architecture. Once the protocol crystallises, that influence closes. The organisations working with us now are shaping the infrastructure — not inheriting it.',
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
