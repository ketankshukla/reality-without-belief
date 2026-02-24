import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import ImageProtection from "@/components/ImageProtection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://reality.ketanshukla.com"),
  title: "Reality Without Belief — 5-Book Philosophy Series by Ketan Shukla",
  description:
    "A five-book non-fiction journey from the failure of belief to the freedom of reality. Dismantle belief, face reality directly, expose cultural conviction, develop clear seeing, and discover what remains when there is nothing left to defend. Available on Amazon Kindle, Paperback & Hardcover.",
  keywords: [
    "reality",
    "belief",
    "critical thinking",
    "philosophy",
    "clarity",
    "conviction",
    "book series",
    "Ketan Shukla",
    "non-fiction",
    "Amazon KDP",
    "philosophy books",
    "direct seeing",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Reality Without Belief — 5-Book Philosophy Series",
    description:
      "A five-book non-fiction journey from the failure of belief to the freedom of reality. Dismantle belief, face reality, develop clear seeing. By Ketan Shukla.",
    url: "https://reality.ketanshukla.com",
    siteName: "Reality Without Belief",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reality Without Belief — 5-Book Philosophy Series by Ketan Shukla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Without Belief — 5-Book Philosophy Series",
    description:
      "A five-book non-fiction journey from the failure of belief to the freedom of reality. Dismantle belief, face reality, develop clear seeing. By Ketan Shukla.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${garamond.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BookSeries",
                  name: "Reality Without Belief",
                  url: "https://reality.ketanshukla.com",
                  description:
                    "A five-book non-fiction journey from the failure of belief to the freedom of reality. Dismantle belief, face reality directly, expose cultural conviction, develop clear seeing.",
                  numberOfBooks: 5,
                  genre: ["Philosophy", "Non-Fiction", "Critical Thinking"],
                  author: {
                    "@type": "Person",
                    name: "Ketan Shukla",
                    url: "https://www.ketanshukla.com",
                    sameAs: ["https://metronagon.com"],
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Reality Without Belief",
                  url: "https://reality.ketanshukla.com",
                },
              ],
            }),
          }}
        />
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
