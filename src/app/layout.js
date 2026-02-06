export const metadata = {
  title: "Reality Without Belief — A Five-Book Series by Ketan Shukla",
  description:
    "Stop believing. Stop disbelieving. Start dealing with what is. A groundbreaking five-book series that will fundamentally transform how you see yourself, your world, and your place in it.",
  keywords:
    "philosophy, belief, reality, critical thinking, self-help, Ketan Shukla, book series, what is so",
  authors: [{ name: "Ketan Shukla" }],
  openGraph: {
    title: "Reality Without Belief — A Five-Book Series",
    description:
      "Stop believing. Stop disbelieving. Start dealing with what is. The complete five-book series.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
