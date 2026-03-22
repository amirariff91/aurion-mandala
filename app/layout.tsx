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
    images: [{ url: '/logo.jpg', width: 1200, height: 630, alt: 'Aurion Mandala' }],
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
              name: 'Aurion Mandala',
              url: 'https://www.aurionmandala.com',
              logo: 'https://www.aurionmandala.com/logo.jpg',
              description: 'Aurion Mandala is an identity verification infrastructure layer built on Structured Verifiable Attributes (SVA). Currently in design-partner phase, working with select partners on deployment and validation.',
              foundingDate: '2024',
              sameAs: [],
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
        {children}
      </body>
    </html>
  );
}
