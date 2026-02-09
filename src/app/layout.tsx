import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Reality Without Belief — A Five-Book Series by Ketan Shukla",
  description:
    "A five-book journey from the failure of belief to the freedom of reality. Dismantle belief, face reality directly, expose cultural conviction, develop clear seeing, and discover what remains when there is nothing left to defend.",
  keywords: [
    "reality",
    "belief",
    "critical thinking",
    "philosophy",
    "clarity",
    "conviction",
    "book series",
    "Ketan Shukla",
  ],
  icons: {
    icon: "/favicon.svg",
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
        {children}
      </body>
    </html>
  );
}
